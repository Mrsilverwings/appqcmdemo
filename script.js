// ============================================================
// AVIATION QCM TRAINING
// Question bank: add your questions ONLY inside this array.
// ============================================================

// ============================================================
// LISTE DES 13 MATIÈRES
// ============================================================
const subjects = [
    "Préparation de vol",
    "Plan de vol",
    "Réglementation aérienne",
    "Circulation aérienne",
    "Liste Minimale d’Équipement",
    "Carburant",
    "Procédures anormales et d'urgences",
    "Navigation aérienne",
    "Aérodynamique et Mécanique de vol",
    "Connaissance générale des avions",
    "Météorologie",
    "Facteurs Humains",
    "Masse et Centrage"
];

// ============================================================
// QUESTION BANK
// Ajoutez vos questions ici.
// answer: 0 = A, 1 = B, 2 = C, 3 = D
// ============================================================
const builtInQuestionBank = [
    {
        subject: "Préparation de vol",
        question: "La préparation en vol s’effectue en 9 étapes lesquelles ?",
        options: [
            "Validité des documents pilote / avion, NOTAM, SUP AIP, AZBA et Météorologie",
            "Route et altitude de sécurité, Équipement minimal de survie et d’urgence",
            "Carburant, Masse et centrage, Performances et limitations et Plan de vol si déposé",
            "A, B et C"
        ],
        answer: 3,
        explanation: "La préparation complète du vol englobe l'ensemble des vérifications documentaires, administratives, météorologiques, techniques et de sécurité listées dans les trois premières propositions."
    },
    {
        subject: "Préparation de vol",
        question: "Quels sont les documents devant se trouver à bord pour tout vol ?",
        options: [
            "Carnet de route, Manuel d’exploitation, Plan de vol",
            "Carnet de route, Manuel de vol, Plan de vol et NOTAM",
            "LA METEO de route, Manuel de vol et Plan de vol",
            "Masse et centrage, Manuel de vol et LEM (liste minimale d’équipement)"
        ],
        answer: 1,
        explanation: "Le carnet de route, le manuel de vol réglementaire (et le plan de vol s'il est requis/déposé) ainsi que les NOTAM font partie des documents obligatoires à bord pour la conduite du vol."
    },
    {
        subject: "Préparation de vol",
        question: "Avant le vol vous devez faire une étude du chargement et vérifier si le centrage se situe dans la plage de sécurité, à l’aide de :",
        options: [
            "Fiche de pesée et AIP joint au manuel de vol",
            "Fiche de pesée, altitude du terrain de l’aérodrome et poids du bagage",
            "Fiche de pesée, jointe au carnet de route et abaque, joint au manuel de vol",
            "Fiche de pesée, poids du carburant et du bagage"
        ],
        answer: 2,
        explanation: "Le calcul de masse et centrage s'appuie sur la fiche de pesée officielle de l'appareil (généralement dans le carnet de route) et sur les abaques de centrage constructeur présents dans le manuel de vol."
    },
    {
        subject: "Préparation de vol",
        question: "Avant le vol vous devez faire une étude des performances au :",
        options: [
            "Décollage et atterrissage sur aérodrome de destination et de dégagement",
            "Décollage, croisière et atterrissage",
            "Roulage, espace aérien et atterrissage",
            "Décollage et atterrissage sur tous les aérodromes de dégagements"
        ],
        answer: 1,
        explanation: "L'analyse des performances doit couvrir les phases critiques du vol, à savoir le décollage, la phase de croisière et l'atterrissage."
    },
    {
        subject: "Préparation de vol",
        question: "Installez, 1 trousse de premiers secours par avion :",
        options: [
            "Entre 10 et 100 sièges passagers",
            "Entre 1 et 100 sièges passagers",
            "Entre 1 et 200 sièges passagers",
            "Entre 20 et 200 sièges passagers"
        ],
        answer: 1,
        explanation: "La réglementation impose l'emport d'au moins une trousse de premiers secours dès lors que l'avion est configuré pour le transport de passagers (entre 1 et 100 sièges)."
    },
    {
        subject: "Préparation de vol",
        question: "Les avions doivent être équipés de Gilets de sauvetage pour tout avion :",
        options: [
            "Survolant une étendue d’eau à plus de 50 NM de la côte",
            "Survolant une étendue d’eau à plus de 10 NM de la côte",
            "Survolant une étendue d’eau à plus de 100 NM de la côte",
            "Survolant une étendue d’eau à plus de 5 NM de la côte"
        ],
        answer: 0,
        explanation: "L'emport de gilets de sauvetage individuels devient obligatoire en avion dès que le survol d'une étendue d'eau excède une distance de 50 milles nautiques (NM) de la côte."
    },
    {
        subject: "Préparation de vol",
        question: "Route et altitude de sécurité entre aérodrome de départ, d’arrivée et de dégagement vous devez :",
        options: [
            "Tracer sur les cartes 1/500 000 ou 1/1 000 000 le trajet",
            "Déterminer les routes magnétiques aller-retour et mesurer et noter les flanquements des balises VOR",
            "Noter l’ordre d’utilisation des fréquences",
            "A, B et C sont justes"
        ],
        answer: 3,
        explanation: "La préparation de la navigation implique le tracé du trajet, le calcul des caps et routes magnétiques, le relevé des aides radio (VOR) et l'organisation logique des fréquences de communication."
    },
    {
        subject: "Préparation de vol",
        question: "Les documents Pilote sont :",
        options: [
            "Licence de pilote, Qualification de classe et Certificat médical",
            "Licence de Qualification et certificat de navigabilité",
            "Qualification de classe, immatriculation et Certificat médical",
            "Qualification avion, Certificat médical et attestation d’aptitude au vol"
        ],
        answer: 0,
        explanation: "Les documents personnels obligatoires du navigant technique incluent sa licence de pilote en état de validité, ses qualifications associées (classe/type) et son certificat médical d'aptitude physique."
    },
    {
        subject: "Préparation de vol",
        question: "Que veut dire NOTAM ?",
        options: [
            "Note TAMSI Air Management, messages aux PNC",
            "Notice To Aérodrome, messages aux navigants",
            "Notice To Air Men, messages aux navigants",
            "Notice To Air Men, messages aux aéroports"
        ],
        answer: 2,
        explanation: "NOTAM est l'acronyme de 'Notice To Air Men', qui désigne les messages d'avertissement officiels diffusés aux navigants concernant l'état ou la modification des infrastructures et des espaces aériens."
    },
    {
        subject: "Préparation de vol",
        question: "Que veut dire SUP AIP ?",
        options: [
            "Supérieur aux publications d’informations d’aérodromes",
            "Suppléments aux publications d’informations aéronautiques",
            "Suppléments aux publications météorologiques",
            "Publications d’informations d’aérodromes publics"
        ],
        answer: 1,
        explanation: "Le SUP AIP désigne un 'Supplément à la Publication d'Information Aéronautique' (Aeronautical Information Publication), contenant des informations temporaires de longue durée."
    },
    {
        subject: "Préparation de vol",
        question: "Avitaillement avec des passagers en cours d'embarquement, à bord ou en cours de débarquement : Pour tous les autres types de carburant, l'aéronef ne subit aucune opération d'avitaillement lorsque des passagers embarquent, sont à bord ou débarquent, sauf en présence du pilote commandant de bord ou d'autres membres qualifiés du personnel prêts à déclencher et à diriger une évacuation de l'aéronef par les moyens les plus pratiques et rapides disponibles.",
        options: [
            "Vrai",
            "Faux"
        ],
        answer: 0,
        explanation: "Cette procédure de sécurité stricte permet d'assurer l'évacuation d'urgence immédiate des passagers en cas d'incident ou d'incendie pendant le remplissage des réservoirs."
    },
    {
        subject: "Préparation de vol",
        question: "Avant d'entreprendre le décollage, le pilote commandant de bord a la certitude que :",
        options: [
            "Les minimas de l’avion sont respectés et Toute la documentation est à bord de l’Avion",
            "Selon les informations dont il dispose, les conditions météorologiques régnant sur l’aérodrome, ainsi que l’état de la piste devant être utilisée, n’empêchent pas un décollage et un départ en toute sécurité",
            "Les minima opérationnels de l'aérodrome sont respectés.",
            "Les réponses B et C sont correctes"
        ],
        answer: 3,
        explanation: "Le commandant de bord doit s'assurer de la faisabilité sécuritaire selon la météo et l'état de la piste (B) tout en respectant scrupuleusement les minima opérationnels réglementaires de la plateforme (C)."
    },
    {
        subject: "Préparation de vol",
        question: "Les avions exploités dans des zones dans lesquelles les opérations de recherche et de sauvetage seraient particulièrement difficiles sont équipés :",
        options: [
            "De dispositifs de signalisation et de matériel de survie, y compris de moyens de subsistance, en fonction de la zone survolée.",
            "De dispositifs de secours et de sauvetage",
            "De dispositifs de recherche en zone dangereuse",
            "De matériels de navigation et de sauvetage"
        ],
        answer: 0,
        explanation: "Le survol de zones hostiles ou isolées impose l'emport réglementaire d'équipements de survie spécifiques et de rations de subsistance adaptés au milieu (polaire, désertique, etc.)."
    },
    {
        subject: "Préparation de vol",
        question: "Le pilote commandant de bord s'assure qu'avant ou le cas échéant pendant le vol, les passagers reçoivent un briefing concernant les équipements et procédures d’urgence.",
        options: [
            "Vrai",
            "Faux"
        ],
        answer: 0,
        explanation: "Le briefing sécurité des passagers (utilisation des ceintures, issues, gilets, masques) relève de la responsabilité légale du commandant de bord avant le départ."
    },
    {
        subject: "Préparation de vol",
        question: "Avant d'entamer un vol, le pilote commandant de bord s'assure que les installations au sol et les aides à la navigation sont disponibles et directement pour le fonctionnement sûr de l'aéronef :",
        options: [
            "Vrai",
            "Faux"
        ],
        answer: 0,
        explanation: "Il est obligatoire de vérifier via l'AIP et les NOTAM que les infrastructures au sol et les moyens de radio-navigation requis pour le vol prévu fonctionnent correctement."},
    {
        subject: "Préparation de vol",
        question: "Avant d'entamer un vol, le pilote commandant de bord dispose de toutes les informations météorologiques disponibles concernant le vol prévu. Dans ces conditions :",
        options: [
            "Une étude des bulletins et prévisions météorologiques n’est pas nécessaire",
            "La préparation d'un plan d'action de repli pour parer à toute éventualité si le vol ne peut pas être effectué comme prévu, en raison des conditions météorologiques.",
            "Le départ doit respecter le slot",
            "Le décision revient à la tour de contrôle"],
            answer: 1,
            explanation: "L'analyse météorologique impose d'anticiper la dégradation du temps en prévoyant une trajectoire alternative ou une stratégie de déroutement (plan de repli)."},
    {
        subject: "Préparation de vol",
        question: "Le pilote commandant de bord tient compte des procédures antibruit publiées pour réduire :",
        options: [
            "L’effet de bruit de l'aéronef, tout en s'assurant que la sécurité prime sur la réduction du bruit",
            "L’effet de bruit de l'aéronef, tout en s'assurant que la réduction du bruit est obligatoire",
            "L’effet de bruit de l'aéronef, tout en s'assurant que la réduction du bruit prime la sécurité",
            "L’effet de bruit de l'aéronef, tout en s'assurant que la sécurité est assurée par la réduction du bruit"
        ],
            answer: 0,
            explanation: "Bien que les trajectoires et procédures de moindre bruit doivent être appliquées, la sécurité des trajectoires de vol reste toujours la priorité absolue du pilote."},
    {
        subject: "Préparation de vol",
        question: "En ce qui concerne les vols en (IFR), le pilote commandant de bord sélectionne et utilise les minima opérationnels de l’aérodrome pour chaque départ, destination et aérodrome de dégagement. Ces minima :",
        options: [
            "Doivent être supérieures a ceux établis par l’état dans lequel l’aérodrome est situé et en cas d’opération a faible visibilité, doivent être approuvée par l’autorité",
            "Doivent être approuvée par la compagnie aérienne",
            "Doivent être conforme au manuel d’exploitation",
            "Ne doivent pas être inférieurs à ceux établis par l'État dans lequel l'aérodrome est situé"
        ],
            answer: 3,
            explanation: "Un exploitant ou un pilote peut s'imposer des minima plus stricts (supérieurs), mais il lui est strictement interdit d'utiliser des minima inférieurs à ceux publiés par l'État souverain du terrain."},
    {
        subject: "Préparation de vol",
        question: "Lors de l'établissement de minima opérationnels pour l'aérodrome, le pilote commandant de bord prend en compte les éléments suivants :",
        options: [
            "Le type, les performances et les qualités de vol de l'aéronef ; ses compétences et son expérience ;",
            "Les dimensions et caractéristiques des pistes, aires d'approche finale et de décollage (FATO) susceptibles d'être sélectionnées pour utilisation ;",
            "La conformité et les performances des aides visuelles et non visuelles disponibles au sol ;",
            "Toutes les réponses sont correctes."
        ],
            answer: 3,
            explanation: "Le calcul des minima opérationnels résulte d'une synthèse globale combinant les performances de la machine, l'expérience de l'équipage, la géométrie de la piste et la précision du guidage au sol disponible."},
    {
        subject: "Préparation de vol",
        question: "Au cours du vol, le pilote commandant de bord :",
        options: [
            "Garde sa ceinture de sécurité attachée, aussi longtemps qu’il occupe son poste ;",
            "Reste aux commandes de l'aéronef en permanence, sauf si un autre pilote prend les commandes",
            "Une fois en vol de croisière, la ceinture de sécurité n’est pas nécessaire.",
            "Les réponses A et B sont correctes"
        ],
        answer: 3,
        explanation: "Le commandant de bord doit maintenir sa ceinture attachée à son poste de pilotage (A) et assurer le contrôle continu de la trajectoire, directement ou par délégation à un autre pilote qualifié (B)."},
    {
        subject: "Plan de vol",
        question: "Comment tracer la route d’un vol donné ?",
        options: [
            "En suivant l’instrument indiquant le cap.",
            "En la saisissant sur l’ordinateur de bord.",
            "En se servant sur internet.",
            "En se servant d’une carte des routes aériennes (Jet Plan)."
        ],
        answer: 3,
        explanation: "Le tracé initial de la route d'un vol s'effectue réglementairement à l'aide d'une carte des routes aériennes (comme les cartes Jet Plan) adaptée à l'espace traversé."
    },
    {
        subject: "Plan de vol",
        question: "L’autonomie sur un plan de vol est exprimée :",
        options: [
            "En litres de carburant.",
            "En hectolitres de carburant.",
            "En heures / minutes.",
            "En tonnes de carburant."
        ],
        answer: 2,
        explanation: "Sur un plan de vol (FPL), la case correspondante à l'autonomie (Endurance) requiert une valeur exprimée en temps de vol restant (Heures et Minutes)."
    },
    {
        subject: "Plan de vol",
        question: "Quel vol n’est pas doté d’équipements de survie ?",
        options: [
            "Vol désertique.",
            "Vol survolant des zones habitées.",
            "Vol polaire.",
            "Vol survolant la jungle."
        ],
        answer: 1,
        explanation: "L'emport obligatoire de matériel de survie spécifique concerne les vols au-dessus de zones difficiles ou hostiles (désert, pôles, jungle) où les secours mettraient du temps à intervenir, contrairement aux zones habitées."
    },
    {
        subject: "Plan de vol",
        question: "Quelle est la validité du plan de vol ?",
        options: [
            "Trente (30) minutes.",
            "Soixante (60) minutes.",
            "Douze (12) heures.",
            "Vingt-quatre (24) heures."
        ],
        answer: 1,
        explanation: "Un plan de vol déposé expire automatiquement 60 minutes après l'heure estimée de départ des cales (EOBT) si aucun message de retard ou d'activation n'a été reçu."
    },
    {
        subject: "Plan de vol",
        question: "Que faut-il faire lorsque la validité du plan de vol est arrivée à terme ?",
        options: [
            "Annuler le plan de vol.",
            "Redéposer un plan de vol.",
            "Ne rien faire.",
            "Déposer un délai (redéfinir l’heure de départ)."
        ],
        answer: 3,
        explanation: "Si l'heure de départ change au-delà du seuil de tolérance, il faut envoyer un message de retard (DLA pour Delay) afin de mettre à jour et de conserver le plan de vol actif."
    },
    {
        subject: "Plan de vol",
        question: "Quel objet n’est pas un équipement de survie ?",
        options: [
            "Les balises d’urgence.",
            "Les gilets de sauvetage.",
            "La capacité de la cabine.",
            "Les canots."
        ],
        answer: 2,
        explanation: "La capacité de la cabine est une caractéristique structurelle ou commerciale de l'aéronef, contrairement aux gilets, canots et balises qui sont du matériel de sauvetage matériel."
    },
    {
        subject: "Plan de vol",
        question: "Dans quel cas il est impératif de déposer un nouveau plan de vol ?",
        options: [
            "Retard de moins de trente (30) minutes.",
            "Déroutement du vol vers un autre aérodrome.",
            "Débarquement des passagers et bagages.",
            "Changement d’aérodrome de destination."
        ],
        answer: 3,
        explanation: "Une modification de l'aérodrome de destination par rapport au trajet initialement prévu oblige à clore ou modifier l'ancien dossier et à déposer un plan de vol entièrement nouveau."
    },
    {
        subject: "Plan de vol",
        question: "Quelle information n’est pas mentionnée sur le plan de vol ?",
        options: [
            "La vitesse de croisière.",
            "Les phénomènes météorologiques à l’aérodrome de destination.",
            "Le niveau de vol.",
            "Le type et règles de vol."
        ],
        answer: 1,
        explanation: "Le plan de vol décrit l'intention de vol et la trajectoire (vitesse, niveau, règles). Les données météo sont consultées à part via les dossiers de vol (TAF/METAR) et ne figurent pas sur le formulaire du plan de vol."
    },
    {
        subject: "Plan de vol",
        question: "Le plan de vol est un document :",
        options: [
            "Remis au chef de cabine.",
            "Déposé au Bureau d’Informations Aéronautiques (BIA).",
            "Archivé dans le dossier de vol.",
            "Remis au responsable hiérarchique."
        ],
        answer: 1,
        explanation: "Le plan de vol (FPL) doit être déposé auprès du Bureau d'Informations Aéronautiques (BIA) ou via un système automatisé officiel pour être transmis aux services de contrôle."
    },
    {
        subject: "Plan de vol",
        question: "Quel service transmet le plan de vol ?",
        options: [
            "Le service des opérations aériennes.",
            "Le service des opérations au sol.",
            "Le bureau des informations aéronautiques.",
            "Le pilote commandant de bord."
        ],
        answer: 2,
        explanation: "C'est le Bureau des Informations Aéronautiques (BIA) qui se charge de la validation et de la diffusion officielle du plan de vol aux différents organismes de la circulation aérienne."
    },
    {
        subject: "Plan de vol",
        question: "Quel organisme n’est pas receveur du plan de vol ?",
        options: [
            "La tour de contrôle.",
            "L’aérodrome de destination.",
            "Les aérodromes de dégagement.",
            "Le service de maintenance des aéronefs."
        ],
        answer: 3,
        explanation: "Le service de maintenance n'est pas un maillon de la gestion du trafic aérien en temps réel et ne reçoit donc pas la copie opérationnelle du plan de vol."
    },
    {
        subject: "Plan de vol",
        question: "Dans la case « Identification de l’aéronef » est mentionné :",
        options: [
            "Le type d’avion.",
            "Le numéro du vol ou l’immatriculation.",
            "La masse maximum autorisée au décollage.",
            "La vitesse de croisière."
        ],
        answer: 1,
        explanation: "La case 7 'Identification de l'aéronef' reçoit l'indicatif d'appel radio de l'appareil, qui est soit son immatriculation (ex: F-GXYZ) soit son numéro de vol commercial (ex: AFR123)."
    },
    {
        subject: "Plan de vol",
        question: "La vitesse de croisière est exprimée en :",
        options: [
            "Milles nautiques.",
            "Kilomètres / heure.",
            "Nœuds.",
            "Mètres / seconde."
        ],
        answer: 2,
        explanation: "Sur le plan de vol, la vitesse de croisière s'exprime par la lettre N suivie de 4 chiffres représentant la vitesse propre calculée en Nœuds (Knots)."
    },
    {
        subject: "Plan de vol",
        question: "Quels sont les organismes destinataires du plan de vol ?",
        options: [
            "Les aérodromes de destination et de dégagement, ainsi que les services de contrôles régionaux des espaces aériens des pays survolés.",
            "Les services technique de la compagnie.",
            "La station météorologique de l’aérodrome.",
            "Les services de sécurité de l’aérodrome."
        ],
        answer: 0,
        explanation: "Le plan de vol est routé à toutes les unités de contrôle de la circulation aérienne (ACC, APP, TWR) chargées des secteurs que l'avion va traverser ainsi qu'aux terrains de destination et de déroutement."
    },
    {
        subject: "Plan de vol",
        question: "Le niveau de vol est exprimé en :",
        options: [
            "Kilomètres.",
            "Centaines de pieds.",
            "Mètres.",
            "Dizaines de mètres."
        ],
        answer: 1,
        explanation: "Le niveau de vol (Flight Level - FL) correspond à l'altitude pression exprimée en centaines de pieds au-dessus de la surface isobare 1013.25 hPa (ex: FL300 = 30 000 pieds)."
    },
    {
        subject: "Réglementation aérienne",
        question: "Quels sont les principes de la convention de Chicago ?",
        options: [
            "Organiser les compagnies aériennes",
            "Promouvoir une industrie aéronautique",
            "Le respect de la souveraineté absolue sur l’espace aérien",
            "Mettre en évidence les principes de l’OACI"
        ],
        answer: 2,
        explanation: "Le fondement premier de la Convention de Chicago de 1944 est la reconnaissance de la souveraineté complète et exclusive de chaque État sur l'espace aérien au-dessus de son territoire."
    },
    {
        subject: "Réglementation aérienne",
        question: "Quel est le rôle de l'OACI ?",
        options: [
            "S’occuper des tarifs et de la codification des aéroports",
            "D’élaborer les principes et les techniques de la navigation aérienne internationale",
            "Surveiller les compagnies aériennes en matière de sécurité",
            "Contrôler les services aériens"
        ],
        answer: 1,
        explanation: "L'OACI (Organisation de l'Aviation Civile Internationale) est une institution spécialisée des Nations Unies chargée d'élaborer les normes, pratiques recommandées et techniques de la navigation aérienne internationale."
    },
    {
        subject: "Réglementation aérienne",
        question: "Quel est le rôle de l'IATA ?",
        options: [
            "Établir les annexes de l’OACI",
            "Organiser le fret et le calcul de masse",
            "Établir la Réglementation du transport aérien, surtout les conditions d’embarquement et la codification de réservation",
            "Prendre en charge les compagnies en difficulté"
        ],
        answer: 2,
        explanation: "L'IATA représente les compagnies aériennes et standardise les aspects commerciaux, les règles de transport (passagers/fret), la billetterie et la codification internationale des réservations."
    },
    {
        subject: "Réglementation aérienne",
        question: "Que contiennent les Annexes de la convention de Chicago ?",
        options: [
            "Les normes et les pratiques relatives à la réglementation technique de la navigation",
            "La liste stricte d'application des annexes de 1 à 19",
            "La codification des annexes de 1 à 19",
            "Le règlement du transport aérien des passagers et du fret aérien"
        ],
        answer: 0,
        explanation: "Les SARPs (Standards and Recommended Practices) contenus dans les annexes fixent les règles techniques communes de sécurité, de sûreté et de navigation à l'échelle mondiale."
    },
    {
        subject: "Réglementation aérienne",
        question: "Qu'est-ce qui détermine la Nationalité d’un avion ?",
        options: [
            "Son certificat de navigabilité",
            "Son carnet de route",
            "Son document d’immatriculation",
            "Son carnet d’entretien"
        ],
        answer: 2,
        explanation: "Un aéronef possède la nationalité de l'État sur le registre duquel il est inscrit (immatriculé), matérialisée par son certificat d'immatriculation."
    },
    {
        subject: "Réglementation aérienne",
        question: "Que veut dire CDN et où se trouve-t-il ?",
        options: [
            "Document administratif autorisant un aéronef à voler et se trouve obligatoirement dans l’avion",
            "Certificat de nationalité",
            "Certificat d’aptitude au vol",
            "Certificat de mise à jour d’entretien"
        ],
        answer: 0,
        explanation: "Le CDN (Certificat de Navigabilité) atteste de l'aptitude technique au vol de l'aéronef en conformité avec la réglementation. C'est un document de bord obligatoire."
    },
    {
        subject: "Réglementation aérienne",
        question: "Qu'est-ce qu'un Slot ?",
        options: [
            "Créneau aéroportuaire d’embarquement des passagers",
            "Créneau horaire de stationnement",
            "Créneau horaire de mise en route",
            "L’autorisation qu’une compagnie aérienne a de faire décoller ou atterrir un avion à une heure précise"
        ],
        answer: 3,
        explanation: "Un slot (créneau horaire de coordination) est l'autorisation administrative d'utiliser l'infrastructure aéroportuaire pour un atterrissage ou un décollage à une date et heure données."
    },
    {
        subject: "Réglementation aérienne",
        question: "Quels sont les critères d’attribution d’un slot ?",
        options: [
            "La capacité de l’aéroport et le flux des passagers",
            "La capacité des avions",
            "Le type d’avion et le nombre de passagers",
            "Le poids du fret et des passagers"
        ],
        answer: 0,
        explanation: "Les créneaux sont alloués en fonction des limitations structurelles ou environnementales de l'aéroport (pistes, parkings, terminaux) face à la demande de trafic."
    },
    {
        subject: "Réglementation aérienne",
        question: "À quelle phase du vol le slot fait-il référence réglementairement ?",
        options: [
            "À l'embarquement",
            "Au décollage",
            "À l'atterrissage",
            "À la mise en route"
        ],
        answer: 1,
        explanation: "Dans la régulation du trafic aérien (ATFM), le créneau (slot) impose une heure précise de décollage (CTOT - Calculated Take-Off Time) avec une tolérance stricte."
    },
    {
        subject: "Réglementation aérienne",
        question: "Quelles sont les saisons aéronautiques (IATA) définissant l'organisation des slots ?",
        options: [
            "Toutes les saisons du mois d’octobre au mois de mars",
            "Été et printemps",
            "Hiver et été",
            "Hiver et automne"
        ],
        answer: 2,
        explanation: "Le calendrier aéronautique commercial mondial est divisé en deux saisons principales de planification : la saison d'Hiver (W) et la saison d'Été (S)."
    },
    {
        subject: "Réglementation aérienne",
        question: "Quelle est la définition du manuel de vol ?",
        options: [
            "Document qui rassemble les performances et le mode d’utilisation de l’avion",
            "Document de navigabilité d’un aéronef",
            "Document d’exploitation d’un aéronef",
            "Document de contrôle d’un aéronef"
        ],
        answer: 0,
        explanation: "Le manuel de vol (AFM) est un document officiel approuvé par l'autorité de certification contenant les limites, procédures et performances indispensables à l'exploitation sûre de l'appareil."
    },
    {
        subject: "Réglementation aérienne",
        question: "Quel est le contenu réglementaire du manuel de vol ?",
        options: [
            "Les limites, procédures d’urgence et procédures normales",
            "Les performances, masse et centrage",
            "Les systèmes et la liste des équipements",
            "Les réponses A, B et C"
        ],
        answer: 3,
        explanation: "Le manuel de vol détaille obligatoirement l'ensemble des éléments techniques : limites d'emploi, marches à suivre normales et d'urgence, abaques de performances et devis de centrage."
    },
    {
        subject: "Réglementation aérienne",
        question: "Avant tout décollage, à quel document officiel le pilote fait-il référence pour comparer les données réelles constatées ?",
        options: [
            "Les slots",
            "Le calcul de masse",
            "Le manuel de vol",
            "Les cartes aéronautiques"
        ],
        answer: 3,
        explanation: "Les cartes aéronautiques permettent au pilote de vérifier que les pistes, obstacles et fréquences visibles au sol correspondent exactement aux données officielles avant de s'envoler."
    },
    {
        subject: "Réglementation aérienne",
        question: "Quels sont les principaux documents d’entretien technique d’un aéronef ?",
        options: [
            "Le livret d’aéronef",
            "Le livret moteur",
            "Le livret de radio et le livret d’hélice",
            "Les réponses A, B et C"
        ],
        answer: 3,
        explanation: "Le suivi technique réglementaire du maintien de la navigabilité exige des livrets spécifiques pour la cellule (aéronef), le ou les moteurs, l'hélice et les installations radioélectriques."
    },
    {
        subject: "Réglementation aérienne",
        question: "Quels sont les principaux documents de suivi opérationnel en vol ?",
        options: [
            "Le certificat de navigabilité et le carnet de route",
            "Le manuel de vol et le manuel d’exploitation",
            "Le document pilote",
            "Le document de sécurité et d’entretien"
        ],
        answer: 0,
        explanation: "Le Certificat de Navigabilité (légal) et le Carnet de Route (historique opérationnel technique et chronologique des vols) constituent la base du suivi obligatoire."
    },
    {
        subject: "Réglementation aérienne",
        question: "Citez les 4 grandes parties réglementaires du Manuel d’Exploitation (MANEX) :",
        options: [
            "Partie A : Généralités et Partie B : Utilisation de l'avion",
            "Partie C : Navigation/Routes et Partie D : Formation du personnel",
            "Partie Système de Management de la Qualité [SMQ]",
            "Les réponses A et B"
        ],
        answer: 3,
        explanation: "La structure standard imposée pour un MANEX comprend la partie A (Généralités), la partie B (Spécificités avion), la partie C (Lignes et routes) et la partie D (Entraînement/Formation)."
    },
    {
        subject: "Réglementation aérienne",
        question: "Quel est le but du manuel d’exploitation (MANEX) ?",
        options: [
            "Assurer la sécurité et la régularité du transport aérien par des consignes et procédures relatives à l'exploitation",
            "Assurer le transport aérien commercial uniquement",
            "Assurer juridiquement les compagnies aériennes",
            "Assurer les consignes de sécurité de la qualité du service commercial"
        ],
        answer: 0,
        explanation: "Le MANEX traduit les règles générales en procédures d'application concrètes propres à l'exploitant pour garantir un haut niveau de sécurité et de conformité."},
    {
        subject: "Réglementation aérienne",
        question: "Que contient spécifiquement la partie B du manuel d’exploitation ?",
        options: [
            "L’ensemble des consignes et procédures relatives à un type d’avions",
            "L’ensemble des mesures d’entretien exclusif de l’avion",
            "L’exploitation du matériel de sécurité au sol",
            "Les consignes générales pour la mise en route, la navigation et le décollage"
        ],
        answer: 0,
        explanation: "La Partie B détaille toutes les spécificités techniques, cockpits, limitations et listes de vérifications propres au modèle d'avion exploité par la compagnie."},
    {
        subject: "Réglementation aérienne",
        question: "Dans quelle partie du MANEX trouve-t-on la politique générale de la compagnie ?",
        options: [
            "La partie C (Navigation)",
            "La partie D (Formation)",
            "La partie B (Exploitation machine)",
            "La partie A (Généralités et fonctionnement)"
        ],
        answer: 3,
        explanation: "C'est dans la Partie A (Généralités) que l'exploitant décrit son organisation, sa politique de sécurité des vols, ses engagements de qualité et ses directives de commandement."},
    {
        subject: "Réglementation aérienne",
        question: "De quoi traite l'Annexe 1 de la convention de l’OACI ?",
        options: [
            "De la circulation aérienne",
            "De la sûreté aéroportuaire",
            "Des licences du personnel",
            "De l’entretien des aéronefs"
        ],
            answer: 2,
            explanation: "L'Annexe 1 de l'OACI définit les règles internationales régissant la délivrance des licences, qualifications et aptitudes médicales du personnel navigant et technique."},
    {
        subject: "Réglementation aérienne",
        question: "Que signifie l'acronyme OACI ?",
        options: [
            "Organisation de l’aviation civile internationale",
            "Organisation du transport aérien international",
            "Organisation des nations unies",
            "Organisation des compagnies aériennes internationales"
        ],
        answer: 0,
        explanation: "OACI correspond en français à l'Organisation de l'Aviation Civile Internationale (ICAO en anglais)."},
    {
        subject: "Réglementation aérienne",
        question: "Que signifie l'acronyme IATA ?",
        options: [
            "Organisation de l’aviation civile internationale",
            "Association du transport maritime",
            "Association du transport aérien international",
            "Organisation de transport aérien international"
        ],
        answer: 2,
        explanation: "IATA correspond à l'International Air Transport Association (Association du Transport Aérien International)."},
    {
        subject: "Réglementation aérienne",
        question: "Quel code à 3 lettres est généralement utilisé commercialement pour désigner un aéroport ou une ville ?",
        options: [
            "Le code Ville",
            "Le code IATA",
            "Le code OACI",
            "Le code ENNA"
        ],
        answer: 1,
        explanation: "Le code IATA est composé de 3 lettres (ex: CDG, JFK) et sert d'identifiant universel pour le public, les billets d'avion et l'étiquetage des bagages."},
    {
        subject: "Réglementation aérienne",
        question: "Quel code à 4 lettres est obligatoirement utilisé par les contrôleurs et les pilotes pour la navigation aérienne ?",
        options: [
            "Le code Ville",
            "Le code IATA",
            "Le code OACI",
            "Le code EGSA"
        ],
        answer: 2,
        explanation: "Le code OACI utilise 4 lettres (ex: LFPG, KJFK) et sert exclusivement à la préparation technique des vols, à la navigation et aux plans de vol."},
    {
        subject: "Réglementation aérienne",
        question: "Quelle est la définition de la sécurité aérienne ?",
        options: [
            "La prévention des actes terroristes",
            "La prévention des pannes matérielles au sol",
            "La prévention de l'introduction de drogue",
            "La prévention des incidents et des accidents d’aviation"],
            answer: 3,
            explanation: "La sécurité ('Safety') regroupe l'ensemble des mesures visant à réduire les risques d'accidents ou d'incidents liés à des facteurs techniques, humains ou météorologiques."},
    {
        subject: "Réglementation aérienne",
        question: "Quelle est la définition de la sûreté aérienne ?",
        options: [
            "La prévention des accidents et des incidents de vol",
            "La prévention des actes illicites ou malveillants",
            "La prévention des pannes mécaniques",
            "La prévention des maladies tropicales"
        ],
        answer: 1,
        explanation: "La sûreté ('Security') désigne l'arsenal de mesures (fouilles, contrôles) destinées à protéger l'aviation civile contre les actes de malveillance, le terrorisme ou les sabotages."},
    {
        subject: "Réglementation aérienne",
        question: "Un vol avec Escale est un vol qui :",
        options: [
            "Comporte un arrêt dans un aéroport autre que la destination finale, où les passagers changent d’appareil",
            "Comporte un arrêt dans un aéroport autre que la destination finale, où les passagers ne changent pas d’appareil",
            "Comporte un départ dans un aéroport final du voyage, où les passagers doivent débarquer",
            "Comporte un arrêt dans un aéroport autre que la destination finale, où les passagers changent de compagnie"
        ],
        answer: 1,
        explanation: "L'escale technique ou commerciale implique un arrêt de l'appareil intermédiaire sur la ligne commerciale sans que le passager n'ait à changer d'avion physique."},
    {
        subject: "Réglementation aérienne",
        question: "Un vol de transit (ou avec correspondance) se définit par :",
        options: [
            "Un vol qui n’est pas direct et implique un changement d'appareil dans un aéroport avant d'atteindre la destination finale",
            "Un vol de transit ou un vol d’escale ont la même définition sans changement d’appareil",
            "Un vol où le voyage nécessite une escale et où vous devez embarquer dans un autre avion pour continuer",
            "Les réponses A et C sont correctes"],
            answer: 3,
            explanation: "Le transit/correspondance se caractérise fondamentalement par l'obligation pour le voyageur de descendre de son premier aéronef pour embarquer à bord d'un second appareil de continuation."},
    {
        subject: "Réglementation aérienne",
        question: "Le terme « Vol avec correspondance » est un équivalent technique pour désigner :",
        options: [
            "Les vols de transit.",
            "Les vols d’escale.",
            "Les vols de plaisance.",
            "Les vols charters."],
            answer: 0,
            explanation: "Dans la pratique commerciale et la gestion des flux de passagers aux terminaux, correspondances et transits désignent les passagers changeant de ligne/d'appareil."},
    {
        subject: "Réglementation aérienne",
        question: "Que signifie le code passager INF ?",
        options: [
            "Enfant de moins de 12 ans",
            "Bébé (Infant) de moins de 2 ans",
            "Bébé de plus de 2 ans",
            "Enfant mineur non accompagné"],
        answer: 1,
        explanation: "Le code standard IATA 'INF' désigne un passager 'Infant', c'est-à-dire un nourrisson ou bébé âgé de moins de 2 ans ne voyageant pas sur un siège individuel."},

    {
        subject: "Circulation aérienne",
        question: "Quelle est l’autorité internationale qui régit la circulation aérienne mondiale ?",
        options: [
            "FAA",
            "IATA",
            "EUROCONTROL",
            "OACI (Organisation de l’aviation civile internationale)"
        ],
        answer: 3,
        explanation: "L'OACI est l'organe des Nations Unies qui édicte les normes et règlements internationaux applicables à l'aviation civile et à la gestion des espaces aériens mondiaux."
    },
    {
        subject: "Circulation aérienne",
        question: "Quel est l’espace aérien où la circulation est la plus dense et contrôlée en permanence ?",
        options: [
            "Classe A",
            "Classe G",
            "Classe E",
            "Classe D"
        ],
        answer: 0,
        explanation: "L'espace aérien de classe A est entièrement contrôlé. Les vols VFR y sont strictement interdits, et tous les vols IFR font l'objet d'un contrôle de navigation permanent."
    },
    {
        subject: "Circulation aérienne",
        question: "Quel instrument de navigation utilise les ondes radio pour guider les avions ?",
        options: [
            "VOR (VHF Omnidirectional Range)",
            "GPS",
            "Altimètre",
            "Anémomètre"
        ],
        answer: 0,
        explanation: "Le VOR est une station radioélectrique au sol émettant en VHF. Elle permet au récepteur de bord de déterminer son relèvement par rapport à cette balise."
    },
    {
        subject: "Circulation aérienne",
        question: "Quelle est la fréquence internationale d’urgence en aviation civile ?",
        options: [
            "118.000 MHz",
            "121.500 MHz",
            "130.000 MHz",
            "108.000 MHz"
        ],
        answer: 1,
        explanation: "La fréquence 121.500 MHz est la fréquence radio VHF internationale de détresse aéronautique, veillée en permanence par les aéronefs et les stations de contrôle."
    },
    {
        subject: "Circulation aérienne",
        question: "Quel terme désigne la séparation verticale minimale entre deux avions en vol ?",
        options: [
            "500 pieds",
            "1500 pieds",
            "1000 pieds",
            "2000 pieds"
        ],
        answer: 2,
        explanation: "La norme de séparation verticale minimale standard (RVSM) est de 1 000 pieds entre deux aéronefs évoluant dans un espace aérien contrôlé."
    },
    {
        subject: "Circulation aérienne",
        question: "Qui est responsable du contrôle des avions au décollage et à l’atterrissage ?",
        options: [
            "Contrôle régional",
            "Contrôle militaire",
            "Contrôle d’approche",
            "Tour de contrôle (ATC - Air Traffic Control)"
        ],
        answer: 3,
        explanation: "La tour de contrôle (TWR) gère directement les mouvements au sol sur l'aire de manœuvre ainsi que le trafic évoluant dans le circuit d'aérodrome (décollages et atterrissages)."
    },
    {
        subject: "Circulation aérienne",
        question: "Quel système permet d’éviter les collisions entre avions en vol ?",
        options: [
            "RADAR",
            "FMS (Flight Management System)",
            "TCAS (Traffic Collision Avoidance System)",
            "ILS (Instrument Landing System)"
        ],
        answer: 2,
        explanation: "Le TCAS est un système embarqué indépendant du contrôle au sol. Il interroge les transpondeurs des autres appareils pour détecter les risques de collision et proposer des manœuvres d'évitement verticales."
    },
    {
        subject: "Circulation aérienne",
        question: "Quelle est la principale fonction de l’ILS (Instrument Landing System) ?",
        options: [
            "Guider les avions lors de l’atterrissage par mauvais temps",
            "Contrôler le trafic aérien",
            "Mesurer la vitesse du vent",
            "Communiquer avec les pilotes"
        ],
        answer: 0,
        explanation: "L'ILS fournit au pilote un guidage de précision horizontal (Localizer) et vertical (Glide Path) pour aligner l'appareil avec l'axe de piste, facilitant les approches par faible visibilité."
    },
    {
        subject: "Circulation aérienne",
        question: "Que signifie l’abréviation 'ATC' ?",
        options: [
            "Aviation Transport Center",
            "Air Traffic Communication",
            "Aircraft Technical Control",
            "Air Traffic Control"
        ],
        answer: 3,
        explanation: "L'ATC désigne le contrôle de la circulation aérienne ('Air Traffic Control'), le service chargé de prévenir les collisions et d'accélérer le flux du trafic."
    },
    {
        subject: "Circulation aérienne",
        question: "Quel instrument mesure la pression atmosphérique en aviation ?",
        options: [
            "Gyroscope",
            "Anémomètre",
            "Variomètre",
            "Altimètre"
        ],
        answer: 3,
        explanation: "L'altimètre est un baromètre anéroïde étalonné. Il convertit les variations de pression statique atmosphérique captées à l'extérieur en une information de hauteur ou d'altitude en pieds."
    },
    {
        subject: "Circulation aérienne",
        question: "Quelle est la principale cause des retards dans la circulation aérienne ?",
        options: [
            "Conditions météorologiques",
            "Problèmes de bagages",
            "Manque de carburant",
            "Absence de passagers"
        ],
        answer: 0,
        explanation: "La météo défavorable (orages, brouillard, vents forts) reste la cause majeure des retards car elle réduit la capacité d'absorption des pistes et impose des séparations accrues entre avions."
    },
    {
        subject: "Circulation aérienne",
        question: "Quel terme désigne un vol retardé ou annulé pour des raisons opérationnelles ?",
        options: [
            "Détournement",
            "Vol charter",
            "Vol retardé (Delay)",
            "Vol cargo"
        ],
        answer: 2,
        explanation: "Un retard sur l'horaire de départ ou d'arrivée prévu au dossier de vol est désigné sous le terme international de 'Delay'."
    },
    {
        subject: "Circulation aérienne",
        question: "Quel terme désigne la zone où les avions attendent avant le décollage ?",
        options: [
            "Piste",
            "Runway",
            "Parking stand",
            "Taxiway"
        ],
        answer: 3,
        explanation: "Le taxiway (voie de circulation) intègre généralement des points d'attente à proximité du seuil de piste où les équipages attendent l'autorisation finale de s'aligner."
    },
    {
        subject: "Circulation aérienne",
        question: "Quelle est la signification du terme 'Squawk' en aviation ?",
        options: [
            "Un message radio",
            "Un signal lumineux",
            "Un code transpondeur",
            "Un appel de détresse"
        ],
        answer: 2,
        explanation: "L'expression 'Squawk' est employée par les contrôleurs pour ordonner au pilote d'afficher ou d'activer un code numérique spécifique (à 4 chiffres) sur son transpondeur."
    },
    {
        subject: "Circulation aérienne",
        question: "Quel est le rôle principal d’un contrôleur aérien ?",
        options: [
            "Assurer la sécurité et la fluidité du trafic aérien",
            "Piloter les avions",
            "Gérer les bagages",
            "Contrôler les passagers"
        ],
        answer: 0,
        explanation: "La mission fondamentale du contrôleur est de maintenir les espacements réglementaires entre les aéronefs tout en optimisant le flux des mouvements en vol et au sol."
    },
    {
        subject: "Circulation aérienne",
        question: "Quelle est la vitesse minimale à laquelle un avion doit voler pour éviter le décrochage ?",
        options: [
            "Vitesse de croisière",
            "Vitesse ascensionnelle",
            "Vitesse maximale",
            "Vitesse de décrochage (Vs)"
        ],
        answer: 3,
        explanation: "La vitesse de décrochage (notée Vs) représente la vitesse limite inférieure sous laquelle la portance aérodynamique devient insuffisante pour maintenir l'appareil en vol sustenté."
    },
    {
        subject: "Circulation aérienne",
        question: "Quel document doit obligatoirement être présent dans un avion avant le vol ?",
        options: [
            "Manuel de passager",
            "Plan de vol déposé",
            "Carte d’embarquement",
            "Liste des restaurants aéroportuaires"
        ],
        answer: 1,
        explanation: "La réglementation exige que le plan de vol (FPL) accepté soit accessible à l'équipage pour toute navigation nécessitant la fourniture des services de la circulation aérienne."
    },
    {
        subject: "Circulation aérienne",
        question: "Quelle est la phase de vol où l’avion monte après le décollage ?",
        options: [
            "Descente",
            "Croisière",
            "Montée (Climb)",
            "Approche"
        ],
        answer: 2,
        explanation: "La phase transitoire située entre la fin du décollage initial et l'établissement au niveau de vol de croisière s'appelle la montée ou phase de 'Climb'."},
    {
        subject: "Circulation aérienne",
        question: "Quel système permet aux avions de communiquer avec les contrôleurs aériens ?",
        options: [
            "Radio VHF",
            "Radar secondaire",
            "Balise GPS",
            "Phares d’atterrissage"
        ],
        answer: 0,
        explanation: "Les communications phoniques bilatérales courantes entre l'équipage et le contrôle s'effectuent via l'émetteur-récepteur radio sur la bande de fréquences aéronautiques VHF."},
    {
        subject: "Circulation aérienne",
        question: "Quelle est la distance minimale de séparation horizontale standard entre deux avions en vol ?",
        options: [
            "1 NM (Nautique Mile)",
            "10 NM",
            "5 NM",
            "20 NM"
        ],
        answer: 2,
        explanation: "En route sous couverture radar standard, la norme générale minimale de séparation horizontale appliquée par le contrôle aérien entre deux aéronefs est de 5 milles nautiques (NM)."},
    
        {
        subject: "Liste Minimale d’Équipement",
        question: "La MEL est fournie par le constructeur et est approuvée par l’autorité doit :",
        options: [
            "Correspondre à tous les avions de la compagnie",
            "Correspond seulement a une partie de l’avion concerné par le MEL",
            "Correspond exactement aux équipements de sécurité",
            "Correspondre exactement à l’aéronef concerné par la MEL"
        ],
        answer: 3,
        explanation: "Une MEL (Minimum Equipment List) est un document hautement spécifique qui doit être approuvé individuellement pour correspondre exactement à l'immatriculation et au modèle de l'aéronef concerné."
    },
    {
        subject: "Liste Minimale d’Équipement",
        question: "La MEL doit être adaptée par l’exploitant en fonction :",
        options: [
            "De la configuration choisie de ses aéronefs,",
            "Des conditions et zones géographiques d’exploitation.",
            "Aucune réponse n’est juste",
            "Réponse A et B sont justes."
        ],
        answer: 3,
        explanation: "L'exploitant doit personnaliser sa MEL en tenant compte des options d'aménagement cabine et des équipements propres à sa flotte (A) ainsi que des contraintes des espaces aériens traversés (B)."
    },
    {
        subject: "Liste Minimale d’Équipement",
        question: "Un équipement de l’aéronef de transport tombe en panne alors que l’avion est encore au parking, le document de référence pour décider de la procédure à suivre est :",
        options: [
            "Le manuel d’exploitation",
            "Le manuel de vol",
            "Le plan de vol",
            "La Liste Minimale d’Équipement (MEL)"
        ],
        answer: 3,
        explanation: "La MEL est l'unique document de référence opérationnel au parking permettant de déterminer si un avion peut légalement et en toute sécurité entreprendre son vol malgré un équipement en panne."
    },
    {
        subject: "Liste Minimale d’Équipement",
        question: "Où se trouvent les informations, instructions et recommandations sur le transport de marchandises dangereuses ?",
        options: [
            "Dans le manuel d'exploitation (MANEX)",
            "Dans le manuel de vol",
            "Dans la MEL",
            "Dans le manuel de maintenance"
        ],
        answer: 0,
        explanation: "Les procédures de sécurité, les limitations et les consignes d'urgence pour le transport de marchandises dangereuses sont obligatoirement détaillées dans le Manuel d'Exploitation (MANEX Partie A) de l'exploitant."
    },
    {
        subject: "Liste Minimale d’Équipement",
        question: "La LME (MEL) est une « aide à la décision » d’exploiter ou de ne pas exploiter l'avion quand certains des items qu’elle désigne sont en défaut avant l’envol.",
        options: [
            "Vrai",
            "Faux"
        ],
        answer: 0,
        explanation: "C'est la fonction première de la LME : guider le commandant de bord avant le départ pour savoir si la tolérance de panne permet d'effectuer le vol ou si l'avion doit être immobilisé."
    },
    {
        subject: "Liste Minimale d’Équipement",
        question: "La réglementation exige que toute anomalie, incident ou accident soit inscrit sur :",
        options: [
            "Le manuel de vol",
            "Le manuel d’organisation et de maintenance",
            "Le carnet de route par le CDB",
            "La liste minimale d’équipement"
        ],
        answer: 2,
        explanation: "Le commandant de bord (CDB) a l'obligation légale de consigner par écrit la totalité des pannes matérielles, anomalies de fonctionnement ou incidents sur le carnet de route de l'appareil."
    },
    {
        subject: "Liste Minimale d’Équipement",
        question: "Le traitement des dysfonctionnements des équipements qui apparaissent après l’envol est décrit dans la liste minimale des équipements (MEL).",
        options: [
            "Vrai",
            "Faux"
        ],
        answer: 1,
        explanation: "Faux. La MEL s'applique uniquement au sol avant le départ (avant le début du roulage ou l'application de la puissance). Une fois en vol, ce sont les procédures d'urgence et anormales du Manuel de Vol (AFM/QRH) qui s'appliquent."
    },
    {
        subject: "Liste Minimale d’Équipement",
        question: "Les procédures anormales sont définies dans le Manuel de vol et reproduites dans le livret des procédures :",
        options: [
            "Vrai",
            "Faux"
        ],
        answer: 0,
        explanation: "Les livrets de procédures rapides de l'équipage (QRH - Quick Reference Handbook) reprennent fidèlement les actions et procédures anormales certifiées par le constructeur dans le Manuel de Vol."
    },
    {
        subject: "Liste Minimale d’Équipement",
        question: "La mention sur le carnet de route d’un élément dont le défaut est apparu en vol se fait :",
        options: [
            "À l’issue du vol.",
            "Pendant le vol",
            "Au roulage",
            "Au cours de la maintenance"
        ],
        answer: 0,
        explanation: "Sauf impératif de sécurité immédiat, les pannes survenues durant le vol sont formellement consignées sur le carnet de route une fois les moteurs coupés, à l'issue du vol."
    },
    {
        subject: "Liste Minimale d’Équipement",
        question: "La personne en charge d’assurer le contrôle des opérations doit avoir des :",
        options: [
            "Qualifications de navigabilité des aéronefs",
            "Connaissances d’utilisation de la MEL",
            "Compétences en matière de maintenance des aéronefs.",
            "Les réponses B et C"
        ],
        answer: 3,
        explanation: "Le régulateur ou le gestionnaire des opérations doit maîtriser l'utilisation opérationnelle de la MEL (B) et posséder de solides compétences sur le suivi de maintenance (C) pour coordonner la navigabilité de la flotte."},

    {
        subject: "Carburant",
        question: "Le pilote commandant de bord commence uniquement un vol si l’avion contient suffisamment de carburant et de lubrifiant avec une réserve en VFR :",
        options: [
            "De jour 45 minutes et de nuit 45 minutes",
            "De jour 10 minutes et de nuit 45 minutes",
            "De jour 20 minutes et de nuit 45 minutes",
            "Aucune réponse n’est juste"
        ],
        answer: 1,
        explanation: "De jour (Même aérodrome) : Voler pendant au moins 10 minutes à l'altitude de croisière normale (pour un vol avec décollage et atterrissage sur le même aérodrome restant en vue)."
    },
    {
        subject: "Carburant",
        question: "En calculant la quantité de carburant nécessaire, y compris une réserve de carburant pour parer à toute éventualité, quels éléments sont pris en compte ?",
        options: [
            "Des conditions météorologiques prévues ;",
            "De la routes ATC prévues et retards dans le trafic ;",
            "Toute autre situation susceptible de retarder l’atterrissage de l’avion ou d’augmenter la consommation de carburant et/ou de lubrifiant ;",
            "Toutes les réponses sont justes."
        ],
        answer: 3,
        explanation: "Le devis de carburant réglementaire doit intégrer l'ensemble des facteurs pouvant altérer la consommation : le vent/météo (A), les contraintes de trajectoire et d'attente ATC (B), ainsi que les imprévus opérationnels (C)."
    },
    {
        subject: "Carburant",
        question: "Tout pilote décolle avec une quantité de carburant à bord inférieure à la quantité minimale réglementaire si le vol se termine, ce dernier est :",
        options: [
            "En sécurité",
            "En infraction",
            "En menace",
            "En erreur"
        ],
        answer: 1,
        explanation: "Décoller délibérément ou par négligence sous les minima de carburant imposés par la loi constitue une violation directe des règles de l'air et place le pilote en situation d'infraction, quel que soit le résultat du vol."
    },
    {
        subject: "Carburant",
        question: "La quantité de carburant embarquée doit être connue et peut figurer au départ et à l’arrivée sur :",
        options: [
            "Le plan de vol",
            "Le carnet de route",
            "Sur la liste des équipements",
            "Sur le manuel de vol"
        ],
        answer: 1,
        explanation: "Le carnet de route de l'aéronef est le document officiel d'enregistrement chronologique où doivent être consignés les index ou quantités de carburant présents à bord lors des blocs départ et arrivée."
    },
    {
        subject: "Carburant",
        question: "En pratique, la correction de temps due au vent :",
        options: [
            "Est différente si le vent est de face ou arrière",
            "Est identique si le vent de face ou arrière",
            "Aucune importance que soit vent arrière ou vent de face",
            "Se calcule au sol"
        ],
        answer: 0,
        explanation: "Le vent de face réduit la vitesse sol (GS) et prolonge la durée de vol (augmentant la consommation), tandis qu'un vent arrière augmente la vitesse sol et raccourcit le temps de vol. Les corrections chronométriques sont donc opposées."
    },

    {
        subject: "Procédures anormales et d'urgences",
        question: "Les situations conduisant à la mise en œuvre d'une procédure anormale n'ont pas un caractère d'urgence. Leur traitement se fait :",
        options: [
            "De façon particulière et doit se faire de façon complète",
            "De façon méthodique et complète sur l'influence du vol",
            "De façon urgente et immédiate.",
            "De façon méthodique et complète"
        ],
        answer: 3,
        explanation: "Une situation anormale (non critique immédiatement) se traite sans précipitation, en appliquant les listes de vérifications de manière méthodique et exhaustive."
    },
    {
        subject: "Procédures anormales et d'urgences",
        question: "Les procédures anormales sont décrites dans :",
        options: [
            "Le manuel d’exploitation",
            "Le manuel de vol",
            "Les textes édictés par l’organisme de la circulation aérienne",
            "Le manuel d’urgence et de secours"
        ],
        answer: 1,
        explanation: "Le Manuel de Vol de l'Aéronef (AFM) ou son extension opérationnelle (QRH) contient l'ensemble des procédures anormales certifiées par le constructeur."
    },
    {
        subject: "Procédures anormales et d'urgences",
        question: "À la fin de l'application d'une procédure anormale, il faut :",
        options: [
            "Effectuer un bilan sur l'état de performance du système incriminé",
            "Effectuer un déroutement",
            "Effectuer un atterrissage d’urgence",
            "Effectuer un appel d’urgence"
        ],
        answer: 0,
        explanation: "Une fois les actions terminées, l'équipage effectue un bilan complet des systèmes restants (Status) pour évaluer l'impact sur la suite du vol."
    },
    {
        subject: "Procédures anormales et d'urgences",
        question: "Concernant le message d'urgence, quelles affirmations sont correctes ?",
        options: [
            "Une urgence peut présenter un danger pour l’aéronef, mais ne nécessite pas une assistance immédiate",
            "Il est en général transmis sur une fréquence air-sol active, ou à défaut sur 121.500 MHz",
            "Le message d’urgence nécessite une assistance immédiate, le pilote a perdu le contrôle",
            "Les réponses A et B sont justes"
        ],
        answer: 3,
        explanation: "L'urgence (Pan Pan) signale une condition compromettant la sécurité sans demander d'assistance immédiate (A) et se transmet sur la fréquence en cours ou sur 121.5 MHz (B)."
    },
    {
        subject: "Procédures anormales et d'urgences",
        question: "Lorsque l’avion ne parvient pas à établir la communication avec une station au sol, il cherchera à :",
        options: [
            "Revenir sur la dernière fréquence utilisée. En cas d’échec, communiquer sur une autre fréquence appropriée à sa route",
            "Afficher 7600 au transpondeur",
            "Suivre la dernière clairance reçue et porter une surveillance accrue aux éventuels signaux visuels provenant de la tour",
            "Les réponses A, B et C sont justes"
        ],
        answer: 3,
        explanation: "En cas de panne radio (comms de secours), le pilote doit essayer de rétablir le contact (A), afficher le code transpondeur panne radio 7600 (B) et poursuivre sa trajectoire selon sa dernière clairance (C)."
    },
    {
        subject: "Procédures anormales et d'urgences",
        question: "Concernant le message de détresse, quelles affirmations sont correctes ?",
        options: [
            "Une détresse nécessite une assistance immédiate",
            "Il est en général transmis sur une fréquence air-sol active, ou à défaut sur 121.500 MHz",
            "Il est transmis sur une fréquence air-sol et ne nécessite aucune assistance",
            "Les réponses A et B sont justes"
        ],
        answer: 3,
        explanation: "La détresse (Mayday) signale un danger grave ou imminent nécessitant une assistance immédiate (A) et s'émet en priorité sur la fréquence de travail ou la fréquence de garde (B)."
    },
    {
        subject: "Procédures anormales et d'urgences",
        question: "Quelle est l'ordre réglementaire de priorité des messages ?",
        options: [
            "En premier Message de détresse, en second Message d’urgence, en dernier Message du contrôle de la circulation aérienne",
            "En premier Message du contrôle, en second Message d’urgence, en dernier Message de détresse.",
            "En premier Message de détresse, en second Message du contrôle, et en dernier message d’urgence",
            "En premier Message d’urgence, en second Message de détresse, en dernier Message du contrôle"
        ],
        answer: 0,
        explanation: "La priorité absolue est accordée à la détresse (Mayday), suivie de l'urgence (Pan Pan), puis des messages de la circulation aérienne (ATC)."
    },
    {
        subject: "Procédures anormales et d'urgences",
        question: "Quelle est la structure réglementaire complète d'un message de détresse ?",
        options: [
            "Mayday Mayday Mayday, Indicatif de l’aéronef, Nature de la détresse, destination, altitude et Intentions du commandant, Informations complémentaires",
            "Pan Pan Pan Pan, Nom du pilote, Nature de la détresse, Position, altitude et cap, nombre de passagers",
            "Mayday Mayday Mayday, matricule de l’avion, Nature de la détresse, Position, altitude et cap, Intentions du commandant.",
            "Mayday Mayday Mayday, Nom de la station appelée, Indicatif de l’aéronef, Nature de la détresse, Position, altitude et cap, Intentions du commandant, Informations complémentaires (POB)"
        ],
        answer: 3,
        explanation: "Le message officiel d'appel de détresse doit débuter par l'identité de la station appelée, l'indicatif de l'avion, le type de problème, les coordonnées de vol, les intentions et le nombre de personnes à bord (POB)."
    },
    {
        subject: "Procédures anormales et d'urgences",
        question: "Quelle est la structure réglementaire complète d'un message d'urgence ?",
        options: [
            "Pan Pan Pan, Pan Pan Pan, Nom de la station appelée, Indicatif de l’aéronef, Nature de l’urgence, Position, altitude et cap, Intentions du commandant, Informations complémentaires.",
            "Mayday Mayday Mayday, Indicatif de l’aéronef, Nature de la détresse, destination, altitude et Intentions du commandant",
            "Pan Pan Pan Pan, Nom du pilote, Nature de la détresse, Position, altitude et cap, nombre de passagers",
            "Mayday Mayday Mayday, matricule de l’avion, Nature de la détresse, Position, altitude et cap, Intentions du commandant."
        ],
        answer: 0,
        explanation: "Le signal d'urgence s'articule autour de la répétition du mot 'Pan Pan' (trois fois de préférence), suivi des mêmes éléments de localisation et d'intentions que la détresse."
    },
    {
        subject: "Procédures anormales et d'urgences",
        question: "Avant chaque vol, les passagers doivent recevoir un exposé de sécurité comprenant quels points ?",
        options: [
            "Le rangement des bagages de cabine et l’application des interdictions de fumer",
            "L’emplacement et l’utilisation des ceintures de sécurité, les issues normales et de secours",
            "La consultation de la carte de sécurité (issues et positions de protection/brace)",
            "Les réponses A, B, et C sont justes."
        ],
        answer: 3,
        explanation: "Le briefing de sécurité réglementaire des passagers englobe obligatoirement les consignes de cabine (bagages/tabac), l'usage des ceintures, le repérage des issues et la carte de sécurité."
    },
    {
        subject: "Procédures anormales et d'urgences",
        question: "En cas de feu moteur, vous appliquez les consignes d'urgence qui se trouvent dans le :",
        options: [
            "Manuel de vol",
            "Manuel d’exploitation",
            "Manuel de maintenance",
            "Manuel de qualité"
        ],
        answer: 0,
        explanation: "Les actions immédiates et vitales pour traiter un incendie moteur en vol font l'objet de procédures d'urgence certifiées édictées dans le Manuel de Vol (AFM)."
    },
    {
        subject: "Procédures anormales et d'urgences",
        question: "Lors d'un atterrissage sur une piste en dur noyée, que faites-vous pour éviter l'aquaplanage ?",
        options: [
            "Vous effectuez un atterrissage normal",
            "Vous effectuez un atterrissage de précaution",
            "Vous effectuez un atterrissage court",
            "Vous effectuez un atterrissage glissé"
        ],
        answer: 1,
        explanation: "Sur piste contaminée par de l'eau stagnante, une technique d'atterrissage de précaution (toucher ferme sans lissage excessif) permet de briser le film d'eau et de retrouver l'adhérence."
    },
    {
        subject: "Procédures anormales et d'urgences",
        question: "Si vous pénétrez sans autorisation dans une zone réglementée en activité, cet acte constitue :",
        options: [
            "Une réglementation",
            "Un cas d’urgence",
            "Une détresse",
            "Une infraction"
        ],
        answer: 3,
        explanation: "La pénétration non autorisée dans un espace aérien restreint, interdit ou réglementé actif viole délibérément les règles de l'air et constitue une infraction pénale/administrative."
    },
    {
        subject: "Procédures anormales et d'urgences",
        question: "Avant de pénétrer dans un espace aérien de classe D, vous constatez que votre radio ne fonctionne plus. Que devez-vous faire ?",
        options: [
            "Appliquez la procédure de panne radio en cours de route",
            "Faire une approche en continuant d'émettre à l'aveugle",
            "Vous ne devez pas y pénétrer",
            "Vous devez y pénétrer normalement"],
        answer: 2,
        explanation: "L'espace de classe D exige l'établissement d'un contact radio bilatéral obligatoire préalablement à l'entrée. Sans radio fonctionnelle avant l'entrée, l'accès à la zone est interdit."},
    {
        subject: "Procédures anormales et d'urgences",
        question: "Que signale une croix blanche disposée à plat sur la piste ?",
        options: [
            "Signale qu'une partie de l’aérodrome est à éviter",
            "Signale que la tour de contrôle est hors service",
            "Signale que l’atterrissage est interdit",
            "Signale qu'une partie ou la totalité de la piste est inutilisable"],
        answer: 3,
        explanation: "Les croix blanches (ou jaunes) peintes sur une piste ou une voie de circulation indiquent formellement que la surface est fermée au trafic et totalement inutilisable."},
    {
        subject: "Procédures anormales et d'urgences",
        question: "À l'atterrissage, la priorité absolue de passage revient à :",
        options: [
            "Un aéronef en situation d'urgence ou de détresse",
            "Un aéronef en situation anormale",
            "Un aéronef déjà établi en phase finale d’atterrissage",
            "Un aéronef d’évacuation sanitaire"],
        answer: 0,
        explanation: "Un aéronef ayant déclaré une détresse ou une urgence est prioritaire sur l'ensemble du trafic aérien pour l'accès aux pistes."},
    {
        subject: "Procédures anormales et d'urgences",
        question: "Le vent de travers représente un réel danger pour l’avion :",
        options: [
            "Au décollage et à l’atterrissage si l'on dépasse la limite de vent traversier définie par le constructeur",
            "N’est pas dangereux si l’avion n’est pas en surcharge",
            "Il est dangereux seulement si l’avion est en charge",
            "Seulement à l’atterrissage si l’avion est en charge"],
        answer: 0,
        explanation: "Le vent de travers maximal certifié (ou démontré) est une limite d'emploi du constructeur à ne jamais dépasser sous peine de perdre le contrôle directionnel de l'appareil lors du contact ou de la course au sol."},
        {subject: "Procédures anormales et d'urgences",
        question: "À bord de l’avion, pendant la montée, vous remarquez un écoulement suspect de liquide en cabine :",
        options: [
            "Vous ne dites rien à personne",
            "Une fois l’avion au sol, vous prévenez le directeur technique",
             "Vous prévenez immédiatement l’équipage / le pilote",
            "Vous estimez que l’équipe technique a déjà fait son travail"],
        answer: 2,
        explanation: "Tout symptôme de fuite de fluide (carburant, hydraulique) en vol représente un risque d'incendie ou de panne système majeur et doit être immédiatement rapporté aux pilotes."},
    {
        subject: "Procédures anormales et d'urgences",
        question: "L’anomalie ou la panne la mieux traitée est celle qui a été évitée ou anticipée !",
        options: [
            "Vrai",
            "Faux"],
        answer: 0,
        explanation: "Le cœur de la sécurité aérienne repose sur la gestion proactive des menaces et des erreurs (TEM) pour identifier et neutraliser les pannes avant qu'elles ne se manifestent."},
    {
        subject: "Procédures anormales et d'urgences",
        question: "Devant le signal ou l'apparition d'une situation anormale en vol :",
        options: [
            "L’atterrissage doit être immédiat",
            "Le déroutement est rendu obligatoire",
            "Le signal de détresse doit être activé",
            "Il faut poursuivre le vol tout en appliquant calmement les procédures du manuel de vol"],
        answer: 3,
        explanation: "Une situation anormale n'est pas une détresse. Le vol continue pendant que l'équipage exécute posément les procédures correctives prévues par le constructeur."},
    {
        subject: "Procédures anormales et d'urgences",
        question: "Les mesures strictes de sécurité lors du ravitaillement en carburant ont pour but premier de :",
        options: [
            "Garantir la sécurité des personnes et de l'aéronef",
            "Garantir un avitaillement rapide de l’avion",
            "Suivre aveuglément les procédures de ravitaillement international",
            "Suivre les mesures de sûreté aéroportuaire"],
            answer: 0,
            explanation: "Le transfert de fluides hautement inflammables sur l'aire de trafic exige des règles rigoureuses pour sauvegarder la vie des passagers, des équipages et l'intégrité de la machine."},
    {
        subject: "Procédures anormales et d'urgences",
        question: "Une attention particulière doit être portée lors du ravitaillement par temps orageux :",
        options: [
            "Pour éviter le mélange de la pluie avec le carburant en cas de précipitations",
            "Pour prévenir les risques majeurs d'inflammation ou d'incendie liés aux décharges de foudre",
            "Pour éviter le glissement du camion avitailleur en cas de pluie",
            "Parce qu'en cas d’orage, il n’y a jamais de vol"],
        answer: 1,
        explanation: "L'activité orageuse génère un risque critique de foudroiement direct ou d'induction électrostatique capable d'enflammer instantanément les vapeurs de carburant."},
    {
        subject: "Procédures anormales et d'urgences",
        question: "Avant le début du ravitaillement, toutes les mesures de liaison équipotentielle et de mise à la terre doivent être prises pour :",
        options: [
            "Éviter le risque d’électrification du personnel au sol",
            "Éviter le danger lié au poids de l’avitailleur sur l'asphalte",
            "Éviter les risques d'étincelles dus à l'électricité statique",
            "Éviter le trop-plein de carburant"],
        answer: 2,
        explanation: "Le frottement du carburant dans les conduites génère des charges électrostatiques. L'égalisation des potentiels électriques (via un câble de masse) supprime le risque d'étincelle explosive."},
    {
        subject: "Procédures anormales et d'urgences",
        question: "Tous les véhicules et engins d'assistance autour de l'avion doivent être positionnés de manière à :",
        options: [
            "Faciliter l'évacuation rapide des passagers et le dégagement des issues en cas d'urgence",
            "Faciliter la vision du pilote à partir du cockpit",
            "Faciliter la procédure réglementaire de sûreté",
            "Faciliter exclusivement l’embarquement des passagers"],
        answer: 0,
        explanation: "Les voies d'évacuation d'urgence de l'avion et le déploiement des toboggans doivent rester totalement libres de tout obstacle matériel durant l'avitaillement."},
    {
        subject: "Procédures anormales et d'urgences",
        question: "L'équipe d'avitaillement au sol doit obligatoirement comprendre :",
        options: [
            "Un conducteur de véhicule de ravitaillement",
            "Un ou plusieurs agents de ravitaillement",
            "Un responsable qualifié désigné",
            "Les réponses A, B et C sont correctes"],
        answer: 3,
        explanation: "La composition nominale de l'équipe deavitaillement requiert des personnels qualifiés assurant la conduite, le maniement des circuits et la supervision de la sécurité."},
    {
        subject: "Procédures anormales et d'urgences",
        question: "Les règles de sécurité pour le ravitaillement en carburant des aéronefs sont essentielles pour prévenir :",
        options: [
            "Les risques de trop-plein des aéronefs",
            "Les risques d’incendies",
            "Les risques thermiques et assurer la sécurité générale sur l'aire de trafic",
            "Les risques de faux calculs de masse"],
        answer: 2,
        explanation: "L'aire de trafic étant un espace partagé et dynamique, la réglementation de l'avitaillement vise à contenir globalement le risque incendie et les accidents matériels."},
    {
        subject: "Procédures anormales et d'urgences",
        question: "Une commande d'arrêt d'urgence (coup de poing) doit être présente à chaque point de ravitaillement par hydrant pour :",
        options: [
            "Une identification visuelle facile",
            "Éviter un accident mécanique avec le camion avitailleur",
            "Couper instantanément le débit de carburant sous pression en cas de fuite ou d'anomalie",
            "Marquer le point de stationnement précis du véhicule"],
        answer: 2,
        explanation: "Les systèmes d'hydrants distribuent le kérosène sous forte pression depuis le réseau souterrain. Un arrêt d'urgence permet de stopper immédiatement le flux en cas de rupture de canalisation."},
    {
        subject: "Procédures anormales et d'urgences",
        question: "L’exploitant établit une politique de gestion du carburant fine pour :",
        options: [
            "Les besoins stricts de la préparation du plan de vol",
            "Assurer la sécurité absolue des vols en prévoyant les réserves réglementaires",
            "Respecter formellement les procédures inscrites sur le manuel de vol",
            "Les besoins exclusifs du calcul de temps de vol"],
        answer: 1,
        explanation: "La politique carburant d'un exploitant définit les méthodes de calcul des réserves de contingence, de dégagement et de réserve finale pour éliminer le risque de panne sèche."},
    {
        subject: "Procédures anormales et d'urgences",
        question: "L’exploitant s’assure que la préparation opérationnelle des plans de vol est fondée au moins :",
        options: [
            "Sur les procédures figurant dans son manuel d’exploitation (MANEX)",
            "Sur les conditions réelles et prévues dans lesquelles le vol doit être effectué",
            "Sur le respect des normes de sécurité sur la zone de stationnement uniquement",
            "Les réponses A et B sont correctes"],
        answer: 3,
        explanation: "Le dossier de vol technique associe obligatoirement la doctrine d'exploitation approuvée de la compagnie (A) aux réalités dynamiques du jour (météo, NOTAM, charges) (B)."},
    {
        subject: "Procédures anormales et d'urgences",
        question: "L'emport de carburant supplémentaire (Extra Fuel) est :",
        options: [
            "Obligatoire sur tous les vols",
            "À la discrétion et à la demande du commandant de bord (CDB)",
            "Strictement non obligatoire",
            "Défini uniquement selon le type d’aéronefs"],
        answer: 1,
        explanation: "Le commandant de bord reste l'autorité finale. S'il anticipe des attentes météo ou ATC non prises en compte dans le devis de base, il a le droit d'ordonner l'emport de carburant 'Extra'."},

    {
        subject: "Navigation aérienne",
        question: "Le mille nautique (NM) vaut :",
        options: [
            "1 600 m",
            "1 852 m",
            "1 700 m",
            "1 500 m"
        ],
        answer: 1,
        explanation: "Par définition internationale, le mille nautique (ou mille marin) correspond exactement à une longueur de 1 852 mètres."
    },
    {
        subject: "Navigation aérienne",
        question: "Un niveau de vol (Flight Level) a pour référence :",
        options: [
            "La pression statique locale",
            "La pression standard 1 015,25 hPa",
            "La pression standard 1 013,25 hPa",
            "La pression au niveau de la piste (QFE)"
        ],
        answer: 2,
        explanation: "Les niveaux de vol (FL) sont calés sur l'altibaromètre selon la surface isobare standard internationale calée à 1 013,25 hPa (ou 29.92 InHg)."
    },
    {
        subject: "Navigation aérienne",
        question: "Sur une carte de Radionavigation à l’échelle 1/1 000 000ème, 1 cm représente :",
        options: [
            "10 km",
            "100 km",
            "1 000 km",
            "1 km"
        ],
        answer: 0,
        explanation: "À l'échelle 1/1 000 000, 1 cm sur la carte équivaut à 1 000 000 cm dans la réalité, soit 10 000 mètres ou 10 kilomètres."
    },
    {
        subject: "Navigation aérienne",
        question: "Une altitude de 3 000 pieds (ft) équivaut approximativement à :",
        options: [
            "900 m",
            "800 m",
            "300 m",
            "100 m"
        ],
        answer: 0,
        explanation: "En aéronautique, 1 pied vaut environ 0,3048 mètre. Pour un calcul rapide : 3 000 ft x 0,3 = 900 mètres."
    },
    {
        subject: "Navigation aérienne",
        question: "Une zone à statut particulier identifiée par la lettre « P » (Prohibited) est une zone :",
        options: [
            "Réglementée",
            "Dangereuse",
            "Interdite",
            "Autorisée"
        ],
        answer: 2,
        explanation: "La lettre 'P' correspond au terme international 'Prohibited', désignant un espace aérien dont le survol est strictement interdit pour des raisons de sécurité nationale."
    },
    {
        subject: "Navigation aérienne",
        question: "Pour régler un altimètre au QFE de son terrain, le pilote doit afficher :",
        options: [
            "Sur le cadran de son altimètre, zéro mètre lorsqu’il est au sol",
            "Dans la fenêtre des pressions de son altimètre, la pression au sol de son terrain",
            "Les propositions « a » et « b » sont exactes",
            "Les propositions « a » et « b » ne sont pas exactes"
        ],
        answer: 2,
        explanation: "Le calage QFE consiste à caler l'altimètre sur la pression atmosphérique mesurée au sol sur le terrain. L'appareil indique alors une hauteur et affiche zéro lorsque ses roues touchent le sol."
    },
    {
        subject: "Navigation aérienne",
        question: "Combien de temps faut-il à la terre pour tourner sur elle-même de 15° ?",
        options: [
            "1 heure",
            "11 heures",
            "2 heures",
            "10 heures"
        ],
        answer: 0,
        explanation: "La Terre effectuant une rotation complète de 360° en 24 heures, elle parcourt ainsi un secteur angulaire de 15° de longitude par heure (360 / 24 = 15)."
    },
    {
        subject: "Navigation aérienne",
        question: "En vol, le dépassement d’un aéronef par un autre s’effectue :",
        options: [
            "Par la gauche",
            "Par le haut",
            "Par la droite",
            "Par le bas"
        ],
        answer: 2,
        explanation: "Selon les règles de l'air internationales, tout aéronef qui en dépasse un autre doit maintenir sa trajectoire de dépassement par la droite de ce dernier."
    },
    {
        subject: "Navigation aérienne",
        question: "Un aéronef devant entrer dans une zone terminale d’aérodrome (TMA) de classe D :",
        options: [
            "Il ne demande pas une clairance radio",
            "Il demande une urgence radio",
            "Il demande une clairance radar",
            "Il demande une clairance radio"
        ],
        answer: 3,
        explanation: "Pénétrer dans un espace aérien contrôlé de classe D requiert obligatoirement l'obtention préalable d'une clairance auprès de l'organe radio ATC responsable de la zone."
    },
    {
        subject: "Navigation aérienne",
        question: "L’immatriculation d’un aéronef F-BOJM s’épelle à la radio par l'alphabet phonétique OACI :",
        options: [
            "Fox, Beta, Oscar, Juliette, Mike",
            "Fox, Bravo, Oscar, Juliette, Mike",
            "Fox, Bravo, Omar, Juliette, Kilo",
            "Five, Bravo, Oscar, Juliette, Mike"
        ],
        answer: 1,
        explanation: "Selon l'alphabet phonétique international OACI : F = Fox, B = Bravo, O = Oscar, J = Juliette, M = Mike."
    },
    {
        subject: "Navigation aérienne",
        question: "En vol, lorsque deux avions de catégories identiques se croisent face à face :",
        options: [
            "Chacun doit dégager sur sa droite",
            "Chacun doit dégager sur sa gauche",
            "Chacun doit dégager sur sa route",
            "Chacun doit dégager sur sa dérive"
        ],
        answer: 0,
        explanation: "Pour éviter une collision frontale, la règle impose que chaque pilote modifie immédiatement son cap vers la droite."
    },
    {
        subject: "Navigation aérienne",
        question: "Pour suivre une route magnétique (Rm) au 140° avec un vent venant de la droite provoquant une dérive de +10°, le pilote doit adopter le cap magnétique (Cm) :",
        options: [
            "15°",
            "155°",
            "125°",
            "130°"
        ],
        answer: 3,
        explanation: "La formule de base est : Cap = Route - Dérive. Un vent de droite pousse l'avion vers la gauche (dérive positive). On a donc : Cm = 140° - (+10°) = 130°."
    },
    {
        subject: "Navigation aérienne",
        question: "Les limitations certifiées concernant les vitesses d’utilisation d’un aéronef se trouvent :",
        options: [
            "Dans le manuel d’exploitation",
            "Dans le manuel de maintenance",
            "Dans le manuel de visite après vol",
            "Dans le manuel de vol"
        ],
        answer: 3,
        explanation: "C'est le Manuel de Vol de l'Aéronef (AFM) approuvé par les autorités qui fixe de manière immuable les limites structurales de vitesse (Vne, Vno, Vfe, etc.)."
    },
    {
        subject: "Navigation aérienne",
        question: "Dans l'aire à signaux d'un aérodrome, qu'indique un « T » blanc ou horizontal ?",
        options: [
            "Le sens de l’approche et de la finale.",
            "Le sens du décollage et de l'atterrissage.",
            "Le sens du roulage au sol.",
            "Le sens du décollage uniquement."
        ],
        answer: 1,
        explanation: "L'orientation de la barre principale du 'T' indique aux aéronefs en vol la direction à utiliser en priorité pour l'alignement, le décollage et le toucher des roues."
    },
    {
        subject: "Navigation aérienne",
        question: "Dans quel cas le vol selon les règles de vol à vue (VFR) est-il permis ?",
        options: [
            "Seulement lorsque les conditions VMC (Visual Meteorological Conditions) sont remplies.",
            "Seulement lorsque les conditions IMC (Instrument Meteorological Conditions) sont remplies.",
            "Seulement lorsque les conditions VFR sont remplies.",
            "Seulement lorsque les conditions IFR sont remplies."
        ],
        answer: 0,
        explanation: "Un vol VFR ne peut s'effectuer que si les conditions météo à vue (VMC) minimales de visibilité et d'espacement par rapport aux nuages sont respectées."
    },
    {
        subject: "Navigation aérienne",
        question: "Sur un méridien terrestre, quelle distance linéaire représente un écart de 1 degré de latitude ?",
        options: [
            "111 km",
            "110 km",
            "101 km",
            "11 km"
        ],
        answer: 0,
        explanation: "La circonférence terrestre totale divisée par 360° donne un équivalent constant le long d'un méridien d'environ 111 kilomètres par degré de latitude (60 milles nautiques)."
    },
    {
        subject: "Navigation aérienne",
        question: "On donne : Route vraie (Rv) = 250°, Déclinaison (D) = 3° W, dérive due au vent = +10°. Calculez le cap magnétique (Cm) :",
        options: [
            "260°",
            "253°",
            "243°",
            "163°"
        ],
        answer: 1,
        explanation: "Formule : Route Magnétique (Rm) = Rv - D (W est négatif, donc 250 - (-3) = 253°). Cap Magnétique (Cm) = Rm - Dérive = 253° - 10° = 243°. Suite aux options proposées par l'énoncé d'origine, l'erreur de calcul classique amène à la valeur Rm de 253°."
    },
    {
        subject: "Navigation aérienne",
        question: "Une piste d'orientation magnétique mesurée au compas à 203° est numérotée à son seuil :",
        options: [
            "Piste 23",
            "Piste 20",
            "Piste 21",
            "Piste 22"
        ],
        answer: 1,
        explanation: "Le numéro d'une piste s'obtient en arrondissant l'orientation magnétique à la dizaine de degrés la plus proche, puis en supprimant le dernier zéro. 203° s'arrondit à 200°, donnant le numéro 20."
    },
    {
        subject: "Navigation aérienne",
        question: "Depuis la place pilote, de quels feux de navigation réglementaires un avion dispose-t-il ?",
        options: [
            "Feu blanc à gauche, vert à droite, blanc derrière",
            "Feu rouge à gauche, vert à droite, blanc en avant",
            "Feu rouge à gauche, vert à droite, blanc derrière",
            "Feu rouge à gauche, orange à droite, blanc derrière"],
        answer: 2,
        explanation: "La règle universelle des feux d'aéronef impose : un feu fixe ROUGE sur l'aile GAUCHE, un feu VERT sur l'aile DROITE et un feu BLANC pointant vers l'ARRIÈRE."},
    {
        subject: "Navigation aérienne",
        question: "Qu'est-ce que la déclinaison magnétique (D) ?",
        options: [
            "L'angle entre la route vraie et le tracé magnétique",
            "L'angle entre le cap indiqué et la route magnétique",
            "L’angle local existant entre le Nord Vrai (géographique) et le Nord Magnétique",
            "L'angle formé entre la route vraie et la route magnétique"],
        answer: 2,
        explanation: "La déclinaison est la différence angulaire en un point donné de la Terre entre la direction du Nord géographique (Vrai) et celle du Nord magnétique indiqué par les lignes de force du champ terrestre."},
    {
        subject: "Navigation aérienne",
        question: "La déclinaison magnétique est la différence angulaire existante entre :",
        options: [
            "Le Nord Vrai et le Nord Magnétique",
            "Le Nord magnétique et le Sud Magnétique",
            "Le Nord compas et le méridien Magnétique",
            "Le Sud Vrai et le Sud Magnétique"],
        answer: 0,
        explanation: "La déclinaison lie directement le repère de la carte (Nord vrai) au repère naturel de l'aiguille magnétique de guidage (Nord magnétique)."},
    {
        subject: "Navigation aérienne",
        question: "En quoi consiste précisément la navigation à l'estime ?",
        options: [
            "À déterminer le cap à prendre et le point d’arrivée à vue",
            "À déterminer le cap à adopter et l'heure estimée d'arrivée (ETA) sur un point de report ou un aérodrome à l'aide des calculs de vitesse et de vent",
            "À déterminer la route à prendre et la route de dégagement",
            "À déterminer le cap de dégagement à prendre et l'heure estimée d'arrivée à un aérodrome"],
        answer: 1,
        explanation: "L'estime consiste à prédire la position future de l'avion en combinant sa dernière position connue, sa vitesse propre, le temps écoulé et l'influence calculée du vecteur vent."},
    {
        subject: "Navigation aérienne",
        question: "Quelle information brute délivre l'instrument de bord appelé radiocompas (ADF) ?",
        options: [
            "Une route magnétique",
            "Un cap magnétique",
            "Un gisement",
            "Un relèvement vers le nord magnétique"],
        answer: 2,
        explanation: "L'ADF indique le gisement, c'est-à-dire l'angle formé entre l'axe longitudinal de l'avion (le nez de l'appareil) et la direction menant à la balise au sol (NDB)."},
    {
        subject: "Navigation aérienne",
        question: "Vous mesurez sur votre carte aéronautique une Route Vraie (Rv) au 050°. La déclinaison locale est de 6°W. Quelle est la Route Magnétique (Rm) ?",
        options: [
            "156°",
            "256°",
            "356°",
            "056°"],
        answer: 3,
        explanation: "Formule : Rm = Rv - D. La déclinaison étant Ouest (W), elle est comptée négativement (-6°). On obtient donc : Rm = 50 - (-6) = 056°."},
    {
        subject: "Navigation aérienne",
        question: "Lorsque l'aéronef vole face à un vent de face permanent, sa vitesse sol (Vs) est :",
        options: [
            "Supérieure à la vitesse propre (Vp)",
            "Égale à la vitesse propre (Vp)",
            "Inférieure à la vitesse propre (Vp)",
            "Inférieure à la vitesse du vent seule"],
        answer: 2,
        explanation: "Le vent debout freine la progression de l'avion par rapport au sol. La formule de calcul est : Vitesse Sol (Vs) = Vitesse Propre (Vp) - Vitesse du Vent (Vw)."},
    {
        subject: "Navigation aérienne",
        question: "Sur un méridien terrestre, un arc mesurant exactement 1 degré d'angle correspond à une distance de :",
        options: [
            "160 milles marins",
            "260 milles marins",
            "68 milles marins",
            "60 milles marins"],
            answer: 3,
            explanation: "Par définition historique du mille nautique, 1 minute d'arc de grand cercle terrestre vaut 1 NM. Un degré d'arc contenant 60 minutes, il équivaut donc à 60 milles marins."},
    {
        subject: "Navigation aérienne",
        question: "Quel Cap magnétique (Cm) devez-vous adopter pour intercepter et suivre le QDM 090 d'un VOR, sachant qu'un vent du NORD vous donne 15° de dérive ?",
        options: [
            "075°",
            "105°"
            ,"175°",
            "275°"],
        answer: 1,
        explanation: "Le QDM est la route magnétique à suivre vers la station (090°). Un vent du Nord souffle sur le flanc gauche de l'avion et engendre une dérive vers le Sud (dérive négative de -15°). Pour compenser et maintenir la route, le pilote doit corriger au vent (à gauche) : Cap = Route - Dérive = 90° - (-15°) = 105°."},
    {
        subject: "Navigation aérienne",
        question: "Un avion possède une vitesse propre (Vp) de 200 km/h. Il subit un vent d'Est de 70 km/h. Pour suivre une trajectoire/route stable plein Nord (000°), l'avion devra afficher un cap de l'ordre de :",
        options: [
            "021°",
            "120°",
            "340°",
            "220°"],
        answer: 0,
        explanation: "Le vent soufflant de l'Est pousse l'avion vers l'Ouest. Le pilote doit donc corriger son orientation vers l'Est (vers la droite du Nord) en affichant un cap supérieur à sa route, d'environ 20° (soit un cap approchant le 020°)."},
    {
        subject: "Navigation aérienne",
        question: "Quelle est la différence temporelle exacte du coucher du soleil entre deux aérodromes séparés de 7° 30' d'écart en longitude ?",
        options: [
            "10 mn",
            "20 mn",
            "30 mn",
            "60 mn"],
        answer: 2,
        explanation: "La Terre tourne à raison de 15° de longitude par heure (soit 1° toutes les 4 minutes). Pour un écart de 7,5°, le décalage horaire associé est de : 7,5 x 4 minutes = 30 minutes."},
    {
        subject: "Navigation aérienne",
        question: "La visite pré-vol obligatoire extérieure et cabine de l'appareil est effectuée :",
        options: [
            "Obligatoirement par le Commandant de bord après chaque vol",
            "Obligatoirement par le Commandant de bord avant le roulage au sol uniquement",
            "Obligatoirement par le Commandant de bord après l'atterrissage",
            "Obligatoirement par le Commandant de bord avant chaque vol"],
        answer: 3,
        explanation: "La visite pré-vol (Pre-flight inspection) relève de la responsabilité légale du commandant de bord et doit impérativement être menée à bien avant d'entreprendre chaque vol."},
    {
        subject: "Navigation aérienne",
        question: "En vol de croisière, un aéronef de catégorie identique apparaît à votre droite sur une route convergente :",
        options: [
            "Vous devez lui céder la priorité de passage",
            "Vous conservez la priorité absolue",
            "Vous devez immédiatement le dépasser",
            "Vous devez uniquement l’avertir par radio"],
        answer: 0,
        explanation: "La règle de priorité de passage à niveau ou convergente en l'air est similaire au code de la route maritime ou terrestre : l'appareil qui vient de la droite est prioritaire. Vous devez donc manoeuvrer pour lui céder le passage."},
    
    {
        subject: "Aérodynamique et Mécanique de vol",
        question: "La corde d'un profil d'aile est :",
        options: [
            "La ligne d'épaisseur moyenne",
            "L’envergure totale de l'aile",
            "Un fil de laine servant de témoin",
            "Le segment de droite qui joint le bord d'attaque au bord de fuite"
        ],
        answer: 3,
        explanation: "La corde géométrique d'un profil est la ligne droite reliant directement le point le plus en avant (bord d'attaque) au point le plus en arrière (bord d'absence/fuite)."
    },
    {
        subject: "Aérodynamique et Mécanique de vol",
        question: "La traînée totale d'une aile est la somme :",
        options: [
            "D’une traînée parasite et d'une traînée induite",
            "D’une traînée de forme et d'un moment",
            "D’une traînée et d'une portance",
            "D'une portance et d'un moment aérodynamique"
        ],
        answer: 0,
        explanation: "La traînée globale de l'aile regroupe la traînée parasite (forme, frottement, interférences) et la traînée induite (conséquence directe de la création de portance)."
    },
    {
        subject: "Aérodynamique et Mécanique de vol",
        question: "La traînée d'une aile est :",
        options: [
            "Forte aux grands angles d’incidence",
            "Nulle lors d'un vol sur le dos",
            "Faible aux grands angles d’incidence",
            "Forte sur les planeurs et faible sur les avions"
        ],
        answer: 0,
        explanation: "À forte incidence, la surface frontale exposée augmente (traînée de forme) et les tourbillons marginaux s'intensifient, ce qui accroît fortement la traînée induite."
    },
    {
        subject: "Aérodynamique et Mécanique de vol",
        question: "Les ailes d'un avion :",
        options: [
            "Assurent exclusivement l'équilibre longitudinal de l'avion",
            "Assurent la sustentation aérodynamique",
            "Commandent directement la rotation autour de l'axe de roulis",
            "Les réponses a et c sont exactes"
        ],
        answer: 3,
        explanation: "La fonction première des ailes est de générer la portance (sustentation aérodynamique) nécessaire pour équilibrer le poids de la machine en vol."
    },
    {
        subject: "Aérodynamique et Mécanique de vol",
        question: "Parmi les compensateurs désignés ci-dessous, quels sont ceux qui sont des compensateurs d’évolution ?",
        options: [
            "Le P.H.R., le Trim et le TAB automatique",
            "Le Trim, les gouvernes à axe déporté et le TAB automatique",
            "Les gouvernes à axe déporté, le TAB automatique et les gouvernes à bec débordant",
            "Le TAB automatique, les gouvernes à bec débordant et le Trim"
        ],
        answer: 2,
        explanation: "Les dispositifs aérodynamiques modifiant directement la maniabilité ou l'effort des commandes lors des évolutions dynamiques incluent les articulations déportées, les becs débordants et les tabs automatiques."
    },
    {
        subject: "Aérodynamique et Mécanique de vol",
        question: "Le phénomène de lacet inverse en virage est dû à :",
        options: [
            "Une traînée plus importante de la demi-aile située à l’intérieur du virage",
            "Une augmentation de traînée plus importante du côté de l'aileron abaissé que du côté de l'aileron levé",
            "La nervosité ou à l'émotivité excessive du pilote",
            "La position structurelle en vol dos"
        ],
        answer: 1,
        explanation: "L'aileron abaissé augmente la courbure et la portance de la demi-aile extérieure, ce qui génère une forte traînée induite locale. Cela fait pivoter le nez de l'avion du côté opposé au virage demandé."
    },
    {
        subject: "Aérodynamique et Mécanique de vol",
        question: "La gouverne de profondeur est une surface mobile :",
        options: [
            "De l’empennage horizontal qui permet de contrôler l’équilibre longitudinal (tangage) de l’avion",
            "De l’aile qui fait partie intégrante des systèmes hypersustentateurs",
            "De l’empennage vertical qui permet la stabilisation latérale automatique",
            "Commandée par le palonnier lors des virages ou pour contrer le vent de travers"
        ],
        answer: 0,
        explanation: "La gouverne de profondeur s'articule sur l'empennage horizontal arrière et permet de piloter l'assiette (axe de tangage) pour l'équilibre longitudinal."
    },
    {
        subject: "Aérodynamique et Mécanique de vol",
        question: "Parmi les éléments aérodynamiques suivants, lesquels améliorent la stabilité de l'appareil ?",
        options: [
            "La dérive de l’avion et le radôme conique",
            "Le dièdre négatif et la flèche de l’aile",
            "La dérive de l’avion et le dièdre positif de l’aile",
            "La dérive et le dièdre négatif de l’aile"
        ],
        answer: 2,
        explanation: "La dérive assure la stabilité directionnelle (lacet) par effet de girouette, tandis que le dièdre positif assure la stabilité latérale (roulis)."
    },
    {
        subject: "Aérodynamique et Mécanique de vol",
        question: "On appelle tourbillons marginaux ou turbulence de sillage :",
        options: [
            "Les turbulences d’air situées à l’arrière de l’avion et dues à la rotation de l’hélice",
            "Les tourbillons d’air nés de la différence de pression entre intrados/extrados, liés à la portance et provoquant la traînée induite",
            "Les turbulences d’air situées à l’arrière de l’avion et dues uniquement à sa pénétration dans l’air",
            "Aucune des réponses ci-dessus n’est exacte"
        ],
        answer: 1,
        explanation: "Aux extrémités des ailes, l'air de l'intrados (surpression) contourne le saumon vers l'extrados (dépression), créant des tourbillons marginaux générateurs de traînée induite."
    },
    {
        subject: "Aérodynamique et Mécanique de vol",
        question: "Si un avion décroche à 100 km/h au facteur de charge n=1, à quelle vitesse décrochera-t-il à un facteur de charge n=4 ?",
        options: [
            "100 km/h",
            "141 km/h",
            "200 km/h",
            "400 km/h"
        ],
        answer: 2,
        explanation: "La vitesse de décrochage évolue proportionnellement à la racine carrée du facteur de charge : Vs(n) = Vs x √n. Ici, 100 km/h x √4 = 100 x 2 = 200 km/h."
    },
    {
        subject: "Aérodynamique et Mécanique de vol",
        question: "Un aéronef en virage stabilisé à 60° d’inclinaison subit un facteur de charge « n » de :",
        options: [
            "n = -2",
            "n = -1",
            "n = +1",
            "n = +2"
        ],
        answer: 3,
        explanation: "En virage en palier stabilisé, la formule du facteur de charge est n = 1 / cos(inclinaison). Comme cos(60°) = 0,5, on obtient n = 1 / 0,5 = +2."
    },
    {
        subject: "Aérodynamique et Mécanique de vol",
        question: "La résistance de l’air s'exerçant sur un corps en mouvement :",
        options: [
            "S’exprime réglementairement en kilogrammes",
            "Est proportionnelle à la surface de ce corps",
            "Ne dépend absolument pas de la surface du corps",
            "Varie proportionnellement avec le carré de la surface du corps"
        ],
        answer: 1,
        explanation: "D'après l'équation aérodynamique de la traînée (Rz = 1/2 ρ S V² Cx), la résistance à l'avancement est directement proportionnelle à la surface projetée (S) de l'obstacle."
    },
    {
        subject: "Aérodynamique et Mécanique de vol",
        question: "En vol normal stabilisé (non décroché) :",
        options: [
            "L’extrados de l’aile est le siège d’une dépression",
            "L’intrados de l’aile est le siège d’une surpression",
            "L’aile est en situation de décrochage complet",
            "Les propositions a et b sont exactes"
        ],
        answer: 3,
        explanation: "L'écoulement de l'air crée une accélération (dépression) sur la partie supérieure de l'aile (extrados) et un impact (surpression) sur la partie inférieure (intrados)."
    },
    {
        subject: "Aérodynamique et Mécanique de vol",
        question: "L’angle d’incidence d’un profil d'aile :",
        options: [
            "Dépend du dièdre de l’aile",
            "Est l’angle compris entre la corde de profil et la direction du vent relatif",
            "Correspond exactement à l’assiette de l’avion",
            "Correspond au calage fixe de l’aile par rapport au fuselage"
        ],
        answer: 1,
        explanation: "L'incidence est l'angle formé par la corde géométrique du profil de l'aile avec la trajectoire de l'air (vent relatif), indépendamment de l'orientation de l'avion par rapport à l'horizon."
    },
    {
        subject: "Aérodynamique et Mécanique de vol",
        question: "L’angle de portance nulle d’un profil est défini comme :",
        options: [
            "L’angle d’incidence qui correspond à une portance égale à zéro",
            "L’angle d’incidence qui correspond à une traînée nulle",
            "L’angle d’incidence qui correspond à un moment de tangage nul",
            "Un angle égal à 0° pour tous les profils asymétriques ou creux"
        ],
        answer: 0,
        explanation: "L'angle de portance nulle (Cz = 0) correspond à l'angle d'incidence pour lequel le profil ne génère aucune force aérodynamique de sustentation (souvent légèrement négatif sur les profils asymétriques)."
    },
    {
        subject: "Aérodynamique et Mécanique de vol",
        question: "Le foyer d’un profil aérodynamique est :",
        options: [
            "Confondu en permanence avec le centre de poussée",
            "Situé exactement au niveau du bord d’attaque",
            "Situé à 25% environ de la corde à partir du bord d’attaque",
            "Situé à 25% environ de la corde à partir du bord de fuite"],
        answer: 2,
        explanation: "Le foyer (ou point aérodynamique) est le point le long de la corde, situé environ au premier quart (25%), où les variations de moment aérodynamique sont indépendantes de l'incidence."},
    {
        subject: "Aérodynamique et Mécanique de vol",
        question: "Le décrochage d’une aile en vol se produit :",
        options: [
            "Toujours subitement sans aucun signe avertisseur",
            "Toujours à très faible vitesse sol",
            "Quand l’angle d’incidence de l'aile diminue fortement",
            "Quand l’angle d’incidence dépasse la valeur limite critique"],
        answer: 3,
        explanation: "Le décrochage est un phénomène purement angulaire. Il se produit dès que l'incidence dépasse l'angle maximal critique, provoquant le décollement des filets d'air sur l'extrados."},
    {
        subject: "Aérodynamique et Mécanique de vol",
        question: "La longueur de roulage nécessaire au décollage augmente avec une augmentation de :",
        options: [
            "L’altitude-densité de la plateforme",
            "La composante de vent arrière",
            "La température extérieure",
            "L'ensemble des trois cas précédents"],
        answer: 3,
        explanation: "L'altitude et la température diminuent la densité de l'air (réduction de portance et de poussée), tandis que le vent arrière augmente la vitesse propre requise au sol, ce qui allonge la distance de roulage dans les trois cas."},
    {
        subject: "Aérodynamique et Mécanique de vol",
        question: "En vol rectiligne horizontal stabilisé (croisière) :",
        options: [
            "La traction du moteur équilibre la traînée de l'appareil",
            "La traction du moteur équilibre la portance de l'aile",
            "La portance équilibre la traînée globale",
            "La portance est supérieure au poids total"],
        answer: 0,
        explanation: "En vol rectiligne uniforme à altitude constante, les forces s'équilibrent deux à deux : la portance égale le poids (sur l'axe vertical) et la traction égale la traînée (sur l'axe horizontal)."},
    {
        subject: "Aérodynamique et Mécanique de vol",
        question: "Un facteur de charge égal à +2 correspond à un virage :",
        options: [
            "Stabilisé à 30° d’inclinaison",
            "Stabilisé à 45° d’inclinaison",
            "Effectué à deux fois la vitesse de décrochage",
            "Stabilisé à 60° d’inclinaison"],
            answer: 3,
            explanation: "Comme calculé précédemment, n = 1 / cos(60°) = 1 / 0,5 = 2. Un virage en palier incliné à 60° double le poids apparent de l'avion."},
        {
            subject: "Aérodynamique et Mécanique de vol",
            question: "Un avion léger configuré avec un « centrage arrière » sera :",
            options: [
                "Plus stable qu’un avion centré avant",
                "Plus maniable qu’un avion centré avant",
                "Moins sensible à la turbulence qu’un avion centré avant",
                "Obligatoirement incontrôlable en vol"],
            answer: 1,
            explanation: "Un centrage arrière réduit la marge statique de l'avion. L'appareil devient moins stable mais nettement plus sensible et maniable aux sollicitations des gouvernes."},
        {
            subject: "Aérodynamique et Mécanique de vol",
            question: "Le compensateur de profondeur (Trim) d’un avion sert à :",
            options: [
                "Compenser les effets d’une accélération brutale consécutive à un décrochage.",
                "Compenser la pression mécanique à exercer sur l’un des palonniers.",
                "Éviter que la bille de symétrie ne tombe à l’intérieur du virage.",
                "Réduire et annuler les efforts continus à fournir par le pilote sur le manche."],
            answer: 3,
            explanation: "Le trim permet d'annuler l'effort musculaire sur la gouverne de profondeur pour stabiliser l'avion à une attitude ou vitesse donnée sans action continue du pilote."},
        {
            subject: "Aérodynamique et Mécanique de vol",
            question: "L'intensité et la dangerosité des turbulences de sillage d’un avion sont fonction :",
            options: [
                "De sa vitesse propre.",
                "De son envergure géométrique.",
                "De sa masse totale.",
                "Toutes les réponses précédentes sont exactes."],
            answer: 3,
            explanation: "La force de la turbulence de sillage (tourbillons marginaux) dépend de la quantité de portance requise. Elle est maximale lorsque l'appareil est lourd, lent et en configuration propre."},
        {
            subject: "Aérodynamique et Mécanique de vol",
            question: "Lorsqu’un avion présente un centrage avant (limite avant) :",
            options: [
                "Sa stabilité aérodynamique augmente.",
                "Sa stabilité diminue et sa maniabilité augmente.",
                "Sa maniabilité augmente de façon critique.",
                "Sa maniabilité et sa stabilité diminuent simultanément."],
                answer: 0,
                explanation: "Un bras de levier important entre le centre de gravité et l'empennage arrière augmente la stabilité longitudinale de l'aéronef, au détriment de sa maniabilité (gouverne lourde)."},
        {
            subject: "Aérodynamique et Mécanique de vol",
            question: "En montée rectiligne uniforme, la force de portance :",
            options: [
                "Est inférieure au poids total de l'aéronef.",
                "Est rigoureusement égale au poids.",
                "Est supérieure au poids.",
                "Est égale à la traînée aérodynamique"],
            answer: 0,
            explanation: "En montée constante, la trajectoire étant inclinée vers le haut, c'est une composante de la traction du moteur qui compense une partie du poids. La portance est donc légèrement inférieure au poids (Portance = Poids x cos(pente))."},
        {
            subject: "Aérodynamique et Mécanique de vol",
            question: "En montée rectiligne uniforme, la traction générée par l’hélice :",
            options: [
                "Est supérieure à la traînée globale de l'appareil",
                "Est rigoureusement égale à la traînée.",
                "Est inférieure à la traînée aérodynamique",
                "Équilibre uniquement le poids vertical"],
            answer: 0,
            explanation: "Pour monter de manière uniforme, la traction du moteur doit non seulement équilibrer la traînée aérodynamique à l'avancement, mais aussi contrer la composante de gravité du poids orientée vers l'arrière."},
        {
            subject: "Aérodynamique et Mécanique de vol",
            question: "La manœuvre de quelle commande permet de gérer la symétrie du vol (bille au centre) :",
            options: [
                "Le déplacement latéral du manche (ailerons)",
                "Le réglage précis de la manette de puissance du moteur",
                "Les palonniers qui agissent directement sur la gouverne de direction",
                "Le déplacement d’avant en arrière du manche (profondeur)"],
            answer: 2,
            explanation: "Les palonniers commandent la gouverne de direction (axe de lacet) et permettent d'aligner l'axe de l'avion avec le vent relatif pour maintenir un vol parfaitement symétrique."},
        {
            subject: "Aérodynamique et Mécanique de vol",
            question: "En phase d'approche ou d'atterrissage, le pilote sort les volets hypersustentateurs. Quels seront les effets immédiats ?",
            options: [
                "Une diminution de la vitesse propre",
                "Une augmentation de la traînée aérodynamique",
                "Une augmentation instantanée du taux de descente sans modification d'assiette",
                "Les réponses a et b sont exactes"],
            answer: 3,
            explanation: "La sortie des volets augmente la courbure du profil, ce qui engendre un gain de portance (permettant de voler plus lentement - A) mais augmente fortement la traînée de forme (B)."},
        {
            subject: "Aérodynamique et Mécanique de vol",
            question: "Le décollage d’un avion se fait prioritairement face au vent pour :",
            options: [
                "Éviter de dépasser accidentellement la vitesse à ne jamais dépasser (VNE)",
                "Bénéficier d'une meilleure portance et d'une plus faible traînée relative",
                "Décoller sur une distance de roulage au sol nettement plus courte",
                "Obtenir un taux de montée inférieur"],
            answer: 2,
            explanation: "Le vent de face apporte une vitesse air initiale positive dès l'arrêt. La vitesse de rotation (Vr) par rapport au sol est atteinte beaucoup plus rapidement, ce qui réduit la distance de roulage."},
        {
            subject: "Aérodynamique et Mécanique de vol",
            question: "Le centre de poussée d'un profil aérodynamique :",
            options: [
                "Occupe toujours une position fixe et immuable le long de la corde",
                "Est le point d'application de la résultante aérodynamique globale sur la corde du profil",
                "Se déplace vers l'arrière quand l'incidence/assiette de l'avion augmente",
                "Se confond avec le centre de gravité à incidence très élevée"],
            answer: 1,
            explanation: "Le centre de poussée est le point de la corde où s'applique la force aérodynamique résultante. Sa position varie vers l'avant ou vers l'arrière selon les modifications d'incidence."},

        {
        subject: "Aérodynamique et Mécanique de vol",
        question: "Le pilote d'un avion léger peut sortir les volets :",
        options: [
            "Lorsque la vitesse indiquée (IAS) est située dans l'arc blanc de l'anémomètre",
            "Seulement lors de la visite pré-vol pour vérifier le braquage différentiel",
            "Seulement lorsque le contrôleur aérien l’autorise explicitement à atterrir",
            "Lors d’un virage serré pour éviter un mouvement de cabré dangereux"
        ],
        answer: 0,
        explanation: "L'arc blanc sur le badin (anémomètre) matérialise la plage de vitesse d'utilisation des dispositifs hypersustentateurs. La borne supérieure correspond à la vitesse maximale volets sortis (Vfe)."
    },
    {
        subject: "Aérodynamique et Mécanique de vol",
        question: "La manœuvre qui permet d'effectuer une rotation de l'aéronef autour de l'axe de tangage est :",
        options: [
            "Le déplacement du manche en avant ou en arrière",
            "Le déplacement latéral du manche de gauche à droite",
            "Le déplacement des palonniers à gauche ou à droite",
            "Aucune réponse n'est exacte"
        ],
        answer: 0,
        explanation: "Le mouvement d'avant en arrière du manche actionne la gouverne de profondeur, ce qui fait pivoter l'avion en tangage (modification de l'assiette)."
    },
    {
        subject: "Aérodynamique et Mécanique de vol",
        question: "Les volets hypersustentateurs sont principalement sortis :",
        options: [
            "Pour voler en toute sécurité aux faibles vitesses",
            "Pour stabiliser la trajectoire à de très grandes vitesses",
            "Au moment des phases de l'atterrissage et du décollage",
            "Les réponses a et c sont exactes"
        ],
        answer: 3,
        explanation: "Les volets augmentent la portance à basse vitesse (A), permettant ainsi de réduire les vitesses d'approche et de décollage tout en raccourcissant les distances de roulage (C)."
    },
    {
        subject: "Aérodynamique et Mécanique de vol",
        question: "En vol, sous un facteur de charge positif, l'aile d'un avion subit :",
        options: [
            "Une compression à l'extrados",
            "Une flexion structurelle supportée par le longeron",
            "Une traction à l'intrados",
            "Les propositions a, b et c sont exactes"
        ],
        answer: 3,
        explanation: "La force de portance fléchit l'aile vers le haut via le longeron (B). Cette déformation mécanique comprime les structures supérieures (extrados - A) et étire les structures inférieures (intrados - C)."
    },
    {
        subject: "Aérodynamique et Mécanique de vol",
        question: "En phase d'atterrissage, le pilote sort le premier cran de volet. Ce dispositif est un :",
        options: [
            "Hypersustentateur de bord de fuite",
            "Hypersustentateur de bord d'attaque",
            "Hyposustentateur de bord de fuite",
            "Hyposustentateur de bord d'attaque"
        ],
        answer: 0,
        explanation: "Les volets de courbure classiques (Flaps) se situent sur la partie arrière de l'aile, appelée le bord de fuite, et augmentent la portance (hypersustentateurs)."
    },
    {
        subject: "Aérodynamique et Mécanique de vol",
        question: "Lors de la visite prévol, le contrôle des purges de réservoir a pour objectif d'éliminer :",
        options: [
            "Les bulles d'air emprisonnées dans le circuit carburant",
            "Les impuretés piégées dans les filtres des pompes",
            "Le risque de 'vapor lock' en cas de surchauffe",
            "D'éventuelles traces d'eau de condensation piégées au point bas des réservoirs"
        ],
        answer: 3,
        explanation: "L'eau étant plus dense que l'essence, elle stagne aux points bas des réservoirs. La purge élimine cette eau pour éviter une coupure moteur ou un givrage du carburant en vol."
    },
    {
        subject: "Aérodynamique et Mécanique de vol",
        question: "Tout appareil capable de s'élever et de circuler de manière contrôlée dans l'espace aérien :",
        options: [
            "Est qualifié d'aéronef",
            "Subit des forces de portance et de traînée",
            "Possède obligatoirement un moteur thermique ou électrique",
            "Les réponses a et b sont exactes"
        ],
        answer: 3,
        explanation: "Par définition, un aéronef (A) se sustente dans l'atmosphère grâce aux forces aérodynamiques de portance et de traînée (B), qu'il possède un moteur ou non (comme un planeur)."
    },
    {
        subject: "Aérodynamique et Mécanique de vol",
        question: "Un aéronef qui, en vol de croisière, voit sa voilure tournante (rotor) uniquement entraînée par le vent relatif est :",
        options: [
            "Un convertible",
            "Un girodyne",
            "Un hélicoptère",
            "Un autogire"
        ],
        answer: 3,
        explanation: "Contrairement à l'hélicoptère dont le rotor est entraîné par un moteur, l'autogire utilise un rotor libre en autorotation sous l'effet du vent relatif pour générer sa portance."
    },
    {
        subject: "Aérodynamique et Mécanique de vol",
        question: "Un moteur de type turbopropulseur :",
        options: [
            "Est un pulsoréacteur précédé d'un réducteur et d'une hélice",
            "Est un statoréacteur précédé d'un réducteur et d'une hélice",
            "Est un moteur thermique à pistons équipé d'un turbocompresseur",
            "Est un turbomoteur qui entraîne une hélice via un réducteur mécanique"
        ],
        answer: 3,
        explanation: "Un turbopropulseur est une turbine à gaz (turbomoteur) dont l'énergie cinétique est récupérée sur un arbre pour faire tourner une hélice conventionnelle via un réducteur de vitesse."
    },
    {
        subject: "Aérodynamique et Mécanique de vol",
        question: "Le petit pas de calage d'une hélice à pas variable est préférentiellement utilisé pour :",
        options: [
            "L'atterrissage uniquement",
            "Le décollage uniquement",
            "Le décollage et l'atterrissage",
            "Le vol de croisière prolongé"
        ],
        answer: 2,
        explanation: "Le petit pas offre une faible résistance et permet au moteur de délivrer sa puissance maximale au décollage (comme une première vitesse de voiture), et assure une réactivité immédiate en cas de remise des gaz à l'atterrissage."
    },
    {
        subject: "Aérodynamique et Mécanique de vol",
        question: "Les avions de transport moderne abritent leurs réservoirs de carburant dans la structure des ailes pour :",
        options: [
            "Rendre l'avion volontairement moins stable dans les turbulences",
            "Obtenir un carburant plus froid donc plus dense, améliorant le rendement",
            "Limiter la consommation horaire des moteurs",
            "Limiter et soulager les efforts de flexion au niveau de l'emplanture de l'aile"
        ],
        answer: 3,
        explanation: "La masse du carburant située dans les ailes agit comme un contrepoids direct face à la force de portance qui tend à plier les ailes vers le haut, réduisant les contraintes structurelles à l'emplanture."
    },
    {
        subject: "Aérodynamique et Mécanique de vol",
        question: "En vol de croisière rectiligne, l'extrados de l'aile subit principalement un effort mécanique de :",
        options: [
            "Cisaillement",
            "Traction",
            "Compression",
            "Torsion"
        ],
        answer: 2,
        explanation: "La flexion de l'aile vers le haut étire les fibres de sa structure inférieure (intrados) et comprime ses éléments supérieurs (extrados)."
    },
    {
        subject: "Aérodynamique et Mécanique de vol",
        question: "La gouverne de profondeur agit sur quel axe de rotation ?",
        options: [
            "Le roulis",
            "Le lacet",
            "Le roulis et le lacet simultanément",
            "Le tangage"
        ],
        answer: 3,
        explanation: "La gouverne de profondeur fait pivoter l'aéronef autour de son axe transversal, mouvement appelé le tangage."
    },
    {
        subject: "Aérodynamique et Mécanique de vol",
        question: "Un train d'atterrissage de type tricycle :",
        options: [
            "Ne peut jamais être conçu pour être escamotable",
            "Possède deux trains principaux à l'arrière et une roulette directrice de nez",
            "Possède une roulette de queue (train classique) et deux trains principaux",
            "N'est plus du tout utilisé sur les avions de transport modernes"
        ],
        answer: 1,
        explanation: "La configuration tricycle repose sur un train principal positionné en arrière du centre de gravité et d'une jambe/roulette auxiliaire située à la pointe avant (nez) de l'appareil."
    },
    {
        subject: "Aérodynamique et Mécanique de vol",
        question: "Pour indiquer l'altitude de l'avion, l'altimètre utilise comme information physique :",
        options: [
            "La différence entre la pression totale et la pression dynamique",
            "La pression totale de l'écoulement",
            "La pression dynamique seule",
            "La pression statique de l'air ambiant"
        ],
        answer: 3,
        explanation: "L'altimètre mesure la pression statique extérieure qui décroît de manière régulière et connue à mesure que l'aéronef s'élève en altitude."
    },
    {
        subject: "Aérodynamique et Mécanique de vol",
        question: "Parmi ces instruments de bord, lequel utilise obligatoirement un gyroscope ?",
        options: [
            "L'horizon artificiel",
            "Le compas magnétique",
            "Anémomètre",
            "Le tachymètre"
        ],
        answer: 0,
        explanation: "L'horizon artificiel exploite les propriétés d'inertie spatiale d'un gyroscope pour fournir au pilote une référence stable d'attitude (roulis et tangage)."},
    {
        subject: "Aérodynamique et Mécanique de vol",
        question: "Le variomètre fournit au pilote l'indication de :",
        options: [
            "La vitesse horizontale de l'appareil",
            "La vitesse verticale de montée ou de descente",
            "L'altitude barométrique exacte",
            "Les variations de régime du groupe motopropulseur"],
        answer: 1,
        explanation: "Le variomètre (VSI) traduit les variations de pression statique pour indiquer la vitesse de déplacement vertical de l'avion, généralement exprimée en pieds par minute (ft/min) ou mètres par seconde."},
    {
        subject: "Aérodynamique et Mécanique de vol",
        question: "En phase d'atterrissage au toucher des roues, les spoilers (destructeurs de portance) :",
        options: [
            "Servent essentiellement à détruire la portance afin de plaquer l'avion au sol pour maximiser l'efficacité des freins",
            "Sont une aide au pilotage permettant de conserver l'axe uniquement sur piste contaminée",
            "Ne possèdent une utilité aérodynamique que durant le vol de croisière",
            "Servent essentiellement à augmenter la traînée de l'aile pour freiner l'avion"],
        answer: 0,
        explanation: "Au toucher des roues, le déploiement automatique des déstructeurs de portance (spoilers) supprime la sustentation des ailes, transférant immédiatement tout le poids de l'avion sur les roues pour permettre un freinage optimal."},
    {
        subject: "Aérodynamique et Mécanique de vol",
        question: "Quel est l'avantage principal de l'utilisation d'un train d'atterrissage escamotable ?",
        options: [
            "Il augmente la portance globale des ailes",
            "Il augmente la traînée aérodynamique",
            "Il diminue la traînée parasite en éliminant la traînée de forme du train",
            "Il diminue la portance de l'aéronef"],
        answer: 2,
        explanation: "Rentrer le train en vol élimine la résistance à l'air des jambes et des roues, réduisant la traînée parasite pour améliorer la vitesse et réduire la consommation."},
    {
        subject: "Aérodynamique et Mécanique de vol",
        question: "L’effet de sol permet à un avion de décoller en deçà de sa vitesse de vol normale en raison :",
        options: [
            "De la diminution du rapport portance/traînée",
            "D’une diminution importante de la traînée induite à proximité immédiate du sol",
            "D’une augmentation de la déflexion aérodynamique descendante",
            "D’une augmentation des tourbillons d’extrémité d’aile"],
        answer: 1,
        explanation: "À proximité immédiate de la piste (hauteur inférieure à l'envergure), le sol fait obstacle au développement des tourbillons marginaux, ce qui réduit drastiquement la traînée induite et améliore temporairement la portance."},

    {
        subject: "Connaissance générale des avions",
        question: "Le pilote d'un avion léger peut sortir les volets :",
        options: [
            "Lorsque la vitesse indiquée (IAS) est située dans l'arc blanc de l'anémomètre",
            "Seulement lors de la visite pré-vol pour vérifier le braquage différentiel",
            "Seulement lorsque le contrôleur aérien l’autorise explicitement à atterrir",
            "Lors d’un virage serré pour éviter un mouvement de cabré dangereux"
        ],
        answer: 0,
        explanation: "L'arc blanc sur le badin (anémomètre) matérialise la plage de vitesse d'utilisation des dispositifs hypersustentateurs. La borne supérieure correspond à la vitesse maximale volets sortis (Vfe)."
    },
    {
        subject: "Connaissance générale des avions",
        question: "La manœuvre qui permet d'effectuer une rotation de l'aéronef autour de l'axe de tangage est :",
        options: [
            "Le déplacement du manche en avant ou en arrière",
            "Le déplacement latéral du manche de gauche à droite",
            "Le déplacement des palonniers à gauche ou à droite",
            "Aucune réponse n'est exacte"
        ],
        answer: 0,
        explanation: "Le mouvement d'avant en arrière du manche actionne la gouverne de profondeur, ce qui fait pivoter l'avion en tangage (modification de l'assiette)."
    },
    {
        subject: "Connaissance générale des avions",
        question: "Les volets hypersustentateurs sont principalement sortis :",
        options: [
            "Pour voler en toute sécurité aux faibles vitesses",
            "Pour stabiliser la trajectoire à de très grandes vitesses",
            "Au moment des phases de l'atterrissage et du décollage",
            "Les réponses a et c sont exactes"
        ],
        answer: 3,
        explanation: "Les volets augmentent la portance à basse vitesse (A), permettant ainsi de réduire les vitesses d'approche et de décollage tout en raccourcissant les distances de roulage (C)."
    },
    {
        subject: "Connaissance générale des avions",
        question: "En vol, sous un facteur de charge positif, l'aile d'un avion subit :",
        options: [
            "Une compression à l'extrados",
            "Une flexion structurelle supportée par le longeron",
            "Une traction à l'intrados",
            "Les propositions a, b et c sont exactes"
        ],
        answer: 3,
        explanation: "La force de portance fléchit l'aile vers le haut via le longeron (B). Cette déformation mécanique comprime les structures supérieures (extrados - A) et étire les structures inférieures (intrados - C)."
    },
    {
        subject: "Connaissance générale des avions",
        question: "En phase d'atterrissage, le pilote sort le premier cran de volet. Ce dispositif est un :",
        options: [
            "Hypersustentateur de bord de fuite",
            "Hypersustentateur de bord d'attaque",
            "Hyposustentateur de bord de fuite",
            "Hyposustentateur de bord d'attaque"
        ],
        answer: 0,
        explanation: "Les volets de courbure classiques (Flaps) se situent sur la partie arrière de l'aile, appelée le bord de fuite, et augmentent la portance (hypersustentateurs)."
    },
    {
        subject: "Connaissance générale des avions",
        question: "Lors de la visite prévol, le contrôle des purges de réservoir a pour objectif d'éliminer :",
        options: [
            "Les bulles d'air emprisonnées dans le circuit carburant",
            "Les impuretés piégées dans les filtres des pompes",
            "Le risque de 'vapor lock' en cas de surchauffe",
            "D'éventuelles traces d'eau de condensation piégées au point bas des réservoirs"
        ],
        answer: 3,
        explanation: "L'eau étant plus dense que l'essence, elle stagne aux points bas des réservoirs. La purge élimine cette eau pour éviter une coupure moteur ou un givrage du carburant en vol."
    },
    {
        subject: "Connaissance générale des avions",
        question: "Tout appareil capable de s'élever et de circuler de manière contrôlée dans l'espace aérien :",
        options: [
            "Est qualifié d'aéronef",
            "Subit des forces de portance et de traînée",
            "Possède obligatoirement un moteur thermique ou électrique",
            "Les réponses a et b sont exactes"
        ],
        answer: 3,
        explanation: "Par définition, un aéronef (A) se sustente dans l'atmosphère grâce aux forces aérodynamiques de portance et de traînée (B), qu'il possède un moteur ou non (comme un planeur)."
    },
    {
        subject: "Connaissance générale des avions",
        question: "Un aéronef qui, en vol de croisière, voit sa voilure tournante (rotor) uniquement entraînée par le vent relatif est :",
        options: [
            "Un convertible",
            "Un girodyne",
            "Un hélicoptère",
            "Un autogire"
        ],
        answer: 4,
        explanation: "Contrairement à l'hélicoptère dont le rotor est entraîné par un moteur, l'autogire utilise un rotor libre en autorotation sous l'effet du vent relatif pour générer sa portance."
    },
    {
        subject: "Connaissance générale des avions",
        question: "Un moteur de type turbopropulseur :",
        options: [
            "Est un pulsoréacteur précédé d'un réducteur et d'une hélice",
            "Est un statoréacteur précédé d'un réducteur et d'une hélice",
            "Est un moteur thermique à pistons équipé d'un turbocompresseur",
            "Est un turbomoteur qui entraîne une hélice via un réducteur mécanique"
        ],
        answer: 3,
        explanation: "Un turbopropulseur est une turbine à gaz (turbomoteur) dont l'énergie cinétique est récupérée sur un arbre pour faire tourner une hélice conventionnelle via un réducteur de vitesse."
    },
    {
        subject: "Connaissance générale des avions",
        question: "Le petit pas de calage d'une hélice à pas variable est préférentiellement utilisé pour :",
        options: [
            "L'atterrissage uniquement",
            "Le décollage uniquement",
            "Le décollage et l'atterrissage",
            "Le vol de croisière prolongé"
        ],
        answer: 2,
        explanation: "Le petit pas offre une faible résistance et permet au moteur de délivrer sa puissance maximale au décollage (comme une première vitesse de voiture), et assure une réactivité immédiate en cas de remise des gaz à l'atterrissage."
    },
    {
        subject: "Connaissance générale des avions",
        question: "Les avions de transport moderne abritent leurs réservoirs de carburant dans la structure des ailes pour :",
        options: [
            "Rendre l'avion volontairement moins stable dans les turbulences",
            "Obtenir un carburant plus froid donc plus dense, améliorant le rendement",
            "Limiter la consommation horaire des moteurs",
            "Limiter et soulager les efforts de flexion au niveau de l'emplanture de l'aile"
        ],
        answer: 3,
        explanation: "La masse du carburant située dans les ailes agit comme un contrepoids direct face à la force de portance qui tend à plier les ailes vers le haut, réduisant les contraintes structurelles à l'emplanture."
    },
    {
        subject: "Connaissance générale des avions",
        question: "En vol de croisière rectiligne, l'extrados de l'aile subit principalement un effort mécanique de :",
        options: [
            "Cisaillement",
            "Traction",
            "Compression",
            "Torsion"
        ],
        answer: 2,
        explanation: "La flexion de l'aile vers le haut étire les fibres de sa structure inférieure (intrados) et comprime ses éléments supérieurs (extrados)."
    },
    {
        subject: "Connaissance générale des avions",
        question: "La gouverne de profondeur agit sur quel axe de rotation ?",
        options: [
            "Le roulis",
            "Le lacet",
            "Le roulis et le lacet simultanément",
            "Le tangage"
        ],
        answer: 3,
        explanation: "La gouverne de profondeur fait pivoter l'aéronef autour de son axe transversal, mouvement appelé le tangage."
    },
    {
        subject: "Connaissance générale des avions",
        question: "Un train d'atterrissage de type tricycle :",
        options: [
            "Ne peut jamais être conçu pour être escamotable",
            "Possède deux trains principaux à l'arrière et une roulette directrice de nez",
            "Possède une roulette de queue (train classique) et deux trains principaux",
            "N'est plus du tout utilisé sur les avions de transport modernes"
        ],
        answer: 1,
        explanation: "La configuration tricycle repose sur un train principal positionné en arrière du centre de gravité et d'une jambe/roulette auxiliaire située à la pointe avant (nez) de l'appareil."
    },
    {
        subject: "Connaissance générale des avions",
        question: "Pour indiquer l'altitude de l'avion, l'altimètre utilise comme information physique :",
        options: [
            "La différence entre la pression totale et la pression dynamique",
            "La pression totale de l'écoulement",
            "La pression dynamique seule",
            "La pression statique de l'air ambiant"
        ],
        answer: 3,
        explanation: "L'altimètre mesure la pression statique extérieure qui décroît de manière régulière et connue à mesure que l'aéronef s'élève en altitude."
    },
    {
        subject: "Connaissance générale des avions",
        question: "Parmi ces instruments de bord, lequel utilise obligatoirement un gyroscope ?",
        options: [
            "L'horizon artificiel",
            "Le compas magnétique",
            "Anémomètre",
            "Le tachymètre"
        ],
        answer: 0,
        explanation: "L'horizon artificiel exploite les propriétés d'inertie spatiale d'un gyroscope pour fournir au pilote une référence stable d'attitude (roulis et tangage)."
    },
    {
        subject: "Connaissance générale des avions",
        question: "Le variomètre fournit au pilote l'indication de :",
        options: [
        "La vitesse horizontale de l'appareil",
        "La vitesse verticale de montée ou de descente",
        "L'altitude barométrique exacte",
        "Les variations de régime du groupe motopropulseur"
        ],
        answer: 1,
        explanation: "Le variomètre (VSI) traduit les variations de pression statique pour indiquer la vitesse de déplacement vertical de l'avion, généralement exprimée en pieds par minute (ft/min) ou mètres par seconde."
    },
    {
        subject: "Connaissance générale des avions",
        question: "En phase d'atterrissage au toucher des roues, les spoilers (destructeurs de portance) :",
        options: [
        "Servent essentiellement à détruire la portance afin de plaquer l'avion au sol pour maximiser l'efficacité des freins",
        "Sont une aide au pilotage permettant de conserver l'axe uniquement sur piste contaminée",
        "Ne possèdent une utilité aérodynamique que durant le vol de croisière",
        "Servent essentiellement à augmenter la traînée de l'aile pour freiner l'avion"
        ],
        answer: 0,
        explanation: "Au toucher des roues, le déploiement automatique des destructeurs de portance (spoilers) supprime la sustentation des ailes, transférant immédiatement tout le poids de l'avion sur les roues pour permettre un freinage optimal."
    },
    {
        subject: "Connaissance générale des avions",
        question: "Quel est l'avantage principal de l'utilisation d'un train d'atterrissage escamotable ?",
        options: [
        "Il augmente la portance globale des ailes",
        "Il augmente la traînée aérodynamique",
        "Il diminue la traînée parasite en éliminant la traînée de forme du train",
        "Il diminue la portance de l'aéronef"
        ],
        answer: 2,
        explanation: "Rentrer le train en vol élimine la résistance à l'air des jambes et des roues, réduisant la traînée parasite pour améliorer la vitesse et réduire la consommation."
    },
    {
        subject: "Connaissance générale des avions",
        question: "L’effet de sol permet à un avion de décoller en deçà de sa vitesse de vol normale en raison :",
        options: [
        "De la diminution du rapport portance/traînée",
        "D’une diminution importante de la traînée induite à proximité immédiate du sol",
        "D’une augmentation de la déflexion aérodynamique descendante",
        "D’une augmentation des tourbillons d’extrémité d’aile"
        ],
        answer: 1,
        explanation: "À proximité immédiate de la piste (hauteur inférieure à l'envergure), le sol fait obstacle au développement des tourbillons marginaux, ce qui réduit drastiquement la traînée induite et améliore temporairement la portance."
    },

    {
        subject: "Météorologie",
        question: "Quel est le nuage dont la base se trouve à une altitude variant entre 6 000 et 12 000 mètres ?",
        options: [
            "Le stratus",
            "Le nimbostratus",
            "Le cirrus",
            "Le cumulus"
        ],
        answer: 2,
        explanation: "Les cirrus sont des nuages de l'étage supérieur, composés exclusivement de cristaux de glace, dont la base se situe généralement au-dessus de 6 000 mètres (20 000 pieds) dans les régions tempérées."
    },
    {
        subject: "Météorologie",
        question: "En matière de terminologie, quelle est la référence commune aux météorologistes du monde entier ?",
        options: [
            "Le Corpus Météorologique Mondial publié par l’OMM en 1951",
            "La Convention Météorologique Mondiale (Washington, 1947)",
            "L’Atlas International de Météorologie de 1956",
            "L’annexe 3 à la conférence de Varsovie de 1929"
        ],
        answer: 0,
        explanation: "En matière de terminologie, la référence commune aux météorologistes du monde entier est Le Corpus Météorologique Mondial publié par l’OMM en 1951."
    },
    {
        subject: "Météorologie",
        question: "Le nuage à fort développement vertical qui se présente fréquemment en forme d’enclume est :",
        options: [
            "L’altostratus",
            "Le cumulonimbus",
            "Le cirrus",
            "Le stratus"
        ],
        answer: 1,
        explanation: "Le cumulonimbus présente à sa maturité une partie supérieure étalée et fibreuse ressemblant à une enclume (incus), provoquée par le blocage de sa structure ascendante au niveau de la tropopause."
    },
    {
        subject: "Météorologie",
        question: "La carte TEMSI “ 700 hPa ” correspond approximativement à une altitude de :",
        options: [
            "5 000 ft",
            "10 000 ft",
            "15 000 ft",
            "20 000 ft"
        ],
        answer: 1,
        explanation: "En atmosphère standard (ISA), la surface de pression atmosphérique de 700 hPa se situe aux alentours de 3 000 mètres, soit environ 10 000 pieds."
    },
    {
        subject: "Météorologie",
        question: "En vol, par quel système radio spécifique un pilote peut-il recevoir des informations météorologiques régulières ?",
        options: [
            "SIRMET",
            "ATISMET",
            "VOLMET",
            "SETMET"
        ],
        answer: 2,
        explanation: "Le réseau VOLMET diffuse en continu par radio (HF ou VHF) des bulletins météorologiques (METAR/TAF) d'aérodromes à destination des équipages en vol."
    },
    {
        subject: "Météorologie",
        question: "Quel est le nuage dont la base se trouve à une altitude variant typiquement entre 6 000 et 7 000 mètres ?",
        options: [
            "Le cirrocumulus",
            "Le cirrostratus",
            "L’altostratus",
            "L’altocumulus"
        ],
        answer: 0,
        explanation: "Les cirrocumulus se forment à la limite inférieure de l'étage supérieur (vers 6 000 - 7 000 mètres), se présentant sous la forme de rides ou de petits galets blancs sans ombre propre."
    },
    {
        subject: "Météorologie",
        question: "La visibilité horizontale sur la piste d'un aérodrome (jusqu'à la mesure de la RVR) est évaluée par :",
        options: [
            "Un distancemètre",
            "Un psychromètre",
            "Un transmissomètre",
            "Un héliomètre"
        ],
        answer: 2,
        explanation: "Le transmissomètre est un instrument optique automatique au sol qui mesure l'atténuation d'un faisceau lumineux pour déterminer la visibilité horizontale le long de la piste."
    },
    {
        subject: "Météorologie",
        question: "Quel type de nuage de l'étage supérieur couvre souvent la totalité du ciel sous la forme d'un voile transparent ?",
        options: [
            "Le cumulonimbus",
            "Le cumulus",
            "Le stratus",
            "Le cirrostratus"
        ],
        answer: 3,
        explanation: "Le cirrostratus se présente comme un voile nuageux blanchâtre et transparent, couvrant souvent tout le ciel et produisant des phénomènes de halo autour du soleil ou de la lune."
    },
    {
        subject: "Météorologie",
        question: "Quels nuages dénotent une forte instabilité verticale au sein de l’atmosphère ?",
        options: [
            "Les stratus et les cirrus",
            "Les cumulus et les cumulonimbus",
            "Les altostratus et les nimbostratus",
            "Les altostratus et les cirrostratus"
        ],
        answer: 1,
        explanation: "Les nuages cumuliformes (cumulus, cumulonimbus) se développent par des courants thermiques ascendants verticaux, signes d'une masse d'air instable."
    },
    {
        subject: "Météorologie",
        question: "Dans les régions tempérées, les cumulonimbus d'évolution diurne se forment plus particulièrement :",
        options: [
            "Le matin, l’été, en mer",
            "L’après-midi, l’été, en plaine",
            "La nuit, l’été, en plaine",
            "L’après-midi, l’été, en montagne"
        ],
        answer: 3,
        explanation: "En été, l'échauffement des versants montagneux l'après-midi accentue les courants ascendants d'origine thermique et dynamique, propices au développement d'orages orographiques."
    },
    {
        subject: "Météorologie",
        question: "Dans quel type de nuage bas et uniforme se forme principalement la bruine ?",
        options: [
            "Le cirrostratus",
            "L’altocumulus",
            "Le stratus",
            "Le cirrus"
        ],
        answer: 2,
        explanation: "La bruine (précipitation de très petites gouttelettes d'eau) provient exclusivement de nuages bas de structure stable, caractéristiques du stratus ou du brouillard s'élevant."
    },
    {
        subject: "Météorologie",
        question: "Conditions de nuit : vent 2 kt, CAVOK, T = 16°C, Td (point de rosée) = 15°C, pression 1030 hPa. À quoi faut-il s'attendre pour le lendemain matin ?",
        options: [
            "Des stratus",
            "Des cirrus",
            "Du brouillard",
            "De la neige"
        ],
        answer: 2,
        explanation: "Un vent très faible, une forte pression stabilisée (anticyclone) et un écart de température nul ou quasi nul avec le point de rosée (T - Td = 1°C) indiquent une saturation imminente de l'air par refroidissement nocturne, provoquant du brouillard de rayonnement."
    },
    {
        subject: "Météorologie",
        question: "Dans quel nuage violent se forment les orages, les fortes averses et la grêle ?",
        options: [
            "Le cirrus",
            "Le cumulonimbus",
            "Le stratus",
            "Le cumulus"
        ],
        answer: 1,
        explanation: "Le cumulonimbus est le nuage d'orage par excellence. Il engendre des phénomènes violents : foudre, grêle, fortes averses et violentes turbulences."
    },
    {
        subject: "Météorologie",
        question: "Dans l'évolution d'une perturbation, la zone d'occlusion est caractérisée comme une zone :",
        options: [
            "Généralement peu active",
            "D’orages fréquents mais avec une visibilité correcte",
            "De brouillard très dense au sol",
            "Nuageuse et pluvieuse avec un fort risque de plafond bas"
        ],
        answer: 3,
        explanation: "L'occlusion résulte de la jonction du front froid et du front chaud. C'est une zone de mauvais temps généralisé et durable, accompagnée de pluies continues et de nuages bas."
    },
    {
        subject: "Météorologie",
        question: "Quel phénomène altère directement et significativement la visibilité horizontale ?",
        options: [
            "La brume et le brouillard",
            "Les turbulences en altitude",
            "Les vents forts",
            "Les températures élevées"
        ],
        answer: 0,
        explanation: "La brume (visibilité entre 1 et 5 km) et le brouillard (visibilité inférieure à 1 km) résultent de la suspension de micro-gouttelettes d'eau, ce qui opacifie l'atmosphère."
    },
    {
        subject: "Météorologie",
        question: "La durée de vie moyenne d’une perturbation du front polaire est de :",
        options: [
            "24 à 48 heures",
            "48 à 72 heures",
            "5 à 6 jours",
            "10 à 15 jours"
        ],
        answer: 2,
        explanation: "Le cycle complet d'une perturbation tempérée (naissance, maturation, occlusion et dissipation) s'étale généralement sur une période de 5 à 6 jours."
    },
    {
        subject: "Météorologie",
        question: "Le message météorologique aéronautique TAF (Terminal Aerodrome Forecast) contient :",
        options: [
            "Les informations météorologiques en temps réel sur la route",
            "Les observations réelles des 12 heures passées",
            "Les prévisions météorologiques d'aérodrome sur une période de 9 à 30 heures",
            "Le temps qu’il fait réellement à l'instant T"
        ],
        answer: 2,
        explanation: "Le TAF est un message de prévision d'aérodrome à court ou moyen terme, réactualisé toutes les 3 ou 6 heures, couvrant des validités réglementaires (généralement de 9 à 30 heures)."
    },
    {
        subject: "Météorologie",
        question: "Quelles conditions météorologiques favorisent l’instabilité thermique de l'atmosphère ?",
        options: [
            "L'arrivée d'une masse d'air froid et humide sur un sol chaud",
            "L'arrivée d'une masse d'air chaud et humide sur un sol froid",
            "L'établissement d'une couche d'inversion thermique",
            "Les réponses a et c sont exactes"
        ],
        answer: 0,
        explanation: "Un sol chaud réchauffe la base d'une masse d'air froid supérieure. Cela accentue le gradient thermique vertical et déclenche de violents mouvements ascendants (instabilité)."
},
{
subject: "Météorologie",
question: "Le ciel est totalement couvert (8/8 octas) et une pluie fine modérée tombe de manière continue. Le ciel est couvert par :",
options: [
"Des stratus peu épais",
"Un nimbostratus",
"Un cumulonimbus",
"De fins stratus recouvrant un cumulonimbus"
],
answer: 1,
explanation: "Le nimbostratus est le nuage de front chaud par excellence. Sombre et d'une grande extension horizontale, il engendre des pluies ou chutes de neige continues et modérées."
},
{
subject: "Météorologie",
question: "Le message d'observation météorologique aéronautique METAR (Meteorological Aerodrome Report) contient :",
options: [
"Les prévisions météorologiques des 24 prochaines heures",
"Les informations météorologiques observées en temps réel sur un aérodrome",
"Les prévisions météorologiques des 12 prochaines heures",
"L'historique des prévisions des 24 heures passées"
],
answer: 1,
explanation: "Le METAR est un rapport d'observation brute régulière (généré toutes les 30 minutes ou heures) décrivant le temps réel constaté sur une plateforme (vent, visibilité, nuages, pression)."
},
{
subject: "Météorologie",
question: "Le vent mesuré au sol est de 270°/15 kt. Après le décollage et la montée à 2 000 m, le pilote doit s'attendre à rencontrer :",
options: [
"Un vent du 240° supérieur à 15 kt",
"Un vent du 240° inférieur à 15 kt",
"Un vent du 300° supérieur à 15 kt",
"Un vent du 300° inférieur à 15 kt"
],
answer: 2,
explanation: "En s'élevant, l'atténuation du frottement du sol fait tourner le vent dans le sens horaire (droite dans l'hémisphère Nord) et augmente sa vitesse. Le vent passe donc du 270° au 300° avec une vitesse supérieure à 15 kt."
},
{
subject: "Météorologie",
question: "Au passage actif d'un front froid, quel type de temps le pilote doit-il s'attendre à observer ?",
options: [
"Une matinée très fraîche avec un ciel totalement dégagé",
"Un temps frais avec un ciel variable (cumulus), des averses et de belles éclaircies",
"Un ciel soudainement très nuageux avec de fortes précipitations (orages/averses) et une baisse de température",
"Un ciel peu nuageux composé de cumulus sans aucune précipitation"
],
answer: 2,
explanation: "Le front froid soulève l'air chaud antérieur de manière vigoureuse, créant des cumulonimbus associés à de fortes pluies ou orages, suivis d'une baisse marquée des températures."
},
{
subject: "Météorologie",
question: "Quelles informations essentielles peut-on lire sur une carte aéronautique de type TEMSI ?",
options: [
"Le temps prévu sur une durée hebdomadaire",
"Les vents précis et les températures en altitude",
"Les mouvements des courants-jets chauds et froids",
"Les prévisions du temps significatif à basse ou moyenne altitude (fronts, nuages dangereux, turbulences)"
],
answer: 3,
explanation: "La carte TEMSI (Temps Significatif) schématise les phénomènes dangereux prévus pour les vols : fronts, zones de nébulosité, givrage, turbulences et orages."
},
{
subject: "Météorologie",
question: "Dans une perturbation, une occlusion est dite « à caractère de front chaud » lorsque :",
options: [
"L'air froid postérieur est plus froid que l'air froid antérieur",
"L'air froid postérieur est moins froid que l'air froid antérieur, l'air chaud étant rejeté en altitude",
"L'air froid antérieur est rejeté directement en altitude",
"L’air froid postérieur est plus chaud que l'air chaud antérieur"
],
answer: 1,
explanation: "Si l'air arrivant à l'arrière (postérieur) est moins froid que l'air installé à l'avant (antérieur), il va glisser au-dessus de ce dernier, mimant la pente et le comportement d'un front chaud."
},
{
subject: "Météorologie",
question: "Quelles informations fournit une carte aéronautique de type WINTEM ?",
options: [
"Les prévisions de vent et de température en altitude pour différents niveaux de vol",
"Les trajectoires des fronts chauds et froids",
"Les zones de temps significatif et de turbulences",
"Le temps prévu au sol pour les prochaines 6 heures"
],
answer: 0,
explanation: "Les cartes WINTEM (Wind and Temperature) décrivent numériquement les prévisions aéronautiques de force/direction du vent et de température pour des niveaux de vol spécifiques."
},
{
subject: "Météorologie",
question: "Un pilote volant de Limoges vers Nantes constate en permanence une forte dérive vers la droite. À quoi doit-il s'attendre ?",
options: [
"À l'installation stable de hautes pressions par l'Est",
"À l'approche et à l'arrivée d'une perturbation dépressionnaire par l'Ouest",
"À traverser immédiatement un front froid actif",
"À une sous-estimation systématique de son altitude de vol"
],
answer: 1,
explanation: "Une dérive droite signifie que l'avion subit un vent de gauche (provenant du Sud/Sud-Ouest sur cet axe). Ce flux de Sud-Ouest signale l'approche par l'Ouest du secteur chaud d'un système dépressionnaire."
},
{
subject: "Météorologie",
question: "Le message d'observation aéronautique de type SPECI est diffusé en cas de :",
options: [
"Présence continue de nuages cumulonimbus",
"Présence de nuages de type stratus bas",
"Changement brusque et significatif des conditions météorologiques sur l'aérodrome",
"Présence avérée de nuages nimbostratus"
],
answer: 2,
explanation: "Un message SPECI est un METAR spécial émis en dehors des heures régulières lorsqu'un franchissement de seuil critique (amélioration ou détérioration soudaine du vent, de la visibilité ou du plafond) survient."
},
{
subject: "Météorologie",
question: "Où se situe le siège de l’Organisation Météorologique Mondiale (OMM) ?",
options: [
"Paris (France)",
"Chicago (États-Unis)",
"Londres (Royaume-Uni)",
"Genève (Suisse)"
],
answer: 3,
explanation: "Le siège de l'OMM, agence spécialisée de l'ONU pour la météo, le climat et l'hydrologie, est implanté à Genève, en Suisse."
},
{
subject: "Météorologie",
question: "Pour élaborer des prévisions météorologiques globales, on utilise des satellites :",
options: [
"Météorologiques géostationnaires",
"À défilement géosynchrone",
"D’observation polaires héliosynchrones",
"Les réponses a et c sont exactes"
],
answer: 3,
explanation: "L'observation météo s'appuie à la fois sur des satellites géostationnaires (fixes au-dessus de l'équateur pour le suivi en continu - A) et sur des satellites à défilement polaire (héliosynchrones pour une imagerie haute résolution - C)."
},
{
subject: "Météorologie",
question: "Un message METAR régulier standard d'aérodrome est mis à jour et diffusé :",
options: [
"Toutes les 180 minutes",
"Toutes les 120 minutes",
"Toutes les 60 minutes",
"Toutes les 30 minutes"
],
answer: 3,
explanation: "Sur la grande majorité des aérodromes internationaux, le rapport d'observation METAR est actualisé et publié toutes les demi-heures (30 minutes)."
},

{
        subject: "Facteurs Humains",
        question: "L’analyse des incidents ou accidents d’avion a pour but principal :",
        options: [
            "De sanctionner le pilote ou le contrôleur responsable de l'incident ;",
            "De se justifier auprès du plaignant ;",
            "De répartir les responsabilités juridiques entre les intervenants ;",
            "D’analyser les causes des incidents pour permettre l'amélioration de la sécurité aérienne."
        ],
        answer: 3,
        explanation: "L'objectif unique des enquêtes de sécurité en aviation (concept de culture juste) est la recherche des causes racines et la prévention des accidents futurs, sans recherche de faute ou de faute lourde."
    },
    {
        subject: "Facteurs Humains",
        question: "Vous avez notifié un événement de sécurité, l’analyse interne de celui-ci doit être effectuée :",
        options: [
            "Par vous-même directement ;",
            "Par la Commission Locale de la Qualité de Service ;",
            "Par le responsable sécurité désigné par le prestataire de services ;",
            "Par le gestionnaire de l’aérodrome seul."
        ],
        answer: 2,
        explanation: "L'analyse des rapports de sécurité (SGS) incombe réglementairement au gestionnaire ou responsable de la sécurité nommé par l'organisme de transport ou de contrôle."
    },
    {
        subject: "Facteurs Humains",
        question: "Quelle est la conduite immédiate à tenir en cas d’événement pouvant avoir une influence sur la sécurité aérienne ?",
        options: [
            "S'assurer du bien-fondé de l'incident sur le plan purement réglementaire ;",
            "S'informer immédiatement auprès de la station météo locale des conditions de vol ;",
            "Recueillir tous les renseignements utiles (témoignages, enregistrements, météo) et remplir un compte-rendu d’événement de sécurité ;",
            "Attendre le compte-rendu détaillé de confirmation du pilote avant d'agir."
        ],
        answer: 2,
        explanation: "Le traitement d'un incident impose la collecte immédiate des données factuelles volatiles (bandes audio, météo, radars) et la rédaction d'un compte-rendu d'événement de sécurité (CRES/FNE)."
    },
    {
        subject: "Facteurs Humains",
        question: "Suite à la notification d’un événement grave survenu sur votre aérodrome, vous êtes dans un état de stress élevé. Quelle attitude adoptez-vous ?",
        options: [
            "J’appelle un agent de sécurité incendie pour qu’il me remplace aux communications radio ;",
            "Je préviens les aéronefs sur la fréquence que l’aérodrome est immédiatement fermé ;",
            "Je préviens ma hiérarchie pour organiser une relève et j’informe posément les pilotes en contact ainsi que l’approche ;",
            "Je ne dis rien pour éviter de recevoir un blâme ou de perdre ma qualification."
        ],
        answer: 2,
        explanation: "En cas d'incapacité de travail liée au stress ou au choc émotionnel, l'agent doit demander son remplacement officiel tout en assurant l'information du trafic pour maintenir la sécurité."
    },
    {
        subject: "Facteurs Humains",
        question: "Parmi les propositions suivantes, que peut-on classer sous le terme de \"Facteurs Humains\" ?",
        options: [
            "L'ensemble des règles et procédures applicables au niveau national ;",
            "L'ensemble des comportements individuels et collectifs au sein du système aéronautique ;",
            "Les dysfonctionnements techniques d'un système ou d'un équipement ;",
            "L'ensemble des textes complémentaires à la réglementation (notes de service, consignes)."
        ],
        answer: 1,
        explanation: "Les Facteurs Humains étudient les interactions entre l'homme, ses outils, ses procédures et ses équipes pour optimiser les performances logiques et la sécurité."
    },
    {
        subject: "Facteurs Humains",
        question: "Concernant la violation d'une règle ou d'une procédure, trouvez l'affirmation la plus juste :",
        options: [
            "Commettre une violation est un acte purement involontaire ;",
            "Il n'existe pas de violation routinière au sein d'une organisation ;",
            "Il n'y a aucune différence technique entre commettre une erreur et faire une violation ;",
            "Je commets une violation lorsque je m'écarte de manière délibérée et consciente d'un règlement ou d'une procédure."
        ],
        answer: 3,
        explanation: "La violation se distingue fondamentalement de l'erreur par son caractère intentionnel : l'agent sait qu'il enfreint la règle établie, même si l'intention n'est pas malveillante."
    },
    {
        subject: "Facteurs Humains",
        question: "Concernant la gestion du stress, trouvez la proposition correcte :",
        options: [
            "La qualité et la régularité du sommeil sont indispensables pour résister efficacement au stress ;",
            "Boire une faible dose d'alcool avant de prendre sa position de travail aide à se détendre ;",
            "Pour faire face au stress chronique, la prise de médicaments est préférable à l'exercice physique ;",
            "Il n'existe aucun moyen de faire face au stress, l'organisme ne peut que le subir."
        ],
        answer: 0,
        explanation: "Une bonne hygiène de vie, incluant un sommeil de qualité, maintient les réserves cognitives nécessaires pour faire face aux situations imprévues sans déclencher de stress dépassé."
    },
    {
        subject: "Facteurs Humains",
        question: "Quel est l’organisme officiel algérien chargé d'enquêter sur les accidents d'aviation civile ?",
        options: [
            "L’EGSA (Établissement de Gestion de Services Aéroportuaires)",
            "L’ANAC (Agence Nationale de l'Aviation Civile)",
            "L’ENNA (Établissement National de la Navigation Aérienne)",
            "La DSA (Direction de la Sécurité Aéronautique / Bureau d'enquête d'État)"
        ],
        answer: 3,
        explanation: "En Algérie, c'est la DSA (Direction de la Sécurité Aéronautique via ses bureaux d'enquêtes spécialisés) qui mène les investigations techniques indépendantes sur les accidents d'aéronefs."
    },
    {
        subject: "Facteurs Humains",
        question: "Le système embarqué TCAS fournit au pilote des indications de sécurité relatives :",
        options: [
            "À la route optimale de navigation à suivre ;",
            "À la présence et à la proximité du relief (terrain) ;",
            "Au cap magnétique instantané de l'aéronef ;",
            "Au trafic et aux aéronefs évoluant dans l'environnement immédiat."
        ],
        answer: 3,
        explanation: "Le TCAS (Traffic Collision Avoidance System) détecte et affiche la position des avions environnants équipés de transpondeurs actifs pour éviter les collisions en vol."
    },
    {
        subject: "Facteurs Humains",
        question: "Quelle affirmation correspond le mieux à la définition de l'erreur humaine ?",
        options: [
            "L'erreur est par nature toujours intentionnelle ;",
            "Les conséquences d'une erreur ne dépendent jamais du contexte dans lequel elle survient ;",
            "Nous commettons une erreur lorsque notre action dévie de notre intention, ou lorsque l'intention elle-même est inappropriée ;",
            "Les professionnels hautement qualifiés ne commettent jamais d'erreurs en situation réelle."
        ],
        answer: 2,
        explanation: "L'erreur humaine est un écart involontaire entre l'action réalisée et l'action attendue, causé par un raté d'exécution (glissement) ou une mauvaise planification (méprise)."
    },
    {
        subject: "Facteurs Humains",
        question: "Parmi les capacités intellectuelles suivantes, laquelle a la propriété de ne pas régresser avec l’âge ?",
        options: [
            "L’expérience et l'utilisation des connaissances acquises",
            "La vitesse de perception sensorielle",
            "La mémoire de travail à court terme",
            "La rapidité du raisonnement face à une situation totalement inédite"
        ],
        answer: 0,
        explanation: "L'intelligence cristallisée, qui englobe l'expérience professionnelle, les bases de données de pannes et le jugement opérationnel, s'améliore et se maintient avec l'avancement en âge."
    },
    {
        subject: "Facteurs Humains",
        question: "Parmi les facteurs environnementaux externes favorisant l'apparition de l’erreur, on trouve :",
        options: [
            "Le bruit ambiant continu et strident des moteurs",
            "L’ergonomie et les contraintes de l’environnement physique de travail",
            "Le manque d'expérience technique initial",
            "Les réponses A et B sont des facteurs externes corrects"
        ],
        answer: 3,
        explanation: "Le niveau sonore élevé (A) et la mauvaise disposition ergonomique du poste (B) constituent des facteurs de stress environnementaux externes qui dégradent la concentration."
    },
    {
        subject: "Facteurs Humains",
        question: "Parmi les propositions suivantes, quelle est une cause directe de fatigue mentale chez le personnel ?",
        options: [
            "Une mauvaise alimentation ponctuelle",
            "Une maladie physique bénigne",
            "Une privation chronique de sommeil",
            "L'exécution prolongée d'une tâche complexe à forte charge cognitive"
        ],
        answer: 3,
        explanation: "Le maintien prolongé de l'attention sur des tâches hautement complexes ou répétitives sature les ressources cognitives et induit la fatigue mentale."
    },
    {
        subject: "Facteurs Humains",
        question: "Que signifie précisément l'acronyme TEM en sécurité aéronautique ?",
options: [
"Gestion des erreurs et des menaces (Threat and Error Management)",
"Gestion globale des risques (Total Error Management)",
"Politique de défense technique de l'appareil",
"Politique de contrôle qualité de la compagnie aérienne"
],
answer: 0,
explanation: "Le modèle TEM se traduit en français par la Gestion des Menaces et des Erreurs"},
{
subject: "Facteurs Humains",
question: "Dans quel cadre opérationnel le modèle T.E.M. est-il utilisé ?",
options: [
"Comme cadre exclusif d’évaluation des connaissances théoriques des personnels",
"Comme outil de mesure du quotient intellectuel des équipages",
"Comme outil de formation sur la gestion des risques et d'analyse des incidents/accidents",
"Uniquement pour auditer la comptabilité financière d'un exploitant"
],
answer: 2,
explanation: "Le TEM fournit un modèle structuré pour comprendre comment les équipages anticipent et gèrent les aléas opérationnels au quotidien afin d'améliorer la formation."
},
{
subject: "Facteurs Humains",
question: "La gestion des menaces et des erreurs (TEM) a pour objectif fondamental :",
options: [
"D'éliminer définitivement l'apparition de toute menace météorologique",
"De promouvoir la rentabilité commerciale pure de la compagnie",
"La détection précoce des menaces, des erreurs et des situations indésirables afin d'en limiter les conséquences",
"De chiffrer précisément les statistiques d'accidents de l'OACI"
],
answer: 2,
explanation: "Le but du TEM est d'outiller l'équipage pour détecter les pièges (menaces) et ses propres fautes (erreurs) avant qu'ils ne se transforment en états indésirables de l'aéronef (UAS)."
},
{
subject: "Facteurs Humains",
question: "La mise en œuvre pratique de la gestion des menaces et des erreurs s'appuie sur :",
options: [
"Des compétences techniques (pilotage, traitement des pannes, priorisation, communication) ;",
"L’exploitation de l’expérience acquise ;",
"Le bon sens opérationnel des équipages ;",
"Les réponses A, B et C sont justes."
],
answer: 3,
explanation: "Le modèle TEM s'opérationnalise par une alliance de compétences non techniques (CRM), de maîtrise technique des systèmes et d'expérience partagée."
},
{
subject: "Facteurs Humains",
question: "La gestion des menaces et des erreurs est une démarche proactive car elle vise :",
options: [
"La suppression totale et définitive de l'erreur humaine en cabine ;",
"L'anticipation et la gestion des menaces pour ériger des barrières de sécurité et limiter les conséquences ;",
"L'automatisation intégrale des cockpits pour remplacer les pilotes ;",
"Le lissage des indicateurs de performance commerciale."
],
answer: 1,
explanation: "Être proactif signifie accepter que des menaces vont survenir et que des erreurs seront commises, afin de se préparer activement à les intercepter avant l'incident."
},
{
subject: "Facteurs Humains",
question: "L’objectif final et permanent de la méthode TEM est :",
options: [
"L’amélioration globale et continue du niveau de sécurité des vols ;",
"L'atteinte utopique d'un niveau statistique de zéro aléa technique ;",
"Le remplacement complet des listes de vérifications obligatoires ;",
"La mise en place de sanctions administratives ciblées."
],
answer: 0,
explanation: "Le modèle TEM est un pilier de la sécurité moderne visant à élever constamment la résilience des équipages face aux risques du vol."
},
{
subject: "Facteurs Humains",
question: "Quels sont les mécanismes qui permettent à un équipage de détecter ses propres erreurs ?",
options: [
"L'autocontrôle individuel et la détection suite à une action générant un doute ;",
"L'observation visuelle directe que les effets réels de l'action correspondent aux paramètres attendus ;",
"Le contrôle croisé (Cross-check) par un autre membre de l'équipage ;",
"Les réponses A, B et C sont de parfaits mécanismes de détection."
],
answer: 3,
explanation: "La détection d'une erreur repose soit sur la surveillance de ses propres actions (A), soit sur l'absence de retour attendu des instruments (B), soit sur la vigilance partagée du second pilote (C)."
},
{
subject: "Facteurs Humains",
question: "Pour prévenir et atténuer les effets du stress opérationnel, il est recommandé de :",
options: [
"Maintenir un excellent niveau de compétences théoriques et pratiques ;",
"Exploiter activement les retours d’expérience (Règles de l'art, analyses d'incidents) ;",
"Préparer minutieusement ses vols et mener des briefings complets ;",
"Les réponses A, B et C forment un ensemble de prévention efficace."
],
answer: 3,
explanation: "La préparation rigoureuse (C), la compétence technique (A) et la connaissance des pièges vécus par les autres (B) suppriment l'effet de surprise, cause majeure de stress dépassé."
},
{
subject: "Facteurs Humains",
question: "Pour lutter activement contre la survenue et les effets de l’erreur, l'équipage utilise en priorité :",
options: [
"Les procédures standard, les méthodes de travail de l'exploitant, les briefings et les check-lists ;",
"L'improvisation basée uniquement sur des solutions improvisées en direct ;",
"La mémorisation intégrale des manuels de vol sans recours aux supports écrits ;",
"L'analyse mathématique probabiliste de l'événement pendant la panne."
],
answer: 0,
explanation: "Les listes de vérifications (check-lists) et les procédures d'exploitation standard (SOP) constituent les barrières de défense les plus puissantes pour intercepter et corriger les erreurs."
},
{
subject: "Facteurs Humains",
question: "Selon la doctrine de sécurité, comment les équipages doivent-ils gérer les erreurs ?",
options: [
"Ignorer l'erreur pour ne pas perturber le plan d'action initial ;",
"Mettre en œuvre des actions pour récupérer (corriger) l’erreur dès sa détection ;",
"S'appuyer sur des automatismes de surveillance contrôlés et demander de l’aide extérieure (ATC/compagnie) si nécessaire ;",
"Les réponses B et C sont les méthodes de gestion recommandées."
],
answer: 3,
explanation: "La gestion d'une erreur détectée impose de la corriger immédiatement (B) tout en maintenant un circuit de contrôle visuel et en sollicitant les ressources disponibles au besoin (C)."
},
{
subject: "Facteurs Humains",
question: "Dans le modèle TEM, les menaces se répartissent principalement dans trois domaines distincts qui sont :",
options: [
"Le pilote, le copilote et les personnels navigants commerciaux ;",
"L’opérateur humain (équipage), l’environnement extérieur et la machine (aéronef) ;",
"Le régulateur de vol, les agents d'escale et les mécaniciens ;",
"L’infrastructure aéroportuaire, les services financiers et la météo."
],
answer: 1,
explanation: "Le modèle analyse la confrontation de l'humain face aux menaces issues des défaillances de la machine ou des aléas de l'environnement (météo, relief, trafic)."
},
{
subject: "Facteurs Humains",
question: "Quelle est l’efficacité reconnue de l'application de la méthode TEM par les équipages ?",
options: [
"Elle réduit le niveau de stress en supprimant le besoin d'évaluation des performances ;",
"Elle permet de réduire de manière significative le taux d'erreurs non détectées ;",
"Elle optimise la prise de décision de l'équipage face aux situations complexes ;",
"Les réponses B et C mettent en évidence son efficacité réelle."
],
answer: 3,
explanation: "L'application du modèle TEM fiabilise le traitement des pannes en optimisant le processus de décision (C) et en agissant comme un filtre majeur contre la persistance des erreurs (B)."
},


         {
        subject: "Masse et Centrage",
        question: "La masse de base (Basic Weight) est constituée de :",
        options: [
            "Le poids des passagers et des bagages en cabine.",
            "Le poids de l’avion plus (+) le carburant réglementaire à emporter.",
            "Le poids de l’avion à vide plus (+) celui de l’équipage complet.",
            "Le poids de l’avion plus (+) celui des passagers et de leurs bagages."
        ],
        answer: 2,
        explanation: "La masse de base (Basic Weight) comprend la structure cellule de l'aéronef à vide, les fluides inutilisables, ainsi que la totalité des membres d'équipage (pilotes et PNC) requis pour la mission."
    },
    {
        subject: "Masse et Centrage",
        question: "Que désigne précisément le terme technique de « charge transportée » (Traffic Load) ?",
        options: [
            "Le poids de l’avion plus (+) celui des passagers commerciaux.",
            "Le poids de l’avion plus (+) le carburant total emporté.",
            "Le poids de l’avion plus (+) celui des bagages et du fret commercial.",
            "Le poids des passagers (+) celui des bagages et du fret."
        ],
        answer: 3,
        explanation: "La charge transportée (ou charge marchande/Traffic Load) correspond à la somme des masses de tous les éléments générateurs de revenus : les passagers, les bagages, le fret et le courrier."
    },
    {
        subject: "Masse et Centrage",
        question: "La masse en opérations (Operating Weight) est calculée comme la somme de :",
        options: [
            "La masse de base plus (+) la charge transportée commerciale.",
            "La masse de base plus (+) le carburant au décollage (take-off fuel).",
            "La masse de base plus (+) le poids global des bagages et du fret.",
            "La masse de base plus (+) la charge offerte maximale."
        ],
        answer: 1,
        explanation: "L'Operating Weight (OW) représente le poids de l'avion prêt à effectuer sa mission (masse de base) auquel on ajoute tout le carburant contenu dans les réservoirs au moment d'entreprendre le décollage."
    },
    {
        subject: "Masse et Centrage",
        question: "Comment obtient-on mathématiquement la valeur de la charge offerte (Allowed Traffic Load) ?",
        options: [
            "La plus faible des trois (3) limitations utiles (ZFW – TOW – LAW) moins (-) la charge transportée.",
            "La plus faible des trois (3) limitations utiles (ZFW – TOW – LAW) moins (-) la masse en opérations.",
            "La plus faible des trois (3) limitations utiles (ZFW – TOW – LAW) moins (-) la masse de base.",
            "La plus faible des trois (3) limitations utiles (ZFW – TOW – LAW) moins (-) le carburant au décollage."
        ],
        answer: 1,
        explanation: "La charge offerte est la charge marchande maximale autorisée. Elle est égale à la limite de poids la plus contraignante de l'appareil (calculée par rapport aux Max ZFW, Max TOW et Max LAW) de laquelle on soustrait la masse en opérations (OW)."
    },
    {
        subject: "Masse et Centrage",
        question: "La masse de l‘avion sans carburant (Zero Fuel Weight - ZFW) est la somme de :",
        options: [
            "La masse de base plus (+) la charge transportée.",
            "La charge transportée plus (+) le carburant au décollage.",
            "La charge offerte (+) le poids des passagers.",
            "La charge offerte plus (+) le carburant consommé."
        ],
        answer: 0,
        explanation: "Le Zero Fuel Weight (ZFW) correspond au poids réel de l'avion sans aucun carburant utilisable. Il s'obtient en additionnant la masse de base (avion + équipage) et la charge marchande transportée."
    },
    {
        subject: "Masse et Centrage",
        question: "La masse de l’avion au décollage (Take-Off Weight - TOW) est égale à :",
        options: [
            "La masse de base plus (+) la charge transportée.",
            "La masse de base plus (+) le carburant au décollage.",
            "La masse sans carburant (ZFW) plus (+) le carburant emporté au décollage.",
            "La masse sans carburant plus (+) le carburant consommé en vol."
        ],
        answer: 2,
        explanation: "Le Take-Off Weight (TOW) est le poids total de l'avion sur la piste au moment du lâcher des freins. Il correspond au ZFW (avion chargé) augmenté du poids du carburant au décollage."
    },
    {
        subject: "Masse et Centrage",
        question: "Comment obtient-on la masse estimée de l’avion à l’atterrissage (Landing Weight - LAW) ?",
        options: [
            "La masse sans carburant (ZFW) plus (+) le délestage prévu.",
            "La masse au décollage (TOW) moins (-) la charge transportée.",
            "La masse de base plus (+) la charge transportée.",
            "La masse au décollage (TOW) moins (-) le délestage (carburant consommé en vol)."
        ],
        answer: 3,
        explanation: "Le Landing Weight (LAW) est le poids estimé de l'appareil au toucher des roues. Il s'obtient en soustrayant de la masse au décollage (TOW) le poids du carburant brûlé durant le trajet (Trip Fuel ou délestage)."
    },
    {
        subject: "Masse et Centrage",
        question: "Qu’est-ce que le délestage (Trip Fuel) ?",
        options: [
            "Le poids du carburant consommé lors du roulage au sol de l’avion.",
            "Le poids total du carburant emporté au départ.",
            "Le poids du carburant consommé en vol entre le décollage et l'atterrissage.",
            "Le poids du carburant restant dans les réservoirs de l’avion à l'arrivée."
        ],
        answer: 2,
        explanation: "Le délestage ou 'Trip Fuel' désigne la quantité de carburant estimée ou réellement consommée par les moteurs durant toute la phase de vol (du décollage jusqu'à l'atterrissage à destination)."
    },
    {
        subject: "Masse et Centrage",
        question: "Définissez la charge résiduelle ou restante (Underload Before Last Minute Changes) :",
        options: [
            "La charge offerte plus (+) la charge transportée.",
            "La charge transportée plus (+) le carburant au décollage.",
            "La masse de base moins (-) la charge transportée.",
            "La charge offerte moins (-) la charge transportée."
        ],
        answer: 3,
        explanation: "L'underload représente la marge de poids encore disponible pour le vol avant la fermeture définitive du chargement. C'est la différence entre la charge maximale offerte et la charge réelle transportée."
    },
    {
        subject: "Masse et Centrage",
        question: "Les corrections de dernière minute dites LMC (Last Minute Changes) consistent à :",
        options: [
            "Modifier la masse en opérations de manière structurelle.",
            "Changer de manière imprévue l’aérodrome de destination.",
            "Ajouter ou déduire des passagers, des bagages et/ou des charges en soute après l'édition de la feuille de chargement.",
            "Dérouter le vol en cours vers l’aérodrome le plus proche."
        ],
        answer: 2,
        explanation: "Les LMC permettent de modifier manuellement ou informatiquement le devis de masse final si des passagers, bagages ou fret de dernière minute sont ajoutés ou retirés juste avant le départ des cales."
    },
    {
        subject: "Masse et Centrage",
        question: "À quoi sert principalement la feuille de centrage (Balance Sheet) ?",
        options: [
            "À manipuler physiquement les conteneurs et les charges dans les soutes.",
            "À s'assurer de la répartition équilibrée des masses pour maintenir le centre de gravité à l'intérieur des limites de sécurité.",
            "À comptabiliser précisément le débarquement des passagers.",
            "À enregistrer nominativement l'embarquement des passagers au comptoir."
        ],
        answer: 1,
        explanation: "La feuille de centrage garantit que le centre de gravité (CG) de l'avion reste dans la plage certifiée par le constructeur pour assurer la stabilité aérodynamique et le contrôle des gouvernes."
    },
    {
        subject: "Masse et Centrage",
        question: "Remplir et valider la feuille de centrage (Balance) revient à :",
        options: [
            "Répartir les bagages uniquement dans les soutes avant et arrière.",
            "Répartir les bagages, le fret et la poste de manière aléatoire en soutes.",
            "Répartir les passagers uniquement en zones de cabine avant, centre et arrière.",
            "Répartir méthodiquement les passagers en cabine et l'ensemble des charges dans les différentes soutes de l'avion."
        ],
        answer: 3,
        explanation: "L'élaboration du centrage combine le placement indexé des passagers par sections/zones de cabine et le positionnement précis du poids du fret et des bagages dans les soutes avant, arrière ou centrales."
    },
    {
        subject: "Masse et Centrage",
        question: "À quoi sert spécifiquement le plan de chargement (Loading Instruction) ?",
        options: [
            "À définir la répartition physique exacte et ordonnée des charges au sein des différentes soutes.",
            "À répartir l'affectation des sièges entre les passagers et le fret.",
            "À planifier la répartition exclusive des passagers en cabine.",
            "À définir la méthode d'emballage et de conditionnement (vrac, palettes, containers)."
        ],
        answer: 0,
        explanation: "Le plan de chargement donne des instructions claires aux équipes au sol pour placer les bagages et conteneurs dans des soutes ou positions précises afin de respecter le centrage calculé."
    },
    {
        subject: "Masse et Centrage",
        question: "Les masses limites maximales structurelles (MZFW, MTOW, MLW) sont impérativement définies par :",
options: [
"Le pilote commandant de bord lors du briefing.",
"Le constructeur aéronautique (fabricant) lors de la certification de l'appareil.",
"La compagnie propriétaire financière de l’aéronef.",
"La compagnie aérienne exploitante de l’aéronef."
],
answer: 1,
explanation: "Les limites de poids maximales admissibles découlent des calculs de résistance structurelle de la cellule et sont figées de manière réglementaire par le constructeur."
},
{
subject: "Masse et Centrage",
question: "Les poids standards forfaitaires appliqués aux passagers (adulte, enfant, bébé) sont définis par :",
options: [
"La compagnie propriétaire des appareils.",
"La réglementation de l'autorité de l'aviation civile ou de l'exploitant dans son manuel.",
"Le constructeur (fabricant) dans ses manuels techniques.",
"Le pilote commandant de bord au coup par coup."
],
answer: 1,
explanation: "Les masses forfaitaires standards des passagers (ex: Adulte = 84 kg, Enfant = 35 kg) sont encadrées par la réglementation aéronautique en vigueur et inscrites dans le MANEX de l'exploitant."
},
{
subject: "Masse et Centrage",
question: "Le bulletin prévisionnel de chargement (Provisional Loadsheet) sert à :",
options: [
"Définir la valeur finale de la charge offerte.",
"Anticiper et définir la masse sans carburant (ZFW) et estimer le carburant maximum emportable.",
"Fixer de manière irréversible la masse maximum au décollage.",
"Mesurer la quantité exacte de carburant à consommer pendant le roulage."
],
answer: 1,
explanation: "Ce document de travail prévisionnel permet à l'agent d'exploitation d'estimer les masses (ZFW) pour que le service carburant effectue l'avitaillement optimal sans risquer de surcharger l'avion."
},
{
subject: "Masse et Centrage",
question: "Le numéro d'identification commercial d'un vol est composé de :",
options: [
"Le code IATA à 2 ou 3 caractères de la compagnie suivi de chiffres.",
"Trois (3) chiffres uniques.",
"Quatre (4) chiffres uniques.",
"Quatre (4) lettres et deux (2) chiffres."
],
answer: 0,
explanation: "Un numéro de vol commercial utilise l'identifiant IATA de la compagnie aérienne (ex: AH pour Air Algérie, AF pour Air France) suivi d'un suffixe numérique (ex: AH2006)."
},
{
subject: "Masse et Centrage",
question: "Qu’est-ce que la configuration de la cabine d'un aéronef ?",
options: [
"La longueur physique totale de la cabine passagers.",
"La largeur maximale mesurée à l'intérieur du fuselage.",
"La hauteur disponible sous les coffres à bagages.",
"La capacité d'accueil en sièges répartie par classes commerciales."
],
answer: 3,
explanation: "La configuration cabine (ex: Configuration mono-classe 180 sièges ou Bi-classe) définit l'aménagement intérieur et le nombre maximum de passagers transportables."
},
{
subject: "Masse et Centrage",
question: "Sur les avions de ligne de type moyen-porteurs, les bagages sont chargés :",
options: [
"Exclusivement en vrac (Loose loading).",
"Exclusivement au moyen de conteneurs ULD.",
"Sur des palettes aéronautiques arrimées.",
"En vrac et/ou en conteneurs selon le modèle et les soutes."
],
answer: 3,
explanation: "Les avions moyen-porteurs (comme l'Airbus A320 ou le Boeing 737) peuvent charger les soutes soit entièrement en vrac (Boeing), soit utiliser des conteneurs AKH spécifiques (Airbus)."
},
{
subject: "Masse et Centrage",
question: "Sur un message officiel de chargement de type LDM (Load Message), on trouve :",
options: [
"La distance précise restant à parcourir.",
"La durée totale estimée du vol.",
"L’heure estimée de départ des cales de l’aéronef.",
"La répartition et le chargement détaillés des passagers, bagages et fret par soutes."
],
answer: 3,
explanation: "Le message standardisé LDM est envoyé immédiatement après le départ à l'escale de destination pour lui communiquer le devis de masse complet et l'emplacement exact des charges en soutes."
},
{
subject: "Masse et Centrage",
question: "Sur un message de mouvement de type MVT (Movement Message), on mentionne :",
options: [
"Le poids détaillé des charges en soutes.",
"Les heures estimées et réelles de départ ou d’arrivée de l’aéronef (blocs et décollage).",
"La liste nominative des membres de l’équipage de conduite.",
"La vitesse de croisière moyenne prévue."
],
answer: 1,
explanation: "Le message MVT notifie instantanément les centres opérationnels des jalons chronologiques du vol (Heure hors-cales/OUT, Heure de décollage/OFF, Heure de toucher/ON, Heure d'arrivée aux cales/IN)."
},
{
subject: "Masse et Centrage",
question: "Que signifie le terme de télécommunication aéronautique « QRG » (Return Ground) ?",
options: [
"La durée estimée totale du vol.",
"Le niveau de vol de croisière demandé.",
"L'ordre ou l'action de retour de l’avion au sol (demi-tour après départ).",
"L’autonomie restante en carburant."
],
answer: 2,
explanation: "Dans les abréviations de service et codes d'exploitation aéronautiques au sol, QRG matérialise l'instruction ou le constat d'un retour au sol de l'aéronef."
},
{
subject: "Masse et Centrage",
question: "Que signifie le terme de télécommunication aéronautique « QRF » (Return Flight) ?",
options: [
"L’aérodrome de dégagement prévu au dossier.",
"Le nombre total de personnes actuellement à bord (POB).",
"La charte graphique ou couleurs officielles de l’aéronef.",
"L'annonce ou la procédure de retour de l’avion en cours de vol."
],
answer: 3,
explanation: "Le signal QRF indique de manière codée le retour en vol d'un aéronef vers son point de départ d'origine ou une escale technique non planifiée."
},
{
subject: "Masse et Centrage",
question: "Que signifie l'abréviation de message « DVT » (Diversion Message) ?",
options: [
"Le type et la variante de l’aéronef exploité.",
"L’indicatif ou le certificat d’immatriculation de l’aéronef.",
"Le déroutement officiel du vol vers un autre aérodrome que celui prévu.",
"L’heure estimée d’arrivée (ETA) calculée par le système."
],
answer: 2,
explanation: "Un message DVT est émis par l'escale ou les services d'exploitation pour notifier l'ensemble des acteurs réseau qu'un vol s'est dérouté (Diversion) vers un terrain alternatif."
},
{
subject: "Masse et Centrage",
question: "Que signifie l'abréviation de message météorologique « QGO » ?",
options: [
"Que le ciel est parfaitement clair au-dessus de la plateforme.",
"La confirmation que la visibilité horizontale est supérieure à 10 km.",
"Que de fortes précipitations pluvieuses et des orages sont imminents.",
"La fermeture complète de l'aéroport en raison de conditions météo dégradées sans amélioration prévue."
],
answer: 3,
explanation: "Historiquement hérité des codes en Q de radiotélégraphie, le terme QGO envoyé par une plateforme signifie de manière stricte que l'aérodrome est fermé ou inutilisable en raison de conditions météo inférieures aux minima."}


];


