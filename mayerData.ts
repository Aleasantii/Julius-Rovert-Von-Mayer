/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { TimelineEvent, Publication, ScientificPillar, QuizQuestion } from '../types';

export const TIMELINE_EVENTS: TimelineEvent[] = [
  {
    year: 1814,
    title: {
      es: 'Nacimiento en Heilbronn',
      en: 'Birth in Heilbronn',
    },
    category: 'juventud',
    location: 'Heilbronn, Reino de Wurtemberg',
    summary: {
      es: 'Nace el 25 de noviembre de 1814, hijo del boticario Christian Jakob Mayer. Desde niño muestra fascinación por los mecanismos y engranajes.',
      en: 'Born on November 25, 1814, son of apothecary Christian Jakob Mayer. As a boy, he showed fascination with mechanisms and gears.',
    },
    details: {
      es: 'Creció en una familia de farmacéuticos y comerciantes. Su primera educación combinó ciencias naturales prácticas en el taller de su padre con lecturas humanísticas en el Eberhard-Ludwigs-Gymnasium.',
      en: 'Raised in a family of apothecaries and merchants. His early education merged practical natural sciences in his father’s workshop with classical studies.',
    },
  },
  {
    year: 1838,
    title: {
      es: 'Doctorado en Medicina en Tubinga',
      en: 'Doctorate in Medicine at Tübingen',
    },
    category: 'juventud',
    location: 'Universidad de Tubinga',
    summary: {
      es: 'Completa sus estudios médicos y defiende su tesis doctoral sobre la santonina. Sufre un breve arresto por pertenecer a una fraternidad estudiantil prohibida.',
      en: 'Completes medical training and defends his doctoral dissertation on santonin. Experiences brief detention for participating in a banned student fraternity.',
    },
    details: {
      es: 'Su tesis "De santonino" demostró su meticulosidad analítica. Su rebeldía juvenil y su estancia en prisión preventiva forjaron su carácter inquebrantable frente al dogma académico.',
      en: 'His dissertation demonstrated analytical rigor. His youthful rebellious streak and brief lockup shaped his defiance against rigid academic orthodoxy.',
    },
  },
  {
    year: 1840,
    title: {
      es: 'La Travesía en la Fragata Java y la Gran Epifanía',
      en: 'The Java Voyage & The Great Epiphany',
    },
    category: 'expedicion',
    location: 'Batavia (actual Yakarta), Indias Orientales Neerlandesas',
    summary: {
      es: 'Se embarca como médico de a bordo del velero "Java". Al sangrar marineros enfermos en los trópicos, nota con asombro que la sangre venosa es de un rojo brillante inusual.',
      en: 'Enlists as ship’s physician aboard the vessel "Java". While venesecting sailors in the tropics, he is stunned by the unusually bright, scarlet hue of venous blood.',
    },
    details: {
      es: 'Mayer razonó: en un clima cálido, el cuerpo requiere quemar menos carbono y alimento para conservar sus 37°C corporales. Al consumir menos oxígeno los tejidos, la sangre venosa regresa oxigenada. Conectó la respiración, el calor biológico y el trabajo muscular como transformaciones de una misma fuerza cósmica.',
      en: 'Mayer deduced: under tropical heat, the body burns far less food to maintain core body temperature. With tissues taking less oxygen, venous blood stays oxygen-rich. He unified respiration, animal heat, and muscular work as transformations of one universal force.',
    },
    quote: 'La sangre extraída de la vena braquial en Batavia poseía un color rojo tan vivo que al principio dudé si no había pinchado una arteria.',
  },
  {
    year: 1841,
    title: {
      es: 'El Manuscrito Rechazado por Poggendorff',
      en: 'The Manuscript Rejected by Poggendorff',
    },
    category: 'descubrimiento',
    location: 'Heilbronn / Berlín',
    summary: {
      es: 'Envía su primer artículo teórico a los prestigiosos "Annalen der Physik". El editor J. C. Poggendorff ni siquiera responde ni publica el texto.',
      en: 'Submits his first theoretical paper to "Annalen der Physik". Editor J. C. Poggendorff neither replies nor publishes the manuscript.',
    },
    details: {
      es: 'Titulado "Sobre la determinación cuantitativa y cualitativa de las fuerzas", el texto contenía errores de terminología física clásica pero una intuición colosal. El rechazo silencioso de Poggendorff dolió profundamente a Mayer pero lo impulsó a pulir su formulación matemática.',
      en: 'Titled "On the Quantitative and Qualitative Determination of Forces", it lacked standard physics jargon but contained visionary insight. The rejection pushed Mayer to master mechanical physics.',
    },
  },
  {
    year: 1842,
    title: {
      es: 'Publicación Histórica en los Anales de Liebig',
      en: 'Historic Landmark in Liebig’s Annalen',
    },
    category: 'descubrimiento',
    location: 'Giessen / Heilbronn',
    summary: {
      es: 'Justus von Liebig acepta su memoria "Observaciones sobre las fuerzas de la naturaleza inanimada", consagrando por primera vez el principio de conservación de la energía.',
      en: 'Justus von Liebig publishes his paper "Remarks on the Forces of Inorganic Nature", formulating for the first time the principle of conservation of energy.',
    },
    details: {
      es: 'Mayer postula el axioma filosófico "Causa aequat effectum" (La causa iguala al efecto). Calcula numéricamente el equivalente mecánico del calor a partir de la dilatación de los gases: 1 caloría equivale a 365 kilogramómetros de trabajo.',
      en: 'Mayer applies the axiom "Causa aequat effectum" (Cause equals effect). He computes the mechanical equivalent of heat from gas expansion: 1 calorie equals 365 kilogram-meters of work.',
    },
    quote: 'Las fuerzas son causas: por tanto, a ellas les es enteramente aplicable el axioma: causa aequat effectum... La energía no se crea de la nada ni se aniquila.',
  },
  {
    year: 1845,
    title: {
      es: 'El Movimiento Orgánico y la Fotosíntesis',
      en: 'Organic Motion & The Solar Origin of Life',
    },
    category: 'descubrimiento',
    location: 'Heilbronn',
    summary: {
      es: 'Publica a sus expensas su obra cumbre sobre biología termodinámica: demuestra que las plantas fijan la energía de la luz solar en enlaces químicos.',
      en: 'Self-publishes his masterpiece on thermodynamic biology: proving that green plants capture sunlight energy and store it in chemical bonds.',
    },
    details: {
      es: 'En "Die organische Bewegung", Mayer se adelanta décadas a la bioquímica moderna: "La planta absorbe una forma de fuerza, la luz solar, y produce otra fuerza: la unión química". Establece que toda la energía de la biosfera terrestre proviene del Sol.',
      en: 'In "Die organische Bewegung", Mayer anticipated modern biochemistry by decades: "The plant takes in one form of force, light, and creates another: chemical union". He proved all terrestrial biological energy derives from the Sun.',
    },
  },
  {
    year: 1848,
    title: {
      es: 'Dinámica Celeste: El Calor del Sol',
      en: 'Celestial Dynamics: The Source of Solar Heat',
    },
    category: 'descubrimiento',
    location: 'Heilbronn',
    summary: {
      es: 'Propone en "Beiträge zur Dynamik des Himmels" que la inmensa radiación térmica del Sol no es combustión ordinaria, sino el impacto gravitacional de meteoritos.',
      en: 'Proposes in "Beiträge zur Dynamik des Himmels" that solar thermal output cannot be standard combustion, proposing meteoric gravitational impacts.',
    },
    details: {
      es: 'Calculó que si el Sol fuera un bloque macizo de carbón ardiendo en oxígeno, se extinguiría en menos de 5.000 años. Su teoría del impacto meteórico fue el primer modelo termodinámico cosmológico de la historia.',
      en: 'He calculated that a solid coal Sun would burn out in under 5,000 years. His meteoric accretion hypothesis was history’s first thermodynamic model of astrophysics.',
    },
  },
  {
    year: 1850,
    title: {
      es: 'Colapso, Tragedia y el Salto al Vacío',
      en: 'Collapse, Tragedy & The Leap',
    },
    category: 'crisis',
    location: 'Heilbronn / Winnenden',
    summary: {
      es: 'Acosado por el ninguneo de la física oficial, la muerte de tres de sus hijos y disputas de prioridad con James Joule, sufre una severa depresión y salta desde un tercer piso.',
      en: 'Plagued by official dismissals, the tragic deaths of three young children, and priority battles with James Joule, he suffers a nervous breakdown and leaps from a third-story window.',
    },
    details: {
      es: 'Sobrevivió con graves lesiones físicas permanentes. Entre 1852 y 1854 fue internado en el asilo psiquiátrico de Winnenden y en Kennenburg bajo tratamientos crueles de la época (camisas de fuerza y duchas de agua gélida). Su voz quedó temporalmente silenciada.',
      en: 'He survived with lifelong physical infirmities. Between 1852 and 1854, he was confined to psychiatric asylums under harsh Victorian regimens. His voice was temporarily silenced.',
    },
  },
  {
    year: 1862,
    title: {
      es: 'La Reivindicación de John Tyndall',
      en: 'John Tyndall’s International Vindication',
    },
    category: 'reconocimiento',
    location: 'Londres, Royal Institution',
    summary: {
      es: 'El célebre físico británico John Tyndall pronuncia una histórica conferencia en la Royal Institution defendiendo la prioridad de Mayer sobre Joule.',
      en: 'Eminent British physicist John Tyndall delivers a landmark lecture at the Royal Institution championing Mayer’s chronological priority over Joule.',
    },
    details: {
      es: 'Tyndall tradujo los escritos de Mayer al inglés y declaró públicamente: "Ningún científico ha mostrado mayor penetración mental ni formulado generalizaciones más audaces y correctas". Clausius y Helmholtz se unieron a la reivindicación.',
      en: 'Tyndall translated Mayer’s papers into English, asserting: "No scientific man has shown greater mental penetration or made bolder and truer generalizations". Clausius and Helmholtz joined the defense.',
    },
  },
  {
    year: 1871,
    title: {
      es: 'La Medalla Copley y Elevación a la Nobleza',
      en: 'The Copley Medal & Elevation to Nobility',
    },
    category: 'reconocimiento',
    location: 'Londres / Stuttgart / Heilbronn',
    summary: {
      es: 'La Royal Society le concede su máximo honor, la prestigiosa Medalla Copley. El Rey de Wurtemberg le otorga la Orden de la Corona, concediéndole el título nobiliario "von Mayer".',
      en: 'The Royal Society awards him its premier accolade, the Copley Medal. The King of Württemberg confers the Order of the Crown, elevating him to the nobility as "von Mayer".',
    },
    details: {
      es: 'Un honor que compartieron Charles Darwin, Michael Faraday y Louis Pasteur. Los últimos años de Mayer en Heilbronn transcurrieron con paz, dignidad y la veneración de la comunidad científica internacional.',
      en: 'An honor shared with Charles Darwin, Michael Faraday, and Louis Pasteur. Mayer’s final years in Heilbronn were spent in peace, dignity, and global scientific reverence.',
    },
  },
  {
    year: 1878,
    title: {
      es: 'Fallecimiento y Legado Inmortal',
      en: 'Passing & Immortal Scientific Legacy',
    },
    category: 'reconocimiento',
    location: 'Heilbronn',
    summary: {
      es: 'Fallece el 20 de marzo de 1878 a los 63 años víctima de un cáncer. Su monumento domina hoy la plaza principal de su ciudad natal, Heilbronn.',
      en: 'Passes away on March 20, 1878, aged 63. Today, his memorial monument stands proudly in the central square of his native city, Heilbronn.',
    },
    details: {
      es: 'Su principio es hoy la piedra angular de toda la física moderna, la ingeniería aeroespacial, la química cuántica y la ecología planetaria. El muchacho médico de provincias transformó para siempre nuestra visión del cosmos.',
      en: 'His principle remains the bedrock of modern physics, aerospace engineering, quantum chemistry, and ecosystem energetics. A provincial physician who reshaped the universe.',
    },
  },
];

