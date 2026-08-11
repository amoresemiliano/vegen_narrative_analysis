import { TopicResearch, Publication, Narrative, CommentReaction, Connection, LibraryCollection } from '../types';

export const FLAT_EARTH_TOPIC: TopicResearch = {
  id: 'flat-earth-demo',
  name: 'Terraplanismo / Tierra Plana',
  subtitle: 'Análisis del discurso digital sobre escepticismo empírico y desconfianza institucional',
  description: 'Investigación sobre comunidades y contenidos digitales que cuestionan los modelos astronómicos y geofísicos oficiales. Centrado en patrones lingüísticos, argumentos de observación personal y desconfianza hacia la NASA, instituciones científicas y autoridades globales.',
  period: '15 ene 2026 - 05 ago 2026',
  publicationCount: 1420,
  commentCount: 18350,
  sourceCount: 84,
  countries: ['Argentina', 'Estados Unidos', 'España', 'México', 'Brasil', 'Colombia', 'Reino Unido', 'Chile', 'Francia', 'Perú', 'Ecuador', 'Alemania'],
  temperature: {
    intensityScore: 82,
    intensityLabel: 'Alta',
    predominantReaction: 'Desconfianza institucional y rechazo epistémico',
    polarizationLevel: 'Alta',
    emotionalActivation: 'Alta',
    distrustLevel: 88,
  },
  keywords: [
    { word: 'NASA', count: 8420, sentiment: 'negative' },
    { word: 'Muro de la Antártida', count: 6210, sentiment: 'negative' },
    { word: 'Imágenes CGI', count: 5890, sentiment: 'negative' },
    { word: 'Nivel del agua', count: 4720, sentiment: 'neutral' },
    { word: 'Curvatura', count: 4310, sentiment: 'neutral' },
    { word: 'Firmamento', count: 3950, sentiment: 'positive' },
    { word: 'Adoctrinamiento', count: 3620, sentiment: 'negative' },
    { word: 'Despierta', count: 3100, sentiment: 'positive' },
    { word: 'Perspectiva', count: 2840, sentiment: 'neutral' },
    { word: 'Mentiras', count: 2650, sentiment: 'negative' },
  ],
  entities: [
    { name: 'NASA', type: 'Organización', mentions: 8420 },
    { name: 'Sistema del Tratado Antártico', type: 'Concepto', mentions: 4120 },
    { name: 'Eric Dubay', type: 'Persona', mentions: 3290 },
    { name: 'Neil deGrasse Tyson', type: 'Persona', mentions: 2840 },
    { name: 'SpaceX / Elon Musk', type: 'Organización', mentions: 2150 },
    { name: 'Estación Espacial Internacional (EEI)', type: 'Ubicación', mentions: 1980 },
  ],
  emotions: [
    { emotion: 'Desconfianza / Sospecha', percentage: 41, color: '#f59e0b' },
    { emotion: 'Indignación moral', percentage: 24, color: '#ef4444' },
    { emotion: 'Superioridad de grupo / Revelación', percentage: 18, color: '#8b5cf6' },
    { emotion: 'Ridiculización / Burlas (Oponentes)', percentage: 12, color: '#ec4899' },
    { emotion: 'Incertidumbre escéptica', percentage: 5, color: '#06b6d4' },
  ],
  sentimentBreakdown: {
    positive: 14,
    neutral: 22,
    negative: 64,
  },
  temporalData: [
    { date: 'Feb 2026', volume: 180, sentimentIndex: -0.42, polarizationIndex: 68 },
    { date: 'Mar 2026', volume: 240, sentimentIndex: -0.48, polarizationIndex: 72 },
    { date: 'Abr 2026', volume: 310, sentimentIndex: -0.55, polarizationIndex: 81 },
    { date: 'May 2026', volume: 490, sentimentIndex: -0.62, polarizationIndex: 89 },
    { date: 'Jun 2026', volume: 380, sentimentIndex: -0.58, polarizationIndex: 84 },
    { date: 'Jul 2026', volume: 560, sentimentIndex: -0.66, polarizationIndex: 91 },
    { date: 'Ago 2026', volume: 620, sentimentIndex: -0.61, polarizationIndex: 88 },
  ],
};

