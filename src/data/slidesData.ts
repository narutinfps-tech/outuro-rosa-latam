export interface SlideInfo {
  id: number;
  title: string;
  subtitle: string;
  badge: string;
  category: 'intro' | 'dados' | 'sinais' | 'exames' | 'prevencao' | 'encerramento';
  highlights: string[];
  statNumber?: string;
  statLabel?: string;
  keyTakeaway: string;
  accentColor?: string;
}

export const SLIDES_DATA: SlideInfo[] = [
  {
    id: 1,
    title: "Octubre Rosa: Concientización y Cuidado",
    subtitle: "Una conversación necesaria sobre prevención, diagnóstico oportuno y vida.",
    badge: "Diapositiva 01 · Apertura",
    category: "intro",
    highlights: [
      "Presentación lista para empresas, escuelas e instituciones",
      "Lenguaje cálido, claro y fundamentado en pautas de salud",
      "Formato 16:9 de alto impacto visual"
    ],
    keyTakeaway: "Cuidar de ti y de quienes amas comienza con la información.",
    accentColor: "from-rose-500 to-pink-600"
  },
  {
    id: 2,
    title: "Bienvenida y Propósito de Este Encuentro",
    subtitle: "¿Por qué estamos reunidos hoy y cuál es el objetivo de esta charla?",
    badge: "Diapositiva 02 · Propósito",
    category: "intro",
    highlights: [
      "Derribar miedos y tabúes sobre el cáncer de mama",
      "Fomentar el diálogo abierto entre colegas, amigos y familiares",
      "Transformar la concientización en acciones prácticas y chequeos al día"
    ],
    keyTakeaway: "La información correcta salva vidas y disipa el temor a lo desconocido.",
    accentColor: "from-pink-500 to-rose-600"
  },
  {
    id: 3,
    title: "El Origen del Movimiento Octubre Rosa",
    subtitle: "Cómo una carrera en Nueva York inspiró al mundo entero.",
    badge: "Diapositiva 03 · Historia",
    category: "intro",
    highlights: [
      "Iniciado en los años 90 por la Fundación Susan G. Komen",
      "El lazo rosa como símbolo global de solidaridad y esperanza",
      "Expansión mundial e iluminación de monumentos históricos"
    ],
    keyTakeaway: "Un símbolo internacional que nos recuerda la urgencia del autocuidado diario.",
    accentColor: "from-rose-600 to-pink-500"
  },
  {
    id: 4,
    title: "El Cáncer de Mama en Cifras",
    subtitle: "El panorama global y la importancia de prestar atención a las estadísticas.",
    badge: "Diapositiva 04 · Datos Reales",
    category: "dados",
    highlights: [
      "Tipo de cáncer más frecuente entre las mujeres a nivel mundial",
      "Millones de nuevos diagnósticos detectados cada año",
      "Mayor incidencia a partir de los 50 años, exigiendo vigilancia regular"
    ],
    statNumber: "2.3M+",
    statLabel: "nuevos casos diagnosticados al año en el mundo (OMS)",
    keyTakeaway: "No son solo números fríos: son vidas que pueden salvarse a tiempo.",
    accentColor: "from-pink-600 to-rose-700"
  },
  {
    id: 5,
    title: "¿Qué Es el Cáncer de Mama?",
    subtitle: "Comprendiendo el desarrollo celular de forma sencilla y clara.",
    badge: "Diapositiva 05 · Biología",
    category: "dados",
    highlights: [
      "Multiplicación descontrolada de células anómalas en la mama",
      "Formación de nódulos o alteraciones estructurales en el tejido",
      "Diversos subtipos que requieren abordajes terapéuticos personalizados"
    ],
    keyTakeaway: "Identificarlo en su etapa inicial es la clave del éxito del tratamiento.",
    accentColor: "from-rose-500 to-pink-500"
  },
  {
    id: 6,
    title: "Factores de Riesgo Asociados",
    subtitle: "¿Qué aumenta la probabilidad y cómo actuar de manera preventiva?",
    badge: "Diapositiva 06 · Factores",
    category: "dados",
    highlights: [
      "Edad (más común a partir de los 40-50 años)",
      "Historial reproductivo (menarquía temprana o menopausia tardía)",
      "Densidad mamaria y predisposición genética (genes BRCA1 y BRCA2)"
    ],
    keyTakeaway: "Tener factores de riesgo no significa enfermar, pero exige un control atento.",
    accentColor: "from-pink-600 to-rose-600"
  },
  {
    id: 7,
    title: "Factores Modificables vs No Modificables",
    subtitle: "Lo que está bajo nuestro control diario y lo que debemos vigilar.",
    badge: "Diapositiva 07 · Control",
    category: "prevencao",
    highlights: [
      "No modificables: edad, genética hereditaria y antecedentes familiares",
      "Modificables: alimentación balanceada, sedentarismo, sobrepeso y alcohol",
      "Cerca del 30% de los casos pueden prevenirse con hábitos saludables"
    ],
    statNumber: "Hasta 30%",
    statLabel: "de los casos pueden prevenirse con estilo de vida saludable",
    keyTakeaway: "Nuestras decisiones diarias actúan directamente como escudo protector.",
    accentColor: "from-rose-600 to-pink-600"
  },
  {
    id: 8,
    title: "Señales de Alerta que Merecen Atención",
    subtitle: "Cambios físicos en la mama que deben ser valorados por un médico.",
    badge: "Diapositiva 08 · Señales",
    category: "sinais",
    highlights: [
      "Bulto o masa palpable (generalmente indoloro) en mama o axila",
      "Piel enrojecida, con hoyuelos o aspecto de piel de naranja",
      "Cambios en el pezón (hundimiento, descamación o secreción espontánea)"
    ],
    keyTakeaway: "Cualquier cambio persistente debe consultarse sin caer en el pánico.",
    accentColor: "from-pink-600 to-rose-600"
  },
  {
    id: 9,
    title: "El Autocuidado: Conociendo Tu Cuerpo",
    subtitle: "La importancia de la autoexploración en la rutina cotidiana.",
    badge: "Diapositiva 09 · Autocuidado",
    category: "sinais",
    highlights: [
      "No sustituye la mamografía, pero genera conexión y conocimiento propio",
      "Realizar inspección visual y palpación al ducharse o vestirse",
      "¿Detectaste algo diferente? Acude de inmediato al centro de salud"
    ],
    keyTakeaway: "Quien mejor conoce su cuerpo es quien nota primero los pequeños cambios.",
    accentColor: "from-rose-500 to-pink-600"
  },
  {
    id: 10,
    title: "Mamografía: El Estudio Estándar de Oro",
    subtitle: "La tecnología capaz de detectar lesiones milimétricas antes de ser palpables.",
    badge: "Diapositiva 10 · Estudios",
    category: "exames",
    highlights: [
      "Identifica microcalcificaciones y tumores en fase subclínica temprana",
      "Procedimiento rápido, seguro y realizado por personal capacitado",
      "Principal herramienta recomendada por organismos internacionales de salud"
    ],
    keyTakeaway: "La mamografía revela lo que los ojos y las manos aún no pueden percibir.",
    accentColor: "from-pink-500 to-rose-600"
  },
  {
    id: 11,
    title: "¿Cuándo y Con Qué Frecuencia Realizarla?",
    subtitle: "Recomendaciones orientativas según cada rango de edad.",
    badge: "Diapositiva 11 · Periodicidad",
    category: "exames",
    highlights: [
      "Mujeres a partir de los 40 o 50 años: mamografía periódica cada 1 a 2 años",
      "Antecedentes familiares de primer grado: inicio a edades más tempranas",
      "Consulta con tu ginecólogo o médico de cabecera tu calendario personalizado"
    ],
    keyTakeaway: "Consulta con tu médico especialista para definir tu plan de detección.",
    accentColor: "from-rose-600 to-pink-500"
  },
  {
    id: 12,
    title: "Estudios Complementarios: Ecografía y Resonancia",
    subtitle: "Cuándo se indican otros métodos de diagnóstico por imágenes.",
    badge: "Diapositiva 12 · Diagnóstico",
    category: "exames",
    highlights: [
      "Ecografía mamaria: ideal para mamas densas y diferenciación de quistes",
      "Resonancia magnética: indicada para alto riesgo genético y seguimiento",
      "Biopsia: el procedimiento concluyente para determinar benignidad o malignidad"
    ],
    keyTakeaway: "Los estudios se complementan para ofrecer un diagnóstico certero y seguro.",
    accentColor: "from-pink-600 to-rose-600"
  },
  {
    id: 13,
    title: "Mitos y Realidades Desmentidos",
    subtitle: "Separando falsas creencias de la evidencia científica demostrada.",
    badge: "Diapositiva 13 · Mitos y Realidades",
    category: "dados",
    highlights: [
      "Mito: Los desodorantes antitranspirantes o sostenes con varilla causan cáncer (Falso)",
      "Realidad: Los hombres también pueden desarrollar cáncer de mama (~1% de los casos)",
      "Mito: Todo bulto o nódulo en la mama es maligno (Cerca del 80% son benignos)"
    ],
    keyTakeaway: "Desmentir mitos aporta tranquilidad y anima a realizarse chequeos reales.",
    accentColor: "from-rose-500 to-pink-500"
  },
  {
    id: 14,
    title: "Diagnóstico Temprano: Hasta 95% de Curación",
    subtitle: "El impacto decisivo del factor tiempo en el tratamiento y pronóstico.",
    badge: "Diapositiva 14 · Diagnóstico Oportuno",
    category: "dados",
    highlights: [
      "Tratamientos mucho menos invasivos y con recuperación más rápida",
      "Menor necesidad de cirugías radicales o terapias agresivas",
      "Preservación de la calidad de vida y bienestar emocional"
    ],
    statNumber: "Hasta 95%",
    statLabel: "de probabilidad de curación con detección a tiempo",
    keyTakeaway: "El tiempo es salud: cuanto antes se detecta, mayores son las posibilidades de vida.",
    accentColor: "from-rose-600 to-pink-600"
  },
  {
    id: 15,
    title: "Hábitos de Prevención y Cuidado Diario",
    subtitle: "Prácticas saludables que reducen el riesgo de múltiples enfermedades crónicas.",
    badge: "Diapositiva 15 · Hábitos",
    category: "prevencao",
    highlights: [
      "Realizar actividad física regular (mínimo 150 minutos semanales)",
      "Mantener un peso corporal adecuado a lo largo de la vida",
      "Evitar el tabaquismo y moderar estrictamente el consumo de alcohol"
    ],
    keyTakeaway: "La prevención primaria es la mejor inversión de autocuidado a largo plazo.",
    accentColor: "from-pink-600 to-rose-600"
  },
  {
    id: 16,
    title: "Alimentación Saludable y Lactancia Materna",
    subtitle: "Cómo la nutrición y la lactancia protegen el organismo femenino.",
    badge: "Diapositiva 16 · Nutrición",
    category: "prevencao",
    highlights: [
      "Dieta rica en frutas, verduras, legumbres y cereales integrales",
      "Reducción de productos ultraprocesados, embutidos y azúcares refinados",
      "Amamantar el mayor tiempo posible promueve la renovación protectora del tejido"
    ],
    keyTakeaway: "La comida real es combustible y medicina preventiva para el organismo.",
    accentColor: "from-rose-500 to-pink-500"
  },
  {
    id: 17,
    title: "Salud Emocional y Manejo del Estrés",
    subtitle: "El equilibrio psicológico como pilar fundamental del sistema inmune.",
    badge: "Diapositiva 17 · Bienestar",
    category: "prevencao",
    highlights: [
      "El estrés crónico afecta la respuesta inflamatoria del cuerpo",
      "La importancia del sueño reparador y pausas conscientes en la jornada",
      "Cultivar redes de apoyo afectivo, espacios de recreación y diálogo"
    ],
    keyTakeaway: "Cuidar la mente es parte inseparable de cuidar la salud física.",
    accentColor: "from-pink-500 to-rose-600"
  },
  {
    id: 18,
    title: "¿Cómo Apoyar a Quien Recibe un Diagnóstico?",
    subtitle: "Empatía práctica, escucha activa y presencia en el proceso.",
    badge: "Diapositiva 18 · Acompañamiento",
    category: "encerramento",
    highlights: [
      "Evitar frases como 'tienes que ser fuerte' o comparaciones innecesarias",
      "Brindar ayuda práctica: traslados, apoyo en tareas cotidianas, compañía",
      "Estar presente para escuchar sin juzgar los momentos de vulnerabilidad"
    ],
    keyTakeaway: "El afecto, el respeto y la escucha activa fortalecen la recuperación emocional.",
    accentColor: "from-rose-600 to-pink-500"
  },
  {
    id: 19,
    title: "Derechos de la Paciente y Acceso a la Salud",
    subtitle: "Garantías legales para la atención ágil y oportuna.",
    badge: "Diapositiva 19 · Derechos",
    category: "dados",
    highlights: [
      "Plazos prioritarios para inicio de tratamiento oncológico",
      "Acceso a estudios complementarios y segunda opinión médica",
      "Derecho a reconstrucción mamaria y acompañamiento integral"
    ],
    keyTakeaway: "Conocer los derechos en salud es indispensable para exigir una atención digna y rápida.",
    accentColor: "from-pink-600 to-rose-600"
  },
  {
    id: 20,
    title: "Recomendaciones Prácticas para Tu Rutina",
    subtitle: "Checklist simplificado para poner tu salud en primer lugar.",
    badge: "Diapositiva 20 · Pautas Clave",
    category: "encerramento",
    highlights: [
      "Agenda este mes tu chequeo médico o ginecológico anual",
      "Verifica que tus familiares y amigas mayores de 40 años tengan sus estudios al día",
      "Comparte información confiable en tu entorno laboral, escolar y familiar"
    ],
    keyTakeaway: "Una conversación sincera hoy puede salvar la vida de alguien mañana.",
    accentColor: "from-rose-500 to-pink-600"
  },
  {
    id: 21,
    title: "Qué Llevarte de Esta Charla",
    subtitle: "Los mensajes esenciales que deben permanecer contigo.",
    badge: "Diapositiva 21 · Síntesis",
    category: "encerramento",
    highlights: [
      "La prevención es un hábito diario (alimentación, movimiento, bienestar)",
      "El diagnóstico oportuno cambia el destino: hasta 95% de curación",
      "La empatía y el acompañamiento salvan tanto como la medicina"
    ],
    keyTakeaway: "No postergues tu salud. El mejor momento para cuidarte es ahora.",
    accentColor: "from-pink-600 to-rose-600"
  },
  {
    id: 22,
    title: "Canales de Apoyo y Dónde Buscar Ayuda",
    subtitle: "Líneas de orientación y organismos públicos para consultas y atención.",
    badge: "Diapositiva 22 · Contactos Útiles",
    category: "encerramento",
    highlights: [
      "Líneas de orientación médica y centros de atención comunitaria",
      "Organizaciones oficiales contra el cáncer y programas de salud de la mujer",
      "Asociaciones civiles y redes de apoyo a pacientes oncológicas"
    ],
    keyTakeaway: "Nunca estás sola en este camino. Pide ayuda siempre que lo necesites.",
    accentColor: "from-rose-600 to-pink-600"
  },
  {
    id: 23,
    title: "Cuidar de Ti Es un Acto de Amor y Valentía",
    subtitle: "Agradecemos la atención de todos. ¡Multipliquemos este mensaje!",
    badge: "Diapositiva 23 · Cierre",
    category: "encerramento",
    highlights: [
      "Lleva el mensaje de concientización a tu equipo y a tu familia",
      "Charla completada con claridad, cercanía y compromiso con la vida",
      "Presentación lista para proyectores, pantallas corporativas y eventos"
    ],
    keyTakeaway: "Octubre es Rosa, pero el cuidado y la prevención son de todo el año.",
    accentColor: "from-rose-500 to-pink-500"
  }
];

