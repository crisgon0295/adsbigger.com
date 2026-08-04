import PageTemplate, { generateMetadata } from './[slug]/page'

// La configuracion de segmento (dynamic, etc.) no se hereda via re-export:
// debe declararse en el archivo de la ruta real. La base de datos no esta
// disponible durante "docker build" en Dokploy, solo en runtime.
export const dynamic = 'force-dynamic'

export default PageTemplate

export { generateMetadata }
