
window.SITE = {
  name: "Tony Oliveira",
  email: "tm.olv05@gmail.com",
  phone: "06 15 45 36 34",
  linkedinUrl: "https://www.linkedin.com/in/tonyolv/",
  githubUrl: "https://github.com/Tonyy05",
  cvPath: "assets/documents/CV_Tony.pdf",
  currentStudy: "L3 MIAGE – Université Paris Cité",
  heroSubtitle: "Étudiant en Licence 3 MIAGE – Université Paris Cité",

  /* Compétences : icon = nom du dossier Devicon (https://devicon.dev). Sans icon = pastille texte. */
  skills: [
    { title: "Développement", items: [
      ["Python","python/python-original.svg"],["Java","java/java-original.svg"],["C","c/c-original.svg"],
      ["JavaScript","javascript/javascript-original.svg"],["PHP","php/php-original.svg"],["HTML","html5/html5-original.svg"],
      ["CSS","css3/css3-original.svg"],["VBA"],["PowerShell","powershell/powershell-original.svg"],["Node.js","nodejs/nodejs-original.svg"],
      ["Kotlin","kotlin/kotlin-original.svg"]] },
    { title: "Data et analyse", items: [
      ["Python","python/python-original.svg"],["Pandas","pandas/pandas-original.svg"],["NumPy","numpy/numpy-original.svg"],
      ["Scikit-learn","scikitlearn/scikitlearn-original.svg"],["Machine Learning"],["Data Cleaning"],["Data Visualization"],["SQL"]] },
    { title: "Bases de données & SI", items: [
      ["MySQL","mysql/mysql-original.svg"],["Oracle","oracle/oracle-original.svg"],["PL/SQL"],["MongoDB","mongodb/mongodb-original.svg"],
      ["Modélisation MCD / MLD"],["Sage X3 (ERP)"],["Talend (ETL)"]] },
    { title: "Gestion de projet", items: [
      ["Agile / Scrum"],["Trello","trello/trello-plain.svg"],["Notion","notion/notion-original.svg"],
      ["Gestion des besoins"],["Suivi de projet"],["Coordination équipes métiers"]] },
    { title: "Systèmes et réseaux", items: [
      ["Linux","linux/linux-original.svg"],["Windows","windows11/windows11-original.svg"],["VirtualBox","virtualbox/virtualbox-original.svg"],
      ["Cisco Packet Tracer"],["Wireshark","wireshark/wireshark-original.svg"],["GLPI"],["TCP/IP"],["VLAN"],["DHCP"]] },
    { title: "Outils", items: [
      ["Git","git/git-original.svg"],["GitHub","github/github-original.svg"],["GitLab","gitlab/gitlab-original.svg"],
      ["JetBrains","jetbrains/jetbrains-original.svg"],["VS Code","vscode/vscode-original.svg"],["WinSCP"],["phpMyAdmin"],["VMware"]] }
  ],

  /* Projets : ajoute un objet pour ajouter une carte au carrousel. */
  projects: [
    { id: "ecotri", name: "EcoTri App", color: "#0B9359", logo: "assets/images/ecotri/logo.png",
      text: "Application mobile ludique et éducative visant à sensibiliser les habitants au tri des déchets grâce à des fonctionnalités interactives.",
      tech: ["Android","Java / Kotlin","Node.js","MySQL","GitHub","Canva","Figma","UX/UI","Notion","méthodes agiles Scrum"],
      details: [],
      screenshots: [],              // miniatures sur la carte du carrousel (laisser vide pour une carte plus sobre)
      github: "https://github.com/Tonyy05/EcoTri-APP",
      url: "",
      /* Contenu de la page détaillée (projet.html?id=ecotri) */
      page: {
        meta: [["Cadre","SAE S5 - BUT 3 Informatique"],["Équipe","4 étudiants"],["Plateforme","Application Android"]],
        context: [
          "Dans beaucoup de villes, les déchets jetés par terre, les erreurs de tri et la méconnaissance des jours de collecte restent un vrai problème. Il vient souvent d'un manque d'information plus que de mauvaise volonté.",
          "Notre équipe a donc imaginé une application Android qui informe, sensibilise et accompagne les habitants, avec une approche éducative et ludique. Elle s'adresse à un public large (adolescents, adultes, familles, étudiants, seniors) et peut aussi servir d'outil complémentaire aux collectivités locales."
        ],
        problem: "Comment inciter les habitants d'une ville à adopter de meilleurs gestes de tri grâce à un outil numérique ludique, accessible et moderne ?",
        objectives: [
          "Sensibiliser à l'importance du tri sélectif et d'une gestion responsable des déchets",
          "Éduquer de façon ludique grâce à un mini-jeu et à des quiz",
          "Motiver les utilisateurs avec un système de scores et un classement",
          "Favoriser une démarche communautaire et participative autour de l'écologie"
        ],
        features: [
          ["Comptes et authentification","Inscription par e-mail et mot de passe, échanges sécurisés via l'API REST, et distinction entre utilisateurs et administrateurs."],
          ["Calendrier de collecte","Prochaines dates de ramassage selon la localisation et le type de bac, modifiables par les administrateurs (en cas de grève par exemple)."],
          ["Notifications","Rappel la veille d'une collecte à une heure définie. L'utilisateur garde la main grâce à un système de consentement."],
          ["Mini-jeu de tri","Glisser-déposer chronométré : chaque déchet doit finir dans le bon bac. Une partie par jour, score selon la rapidité et la précision."],
          ["Quiz et classement","QCM sur le tri qui rapportent des points bonus, et classement public des meilleurs scores, remis à zéro chaque mois."],
          ["Déchèteries et avis","Recherche de déchèteries avec fiche détaillée, avis des utilisateurs et modération par les administrateurs."],
          ["Demande de bac","Formulaire (type de bac, adresse, commentaire) transmis à la mairie, qui accepte ou refuse la demande."],
          ["Espace administrateur","Gestion du calendrier, des demandes de bacs et des avis, réservée aux comptes ayant le rôle administrateur."]
        ],
        stack: [
          ["Application mobile",["Android Studio","Java / Kotlin"]],
          ["Back-end et données",["API REST","MySQL (base distante)","phpMyAdmin"]],
          ["Conception et organisation",["Canva (maquettes)","Notion","GitHub","Discord"]]
        ],
        shots: [
          { src: "assets/images/ecotri/connexion.png", alt: "Écran de connexion", caption: "Connexion" },
          { src: "assets/images/ecotri/calendrier.png", alt: "Écran du calendrier de collecte", caption: "Calendrier de collecte" },
          { src: "assets/images/ecotri/mini-jeu.png", alt: "Écran du mini-jeu de tri", caption: "Mini-jeu de tri" },
          { src: "assets/images/ecotri/demande-bac.png", alt: "Écran de demande de bac", caption: "Demande de bac" },
          { src: "assets/images/ecotri/admin.png", alt: "Espace administrateur", caption: "Espace administrateur" }
        ],
        schema: { src: "assets/images/ecotri/base-de-donnees.png", alt: "Schéma de la base de données EcoTri", caption: "Schéma de la base de données" },
        challenges: [
          ["Une interface simple et agréable","Trouver le bon équilibre entre simplicité, lisibilité et esthétique avec autant de fonctionnalités.","Des maquettes Canva avant le développement, puis des tests et des retouches successives pour améliorer l'ergonomie."],
          ["Un calendrier fiable","Des erreurs de synchronisation et d'affichage des événements au départ, surtout lors des ajouts et des modifications.","Une meilleure gestion des dates et des vérifications de cohérence sur les données enregistrées."],
          ["Le temps et le travail d'équipe","Un projet mené en parallèle d'autres travaux et évaluations, avec des disponibilités différentes selon les membres.","Une répartition plus claire des tâches avec Notion et une communication régulière sur Discord."]
        ],
        learned: [
          "Concevoir une application mobile complète, de l'idée jusqu'à la version finale, en partant de zéro",
          "Faire communiquer une application Android, une API REST et une base MySQL distante",
          "Gérer des droits d'accès (utilisateur / administrateur) et sécuriser les échanges",
          "Chercher des solutions par moi-même et travailler en équipe avec GitHub, Notion et Discord"
        ],
        bilan: [
          "Le résultat est cohérent avec les objectifs fixés : une application complète, intuitive et engageante, qui répond bien à la problématique de départ. Le jeu, le quiz et le calendrier rendent la démarche plus vivante et rapprochent les habitants des initiatives locales.",
          "Malgré les contraintes de temps, ce projet a renforcé nos compétences techniques comme notre organisation d'équipe."
        ],
        next: ["Badges et récompenses virtuelles pour renforcer l'engagement","Signalement des dépôts sauvages avec photo et géolocalisation précise","Statistiques personnelles sur l'impact écologique de chaque utilisateur"]
      } },
    { id: "ami", name: "Site web AMI-Nationale", color: "#F20F0C", logo: "assets/images/ami/logo.jpg",
      text: "Refonte du site de l'association pour moderniser son image, améliorer l'expérience utilisateur et faciliter la présentation de ses activités et de ses missions.",
      tech: ["HTML / CSS / JS / PHP","Bootstrap","GitHub","Canva","Figma","UX/UI","Trello","responsive design"],
      details: [],
      screenshots: [],
      github: "https://github.com/Tonyy05/Ami-nationale",
      url: "",
      page: {
        meta: [["Cadre","SAE S3 - BUT 2 Informatique"],["Équipe","3 étudiants"],["Mon rôle","Analyse critique, maquettage du site puis développement du site"]],
        context: [
          "L'A.M.I (Association nationale de défense des Malades, Invalides et handicapés) lutte pour que les personnes en situation de handicap soient mieux intégrées dans la société : école, travail, culture… Nous l'avons choisie parce que sa cause nous tenait à cœur, et que son site avait de vraies marges de progression.",
          "Le projet s'est déroulé en trois temps : l'analyse critique du site existant et son maquettage, puis le développement d'un site dynamique en PHP, et enfin la conception de la base de données."
        ],
        problem: "Comment rendre le site de l'association plus clair, plus attractif et plus utile, sans le dénaturer ?",
        diagnostic: ["Deux menus de navigation qui désorientent","Des pages presque vides (« Bientôt ») à côté de pages surchargées","Aucune image et peu de couleurs","Page « Adhérer » confuse, alors que c'est l'une des plus importantes","Un pied de page de la même couleur que le site, et trop peu de réseaux sociaux"],
        objectives: [
          "Une seule barre de navigation, simple et visible : Le Journal, Actualités, Adhérer, Contact",
          "Une page Actualités avec recherche par titre, auteur ou date, pour désencombrer l'accueil",
          "Adhésion et paiement intégrés au site plutôt que sur un site externe",
          "Un logo épuré, des images et un pied de page bien distinct"
        ],
        features: [
          ["Comptes et rôles","Connexion adhérent ou administrateur. Le menu s'adapte : Connexion / Déconnexion, onglet Sondage pour l'adhérent, Dashboard pour l'administrateur."],
          ["Adhésion en ligne","Formulaire avec choix du type d'adhésion, vérification du mot de passe, possibilité de faire un don et suggestion automatique des adresses."],
          ["Actualités","Articles regroupés sur une page dédiée, avec barre de recherche par titre, auteur ou date."],
          ["Sondage et dashboard","Un adhérent ne peut répondre qu'une fois au sondage. L'administrateur consulte des statistiques détaillées sur les réponses."],
          ["Contact","Formulaire ouvert à tous (adhérents ou non), avec contrôle des champs obligatoires."],
          ["Interface responsive","Toutes les pages s'adaptent à la taille de l'écran, avec des animations au survol dans le menu."]
        ],
        stack: [
          ["Front-end",["HTML","CSS","JavaScript"]],
          ["Back-end et données",["PHP","MariaDB"]],
          ["Conception et organisation",["Canva/Figma (maquettes)","PhpStorm","GitHub","Trello","Discord"]]
        ],
        shotsTitle: "Maquettes et conception",
        shots: [
          { src: "assets/images/ami/maquette-accueil.png", alt: "Maquette Figma de la page d'accueil", caption: "Maquette de l'accueil" },
          { src: "assets/images/ami/maquette-actualites.png", alt: "Maquette Figma de la page Actualités", caption: "Maquette des actualités" },
          { src: "assets/images/ami/maquette-adherer.png", alt: "Maquette Figma de la page Adhérer", caption: "Maquette de l'adhésion" },
          { src: "assets/images/ami/maquette-contact.png", alt: "Maquette Figma de la page Contact", caption: "Maquette du contact" }
        ],
        schema: { src: "assets/images/ami/base-de-donnees.png", alt: "Modèle conceptuel de données du site", caption: "Modèle conceptuel de données" },
        database: "Une table de contacts indépendante, des adhérents (e-mail unique), un lien adhésion / type d'adhésion avec les tarifs, des utilisateurs avec rôle et mot de passe haché, et les réponses au sondage stockées en JSON.",
        challenges: [
          ["Prendre en main Figma","Un outil nouveau pour toute l'équipe : Canva, d'abord envisagé, ne convenait pas à une refonte de site.dig TXT _github-pages-challenge-Tonyy05.tonyvlo.fr +short","J'ai dessiné mes idées à la main pour que mes coéquipiers les reproduisent sur Figma, et chacun a pris les tâches où il était le plus à l'aise."],
          ["PHP et base de données","Le PHP et MariaDB étaient nouveaux pour une partie de l'équipe, la base de données surtout.","Une mise à niveau pendant le projet, et une répartition des missions selon les points forts de chacun."],
          ["Le temps","Les DST, la SAE et les autres matières se sont accumulés, faute d'avoir pris de l'avance dès le départ.","Un gros effort d'organisation et de travail pour rattraper le retard."]
        ],
        learned: [
          "Analyser un site existant (éditorial, graphique, ergonomique, technique) et en tirer des priorités",
          "Maquetter avec Figma et travailler le parcours utilisateur",
          "Développer un site dynamique en PHP : sessions, rôles, formulaires, validation des saisies",
          "Modéliser une base de données et choisir un stockage adapté (colonnes classiques ou JSON)"
        ],
        bilan: [
          "Un projet à la fois simple et difficile : le HTML et le CSS nous étaient familiers, mais PHP et MariaDB ont demandé de s'adapter. Nous avons pris du plaisir à coder en PHP et en base de données, et le travail à trois nous a changé de l'habitude.",
          "Pour ma part, c'est surtout en HTML, CSS et PHP que j'ai progressé, ainsi qu'en organisation personnelle."
        ]
      } }
  ],

  /* Parcours (trié automatiquement du plus récent au plus ancien via "sort" AAAA-MM).
     type : formation | stage | associatif (filtres) · text OU points : contenu de la carte */
  timeline: [
    { sort:"2026-09", type:"formation", label:"Formation", date:"Septembre 2026 – Juin 2027", org:"Université Paris Cité", title:"Licence 3 MIAGE",
      logo:"assets/images/logos/universite-paris-cite.jpg",
      text:"Enseignements : conception et développement d'applications, bases de données, architecture des SI, gestion de projet (méthodes agiles, cycle en V), management des organisations, droit du numérique, anglais professionnel." },
    { sort:"2026-07", type:"formation", label:"Formation", date:"Juillet 2026", org:"IUT de Paris – Rives de Seine", title:"Obtention du BAC+3 – BUT Informatique",
      logo:"assets/images/logos/iut-paris-rds.jpg" },
    { sort:"2026-02", type:"stage", label:"Stage", date:"Février – Juin 2026", org:"Amiral Gestion", title:"Développeur Python",
      logo:"assets/images/logos/amiral-gestion.png",
      points:["Automatisation : scripts Python développés avec l'API Gemini pour la traduction automatisée et le traitement de données.",
              "Reporting ESG : scripts Python générant automatiquement les rapports Excel ESG à partir des données brutes de vote, en lien avec l'équipe ESG."] },
    { sort:"2025-04", type:"stage", label:"Stage", date:"Avril – Juin 2025", org:"Amiral Gestion", title:"Développeur Python",
      logo:"assets/images/logos/amiral-gestion.png",
      points:["Infrastructure : script Python d'automatisation des sauvegardes sur un serveur distant via SFTP.",
              "Support informatique : installation et configuration de GLPI pour la gestion du parc et des demandes des utilisateurs.",
              "Data : script Python de collecte de données (web scraping) depuis des sites web vers une base de données."] },
    { sort:"2025-01", type:"associatif", label:"Associatif", date:"Janvier 2025 – Maintenant", org:"La Distrib'", title:"Bénévole",
      logo:"assets/images/logos/la-distrib.jpg",
      points:["Aide apportée à plus de 300 personnes sans-abri (distribution de nourriture, de boissons chaudes, d'eau et de vêtements).",
              "Participation à l'organisation d'une brocante solidaire visant à collecter des fonds via la vente de vêtements, sacs personnalisés et boissons chaudes."] },
    { sort:"2024-07", type:"associatif", label:"Associatif", date:"Juillet 2024 – Juin 2025", org:"BDE Fabulous13", title:"Responsable communication",
      logo:"assets/images/logos/fabulous13.png",
      points:["Organisation de séances de révision avant les périodes de partiels et gestion d'un Google Drive d'annales et de supports.",
              "Chiffre d'affaires annuel de plus de 150 000 euros.",
              "Prise en charge d'un poste clé lors de chaque événement (gestion d'un bus, du bar, des entrées, etc.).",
              "Réalisation de contenus pour plusieurs événements (week-end d'intégration, ski, soirées étudiantes, galas, événements culturels)."] },
    { sort:"2023-09", type:"formation", label:"Formation", date:"Septembre 2023 – Juillet 2026", org:"IUT de Paris – Rives de Seine", title:"BUT Informatique",
      logo:"assets/images/logos/iut-paris-rds.jpg",
      text:"Enseignements : développement logiciel et web, administration et conception de bases de données, génie logiciel (UML, méthodes agiles), systèmes et réseaux, mathématiques appliquées (logique, graphes), culture juridique et économique (RGPD, droit du numérique), gestion de projet, stages en entreprise." },
    { sort:"2020-09", type:"formation", label:"Formation", date:"Septembre 2020 – Juin 2023", org:"Lycée Janson de Sailly", title:"Baccalauréat STI2D – Mention Bien",
      logo:"assets/images/logos/janson-de-sailly.png" }
  ],

  /* Passions : image (chemin local ou URL), titre, texte. Pour héberger les photos toi-même,
     télécharge-les dans assets/images/passions/ et remplace l'URL par le chemin local. */
  passions: [
    { title:"Football", image:"assets/images/passions/football.jpg", alt:"Cérémonie d'avant-match dans un stade, de nuit",
      text:"Le football fait partie de ma vie depuis que je suis tout petit. J'aime suivre les matchs de Ligue 1, de Ligue des champions mais surtout ceux du Paris Saint-Germain, club historique français et tout fraîchement champion d'Europe (merci Luis Enrique). C'est toujours un bonheur de voir mon équipe performer sur le terrain et on espère aller chercher la troisième !!" },
    { title:"Photographie", image:"assets/images/passions/photographie.jpg", alt:"Coucher de soleil sur une route de campagne",
      text:"J’ai toujours apprécié vivre le moment présent mais aussi le photographier. J’ai eu la chance de grandir avec une grande sœur qui avait toujours un appareil photo sous la main, j’ai donc pris assez vite son appareil photo pour, à mon tour prendre de jolies photos de ce qui m’entoure, surtout de mes amis et de ma famille." }
  ],

  /* Galerie (optionnelle, affichée sous les passions) : dépose tes fichiers dans assets/images/passions/ puis liste-les ici. */
  photos: [],                       // ex. [{ src:"assets/images/passions/photo-1.jpg", alt:"Description" }]
  videos: []                        // ex. [{ src:"assets/images/passions/clip.mp4", title:"Titre" }]
};