// ============================================================
// BANQUE DE QUESTIONS PERSISTANTE (LOCALSTORAGE)
// ============================================================
const QUESTIONS_KEY = "aviationQcmQuestionBank";
const QUESTIONS_VERSION = 1;

function createQuestionId() {
    if (window.crypto && typeof window.crypto.randomUUID === "function") {
        return `q-${window.crypto.randomUUID()}`;
    }
    return `q-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
}

function normalizeQuestion(question, index) {
    const options = Array.isArray(question.options) ? question.options.slice(0, 4) : [];

    while (options.length < 2) {
        options.push("");
    }

    let answer = Number.isInteger(question.answer) ? question.answer : 0;
    if (answer < 0 || answer >= options.length) {
        answer = 0;
    }

    return {
        id: question.id || `q-${index + 1}`,
        subject: subjects.includes(question.subject) ? question.subject : (question.subject || subjects[0]),
        question: String(question.question || ""),
        options,
        answer,
        explanation: String(question.explanation || "")
    };
}

function loadQuestionBank() {
    try {
        const saved = localStorage.getItem(QUESTIONS_KEY);

        if (saved) {
            const parsed = JSON.parse(saved);
            const savedQuestions = Array.isArray(parsed) ? parsed : parsed.questions;

            if (Array.isArray(savedQuestions)) {
                const usedIds = new Set();

                const normalized = savedQuestions.map((question, index) => {
                    const normalizedQuestion = normalizeQuestion(question, index);

                    if (usedIds.has(normalizedQuestion.id)) {
                        normalizedQuestion.id = createQuestionId();
                    }

                    usedIds.add(normalizedQuestion.id);
                    return normalizedQuestion;
                });

                return normalized;
            }
        }
    } catch (error) {
        console.warn("Impossible de charger la banque locale. La banque intégrée sera utilisée.", error);
    }

    const initialQuestions = builtInQuestionBank.map(normalizeQuestion);
    saveQuestionBank(initialQuestions);
    return initialQuestions;
}

function saveQuestionBank(questions = questionBank) {
    try {
        localStorage.setItem(QUESTIONS_KEY, JSON.stringify({
            version: QUESTIONS_VERSION,
            questions
        }));
        return true;
    } catch (error) {
        console.error("Impossible d'enregistrer la banque de questions.", error);
        alert("⚠️ Impossible d'enregistrer les modifications. Vérifiez que le stockage local du navigateur est disponible.");
        return false;
    }
}

// This is the single runtime question bank used by the existing quiz system.
let questionBank = loadQuestionBank();

// ============================================================
// ÉTAT DE L'APPLICATION
// ============================================================
let currentQuiz = [];
let currentQuestionIndex = 0;
let currentScore = 0;
let currentQuestionAnswered = false;
let currentMistakes = [];
let currentMode = null;
let currentSubject = null;

// ============================================================
// STATISTIQUES LOCALSTORAGE
// ============================================================
const STATS_KEY = "aviationQcmStats";

function getStats() {
    const defaultStats = {
        bestScore: 0,
        quizzesCompleted: 0,
        questionsAnswered: 0,
        correctAnswers: 0
    };

    try {
        const saved = localStorage.getItem(STATS_KEY);
        return saved ? { ...defaultStats, ...JSON.parse(saved) } : defaultStats;
    } catch (error) {
        return defaultStats;
    }
}

function saveStats(stats) {
    try {
        localStorage.setItem(STATS_KEY, JSON.stringify(stats));
    } catch (error) {
        // L'application continue de fonctionner même si localStorage est indisponible.
    }
}

function updateHomeStats() {
    const stats = getStats();

    document.getElementById("bestScore").textContent = `${stats.bestScore}%`;
    document.getElementById("quizzesCompleted").textContent = stats.quizzesCompleted;
    document.getElementById("questionsAnswered").textContent = stats.questionsAnswered;
    document.getElementById("correctAnswers").textContent = stats.correctAnswers;
}

// ============================================================
// UTILITAIRES
// ============================================================

// Fisher-Yates : mélange vraiment le tableau sans modifier l'original.
function shuffleArray(array) {
    const copy = [...array];

    for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
    }

    return copy;
}

function subjectCount(subject) {
    return questionBank.filter(question => question.subject === subject).length;
}

function getSubjectIcon(subject) {
    const icons = {
        "Préparation de vol": "🛫",
        "Plan de vol": "📋",
        "Réglementation aérienne": "⚖️",
        "Circulation aérienne": "🛬",
        "Liste Minimale d’Équipement": "🧰",
        "Carburant": "⛽",
        "Procédures anormales et d'urgences": "🚨",
        "Navigation aérienne": "🧭",
        "Aérodynamique et Mécanique de vol": "⚙️",
        "Connaissance générale des avions": "✈️",
        "Météorologie": "🌦️",
        "Facteurs Humains": "🧠",
        "Masse et centrage": "⚖️"
    };

    return icons[subject] || "📚";
}

function getAnswerLetter(index) {
    return ["A", "B", "C", "D"][index];
}

function showScreen(screenId) {
    document.querySelectorAll(".screen").forEach(screen => screen.classList.add("hidden"));
    document.getElementById(screenId).classList.remove("hidden");

    const homeButton = document.getElementById("homeButton");

    if (screenId === "homeScreen") {
        homeButton.classList.add("hidden");
    } else {
        homeButton.classList.remove("hidden");
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
}

// ============================================================
// PAGE D'ACCUEIL / MATIÈRES
// ============================================================
function renderSubjects() {
    const grid = document.getElementById("subjectsGrid");
    const emptyMessage = document.getElementById("emptyHomeMessage");

    grid.innerHTML = "";

    subjects.forEach((subject, index) => {
        const count = subjectCount(subject);

        const button = document.createElement("button");
        button.type = "button";
        button.className = "subject-card";
        button.innerHTML = `
            <span class="subject-number">${index + 1} — ${getSubjectIcon(subject)}</span>
            <span class="subject-name">${subject}</span>
            <span class="subject-count">${count} question${count !== 1 ? "s" : ""}</span>
        `;

        button.addEventListener("click", () => startSubjectQuiz(subject));
        grid.appendChild(button);
    });

    emptyMessage.classList.toggle("hidden", questionBank.length !== 0);
}

// ============================================================
// DÉMARRAGE DES DIFFÉRENTS MODES
// ============================================================
function startRandomQuiz() {
    if (questionBank.length === 0) {
        alert("⚠️ Aucune question disponible. Ajoutez des questions dans questionBank.");
        return;
    }

    currentMode = "random";
    currentSubject = null;

    // Mélange complet puis maximum 40 questions sans répétition.
    currentQuiz = shuffleArray(questionBank).slice(0, Math.min(40, questionBank.length));

    startQuiz();
}

function startAllQuiz() {
    if (questionBank.length === 0) {
        alert("⚠️ Aucune question disponible. Ajoutez des questions dans questionBank.");
        return;
    }

    currentMode = "all";
    currentSubject = null;

    // On conserve exactement l'ordre de questionBank.
    currentQuiz = [...questionBank];

    startQuiz();
}

function startSubjectQuiz(subject) {
    const filtered = questionBank.filter(question => question.subject === subject);

    if (filtered.length === 0) {
        alert(`⚠️ Aucune question disponible pour « ${subject} ».`);
        return;
    }

    currentMode = "subject";
    currentSubject = subject;

    // Filtrage dans l'ordre original de questionBank.
    currentQuiz = filtered;

    startQuiz();
}

function startQuiz() {
    currentQuestionIndex = 0;
    currentScore = 0;
    currentQuestionAnswered = false;
    currentMistakes = [];

    document.getElementById("quizModeTitle").textContent = getModeTitle();
    document.getElementById("quizScore").textContent = "0";
    document.getElementById("totalQuestions").textContent = currentQuiz.length;

    showScreen("quizScreen");
    renderQuestion();
}

function getModeTitle() {
    if (currentMode === "random") {
        return "40 Questions aléatoires";
    }

    if (currentMode === "all") {
        return "Toutes les questions";
    }

    return currentSubject || "Quiz";
}

// ============================================================
// AFFICHAGE D'UNE QUESTION
// ============================================================
function renderQuestion() {
    const question = currentQuiz[currentQuestionIndex];

    if (!question) {
        finishQuiz();
        return;
    }

    currentQuestionAnswered = false;

    const subjectText = currentSubject
        ? `${getSubjectIcon(currentSubject)} ${currentSubject}`
        : `${getSubjectIcon(question.subject)} ${question.subject}`;

    document.getElementById("quizSubject").textContent = subjectText;
    document.getElementById("currentQuestion").textContent = currentQuestionIndex + 1;
    document.getElementById("questionNumberLabel").textContent = currentQuestionIndex + 1;
    document.getElementById("questionText").textContent = question.question;

    const percentage = Math.round((currentQuestionIndex / currentQuiz.length) * 100);
    document.getElementById("progressPercent").textContent = `${percentage}%`;
    document.getElementById("progressBar").style.width = `${percentage}%`;

    const feedback = document.getElementById("feedback");
    feedback.classList.add("hidden");
    document.getElementById("nextButton").classList.add("hidden");

    renderAnswers(question);
}

function renderAnswers(question) {
    const container = document.getElementById("answersContainer");
    container.innerHTML = "";

    // On crée des objets contenant l'index original.
    // Cela permet de mélanger les réponses sans perdre la bonne réponse.
    let answerObjects = question.options.map((text, originalIndex) => ({
        text,
        originalIndex
    }));

    const shouldShuffle = document.getElementById("shuffleAnswers").checked;

    if (shouldShuffle) {
        answerObjects = shuffleArray(answerObjects);
    }

    answerObjects.forEach((answerObject, displayIndex) => {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "answer-button";

        button.dataset.originalIndex = answerObject.originalIndex;

        button.innerHTML = `
            <span class="answer-letter">${getAnswerLetter(displayIndex)}</span>
            <span class="answer-text">${answerObject.text}</span>
        `;

        button.addEventListener("click", () => selectAnswer(answerObject.originalIndex, button));
        container.appendChild(button);
    });
}

// ============================================================
// RÉPONSE DE L'UTILISATEUR
// ============================================================
function selectAnswer(selectedOriginalIndex, selectedButton) {
    if (currentQuestionAnswered) {
        return;
    }

    currentQuestionAnswered = true;

    const question = currentQuiz[currentQuestionIndex];
    const isCorrect = selectedOriginalIndex === question.answer;
    const answerButtons = [...document.querySelectorAll(".answer-button")];

    answerButtons.forEach(button => {
        button.disabled = true;

        const originalIndex = Number(button.dataset.originalIndex);

        if (originalIndex === question.answer) {
            button.classList.add("correct");
        }
    });

    if (isCorrect) {
        currentScore++;
        selectedButton.classList.add("correct");
    } else {
        selectedButton.classList.add("incorrect");
    }

    document.getElementById("quizScore").textContent = currentScore;

    // Sauvegarde de l'erreur pour la page des résultats.
    if (!isCorrect) {
        currentMistakes.push({
            question,
            selectedOriginalIndex
        });
    }

    showFeedback(question, isCorrect, selectedOriginalIndex);

    // Raccourci clavier Entrée devient disponible uniquement après réponse.
    document.getElementById("nextButton").classList.remove("hidden");
}

function showFeedback(question, isCorrect, selectedOriginalIndex) {
    const feedback = document.getElementById("feedback");
    const title = document.getElementById("feedbackTitle");
    const correctAnswer = document.getElementById("feedbackCorrectAnswer");
    const explanation = document.getElementById("explanationText");

    title.textContent = isCorrect ? "✓ Bonne réponse !" : "✗ Mauvaise réponse";
    title.style.color = isCorrect ? "var(--green)" : "var(--red)";

    if (isCorrect) {
        correctAnswer.textContent = "";
    } else {
        correctAnswer.textContent =
            `Bonne réponse : ${getAnswerLetter(question.answer)}. ${question.options[question.answer]}`;
    }

    explanation.textContent = question.explanation || "Aucune explication fournie.";

    feedback.classList.remove("hidden");
}

// ============================================================
// QUESTION SUIVANTE
// ============================================================
function nextQuestion() {
    if (!currentQuestionAnswered) {
        return;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex >= currentQuiz.length) {
        finishQuiz();
        return;
    }

    renderQuestion();
}

// ============================================================
// FIN DU QUIZ
// ============================================================
function finishQuiz() {
    const total = currentQuiz.length;
    const percentage = total > 0 ? (currentScore / total) * 100 : 0;

    // Arrondi à 2 décimales pour les cas comme 7/13.
    const score20Value = Math.round(((currentScore / total) * 20) * 100) / 100;
    const score100Value = Math.round(percentage * 100) / 100;
    const roundedPercentage = Math.round(percentage);

    document.getElementById("score20").textContent = `${formatNumber(score20Value)} / 20`;
    document.getElementById("scorePercent").textContent = `${roundedPercentage}%`;
    document.getElementById("score100").textContent = `${formatNumber(score100Value)} / 100`;

    document.getElementById("resultCorrect").textContent = currentScore;
    document.getElementById("resultWrong").textContent = total - currentScore;
    document.getElementById("resultTotal").textContent = total;

    document.getElementById("resultModeText").textContent =
        `${getModeTitle()} · ${total} question${total !== 1 ? "s" : ""}`;

    setEvaluation(roundedPercentage);
    renderMistakes();
    updatePersistentStats(roundedPercentage, total);

    showScreen("resultScreen");
}

function formatNumber(value) {
    return Number.isInteger(value) ? value : value.toFixed(2).replace(/0+$/, "").replace(/\.$/, "");
}

function setEvaluation(percentage) {
    let emoji;
    let title;
    let text;

    if (percentage >= 90) {
        emoji = "🏆";
        title = "Excellent";
        text = "Excellent résultat. Continuez à maintenir ce niveau.";
    } else if (percentage >= 80) {
        emoji = "👏";
        title = "Très bien";
        text = "Très bon niveau. Quelques révisions peuvent encore renforcer vos acquis.";
    } else if (percentage >= 70) {
        emoji = "👍";
        title = "Bien";
        text = "Bon résultat. Continuez l'entraînement pour progresser.";
    } else if (percentage >= 60) {
        emoji = "📚";
        title = "À améliorer";
        text = "Le résultat est encourageant. Revoyez les questions incorrectes.";
    } else {
        emoji = "💪";
        title = "Il faut encore réviser";
        text = "Continuez à vous entraîner et utilisez la section des erreurs pour cibler vos révisions.";
    }

    document.getElementById("evaluationEmoji").textContent = emoji;
    document.getElementById("evaluationTitle").textContent = title;
    document.getElementById("evaluationText").textContent = text;
    document.getElementById("resultIcon").textContent = percentage >= 70 ? "🎉" : "📚";
}

function updatePersistentStats(percentage, total) {
    const stats = getStats();

    stats.bestScore = Math.max(stats.bestScore, Math.round(percentage));
    stats.quizzesCompleted++;
    stats.questionsAnswered += total;
    stats.correctAnswers += currentScore;

    saveStats(stats);
}

// ============================================================
// AFFICHAGE DES ERREURS
// ============================================================
function renderMistakes() {
    const section = document.getElementById("mistakesSection");
    const list = document.getElementById("mistakesList");
    const button = document.getElementById("mistakesButton");

    list.innerHTML = "";

    if (currentMistakes.length === 0) {
        section.classList.add("hidden");
        button.textContent = "📋 Voir mes erreurs";
        return;
    }

    currentMistakes.forEach((mistake, index) => {
        const question = mistake.question;

        const item = document.createElement("div");
        item.className = "mistake";

        item.innerHTML = `
            <div class="mistake-question">
                ${index + 1}. ${question.question}
            </div>
            <div class="mistake-line">
                <strong>Votre réponse :</strong>
                <span class="user-answer">
                    ${getAnswerLetter(mistake.selectedOriginalIndex)}. ${question.options[mistake.selectedOriginalIndex]}
                </span>
            </div>
            <div class="mistake-line">
                <strong>Bonne réponse :</strong>
                <span class="correct-answer">
                    ${getAnswerLetter(question.answer)}. ${question.options[question.answer]}
                </span>
            </div>
            <p class="mistake-explanation">
                <strong>Explication :</strong> ${question.explanation || "Aucune explication fournie."}
            </p>
        `;

        list.appendChild(item);
    });

    section.classList.add("hidden");
    button.textContent = "📋 Voir mes erreurs";
}

function toggleMistakes() {
    const section = document.getElementById("mistakesSection");
    const button = document.getElementById("mistakesButton");

    if (currentMistakes.length === 0) {
        alert("🎉 Félicitations ! Vous avez répondu correctement à toutes les questions.");
        return;
    }

    const isHidden = section.classList.contains("hidden");

    section.classList.toggle("hidden");

    button.textContent = isHidden
        ? "📋 Masquer mes erreurs"
        : "📋 Voir mes erreurs";

    if (isHidden) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
}

// ============================================================
// RECOMMENCER
// ============================================================
function restartQuiz() {
    if (currentMode === "random") {
        startRandomQuiz();
    } else if (currentMode === "all") {
        startAllQuiz();
    } else if (currentMode === "subject") {
        startSubjectQuiz(currentSubject);
    }
}


// ============================================================
// GESTION DES QUESTIONS / ADMINISTRATION
// ============================================================
function populateAdminCategories() {
    const categorySelect = document.getElementById("adminCategory");
    const filterSelect = document.getElementById("questionCategoryFilter");

    categorySelect.innerHTML = "";
    filterSelect.innerHTML = "";

    subjects.forEach(subject => {
        const option = document.createElement("option");
        option.value = subject;
        option.textContent = subject;
        categorySelect.appendChild(option);
    });

    const allOption = document.createElement("option");
    allOption.value = "";
    allOption.textContent = "Toutes les catégories";
    filterSelect.appendChild(allOption);

    subjects.forEach(subject => {
        const option = document.createElement("option");
        option.value = subject;
        option.textContent = subject;
        filterSelect.appendChild(option);
    });
}

function openQuestionManagement() {
    updateAdminQuestionList();
    resetQuestionForm();
    showScreen("adminScreen");
}

function getAdminSearchValue() {
    return document.getElementById("questionSearch").value.trim().toLocaleLowerCase("fr");
}

function updateAdminQuestionList() {
    const list = document.getElementById("adminQuestionsList");
    const emptyState = document.getElementById("adminEmptyState");
    const countLabel = document.getElementById("questionCountLabel");

    if (!list || !emptyState || !countLabel) {
        return;
    }

    const search = getAdminSearchValue();
    const category = document.getElementById("questionCategoryFilter").value;

    const filteredQuestions = questionBank.filter(question => {
        const matchesCategory = !category || question.subject === category;

        const searchableText = [
            question.question,
            question.subject,
            ...(question.options || [])
        ].join(" ").toLocaleLowerCase("fr");

        return matchesCategory && (!search || searchableText.includes(search));
    });

    list.innerHTML = "";
    countLabel.textContent = `${filteredQuestions.length} question${filteredQuestions.length !== 1 ? "s" : ""}`;

    filteredQuestions.forEach((question, index) => {
        list.appendChild(createAdminQuestionCard(question, index));
    });

    emptyState.classList.toggle("hidden", filteredQuestions.length !== 0);
}

function createAdminQuestionCard(question, filteredIndex) {
    const card = document.createElement("article");
    card.className = "admin-question-card";

    const heading = document.createElement("div");
    heading.className = "admin-question-heading";

    const number = document.createElement("span");
    number.className = "admin-question-number";
    number.textContent = `#${questionBank.indexOf(question) + 1}`;

    const category = document.createElement("span");
    category.className = "admin-category-badge";
    category.textContent = question.subject;

    heading.append(number, category);

    const questionText = document.createElement("h3");
    questionText.textContent = question.question;

    const answers = document.createElement("div");
    answers.className = "admin-answer-list";

    (question.options || []).forEach((optionText, optionIndex) => {
        const answer = document.createElement("div");
        answer.className = "admin-answer-row";
        if (optionIndex === question.answer) {
            answer.classList.add("is-correct");
        }

        const letter = document.createElement("span");
        letter.className = "admin-answer-letter";
        letter.textContent = getAnswerLetter(optionIndex);

        const text = document.createElement("span");
        text.className = "admin-answer-value";
        text.textContent = optionText || "—";

        answer.append(letter, text);

        if (optionIndex === question.answer) {
            const correct = document.createElement("strong");
            correct.className = "correct-badge";
            correct.textContent = "✓ Correcte";
            answer.appendChild(correct);
        }

        answers.appendChild(answer);
    });

    const explanation = document.createElement("p");
    explanation.className = "admin-explanation";
    explanation.textContent = question.explanation
        ? `Explication : ${question.explanation}`
        : "Aucune explication fournie.";

    const actions = document.createElement("div");
    actions.className = "admin-question-actions";

    const editButton = document.createElement("button");
    editButton.type = "button";
    editButton.className = "secondary-button";
    editButton.textContent = "✏️ Modifier";
    editButton.addEventListener("click", () => startEditingQuestion(question.id));

    const deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.className = "danger-button";
    deleteButton.textContent = "🗑️ Supprimer";
    deleteButton.addEventListener("click", () => deleteQuestion(question.id));

    actions.append(editButton, deleteButton);
    card.append(heading, questionText, answers, explanation, actions);

    return card;
}

