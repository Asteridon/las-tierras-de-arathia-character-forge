import { Character, AbilityScores, Spell } from '../types';
import { FIGHTING_STYLE_OPTIONS } from './characterCreatorData';
import { OFFICIAL_SPELLS_COMPENDIUM } from './spellsData';

export interface DecisionOption {
  id: string;
  name: string;
  desc: string;
  badge?: string;
  prerequisite?: string;
}

export interface LevelUpSpellRules {
  newSpellsToLearn: number;
  newCantripsToLearn: number;
  canSwapSpell: boolean;
  canUseCantripFormulas: boolean;
  canUseCantripVersatility: boolean;
  explanation: string;
}

// --------------------------------------------------------------------------
// 1. METAMAGIC OPTIONS (HECHICERO)
// --------------------------------------------------------------------------
export const METAMAGIC_OPTIONS: DecisionOption[] = [
  {
    id: 'cuidadoso',
    name: 'Conjuro Cuidadoso',
    desc: 'Cuando lanzas un conjuro que requiera tirada de salvación, puedes proteger a un número de criaturas de tu elección hasta tu modificador de Carisma. Dichas criaturas tienen éxito automático en la tirada de salvación.',
    badge: '1 Punto de Hechicería',
  },
  {
    id: 'distante',
    name: 'Conjuro Distante',
    desc: 'Cuando lanzas un conjuro con alcance de 5 pies o más, puedes duplicar su alcance. Cuando lanzas un conjuro con alcance de toque, puedes hacer que tenga un alcance de 30 pies.',
    badge: '1 Punto de Hechicería',
  },
  {
    id: 'potenciado',
    name: 'Conjuro Potenciado',
    desc: 'Cuando tires el daño de un conjuro, puedes relanzar un número de dados de daño hasta tu modificador de Carisma (mínimo 1). Debes usar las nuevas tiradas. Se puede usar incluso si ya aplicaste otra opción de metamagia.',
    badge: '1 Punto de Hechicería',
  },
  {
    id: 'extendido',
    name: 'Conjuro Extendido',
    desc: 'Cuando lanzas un conjuro con duración de 1 minuto o superior, puedes duplicar su duración hasta un máximo de 24 horas.',
    badge: '1 Punto de Hechicería',
  },
  {
    id: 'elevado',
    name: 'Conjuro Elevado',
    desc: 'Cuando lanzas un conjuro que requiere tirada de salvación, puedes hacer que un objetivo sufra desventaja en su primera tirada de salvación contra el conjuro.',
    badge: '3 Puntos de Hechicería',
  },
  {
    id: 'rapido',
    name: 'Conjuro Rápido',
    desc: 'Cuando lanzas un conjuro cuyo tiempo de lanzamiento sea 1 acción, puedes cambiarlo a 1 acción adicional para ese lanzamiento.',
    badge: '2 Puntos de Hechicería',
  },
  {
    id: 'sutil',
    name: 'Conjuro Sutil',
    desc: 'Puedes lanzar un conjuro sin componentes verbales ni somáticos, evitando que sea detectado o interrumpido por Contramagia.',
    badge: '1 Punto de Hechicería',
  },
  {
    id: 'gemelo',
    name: 'Conjuro Gemelo',
    desc: 'Cuando lanzas un conjuro que solo tiene como objetivo a una criatura y no tiene alcance personal, puedes hacer que tenga como objetivo a una segunda criatura dentro de su alcance gastando tantos puntos como el nivel del conjuro (1 punto si es un truco).',
    badge: '1-9 Puntos de Hechicería',
  },
  {
    id: 'transmutado',
    name: 'Conjuro Transmutado',
    desc: 'Cuando lanzas un conjuro que inflige daño de ácido, frío, fuego, relámpago, veneno o trueno, puedes cambiar el tipo de daño a cualquiera de los otros elementos mencionados.',
    badge: '1 Punto de Hechicería',
  },
  {
    id: 'buscador',
    name: 'Conjuro Buscador',
    desc: 'Si fallas una tirada de ataque con un conjuro, puedes relanzar el d20. Debes usar el nuevo resultado.',
    badge: '2 Puntos de Hechicería',
  },
];

// --------------------------------------------------------------------------
// 2. ELDRITCH INVOCATIONS (BRUJO)
// --------------------------------------------------------------------------
export const ELDRITCH_INVOCATIONS: DecisionOption[] = [
  {
    id: 'explosion-agonica',
    name: 'Explosión Agónica',
    desc: 'Cuando lanzas Descarga Sobrenatural, sumas tu modificador de Carisma al daño que inflige cada rayo que impacte.',
    badge: 'Truco Descarga Sobrenatural',
    prerequisite: 'Descarga Sobrenatural',
  },
  {
    id: 'explosion-repulsiva',
    name: 'Explosión Repulsiva',
    desc: 'Cuando impactas a una criatura con Descarga Sobrenatural, puedes empujarla hasta 10 pies de distancia en línea recta lejos de ti.',
    badge: 'Truco Descarga Sobrenatural',
    prerequisite: 'Descarga Sobrenatural',
  },
  {
    id: 'vision-diabolica',
    name: 'Visión Diabólica',
    desc: 'Puedes ver con total claridad tanto en la oscuridad normal como en la oscuridad mágica hasta una distancia de 120 pies.',
    badge: 'Pasiva Permanente',
  },
  {
    id: 'armadura-sombras',
    name: 'Armadura de Sombras',
    desc: 'Puedes lanzar Armadura de Mago sobre ti mismo a voluntad, sin gastar ranuras de conjuro ni componentes materiales.',
    badge: 'A voluntad',
  },
  {
    id: 'vigor-demoniaco',
    name: 'Vigor Demoníaco',
    desc: 'Puedes lanzar Falsa Vida sobre ti mismo a voluntad como conjuro de 1.er nivel (obteniendo 1d4+4 puntos de golpe temporales).',
    badge: 'A voluntad',
  },
  {
    id: 'mascara-muchas-caras',
    name: 'Máscara de Muchas Caras',
    desc: 'Puedes lanzar Disfrazarse sobre ti mismo a voluntad, sin gastar ranuras de conjuro.',
    badge: 'A voluntad',
  },
  {
    id: 'vision-esoterica',
    name: 'Visión de lo Esotérico',
    desc: 'Puedes lanzar Detectar Magia a voluntad, sin gastar ranuras de conjuro.',
    badge: 'A voluntad',
  },
  {
    id: 'ojos-guardian-runico',
    name: 'Ojos del Guardián Rúnico',
    desc: 'Puedes leer y comprender cualquier sistema de escritura y texto en el multiverso.',
    badge: 'Pasiva Permanente',
  },
  {
    id: 'bestia-parlante',
    name: 'Bestia Parlante',
    desc: 'Puedes lanzar Hablar con los Animales a voluntad, sin gastar ranuras de conjuro.',
    badge: 'A voluntad',
  },
  {
    id: 'influencia-seductora',
    name: 'Influencia Seductora',
    desc: 'Ganas competencia en las habilidades de Engaño y Persuasión.',
    badge: 'Competencias',
  },
  {
    id: 'arma-pacto-mejorada',
    name: 'Arma del Pacto Mejorada',
    desc: 'Tu arma de pacto puede ser un arco o ballesta, gana un bonificador de +1 al ataque y daño, y sirve como foco de lanzamiento para tus conjuros.',
    badge: 'Pacto de la Hoja',
    prerequisite: 'Pacto de la Hoja',
  },
  {
    id: 'libro-secretos-antiguos',
    name: 'Libro de Secretos Antiguos',
    desc: 'Puedes inscribir y lanzar cualquier conjuro con la etiqueta ritual de cualquier lista de clase en tu Libro de las Sombras.',
    badge: 'Pacto del Tomo',
    prerequisite: 'Pacto del Tomo',
  },
  {
    id: 'voz-amo-cadenas',
    name: 'Voz del Amo de las Cadenas',
    desc: 'Puedes comunicarte telepáticamente con tu familiar a cualquier distancia y percibir a través de sus sentidos.',
    badge: 'Pacto de la Cadena',
    prerequisite: 'Pacto de la Cadena',
  },
  {
    id: 'sed-hojas',
    name: 'Sed de Hojas',
    desc: 'Puedes atacar con tu arma de pacto dos veces en lugar de una cuando realizas la acción de Atacar en tu turno.',
    badge: 'Nivel 5+, Pacto de la Hoja',
    prerequisite: 'Nivel 5, Pacto de la Hoja',
  },
  {
    id: 'escultor-carne',
    name: 'Escultor de la Carne',
    desc: 'Puedes lanzar Polimorfia una vez usando una ranura de conjuro de brujo. Recuperas este uso tras un descanso largo.',
    badge: 'Nivel 7+',
    prerequisite: 'Nivel 7',
  },
  {
    id: 'lanza-letal',
    name: 'Lanza Letal',
    desc: 'Cuando lanzas Descarga Sobrenatural, su alcance aumenta a 300 pies.',
    badge: 'Truco Descarga Sobrenatural',
    prerequisite: 'Descarga Sobrenatural',
  },
  {
    id: 'castigo-sobrenatural',
    name: 'Castigo Sobrenatural',
    desc: 'Una vez por turno al impactar a una criatura con tu arma de pacto, puedes gastar una ranura de conjuro de brujo para infligir 1d8 de daño de fuerza adicional más 1d8 por nivel de ranura, y puedes derribar a la criatura si es de tamaño Enorme o menor.',
    badge: 'Nivel 5+, Pacto del Filo',
    prerequisite: 'Nivel 5, Pacto del Filo',
  },
  {
    id: 'paso-ascendente',
    name: 'Paso Ascendente',
    desc: 'Puedes lanzar Levitar sobre ti mismo a voluntad, sin gastar ranuras de conjuro ni componentes materiales.',
    badge: 'A voluntad, Nivel 9+',
    prerequisite: 'Nivel 9',
  },
  {
    id: 'tumba-levistus',
    name: 'Tumba de Levistus',
    desc: 'Como reacción al recibir daño, te encierras en hielo ganando 10 puntos de golpe temporales por nivel de brujo que absorben el daño desencadenante. Se recarga en descanso corto.',
    badge: 'Nivel 5+, Reacción',
    prerequisite: 'Nivel 5',
  },
  {
    id: 'sudario-sombras',
    name: 'Sudario de Sombras',
    desc: 'Puedes lanzar Invisibilidad sobre ti mismo a voluntad, sin gastar ranuras de conjuro.',
    badge: 'A voluntad, Nivel 15+',
    prerequisite: 'Nivel 15',
  },
  {
    id: 'vision-bruja',
    name: 'Visión de Bruja',
    desc: 'Puedes ver la forma real de cualquier metamorfo o criatura oculta por magia de ilusión o transmutación a 30 pies de ti.',
    badge: 'Pasiva, Nivel 15+',
    prerequisite: 'Nivel 15',
  },
  {
    id: 'cadenas-carceri',
    name: 'Cadenas de Carceri',
    desc: 'Puedes lanzar Retener Monstruo a voluntad sin gastar ranuras de conjuro contra un celestial, infernal o elemental. Una criatura específica solo puede ser afectada una vez por descanso largo.',
    badge: 'A voluntad, Nivel 15+, Cadena',
    prerequisite: 'Nivel 15, Pacto de la Cadena',
  },
  {
    id: 'proteccion-talisman',
    name: 'Protección del Talismán',
    desc: 'Quien porte tu talismán añade 1d4 a cualquier tirada de salvación que falle.',
    badge: 'Nivel 7+, Pacto del Talismán',
    prerequisite: 'Nivel 7, Pacto del Talismán',
  },
];

// --------------------------------------------------------------------------
// 3. PACT BOONS & FAMILIARS (DON DEL PACTO)
// --------------------------------------------------------------------------
export const PACT_BOON_OPTIONS: DecisionOption[] = [
  {
    id: 'pacto-hoja',
    name: 'Pacto del Filo',
    desc: 'Puedes crear un arma cuerpo a cuerpo mágica en tu mano vacía como acción. Eres competente con ella mientras la empuñes y cuenta como mágica.',
    badge: 'Arma Mágica Conjurada',
  },
  {
    id: 'pacto-tomo',
    name: 'Pacto del Tomo',
    desc: 'Tu patrón te entrega el Libro de las Sombras. Elige 3 trucos de cualquier lista de conjuros de clase: cuentan como trucos de brujo para ti y no cuentan contra tu límite.',
    badge: '+3 Trucos Multiclase',
  },
  {
    id: 'pacto-cadena',
    name: 'Pacto de la Cadena',
    desc: 'Aprendes el conjuro Encontrar Familiar como ritual. Puedes elegir formas sobrenaturales especiales para tu familiar: Diablillo, Quasit, Pseudodragón o Duendecillo.',
    badge: 'Familiar Sobrenatural',
  },
  {
    id: 'pacto-talisman',
    name: 'Pacto del Talismán',
    desc: 'Tu patrón te entrega un amuleto especial. Quien lo porte puede sumar 1d4 a una prueba de característica fallida tantas veces al día como tu bonificador de competencia.',
    badge: 'Amuleto Protector 1d4',
  },
];

export const PACT_CHAIN_FAMILIARS: DecisionOption[] = [
  {
    id: 'diablillo',
    name: 'Diablillo',
    desc: 'Infernillo volador capaz de volverse invisible a voluntad y con picadura venenosa letal.',
    badge: 'Infernal • Invisibilidad',
  },
  {
    id: 'quasit',
    name: 'Quasit',
    desc: 'Demonio menor metamorfo capaz de asustar enemigos y causar toxinas paralizantes.',
    badge: 'Abisal • Metamorfo',
  },
  {
    id: 'pseudodragon',
    name: 'Pseudodragón',
    desc: 'Pequeño dragón con picadura de aguijón que sume a las víctimas en un sueño mágico.',
    badge: 'Dracónico • Veneno de Sueño',
  },
  {
    id: 'duendecillo',
    name: 'Duendecillo',
    desc: 'Ser feérico con arcos mágicos invisibles capaces de detectar el alineamiento y el corazón de los rivales.',
    badge: 'Feérico • Flechas de Inconsciencia',
  },
];

// --------------------------------------------------------------------------
// 4. BATTLE MASTER MANEUVERS (MAESTRO DE BATALLA)
// --------------------------------------------------------------------------
export const BATTLE_MASTER_MANEUVERS: DecisionOption[] = [
  { id: 'ataque-derribo', name: 'Ataque de Derribo', desc: 'Suma el dado de superioridad al daño; si el objetivo falla salvación de Fuerza, cae derribado al suelo.' },
  { id: 'contraataque', name: 'Contraataque', desc: 'Reacción cuando fallen un ataque cuerpo a cuerpo contra ti para contratacar sumando el dado de superioridad al daño.' },
  { id: 'parada', name: 'Parada', desc: 'Reacción cuando recibas daño cuerpo a cuerpo para reducir el daño en 1 dado de superioridad + modificador de Destreza.' },
  { id: 'ataque-precision', name: 'Ataque de Precisión', desc: 'Suma el dado de superioridad a tu tirada de ataque para asegurar el impacto.' },
  { id: 'ataque-amenazante', name: 'Ataque Amenazante', desc: 'Suma el dado al daño y asusta al objetivo hasta el final de tu próximo turno si falla salvación de Sabiduría.' },
  { id: 'ataque-desarme', name: 'Ataque de Desarme', desc: 'Suma el dado al daño y obliga a soltar un objeto sostenido si falla salvación de Fuerza.' },
  { id: 'ataque-empujon', name: 'Ataque de Empujón', desc: 'Suma el dado al daño y empuja al objetivo hasta 15 pies lejos de ti si falla salvación de Fuerza.' },
  { id: 'ataque-maniobra', name: 'Ataque de Maniobra', desc: 'Suma el dado al daño y permite a un aliado moverse la mitad de su velocidad sin provocar ataques de oportunidad.' },
  { id: 'finta', name: 'Ataque con Finta', desc: 'Acción adicional para ganar ventaja en tu siguiente tirada de ataque y sumar el dado de superioridad al daño.' },
  { id: 'evasion', name: 'Paso de Evasión', desc: 'Gasta el dado de superioridad mientras te mueves para sumar el resultado a tu CA hasta detenerte.' },
  { id: 'distraccion', name: 'Ataque de Distracción', desc: 'Suma el dado al daño y da ventaja al siguiente ataque de un aliado contra ese enemigo.' },
  { id: 'arrollador', name: 'Ataque Arrollador', desc: 'Si impactas, inflige el resultado del dado de superioridad a una criatura adyacente adicional.' },
];

