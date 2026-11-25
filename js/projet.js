/* Page détaillée d'un projet : projet.html?id=<id> (données lues dans js/config.js → projects[].page) */
(function () {
  const S = window.SITE, main = document.getElementById("projet");
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const p = S.projects.find(x => x.id === new URLSearchParams(location.search).get("id"));
  if (!p) {
    main.innerHTML = `<div class="pj-card"><h1>Projet introuvable</h1><div class="btns"><a class="btn" href="index.html#projets">Retour aux projets</a></div></div>`;
    return;
  }
  document.title = `${p.name} – Tony Oliveira`;
  const d = p.page || {};
  const GH_ICON = '<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.37-3.87-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.76 2.69 1.25 3.35.96.1-.74.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.68 0-1.25.45-2.28 1.18-3.08-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.15 1.18a10.9 10.9 0 015.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.58.23 2.75.11 3.04.74.8 1.18 1.83 1.18 3.08 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0023.5 12C23.5 5.65 18.35.5 12 .5z"/></svg>';
  const list = (a, cls) => `<ul class="${cls}">${a.map(x => `<li>${esc(x)}</li>`).join("")}</ul>`;
  const sec = (title, body, cls = "") => body ? `<section class="pj-sec reveal"><h2 class="glow">${title}</h2>${cls ? `<div class="pj-body">${body}</div>` : body}</section>` : "";

  const meta = (d.meta || []).map(([k, v]) => `<li><b>${esc(k)}</b>${esc(v)}</li>`).join("");
  const legacyShots = (p.screenshots || []).map(s => ({ src: s, alt: `Capture d'écran ${p.name}` }));
  const shots = (d.shots || legacyShots);

  const context = (d.context || []).map(t => `<p>${esc(t)}</p>`).join("") +
    (d.diagnostic ? `<h3>Ce que nous avons constaté</h3>${list(d.diagnostic, "pj-list")}` : "") +
    (d.problem ? `<blockquote class="pj-quote"><b>Problématique</b>${esc(d.problem)}</blockquote>` : "");

  const features = (d.features || []).map(([t, x]) => `<article class="pj-feat"><h3>${esc(t)}</h3><p>${esc(x)}</p></article>`).join("");
  const stack = (d.stack || []).map(([g, items]) => `<div class="pj-stack"><h3>${esc(g)}</h3><ul class="tags">${items.map(i => `<li>${esc(i)}</li>`).join("")}</ul></div>`).join("");

  const tiles = shots.map((s, i) => `<figure class="pj-shot"><button type="button" data-i="${i}" aria-label="Agrandir : ${esc(s.caption || s.alt)}"><img src="${esc(s.src)}" alt="${esc(s.alt)}" loading="lazy"></button>${s.caption ? `<figcaption>${esc(s.caption)}</figcaption>` : ""}</figure>`).join("");
  const schema = d.schema ? `<figure class="pj-schema"><button type="button" data-schema aria-label="Agrandir : ${esc(d.schema.caption)}"><img src="${esc(d.schema.src)}" alt="${esc(d.schema.alt)}" loading="lazy"></button><figcaption>${d.database ? `<b>${esc(d.schema.caption)}.</b> ${esc(d.database)}` : esc(d.schema.caption)}</figcaption></figure>` : "";
  const gallery = (tiles ? `<div class="pj-grid${shots.length && shots[0].src.includes("maquette") ? " wide" : ""}">${tiles}</div>` : "") + schema;

  const challenges = (d.challenges || []).map(([t, a, b]) => `<article class="pj-chal"><h3>${esc(t)}</h3><p><span>Difficulté</span>${esc(a)}</p><p><span class="ok">Solution</span>${esc(b)}</p></article>`).join("");
  const bilan = (d.bilan || []).map(t => `<p>${esc(t)}</p>`).join("") + (d.next ? `<h3>Pistes d'amélioration</h3>${list(d.next, "pj-list")}` : "");

  main.innerHTML = `<article style="--accent:${p.color}">
    <div class="pj-card">
      <div class="pj-head"><img src="${esc(p.logo)}" alt="Logo ${esc(p.name)}"><div><h1>${esc(p.name)}</h1><p>${esc(p.text)}</p>${(p.details || []).map(x => `<p>${esc(x)}</p>`).join("")}</div></div>
      ${meta ? `<ul class="pj-meta">${meta}</ul>` : ""}
    </div>
    ${sec("Contexte du projet", context, "card-sec")}
    ${sec("Objectifs", d.objectives ? list(d.objectives, "pj-list") : "", "card-sec")}
    ${sec("Fonctionnalités principales", features ? `<div class="pj-feats">${features}</div>` : "")}
    ${sec("Technologies utilisées", stack ? `<div class="pj-stacks">${stack}</div>` : "")}
    ${sec(d.shotsTitle || "Captures d'écran", gallery)}
    ${sec("Difficultés et solutions", challenges ? `<div class="pj-chals">${challenges}</div>` : "")}
    ${sec("Ce que j'ai appris", d.learned ? list(d.learned, "pj-list") : "", "card-sec")}
    ${sec("Bilan", bilan, "card-sec")}
    <div class="btns pj-end">${p.github ? `<a class="btn gh-solid" href="${esc(p.github)}" target="_blank" rel="noopener">${GH_ICON}Voir sur GitHub</a>` : ""}${p.url ? `<a class="btn" href="${esc(p.url)}" target="_blank" rel="noopener">Voir le projet</a>` : ""}<a class="btn ghost" href="index.html#projets">← Retour aux projets</a></div>
  </article>`;

  /* Agrandissement des images */
  const lb = document.getElementById("lightbox"), lbImg = lb.querySelector("img");
  const open = (src, alt) => { lbImg.src = src; lbImg.alt = alt || ""; lb.hidden = false; document.getElementById("lbClose").focus(); };
  main.querySelectorAll(".pj-shot button, .pj-schema button").forEach(b => b.onclick = () => { const im = b.querySelector("img"); open(im.src, im.alt); });
  const close = () => lb.hidden = true;
  document.getElementById("lbClose").onclick = close; lb.onclick = e => { if (e.target === lb) close(); };
  document.addEventListener("keydown", e => { if (e.key === "Escape") close(); });

  /* Animations d'apparition (comme sur la page d'accueil) */
  const io = new IntersectionObserver(es => es.forEach(en => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } }), { threshold: .08 });
  main.querySelectorAll(".reveal").forEach(r => io.observe(r));
})();