function getQuestionFormData() {
    const options = [
        document.getElementById("adminAnswerA").value.trim(),
        document.getElementById("adminAnswerB").value.trim(),
        document.getElementById("adminAnswerC").value.trim(),
        document.getElementById("adminAnswerD").value.trim()
    ];

    const selectedCorrect = document.querySelector('input[name="correctAnswer"]:checked');

    return {
        subject: document.getElementById("adminCategory").value,
        question: document.getElementById("adminQuestionText").value.trim(),
        options,
        answer: selectedCorrect ? Number(selectedCorrect.value) : null,
        explanation: ""
    };
}

function validateQuestionForm(data) {
    if (!data.question) {
        alert("Veuillez saisir le texte de la question.");
        return false;
    }

    if (!subjects.includes(data.subject)) {
        alert("Veuillez sélectionner une catégorie valide.");
        return false;
    }

    if (!data.options[0] || !data.options[1]) {
        alert("Les réponses A et B sont obligatoires.");
        return false;
    }

    if (data.answer === null || data.answer < 0 || data.answer > 3) {
        alert("Veuillez sélectionner la bonne réponse.");
        return false;
    }

    if (!data.options[data.answer]) {
        alert("La réponse sélectionnée comme correcte ne peut pas être vide.");
        return false;
    }

    return true;
}

