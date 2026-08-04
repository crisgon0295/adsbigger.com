/**
 * Copy oficial de la Home — fuente única de verdad.
 * Trazabilidad: Documento 04 v1.3 (Workbook SEO Home) + Documento 08 (mapa de
 * mensajería). No editar aquí sin actualizar el Documento 04 primero.
 * Regla dura: cero métricas inventadas, cero testimonios fabricados.
 */

export const hero = {
  eyebrow: 'Fuerza laboral digital instalada',
  // H1 principal confirmado (keyword Tier 1 lo más a la izquierda — Doc. 05)
  h1: 'Empleados de IA para pymes: más capacidad operativa sin sumar otra nómina.',
  sub: 'Conectados a WhatsApp, tu CRM y tu facturación. No es un chatbot más ni una oferta de empleo: es un sistema que ejecuta procesos reales y te muestra exactamente qué hizo.',
  ctaPrimary: { label: 'Solicita tu Diagnóstico Gratis', href: '#diagnostico' },
  ctaSecondary: { label: 'Ver cómo funciona el sistema', href: '#como-funciona' },
  fuds: [
    'Sin autonomía ilimitada — tú apruebas',
    'Acompañamiento continuo, no solo en el setup',
    'Handoff a un humano con notificación inmediata',
    'Se integra a tu CRM y facturación actuales',
  ],
}

export const problema = {
  stage: '01',
  label: 'El problema',
  titulo: '¿Te suena alguna de estas?',
  // 5 tarjetas PAS: 4 "ya lo intenté y falló" + 1 "nunca lo he probado" (Doc. 06 §3.6)
  preguntas: [
    '¿Tus leads llegan pero nadie les hace seguimiento a tiempo?',
    '¿La información vive en WhatsApp, en Excel y en la cabeza de una sola persona?',
    '¿Facturas y documentos se represan porque dependen de que alguien tenga tiempo?',
    '¿No sabes qué decidió tu bot ni cuánto te está costando cada conversación?',
    '¿Sabes que necesitas IA en tu operación, pero no sabes por dónde empezar sin arriesgar lo que ya funciona?',
  ],
}

export const definicion = {
  stage: '02',
  label: 'El sistema',
  titulo: 'Un empleado de IA no es un chatbot. Es capacidad operativa instalada.',
  cuerpo:
    'Un chatbot responde. Un empleado de IA de adsBigger captura datos, consulta herramientas, actualiza tu CRM o tu sistema contable, ejecuta un proceso de principio a fin, registra lo que hizo y transfiere el control a una persona cuando sale de sus límites autorizados.',
  antiMarca:
    'No prometemos autonomía total, ni que la IA nunca se equivoca, ni que reemplaza a tu equipo. Prometemos capacidad, control y resultados medibles.',
  diferenciacion:
    'No somos «empleados digitales» limitados a WhatsApp. Instalamos empleados de IA conectados a WhatsApp, tu CRM y tu facturación — un sistema, no un canal.',
  local:
    'No traducimos un producto gringo al español. Lo construimos en Bogotá, para el WhatsApp, el CRM y la facturación que ya usa una pyme colombiana.',
}

export const portafolio = {
  stage: '03',
  label: 'El portafolio',
  titulo: 'Un empleado por cada cuello de botella',
  nota: 'Cada departamento tendrá su página propia — por ahora, así se reparte el trabajo:',
  departamentos: [
    {
      nombre: 'Front Office',
      resultado: 'Responde, agenda y escala sin perder solicitudes.',
      roles: 'Recepcionista de chat y WhatsApp · Agente de soporte',
      icono: 'message-circle',
    },
    {
      nombre: 'Comercial',
      resultado: 'Convierte conversaciones en oportunidades.',
      roles: 'SDR / Vendedor IA · Asistente de seguimiento y CRM',
      icono: 'target',
    },
    {
      nombre: 'Administración y Finanzas',
      resultado: 'Procesa documentos y reduce el represamiento.',
      roles: 'Agente de facturación · Agente de cobranza',
      icono: 'file-check-2',
    },
    {
      nombre: 'Marketing y Reputación',
      resultado: 'Protege tu marca y sostiene tu contenido.',
      roles: 'Especialista de reseñas · Social media con aprobación',
      icono: 'shield-check',
    },
    {
      nombre: 'Dirección',
      resultado: 'Convierte datos de operación en decisiones.',
      roles: 'Analista / Gerente IA',
      icono: 'gauge',
    },
  ],
}

export const comoFunciona = {
  stage: '04',
  label: 'Cómo se instala',
  titulo: 'Cuatro pasos, sin interrumpir tu operación',
  pasos: [
    {
      n: '1',
      titulo: 'Diagnóstico',
      texto: 'Mapeamos el cuello de botella y lo cuantificamos en dinero, horas o riesgo.',
    },
    {
      n: '2',
      titulo: 'Diseño del empleado',
      texto: 'Definimos canal, conocimiento, herramientas, límites y KPI.',
    },
    {
      n: '3',
      titulo: 'Piloto',
      texto: 'Activamos un proceso, medimos línea base y comparamos resultados.',
    },
    {
      n: '4',
      titulo: 'Expansión',
      texto: 'Escalamos por departamento solo cuando el piloto demuestra valor.',
    },
  ],
}