// --------------------------------------------------------------------------
// 5. ELEMENTAL DISCIPLINES (MONJE)
// --------------------------------------------------------------------------
export interface ElementalDisciplineOption extends DecisionOption {
  minLevel: number;
  kiCost: number;
}

export const ELEMENTAL_DISCIPLINES: ElementalDisciplineOption[] = [
  {
    id: 'sintonia-elemental',
    name: 'Sintonía Elemental',
    desc: 'Puedes usar tu acción para controlar brevemente las fuerzas elementales cercanas, creando efectos inofensivos: encender/apagar una pequeña llama, enfriar/calentar 1 libra de material, esculpir 1 pie cúbico de tierra/humo o crear una suave brisa.',
    badge: 'Nv 3 • 0 Ki (Básico)',
    minLevel: 3,
    kiCost: 0,
  },
  {
    id: 'colmillos-serpiente-fuego',
    name: 'Colmillos de la Serpiente de Fuego',
    desc: 'Cuando realizas la acción de Atacar en tu turno, puedes gastar 1 punto de Ki para hacer que zarcillos de llamas broten de tus puños y pies. Tu alcance desarmado aumenta en 10 pies para ese turno y tus impactos infligen daño de fuego en lugar de contundente. Además, si impactas, puedes gastar 1 Ki extra para infligir 1d10 de daño de fuego adicional.',
    badge: 'Nv 3 • 1 Ki',
    minLevel: 3,
    kiCost: 1,
  },
  {
    id: 'latigo-de-agua',
    name: 'Látigo de Agua',
    desc: 'Como acción, gastas 2 puntos de Ki para crear un látigo de agua que azota a una criatura a 30 pies o menos que puedas ver. La criatura debe hacer una salvación de Destreza. Si falla, sufre 3d10 de daño contundente (más 1d10 por cada Ki adicional gastado) y puedes derribarla o arrastrarla hasta 25 pies hacia ti. Si tiene éxito, sufre la mitad de daño y no es movida.',
    badge: 'Nv 3 • 2 Ki',
    minLevel: 3,
    kiCost: 2,
  },
  {
    id: 'puno-aire-ininterrumpido',
    name: 'Puño del Aire Ininterrumpido',
    desc: 'Como acción, gastas 2 puntos de Ki y convocas una potente ráfaga de aire comprimido contra una criatura a 30 pies. Debe hacer una salvación de Fuerza; si falla sufre 3d10 de daño contundente (más 1d10 por cada Ki adicional) y es empujada hasta 20 pies lejos de ti y derribada. Si tiene éxito, sufre la mitad y no es empujada.',
    badge: 'Nv 3 • 2 Ki',
    minLevel: 3,
    kiCost: 2,
  },
  {
    id: 'puno-cuatro-truenos',
    name: 'Puño de Cuatro Truenos',
    desc: 'Puedes gastar 2 puntos de Ki para lanzar el conjuro Onda Atronadora como acción.',
    badge: 'Nv 3 • 2 Ki (Onda Atronadora)',
    minLevel: 3,
    kiCost: 2,
  },
  {
    id: 'barrido-de-cenizas',
    name: 'Barrer con Cenizas',
    desc: 'Puedes gastar 2 puntos de Ki para lanzar el conjuro Manos Ardientes como acción.',
    badge: 'Nv 3 • 2 Ki (Manos Ardientes)',
    minLevel: 3,
    kiCost: 2,
  },
  {
    id: 'espiritus-del-vendaval',
    name: 'Ráfaga de Espíritus del Vendaval',
    desc: 'Puedes gastar 2 puntos de Ki para lanzar el conjuro Ráfaga de Viento como acción.',
    badge: 'Nv 3 • 2 Ki (Ráfaga de Viento)',
    minLevel: 3,
    kiCost: 2,
  },
  {
    id: 'moldear-rio-fluyente',
    name: 'Moldear el Río Fluyente',
    desc: 'Como acción, gastas 1 punto de Ki para elegir un área de hielo o agua de no más de 30 pies de lado a 120 pies de ti. Puedes congelar el agua en hielo sólido o derretir el hielo en agua, alterando el terreno de combate a tu antojo.',
    badge: 'Nv 3 • 1 Ki',
    minLevel: 3,
    kiCost: 1,
  },
  {
    id: 'apreton-viento-norte',
    name: 'Apretón del Viento del Norte',
    desc: 'Puedes gastar 3 puntos de Ki para lanzar el conjuro Retener Persona como acción, paralizando a un humanoide en el aire gélido.',
    badge: 'Nv 6 • 3 Ki (Retener Persona)',
    minLevel: 6,
    kiCost: 3,
  },
  {
    id: 'gong-de-la-cumbre',
    name: 'Gong de la Cumbre',
    desc: 'Puedes gastar 3 puntos de Ki para lanzar el conjuro Hacer Añicos como acción, resonando con fuerza telúrica destructiva.',
    badge: 'Nv 6 • 3 Ki (Hacer Añicos)',
    minLevel: 6,
    kiCost: 3,
  },
  {
    id: 'postura-de-niebla',
    name: 'Postura de Niebla',
    desc: 'Puedes gastar 4 puntos de Ki para lanzar el conjuro Forma Gaseosa sobre ti mismo como acción, transformándote en vapor espectral.',
    badge: 'Nv 11 • 4 Ki (Forma Gaseosa)',
    minLevel: 11,
    kiCost: 4,
  },
  {
    id: 'cabalgar-el-viento',
    name: 'Cabalgar el Viento',
    desc: 'Puedes gastar 4 puntos de Ki para lanzar el conjuro Volar sobre ti mismo como acción, sustentándote en corrientes ascendentes de aire.',
    badge: 'Nv 11 • 4 Ki (Volar)',
    minLevel: 11,
    kiCost: 4,
  },
  {
    id: 'llamas-del-fenix',
    name: 'Llamas del Fénix',
    desc: 'Puedes gastar 4 puntos de Ki para lanzar el conjuro Bola de Fuego como acción, desatando una llamarada ígnea masiva de 20 pies de radio.',
    badge: 'Nv 11 • 4 Ki (Bola de Fuego)',
    minLevel: 11,
    kiCost: 4,
  },
  {
    id: 'defensa-montana-eterna',
    name: 'Defensa de la Montaña Eterna',
    desc: 'Puedes gastar 5 puntos de Ki para lanzar el conjuro Piel Pétrea sobre ti mismo como acción, endureciendo tu piel como granito impenetrable.',
    badge: 'Nv 11 • 5 Ki (Piel Pétrea)',
    minLevel: 11,
    kiCost: 5,
  },
  {
    id: 'aliento-de-invierno',
    name: 'Aliento de Invierno',
    desc: 'Puedes gastar 6 puntos de Ki para lanzar el conjuro Cono de Frío como acción, exhalando un torrente polar de 60 pies.',
    badge: 'Nv 17 • 6 Ki (Cono de Frío)',
    minLevel: 17,
    kiCost: 6,
  },
  {
    id: 'rio-de-fuego-hambriento',
    name: 'Río de Fuego Hambriento',
    desc: 'Puedes gastar 5 puntos de Ki para lanzar el conjuro Muro de Fuego como acción, alzando una barrera abrasadora de llamas primordiales.',
    badge: 'Nv 17 • 5 Ki (Muro de Fuego)',
    minLevel: 17,
    kiCost: 5,
  },
  {
    id: 'ola-tierra-rodante',
    name: 'Ola de Tierra Rodante',
    desc: 'Puedes gastar 6 puntos de Ki para lanzar el conjuro Muro de Piedra como acción, moldeando la roca del suelo en un baluarte permanente.',
    badge: 'Nv 17 • 6 Ki (Muro de Piedra)',
    minLevel: 17,
    kiCost: 6,
  },
];

// --------------------------------------------------------------------------
// 6. KENSEI WEAPON OPTIONS (MONJE)
// --------------------------------------------------------------------------
export const KENSEI_WEAPON_OPTIONS: DecisionOption[] = [
  { id: 'espada-larga', name: 'Espada Larga', desc: 'Arma cuerpo a cuerpo versátil marcial (1d8/1d10). Se convierte en arma de monje y escala con Artes Marciales.', badge: 'Cuerpo a cuerpo' },
  { id: 'estoque', name: 'Estoque', desc: 'Arma cuerpo a cuerpo sutil marcial (1d8 perforante). Excelente precisión con Destreza.', badge: 'Cuerpo a cuerpo' },
  { id: 'cimitarra', name: 'Cimitarra', desc: 'Arma ligera sutil marcial (1d6 cortante). Gran fluidez en combate rápido.', badge: 'Cuerpo a cuerpo' },
  { id: 'hacha-guerra', name: 'Hacha de Batalla', desc: 'Arma versátil marcial (1d8/1d10 cortante). Golpes contundentes y brutales.', badge: 'Cuerpo a cuerpo' },
  { id: 'martillo-guerra', name: 'Martillo de Guerra', desc: 'Arma versátil marcial (1d8/1d10 contundente). Aplasta armaduras enemigas.', badge: 'Cuerpo a cuerpo' },
  { id: 'arco-largo', name: 'Arco Largo', desc: 'Arma marcial a distancia (1d8 perforante, alcance 150/600 pies). Letalidad a distancia extrema.', badge: 'A distancia' },
  { id: 'arco-corto', name: 'Arco Corto', desc: 'Arma simple a distancia (1d6 perforante, alcance 80/320 pies). Ligero y versátil.', badge: 'A distancia' },
  { id: 'ballesta-ligera', name: 'Ballesta Ligera', desc: 'Arma simple a distancia (1d8 perforante, alcance 80/320 pies).', badge: 'A distancia' },
  { id: 'mayal', name: 'Mayal', desc: 'Arma marcial cuerpo a cuerpo (1d8 contundente). Desvía guardias enemigas.', badge: 'Cuerpo a cuerpo' },
  { id: 'tridente', name: 'Tridente', desc: 'Arma marcial versátil arrojadiza (1d6/1d8 perforante).', badge: 'Cuerpo a cuerpo / Arrojadiza' },
];

export const KENSEI_TOOL_OPTIONS: DecisionOption[] = [
  { id: 'utiles-pintor', name: 'Útiles de Pintor', desc: 'Herramientas artísticas para meditar pintando paisajes y símbolos espirituales.', badge: 'Herramienta de Artesano' },
  { id: 'herramientas-caligrafia', name: 'Herramientas de Caligrafía', desc: 'Pinceles, tinta y pergamino para transcribir poemas sagrados y pergaminos marciales.', badge: 'Herramienta de Artesano' },
];

export const ASCENDANT_DRAGON_LANGUAGES: DecisionOption[] = [
  { id: 'idioma-draconico', name: 'Dracónico', desc: 'La lengua sagrada y ancestral de los dragones cromáticos y metálicos.', badge: 'Idioma Primigenio' },
  { id: 'idioma-celestial', name: 'Celestial', desc: 'El lenguaje de los planos superiores y los seres angélicos.', badge: 'Idioma Plano Superior' },
  { id: 'idioma-infernal', name: 'Infernal', desc: 'El lenguaje preciso y estricto de los Nueve Infiernos de Baator.', badge: 'Idioma Infernal' },
  { id: 'idioma-abisal', name: 'Abisal', desc: 'El dialecto caótico y resonante de las infinitas capas del Abismo.', badge: 'Idioma Abisal' },
  { id: 'idioma-silvano', name: 'Silvano', desc: 'El melodioso lenguaje del Feywild y las criaturas feéricas.', badge: 'Idioma Feérico' },
  { id: 'idioma-primordial', name: 'Primordial', desc: 'El lenguaje elemental de los cuatro planos interiores.', badge: 'Idioma Elemental' },
  { id: 'idioma-elfico', name: 'Élfico', desc: 'La lengua fluida y poética de los elfos.', badge: 'Idioma Estándar' },
  { id: 'idioma-enano', name: 'Enano', desc: 'El idioma robusto y antiguo de las fortalezas enanas.', badge: 'Idioma Estándar' },
];

// --------------------------------------------------------------------------
// 7. TOTEM WARRIOR (BÁRBARO)
// --------------------------------------------------------------------------
export const TOTEM_WARRIOR_LEVEL_3_SPIRITS: DecisionOption[] = [
  { id: 'totem-oso-3', name: 'Tótem del Oso', desc: 'En furia tienes resistencia a todos los tipos de daño excepto daño psíquico. Conviértete en un baluarte invencible.', badge: 'Defensa Absoluta' },
  { id: 'totem-aguila-3', name: 'Tótem del Águila', desc: 'En furia puedes usar Correr como acción adicional en cada turno, y las criaturas enemigas sufren desventaja en ataques de oportunidad contra ti.', badge: 'Movilidad Aérea' },
  { id: 'totem-lobo-3', name: 'Tótem del Lobo', desc: 'En furia tus compañeros tienen ventaja en tiradas de ataque cuerpo a cuerpo contra cualquier criatura enemiga a 5 pies de ti.', badge: 'Líder de Manada' },
  { id: 'totem-alce-3', name: 'Tótem del Alce', desc: 'En furia tu velocidad de movimiento a pie aumenta en 15 pies adicionales. Te desplazas como una estampida implacable.', badge: '+15 pies Velocidad' },
  { id: 'totem-tigre-3', name: 'Tótem del Tigre', desc: 'En furia la distancia de tu salto de longitud aumenta en 10 pies y tu salto de altura aumenta en 3 pies.', badge: 'Salto Depredador' },
];

export const TOTEM_WARRIOR_LEVEL_6_ASPECTS: DecisionOption[] = [
  { id: 'aspecto-oso-6', name: 'Aspecto del Oso', desc: 'Tu capacidad de carga (incluyendo peso máximo levantado y arrastrado) se duplica, y tienes ventaja en pruebas de Fuerza realizadas para empujar, tirar, levantar o romper objetos.', badge: 'Fuerza Colosal' },
  { id: 'aspecto-aguila-6', name: 'Aspecto del Águila', desc: 'Puedes ver con total claridad hasta a 1 milla de distancia sin dificultad, y la luz tenue no impone desventaja en tus pruebas de Sabiduría (Percepción).', badge: 'Vista de Halcón' },
  { id: 'aspecto-lobo-6', name: 'Aspecto del Lobo', desc: 'Ganas los sentidos de caza de un lobo. Puedes rastrear a otras criaturas mientras viajas a paso rápido, y puedes moverte sigilosamente a un ritmo normal.', badge: 'Rastreo Perfecto' },
  { id: 'aspecto-alce-6', name: 'Aspecto del Alce', desc: 'Tanto si viajas a pie como montado, puedes duplicar la velocidad de viaje de hasta diez compañeros contigo si no estás en combate.', badge: 'Marcha de Estampida' },
  { id: 'aspecto-tigre-6', name: 'Aspecto del Tigre', desc: 'Ganas competencia en dos habilidades a tu elección entre Atletismo, Acrobacia, Sigilo o Supervivencia.', badge: '2 Habilidades Extra' },
];