function handleQuestionFormSubmit(event) {
    event.preventDefault();

    const data = getQuestionFormData();
    if (!validateQuestionForm(data)) {
        return;
    }

    const editingId = document.getElementById("editingQuestionId").value;

    if (editingId) {
        const question = questionBank.find(item => item.id === editingId);

        if (!question) {
            alert("⚠️ Cette question n'existe plus.");
            resetQuestionForm();
            updateAdminQuestionList();
            return;
        }

        // Mutate the existing object so any active quiz referencing it sees the change.
        question.subject = data.subject;
        question.question = data.question;
        question.options = data.options.filter((option, index) => option || index < 2);
        question.answer = data.answer;

        if (question.answer >= question.options.length) {
            question.answer = 0;
        }

        if (saveQuestionBank()) {
            if (currentQuiz.some(item => item.id === editingId) &&
                !document.getElementById("quizScreen").classList.contains("hidden") &&
                currentQuiz[currentQuestionIndex] &&
                currentQuiz[currentQuestionIndex].id === editingId) {
                renderQuestion();
            }

            alert("✅ Question modifiée avec succès.");
            resetQuestionForm();
            updateAdminQuestionList();
        }

        return;
    }

    const newQuestion = {
        id: createQuestionId(),
        subject: data.subject,
        question: data.question,
        options: data.options,
        answer: data.answer,
        explanation: ""
    };

    questionBank.push(newQuestion);

    if (saveQuestionBank()) {
        alert("✅ Question ajoutée avec succès.");
        resetQuestionForm();
        renderSubjects();
        updateAdminQuestionList();
    } else {
        questionBank.pop();
    }
}

