export type NavLink = {
  to: string
  name: string
  subLinks?: Array<NavLink>
  subtitle?: string
}

export type NavLinks = Array<NavLink>

export const navLinks: NavLinks = [
  { 
    to: "/nosotros", 
    name: "Nosotros",
    subLinks: [
      {
        to: "/nosotros", 
        name: "Misión, visión, valores",
        subtitle: "Nuestra Universidad"
      },
      {
        to: "/nosotros", 
        name: "Reseña histórica",
        subtitle: "Nuestra Universidad"
      },
      {
        to: "/nosotros", 
        name: "Estatuto",
        subtitle: "Nuestra Universidad"
      },
      {
        to: "/nosotros", 
        name: "Organigrama",
        subtitle: "Nuestra Universidad"
      },
      {
        to: "/nosotros", 
        name: "Directorio institucional",
        subtitle: "Nuestra Universidad"
      },
      {
        to: "/nosotros", 
        name: "Mapa del campus",
        subtitle: "Nuestra Universidad"
      },
      {
        to: "/nosotros", 
        name: "Convenios",
        subtitle: "Nuestra Universidad"
      },
      {
        to: "/nosotros", 
        name: "Memoria Anual",
        subtitle: "Nuestra Universidad"
      },
      {
        to: "/nosotros", 
        name: "Mesa de Parte",
        subtitle: "Nuestra Universidad"
      },
      {
        to: "/nosotros", 
        name: "Rectora",
        subtitle: "Autoridades"
      },
      {
        to: "/nosotros", 
        name: "Vicerrectorado académico",
        subtitle: "Autoridades"
      },
      {
        to: "/nosotros", 
        name: "Vicerrector de investigación",
        subtitle: "Autoridades"
      },
      {
        to: "/nosotros", 
        name: "Decano",
        subtitle: "Autoridades"
      },
      {
        to: "/nosotros", 
        name: "Gestión Académica y Prospectiva",
        subtitle: "Oficina"
      },
      {
        to: "/nosotros", 
        name: "Dirección de Responsabilidad Social Universitaria",
        subtitle: "Oficina"
      },
      {
        to: "/nosotros", 
        name: "Cooperación y Relaciones Internacionales",
        subtitle: "Oficina"
      },
      {
        to: "/nosotros", 
        name: "Reglamento Académico",
        subtitle: "Documentos de gestión"
      },
      {
        to: "/nosotros", 
        name: "TUPA",
        subtitle: "Documentos de gestión"
      },
    ]
  },
  { 
    to: "/vicerrectorado-de-investigacion", 
    name: "Vicerrectorado de Investigación" 
  },
  { 
    to: "/admision", 
    name: "Admisión",
    subLinks: [
      {
        to: "/admision", 
        name: "Cronograma",
      },
      {
        to: "/admision", 
        name: "Modalidades",
      },
      {
        to: "/admision", 
        name: "Vacantes",
      },
      {
        to: "/admision", 
        name: "Temario",
      },
      {
        to: "/admision", 
        name: "Prospecto",
      },
      {
        to: "/admision", 
        name: "Modelo de examen",
      },
      {
        to: "/admision", 
        name: "Infórmate",
      },
      {
        to: "/admision", 
        name: "Preguntas frecuentes",
      },
      {
        to: "/admision", 
        name: "Contáctanos",
      },
    ]
  },
  { 
    to: "/pregrado", 
    name: "Pregrado",
    subLinks: [
      {
        to: "/pregrado", 
        name: "Administración de Empresas",
      },
      {
        to: "/pregrado", 
        name: "Ingeniería Ambiental",
      },
      {
        to: "/pregrado", 
        name: "Ingeniería de Sistemas",
      },
      {
        to: "/pregrado", 
        name: "Ingeniería Electrónica y Telecomunicaciones",
      },
      {
        to: "/pregrado", 
        name: "Ingeniería Mecánica y Eléctrica",
      },
    ]
  },
  { 
    to: "/posgrado", 
    name: "Posgrado",
    subLinks: [
      {
        to: "/posgrado", 
        name: "Proceso de Admisión 2025-II",
      },
      {
        to: "/posgrado", 
        name: "Estructura Orgánica",
      },
      {
        to: "/posgrado", 
        name: "Presentación",
      },
    ]
  },
  { 
    to: "/gestion-de-la-calidad", 
    name: "Gestión de la Calidad",
    subLinks: [
      {
        to: "/gestion-de-la-calidad", 
        name: "Gestión Administrativa",
      },
      {
        to: "/gestion-de-la-calidad", 
        name: "Sistema de Gestión de la Calidad",
      },
      {
        to: "/gestion-de-la-calidad", 
        name: "Licenciamiento",
      },
      {
        to: "/gestion-de-la-calidad", 
        name: "Acreditación",
      },
      {
        to: "/gestion-de-la-calidad", 
        name: "Curso-Taller",
      },
      {
        to: "/gestion-de-la-calidad", 
        name: "Condiciones Básicas de Calidad",
      },
    ]
  },
  { 
    to: "/docentes", 
    name: "Docentes",
    subLinks: [
      {
        to: "/docentes", 
        name: "Perfiles docentes",
      },
      {
        to: "/docentes", 
        name: "SIGU docente",
      },
      {
        to: "/docentes", 
        name: "Aula Virtual",
      },
      {
        to: "/docentes", 
        name: "Exámenes en línea",
      },
    ]
  },
  { 
    to: "/centro-pre", 
    name: "Centro Pre",
    subLinks: [
      {
        to: "/centro-pre",
        name: "Información"
      },
      {
        to: "/centro-pre",
        name: "Web del Centro Pre"
      }
    ]
  },
  { 
    to: "/transparencia", 
    name: "Transparencia",
    subLinks: [
      {
        to: "/transparencia",
        name: "Ley de Transparencia (Art. 11)",
      },
    ]
  },
]

export const titulos = ["profesionales", "investigadores", "innovadores"]
export const bases = ["humanista", "ética", "social", "tecnológica", "científica"]