export const TOTEM_WARRIOR_LEVEL_14_ATTUNEMENTS: DecisionOption[] = [
  { id: 'sintonia-oso-14', name: 'Sintonía del Oso', desc: 'En furia, cualquier enemigo a 5 pies de ti tiene desventaja en tiradas de ataque contra cualquier objetivo que no seas tú.', badge: 'Provocación Protectora' },
  { id: 'sintonia-aguila-14', name: 'Sintonía del Águila', desc: 'En furia tienes una velocidad de vuelo igual a tu velocidad a pie actual. Caes si terminas tu turno en el aire sin nada que te sostenga.', badge: 'Vuelo en Furia' },
  { id: 'sintonia-lobo-14', name: 'Sintonía del Lobo', desc: 'En furia, al golpear a una criatura Grande o menor con un ataque de arma cuerpo a cuerpo, puedes usar tu acción adicional para derribarla.', badge: 'Derribo Automático' },
  { id: 'sintonia-alce-14', name: 'Sintonía del Alce', desc: 'En furia, puedes usar una acción adicional en tu turno para moverte a través del espacio de una criatura Grande o menor, infligiendo 1d12 + Fuerza de daño contundente y derribándola si falla salvación de Fuerza.', badge: 'Embestida Arrolladora' },
  { id: 'sintonia-tigre-14', name: 'Sintonía del Tigre', desc: 'Si te mueves al menos 20 pies en línea recta hacia un objetivo antes de hacer un ataque con arma cuerpo a cuerpo, puedes usar tu acción adicional para hacer un ataque cuerpo a cuerpo adicional contra él.', badge: 'Zarpazo en Carrera' },
];

export const BARBARIAN_PRIMAL_KNOWLEDGE_OPTIONS: DecisionOption[] = [
  { id: 'pk-trato-animales', name: 'Trato con Animales', desc: 'Calmar animales asustados o agresivos y dirigir monturas bajo tensión.' },
  { id: 'pk-atletismo', name: 'Atletismo', desc: 'Escalar superficies difíciles, saltar grietas anchas y maniobras de empujar o derribar.' },
  { id: 'pk-intimidacion', name: 'Intimidación', desc: 'Infundir terror en adversarios mediante tu presencia física imponente.' },
  { id: 'pk-naturaleza', name: 'Naturaleza', desc: 'Conocimiento de flora, fauna, clima y ciclos de la naturaleza salvaje.' },
  { id: 'pk-percepcion', name: 'Percepción', desc: 'Agudeza sensorial para detectar emboscadas, peligros ocultos y sonidos sutiles.' },
  { id: 'pk-supervivencia', name: 'Supervivencia', desc: 'Rastrear presas, encontrar comida/agua, orientarse en la espesura y predecir el clima.' },
];

export const TOTEM_TIGER_LEVEL_6_SKILLS: DecisionOption[] = [
  { id: 'tiger-atletismo', name: 'Atletismo', desc: 'Ganas competencia en pruebas de Atletismo por la agilidad felina del tigre.' },
  { id: 'tiger-acrobacia', name: 'Acrobacia', desc: 'Ganas competencia en pruebas de Acrobacia, manteniendo el equilibrio y destreza física.' },
  { id: 'tiger-sigilo', name: 'Sigilo', desc: 'Ganas competencia en Sigilo, acechando en silencio como un depredador natural.' },
  { id: 'tiger-supervivencia', name: 'Supervivencia', desc: 'Ganas competencia en Supervivencia, reconociendo huellas y rastros en la intemperie.' },
];

export const ZEALOT_DIVINE_FURY_OPTIONS: DecisionOption[] = [
  {
    id: 'furia-divina-radiante',
    name: 'Furia Radiante',
    desc: 'Tu furia arde con la luz purificadora de deidades sagradas de la justicia, el sol o la creación. Tu primer impacto en cada turno en furia inflige 1d6 + la mitad de tu nivel de bárbaro de daño radiante.',
    badge: '1d6 + 1/2 Nv Daño Radiante',
  },
  {
    id: 'furia-divina-necrotica',
    name: 'Furia Necrótica',
    desc: 'Tu furia canaliza la energía funesta y destructiva de dioses de la muerte, el inframundo o la guerra implacable. Tu primer impacto en cada turno en furia inflige 1d6 + la mitad de tu nivel de bárbaro de daño necrótico.',
    badge: '1d6 + 1/2 Nv Daño Necrótico',
  },
];

export const BEAST_NATURAL_WEAPON_OPTIONS: DecisionOption[] = [
  {
    id: 'bestia-mordisco',
    name: 'Mordisco Vampírico',
    desc: 'Tu mandíbula muta en colmillos bestiales. Inflige 1d8 de daño perforante + Fuerza. Una vez por turno, si tienes menos de la mitad de tus puntos de golpe máximos, recuperas puntos de golpe iguales a tu bonificador de competencia al impactar.',
    badge: '1d8 Perforante • Curación = Bonificador de Competencia',
  },
  {
    id: 'bestia-garras',
    name: 'Garras Desgarradoras',
    desc: 'Tus manos se transforman en garras temibles. Inflige 1d6 de daño cortante + Fuerza. Una vez en cada uno de tus turnos, cuando atacas con una garra usando la acción de Atacar, puedes realizar un ataque adicional con tus garras como parte de la misma acción.',
    badge: '1d6 Cortante • +1 Ataque Extra Gratis',
  },
  {
    id: 'bestia-cola',
    name: 'Cola Puntiaguda Defensiva',
    desc: 'Te brota una cola musculosa y espinosa con alcance de 10 pies. Inflige 1d8 de daño perforante + Fuerza. Como reacción cuando una criatura a 10 pies o menos te impacte con un ataque, puedes tirar 1d8 y sumarlo a tu CA para ese ataque, pudiendo hacer que falle.',
    badge: '1d8 Perforante • Alcance 10 pies • Reacción +1d8 CA',
  },
];

export const BEAST_SOUL_ADAPTATION_OPTIONS: DecisionOption[] = [
  {
    id: 'adaptacion-nado',
    name: 'Adaptación Acuática',
    desc: 'Desarrollas branquias y membranas: obtienes una velocidad de nado igual a tu velocidad a pie y puedes respirar bajo el agua indefinidamente.',
    badge: 'Velocidad de Nado • Respiración Acuática',
  },
  {
    id: 'adaptacion-escalada',
    name: 'Adaptación Arácnida',
    desc: 'Tus extremidades se adhieren a cualquier superficie: obtienes una velocidad de escalada igual a tu velocidad a pie y puedes escalar superficies difíciles, incluyendo moverte boca abajo por techos, sin necesidad de realizar pruebas de característica.',
    badge: 'Velocidad de Escalada • Desplazamiento por Techos',
  },
  {
    id: 'adaptacion-salto',
    name: 'Salto Propulsado',
    desc: 'Tus piernas concentran una fuerza colosal: cuando realizas un salto, puedes hacer una prueba de Fuerza (Atletismo) y extender la distancia del salto en un número de pies igual al total de tu tirada.',
    badge: 'Salto Extendido +Prueba de Atletismo en Pies',
  },
];

export const STORM_HERALD_ENVIRONMENTS: DecisionOption[] = [
  {
    id: 'tormenta-desierto',
    name: 'Desierto Abrasador',
    desc: 'Canalizas el fuego implacable de las dunas. Aura (10 pies): acción adicional inflige daño de fuego a las criaturas a 10 pies. Nv 6: resistencia al fuego. Nv 10: otorgas resistencia al fuego a aliados. Nv 14: reacción al recibir daño para infligir daño al atacante.',
    badge: 'Aura Ígnea • Daño de Fuego • Resistencia Ígnea',
  },
  {
    id: 'tormenta-mar',
    name: 'Mar Tormentoso',
    desc: 'Canalizas el rugido del océano y el rayo. Aura (10 pies): acción adicional obliga a una criatura a superar salvación de Destreza o sufrir daño de relámpago. Nv 6: resistencia a relámpago, respiras agua y 30 pies de nado.',
    badge: 'Aura de Rayos • Relámpago • Nado y Respiración',
  },
  {
    id: 'tormenta-tundra',
    name: 'Tundra Gélida',
    desc: 'Canalizas el frío glacial y la resistencia del hielo eterno. Aura (10 pies): acción adicional concede PG temporales a aliados. Nv 6: resistencia al frío. Nv 10: otorgas resistencia a frío a aliados.',
    badge: 'Aura Glacial • PG Temporales • Resistencia Frío',
  },
];

export const GIANT_ELEMENTAL_CLEAVER_OPTIONS: DecisionOption[] = [
  {
    id: 'cleaver-fuego',
    name: 'Fuego de Gigante',
    desc: 'Tu arma emana llamas abrasadoras. Inflige +1d6 de daño de fuego adicional. Gana la propiedad arrojadiza y regresa mágicamente a tu mano inmediatamente tras el ataque.',
    badge: '+1d6 Fuego • Arrojadiza Retornante',
  },
  {
    id: 'cleaver-frio',
    name: 'Escarcha de Gigante',
    desc: 'Tu arma se cubre de carámbanos glaciales. Inflige +1d6 de daño de frío adicional. Gana la propiedad arrojadiza y regresa instantáneamente a tu mano.',
    badge: '+1d6 Frío • Arrojadiza Retornante',
  },
  {
    id: 'cleaver-relampago',
    name: 'Relámpago de Gigante',
    desc: 'Tu arma chisporrotea con arcos eléctricos. Inflige +1d6 de daño de relámpago adicional. Gana la propiedad arrojadiza y retorna mágicamente al instante.',
    badge: '+1d6 Relámpago • Arrojadiza Retornante',
  },
  {
    id: 'cleaver-trueno',
    name: 'Trueno de las Cumbres',
    desc: 'Tu arma retumba con ondas de choque sísmicas. Inflige +1d6 de daño de trueno adicional. Gana la propiedad arrojadiza y regresa a tu mano al instante.',
    badge: '+1d6 Trueno • Arrojadiza Retornante',
  },
  {
    id: 'cleaver-acido',
    name: 'Ácido Corrosivo',
    desc: 'Tu arma rezuma jugos corrosivos primordiales. Inflige +1d6 de daño de ácido adicional. Gana la propiedad arrojadiza y regresa a tu mano al instante.',
    badge: '+1d6 Ácido • Arrojadiza Retornante',
  },
];

export const RUNE_KNIGHT_RUNES: DecisionOption[] = [
  { id: 'runa-nube', name: 'Runa de la Nube', desc: 'Pasiva: Ventaja en pruebas de Juego de Manos y Engaño. Activa: Como reacción al impactarte a ti o a un aliado a 30 pies, rediriges el ataque a otra criatura.', badge: 'Nv 3 • Reacción Deflectora' },
  { id: 'runa-fuego', name: 'Runa del Fuego', desc: 'Pasiva: Doblas tu competencia en pruebas con herramientas. Activa: Al impactar con un arma, convocas grilletes ígneos que infligen daño y apresan al rival.', badge: 'Nv 3 • Grilletes Ígneos' },
  { id: 'runa-escarcha', name: 'Runa de la Escarcha', desc: 'Pasiva: Ventaja en pruebas de Trato con Animales e Intimidación. Activa: Acción adicional para sumar +2 a pruebas y salvaciones de Fuerza y Constitución.', badge: 'Nv 3 • Baluarte Ártico' },
  { id: 'runa-piedra', name: 'Runa de la Piedra', desc: 'Pasiva: Ventaja en Perspicacia y visión en la oscuridad de 120 pies. Activa: Reacción cuando un enemigo termine su turno a 30 pies para sumirlo en letargo hipnótico.', badge: 'Nv 3 • Letargo Hipnótico' },
  { id: 'runa-colina', name: 'Runa de la Colina', desc: 'Pasiva: Ventaja en salvaciones contra veneno y resistencia al veneno. Activa: Acción adicional para ganar resistencia al daño físico.', badge: 'Nv 7 • Resistencia Física' },
  { id: 'runa-tormenta', name: 'Runa de la Tormenta', desc: 'Pasiva: Ventaja en Arcanos y no puedes ser sorprendido. Activa: Durante 1 minuto puedes usar tu reacción para otorgar ventaja o desventaja en cualquier d20.', badge: 'Nv 7 • Augurio de Tormenta' },
];

export const ARCANE_ARCHER_SHOTS: DecisionOption[] = [
  { id: 'disparo-desterrador', name: 'Disparo Desterrador', desc: 'Al impactar, obligas al objetivo a hacer salvación de Carisma o ser desterrado temporalmente.', badge: 'Destierro Temporal' },
  { id: 'disparo-bramido', name: 'Disparo de Bramido', desc: 'Al impactar, detona en una onda expansiva de fuerza que inflige daño adicional al objetivo y criaturas adyacentes.', badge: 'Área de Fuerza' },
  { id: 'disparo-enredador', name: 'Disparo Enredador', desc: 'Zarcillos espinosos aprisionan a la víctima: sufre daño de veneno y su velocidad se reduce.', badge: 'Zarcillos Espinosos' },
  { id: 'disparo-perforante', name: 'Disparo Perforante', desc: 'La flecha se transforma en una línea etérea que atraviesa objetos y criaturas.', badge: 'Línea Penetrante' },
  { id: 'disparo-buscador', name: 'Disparo Buscador', desc: 'La flecha busca a su presa guiada por magia: ignora cobertura y no requiere línea de visión directa.', badge: 'Proyectil Guiado' },
  { id: 'disparo-sombrio', name: 'Disparo Sombrío', desc: 'Magia de sombras teje ceguera sobre la víctima y le inflige daño psíquico.', badge: 'Ceguera Sombría' },
  { id: 'disparo-debilitador', name: 'Disparo Debilitador', desc: 'Magia nigromántica drena la vitalidad y reduce a la mitad el daño de los ataques del rival.', badge: 'Debilidad Nigromántica' },
  { id: 'disparo-fascinante', name: 'Disparo Fascinante', desc: 'Hechiza al objetivo y le impide atacar a tus aliados durante su siguiente turno.', badge: 'Encanto Psíquico' },
];

export const DRACONIC_ANCESTRY_OPTIONS: DecisionOption[] = [
  { id: 'dragon-rojo', name: 'Dragón Rojo', desc: 'Afinidad con el Fuego abrasador. A nivel 6 sumas tu Carisma al daño de conjuros de fuego y ganas resistencia.', badge: 'Elemento: Fuego' },
  { id: 'dragon-oro', name: 'Dragón de Oro', desc: 'Afinidad con el Fuego purificador y la justicia dorada. Resistencia y potencia ígnea.', badge: 'Elemento: Fuego' },
  { id: 'dragon-laton', name: 'Dragón de Latón', desc: 'Afinidad con el Fuego ardiente del desierto. Resistencia y potencia ígnea.', badge: 'Elemento: Fuego' },
  { id: 'dragon-azul', name: 'Dragón Azul', desc: 'Afinidad con el Relámpago y las tormentas de arena. Bonificador al daño de relámpago.', badge: 'Elemento: Relámpago' },
  { id: 'dragon-bronce', name: 'Dragón de Bronce', desc: 'Afinidad con el Relámpago costero y marítimo. Resistencia y daño eléctrico.', badge: 'Elemento: Relámpago' },
  { id: 'dragon-blanco', name: 'Dragón Blanco', desc: 'Afinidad con el Frío polar implacable. Bonificador al daño de frío y resistencia ártica.', badge: 'Elemento: Frío' },
  { id: 'dragon-plata', name: 'Dragón de Plata', desc: 'Afinidad con el Frío noble y la escarcha celestial. Resistencia y daño de frío.', badge: 'Elemento: Frío' },
  { id: 'dragon-negro', name: 'Dragón Negro', desc: 'Afinidad con el Ácido corrosivo de ciénagas oscuras. Bonificador al daño de ácido.', badge: 'Elemento: Ácido' },
  { id: 'dragon-cobre', name: 'Dragón de Cobre', desc: 'Afinidad con el Ácido y el ingenio terrenal. Resistencia y daño de ácido.', badge: 'Elemento: Ácido' },
  { id: 'dragon-verde', name: 'Dragón Verde', desc: 'Afinidad con el Veneno engañoso de bosques primigenios. Daño y resistencia a veneno.', badge: 'Elemento: Veneno' },
];