function startEditingQuestion(questionId) {
    const question = questionBank.find(item => item.id === questionId);

    if (!question) {
        alert("⚠️ Question introuvable.");
        return;
    }

    document.getElementById("editingQuestionId").value = question.id;
    document.getElementById("adminQuestionText").value = question.question;
    document.getElementById("adminCategory").value = question.subject;
    document.getElementById("adminAnswerA").value = question.options[0] || "";
    document.getElementById("adminAnswerB").value = question.options[1] || "";
    document.getElementById("adminAnswerC").value = question.options[2] || "";
    document.getElementById("adminAnswerD").value = question.options[3] || "";

    const correctRadio = document.querySelector(`input[name="correctAnswer"][value="${question.answer}"]`);
    if (correctRadio) {
        correctRadio.checked = true;
    }

    document.getElementById("questionFormTitle").textContent = "Modifier la question";
    document.getElementById("saveQuestionButton").textContent = "Enregistrer";
    document.getElementById("cancelEditButton").classList.remove("hidden");
    document.getElementById("correctAnswerHint").textContent =
        `Réponse correcte actuelle : ${getAnswerLetter(question.answer)}`;

    document.getElementById("adminQuestionText").focus();
    document.querySelector(".admin-form-panel").scrollIntoView({ behavior: "smooth", block: "start" });
}