export const HIGHLIGHT_SLIDES = [
  {
    index: 4, // El cáncer de mama en cifras
    title: "El cáncer de mama en cifras",
    tag: "Estadísticas y Datos",
    summary: "Panorama epidemiológico organizado en infografía para proyector.",
    badge: "Diapositiva 04"
  },
  {
    index: 8, // Señales de alerta
    title: "Señales que merecen atención",
    tag: "Autoexploración",
    summary: "Explicaciones didácticas de las señales de alerta y cambios corporales.",
    badge: "Diapositiva 08"
  },
  {
    index: 6, // Factores de riesgo
    title: "Factores de riesgo asociados",
    tag: "Genética & Hábitos",
    summary: "Diferenciación clara entre predisposición genética y factores modificables.",
    badge: "Diapositiva 06"
  },
  {
    index: 10, // Mamografía
    title: "Mamografía",
    tag: "Detección Oportuna",
    summary: "Explicación del estudio estándar de oro y frecuencia sugerida.",
    badge: "Diapositiva 10"
  },
  {
    index: 13, // Mitos y realidades
    title: "Mitos y realidades",
    tag: "Desmitificación",
    summary: "Respuestas a dudas comunes del público con respaldo científico.",
    badge: "Diapositiva 13"
  },
  {
    index: 15, // Hábitos de cuidado
    title: "Hábitos de prevención diaria",
    tag: "Prevención Práctica",
    summary: "Hasta un 30% de casos prevenibles con decisiones saludables cotidianas.",
    badge: "Diapositiva 15"
  },
  {
    index: 14, // Diagnóstico temprano
    title: "Diagnóstico temprano",
    tag: "Hasta 95% de Curación",
    summary: "Gráfico del impacto vital de detectar la enfermedad en etapas iniciales.",
    badge: "Diapositiva 14"
  },
  {
    index: 21, // Qué llevarte de esta charla
    title: "Qué llevarte de esta charla",
    tag: "Conclusión & Acción",
    summary: "Resumen ejecutivo en lecciones prácticas para recordar y aplicar.",
    badge: "Diapositiva 21"
  }
];
