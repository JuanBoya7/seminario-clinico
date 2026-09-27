/* ============================================================
   PDF RELLENABLE DE UNA ACTIVIDAD
   ============================================================

   Convierte el formulario de la página en un PDF con campos editables:
   el texto de la actividad (títulos, enunciados, ayudas, opciones) queda
   fijo y cada respuesta es un campo que se puede corregir, borrar o
   ampliar después en el teléfono o en el computador.

   Recorre, en orden, los bloques visibles de la actividad (.block) y
   traduce cada elemento:
     h2, h3, h4           → títulos
     .card-label          → enunciado en negrita
     .card-help, p, li    → texto
     input de texto       → campo de una línea
     textarea             → campo de varias líneas
     select               → lista desplegable
     radio                → grupo de opciones
     checkbox             → casilla

   Uso:  await PDFActividad.compartir({ archivo: "nombre.pdf" });
   En celulares abre el menú de compartir; en computador, descarga.
   Devuelve "compartido", "descargado" o "cancelado".
   ============================================================ */
(function () {
  const LIB = "https://cdn.jsdelivr.net/npm/pdf-lib@1.17.1/dist/pdf-lib.min.js";
  let carga = null;
  function cargarLib() {
    if (window.PDFLib) return Promise.resolve();
    return carga || (carga = new Promise((ok, mal) => {
      const s = document.createElement("script");
      s.src = LIB;
      s.onload = ok;
      s.onerror = () => { carga = null; mal(new Error("No se pudo cargar la librería de PDF (¿sin conexión?).")); };
      document.head.appendChild(s);
    }));
  }

  const esMovil = () => /Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent) ||
    (navigator.maxTouchPoints > 1 && !window.matchMedia("(pointer:fine)").matches);

  // Página A4 en puntos.
  const AN = 595.28, AL = 841.89, MI = 50, MD = 50, MS = 56, MB = 60;
  const ANCHO = AN - MI - MD;
  const TINTA = [0.12, 0.16, 0.18], SUAVE = [0.40, 0.45, 0.48], ACENTO = [0.10, 0.36, 0.36];

  const visible = el => el.getClientRects().length > 0 &&
    getComputedStyle(el).visibility !== "hidden";
  const limpio = t => (t || "").replace(/\s+/g, " ").trim();

  // Texto de un elemento sin los controles ni el marcador de obligatorio.
  function textoDe(el) {
    // innerText respeta la maquetación (separa los bloques); si hay controles
    // adentro se usa una copia sin ellos.
    if (!el.querySelector("input, select, textarea, button, .required-mark") && el.innerText !== undefined)
      return limpio(el.innerText);
    const c = el.cloneNode(true);
    c.querySelectorAll("input, select, textarea, button, script, style, .required-mark").forEach(n => n.remove());
    return limpio(c.textContent);
  }

  async function construir(opc) {
    await cargarLib();
    const { PDFDocument, StandardFonts, rgb } = window.PDFLib;
    const doc = await PDFDocument.create();
    const form = doc.getForm();
    const F = await doc.embedFont(StandardFonts.Helvetica);
    const FB = await doc.embedFont(StandardFonts.HelveticaBold);
    const FI = await doc.embedFont(StandardFonts.HelveticaOblique);
    const color = c => rgb(c[0], c[1], c[2]);

    // Las fuentes estándar del PDF solo cubren el alfabeto latino
    // (tildes, ñ, ¿, «» sí). Lo demás se reemplaza por un equivalente.
    const EQUIV = { "≥": ">=", "≤": "<=", "→": "->", "←": "<-", "✓": "v", "✔": "v", "✗": "x",
      "−": "-", "≈": "~", "×": "x", " ": " ", " ": " ", " ": " " };
    const cache = new Map();
    function seguro(t) {
      let r = "";
      for (const ch of String(t || "")) {
        if (ch === "\n") { r += ch; continue; }
        if (!cache.has(ch)) {
          let v = EQUIV[ch];
          if (v === undefined) { try { F.encodeText(ch); v = ch; } catch (e) { v = "?"; } }
          cache.set(ch, v);
        }
        r += cache.get(ch);
      }
      return r;
    }

    function partir(t, fuente, tam, ancho) {
      const lineas = [];
      for (const parrafo of seguro(t).split("\n")) {
        let linea = "";
        for (const palabra of parrafo.split(" ")) {
          const prueba = linea ? linea + " " + palabra : palabra;
          if (fuente.widthOfTextAtSize(prueba, tam) <= ancho || !linea) linea = prueba;
          else { lineas.push(linea); linea = palabra; }
        }
        lineas.push(linea);
      }
      return lineas;
    }

    let pag, y;
    const paginas = [];
    function nuevaPagina() { pag = doc.addPage([AN, AL]); paginas.push(pag); y = AL - MS; }
    function espacio(h) { if (y - h < MB) nuevaPagina(); }
    nuevaPagina();

    function texto(t, { fuente = F, tam = 10, col = TINTA, antes = 0, despues = 3, sangria = 0 } = {}) {
      t = limpio(t); if (!t) return;
      y -= antes;
      const alto = tam * 1.32;
      for (const l of partir(t, fuente, tam, ANCHO - sangria)) {
        espacio(alto);
        pag.drawText(l, { x: MI + sangria, y: y - tam, size: tam, font: fuente, color: color(col) });
        y -= alto;
      }
      y -= despues;
    }

    let n = 0;
    const nombre = base => (String(base || "campo").replace(/[^A-Za-z0-9_-]/g, "_") + "_" + (++n));
    const estiloCampo = { borderColor: color([0.70, 0.76, 0.78]), backgroundColor: color([0.96, 0.98, 0.98]), borderWidth: 0.8 };

    function campoTexto(el, multilinea) {
      const valor = seguro(el.value || "");
      const tam = 10;
      let alto;
      if (multilinea) {
        const lineas = Math.max(partir(valor, F, tam, ANCHO - 8).length + 2, Number(el.getAttribute("rows")) || 0, 4);
        alto = Math.min(lineas * tam * 1.2 + 8, AL - MS - MB - 20);
      } else alto = 20;
      espacio(alto + 4);
      const tf = form.createTextField(nombre(el.id || el.name));
      if (multilinea) tf.enableMultiline();
      tf.setText(valor);
      tf.addToPage(pag, { x: MI, y: y - alto, width: ANCHO, height: alto, font: F, ...estiloCampo });
      tf.setFontSize(tam);
      y -= alto + 8;
    }

    function campoLista(el) {
      espacio(24);
      const dd = form.createDropdown(nombre(el.id || el.name));
      const ops = [...el.options].map(o => seguro(limpio(o.textContent)));
      dd.addOptions(ops);
      const sel = el.selectedIndex >= 0 ? ops[el.selectedIndex] : "";
      if (sel && el.value) dd.select(sel);
      dd.addToPage(pag, { x: MI, y: y - 20, width: Math.min(ANCHO, 260), height: 20, font: F, ...estiloCampo });
      dd.setFontSize(10);
      y -= 28;
    }

    const grupos = new Map();
    // Texto que acompaña a una casilla u opción: su <label>, el label[for],
    // o el contenedor inmediato si la casilla es su único control.
    function rotuloDe(el) {
      const lab = el.closest("label");
      if (lab) return [lab, textoDe(lab)];
      const par = el.parentElement;
      if (par && par.querySelectorAll("input, select, textarea").length === 1 && textoDe(par)) return [par, textoDe(par)];
      const lf = el.id && document.querySelector('label[for="' + el.id + '"]');
      if (lf) return [lf, textoDe(lf)];
      return [null, ""];
    }

    // Opciones cortas del mismo grupo (Sí / No / …) van en una sola fila.
    function filaDeOpciones(el) {
      if (el.type !== "radio" || !el.name) return false;
      const todos = [...document.querySelectorAll('input[type=radio][name="' + el.name + '"]')].filter(visible);
      const rot = todos.map(r => rotuloDe(r));
      if (todos.length < 2 || rot.some(([, t]) => !t || t.length > 28)) return false;
      const tam = 10, caja = 11;
      const anchos = rot.map(([, t]) => 18 + F.widthOfTextAtSize(seguro(t), tam) + 16);
      if (anchos.reduce((a, b) => a + b, 0) > ANCHO) return false;
      espacio(16);
      const rg = form.createRadioGroup(nombre(el.name));
      grupos.set(el.name, rg);
      let x = MI;
      todos.forEach((r, i) => {
        const [cont, t] = rot[i];
        if (cont) { hechos.add(cont); cont.querySelectorAll("*").forEach(n => hechos.add(n)); }
        hechos.add(r);
        const valor = seguro(r.value || t).replace(/[()\\]/g, "") || ("op" + i);
        rg.addOptionToPage(valor, pag, { x, y: y - caja - 0.5, width: caja, height: caja, ...estiloCampo });
        if (r.checked) rg.select(valor);
        pag.drawText(seguro(t), { x: x + 18, y: y - tam, size: tam, font: F, color: color(TINTA) });
        x += anchos[i];
      });
      y -= 18;
      return true;
    }

    function opcion(el) {
      if (filaDeOpciones(el)) return;
      const [cont, t] = rotuloDe(el);
      if (cont) { hechos.add(cont); cont.querySelectorAll("*").forEach(x => hechos.add(x)); }
      const tam = 10, caja = 11;
      const lineas = partir(t, F, tam, ANCHO - 20);
      espacio(Math.max(lineas.length * tam * 1.32, caja) + 4);
      const top = y;
      const rect = { x: MI, y: top - caja - 0.5, width: caja, height: caja, ...estiloCampo };
      if (el.type === "radio") {
        const clave = el.name || el.id;
        let rg = grupos.get(clave);
        if (!rg) { rg = form.createRadioGroup(nombre(clave)); grupos.set(clave, rg); }
        const valor = seguro(el.value || t).replace(/[()\\]/g, "") || ("op" + n);
        rg.addOptionToPage(valor, pag, rect);
        if (el.checked) rg.select(valor);
      } else {
        const cb = form.createCheckBox(nombre(el.id || el.name));
        cb.addToPage(pag, rect);
        if (el.checked) cb.check();
      }
      lineas.forEach((l, i) => pag.drawText(l, { x: MI + 18, y: top - tam - i * tam * 1.32, size: tam, font: F, color: color(TINTA) }));
      y = top - Math.max(lineas.length * tam * 1.32, caja) - 4;
    }

    // Encabezado.
    const titulo = opc.titulo || limpio((document.querySelector("h1") || {}).textContent) || document.title;
    texto(titulo, { fuente: FB, tam: 17, col: TINTA, despues: 2 });
    texto("PDF rellenable · generado el " + new Date().toLocaleString("es-CO"),
      { fuente: FI, tam: 8.5, col: SUAVE, despues: 10 });

    const BLOQUES = "p, li, div, ul, ol, label, table, tr, blockquote, section, h1, h2, h3, h4, h5, fieldset, details, summary";
    // Recorrido de la actividad.
    const raiz = opc.raiz || document;
    const bloques = [...raiz.querySelectorAll(".block")].filter(visible);
    const hechos = new Set();
    for (const b of bloques) {
      const recorrido = document.createTreeWalker(b, NodeFilter.SHOW_ELEMENT);
      let el = b;
      while ((el = recorrido.nextNode())) {
        if (hechos.has(el)) continue;
        if (el.closest("button, script, style, .no-pdf")) continue;
        if (!visible(el)) continue;
        const tag = el.tagName;
        const marcar = () => el.querySelectorAll("*").forEach(x => hechos.add(x));
        if (tag === "H2") { texto(el.textContent, { fuente: FB, tam: 13, col: ACENTO, antes: 10, despues: 4 }); marcar(); }
        else if (tag === "H3" || tag === "H4") { texto(textoDe(el), { fuente: FB, tam: 11, col: TINTA, antes: 6, despues: 3 }); marcar(); }
        else if (el.classList.contains("card-label")) { texto(textoDe(el), { fuente: FB, tam: 10.5, antes: 6, despues: 2 }); marcar(); }
        else if (el.classList.contains("card-help")) { texto(textoDe(el), { fuente: FI, tam: 9, col: SUAVE, despues: 4 }); marcar(); }
        else if (tag === "TEXTAREA") campoTexto(el, true);
        else if (tag === "SELECT") campoLista(el);
        else if (tag === "INPUT") {
          const tipo = (el.type || "text").toLowerCase();
          if (tipo === "radio" || tipo === "checkbox") opcion(el);
          else if (!["hidden", "button", "submit", "file", "range", "color"].includes(tipo)) campoTexto(el, false);
        }
        // Cualquier otro bloque de texto sin controles ni bloques adentro
        // (párrafos, ítems, etiquetas de campos, encabezados de grupo).
        else if (!el.querySelector("input, select, textarea, " + BLOQUES) && textoDe(el) &&
                 !el.closest("label:has(input)")) {
          const esLabel = tag === "LABEL";
          texto((tag === "LI" ? "• " : "") + textoDe(el), {
            fuente: esLabel ? FB : F, tam: esLabel ? 9.5 : 9.5,
            sangria: tag === "LI" ? 8 : 0, antes: esLabel ? 2 : 0, despues: 3 });
          marcar();
        }
      }
    }

    // Pie con número de página y nota de uso.
    const total = paginas.length;
    paginas.forEach((p, i) => {
      p.drawLine({ start: { x: MI, y: 40 }, end: { x: AN - MD, y: 40 }, thickness: 0.5, color: color([0.79, 0.84, 0.84]) });
      p.drawText(seguro("Campos editables: se pueden corregir o ampliar en Adobe Acrobat Reader, Google Drive o el visor de PDF del teléfono."),
        { x: MI, y: 29, size: 7, font: F, color: color(SUAVE) });
      const num = (i + 1) + " / " + total;
      p.drawText(num, { x: AN - MD - F.widthOfTextAtSize(num, 7.5), y: 29, size: 7.5, font: FB, color: color(SUAVE) });
    });

    form.updateFieldAppearances(F);
    doc.setTitle(seguro(titulo));
    doc.setLanguage("es-CO");
    return new Blob([await doc.save()], { type: "application/pdf" });
  }

  async function compartir(opc) {
    const blob = await construir(opc || {});
    // Nombre seguro para cualquier teléfono: sin tildes ni espacios.
    const nombreArchivo = (opc.archivo || "actividad.pdf").normalize("NFD").replace(/[\u0300-\u036f]/g, "")
      .replace(/[^A-Za-z0-9._-]+/g, "-").replace(/-+/g, "-");
    const archivo = new File([blob], nombreArchivo, { type: "application/pdf" });
    if (esMovil()) {
      try {
        if (navigator.canShare && navigator.canShare({ files: [archivo] })) {
          await navigator.share({ files: [archivo], title: archivo.name });
          return "compartido";
        }
      } catch (err) {
        if (err && err.name === "AbortError") return "cancelado";
      }
    }
    const url = URL.createObjectURL(archivo);
    const a = document.createElement("a");
    a.href = url; a.download = archivo.name;
    document.body.appendChild(a); a.click(); a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 2000);
    return "descargado";
  }

  window.PDFActividad = { construir, compartir };
})();