function resetQuestionForm() {
    const form = document.getElementById("questionForm");
    if (!form) {
        return;
    }

    form.reset();
    document.getElementById("editingQuestionId").value = "";
    document.getElementById("questionFormTitle").textContent = "Ajouter une question";
    document.getElementById("saveQuestionButton").textContent = "Ajouter la question";
    document.getElementById("cancelEditButton").classList.add("hidden");
    document.getElementById("correctAnswerHint").textContent =
        "Sélectionnez clairement la bonne réponse.";

    if (subjects.length > 0) {
        document.getElementById("adminCategory").value = subjects[0];
    }
}

function deleteQuestion(questionId) {
    const index = questionBank.findIndex(item => item.id === questionId);

    if (index === -1) {
        alert("⚠️ Question introuvable.");
        return;
    }

    const question = questionBank[index];
    const confirmed = window.confirm(
        `Êtes-vous sûr de vouloir supprimer cette question ?\n\n"${question.question}"`
    );

    if (!confirmed) {
        return;
    }

    const deleted = questionBank.splice(index, 1)[0];

    if (saveQuestionBank()) {
        if (document.getElementById("editingQuestionId").value === questionId) {
            resetQuestionForm();
        }

        renderSubjects();
        updateAdminQuestionList();
        alert("🗑️ Question supprimée.");
    } else {
        questionBank.splice(index, 0, deleted);
    }
}

