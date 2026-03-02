export interface NavLink {
  href: string
  label: string
}

export interface PortfolioItem {
  title: string
  subtitle: string
  image: string
  category: string
  slug: string
  videoUrl?: string
  pdfUrl?: string
  featured?: boolean
}

export interface BlogPost {
  title: string
  date: string
  excerpt: string
  image: string
  slug: string
  isHorizontal?: boolean
}

export interface Service {
  title: string
  slug: string
  icon: string
  description: string
  image?: string
}

export interface TeamMember {
  name: string
  role: string
  image?: string
  bio?: string
}

export interface ContactFormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  subject: string
  serviceType: string
  message: string
}

export interface SocialLink {
  platform: string
  url: string
  icon: string
}