export const PUBLICATIONS: Publication[] = [
  {
    year: 1841,
    title: 'Sobre la determinación cuantitativa y cualitativa de las fuerzas',
    originalGerman: 'Über die quantitative und qualitative Bestimmung der Kräfte',
    publisher: 'Enviado a Annalen der Physik (Rechazado por J. C. Poggendorff)',
    description: {
      es: 'El primer borrador donde Mayer concibe que las fuerzas cinéticas, químicas y térmicas son indestructibles. Aunque adolecía de imprecisiones matemáticas formales, contenía la semilla revolucionaria.',
      en: 'Mayer’s initial draft proposing that kinetic, chemical, and thermal forces are indestructible. Despite formal mathematical roughness, it bore the revolutionary seed.',
    },
    significance: {
      es: 'Constituye el primer documento escrito en la historia de la ciencia que postula explícitamente la conservación universal de la energía.',
      en: 'Constitutes the earliest written document in scientific history explicitly postulating the universal conservation of energy.',
    },
    keyExcerpt: {
      german: 'Kräfte sind Ursachen: mithin findet auf dieselben der Grundsatz Anwendung: causa aequat effectum. Hat eine Ursache c die Wirkung e, so ist c = e; ist wiederum e die Ursache einer anderen Wirkung f, so ist e = f u. s. w., c = e = f... = c.',
      translation: {
        es: 'Las fuerzas son causas; por tanto, se les aplica el principio: causa aequat effectum. Si una causa c produce un efecto e, entonces c = e; si e a su vez es causa de otro efecto f, entonces e = f y por consiguiente c = f.',
        en: 'Forces are causes: hence the axiom fully applies to them: causa aequat effectum. If a cause c has the effect e, then c = e; if e in turn is the cause of another effect f, then e = f and thus c = f.',
      },
    },
  },
  {
    year: 1842,
    title: 'Observaciones sobre las fuerzas de la naturaleza inanimada',
    originalGerman: 'Bemerkungen über die Kräfte der unbelebten Natur',
    publisher: 'Annalen der Chemie und Pharmacie, Band 42 (Justus von Liebig)',
    description: {
      es: 'El artículo fundacional de la Primera Ley de la Termodinámica. Mayer calcula formalmente que una cantidad de calor capaz de elevar 1 kg de agua en 1°C corresponde a la caída de 1 kg desde una altura de 365 metros.',
      en: 'The founding treatise of the First Law of Thermodynamics. Mayer calculates that heat required to raise 1 kg of water by 1°C equals dropping 1 kg through 365 meters.',
    },
    significance: {
      es: 'Primera deducción cuantitativa del equivalente mecánico del calor ($J$), publicada un año antes de los experimentos de James Prescott Joule de 1843.',
      en: 'First quantitative deduction of the mechanical equivalent of heat ($J$), published a full year ahead of James Prescott Joule’s 1843 experiments.',
    },
    keyExcerpt: {
      german: 'Die Erwärmung der comprimirten Luft ist nun = 1°, und das Sinken der Quecksilbersäule... giebt für das Sinken eines Gewichtes von 1 Kilogramm um die Höhe von 365 Metern das mechanische Aequivalent für die Erwärmung von 1 Kilogramm Wasser um 1°.',
      translation: {
        es: 'El calentamiento del aire comprimido da... para la caída de un peso de 1 kilogramo desde una altura de 365 metros el equivalente mecánico para calentar 1 kilogramo de agua en 1°C.',
        en: 'The heating of compressed air yields... for the descent of a 1 kilogram weight through a height of 365 meters the mechanical equivalent for heating 1 kilogram of water by 1°C.',
      },
    },
  },
  {
    year: 1845,
    title: 'El movimiento orgánico en su relación con el metabolismo',
    originalGerman: 'Die organische Bewegung in ihrem Zusammenhange mit dem Stoffwechsel',
    publisher: 'Edición privada del autor (C. Drechsler, Heilbronn)',
    description: {
      es: 'Tratado monumental que une la física, la química y la biología celular. Mayer explica el origen solar de la energía en la Tierra y cómo las plantas realizan la fotosíntesis transformando luz en energía química.',
      en: 'Monumental monograph unifying physics, chemistry, and cellular biology. Mayer outlines the solar origin of Earth’s energy and how plants harness light via photosynthesis.',
    },
    significance: {
      es: 'Destruyó la doctrina medieval del "vitalismo" demostrando que los seres vivos están sujetos a las mismas leyes de balance termodinámico que las máquinas.',
      en: 'Dismantled medieval vitalism by proving living organisms obey identical thermodynamic balance laws as steam engines.',
    },
    keyExcerpt: {
      german: 'Die Pflanzen nehmen eine Kraft, das Licht, auf, und bringen eine Kraft hervor: die chemische Differenz.',
      translation: {
        es: 'Las plantas absorben una fuerza, la luz, y generan otra fuerza: la diferencia química.',
        en: 'Plants absorb one force, light, and produce another force: chemical difference.',
      },
    },
  },
  {
    year: 1848,
    title: 'Contribuciones a la dinámica celeste',
    originalGerman: 'Beiträge zur Dynamik des Himmels',
    publisher: 'Edición privada (Heilbronn)',
    description: {
      es: 'Aplica el principio de conservación de la energía a escala astrofísica. Propone que la energía radiante del Sol se repone mediante el frenado e impacto gravitatorio continuo de meteoros y polvo estelar.',
      en: 'Applies conservation of energy to cosmic scales. Argues solar radiation is replenished by gravitational infall and collision of meteoric matter.',
    },
    significance: {
      es: 'Inicia el campo de la astrofísica termodinámica al calcular por primera vez la tasa de consumo energético del Sol.',
      en: 'Pioneered thermodynamic astrophysics by computing for the first time the required energy expenditure rate of the Sun.',
    },
    keyExcerpt: {
      german: 'Die Sonne kann nicht durch einfachen chemischen Verbrennungsprozess ihre gewaltige Wärme über Jahrtausende erhalten haben.',
      translation: {
        es: 'El Sol no puede haber mantenido su prodigioso calor a lo largo de milenios mediante un simple proceso de combustión química.',
        en: 'The Sun cannot have sustained its immense heat across millennia through ordinary chemical combustion alone.',
      },
    },
  },
];