export const MOCK_PUBLICATIONS: Publication[] = [
  {
    id: 'pub-01',
    topicId: 'flat-earth-demo',
    sourcePlatform: 'YouTube',
    author: 'HorizonteLibre_Oficial',
    authorHandle: '@HorizonteLibre',
    country: 'Argentina',
    countryCode: 'AR',
    date: '2026-07-28',
    title: '20 Observaciones empíricas que el sistema educativo se niega a explicar',
    summary: 'Videoensayo que analiza pruebas con láser sobre grandes extensiones de agua, argumentando que la falta de curvatura visible contradice los cálculos geométricos globulares.',
    fullText: 'En este video revisamos 20 demostraciones físicas realizadas con láseres infrarrojos a lo largo de lagos que superan los 25 km. En todos los casos, los puntos de destino fueron plenamente visibles a pesar de que la matemática oficial predecía una caída de más de 30 metros. ¿Por qué los libros escolares omiten estas pruebas empíricas de campo?',
    url: 'https://youtube.com/watch?v=demo_flat_01',
    commentCount: 2410,
    engagementScore: 184000,
    mainNarrativeId: 'narrative-02',
    mainNarrativeTitle: 'Evidencia anecdótica y observación personal',
    predominantTone: 'Inquisitivo y Aseverativo',
    claims: [
      'Láser infrarrojo visible a lo largo de 25 km sin la caída teórica calculada',
      'Los planes de estudio escolares ignoran experimentos ópticos no institucionales',
      'La observación directa prevalece sobre los modelos matemáticos oficiales'
    ],
    sampleComments: [
      '¡Al fin alguien usa instrumentos reales en lugar de composiciones en CGI!',
      'Hice una prueba similar en el Lago Nahuel Huapi y obtuve una visibilidad idéntica.',
      'Esto ignora la refracción de la luz en las capas inferiores de densidad atmosférica.'
    ]
  },
  {
    id: 'pub-02',
    topicId: 'flat-earth-demo',
    sourcePlatform: 'X (Twitter)',
    author: 'DiscursoCritico_MX',
    authorHandle: '@DiscursoCriticoMX',
    country: 'México',
    countryCode: 'MX',
    date: '2026-08-01',
    title: 'Análisis del crecimiento presupuestario de la NASA frente a la transparencia en imágenes satelitales',
    summary: 'Hilo viral que sostiene que los presupuestos de agencias espaciales aumentan mientras las imágenes públicas dependen de renders e ilustraciones compuestas.',
    fullText: 'Hilo: La NASA recibe 25 mil millones de dólares anuales. Sin embargo, al examinar imágenes de alta resolución de la Tierra de 2002 frente a 2022, los patrones de nubes se repiten y la escala de los continentes varía drásticamente. ¿Por qué pagamos miles de millones por composiciones de Photoshop? [1/12]',
    url: 'https://x.com/DiscursoCriticoMX/status/18293021',
    commentCount: 1850,
    engagementScore: 92300,
    mainNarrativeId: 'narrative-01',
    mainNarrativeTitle: 'Desconfianza institucional',
    predominantTone: 'Acusatorio y Escéptico',
    claims: [
      'Las imágenes públicas de la Tierra desde el espacio son composiciones digitales y no fotos de una sola toma',
      'Las asignaciones financieras a agencias espaciales carecen de pruebas visuales verificables',
      'Existen discrepancias en el tamaño de los continentes entre diferentes publicaciones oficiales'
    ],
    sampleComments: [
      'Ellos mismos admitieron que la Blue Marble de 2002 se armó con bandas de datos, no con una foto.',
      'Es un compuesto de datos porque los satélites orbitan bajo, no un fraude secreto.',
      'Sigan el dinero. Las instituciones públicas deberían ofrecer emisiones sin editar.'
    ]
  },
  {
    id: 'pub-03',
    topicId: 'flat-earth-demo',
    sourcePlatform: 'TikTok',
    author: 'CienciaSinFiltros_ES',
    authorHandle: '@CienciaSinFiltros',
    country: 'España',
    countryCode: 'ES',
    date: '2026-08-03',
    title: 'Por qué el Tratado Antártico restringe la exploración independiente más allá del paralelo 60S',
    summary: 'Video corto centrado en afirmaciones conspirativas sobre el Tratado Antártico, presentándolo como un límite militarizado.',
    fullText: '¿Sabías que 54 naciones firmaron un tratado que prohíbe a cualquier particular explorar la Antártida sin escolta militar? ¿Qué protegen detrás del muro de hielo? #Antartida #Secreto #Historia',
    url: 'https://tiktok.com/@CienciaSinFiltros/video/7291039123',
    commentCount: 3910,
    engagementScore: 310000,
    mainNarrativeId: 'narrative-03',
    mainNarrativeTitle: 'Encuadre conspirativo y cartel global',
    predominantTone: 'Alarmista y Misterioso',
    claims: [
      'El Tratado Antártico impide la travesía civil independiente',
      'Las potencias mundiales mantienen una vigilancia unificada pese a sus rivalidades geopolíticas',
      'Los límites geográficos se ocultan tras protocolos militares'
    ],
    sampleComments: [
      '¿Países que se odian políticamente se ponen de acuerdo en la Antártida? Sospechoso.',
      'Cualquiera puede contratar una expedición antártica, solo se necesitan permisos de seguridad ambiental.',
      'Esta es la clave real para entender el límite del firmamento.'
    ]
  },
  {
    id: 'pub-04',
    topicId: 'flat-earth-demo',
    sourcePlatform: 'Reddit',
    author: 'u/ObservadorIndependiente',
    authorHandle: 'r/GeometriaAlternativa',
    country: 'Chile',
    countryCode: 'CL',
    date: '2026-07-20',
    title: 'La psicología de ser etiquetado como "irracional" por cuestionar la astronomía oficial',
    summary: 'Reflexión comunitaria sobre el rechazo social, el acoso escolar y la hostilidad mediática que enfrentan quienes adoptan posturas no convencionales.',
    fullText: 'Cuando cuestioné la curvatura en mi materia electiva de física universitaria, el profesor no ofreció demostraciones matemáticas; ofreció sarcasmo. Nuestra comunidad es atacada porque cuestionar el paradigma rompe la ilusión de control.',
    url: 'https://reddit.com/r/GeometriaAlternativa/comments/xy91a',
    commentCount: 840,
    engagementScore: 14200,
    mainNarrativeId: 'narrative-04',
    mainNarrativeTitle: 'Victimización del grupo e identidad colectiva',
    predominantTone: 'Victimista y Solidario',
    claims: [
      'Los entornos académicos tradicionales responden con estigmas en lugar de diálogo empírico',
      'Los defensores de cosmologías no convencionales comparten una red de apoyo mutuo sólida',
      'El rechazo social actúa como un mecanismo de imposición dogmática'
    ],
    sampleComments: [
      'Me pasó lo mismo en mi grupo familiar. Es más fácil burlarse que investigar.',
      'Fuerza a todos los investigadores independientes.',
      'El método científico requiere dudar de todo, incluso de la autoridad.'
    ]
  },
  {
    id: 'pub-05',
    topicId: 'flat-earth-demo',
    sourcePlatform: 'Blog de Noticias',
    author: 'PrensaDigital_Analisis',
    authorHandle: 'Prensa Digital',
    country: 'Estados Unidos',
    countryCode: 'US',
    date: '2026-07-15',
    title: 'Desconstrucción de la amplificación algorítmica del debate terraplanista en feeds de recomendación',
    summary: 'Investigación periodística sobre cómo los algoritmos de video corto impulsan debates cosmológicos polarizantes para elevar las métricas de permanencia.',
    fullText: 'Los motores de recomendación optimizan el tiempo de visualización. Los contenidos que cuestionan la ciencia básica generan intensos bucles de debate en comentarios, aumentando el alcance cuatro veces más que el contenido educativo tradicional.',
    url: 'https://prensadigital.org/articles/algorithmic-polarization-2026',
    commentCount: 620,
    engagementScore: 48000,
    mainNarrativeId: 'narrative-01',
    mainNarrativeTitle: 'Desconfianza institucional',
    predominantTone: 'Analítico y Crítico',
    claims: [
      'Los algoritmos de recomendación priorizan temas controversiales para optimizar el tiempo de retención',
      'Los debates polarizantes en secciones de comentarios incrementan las métricas de retención en un 400%'
    ]
  },
  {
    id: 'pub-06',
    topicId: 'flat-earth-demo',
    sourcePlatform: 'Telegram',
    author: 'Canal_Investigacion_Plana',
    authorHandle: '@InvestigacionPlana',
    country: 'Brasil',
    countryCode: 'BR',
    date: '2026-08-04',
    title: 'Rutas de vuelo en el Hemisferio Sur: Trayectos directos vs escalas polares',
    summary: 'Análisis de diagramas que cuestionan por qué los vuelos directos entre Sídney y Buenos Aires suelen seguir trayectorias específicas sobre el Pacífico.',
    fullText: 'Análisis detallado de las rutas aeronáuticas comerciales en el Hemisferio Sur y la justificación técnica de las escalas intermedias.',
    url: 'https://t.me/InvestigacionPlana/882',
    commentCount: 1120,
    engagementScore: 28900,
    mainNarrativeId: 'narrative-02',
    mainNarrativeTitle: 'Evidencia anecdótica y observación personal',
    predominantTone: 'Deductivo y Escéptico',
    claims: [
      'Las rutas de vuelo en el hemisferio sur reflejan proyecciones cartográficas no convencionales',
      'Las rutas polares directas son menos frecuentes que las trayectorias por el Pacífico'
    ],
    sampleComments: [
      'Buen mapa de rutas, explica por qué las escalas son tan extrañas.',
      'Los vientos dominantes de chorro determinan esas rutas de vuelo por economía de combustible.'
    ]
  }
];