export const DIVINE_SOUL_AFFINITIES: DecisionOption[] = [
  { id: 'bueno', name: 'Afinidad Buena (Curar Heridas)', desc: 'Afinidad con la benevolencia y la curación. Aprendes el conjuro Curar Heridas de forma gratuita.', badge: 'Curar Heridas' },
  { id: 'maligno', name: 'Afinidad Maligna (Infligir Heridas)', desc: 'Afinidad con la perdición y la necrosis. Aprendes el conjuro Infligir Heridas de forma gratuita.', badge: 'Infligir Heridas' },
  { id: 'ley', name: 'Afinidad de Ley (Bendición)', desc: 'Afinidad con el orden cósmico y la justicia. Aprendes el conjuro Bendición de forma gratuita.', badge: 'Bendición' },
  { id: 'caos', name: 'Afinidad de Caos (Saeta Guía)', desc: 'Afinidad con la entropía primordial y el destino cambiante. Aprendes el conjuro Saeta Guía de forma gratuita.', badge: 'Saeta Guía' },
  { id: 'neutralidad', name: 'Afinidad Neutral (Protección contra Mal y Bien)', desc: 'Afinidad con el equilibrio cósmico. Aprendes el conjuro de protección de forma gratuita.', badge: 'Protección' },
];

export const LUNAR_SORCERY_PHASES: DecisionOption[] = [
  { id: 'luna-llena', name: 'Luna Llena', desc: 'Escuelas de Abjuración y Adivinación. Conjuro gratuito: Escudo de Fe. Ventaja en Investigación y Percepción.', badge: 'Luz Radiante & Protección' },
  { id: 'luna-nueva', name: 'Luna Nueva', desc: 'Escuelas de Ilusión y Nigromancia. Conjuro gratuito: Falsa Vida. Ventaja en Sigilo.', badge: 'Sombras & Engaño' },
  { id: 'luna-creciente', name: 'Luna Creciente', desc: 'Escuelas de Transmutación y Conjuración. Conjuro gratuito: Rayo de Enfermedad. Resistencia a daño radiante y necrótico.', badge: 'Mutación & Arcano' },
];

export const LAND_CIRCLE_BIOMES: DecisionOption[] = [
  { id: 'artico', name: 'Ártico', desc: 'Conjuros siempre preparados: Nv 3 (Caminar sobre el Agua, Retener Persona), Nv 5 (Tormenta de Granizo, Ralentizar), Nv 7 (Libertad de Movimiento, Tormenta de Hielo), Nv 9 (Comunión con la Naturaleza, Cono de Frío).', badge: 'Frío & Hielo' },
  { id: 'costa', name: 'Costa', desc: 'Conjuros siempre preparados: Nv 3 (Imagen Espejada, Paso Brumoso), Nv 5 (Caminar sobre el Agua, Respiración Acuática), Nv 7 (Controlar el Agua, Libertad de Movimiento), Nv 9 (Conjurar Elemental, Escudriñar).', badge: 'Agua & Bruma' },
  { id: 'desierto', name: 'Desierto', desc: 'Conjuros siempre preparados: Nv 3 (Borrón, Silencio), Nv 5 (Crear Comida y Agua, Protección contra la Energía), Nv 7 (Marchitar, Plaga de Insectos), Nv 9 (Muro de Piedra, Nube Mortal).', badge: 'Fuego & Resistencia' },
  { id: 'bosque', name: 'Bosque', desc: 'Conjuros siempre preparados: Nv 3 (Piel Robusta, Trepar cual Arácnido), Nv 5 (Llamar al Relámpago, Crecimiento Vegetal), Nv 7 (Adivinación, Libertad de Movimiento), Nv 9 (Comunión con la Naturaleza, Reencarnar).', badge: 'Vida & Vegetación' },
  { id: 'pradera', name: 'Pradera', desc: 'Conjuros siempre preparados: Nv 3 (Invisibilidad, Pasar sin Huella), Nv 5 (Luz Diurna, Aceleración), Nv 7 (Adivinación, Libertad de Movimiento), Nv 9 (Pasacalles, Sueño Telúrico).', badge: 'Velocidad & Evasión' },
  { id: 'montana', name: 'Montaña', desc: 'Conjuros siempre preparados: Nv 3 (Trepar cual Arácnido, Salto), Nv 5 (Relámpago, Fundirse con la Piedra), Nv 7 (Piel Pétrea, Muro de Piedra), Nv 9 (Pasar Muro, Tormenta Glacial).', badge: 'Roca & Trueno' },
  { id: 'pantano', name: 'Pantano', desc: 'Conjuros siempre preparados: Nv 3 (Oscuridad, Flecha Ácida de Melf), Nv 5 (Caminar sobre el Agua, Nube Hedionda), Nv 7 (Marchitar, Localizar Criatura), Nv 9 (Plaga de Insectos, Escudriñar).', badge: 'Ácido & Podredumbre' },
  { id: 'inframundo', name: 'Inframundo', desc: 'Conjuros siempre preparados: Nv 3 (Trepar cual Arácnido, Telaraña), Nv 5 (Forma Gaseosa, Luz Diurna), Nv 7 (Invisibilidad Mayor, Modelar Piedra), Nv 9 (Nube Mortal, Apariencia).', badge: 'Oscuridad & Criptas' },
];

export const RANGER_FAVORED_ENEMIES: DecisionOption[] = [
  { id: 'bestias', name: 'Bestias', desc: 'Ventaja en pruebas de Supervivencia para rastrear y en Saber para recordar información sobre bestias.', badge: 'Fauna Silvestre' },
  { id: 'feéricos', name: 'Feéricos', desc: 'Ventaja al rastrear y conocer duendes, ninfas, sátiros y seres del Feywild.', badge: 'Seres Feéricos' },
  { id: 'humanoides', name: 'Humanoides', desc: 'Eliges dos etnias o razas humanoides (ej. Orcos y Trasgos, o Elfos y Humanos).', badge: 'Humanoides' },
  { id: 'monstruosidades', name: 'Monstruosidades', desc: 'Ventaja contra quimeras, grifos, mantícoras y aberraciones híbridas.', badge: 'Monstruos' },
  { id: 'no-muertos', name: 'No-Muertos', desc: 'Ventaja contra esqueletos, zombis, vampiros, necrófagos y espectros.', badge: 'Nigromancia' },
  { id: 'dragones', name: 'Dragones', desc: 'Ventaja contra dragones cromáticos, metálicos y sierpes legendarias.', badge: 'Dracónico' },
  { id: 'aberraciones', name: 'Aberraciones', desc: 'Ventaja contra azotamentes, contempladores y entidades del Reino Lejano.', badge: 'Reino Lejano' },
  { id: 'infernales', name: 'Infernales', desc: 'Ventaja contra demonios del Abismo y diablos de los Nueve Infiernos.', badge: 'Planos Infernales' },
  { id: 'elementales', name: 'Elementales', desc: 'Ventaja contra criaturas de Fuego, Agua, Tierra y Aire.', badge: 'Planos Elementales' },
  { id: 'gigantes', name: 'Gigantes', desc: 'Ventaja contra ogros, trolls, gigantes de las colinas, escarcha, fuego y tormenta.', badge: 'Gigantes' },
];

export const RANGER_NATURAL_EXPLORER: DecisionOption[] = [
  { id: 'artico', name: 'Ártico', desc: 'El terreno difícil no ralentiza el viaje de tu grupo en la tundra y nieve. No puedes perderte salvo por medios mágicos.', badge: 'Nieve & Hielo' },
  { id: 'costa', name: 'Costa', desc: 'Ventaja y navegación perfecta en litorales marítimos y archipiélagos.', badge: 'Playas & Marismas' },
  { id: 'desierto', name: 'Desierto', desc: 'Sobrevives sin penalizadores en dunas áridas, calor extremo y tormentas de arena.', badge: 'Arenas & Cañones' },
  { id: 'bosque', name: 'Bosque', desc: 'Movimiento sigiloso y comida abundante en arboledas densas y selvas.', badge: 'Arboledas & Selvas' },
  { id: 'pradera', name: 'Pradera', desc: 'Visión y rastreo ilimitados en llanuras abiertas y sabanas.', badge: 'Llanuras & Sabanas' },
  { id: 'montana', name: 'Montaña', desc: 'Escalada sin fatiga y paso seguro por riscos y cordilleras escarpadas.', badge: 'Picos & Cordilleras' },
  { id: 'pantano', name: 'Pantano', desc: 'Inmune al terreno enfangado y cenagoso de marismas y ciénagas.', badge: 'Ciénagas & Lodazales' },
  { id: 'inframundo', name: 'Inframundo', desc: 'Orientación infalible en la profunda red de cavernas subterráneas.', badge: 'Cavernas & Criptas' },
];

export const RANGER_FIGHTING_STYLES: DecisionOption[] = [
  { id: 'tiro-arco', name: 'Tiro con Arco', desc: '+2 a las tiradas de ataque con armas a distancia.', badge: '+2 Ataque a Distancia' },
  { id: 'defensa', name: 'Defensa', desc: '+1 a tu Clase de Armadura mientras vistas armadura.', badge: '+1 CA' },
  { id: 'duelo', name: 'Duelo', desc: '+2 al daño cuando empuñas un arma a una mano y ninguna otra.', badge: '+2 Daño a Una Mano' },
  { id: 'dos-armas', name: 'Combate con Dos Armas', desc: 'Suma tu bonificador de característica al daño del ataque de acción adicional con la segunda arma.', badge: 'Dos Armas Completo' },
  { id: 'lucha-ciegas', name: 'Lucha a Ciegas', desc: 'Posees vista a ciegas con un radio de 10 pies. Puedes ver criaturas invisibles y en oscuridad total.', badge: 'Vista a Ciegas 10 pies' },
  { id: 'tecnica-druida', name: 'Técnica del Druida', desc: 'Aprendes dos trucos a tu elección de la lista de conjuros de Druida. Cuentan como conjuros de explorador y usan tu Sabiduría.', badge: '2 Trucos de Druida' },
];

export const HUNTER_PREY_OPTIONS: DecisionOption[] = [
  { id: 'asesino-colosos', name: 'Asesino de Colosos', desc: 'Una vez por turno al impactar a una criatura con un arma, infliges +1d8 de daño adicional si la criatura está por debajo de sus puntos de golpe máximos.', badge: '+1d8 Daño Arma' },
  { id: 'cortador-hordas', name: 'Cortador de Hordas', desc: 'Una vez en cada uno de tus turnos al hacer un ataque de arma, puedes realizar otro ataque con la misma arma contra una criatura diferente a 5 pies de la original.', badge: 'Ataque Extra Adyacente' },
  { id: 'asesino-gigantes', name: 'Asesino de Gigantes', desc: 'Cuando una criatura Grande o mayor a 5 pies te ataque y falle, puedes usar tu reacción para atacarla de inmediato con un arma.', badge: 'Reacción Contraataque' },
];

export const HUNTER_DEFENSIVE_TACTICS: DecisionOption[] = [
  { id: 'escapar-horda', name: 'Escapar de la Horda', desc: 'Las criaturas enemigas sufren desventaja en todas las tiradas de ataques de oportunidad contra ti.', badge: 'Desventaja Oportunidad' },
  { id: 'defensa-ataque-multiple', name: 'Defensa contra Ataques Múltiples', desc: 'Cuando una criatura te impacta con un ataque, ganas +4 a tu CA contra todos los ataques subsiguientes de esa criatura en el turno.', badge: '+4 CA vs Mismo Rival' },
  { id: 'voluntad-acero', name: 'Voluntad de Acero', desc: 'Tienes ventaja en todas las tiradas de salvación contra el efecto de ser asustado.', badge: 'Ventaja vs Miedo' },
];

export const HUNTER_MULTIATTACK_OPTIONS: DecisionOption[] = [
  { id: 'andanada', name: 'Andanada', desc: 'Como acción, realizas un ataque a distancia contra cualquier cantidad de criaturas en un radio de 10 pies de un punto visible dentro del alcance de tu arma.', badge: 'Lluvia de Flechas (Área)' },
  { id: 'ataque-torbellino', name: 'Ataque en Torbellino', desc: 'Como acción, realizas un ataque cuerpo a cuerpo contra cualquier número de criaturas a 5 pies de ti.', badge: 'Barrido Circular CaC' },
];

export const HUNTER_SUPERIOR_DEFENSE: DecisionOption[] = [
  { id: 'evasion', name: 'Evasión', desc: 'Cuando sufres un efecto que requiere salvación de Destreza para mitigar el daño, no recibes daño si superas la tirada y solo la mitad si fallas.', badge: 'Evasión Destreza' },
  { id: 'esquiva-asombrosa', name: 'Esquiva Asombrosa', desc: 'Cuando un atacante visible te impacta con un ataque, puedes usar tu reacción para reducir a la mitad el daño que recibes.', badge: 'Reacción Mitad Daño' },
  { id: 'oponerse-marea', name: 'Oponerse a la Marea', desc: 'Cuando una criatura hostil falla un ataque cuerpo a cuerpo contra ti, puedes usar tu reacción para obligarla a repetir ese mismo ataque contra otro enemigo.', badge: 'Reacción Redirigir Ataque' },
];

export const DRAKEWARDEN_DRACONIC_ESSENCE: DecisionOption[] = [
  { id: 'fuego', name: 'Fuego', desc: 'El drake emana llamas ardientes. Sus mordiscos infligen +1d6 daño de fuego y tiene inmunidad al fuego.', badge: 'Esencia Ígnea' },
  { id: 'frio', name: 'Frío', desc: 'El drake irradia escarcha polar. Sus mordiscos infligen +1d6 daño de frío y tiene inmunidad al frío.', badge: 'Esencia Glacial' },
  { id: 'relampago', name: 'Relámpago', desc: 'El drake chisporrotea con arcos eléctricos. Sus mordiscos infligen +1d6 daño de relámpago y tiene inmunidad al relámpago.', badge: 'Esencia Eléctrica' },
  { id: 'acido', name: 'Ácido', desc: 'El drake supura jugos corrosivos. Sus mordiscos infligen +1d6 daño de ácido y tiene inmunidad al ácido.', badge: 'Esencia Corrosiva' },
  { id: 'veneno', name: 'Veneno', desc: 'El drake exuda toxinas letales. Sus mordiscos infligen +1d6 daño de veneno y tiene inmunidad al veneno.', badge: 'Esencia Venenosa' },
];

export const SAMURAI_BONUS_SKILLS: DecisionOption[] = [
  { id: 'historia', name: 'Historia', desc: 'Conocimiento sobre linajes nobles, guerras legendarias y dinastías antiguas.', badge: 'Inteligencia' },
  { id: 'perspicacia', name: 'Perspicacia', desc: 'Intuir las verdaderas intenciones y honor de tus interlocutores.', badge: 'Sabiduría' },
  { id: 'actuacion', name: 'Actuación', desc: 'Demostrar el porte marcial y ceremonias cortesanas ante la corte.', badge: 'Carisma' },
  { id: 'persuasion', name: 'Persuasión', desc: 'Influir con cortesía implacable y diplomacia regia.', badge: 'Carisma' },
];