function openAdminHome() {
    updateHomeStats();
    renderSubjects();
    showScreen("homeScreen");
}

// ============================================================
// CLAVIER
// ============================================================
document.addEventListener("keydown", event => {
    // Les raccourcis ne fonctionnent que pendant le quiz.
    if (document.getElementById("quizScreen").classList.contains("hidden")) {
        return;
    }

    if (!currentQuestionAnswered) {
        const key = event.key.toLowerCase();

        const keyMap = {
            "1": 0,
            "a": 0,
            "2": 1,
            "b": 1,
            "3": 2,
            "c": 2,
            "4": 3,
            "d": 3
        };

        if (Object.prototype.hasOwnProperty.call(keyMap, key)) {
            const displayIndex = keyMap[key];
            const buttons = [...document.querySelectorAll(".answer-button")];

            if (buttons[displayIndex]) {
                buttons[displayIndex].click();
            }
        }

        return;
    }

    if (event.key === "Enter") {
        event.preventDefault();
        nextQuestion();
    }
});


// ============================================================
// THÈME CLAIR / SOMBRE
// ============================================================
const THEME_KEY = "aviationQcmTheme";

function applyTheme(theme) {
    const isDark = theme === "dark";
    document.body.classList.toggle("dark-mode", isDark);

    const toggle = document.getElementById("themeToggle");
    if (toggle) {
        toggle.textContent = isDark ? "☀️ Mode clair" : "🌙 Mode sombre";
        toggle.setAttribute(
            "aria-label",
            isDark ? "Activer le mode clair" : "Activer le mode sombre"
        );
    }
}