export const MOCK_NARRATIVES: Narrative[] = [
  {
    id: 'narrative-01',
    code: 'NARRATIVA 01',
    title: 'Desconfianza institucional y engaño sistémico',
    description: 'Encuadre que sostiene que gobiernos, agencias espaciales (NASA, ESA) e instituciones académicas ocultan verdades fundamentales al público para mantener el control financiero y psicológico.',
    prevalencePercentage: 38,
    emotionalProfile: 'Alta sospecha, indignación moral, cinismo institucional',
    representativeKeywords: ['NASA', 'Mentiras', 'Sistema corrupto', 'Adoctrinamiento', 'Miles de millones', 'CGI', 'Fake News'],
    associatedClaims: [
      'Los presupuestos de agencias espaciales se malgastan en imágenes sintéticas',
      'Los programas académicos entrenan para la obediencia en lugar del pensamiento crítico',
      'Organizaciones globales mantienen pactos secretos como el Tratado Antártico'
    ],
    typicalLinguisticPatterns: [
      '"No quieren que sepas..."',
      '"Sigue el dinero detrás de..."',
      '"Te lo enseñan en las escuelas sin pruebas"'
    ],
    relatedSourceCount: 42,
    timeEvolution: [
      { date: 'Feb', score: 28 },
      { date: 'Abr', score: 32 },
      { date: 'Jun', score: 36 },
      { date: 'Ago', score: 38 }
    ],
    audienceReactionSummary: 'Predomina la validación y la sospecha compartida entre simpatizantes; burlas severas y refutaciones por parte de usuarios oponentes.',
    dna: {
      institutionalDistrust: 94,
      usVsThemLanguage: 86,
      groupVictimization: 72,
      perceivedThreat: 68,
      linguisticCertainty: 82,
      emotionalActivation: 78,
      anecdotalEvidence: 64,
      conspiracyFraming: 90,
      hostility: 58,
      collectiveIdentity: 75
    }
  },
  {
    id: 'narrative-02',
    code: 'NARRATIVA 02',
    title: 'Observación personal e intuición empírica',
    description: 'Premisa de que la experiencia sensorial individual (ver horizontes planos, el agua buscando su nivel, visibilidad láser) es significativamente más confiable que los modelos matemáticos o astronómicos abstractos.',
    prevalencePercentage: 29,
    emotionalProfile: 'Autonomía epistémica, curiosidad, empoderamiento intelectual',
    representativeKeywords: ['Nivel del agua', 'Prueba láser', 'Matemática de curvatura', 'Perspectiva', 'Mis propios ojos', 'Línea de horizonte'],
    associatedClaims: [
      'Las masas de agua reposan siempre en un plano horizontal sin curvatura a escala',
      'Los globos a gran altitud muestran un horizonte plano a la altura de la vista',
      'La visibilidad atmosférica supera los cálculos teóricos de caída por curvatura'
    ],
    typicalLinguisticPatterns: [
      '"Pruébalo tú mismo con una cámara..."',
      '"Confía en tus ojos, no en sus números..."',
      '"¿Dónde está la curva calculada?"'
    ],
    relatedSourceCount: 31,
    timeEvolution: [
      { date: 'Feb', score: 22 },
      { date: 'Abr', score: 25 },
      { date: 'Jun', score: 28 },
      { date: 'Ago', score: 29 }
    ],
    audienceReactionSummary: 'Detona debates técnicos, argumentos metodológicos en contra (refracción, escala) y llamadas a experimentos reproducibles.',
    dna: {
      institutionalDistrust: 68,
      usVsThemLanguage: 54,
      groupVictimization: 42,
      perceivedThreat: 38,
      linguisticCertainty: 88,
      emotionalActivation: 52,
      anecdotalEvidence: 96,
      conspiracyFraming: 45,
      hostility: 32,
      collectiveIdentity: 60
    }
  },
  {
    id: 'narrative-03',
    code: 'NARRATIVA 03',
    title: 'Cartel global coordinado y territorio delimitado',
    description: 'Estructura conspirativa profunda que representa la Tierra como un sistema cerrado o plano rodeado por murallas de hielo, administrado por un grupo de poder que oculta recursos e información.',
    prevalencePercentage: 21,
    emotionalProfile: 'Asombro existencial, paranoia aguda, urgencia apocalíptica',
    representativeKeywords: ['Muro de hielo', 'Firmamento', 'Más allá de la Antártida', 'Élite global', 'Sistema cerrado', 'Continentes ocultos'],
    associatedClaims: [
      'La Antártida es una frontera exterior que contiene los océanos',
      'Los gobiernos ocultan tierras más allá del mapa conocido',
      'El domo o firmamento aísla a la humanidad en términos espirituales'
    ],
    typicalLinguisticPatterns: [
      '"Qué hay más allá del límite..."',
      '"54 naciones firmaron el tratado..."',
      '"El secreto definitivo del origen humano"'
    ],
    relatedSourceCount: 22,
    timeEvolution: [
      { date: 'Feb', score: 18 },
      { date: 'Abr', score: 20 },
      { date: 'Jun', score: 21 },
      { date: 'Ago', score: 21 }
    ],
    audienceReactionSummary: 'Provoca fascinación en nichos esotéricos y fuerte hostilidad o burla en divulgadores científicos tradicionales.',
    dna: {
      institutionalDistrust: 92,
      usVsThemLanguage: 90,
      groupVictimization: 81,
      perceivedThreat: 85,
      linguisticCertainty: 76,
      emotionalActivation: 89,
      anecdotalEvidence: 70,
      conspiracyFraming: 98,
      hostility: 65,
      collectiveIdentity: 82
    }
  },
  {
    id: 'narrative-04',
    code: 'NARRATIVA 04',
    title: 'Minoría consciente frente a la estigmatización',
    description: 'Dinámica de identidad de grupo estructurada sobre la percepción de estar informados mientras se sufre burla, persecución o censura por parte de la sociedad general.',
    prevalencePercentage: 12,
    emotionalProfile: 'Resiliencia, solidaridad de grupo, superioridad moral, complejo de persecución',
    representativeKeywords: ['Despiertos', 'Adoctrinados', 'Ridiculizados', 'Censura', 'Mente independiente', 'Buscadores de verdad'],
    associatedClaims: [
      'Cuestionar la ciencia oficial provoca cancelación social',
      'Quienes apoyan la teoría poseen valentía moral para enfrentar la presión social',
      'Los insultos del mainstream confirman la incomodidad ante la narración oficial'
    ],
    typicalLinguisticPatterns: [
      '"Se ríen porque no quieren ver..."',
      '"Censurados por hacer preguntas sencillas"',
      '"Mucha fuerza a los que buscan la verdad"'
    ],
    relatedSourceCount: 15,
    timeEvolution: [
      { date: 'Feb', score: 10 },
      { date: 'Abr', score: 11 },
      { date: 'Jun', score: 12 },
      { date: 'Ago', score: 12 }
    ],
    audienceReactionSummary: 'Gran cohesión interna y apoyo entre pares; rechazo y distanciamiento en interacciones externas.',
    dna: {
      institutionalDistrust: 78,
      usVsThemLanguage: 95,
      groupVictimization: 94,
      perceivedThreat: 76,
      linguisticCertainty: 80,
      emotionalActivation: 84,
      anecdotalEvidence: 55,
      conspiracyFraming: 68,
      hostility: 48,
      collectiveIdentity: 92
    }
  }
];