export const evidencia = {
  stage: '05',
  label: 'Evidencia',
  titulo: 'Sin testimonios inventados',
  // Placeholder honesto — regla anti-fabricación (Doc. 04/06). Se reemplaza por
  // el caso real con cifra verificable cuando Ferriperfiles esté cerrado.
  texto:
    'Estamos documentando en vivo el caso de nuestro primer cliente: línea base, resultados y evidencia real. Se publica aquí en cuanto esté cerrado — no antes. Si un proveedor te muestra testimonios que no puedes verificar, pregúntate por qué.',
}

export const roi = {
  stage: '06',
  label: 'Tu número',
  titulo: 'Antes de hablar de precio, calculemos cuánto te cuesta no tener este proceso automatizado.',
  texto:
    'El diagnóstico convierte tu cuello de botella en un número: oportunidades perdidas, horas de trabajo repetitivo y costo de errores. Con ese número decides tú — y puedes defender la decisión ante tu socio o tu contador.',
  // Argumento lógico #8 (Doc. 08): política real de la empresa, Doc. 01 Fase 7.
  honesto: 'Si tu proceso no da retorno suficiente, te lo decimos — no te vendemos igual.',
  cta: { label: 'Solicita tu Diagnóstico Gratis', href: '#diagnostico' },
}

export const faq = {
  stage: '07',
  label: 'Preguntas honestas',
  titulo: 'Lo que nos preguntan antes de empezar',
  items: [
    {
      q: '¿Esto es solo un chatbot caro?',
      a: 'Un chatbot responde. Este sistema captura datos, ejecuta workflows, actualiza tus sistemas y transfiere a una persona cuando lo necesita. El precio se compara contra el proceso que resuelve, no contra una caja de chat.',
    },
    {
      q: '¿En qué se diferencia un agente de IA de un chatbot?',
      a: 'Un chatbot sigue un guion de respuestas. Un agente o empleado de IA decide, consulta herramientas, ejecuta acciones en tus sistemas y sabe cuándo transferir a una persona. La diferencia es capacidad de ejecución, no solo de conversación.',
    },
    {
      q: '¿Puedo hacerlo con ChatGPT y n8n?',
      a: 'Sí, también se puede ensamblar un CRM con hojas de cálculo. La pregunta es quién diseña el proceso, controla permisos, prueba casos límite y mantiene la operación cuando cambian las APIs o los modelos.',
    },
    {
      q: '¿Qué pasa si la IA se equivoca o le dice algo falso a un cliente?',
      a: 'Por eso no vendemos autonomía ilimitada: instalamos fuentes autorizadas (solo responde con lo que está en tu conocimiento aprobado, no inventa), límites, aprobaciones, pruebas, logs y handoff humano con aviso inmediato.',
    },
    {
      q: '¿Tengo que cambiar mi CRM o mi sistema de facturación?',
      a: 'No. Nos conectamos a las herramientas que ya usas — WhatsApp, tu CRM, Siigo u otro sistema contable. No te pedimos migrar de plataforma para instalar un empleado de IA.',
    },
    {
      q: '¿Qué pasa con los datos de mis clientes?',
      a: 'Tu información se usa exclusivamente para operar tu empleado de IA, con acceso restringido y trazabilidad completa. No se usa para entrenar modelos públicos ni se comparte con terceros.',
    },
    {
      q: '¿Esto reemplaza a mi equipo?',
      a: 'No. La IA toma la repetición, la disponibilidad y la disciplina. Tu equipo conserva el criterio, las relaciones y las excepciones.',
    },
  ],
}

export const ctaFinal = {
  titulo: 'Deja de comparar chatbots. Instala un empleado de IA que puedas auditar.',
  texto: 'Cuéntanos qué proceso se te atasca y te decimos, gratis y directo, si un empleado de IA lo resuelve — y cuánto te cuesta hoy no resolverlo.',
  cta: {
    label: 'Solicita tu Diagnóstico Gratis',
    href: 'mailto:agency.adsbigger@gmail.com?subject=Diagn%C3%B3stico%20Gratis%20%E2%80%94%20adsBigger',
  },
  contacto: 'agency.adsbigger@gmail.com',
  fuds: [
    'Sin autonomía ilimitada — tú apruebas',
    'Acompañamiento continuo, no solo en el setup',
    'Si no da retorno suficiente, te lo decimos — no te vendemos igual',
  ],
}

export const footer = {
  statement: 'No vendemos bots. Instalamos empleados de IA.',
  tagline: 'Instalamos sistemas, no vendemos anuncios.',
  handle: '@adsbigger',
  ciudad: 'Bogotá, Colombia',
}
