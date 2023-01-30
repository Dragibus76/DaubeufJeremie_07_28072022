//pour normalisé les ecrit de tous les termes
function normalise(str) {
    return str
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();
  }
  
  //pour normalisé tous les noms (ex: tags,création des id)
  function normaliseName(str) {
    return str
      .normalize("NFD") //renvoyer la forme normalisée Unicode d'une chaîne de caractères
      .replace(/[\u0300-\u036f]/g, "") //remplace les caractéres spéciaux et les accents par des espaces
      .replace(/[\ -\']/g, "-") //remplace par des tirets
      .toLowerCase() // mets en petite police de caractere
      .replace(/[\(-\)]/g, "");//remplace par des espaces
  }
  
  //pour normalisé les recherche input dropdown
  function normaliseForSearch(str) {
    return str
      .normalize("NFD")//renvoyer la forme normalisée Unicode d'une chaîne de caractères
      .replace(/[\u0300-\u036f]/g, "")//remplace les caractéres spéciaux et les accents par rien
      .toLowerCase()//mets en petite police de caractere
      .replace(/[\(-\)]/g, "")// les parenthèse sont remplacé par des rien
      .replace(/[^a-zA-Z ]/g, " ");//Remplace tous les caractéres hormis ceux entre a-z et A-Z
  }
  
  //trier l'ensemble d'une list
  function sortSet(setList) {
    let list = Array.from(setList).sort();
    return new Set(list);
  }
  
  //pour alléger tableau recherche principale (source:  https://countwordsfree.com/stopwords/french)
  const stopWords = 
  
  [
    "a",
    "à",
    "â",
    "abord",
    "afin",
    "ainsi",
    "allaient",
    "allo",
    "allô",
    "allons",
    "après",
    "assez",
    "attendu",
    "aucun",
    "aucune",
    "aujourd",
    "aujourd'hui",
    "auquel",
    "aura",
    "auront",
    "aussi",
    "autre",
    "autres",
    "aux",
    "auxquelles",
    "auxquels",
    "avaient",
    "avais",
    "avait",
    "avant",
    "avec",
    "avoir",
    "ayant",
    "bah",
    "beaucoup",
    "bien",
    "bigre",
    "boum",
    "bravo",
    "brrr",
    "ça",
    "car",
    "ceci",
    "cela",
    "celle",
    "celle-ci",
    "celle-là",
    "celles",
    "celles-ci",
    "celles-là",
    "celui",
    "celui-ci",
    "celui-là",
    "cent",
    "cependant",
    "certain",
    "certaine",
    "certaines",
    "certains",
    "certes",
    "ces",
    "cet",
    "cette",
    "ceux",
    "ceux-ci",
    "ceux-là",
    "chacun",
    "chaque",
    "cher",
    "chère",
    "chères",
    "chers",
    "chez",
    "chiche",
    "chut",
    "cinq",
    "cinquantaine",
    "cinquante",
    "cinquantième",
    "cinquième",
    "clac",
    "clic",
    "combien",
    "comme",
    "comment",
    "compris",
    "concernant",
    "contre",
    "couic",
    "crac",
    "dans",
    "debout",
    "dedans",
    "dehors",
    "delà",
    "depuis",
    "derrière",
    "des",
    "dès",
    "désormais",
    "desquelles",
    "desquels",
    "dessous",
    "dessus",
    "deux",
    "deuxième",
    "deuxièmement",
    "devant",
    "devers",
    "devra",
    "différent",
    "différente",
    "différentes",
    "différents",
    "dire",
    "divers",
    "diverse",
    "diverses",
    "dix",
    "dix-huit",
    "dixième",
    "dix-neuf",
    "dix-sept",
    "doit",
    "doivent",
    "donc",
    "dont",
    "douze",
    "douzième",
    "dring",
    "duquel",
    "durant",
    "effet",
    "elle",
    "elle-même",
    "elles",
    "elles-mêmes",
    "encore",
    "entre",
    "envers",
    "environ",
    "est",
    "etant",
    "étaient",
    "étais",
    "était",
    "étant",
    "etc",
    "été",
    "etre",
    "être",
    "euh",
    "eux",
    "eux-mêmes",
    "excepté",
    "façon",
    "fais",
    "faisaient",
    "faisant",
    "fait",
    "feront",
    "flac",
    "floc",
    "font",
    "gens",
    "hein",
    "hélas",
    "hem",
    "hep",
    "holà",
    "hop",
    "hormis",
    "hors",
    "hou",
    "houp",
    "hue",
    "hui",
    "huit",
    "huitième",
    "hum",
    "hurrah",
    "ils",
    "importe",
    "jusqu",
    "jusque",
    "laquelle",
    "las",
    "lequel",
    "les",
    "lès",
    "lesquelles",
    "lesquels",
    "leur",
    "leurs",
    "longtemps",
    "lorsque",
    "lui",
    "lui-même",
    "maint",
    "mais",
    "malgré",
    "même",
    "mêmes",
    "merci",
    "mes",
    "mien",
    "mienne",
    "miennes",
    "miens",
    "mille",
    "mince",
    "moi",
    "moi-même",
    "moins",
    "mon",
    "moyennant",
    "néanmoins",
    "neuf",
    "neuvième",
    "nombreuses",
    "nombreux",
    "non",
    "nos",
    "notre",
    "nôtre",
    "nôtres",
    "nous",
    "nous-mêmes",
    "nul",
    "ohé",
    "olé",
    "ollé",
    "ont",
    "onze",
    "onzième",
    "ore",
    "ouf",
    "ouias",
    "oust",
    "ouste",
    "outre",
    "paf",
    "pan",
    "par",
    "parmi",
    "partant",
    "particulier",
    "particulière",
    "particulièrement",
    "pas",
    "passé",
    "pendant",
    "personne",
    "peu",
    "peut",
    "peuvent",
    "peux",
    "pff",
    "pfft",
    "pfut",
    "pif",
    "plein",
    "plouf",
    "plus",
    "plusieurs",
    "plutôt",
    "pouah",
    "pour",
    "pourquoi",
    "premier",
    "première",
    "premièrement",
    "près",
    "proche",
    "psitt",
    "puisque",
    "quand",
    "quant",
    "quanta",
    "quant-à-soi",
    "quarante",
    "quatorze",
    "quatre",
    "quatre-vingt",
    "quatrième",
    "quatrièmement",
    "que",
    "quel",
    "quelconque",
    "quelle",
    "quelles",
    "quelque",
    "quelques",
    "quelqu'un",
    "quels",
    "qui",
    "quiconque",
    "quinze",
    "quoi",
    "quoique",
    "revoici",
    "revoilà",
    "rien",
    "sacrebleu",
    "sans",
    "sapristi",
    "sauf",
    "seize",
    "selon",
    "sept",
    "septième",
    "sera",
    "seront",
    "ses",
    "sien",
    "sienne",
    "siennes",
    "siens",
    "sinon",
    "six",
    "sixième",
    "soi",
    "soi-même",
    "soit",
    "soixante",
    "son",
    "sont",
    "sous",
    "stop",
    "suis",
    "suivant",
    "sur",
    "surtout",
    "tac",
    "tant",
    "tel",
    "telle",
    "tellement",
    "telles",
    "tels",
    "tenant",
    "tes",
    "tic",
    "tien",
    "tienne",
    "tiennes",
    "tiens",
    "toc",
    "toi",
    "toi-même",
    "ton",
    "touchant",
    "toujours",
    "tous",
    "tout",
    "toute",
    "toutes",
    "treize",
    "trente",
    "très",
    "trois",
    "troisième",
    "troisièmement",
    "trop",
    "tsoin",
    "tsouin",
    "une",
    "unes",
    "uns",
    "vais",
    "vas",
    "vers",
    "via",
    "vif",
    "vifs",
    "vingt",
    "vivat",
    "vive",
    "vives",
    "vlan",
    "voici",
    "voilà",
    "vont",
    "vos",
    "votre",
    "vôtre",
    "vôtres",
    "vous",
    "vous-mêmes",
    "zut",
    "alors",
    "aucuns",
    "bon",
    "devrait",
    "dos",
    "droite",
    "début",
    "essai",
    "faites",
    "fois",
    "force",
    "haut",
    "ici",
    "juste",
    "maintenant",
    "mine",
    "mot",
    "nommés",
    "nouveaux",
    "parce",
    "parole",
    "personnes",
    "pièce",
    "plupart",
    "seulement",
    "soyez",
    "sujet",
    "tandis",
    "valeur",
    "voie",
    "voient",
    "état",
    "étions",
  ];
  