export const MOCK_COMMENTS: CommentReaction[] = [
  {
    id: 'c-01',
    text: 'Nadie ha mostrado jamás un video continuo y sin editar de un satélite girando alrededor de una esfera curvada. Todo es arte digital.',
    platform: 'YouTube',
    author: 'Usuario_Inquisidor88',
    category: 'Desconfianza',
    emotionalIntensity: 8,
    linguisticMarkers: ['desconfianza institucional', 'negación', 'exigencia de prueba sin editar'],
    date: '2026-08-04'
  },
  {
    id: 'c-02',
    text: 'Basta con mirar a través de un telescopio a Júpiter para ver su rotación esférica y sus lunas orbitando en tiempo real.',
    platform: 'YouTube',
    author: 'AstroPro_Manuel',
    category: 'Desacuerdo',
    emotionalIntensity: 6,
    linguisticMarkers: ['refutación por observación directa', 'referencia astronómica empírica'],
    date: '2026-08-04'
  },
  {
    id: 'c-03',
    text: 'Resulta preocupante cómo en pleno 2026 hay quienes descartan 2.500 años de física y los cálculos de Eratóstenes.',
    platform: 'X (Twitter)',
    author: 'Elena_PhysicsCL',
    category: 'Indignación',
    emotionalIntensity: 9,
    linguisticMarkers: ['referencia histórica', 'preocupación por cultura científica'],
    date: '2026-08-03'
  },
  {
    id: 'c-04',
    text: 'Antes me burlaba de estos temas hasta que investigué los experimentos con láser. Ahora tengo dudas serias sobre lo que nos enseñaron.',
    platform: 'TikTok',
    author: 'Carlos_M_BsAs',
    category: 'Incertidumbre',
    emotionalIntensity: 7,
    linguisticMarkers: ['cambio de postura', 'giro anecdotario', 'duda de la enseñanza formal'],
    date: '2026-08-02'
  },
  {
    id: 'c-05',
    text: '¡Este video dice la verdad! La NASA consume presupuestos gigantescos simulando exploración espacial.',
    platform: 'YouTube',
    author: 'Resistencia_Digital',
    category: 'Apoyo',
    emotionalIntensity: 9,
    linguisticMarkers: ['respaldo incondicional', 'cuestionamiento institucional'],
    date: '2026-08-03'
  },
  {
    id: 'c-06',
    text: 'Pensar que millones de pilotos, navegantes y científicos de 200 países guardan un secreto coordinado carece de lógica.',
    platform: 'Reddit',
    author: 'u/LogicaPrimerPaso',
    category: 'Ridiculización',
    emotionalIntensity: 8,
    linguisticMarkers: ['argumento de absurdo', 'cuestionamiento a la escala de la conspiración'],
    date: '2026-08-01'
  },
  {
    id: 'c-07',
    text: '¿Por qué existe el Tratado Antártico entonces? ¿Por qué no se puede alquilar un vuelo y cruzar directamente por el polo?',
    platform: 'TikTok',
    author: 'RutaSur_Investiga',
    category: 'Preguntas',
    emotionalIntensity: 7,
    linguisticMarkers: ['consulta geopolítica', 'desafío a normas de viaje'],
    date: '2026-08-02'
  },
  {
    id: 'c-08',
    text: 'Se realizan vuelos turísticos sobre la Antártida todos los años. Existen aerolíneas comerciales que hacen rutas polares con permisos normales.',
    platform: 'TikTok',
    author: 'Piloto_Real',
    category: 'Acuerdo',
    emotionalIntensity: 5,
    linguisticMarkers: ['corrección de hechos', 'referencia a aviación comercial'],
    date: '2026-08-02'
  },
  {
    id: 'c-09',
    text: 'Otro perfil repitiendo el discurso oficial sin cuestionar nada. Es fácil quedarse con la versión cómoda.',
    platform: 'X (Twitter)',
    author: 'MundoSinVelo',
    category: 'Hostilidad',
    emotionalIntensity: 9,
    linguisticMarkers: ['ataque ad hominem', 'acusación de adoctrinamiento'],
    date: '2026-08-01'
  },
  {
    id: 'c-10',
    text: 'Respeto el interés por investigar, pero la refracción de la luz en capas de aire cálido sobre el agua explica por completo la visibilidad del láser.',
    platform: 'YouTube',
    author: 'OpticaYFisica',
    category: 'Desacuerdo',
    emotionalIntensity: 4,
    linguisticMarkers: ['refutación técnica respetuosa', 'explicación de óptica atmosférica'],
    date: '2026-07-31'
  },
  {
    id: 'c-11',
    text: 'Si la tierra fuera plana, ¿dónde están las fotos del borde? Muestren una sola imagen real del límite.',
    platform: 'Reddit',
    author: 'u/GeometriaSimple',
    category: 'Rechazo',
    emotionalIntensity: 7,
    linguisticMarkers: ['exigencia de evidencia visual', 'desafío directo'],
    date: '2026-07-30'
  },
  {
    id: 'c-12',
    text: 'El borde es la gran barrera de hielo antártica que contiene los océanos. No hay una caída, sino una masa continental congelada.',
    platform: 'Reddit',
    author: 'u/BordePlano2026',
    category: 'Apoyo',
    emotionalIntensity: 8,
    linguisticMarkers: ['afirmación cosmológica', 'definición de la barrera de hielo'],
    date: '2026-07-30'
  }
];