export const SCIENTIFIC_PILLARS: ScientificPillar[] = [
  {
    id: 'first-law',
    number: '01',
    title: {
      es: 'Principio de Conservación de la Energía',
      en: 'Principle of Conservation of Energy',
    },
    subtitle: {
      es: 'La Primera Ley de la Termodinámica (1842)',
      en: 'The First Law of Thermodynamics (1842)',
    },
    concept: {
      es: 'La energía total de un sistema cerrado permanece constante con el tiempo. La energía no se crea de la nada ni se destruye; únicamente se transforma de una manifestación a otra (cinética, potencial, térmica, química, electromagnética).',
      en: 'The total energy of an isolated system remains constant over time. Energy cannot be created or destroyed; it merely transforms among manifestations (kinetic, potential, thermal, chemical, radiant).',
    },
    mayerDeduction: {
      es: 'A través de la máxima filosófica "Causa aequat effectum", Mayer argumentó que si una causa deja de existir al producir un efecto, la magnitud cualitativa de esa fuerza original debe conservarse intacta en la forma del efecto resultante.',
      en: 'Using the axiom "Causa aequat effectum", Mayer reasoned that if a cause ceases to exist upon producing an effect, the quantitative reality of that original force must persist entirely within the resulting phenomenon.',
    },
    modernImpact: {
      es: 'Es el principio rector universal de toda la física: desde la relatividad de Einstein ($E = mc^2$) hasta la cosmología del Big Bang y el diseño de reactores nucleares y celdas solares.',
      en: 'The bedrock principle of all physics: from Einsteinian mass-energy equivalence ($E = mc^2$) to Big Bang cosmology, nuclear reactors, and quantum electronics.',
    },
    formula: 'ΔU = Q - W  \\quad \\text{ó} \\quad \\sum E_{\\text{inicial}} = \\sum E_{\\text{final}}',
  },
  {
    id: 'mechanical-equivalent',
    number: '02',
    title: {
      es: 'El Equivalente Mecánico del Calor',
      en: 'The Mechanical Equivalent of Heat',
    },
    subtitle: {
      es: 'La Relación Cuantitativa Calor-Trabajo (1842)',
      en: 'Quantitative Work-to-Heat Equivalence (1842)',
    },
    concept: {
      es: 'El calor no es un fluido material imponderable ("calórico"), sino una forma de energía mecánica microscópica. Una cantidad exacta de trabajo mecánico equivale a una cantidad fija y medible de calor.',
      en: 'Heat is not a material fluid ("caloric"), but microscopic mechanical energy. An exact quantity of mechanical work translates into an invariant, measurable amount of heat.',
    },
    mayerDeduction: {
      es: 'Mayer comparó la capacidad calorífica de un gas a presión constante ($C_p$) y a volumen constante ($C_v$). La diferencia de calor $C_p - C_v$ correspondía exactamente al trabajo mecánico realizado por el gas al expandirse contra la atmósfera: $1\\text{ cal} \\approx 365\\text{ kg}\\cdot\\text{m}$ ($3.58\\text{ J/cal}$).',
      en: 'Mayer compared gas specific heats at constant pressure ($C_p$) and constant volume ($C_v$). The excess heat $C_p - C_v$ represented mechanical work done against atmospheric pressure: $1\\text{ cal} \\approx 365\\text{ kg}\\cdot\\text{m}$ ($3.58\\text{ J/cal}$).',
    },
    modernImpact: {
      es: 'La constante moderna aceptada es $1\\text{ cal} = 4.184\\text{ J}$. El cálculo de Mayer, realizado con los rudimentarios datos experimentales de 1842, estuvo a menos del 15% del valor real, constituyendo una hazaña teórica sin precedentes.',
      en: 'Modern standard: $1\\text{ cal} = 4.184\\text{ J}$. Mayer’s deduction with crude 1842 gas coefficients was within 15% of ground truth—an extraordinary theoretical triumph.',
    },
    formula: 'W = J \\cdot Q  \\quad \\implies \\quad J = \\frac{P \\cdot \\Delta V}{C_p - C_v}',
  },
  {
    id: 'photosynthesis',
    number: '03',
    title: {
      es: 'Fotosíntesis y Termodinámica Biológica',
      en: 'Photosynthesis & Biological Energetics',
    },
    subtitle: {
      es: 'El Origen Solar de la Vida Terrestre (1845)',
      en: 'The Solar Origin of Terrestrial Life (1845)',
    },
    concept: {
      es: 'La biosfera funciona como un transductor termodinámico: los organismos fotosintéticos absorben radiación electromagnética solar y la convierten en energía potencial química almacenada en azúcares y biomasa.',
      en: 'The biosphere acts as a thermodynamic transducer: photosynthetic autotrophs absorb solar radiant photons, storing them as chemical potential in carbohydrates and biomass.',
    },
    mayerDeduction: {
      es: 'Mayer reconoció que los animales solo gastan energía química consumiendo oxígeno y alimentos; no la crean. Para que la vida continúe, debe existir una fuente continua externa. Concluyó que las plantas verdes capturan la luz solar como combustible inicial.',
      en: 'Mayer understood animal metabolism only combusts chemical energy; it cannot synthesize it from scratch. Hence, an external continuous pump is required: green flora catching sunlight.',
    },
    modernImpact: {
      es: 'Fundamentó la ecología moderna, las cadenas tróficas, el estudio de los ciclos de carbono y la física del cambio climático.',
      en: 'Laid the cornerstone for modern ecology, trophic food webs, planetary carbon cycles, and climate energy balance.',
    },
    formula: '6\\text{CO}_2 + 6\\text{H}_2\\text{O} + h\\nu_{\\text{solar}} \\longrightarrow \\text{C}_6\\text{H}_{12}\\text{O}_6 + 6\\text{O}_2',
  },
  {
    id: 'respiration',
    number: '04',
    title: {
      es: 'Fisiología Metabólica contra el Vitalismo',
      en: 'Metabolic Physiology vs Vitalism',
    },
    subtitle: {
      es: 'El Cuerpo Humano como Motor Térmico (1840–1845)',
      en: 'The Living Body as a Thermochemical Engine (1840–1845)',
    },
    concept: {
      es: 'La fuerza muscular y el calor animal son generados por la oxidación química de los alimentos en las células, no por ningún "soplo místico" o "fuerza vital" inmaterial.',
      en: 'Muscular power and body temperature are generated exclusively by the oxidation of ingested nutrients, utterly devoid of mystical "vital spirits".',
    },
    mayerDeduction: {
      es: 'Al observar en Java que los marineros expulsaban sangre venosa de color rojo rutilante en climas tórridos, dedujo que la tasa metabólica se autorregula térmicamente: menos disipación al ambiente exige menor combustión interna de oxígeno.',
      en: 'Observing scarlet venous blood in tropical Batavia, he inferred that human metabolic consumption self-regulates thermally: lower environmental cooling requires less internal oxidation.',
    },
    modernImpact: {
      es: 'Base de la medicina metabólica moderna, nutrición clínica, fisiología del deporte y calorimetría respiratoria indirecta.',
      en: 'The core of clinical nutrition, sports physiology, basal metabolic rate (BMR) quantification, and indirect calorimetry.',
    },
    formula: '\\text{Metabolismo basal} \\propto \\text{Consumo de } \\text{O}_2 \\propto \\text{Calor disipado}',
  },
  {
    id: 'solar-dynamics',
    number: '05',
    title: {
      es: 'Termodinámica Solar y Astrofísica',
      en: 'Solar Energetics & Celestial Dynamics',
    },
    subtitle: {
      es: 'El Combustible de las Estrellas (1848)',
      en: 'Fuel of the Stars & Celestial Energy (1848)',
    },
    concept: {
      es: 'Las estrellas no pueden ser fuegos químicos ordinarios; su longevidad cósmica requiere fuentes de energía colosales derivadas de la conversión de energía potencial gravitatoria en calor extremo.',
      en: 'Stars cannot be chemical campfires; their immense timescales necessitate colossal energy releases via gravitational potential conversion into extreme heat.',
    },
    mayerDeduction: {
      es: 'Mayer calculó que si el Sol fuera de hulla pura ardiendo en oxígeno, se consumiría en apenas 5.000 años. Propuso el bombardeo continuo de meteoros atraídos por la gravedad solar a velocidades superiores a 600 km/s.',
      en: 'Mayer computed a coal-oxygen Sun would burn out in 5,000 years. He proposed that continuous bombardment by meteors at velocities $>600\\text{ km/s}$ sustained solar luminance.',
    },
    modernImpact: {
      es: 'Precursor directo de la teoría de contracción de Kelvin-Helmholtz y, en el siglo XX, del descubrimiento de la fusión nuclear estelar por Bethe.',
      en: 'Direct forerunner to the Kelvin-Helmholtz contraction model and the 20th-century discovery of stellar nuclear fusion by Hans Bethe.',
    },
    formula: 'E_k = \\frac{1}{2} m v^2 \\quad (v_{\\text{escape}} \\approx 618 \\text{ km/s})',
  },
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: {
      es: '¿En qué año publicó Julius Robert von Mayer por primera vez su formulación cuantitativa del equivalente mecánico del calor?',
      en: 'In which year did Julius Robert von Mayer first publish his quantitative formulation of the mechanical equivalent of heat?',
    },
    options: {
      es: ['1838', '1842', '1847', '1859'],
      en: ['1838', '1842', '1847', '1859'],
    },
    correctIndex: 1,
    explanation: {
      es: 'Fue en 1842 en los Anales de Justus von Liebig ("Bemerkungen über die Kräfte der unbelebten Natur"), un año antes de los experimentos de James Joule.',
      en: 'Published in 1842 in Justus von Liebig’s Annalen ("Bemerkungen über die Kräfte der unbelebten Natur"), a full year before James Joule’s 1843 reports.',
    },
  },
  {
    id: 2,
    question: {
      es: '¿Qué observación médica en la isla de Java (1840) inspiró la epifanía científica de Mayer?',
      en: 'What clinical observation in Java (1840) sparked Mayer’s scientific breakthrough?',
    },
    options: {
      es: [
        'Los marineros sudaban más sal en los climas húmedos.',
        'La sangre venosa de los marineros era inusualmente roja y brillante, casi como la sangre arterial.',
        'El pulso cardíaco aumentaba durante los eclipses lunares.',
        'La temperatura corporal disminuía drásticamente al comer frutas tropicales.',
      ],
      en: [
        'Sailors perspired more salt in tropical humidity.',
        'The venous blood of sailors was unusually bright scarlet, almost identical to arterial blood.',
        'Heart rates accelerated dramatically during lunar eclipses.',
        'Body temperature plummeted when consuming tropical fruits.',
      ],
    },
    correctIndex: 1,
    explanation: {
      es: 'Al hacer flebotomías en Java, descubrió que la sangre venosa conservaba un color rojo escarlata vivo porque en climas cálidos el cuerpo consume menos oxígeno para mantener su temperatura.',
      en: 'During phlebotomy in Java, he noticed venous blood retained a vivid scarlet hue because hot climates require less oxygen consumption to sustain 37°C.',
    },
  },
  {
    id: 3,
    question: {
      es: '¿Cuál fue el valor numérico deducido por Mayer en 1842 para el equivalente mecánico del calor?',
      en: 'What numerical value did Mayer deduce in 1842 for the mechanical equivalent of heat?',
    },
    options: {
      es: [
        '365 kilogramómetros (aprox. 3.58 Julios/caloría)',
        '427 kilogramómetros (aprox. 4.18 Julios/caloría)',
        '100 kilogramómetros (aprox. 0.98 Julios/caloría)',
        '850 kilogramómetros (aprox. 8.33 Julios/caloría)',
      ],
      en: [
        '365 kilogram-meters (approx. 3.58 Joules/calorie)',
        '427 kilogram-meters (approx. 4.18 Joules/calorie)',
        '100 kilogram-meters (approx. 0.98 Joules/calorie)',
        '850 kilogram-meters (approx. 8.33 Joules/calorie)',
      ],
    },
    correctIndex: 0,
    explanation: {
      es: 'Mayer calculó 365 kg·m por kilocaloría a partir de la expansión de gases, un valor asombrosamente cercano para los datos experimentales de su época.',
      en: 'Mayer deduced 365 kg·m per kilocalorie from gas expansion data—astonishingly close given the experimental margins of the 1840s.',
    },
  },
  {
    id: 4,
    question: {
      es: '¿Qué célebre físico británico defendió en 1862 la prioridad de Mayer ante la Royal Institution de Londres?',
      en: 'Which celebrated British physicist defended Mayer’s priority before London’s Royal Institution in 1862?',
    },
    options: {
      es: ['Lord Kelvin (William Thomson)', 'John Tyndall', 'Michael Faraday', 'James Clerk Maxwell'],
      en: ['Lord Kelvin (William Thomson)', 'John Tyndall', 'Michael Faraday', 'James Clerk Maxwell'],
    },
    correctIndex: 1,
    explanation: {
      es: 'John Tyndall tradujo los escritos de Mayer y dio una famosa conferencia que restauró internacionalmente su crédito científico frente al monopolio de Joule.',
      en: 'John Tyndall translated Mayer’s papers and delivered an impassioned lecture restoring his rightful global priority over Joule.',
    },
  },
  {
    id: 5,
    question: {
      es: '¿Qué prestigioso galardón de la Royal Society recibió Mayer en 1871, reconociendo su trascendencia universal?',
      en: 'Which prestigious Royal Society accolade did Mayer receive in 1871, cementing his global stature?',
    },
    options: {
      es: ['Medalla Copley', 'Premio Nobel de Física', 'Medalla Rumford', 'Medalla Wollaston'],
      en: ['Copley Medal', 'Nobel Prize in Physics', 'Rumford Medal', 'Wollaston Medal'],
    },
    correctIndex: 0,
    explanation: {
      es: 'La Medalla Copley, la más alta condecoración científica de Gran Bretaña, que lo situó al mismo nivel que Darwin y Faraday.',
      en: 'The Copley Medal, Britain’s most esteemed scientific honor, placing him alongside peers like Darwin and Faraday.',
    },
  },
];