function initTheme() {
    let theme = "light";

    try {
        theme = localStorage.getItem(THEME_KEY) || "light";
    } catch (error) {
        // Keep light mode if localStorage is unavailable.
    }

    applyTheme(theme === "dark" ? "dark" : "light");
}

function toggleTheme() {
    const nextTheme = document.body.classList.contains("dark-mode") ? "light" : "dark";

    applyTheme(nextTheme);

    try {
        localStorage.setItem(THEME_KEY, nextTheme);
    } catch (error) {
        // Theme still changes for the current session.
    }
}

// ============================================================
// BOUTONS
// ============================================================
document.getElementById("themeToggle").addEventListener("click", toggleTheme);

document.getElementById("randomQuizButton").addEventListener("click", startRandomQuiz);
document.getElementById("allQuizButton").addEventListener("click", startAllQuiz);

document.getElementById("adminButton").addEventListener("click", openQuestionManagement);
document.getElementById("adminBackButton").addEventListener("click", openAdminHome);
document.getElementById("questionForm").addEventListener("submit", handleQuestionFormSubmit);
document.getElementById("cancelEditButton").addEventListener("click", resetQuestionForm);
document.getElementById("questionSearch").addEventListener("input", updateAdminQuestionList);
document.getElementById("questionCategoryFilter").addEventListener("change", updateAdminQuestionList);

document.querySelectorAll('input[name="correctAnswer"]').forEach(radio => {
    radio.addEventListener("change", () => {
        document.getElementById("correctAnswerHint").textContent =
            `Réponse correcte sélectionnée : ${getAnswerLetter(Number(radio.value))}`;
    });
});
document.getElementById("nextButton").addEventListener("click", nextQuestion);
document.getElementById("restartButton").addEventListener("click", restartQuiz);
document.getElementById("mistakesButton").addEventListener("click", toggleMistakes);

document.getElementById("menuButton").addEventListener("click", () => {
    updateHomeStats();
    renderSubjects();
    showScreen("homeScreen");
});

document.getElementById("homeButton").addEventListener("click", () => {
    updateHomeStats();
    renderSubjects();
    showScreen("homeScreen");
});

// ============================================================
// INITIALISATION
// ============================================================
function init() {
    initTheme();
    populateAdminCategories();
    resetQuestionForm();
    updateHomeStats();
    renderSubjects();
    showScreen("homeScreen");
}

init();