export const MOCK_CONNECTIONS: Connection[] = [
  {
    id: 'conn-01',
    targetTopic: 'Desconfianza institucional y discursos antisistema',
    connectionStrength: 92,
    relationCategory: 'Encuadre epistémico compartido',
    description: 'Elevada coincidencia en la desconfianza hacia organismos de salud pública, procesos de revisión científica y autoridades multilaterales.',
    whyConnected: {
      sharedKeywords: ['Engaño del sistema', 'Sigue el dinero', 'Consenso no verificado', 'Adoctrinamiento', 'Autoridades corruptas'],
      sharedNarratives: ['Desconfianza institucional', 'Minoría consciente'],
      sharedLinguisticPatterns: ['"No quieren que sepas..."', '"Cuestiona todo lo que te enseñaron"'],
      sourceOverlapPercentage: 78,
      audienceOverlapPercentage: 84,
      emotionalSimilarity: 'Alta coincidencia en indignación moral y cinismo institucional.'
    }
  },
  {
    id: 'conn-02',
    targetTopic: 'Escepticismo sobre la NASA y exploración espacial',
    connectionStrength: 96,
    relationCategory: 'Superposición temática directa',
    description: 'Intersección inmediata que cuestiona los alunizajes, las fotografías de exploradores marcianos y la asignación presupuestaria espacial.',
    whyConnected: {
      sharedKeywords: ['Montaje de alunizaje', 'Renders CGI', 'Presupuesto espacial', 'Pantalla verde', 'Iluminación de estudio'],
      sharedNarratives: ['Desconfianza institucional', 'Cartel global coordinado'],
      sharedLinguisticPatterns: ['"Composición en Photoshop"', '"Producción estilo Hollywood"'],
      sourceOverlapPercentage: 89,
      audienceOverlapPercentage: 91,
      emotionalSimilarity: 'Perfil de desconfianza idéntico enfocado en imágenes espaciales oficiales.'
    }
  },
  {
    id: 'conn-03',
    targetTopic: 'Escepticismo sobre consensos médicos y farmacéuticos',
    connectionStrength: 64,
    relationCategory: 'Patrón epistémico entre dominios',
    description: 'Superposición sustancial de audiencia y vocabulario entre el cuestionamiento del consenso astronómico y el consenso epidemiológico.',
    whyConnected: {
      sharedKeywords: ['Intereses corporativos', 'Censura en revisiones', 'Despierta', 'Mecanismo de control'],
      sharedNarratives: ['Minoría consciente', 'Observación personal'],
      sharedLinguisticPatterns: ['"Investiga por tu cuenta"', '"Científicos silenciados"'],
      sourceOverlapPercentage: 54,
      audienceOverlapPercentage: 68,
      emotionalSimilarity: 'Sentimiento compartido de valentía moral ante la presión institucional.'
    }
  },
  {
    id: 'conn-04',
    targetTopic: 'Desconfianza en medios tradicionales y canales alternativos',
    connectionStrength: 82,
    relationCategory: 'Rechazo a canales informativos tradicionales',
    description: 'Rechazo del periodismo tradicional como órgano de propaganda, orientando a los usuarios hacia canales cerrados en Telegram o plataformas alternativas.',
    whyConnected: {
      sharedKeywords: ['Medios masivos mienten', 'Agenda mediática', 'Verdad censurada', 'Creadores independientes'],
      sharedNarratives: ['Desconfianza institucional', 'Minoría consciente'],
      sharedLinguisticPatterns: ['"Periodistas comprados"', '"Apaga la televisión"'],
      sourceOverlapPercentage: 82,
      audienceOverlapPercentage: 79,
      emotionalSimilarity: 'Distanciamiento escéptico y rechazo hacia presentadores tradicionales.'
    }
  },
  {
    id: 'conn-05',
    targetTopic: 'Narrativas sobre cambio climático y políticas globales',
    connectionStrength: 58,
    relationCategory: 'Patrón de desconfianza regulatoria',
    description: 'Coincidencia moderada en argumentos que presentan las políticas ambientales globales como mecanismos de imposición fiscal o control de élites.',
    whyConnected: {
      sharedKeywords: ['Agenda global', 'Estrategia impositiva', 'Manipulación de modelos', 'Datos controlados'],
      sharedNarratives: ['Cartel global coordinado'],
      sharedLinguisticPatterns: ['"Agenda 2030"', '"Ajuste de datos"'],
      sourceOverlapPercentage: 42,
      audienceOverlapPercentage: 56,
      emotionalSimilarity: 'Resistencia a regulaciones supranacionales.'
    }
  }
];