export const ALL_5E_LANGUAGES_OPTIONS: DecisionOption[] = [
  { id: 'comun', name: 'Común', desc: 'El idioma universal hablado por casi todas las civilizaciones humanoides.' },
  { id: 'elfico', name: 'Élfico', desc: 'Lengua fluida y melodiosa con intrincadas inflexiones poéticas.' },
  { id: 'enano', name: 'Enano', desc: 'Idioma gutural y resonante tallado en runas angulares.' },
  { id: 'gigante', name: 'Gigante', desc: 'Dialecto ancestral derivado del enano, hablado por gigantes y ogros.' },
  { id: 'gnomo', name: 'Gnomo', desc: 'Lenguaje técnico, curioso y vivaz con amplio vocabulario académico.' },
  { id: 'trasgo', name: 'Trasgo', desc: 'Habla áspera y rápida compartida por goblins, hobgoblins y osgos.' },
  { id: 'mediano', name: 'Mediano', desc: 'Lengua cálida y hospitalaria, rara vez escrita en libros formales.' },
  { id: 'orco', name: 'Orco', desc: 'Lenguaje contundente y marcial de fonética dura.' },
  { id: 'abisal', name: 'Abisal', desc: 'La lengua caótica y resonante de los demonios del Abismo.' },
  { id: 'celestial', name: 'Celestial', desc: 'Idioma sacro y majestuoso de los ángeles y planos superiores.' },
  { id: 'draconico', name: 'Dracónico', desc: 'Uno de los idiomas más antiguos del multiverso, hablado por dragones y hechiceros.' },
  { id: 'habla-profunda', name: 'Habla Profunda', desc: 'Lengua alienígena y perturbadora de los azotamentes y el Reino Lejano.' },
  { id: 'infernal', name: 'Infernal', desc: 'La lengua legal y calculadora de los diablos de los Nueve Infiernos.' },
  { id: 'primordial', name: 'Primordial', desc: 'El idioma de los elementales: incluye dialectos Áurico, Acuano, Ígneo y Terrano.' },
  { id: 'silvano', name: 'Silvano', desc: 'La lengua mística y caprichosa de las hadas y seres del Feywild.' },
  { id: 'infracomun', name: 'Infracomún', desc: 'El idioma de intercambio del Inframundo.' },
];

export function getMulticlassCantripOptions(): DecisionOption[] {
  return OFFICIAL_SPELLS_COMPENDIUM
    .filter((s) => s.level === 0)
    .map((s) => ({
      id: `cantrip-${s.id || s.name.toLowerCase().replace(/\s+/g, '-')}`,
      name: `${s.name}`,
      desc: `[${s.school}] Alcance: ${s.range} • Lanzamiento: ${s.castingTime}. ${s.description}`,
      badge: `Truco • ${s.school}`,
    }));
}

export function getDruidCantripOptions(): DecisionOption[] {
  return OFFICIAL_SPELLS_COMPENDIUM
    .filter((s) => s.level === 0 && (s.classes || []).some((c) => c.toLowerCase().includes('druid') || c.toLowerCase().includes('druida')))
    .map((s) => ({
      id: `druid-cantrip-${s.id || s.name.toLowerCase().replace(/\s+/g, '-')}`,
      name: `${s.name}`,
      desc: `[${s.school}] Alcance: ${s.range} • Lanzamiento: ${s.castingTime}. ${s.description}`,
      badge: `Truco de Druida`,
    }));
}

export function getWizardCantripOptions(): DecisionOption[] {
  return OFFICIAL_SPELLS_COMPENDIUM
    .filter((s) => s.level === 0 && (s.classes || []).some((c) => c.toLowerCase().includes('wizard') || c.toLowerCase().includes('mago')))
    .map((s) => ({
      id: `wizard-cantrip-${s.id || s.name.toLowerCase().replace(/\s+/g, '-')}`,
      name: `${s.name}`,
      desc: `[${s.school}] Alcance: ${s.range} • Lanzamiento: ${s.castingTime}. ${s.description}`,
      badge: `Truco de Mago`,
    }));
}

export function getNecromancyCantripOptions(): DecisionOption[] {
  return OFFICIAL_SPELLS_COMPENDIUM
    .filter((s) => s.level === 0 && (s.school.toLowerCase().includes('nigro') || s.school.toLowerCase().includes('necro')))
    .map((s) => ({
      id: `necro-cantrip-${s.id || s.name.toLowerCase().replace(/\s+/g, '-')}`,
      name: `${s.name}`,
      desc: `[Truco • ${s.school}] Alcance: ${s.range} • Lanzamiento: ${s.castingTime}. ${s.description}`,
      badge: 'Truco de Nigromancia',
    }));
}

export function getWizardHighLevelSpellOptions(): DecisionOption[] {
  return OFFICIAL_SPELLS_COMPENDIUM
    .filter((s) => s.level >= 6 && s.level <= 9 && (s.classes || []).some((c) => c.toLowerCase().includes('wizard') || c.toLowerCase().includes('mago')))
    .map((s) => ({
      id: `arcana-mastery-${s.id || s.name.toLowerCase().replace(/\s+/g, '-')}`,
      name: `${s.name}`,
      desc: `[Nivel ${s.level} • ${s.school}] Alcance: ${s.range} • Lanzamiento: ${s.castingTime}. ${s.description}`,
      badge: `Nv ${s.level} Mago`,
    }));
}

export const BLADESINGING_WEAPONS_OPTIONS: DecisionOption[] = [
  { id: 'rapier', name: 'Estoque', desc: '1d8 perforante, sutil. Ideal para daño ágil con Destreza.', badge: '1d8 Sutil' },
  { id: 'scimitar', name: 'Cimitarra', desc: '1d6 cortante, sutil, ligera. Permite combate con dos armas.', badge: '1d6 Sutil/Ligera' },
  { id: 'shortsword', name: 'Espada Corta', desc: '1d6 perforante, sutil, ligera. Versátil y clásica.', badge: '1d6 Sutil/Ligera' },
  { id: 'longsword', name: 'Espada Larga', desc: '1d8 cortante (1d10 versátil). Estilo clásico de espadachín élfico a una mano.', badge: '1d8 Versátil' },
  { id: 'whip', name: 'Látigo', desc: '1d4 cortante, sutil, alcance 10 pies. Permite atacar fuera del alcance cuerpo a cuerpo del rival.', badge: '1d4 Alcance 10 pies' },
  { id: 'dagger', name: 'Daga', desc: '1d4 perforante, sutil, ligera, arrojadiza (20/60 pies).', badge: '1d4 Arrojadiza' },
];

export function getWizardMasterySpellOptions(): DecisionOption[] {
  return OFFICIAL_SPELLS_COMPENDIUM
    .filter((s) => (s.level === 1 || s.level === 2) && (s.classes || []).some((c) => c.toLowerCase().includes('wizard') || c.toLowerCase().includes('mago')))
    .map((s) => ({
      id: `mastery-${s.id || s.name.toLowerCase().replace(/\s+/g, '-')}`,
      name: `${s.name}`,
      desc: `[Nivel ${s.level} • ${s.school}] Alcance: ${s.range} • ${s.description}`,
      badge: `Nv ${s.level} Mago (A voluntad)`,
    }));
}

export function getWizardSignatureSpellOptions(): DecisionOption[] {
  return OFFICIAL_SPELLS_COMPENDIUM
    .filter((s) => s.level === 3 && (s.classes || []).some((c) => c.toLowerCase().includes('wizard') || c.toLowerCase().includes('mago')))
    .map((s) => ({
      id: `signature-${s.id || s.name.toLowerCase().replace(/\s+/g, '-')}`,
      name: `${s.name}`,
      desc: `[Nivel ${s.level} • ${s.school}] Alcance: ${s.range} • ${s.description}`,
      badge: `Nv 3 Mago (1/descanso gratis)`,
    }));
}

export function getMagicalSecretsSpellOptions(maxLevel: number): DecisionOption[] {
  return OFFICIAL_SPELLS_COMPENDIUM
    .filter((s) => s.level > 0 && s.level <= maxLevel)
    .map((s) => ({
      id: `secret-${s.id || s.name.toLowerCase().replace(/\s+/g, '-')}`,
      name: `${s.name}`,
      desc: `[Nivel ${s.level} • ${s.school}] Alcance: ${s.range} • Lanzamiento: ${s.castingTime} • ${(s.classes || []).join(', ')}. ${s.description}`,
      badge: `Nv ${s.level} • ${s.school}`,
    }));
}

export const BARD_SWORDS_FIGHTING_STYLES: DecisionOption[] = [
  {
    id: 'estilo-duelo',
    name: 'Duelo',
    desc: 'Cuando empuñas un arma cuerpo a cuerpo en una mano y ninguna otra arma, ganas un bonificador de +2 a las tiradas de daño con esa arma.',
    badge: '+2 Daño con Arma de 1 Mano',
  },
  {
    id: 'estilo-dos-armas',
    name: 'Combate con Dos Armas',
    desc: 'Cuando luchas con dos armas, puedes sumar tu modificador de característica al daño del segundo ataque realizado con tu acción adicional.',
    badge: 'Suma Modificador a Mano Torpe',
  },
];

export const ALL_5E_SKILLS_OPTIONS: DecisionOption[] = [
  { id: 'acrobacias', name: 'Acrobacias', desc: 'Mantener el equilibrio en superficies estrechas o resbaladizas y realizar maniobras gimnásticas.' },
  { id: 'arcanos', name: 'Arcanos', desc: 'Conocimiento sobre magia, conjuros, objetos mágicos, planos de existencia y tradiciones arcanas.' },
  { id: 'atletismo', name: 'Atletismo', desc: 'Escalar, saltar, nadar y realizar pruebas de fuerza física sostenida o agarres.' },
  { id: 'engano', name: 'Engaño', desc: 'Ocultar la verdad mediante mentiras convincentes, disfraces, medias verdades o intenciones veladas.' },
  { id: 'historia', name: 'Historia', desc: 'Recordar hechos históricos, reinos legendarios, dinastías, guerras antiguas y civilizaciones caídas.' },
  { id: 'interpretacion', name: 'Interpretación', desc: 'Cautivar a un público mediante la música, el canto, la poesía, la danza o la oratoria teatral.' },
  { id: 'intimidacion', name: 'Intimidación', desc: 'Influir en otros mediante amenazas veladas, hostilidad física o demostraciones de poderío.' },
  { id: 'investigacion', name: 'Investigación', desc: 'Deducir pistas, buscar mecanismos ocultos, resolver enigmas o inspeccionar documentos antiguos.' },
  { id: 'juego-de-manos', name: 'Juego de Manos', desc: 'Hurtar bolsillos, ocultar pequeños objetos en la manga o realizar trucos de prestidigitación.' },
  { id: 'medicina', name: 'Medicina', desc: 'Diagnosticar enfermedades, estabilizar a aliados moribundos o identificar causas de muerte.' },
  { id: 'naturaleza', name: 'Naturaleza', desc: 'Conocimiento sobre flora, fauna, ciclos biológicos, terrenos naturales y clima.' },
  { id: 'percepcion', name: 'Percepción', desc: 'Detectar ruidos sutiles, emboscadas ocultas, olores y peligros sensoriales en el entorno.' },
  { id: 'perspicacia', name: 'Perspicacia', desc: 'Leer el lenguaje corporal ajeno, intuir verdaderas intenciones y detectar mentiras.' },
  { id: 'persuasion', name: 'Persuasión', desc: 'Negociar con tacto, conseguir favores y apelar a la razón con simpatía y elocuencia.' },
  { id: 'religion', name: 'Religión', desc: 'Conocimiento sobre dioses, cultos, símbolos sagrados, plegarias y jerarquías eclesiásticas.' },
  { id: 'sigilo', name: 'Sigilo', desc: 'Moverse sin hacer ruido y esconderse entre las sombras o coberturas sin ser detectado.' },
  { id: 'supervivencia', name: 'Supervivencia', desc: 'Rastrear presas, hallar comida y agua en la espesura y predecir el clima silvestre.' },
  { id: 'trato-con-animales', name: 'Trato con Animales', desc: 'Calmar bestias salvajes, controlar monturas y percibir intenciones de animales.' },
];

export const ROGUE_EXPERTISE_OPTIONS: DecisionOption[] = [
  ...ALL_5E_SKILLS_OPTIONS,
  {
    id: 'herramientas-ladron',
    name: 'Herramientas de Ladrón',
    desc: 'Desarmar trampas complejas y forzar cerraduras. Tu bonificador de competencia se duplica para cualquier prueba con estas herramientas.',
  },
];

export function getSpiritSessionSpellOptions(maxLevel: number): DecisionOption[] {
  return OFFICIAL_SPELLS_COMPENDIUM
    .filter((s) => s.level > 0 && s.level <= maxLevel && (s.school.toLowerCase().includes('adivin') || s.school.toLowerCase().includes('divinat') || s.school.toLowerCase().includes('nigro') || s.school.toLowerCase().includes('necro')))
    .map((s) => ({
      id: `spirit-${s.id || s.name.toLowerCase().replace(/\s+/g, '-')}`,
      name: `${s.name}`,
      desc: `[Nivel ${s.level} • ${s.school}] Alcance: ${s.range} • Lanzamiento: ${s.castingTime}. ${s.description}`,
      badge: `Nv ${s.level} • ${s.school}`,
    }));
}

export interface PendingClassDecision {
  id: string;
  title: string;
  description: string;
  countNeeded: number;
  options: DecisionOption[];
  canSwap?: boolean;
  swapLabel?: string;
  alreadyChosen?: string[];
}

