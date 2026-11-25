/* Rendu du site à partir de js/config.js. Aucune dépendance. */
(function () {
  const S = window.SITE, $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const el = (tag, cls, html) => { const e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; };
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const GH_ICON = '<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.37-3.87-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.76 2.69 1.25 3.35.96.1-.74.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.68 0-1.25.45-2.28 1.18-3.08-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.15 1.18a10.9 10.9 0 015.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.58.23 2.75.11 3.04.74.8 1.18 1.83 1.18 3.08 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0023.5 12C23.5 5.65 18.35.5 12 .5z"/></svg>';
  const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/";

  /* Coordonnées & liens (un lien vide n'est jamais affiché) */
  $("#heroSub").textContent = S.heroSubtitle;
  ["#cvBtn", "#cvBtn2"].forEach(s => { const a = $(s); if (a) a.href = S.cvPath; });
  const mail = "mailto:" + S.email, tel = "tel:" + S.phone.replace(/\s/g, "");
  [["#cEmail", mail, S.email], ["#aEmail", mail, S.email], ["#cPhone", tel, S.phone], ["#aPhone", tel, S.phone]].forEach(([s, h, t]) => { const a = $(s); a.href = h; a.textContent = t; });
  $("#fMail").href = mail;
  $$("[data-link]").forEach(a => { const u = S[a.dataset.link + "Url"]; if (u) a.href = u; else (a.closest(".pills li, .coords li") || a).hidden = true; });
  // si le CV est introuvable, on masque les boutons plutôt que de laisser un lien cassé
  fetch(S.cvPath, { method: "HEAD" }).then(r => { if (!r.ok) throw 0; }).catch(() => { if (location.protocol !== "file:") $$("#cvBtn,#cvBtn2").forEach(a => a.hidden = true); });

  /* À propos : repères */
  [["En cours", S.currentStudy], ["Objectif", "Alternance de 10 mois · 2 j université / 3 j entreprise"],
   ["Langues", ["Français et Portugais : Langues maternelles", "Anglais et Espagnol : Niveau B2"]]]
    .forEach(([k, v]) => $("#facts").append(el("li", "", `<b>${k}</b>${[].concat(v).map(esc).join("<br>")}`)));

  /* Compétences */
  const sk = $("#skills");
  S.skills.forEach(g => {
    const c = el("div", "card reveal", `<h3>${esc(g.title)}</h3>`), ul = el("ul", "chips");
    g.items.forEach(([n, ic]) => {
      const li = el("li", "chip", ic ? `<img src="${DEVICON + ic}" alt="" width="30" height="30" loading="lazy">` : "");
      li.append(n);
      const im = $("img", li); if (im) im.onerror = () => im.remove();
      ul.append(li);
    });
    c.append(ul); sk.append(c);
  });

  /* Carrousel de projets : flèches, points, clavier et glissement tactile */
  const vp = $("#viewport"), dots = $("#dots"); let cur = 0;
  S.projects.forEach((p, i) => { const d = el("button", "dot"); d.setAttribute("aria-label", "Projet " + p.name); d.onclick = () => show(i); dots.append(d); });
  function show(i, back) {
    const n = S.projects.length; back = back ?? i < cur; cur = (i + n) % n; const p = S.projects[cur];
    const shots = p.screenshots.map(s => `<img src="${esc(s)}" alt="Capture d'écran ${esc(p.name)}" loading="lazy">`).join("");
    vp.innerHTML = `<article class="proj${back ? " back" : ""}" style="--accent:${p.color}">
      <div class="proj-logo"><img src="${esc(p.logo)}" alt="Logo ${esc(p.name)}"></div>
      <div class="proj-body"><h3>${esc(p.name)}</h3><p>${esc(p.text)}</p>
      <ul class="tags">${p.tech.map(t => `<li>${esc(t)}</li>`).join("")}</ul>${shots ? `<div class="shots">${shots}</div>` : ""}
      <div class="proj-actions"><a class="btn" href="projet.html?id=${encodeURIComponent(p.id)}">En savoir plus</a>${p.github ? `<a class="btn gh" href="${esc(p.github)}" target="_blank" rel="noopener" aria-label="Voir le dépôt GitHub de ${esc(p.name)} (nouvel onglet)">${GH_ICON}GitHub</a>` : ""}</div></div></article>`;
    $$(".dot", dots).forEach((d, k) => { d.classList.toggle("on", k === cur); d.setAttribute("aria-current", k === cur); });
  }
  $("#prev").onclick = () => show(cur - 1, true); $("#next").onclick = () => show(cur + 1, false);
  $("#carousel").addEventListener("keydown", e => { if (e.key === "ArrowLeft") show(cur - 1, true); if (e.key === "ArrowRight") show(cur + 1, false); });
  let x0 = null;
  vp.addEventListener("touchstart", e => x0 = e.touches[0].clientX, { passive: true });
  vp.addEventListener("touchend", e => { if (x0 == null) return; const dx = e.changedTouches[0].clientX - x0; x0 = null; if (Math.abs(dx) > 50) dx < 0 ? show(cur + 1, false) : show(cur - 1, true); });
  show(0, false);

  /* Parcours : cartes alternées gauche / droite */
  const tl = $("#timeline");
  [...S.timeline].sort((a, b) => b.sort.localeCompare(a.sort)).forEach(t => {
    const body = t.points ? `<ul>${t.points.map(x => `<li>${esc(x)}</li>`).join("")}</ul>` : t.text ? `<p>${esc(t.text)}</p>` : "";
    const li = el("li", "tl reveal", `<div class="card">${t.logo ? `<img src="${esc(t.logo)}" alt="Logo ${esc(t.org)}" loading="lazy">` : ""}
      <div class="meta"><time>${esc(t.date)}</time><span class="kind">${esc(t.label)}</span></div><h3>${esc(t.title)}</h3><div class="org">${esc(t.org)}</div>${body}</div>`);
    li.dataset.type = t.type; tl.append(li);
  });
  const layout = () => $$(".tl:not([hidden])").forEach((li, i) => { li.classList.toggle("l", i % 2 === 0); li.classList.toggle("r", i % 2 === 1); });
  layout();
  $$(".tab").forEach(b => b.onclick = () => {
    $$(".tab").forEach(x => x.classList.toggle("on", x === b));
    $$(".tl").forEach(li => li.hidden = b.dataset.f !== "all" && li.dataset.type !== b.dataset.f);
    layout();
  });

  /* Passions : image, titre et texte (config.js) */
  S.passions.forEach(p => {
    const c = el("article", "card passion reveal", `${p.image ? `<figure><img src="${esc(p.image)}" alt="${esc(p.alt || p.title)}" loading="lazy"></figure>` : ""}
      <div class="txt"><h3>${esc(p.title)}</h3><p>${esc(p.text)}</p></div>`);
    const im = $("img", c); if (im) im.onerror = () => im.closest("figure").remove();
    $("#passionsList").append(c);
  });
  /* Galerie optionnelle */
  const gal = $("#gallery"), lb = $("#lightbox");
  S.photos.forEach(p => {
    const b = el("button", "tile", `<img src="${esc(p.src)}" alt="${esc(p.alt || "Photographie")}" loading="lazy">`);
    b.onclick = () => { $("img", lb).src = p.src; $("img", lb).alt = p.alt || ""; lb.hidden = false; $("#lbClose").focus(); }; gal.append(b);
  });
  S.videos.forEach(v => { const vd = el("video"); vd.controls = true; vd.preload = "metadata"; vd.src = v.src; vd.title = v.title || ""; $("#videos").append(vd); });
  const closeLb = () => lb.hidden = true; $("#lbClose").onclick = closeLb; lb.onclick = e => { if (e.target === lb) closeLb(); };
  document.addEventListener("keydown", e => { if (e.key === "Escape") closeLb(); });

  /* Menu mobile, lien actif, animations au scroll */
  const burger = $("#burger"), nav = $("nav", $("#nav"));
  const setMenu = o => { nav.classList.toggle("open", o); burger.setAttribute("aria-expanded", o); };
  burger.onclick = () => setMenu(!nav.classList.contains("open")); $$("#menu a").forEach(a => a.onclick = () => setMenu(false));
  const links = $$("#menu a");
  const so = new IntersectionObserver(es => es.forEach(en => { if (en.isIntersecting) links.forEach(a => a.classList.toggle("on", a.hash === "#" + en.target.id)); }), { rootMargin: "-45% 0px -50% 0px" });
  $$("main section[id]").forEach(s => so.observe(s));
  const io = new IntersectionObserver(es => es.forEach(en => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } }), { threshold: .12 });
  $$(".reveal").forEach(r => io.observe(r));
})();