export const MOCK_LIBRARY: LibraryCollection[] = [
  {
    id: 'lib-01',
    title: 'Terraplanismo / Tierra Plana',
    category: 'Temas',
    itemCount: 1420,
    lastUpdated: '05 ago 2026',
    description: 'Investigación activa sobre escepticismo empírico, pruebas de curvatura con láser y discurso crítico hacia la NASA.',
    tags: ['Activo', 'Cosmología', 'Escepticismo'],
    sampleTopicId: 'flat-earth-demo'
  },
  {
    id: 'lib-02',
    title: 'Desinformación con IA y medios sintéticos',
    category: 'Temas',
    itemCount: 890,
    lastUpdated: '29 jul 2026',
    description: 'Investigación sobre audios ultrafalsos (deepfakes) y perfiles sintéticos en campañas políticas en redes sociales.',
    tags: ['IA', 'Deepfakes', 'Elecciones']
  },
  {
    id: 'lib-03',
    title: 'Narrativas del Mundial de Fútbol y orgullo nacional',
    category: 'Colecciones',
    itemCount: 3100,
    lastUpdated: '12 jul 2026',
    description: 'Dinámicas discursivas en torno a triunfos deportivos, euforia colectiva e identidad nacional.',
    tags: ['Deportes', 'Cultura', 'Identidad']
  },
  {
    id: 'lib-04',
    title: 'Cultura de la cancelación y estigmatización digital',
    category: 'Colecciones',
    itemCount: 1250,
    lastUpdated: '18 jun 2026',
    description: 'Escaladas lingüísticas, linchamientos virtuales y dinámicas de indignación en plataformas digitales.',
    tags: ['Sociología', 'Polarización', 'Indignación']
  },
  {
    id: 'lib-05',
    title: 'Debates sobre políticas climáticas 2026',
    category: 'Análisis guardados',
    itemCount: 640,
    lastUpdated: '30 may 2026',
    description: 'Análisis comparativo de activismo ambiental frente a marcos de respuesta industrial.',
    tags: ['Clima', 'Políticas', 'Medios']
  }
];

export const SAMPLE_SEARCH_TOPICS = [
  { name: 'Terraplanismo / Tierra Plana', tag: 'Muestra Principal de Datos', id: 'flat-earth-demo' },
  { name: 'Desinformación con IA', tag: 'Medios Sintéticos', id: 'ai-misinfo' },
  { name: 'Mundial de Fútbol y Orgullo', tag: 'Deporte e Identidad', id: 'world-cup' },
  { name: 'Cultura de la Cancelación', tag: 'Indignación Social', id: 'cancel-culture' },
  { name: 'Discursos sobre Cambio Climático', tag: 'Debate Ambiental', id: 'climate-change' }
];