export function getClassDecisionsForLevel(
  className: string,
  subclass: string | undefined,
  currentLevel: number,
  newLevel: number,
  existingDecisions: Record<string, any> = {}
): PendingClassDecision[] {
  const norm = (className || '').toLowerCase();
  const subNorm = (subclass || '').toLowerCase();
  const results: PendingClassDecision[] = [];

  const allKnownFightingStyles = Array.from(
    new Set([
      ...((existingDecisions['fighterFightingStyle_1'] as string[]) || []),
      ...((existingDecisions['paladinFightingStyle_2'] as string[]) || []),
      ...((existingDecisions['rangerFightingStyle_2'] as string[]) || []),
      ...((existingDecisions['swordsFightingStyle'] as string[]) || []),
      ...((existingDecisions['championSecondFightingStyle'] as string[]) || []),
      ...(existingDecisions['fightingStyle']
        ? Array.isArray(existingDecisions['fightingStyle'])
          ? existingDecisions['fightingStyle']
          : [existingDecisions['fightingStyle']]
        : []),
    ])
  );

  const isFourElements = subNorm.includes('cuatro elementos') || subNorm.includes('cuatro-elementos') || subNorm.includes('four elements') || subNorm.includes('four-elements');
  if ((norm.includes('monje') || norm.includes('monk')) && isFourElements) {
    if (newLevel === 3 || newLevel === 6 || newLevel === 11 || newLevel === 17) {
      const allowed = ELEMENTAL_DISCIPLINES.filter((d) => d.minLevel <= newLevel);
      const chosen = (existingDecisions['elementalDisciplines'] as string[]) || [];
      results.push({
        id: 'elementalDisciplines',
        title: 'Disciplinas de los Cuatro Elementos (Monje)',
        description:
          newLevel === 3
            ? 'A nivel 3 aprendes "Sintonía Elemental" (automática) más 1 disciplina elemental adicional a tu elección.'
            : `A nivel ${newLevel} aprendes 1 nueva disciplina elemental permitida para tu nivel. Además, puedes intercambiar una que ya conozcas.`,
        countNeeded: 1,
        options: allowed,
        canSwap: newLevel > 3 && chosen.length > 0,
        swapLabel: 'Reemplazar 1 disciplina elemental conocida por otra',
        alreadyChosen: chosen,
      });
    }
  }

  const isKensei = subNorm.includes('kensei');
  if ((norm.includes('monje') || norm.includes('monk')) && isKensei) {
    if (newLevel === 3 || newLevel === 6 || newLevel === 11 || newLevel === 17) {
      const chosen = (existingDecisions['kenseiWeapons'] as string[]) || [];
      results.push({
        id: 'kenseiWeapons',
        title: 'Armas de Kensei (Monje)',
        description:
          newLevel === 3
            ? 'Elige 2 armas (1 cuerpo a cuerpo y 1 a distancia) que se convertirán en tus armas de monje Kensei.'
            : `A nivel ${newLevel} dominas 1 nueva arma de Kensei adicional.`,
        countNeeded: newLevel === 3 ? 2 : 1,
        options: KENSEI_WEAPON_OPTIONS,
        alreadyChosen: chosen,
      });
    }
    if (newLevel === 3) {
      results.push({
        id: 'kenseiTool_3',
        title: 'Herramienta Artística de Kensei (Nivel 3)',
        description: 'Elige competencia con útiles de pintor o herramientas de caligrafía para cultivar tu mente y espíritu.',
        countNeeded: 1,
        options: KENSEI_TOOL_OPTIONS,
        alreadyChosen: (existingDecisions['kenseiTool_3'] as string[]) || [],
      });
    }
  }

  const isAscendantDragon = subNorm.includes('dragon') || subNorm.includes('dragón') || subNorm.includes('ascendant');
  if ((norm.includes('monje') || norm.includes('monk')) && isAscendantDragon && newLevel === 3) {
    results.push({
      id: 'ascendantDragonLanguage_3',
      title: 'Discípulo Dracónico: Idioma Adicional (Nivel 3)',
      description: 'Aprendes a hablar, leer y escribir Dracónico (o cualquier otro idioma a tu elección si ya lo conoces).',
      countNeeded: 1,
      options: ASCENDANT_DRAGON_LANGUAGES,
      alreadyChosen: (existingDecisions['ascendantDragonLanguage_3'] as string[]) || [],
    });
  }

  const isBarbarian = norm.includes('barbaro') || norm.includes('bárbaro') || norm.includes('barbarian');
  if (isBarbarian) {
    if (newLevel === 3 || newLevel === 10) {
      const decisionKey = `primalKnowledge_${newLevel}`;
      const chosen = (existingDecisions[decisionKey] as string[]) || [];
      results.push({
        id: decisionKey,
        title: `Conocimiento Primitivo (Bárbaro Nivel ${newLevel})`,
        description: 'Regla Opcional de Tasha: Ganas competencia en una habilidad adicional de la lista de bárbaro a tu elección.',
        countNeeded: 1,
        options: BARBARIAN_PRIMAL_KNOWLEDGE_OPTIONS,
        alreadyChosen: chosen,
      });
    }

    if (subNorm.includes('totem') || subNorm.includes('totémico') || subNorm.includes('totemico')) {
      if (newLevel === 3) {
        results.push({
          id: 'totemSpirit3',
          title: 'Espíritu Totémico (Guerrero Totémico Nivel 3)',
          description: 'Elige el espíritu animal guía para tu Furia: Oso, Águila, Lobo, Alce o Tigre.',
          countNeeded: 1,
          options: TOTEM_WARRIOR_LEVEL_3_SPIRITS,
          alreadyChosen: (existingDecisions['totemSpirit3'] as string[]) || [],
        });
      } else if (newLevel === 6) {
        results.push({
          id: 'totemAspect6',
          title: 'Aspecto de la Bestia (Guerrero Totémico Nivel 6)',
          description: 'Elige una bendición animal permanente otorgada por los espíritus de la naturaleza: Oso, Águila, Lobo, Alce o Tigre.',
          countNeeded: 1,
          options: TOTEM_WARRIOR_LEVEL_6_ASPECTS,
          alreadyChosen: (existingDecisions['totemAspect6'] as string[]) || [],
        });
      } else if (newLevel === 14) {
        results.push({
          id: 'totemAttunement14',
          title: 'Sintonía Totémica Suprema (Guerrero Totémico Nivel 14)',
          description: 'Alcanzas el poder marcial cumbre de tu guía totémico: Oso, Águila, Lobo, Alce o Tigre.',
          countNeeded: 1,
          options: TOTEM_WARRIOR_LEVEL_14_ATTUNEMENTS,
          alreadyChosen: (existingDecisions['totemAttunement14'] as string[]) || [],
        });
      }

      const aspectVal = String(existingDecisions['totemAspect6'] || '').toLowerCase();
      if ((newLevel >= 6 || currentLevel >= 6) && (aspectVal.includes('tigre') || aspectVal.includes('tiger'))) {
        results.push({
          id: 'totemTigerSkills6',
          title: 'Habilidades del Aspecto del Tigre (Guerrero Totémico)',
          description: 'El aspecto del tigre te otorga competencia en 2 habilidades adicionales a tu elección entre Atletismo, Acrobacia, Sigilo o Supervivencia.',
          countNeeded: 2,
          options: TOTEM_TIGER_LEVEL_6_SKILLS,
          alreadyChosen: (existingDecisions['totemTigerSkills6'] as string[]) || [],
        });
      }
    }

    if (subNorm.includes('fanatico') || subNorm.includes('fanático') || subNorm.includes('zealot')) {
      if (newLevel === 3) {
        results.push({
          id: 'zealotDivineFury',
          title: 'Furia Divina (Fanático Nivel 3)',
          description: 'Elige la energía celestial que imbuye tus golpes en furia: Daño Radiante o Daño Necrótico.',
          countNeeded: 1,
          options: ZEALOT_DIVINE_FURY_OPTIONS,
          alreadyChosen: (existingDecisions['zealotDivineFury'] as string[]) || [],
        });
      }
    }

    if (subNorm.includes('bestia') || subNorm.includes('beast')) {
      if (newLevel === 3) {
        results.push({
          id: 'beastNaturalWeapons',
          title: 'Forma de la Bestia - Arma Natural Predilecta (Nivel 3)',
          description: 'Elige tu manifestación preferida de arma natural: Mordisco, Garras o Cola.',
          countNeeded: 1,
          options: BEAST_NATURAL_WEAPON_OPTIONS,
          alreadyChosen: (existingDecisions['beastNaturalWeapons'] as string[]) || [],
        });
      } else if (newLevel === 6) {
        results.push({
          id: 'beastSoulAdaptation',
          title: 'Alma Bestial - Adaptación Física (Nivel 6)',
          description: 'Tus armas naturales cuentan como mágicas. Además, elige tu adaptación corporal tras descansos.',
          countNeeded: 1,
          options: BEAST_SOUL_ADAPTATION_OPTIONS,
          alreadyChosen: (existingDecisions['beastSoulAdaptation'] as string[]) || [],
        });
      }
    }

    if (subNorm.includes('heraldo') || subNorm.includes('storm herald') || subNorm.includes('tormenta')) {
      if (newLevel === 3) {
        results.push({
          id: 'stormHeraldEnvironment',
          title: 'Entorno del Aura de Tormenta (Heraldo Nivel 3)',
          description: 'Elige el bioma primordial de tu aura: Desierto, Mar o Tundra.',
          countNeeded: 1,
          options: STORM_HERALD_ENVIRONMENTS,
          alreadyChosen: (existingDecisions['stormHeraldEnvironment'] as string[]) || [],
        });
      }
    }

    if (subNorm.includes('gigante') || subNorm.includes('giant')) {
      if (newLevel === 3) {
        results.push({
          id: 'giantLanguage',
          title: 'Idioma de los Gigantes (Camino del Gigante Nivel 3)',
          description: 'Aprendes a hablar, leer y escribir Gigante.',
          countNeeded: 1,
          options: ALL_5E_LANGUAGES_OPTIONS,
          alreadyChosen: (existingDecisions['giantLanguage'] as string[]) || [],
        });
      } else if (newLevel === 6) {
        results.push({
          id: 'giantElementalCleaver',
          title: 'Cuchilla Elemental (Camino del Gigante Nivel 6)',
          description: 'Elige la energía de gigantes con la que imbuyes tu arma en furia: Fuego, Frío, Relámpago, Trueno o Ácido.',
          countNeeded: 1,
          options: GIANT_ELEMENTAL_CLEAVER_OPTIONS,
          alreadyChosen: (existingDecisions['giantElementalCleaver'] as string[]) || [],
        });
      }
    }
  }

  if ((norm.includes('guerrero') || norm.includes('fighter')) && (newLevel === 1 || currentLevel === 0)) {
    results.push({
      id: 'fighterFightingStyle_1',
      title: 'Estilo de Combate (Guerrero Nivel 1)',
      description: 'Elige tu especialización marcial primaria.',
      countNeeded: 1,
      options: FIGHTING_STYLE_OPTIONS.filter((f) => f.allowedClasses.includes('guerrero')).map((f) => ({
        id: f.id,
        name: f.name,
        desc: f.shortDesc,
        details: f.detailedDesc,
      })),
      alreadyChosen: allKnownFightingStyles,
    });
  }

  if ((norm.includes('paladín') || norm.includes('paladin')) && newLevel === 2) {
    results.push({
      id: 'paladinFightingStyle_2',
      title: 'Estilo de Combate (Paladín Nivel 2)',
      description: 'Elige tu especialización marcial sagrada.',
      countNeeded: 1,
      options: FIGHTING_STYLE_OPTIONS.filter((f) => f.allowedClasses.includes('paladin') || f.allowedClasses.includes('paladín')).map((f) => ({
        id: f.id,
        name: f.name,
        desc: f.shortDesc,
        details: f.detailedDesc,
      })),
      alreadyChosen: allKnownFightingStyles,
    });
  }

  const isBattleMaster = subNorm.includes('maestro de batalla') || subNorm.includes('battle master') || subNorm.includes('battlemaster');
  if ((norm.includes('guerrero') || norm.includes('fighter')) && isBattleMaster) {
    if (newLevel === 3 || newLevel === 7 || newLevel === 10 || newLevel === 15) {
      const chosen = (existingDecisions['battleMasterManeuvers'] as string[]) || [];
      results.push({
        id: 'battleMasterManeuvers',
        title: 'Maniobras de Combate (Maestro de Batalla)',
        description:
          newLevel === 3
            ? 'Elige 3 maniobras de superioridad para someter a tus enemigos en combate.'
            : `A nivel ${newLevel} aprendes 2 maniobras adicionales. Además, puedes reemplazar 1 ya conocida.`,
        countNeeded: newLevel === 3 ? 3 : 2,
        options: BATTLE_MASTER_MANEUVERS,
        canSwap: newLevel > 3 && chosen.length > 0,
        swapLabel: 'Reemplazar 1 maniobra conocida por otra',
        alreadyChosen: chosen,
      });
      if (newLevel === 3) {
        results.push({
          id: 'battleMasterArtisanTool_3',
          title: 'Estudiante de la Guerra (Maestro de Batalla Nivel 3)',
          description: 'Ganas competencia con un tipo de herramientas de artesano a tu elección.',
          countNeeded: 1,
          options: [
            { id: 'smith-tools', name: 'Herramientas de Herrero', desc: 'Permite forjar y modificar armas de metal, armaduras pesadas y escudos.', badge: 'Metalurgia' },
            { id: 'tinker-tools', name: 'Herramientas de Manitas', desc: 'Permite reparar mecanismos arcanos, autómatas, relojes y dispositivos pequeños.', badge: 'Mecanismos' },
          ],
          alreadyChosen: (existingDecisions['battleMasterArtisanTool_3'] as string[]) || [],
        });
      }
    }
  }

  const isRuneKnight = subNorm.includes('runico') || subNorm.includes('rúnico') || subNorm.includes('rune knight');
  if ((norm.includes('guerrero') || norm.includes('fighter')) && isRuneKnight) {
    if (newLevel === 3 || newLevel === 7 || newLevel === 10 || newLevel === 15) {
      const allowed = RUNE_KNIGHT_RUNES.filter((r) => (newLevel >= 7 ? true : !['runa-colina', 'runa-tormenta'].includes(r.id)));
      const chosen = (existingDecisions['runeKnightRunes'] as string[]) || [];
      results.push({
        id: 'runeKnightRunes',
        title: 'Tallado de Runas (Caballero Rúnico)',
        description:
          newLevel === 3
            ? 'Aprende a grabar 2 runas en tu equipo.'
            : `A nivel ${newLevel} aprendes 1 runa adicional.`,
        countNeeded: newLevel === 3 ? 2 : 1,
        options: allowed,
        canSwap: newLevel > 3 && chosen.length > 0,
        swapLabel: 'Reemplazar 1 runa grabada por otra',
        alreadyChosen: chosen,
      });
    }
  }

  const isArcaneArcher = subNorm.includes('arquero arcano') || subNorm.includes('arcane archer');
  if ((norm.includes('guerrero') || norm.includes('fighter')) && isArcaneArcher) {
    if (newLevel === 3 || newLevel === 7 || newLevel === 10 || newLevel === 15 || newLevel === 18) {
      const chosen = (existingDecisions['arcaneArcherShots'] as string[]) || [];
      results.push({
        id: 'arcaneArcherShots',
        title: 'Opciones de Disparo Arcano (Arquero Arcano)',
        description:
          newLevel === 3
            ? 'Elige 2 disparos mágicos para imbuir tus flechas.'
            : `A nivel ${newLevel} aprendes 1 nuevo disparo arcano.`,
        countNeeded: newLevel === 3 ? 2 : 1,
        options: ARCANE_ARCHER_SHOTS,
        canSwap: newLevel > 3 && chosen.length > 0,
        swapLabel: 'Reemplazar 1 disparo arcano por otro',
        alreadyChosen: chosen,
      });
    }
  }

  const isChampion = subNorm.includes('campeon') || subNorm.includes('campeón') || subNorm.includes('champion');
  if ((norm.includes('guerrero') || norm.includes('fighter')) && isChampion && newLevel === 10) {
    results.push({
      id: 'championSecondFightingStyle',
      title: 'Segundo Estilo de Combate (Campeón Nivel 10)',
      description: 'Elige un segundo estilo de combate de la lista de guerrero.',
      countNeeded: 1,
      options: FIGHTING_STYLE_OPTIONS.filter((f) => f.allowedClasses.includes('guerrero')).map((f) => ({
        id: f.id,
        name: f.name,
        desc: f.shortDesc,
        details: f.detailedDesc,
      })),
      alreadyChosen: allKnownFightingStyles,
    });
  }

  const isSamurai = subNorm.includes('samurai') || subNorm.includes('samurái');
  if ((norm.includes('guerrero') || norm.includes('fighter')) && isSamurai && newLevel === 3) {
    results.push({
      id: 'samuraiBonusSkill_3',
      title: 'Cortesano Elegante - Habilidad (Samurái Nivel 3)',
      description: 'Ganas competencia en Historia, Perspicacia, Actuación o Persuasión a tu elección.',
      countNeeded: 1,
      options: SAMURAI_BONUS_SKILLS,
      alreadyChosen: (existingDecisions['samuraiBonusSkill_3'] as string[]) || [],
    });
  }

  if ((norm.includes('hechicero') || norm.includes('sorcerer')) && (newLevel === 3 || newLevel === 10 || newLevel === 17)) {
    const chosen = (existingDecisions['metamagic'] as string[]) || [];
    results.push({
      id: 'metamagic',
      title: 'Opciones de Metamagia (Hechicero)',
      description:
        newLevel === 3
          ? 'Elige 2 opciones de metamagia para alterar conjuros con Puntos de Hechicería.'
          : `A nivel ${newLevel} aprendes 1 opción de metamagia adicional.`,
      countNeeded: newLevel === 3 ? 2 : 1,
      options: METAMAGIC_OPTIONS,
      canSwap: newLevel > 3 && chosen.length > 0,
      swapLabel: 'Reemplazar 1 opción de metamagia por otra',
      alreadyChosen: chosen,
    });
  }

  const isSorcererAsi = newLevel === 4 || newLevel === 8 || newLevel === 12 || newLevel === 16 || newLevel === 19;
  if ((norm.includes('hechicero') || norm.includes('sorcerer')) && isSorcererAsi) {
    const chosen = (existingDecisions['metamagic'] as string[]) || [];
    if (chosen.length > 0) {
      results.push({
        id: 'metamagicVersatility',
        title: 'Versatilidad de Metamagia (Regla Opcional Tasha)',
        description: 'Al alcanzar un nivel que otorga Mejora de Característica, puedes reemplazar una opción de metamagia que ya conozcas.',
        countNeeded: 0,
        options: METAMAGIC_OPTIONS,
        canSwap: true,
        swapLabel: 'Reemplazar 1 opción de metamagia conocida',
        alreadyChosen: chosen,
      });
    }
  }

  const isDraconic = subNorm.includes('draconico') || subNorm.includes('dracónico') || subNorm.includes('draconic');
  if ((norm.includes('hechicero') || norm.includes('sorcerer')) && isDraconic && newLevel === 1) {
    results.push({
      id: 'draconicAncestry',
      title: 'Ancestro Dracónico (Hechicero Nivel 1)',
      description: 'Elige el color o metal del dragón del que desciende tu magia elemental.',
      countNeeded: 1,
      options: DRACONIC_ANCESTRY_OPTIONS,
    });
  }

  const isDivineSoul = subNorm.includes('divin') || subNorm.includes('divine');
  if ((norm.includes('hechicero') || norm.includes('sorcerer')) && isDivineSoul && newLevel === 1) {
    results.push({
      id: 'divineSoulAffinity_1',
      title: 'Afinidad Divina (Alma Divina Nivel 1)',
      description: 'Elige tu afinidad moral o cósmica con los dioses.',
      countNeeded: 1,
      options: DIVINE_SOUL_AFFINITIES,
      alreadyChosen: (existingDecisions['divineSoulAffinity_1'] as string[]) || [],
    });
  }

  const isLunarSorcery = subNorm.includes('lunar') || subNorm.includes('moon');
  if ((norm.includes('hechicero') || norm.includes('sorcerer')) && isLunarSorcery && newLevel === 1) {
    results.push({
      id: 'lunarSorceryPhase_1',
      title: 'Fase Lunar Inicial (Hechicería Lunar Nivel 1)',
      description: 'Elige qué fase lunar encarnas inicialmente al despertar tu poder arcano.',
      countNeeded: 1,
      options: LUNAR_SORCERY_PHASES,
      alreadyChosen: (existingDecisions['lunarSorceryPhase_1'] as string[]) || [],
    });
  }

  if ((norm.includes('brujo') || norm.includes('warlock')) && [2, 5, 7, 9, 12, 15, 18].includes(newLevel)) {
    const chosen = (existingDecisions['invocations'] as string[]) || [];
    results.push({
      id: 'invocations',
      title: 'Invocaciones Sobrenaturales (Brujo)',
      description:
        newLevel === 2
          ? 'Elige tus primeras 2 Invocaciones Sobrenaturales concedidas por tu Patrón.'
          : `A nivel ${newLevel} aprendes 1 invocación adicional. Además puedes cambiar una conocida.`,
      countNeeded: newLevel === 2 ? 2 : 1,
      options: ELDRITCH_INVOCATIONS,
      canSwap: newLevel > 2 && chosen.length > 0,
      swapLabel: 'Reemplazar 1 invocación conocida por otra',
      alreadyChosen: chosen,
    });
  }

  if ((norm.includes('brujo') || norm.includes('warlock')) && newLevel === 3) {
    results.push({
      id: 'pactBoon',
      title: 'Don del Pacto (Brujo Nivel 3)',
      description: 'Tu patrón te hace entrega de un regalo sobrenatural: Filo, Tomo, Cadena o Talismán.',
      countNeeded: 1,
      options: PACT_BOON_OPTIONS,
    });
  }

  const isWarlock = norm.includes('brujo') || norm.includes('warlock');
  if (isWarlock && (newLevel >= 3 || currentLevel >= 3)) {
    const pactBoonVal = String(existingDecisions['pactBoon'] || '').toLowerCase();
    const isTome = pactBoonVal.includes('tomo') || pactBoonVal.includes('tome');
    const isChain = pactBoonVal.includes('cadena') || pactBoonVal.includes('chain');

    if (isTome) {
      results.push({
        id: 'pactTomeCantrips',
        title: 'Trucos del Pacto del Tomo (Brujo)',
        description: 'Tu Libro de las Sombras te concede 3 trucos de cualquier lista de conjuros de clase.',
        countNeeded: 3,
        options: getMulticlassCantripOptions(),
        alreadyChosen: (existingDecisions['pactTomeCantrips'] as string[]) || [],
      });
    }
    if (isChain) {
      results.push({
        id: 'pactChainFamiliar',
        title: 'Familiar Sobrenatural (Pacto de la Cadena)',
        description: 'Elige la forma de tu familiar sobrenatural especial: Diablillo, Quasit, Pseudodragón o Duendecillo.',
        countNeeded: 1,
        options: PACT_CHAIN_FAMILIARS,
        alreadyChosen: (existingDecisions['pactChainFamiliar'] as string[]) || [],
      });
    }
  }

  const isDruid = norm.includes('druida') || norm.includes('druid');
  if (isDruid) {
    const isLandDruid = subNorm.includes('tierra') || subNorm.includes('land');
    if (isLandDruid) {
      if (newLevel === 2) {
        results.push({
          id: 'druidLandCantrip',
          title: 'Truco Adicional (Círculo de la Tierra Nivel 2)',
          description: 'Aprendes 1 truco de druida adicional a tu elección.',
          countNeeded: 1,
          options: getDruidCantripOptions(),
          alreadyChosen: (existingDecisions['druidLandCantrip'] as string[]) || [],
        });
      }
      if (newLevel === 2 || newLevel === 3) {
        results.push({
          id: 'landBiome',
          title: 'Bioma del Círculo de la Tierra (Druida)',
          description: 'Elige tu bioma de comunión con la naturaleza.',
          countNeeded: 1,
          options: LAND_CIRCLE_BIOMES,
          alreadyChosen: (existingDecisions['landBiome'] as string[]) || [],
        });
      }
    }

    const isShepherdDruid = subNorm.includes('pastor') || subNorm.includes('shepherd');
    if (isShepherdDruid && newLevel === 2) {
      results.push({
        id: 'druidShepherdLanguage',
        title: 'Discurso de los Bosques (Círculo del Pastor Nivel 2)',
        description: 'Aprendes a hablar, leer y escribir Silvano, el idioma de las criaturas feéricas.',
        countNeeded: 1,
        options: [
          { id: 'silvano', name: 'Silvano', desc: 'Idioma feérico de criaturas del bosque, espíritus y hadas.', badge: 'Feérico' },
        ],
        alreadyChosen: (existingDecisions['druidShepherdLanguage'] as string[]) || [],
      });
    }
  }

  if (norm.includes('explorador') || norm.includes('ranger')) {
    if (newLevel === 1 || newLevel === 6 || newLevel === 14) {
      results.push({
        id: `favoredEnemy_${newLevel}`,
        title: `Enemigo Predilecto (Explorador Nivel ${newLevel})`,
        description: 'Elige un tipo de presa enemiga en la que te especializas.',
        countNeeded: 1,
        options: RANGER_FAVORED_ENEMIES,
      });
    }
    if (newLevel === 1 || newLevel === 6 || newLevel === 10) {
      results.push({
        id: `naturalExplorer_${newLevel}`,
        title: `Terreno Predilecto (Explorador Nivel ${newLevel})`,
        description: 'Elige un bioma en el que te desenvuelves como navegante y rastreador supremo.',
        countNeeded: 1,
        options: RANGER_NATURAL_EXPLORER,
      });
    }
    if (newLevel === 2) {
      results.push({
        id: 'rangerFightingStyle_2',
        title: 'Estilo de Combate (Explorador Nivel 2)',
        description: 'Elige tu especialización marcial.',
        countNeeded: 1,
        options: RANGER_FIGHTING_STYLES,
        alreadyChosen: allKnownFightingStyles,
      });
    }

    const isHunter = subNorm.includes('cazador') || subNorm.includes('hunter');
    if (isHunter) {
      if (newLevel === 3) {
        results.push({
          id: 'hunterPrey_3',
          title: 'Presa del Cazador (Cazador Nivel 3)',
          description: 'Elige tu técnica de caza contra adversarios.',
          countNeeded: 1,
          options: HUNTER_PREY_OPTIONS,
          alreadyChosen: (existingDecisions['hunterPrey_3'] as string[]) || [],
        });
      }
      if (newLevel === 7) {
        results.push({
          id: 'hunterDefense_7',
          title: 'Tácticas Defensivas (Cazador Nivel 7)',
          description: 'Elige tu defensa especializada ante amenazas.',
          countNeeded: 1,
          options: HUNTER_DEFENSIVE_TACTICS,
          alreadyChosen: (existingDecisions['hunterDefense_7'] as string[]) || [],
        });
      }
      if (newLevel === 11) {
        results.push({
          id: 'hunterMultiattack_11',
          title: 'Ataque Múltiple (Cazador Nivel 11)',
          description: 'Elige tu forma de barrer grupos de enemigos.',
          countNeeded: 1,
          options: HUNTER_MULTIATTACK_OPTIONS,
          alreadyChosen: (existingDecisions['hunterMultiattack_11'] as string[]) || [],
        });
      }
      if (newLevel === 15) {
        results.push({
          id: 'hunterSuperiorDefense_15',
          title: 'Defensa Superior del Cazador (Cazador Nivel 15)',
          description: 'Elige tu defensa legendaria.',
          countNeeded: 1,
          options: HUNTER_SUPERIOR_DEFENSE,
          alreadyChosen: (existingDecisions['hunterSuperiorDefense_15'] as string[]) || [],
        });
      }
    }

    const isDrakewarden = subNorm.includes('draconico') || subNorm.includes('dracónico') || subNorm.includes('drake');
    if (isDrakewarden && newLevel === 3) {
      results.push({
        id: 'drakewardenDraconicEssence_3',
        title: 'Esencia Dracónica del Drake (Guardián Dracónico Nivel 3)',
        description: 'Elige la afinidad elemental de tu Compañero Drake.',
        countNeeded: 1,
        options: DRAKEWARDEN_DRACONIC_ESSENCE,
        alreadyChosen: (existingDecisions['drakewardenDraconicEssence_3'] as string[]) || [],
      });
    }
  }

  const isCleric = norm.includes('cler') || norm.includes('clérigo');
  if (isCleric && (newLevel === 1 || currentLevel === 0)) {
    if (subNorm.includes('conocimiento') || subNorm.includes('knowledge')) {
      results.push({
        id: 'clericKnowledgeSkills',
        title: 'Bendiciones del Conocimiento - Habilidades (Clérigo Nivel 1)',
        description: 'Elige 2 habilidades de erudición entre Arcanos, Historia, Naturaleza o Religión con Pericia.',
        countNeeded: 2,
        options: [
          { id: 'arcanos', name: 'Arcanos', desc: 'Conocimiento de magia, conjuros y los planos de existencia. Ganas Pericia.' },
          { id: 'historia', name: 'Historia', desc: 'Conocimiento de eventos históricos y dinastías antiguas. Ganas Pericia.' },
          { id: 'naturaleza', name: 'Naturaleza', desc: 'Conocimiento del terreno, plantas y animales. Ganas Pericia.' },
          { id: 'religion', name: 'Religión', desc: 'Conocimiento de deidades, ritos y símbolos sagrados. Ganas Pericia.' },
        ],
        alreadyChosen: (existingDecisions['clericKnowledgeSkills'] as string[]) || [],
      });
      results.push({
        id: 'clericKnowledgeLanguages',
        title: 'Bendiciones del Conocimiento - Idiomas (Clérigo Nivel 1)',
        description: 'Aprendes 2 idiomas adicionales a tu elección.',
        countNeeded: 2,
        options: ALL_5E_LANGUAGES_OPTIONS,
        alreadyChosen: (existingDecisions['clericKnowledgeLanguages'] as string[]) || [],
      });
    }

    if (subNorm.includes('naturaleza') || subNorm.includes('nature')) {
      results.push({
        id: 'clericNatureCantrip',
        title: 'Acólito de la Naturaleza - Truco de Druida (Clérigo Nivel 1)',
        description: 'Aprendes 1 truco a tu elección de la lista de conjuros de Druida.',
        countNeeded: 1,
        options: getDruidCantripOptions(),
        alreadyChosen: (existingDecisions['clericNatureCantrip'] as string[]) || [],
      });
      results.push({
        id: 'clericNatureSkill',
        title: 'Acólito de la Naturaleza - Habilidad (Clérigo Nivel 1)',
        description: 'Ganas competencia en una de las siguientes habilidades de la naturaleza.',
        countNeeded: 1,
        options: [
          { id: 'trato-animales', name: 'Trato con Animales', desc: 'Calmar bestias salvajes, dirigir monturas y percibir intenciones de animales.' },
          { id: 'naturaleza', name: 'Naturaleza', desc: 'Conocimiento de flora, fauna, clima y ecosistemas.' },
          { id: 'supervivencia', name: 'Supervivencia', desc: 'Rastrear presas, buscar provisiones, orientarse y esquivar peligros naturales.' },
        ],
        alreadyChosen: (existingDecisions['clericNatureSkill'] as string[]) || [],
      });
    }

    if (subNorm.includes('arcano') || subNorm.includes('arcana')) {
      results.push({
        id: 'clericArcanaCantrips',
        title: 'Iniciado Arcano - Trucos de Mago (Clérigo Nivel 1)',
        description: 'Aprendes 2 trucos a tu elección de la lista de conjuros de Mago.',
        countNeeded: 2,
        options: getWizardCantripOptions(),
        alreadyChosen: (existingDecisions['clericArcanaCantrips'] as string[]) || [],
      });
    }

    if (subNorm.includes('orden') || subNorm.includes('order')) {
      results.push({
        id: 'clericOrderSkill',
        title: 'Competencias del Orden (Clérigo Nivel 1)',
        description: 'Ganas competencia en Intimidación o Persuasión a tu elección.',
        countNeeded: 1,
        options: [
          { id: 'intimidacion', name: 'Intimidación', desc: 'Imponer autoridad, amedrentar sospechosos y ejercer la presencia de la ley.' },
          { id: 'persuasion', name: 'Persuasión', desc: 'Negociar acuerdos, hacer cumplir edictos y convencer pacíficamente.' },
        ],
        alreadyChosen: (existingDecisions['clericOrderSkill'] as string[]) || [],
      });
    }

    if (subNorm.includes('paz') || subNorm.includes('peace')) {
      results.push({
        id: 'clericPeaceSkill',
        title: 'Competencias de la Paz (Clérigo Nivel 1)',
        description: 'Ganas competencia en Perspicacia, Interpretación o Persuasión a tu elección.',
        countNeeded: 1,
        options: [
          { id: 'perspicacia', name: 'Perspicacia', desc: 'Detectar intenciones hostiles, mentiras y estado emocional de las personas.' },
          { id: 'interpretacion', name: 'Interpretación', desc: 'Inspirar armonía y calmar multitudes mediante el canto o la oratoria.' },
          { id: 'persuasion', name: 'Persuasión', desc: 'Mediar disputas, forjar treguas y pacificar conflictos diplomáticamente.' },
        ],
        alreadyChosen: (existingDecisions['clericPeaceSkill'] as string[]) || [],
      });
    }

    if (subNorm.includes('muerte') || subNorm.includes('death')) {
      results.push({
        id: 'clericDeathCantrip',
        title: 'Segador - Truco de Nigromancia (Clérigo Nivel 1)',
        description: 'Aprendes 1 truco de Nigromancia a tu elección de cualquier lista de conjuros.',
        countNeeded: 1,
        options: getNecromancyCantripOptions(),
        alreadyChosen: (existingDecisions['clericDeathCantrip'] as string[]) || [],
      });
    }
  }

  if (isCleric && (subNorm.includes('arcano') || subNorm.includes('arcana')) && newLevel === 17) {
    results.push({
      id: 'clericArcanaMastery_17',
      title: 'Maestría Arcana (Dominio Arcano Nivel 17)',
      description: 'Elige 4 conjuros de la lista de Mago (uno de nivel 6, uno de 7, uno de 8 y uno de 9).',
      countNeeded: 4,
      options: getWizardHighLevelSpellOptions(),
      alreadyChosen: (existingDecisions['clericArcanaMastery_17'] as string[]) || [],
    });
  }

  const isBard = norm.includes('bardo') || norm.includes('bard');
  if (isBard) {
    if (newLevel === 3) {
      results.push({
        id: 'bardExpertise_3',
        title: 'Pericia (Bardo Nivel 3)',
        description: 'Elige 2 competencias en habilidades para duplicar tu bonificador por competencia.',
        countNeeded: 2,
        options: ALL_5E_SKILLS_OPTIONS,
        alreadyChosen: (existingDecisions['bardExpertise_3'] as string[]) || [],
      });
    }
    if (newLevel === 10) {
      results.push({
        id: 'bardExpertise_10',
        title: 'Pericia Adicional (Bardo Nivel 10)',
        description: 'Elige 2 competencias en habilidades adicionales para duplicar tu bonificador por competencia.',
        countNeeded: 2,
        options: ALL_5E_SKILLS_OPTIONS,
        alreadyChosen: (existingDecisions['bardExpertise_10'] as string[]) || [],
      });
    }

    const isSwords = subNorm.includes('espada') || subNorm.includes('sword');
    if (isSwords && newLevel === 3) {
      results.push({
        id: 'swordsFightingStyle',
        title: 'Estilo de Combate (Colegio de las Espadas Nivel 3)',
        description: 'Elige tu especialización marcial con la hoja.',
        countNeeded: 1,
        options: BARD_SWORDS_FIGHTING_STYLES,
        alreadyChosen: allKnownFightingStyles,
      });
    }

    const isLoreBard = subNorm.includes('lore') || subNorm.includes('saber') || subNorm.includes('conocimiento');
    if (isLoreBard && newLevel === 3) {
      results.push({
        id: 'loreBonusSkills',
        title: 'Competencias Adicionales (Colegio del Conocimiento Nivel 3)',
        description: 'Elige 3 habilidades adicionales a tu elección en las que ganas competencia inmediata.',
        countNeeded: 3,
        options: ALL_5E_SKILLS_OPTIONS,
        alreadyChosen: (existingDecisions['loreBonusSkills'] as string[]) || [],
      });
    }

    const isSpiritsBard = subNorm.includes('espiritus') || subNorm.includes('espíritus') || subNorm.includes('spirits');
    if (isSpiritsBard && newLevel === 6) {
      results.push({
        id: 'spiritsSpiritSession',
        title: 'Sesión Espiritual (Colegio de los Espíritus Nivel 6)',
        description: 'Elige 1 conjuro de Adivinación o Nigromancia de hasta 3.er nivel de cualquier clase.',
        countNeeded: 1,
        options: getSpiritSessionSpellOptions(3),
        alreadyChosen: (existingDecisions['spiritsSpiritSession'] as string[]) || [],
      });
    }

    if (isLoreBard && newLevel === 6) {
      results.push({
        id: 'bardMagicalSecrets_6',
        title: 'Secretos Mágicos Adicionales (Colegio del Conocimiento Nivel 6)',
        description: 'Elige 2 conjuros de cualquier clase de hasta 3.er nivel.',
        countNeeded: 2,
        options: getMagicalSecretsSpellOptions(3),
        alreadyChosen: (existingDecisions['bardMagicalSecrets_6'] as string[]) || [],
      });
    }
    if (newLevel === 10) {
      results.push({
        id: 'bardMagicalSecrets_10',
        title: 'Secretos Mágicos (Bardo Nivel 10)',
        description: 'Elige 2 conjuros de cualquier clase de hasta 5.º nivel.',
        countNeeded: 2,
        options: getMagicalSecretsSpellOptions(5),
        alreadyChosen: (existingDecisions['bardMagicalSecrets_10'] as string[]) || [],
      });
    }
    if (newLevel === 14) {
      results.push({
        id: 'bardMagicalSecrets_14',
        title: 'Secretos Mágicos (Bardo Nivel 14)',
        description: 'Elige 2 conjuros de cualquier clase de hasta 7.º nivel.',
        countNeeded: 2,
        options: getMagicalSecretsSpellOptions(7),
        alreadyChosen: (existingDecisions['bardMagicalSecrets_14'] as string[]) || [],
      });
    }
    if (newLevel === 18) {
      results.push({
        id: 'bardMagicalSecrets_18',
        title: 'Secretos Mágicos Supremos (Bardo Nivel 18)',
        description: 'Elige 2 conjuros de cualquier clase de hasta 9.º nivel.',
        countNeeded: 2,
        options: getMagicalSecretsSpellOptions(9),
        alreadyChosen: (existingDecisions['bardMagicalSecrets_18'] as string[]) || [],
      });
    }
  }

  const isRogue = norm.includes('pícaro') || norm.includes('picaro') || norm.includes('rogue');
  if (isRogue) {
    if (newLevel === 1) {
      results.push({
        id: 'rogueExpertise_1',
        title: 'Pericia (Pícaro Nivel 1)',
        description: 'Elige 2 de tus competencias en habilidades (o 1 habilidad y herramientas de ladrón).',
        countNeeded: 2,
        options: ROGUE_EXPERTISE_OPTIONS,
        alreadyChosen: (existingDecisions['rogueExpertise_1'] as string[]) || [],
      });
    }
    if (newLevel === 6) {
      results.push({
        id: 'rogueExpertise_6',
        title: 'Pericia Adicional (Pícaro Nivel 6)',
        description: 'Elige otras 2 de tus competencias en habilidades para duplicar tu bonificador.',
        countNeeded: 2,
        options: ROGUE_EXPERTISE_OPTIONS,
        alreadyChosen: (existingDecisions['rogueExpertise_6'] as string[]) || [],
      });
    }

    const isMastermind = subNorm.includes('mente-maestra') || subNorm.includes('mente maestra') || subNorm.includes('mastermind');
    if (isMastermind && newLevel === 3) {
      results.push({
        id: 'mastermindLanguages_3',
        title: 'Maestro de la Intriga: Idiomas (Mente Maestra Nivel 3)',
        description: 'Ganas competencia en 2 idiomas adicionales de tu elección.',
        countNeeded: 2,
        options: ALL_5E_LANGUAGES_OPTIONS,
        alreadyChosen: (existingDecisions['mastermindLanguages_3'] as string[]) || [],
      });
    }

    const isPhantom = subNorm.includes('fantasma') || subNorm.includes('phantom');
    if (isPhantom && newLevel === 3) {
      results.push({
        id: 'phantomWhispersSkill_3',
        title: 'Susurros de los Muertos (Fantasma Nivel 3)',
        description: 'Elige 1 habilidad o herramienta en la que obtienes competencia guiada por los espíritus.',
        countNeeded: 1,
        options: ROGUE_EXPERTISE_OPTIONS,
        alreadyChosen: (existingDecisions['phantomWhispersSkill_3'] as string[]) || [],
      });
    }
  }

  const isWizard = norm.includes('mago') || norm.includes('wizard');
  if (isWizard) {
    const isBladesinging = subNorm.includes('canto') || subNorm.includes('hoja') || subNorm.includes('bladesing');
    if (isBladesinging && newLevel === 2) {
      results.push({
        id: 'bladesingingWeapon_2',
        title: 'Arma del Canto de la Hoja (Nivel 2)',
        description: 'Ganas competencia con un tipo de arma cuerpo a cuerpo de una mano a tu elección.',
        countNeeded: 1,
        options: BLADESINGING_WEAPONS_OPTIONS,
        alreadyChosen: (existingDecisions['bladesingingWeapon_2'] as string[]) || [],
      });
    }

    if (newLevel === 18) {
      results.push({
        id: 'wizardSpellMastery_18',
        title: 'Dominio de Conjuros (Mago Nivel 18)',
        description: 'Elige un conjuro de 1.er nivel y un conjuro de 2.º nivel de mago para lanzarlos a voluntad.',
        countNeeded: 2,
        options: getWizardMasterySpellOptions(),
        alreadyChosen: (existingDecisions['wizardSpellMastery_18'] as string[]) || [],
      });
    }

    if (newLevel === 20) {
      results.push({
        id: 'wizardSignatureSpells_20',
        title: 'Conjuros Insignia (Mago Nivel 20)',
        description: 'Elige dos conjuros de 3.er nivel de tu libro de conjuros que siempre estarán preparados.',
        countNeeded: 2,
        options: getWizardSignatureSpellOptions(),
        alreadyChosen: (existingDecisions['wizardSignatureSpells_20'] as string[]) || [],
      });
    }
  }

  return results;
}

export function getAllClassDecisionsForCreation(
  className: string,
  subclass: string | undefined,
  level: number,
  existingDecisions: Record<string, any> = {}
): PendingClassDecision[] {
  const all: PendingClassDecision[] = [];
  for (let lvl = 1; lvl <= level; lvl++) {
    const decs = getClassDecisionsForLevel(className, subclass, lvl - 1, lvl, existingDecisions);
    for (const d of decs) {
      const existing = all.find((x) => x.id === d.id);
      if (existing) {
        existing.countNeeded += d.countNeeded;
        if (d.options) {
          existing.options = d.options;
        }
      } else {
        all.push({ ...d, canSwap: false });
      }
    }
  }
  return all;
}

export function getSpellcastingLevelUpRules(
  className: string,
  currentLevel: number,
  newLevel: number,
  subclass?: string
): LevelUpSpellRules {
  const norm = (className || '').toLowerCase();
  const subNorm = (subclass || '').toLowerCase();

  if (norm.includes('mago') || norm.includes('wizard')) {
    const newCantrips = (newLevel === 4 || newLevel === 10) ? 1 : 0;
    return {
      newSpellsToLearn: 2,
      newCantripsToLearn: newCantrips,
      canSwapSpell: false,
      canUseCantripFormulas: newLevel >= 3,
      canUseCantripVersatility: false,
      explanation: 'Regla Oficial 5e (Mago): En cada subida de nivel aprendes exactamente 2 nuevos conjuros para tu Libro de Conjuros de forma gratuita.',
    };
  }

  if (norm.includes('hechicero') || norm.includes('sorcerer')) {
    const sorcSpellsKnown = [0, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 12, 13, 13, 14, 14, 15, 15, 15, 15];
    const diff = Math.max(0, (sorcSpellsKnown[newLevel] || 0) - (sorcSpellsKnown[currentLevel] || 0));
    const newCantrips = (newLevel === 4 || newLevel === 10) ? 1 : 0;
    return {
      newSpellsToLearn: diff,
      newCantripsToLearn: newCantrips,
      canSwapSpell: true,
      canUseCantripFormulas: false,
      canUseCantripVersatility: [4, 8, 12, 16, 19].includes(newLevel),
      explanation: `Regla Oficial 5e (Hechicero): Aprendes ${diff} nuevo(s) conjuro(s) conocido(s).`,
    };
  }

  if (norm.includes('bardo') || norm.includes('bard')) {
    const bardSpellsKnown = [0, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 15, 15, 16, 18, 19, 19, 20, 22, 22, 22];
    let diff = Math.max(0, (bardSpellsKnown[newLevel] || 0) - (bardSpellsKnown[currentLevel] || 0));
    if (newLevel === 10 || newLevel === 14 || newLevel === 18) {
      diff = 0;
    }
    const newCantrips = (newLevel === 4 || newLevel === 10) ? 1 : 0;
    return {
      newSpellsToLearn: diff,
      newCantripsToLearn: newCantrips,
      canSwapSpell: true,
      canUseCantripFormulas: false,
      canUseCantripVersatility: [4, 8, 12, 16, 19].includes(newLevel),
      explanation: 'Regla Oficial 5e (Bardo): Aprendes nuevos conjuros o secretos mágicos según tu progresión.',
    };
  }

  if (norm.includes('brujo') || norm.includes('warlock')) {
    const warlockSpellsKnown = [0, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 11, 11, 12, 12, 13, 13, 14, 14, 15, 15];
    const diff = Math.max(0, (warlockSpellsKnown[newLevel] || 0) - (warlockSpellsKnown[currentLevel] || 0));
    const newCantrips = (newLevel === 4 || newLevel === 10) ? 1 : 0;
    return {
      newSpellsToLearn: diff,
      newCantripsToLearn: newCantrips,
      canSwapSpell: true,
      canUseCantripFormulas: false,
      canUseCantripVersatility: [4, 8, 12, 16, 19].includes(newLevel),
      explanation: `Regla Oficial 5e (Brujo): Aprendes ${diff} nuevo(s) conjuro(s) conocido(s).`,
    };
  }

  if (norm.includes('explorador') || norm.includes('ranger')) {
    const rangerSpellsKnown = [0, 0, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11];
    const diff = Math.max(0, (rangerSpellsKnown[newLevel] || 0) - (rangerSpellsKnown[currentLevel] || 0));
    return {
      newSpellsToLearn: diff,
      newCantripsToLearn: 0,
      canSwapSpell: true,
      canUseCantripFormulas: false,
      canUseCantripVersatility: false,
      explanation: 'Regla Oficial 5e (Explorador): Aprendes conjuros nuevos o mantienes los conocidos.',
    };
  }

  if (norm.includes('cler') || norm.includes('clérigo') || norm.includes('druid') || norm.includes('druida')) {
    const newCantrips = (newLevel === 4 || newLevel === 10) ? 1 : 0;
    return {
      newSpellsToLearn: 0,
      newCantripsToLearn: newCantrips,
      canSwapSpell: false,
      canUseCantripFormulas: false,
      canUseCantripVersatility: [4, 8, 12, 16, 19].includes(newLevel),
      explanation: 'Regla Oficial 5e: Tienes acceso a toda la lista de conjuros divinos de tu clase.',
    };
  }

  if (norm.includes('palad')) {
    return {
      newSpellsToLearn: 0,
      newCantripsToLearn: 0,
      canSwapSpell: false,
      canUseCantripFormulas: false,
      canUseCantripVersatility: false,
      explanation: 'Regla Oficial 5e: Tienes acceso a toda la lista de conjuros sagrados de paladín.',
    };
  }

  return {
    newSpellsToLearn: 1,
    newCantripsToLearn: 0,
    canSwapSpell: false,
    canUseCantripFormulas: false,
    canUseCantripVersatility: false,
    explanation: 'Selecciona conjuros para agregar a tu repertorio.',
  };
}

export function getArtificerSpecialistSpells(specialty: string, level: number): DecisionOption[] {
  return [];
}