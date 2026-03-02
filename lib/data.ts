import type { NavLink, PortfolioItem, BlogPost, Service, TeamMember, SocialLink } from '@/types'

export const navLinks: NavLink[] = [
  { href: '/', label: 'Início' },
  { href: '/portfolio', label: 'Portfólio' },
  { href: '/quem-somos', label: 'Quem Somos' },
  { href: '/blog', label: 'Blog' },
  { href: '/servicos', label: 'Serviços' },
  { href: '/trabalhe-conosco', label: 'Trabalhe Conosco' },
  { href: '/contacto', label: 'Contacto' },
]

export const socialLinks: SocialLink[] = [
  { platform: 'Facebook', url: 'https://www.facebook.com/abiptomsarl', icon: 'facebook' },
  { platform: 'Instagram', url: 'https://www.instagram.com/abiptom_gb', icon: 'instagram' },
  { platform: 'LinkedIn', url: 'https://www.linkedin.com/company/abiptom-sarl', icon: 'linkedin' },
  { platform: 'YouTube', url: 'https://youtube.com/@abiptom', icon: 'youtube' },
  { platform: 'TikTok', url: 'https://www.tiktok.com/@abiptomsarl', icon: 'music2' },
]

export const portfolioItems: PortfolioItem[] = [
  { title: 'Website ARN', subtitle: 'Desenvolvimento Web', image: '/images/portfolio/websites/arn.png', category: 'Websites', slug: 'website-arn', featured: true },
  { title: 'Bissau Rising', subtitle: 'Design Gráfico', image: '/images/portfolio/graphicdesign/bissaurising-banner.png', category: 'Design Gráfico', slug: 'bissau-rising', featured: true },
  { title: 'Website Hotel Uque', subtitle: 'Desenvolvimento Web', image: '/images/portfolio/websites/hotel-uque.png', category: 'Websites', slug: 'hotel-uque' },
  { title: 'Campanha MTN Boss', subtitle: 'Design Gráfico', image: '/images/portfolio/graphicdesign/campanha-boss-mtn-guine-bissau.jpg', category: 'Design Gráfico', slug: 'campanha-mtn-boss' },
  { title: 'BISSAU RISING Video', subtitle: 'Produção de Vídeo', image: '/images/portfolio/video/bissau-rising-video.jpg', category: 'Vídeo', slug: 'bissau-rising-video', videoUrl: 'https://www.youtube.com/embed/N_Oq4NavzGA' },
  { title: 'Yunus Social Business', subtitle: 'Social Media', image: '/images/portfolio/graphicdesign/ysb-design-social-media-1.jpg', category: 'Social Media', slug: 'yunus-social-business' },
  { title: 'Website APBEF', subtitle: 'Desenvolvimento Web', image: '/images/portfolio/websites/apbef.png', category: 'Websites', slug: 'website-apbef' },
  { title: 'Website ABIPTOM', subtitle: 'Desenvolvimento Web', image: '/images/portfolio/websites/abiptom-site.png', category: 'Websites', slug: 'website-abiptom' },
  { title: 'Aldeias SOS', subtitle: 'Animação 2D', image: '/images/portfolio/video/aldeias-sos.jpg', category: 'Vídeo', slug: 'aldeias-sos' },
  { title: 'Caiiro Tour', subtitle: 'Design Gráfico', image: '/images/portfolio/graphicdesign/caiiro-tour.jpg', category: 'Design Gráfico', slug: 'caiiro-tour' },
  { title: 'UNDP Accelerator Lab', subtitle: 'Produção de Vídeo', image: '/images/portfolio/video/undp-accelerator.jpg', category: 'Vídeo', slug: 'undp-accelerator' },
  { title: 'UN-HABITAT Animação', subtitle: 'Animação 2D', image: '/images/portfolio/video/un-habitat.jpg', category: 'Vídeo', slug: 'un-habitat-animacao' },
]

export const blogPosts: BlogPost[] = [
  {
    title: 'Concluímos com Sucesso o Projeto de Branding para 21 Marcas de Mulheres Empreendedoras',
    date: '15 Março, 2024',
    excerpt: 'Em colaboração com a UNIDO e a AMAE, desenvolvemos identidades visuais e um catálogo completo para 21 marcas de mulheres empreendedoras na Guiné-Bissau.',
    image: '/images/blog/reuniao-com-unido-e-amae-branding.jpg',
    slug: 'branding-unido-amae-guine-bissau',
    isHorizontal: true,
  },
  {
    title: 'Como o Marketing Digital Está a Transformar Negócios na Guiné-Bissau',
    date: '28 Fevereiro, 2024',
    excerpt: 'Descubra como as empresas guineenses estão a adoptar estratégias digitais para expandir o seu alcance.',
    image: '/images/blog/reuniao-com-unido-e-amae-branding.jpg',
    slug: 'marketing-digital-guine-bissau',
  },
  {
    title: 'A Importância do Design Gráfico na Identidade da Marca',
    date: '10 Janeiro, 2024',
    excerpt: 'Porque um bom design gráfico é fundamental para a credibilidade e sucesso da sua marca.',
    image: '/images/blog/reuniao-com-unido-e-amae-branding.jpg',
    slug: 'importancia-design-grafico',
  },
]

export const services: Service[] = [
  { title: 'Design Gráfico', slug: 'design-grafico', icon: 'palette', description: 'Criação de logotipos, flyers, cartazes, brochuras e materiais visuais que fortalecem sua marca.' },
  { title: 'Desenvolvimento Web', slug: 'desenvolvimento-web', icon: 'code', description: 'Websites modernos, responsivos e otimizados para SEO que convertem visitantes em clientes.' },
  { title: 'Social Media', slug: 'social-media', icon: 'share2', description: 'Gestão profissional de redes sociais com estratégias personalizadas para aumentar seu engajamento.' },
  { title: 'Produção de Vídeo', slug: 'producao-video', icon: 'video', description: 'Vídeos promocionais, animações e conteúdo audiovisual para impulsionar sua comunicação.' },
  { title: 'Fotografia', slug: 'fotografia', icon: 'camera', description: 'Serviços fotográficos profissionais para produtos, eventos e conteúdo corporativo.' },
  { title: 'Animação 2D', slug: 'animacao-2d', icon: 'zap', description: 'Animações criativas que dão vida às suas ideias e capturam a atenção do seu público.' },
  { title: 'Marketing Digital', slug: 'marketing-digital', icon: 'trending-up', description: 'Estratégias digitais completas para crescer a sua presença online e gerar resultados.' },
  { title: 'Desenvolvimento de Software', slug: 'desenvolvimento-software', icon: 'cpu', description: 'Aplicações web e móveis customizadas para as necessidades específicas do seu negócio.' },
  { title: 'Redes, Cablagem e HelpDesk', slug: 'redes-helpdesk', icon: 'network', description: 'Infraestrutura de TI, instalação de redes e suporte técnico especializado.' },
]

export const teamMembers: TeamMember[] = [
  { name: 'Atchutchi Ferreira', role: 'CEO e Gestor de Projetos' },
  { name: 'Clayton da Cruz L.J. Correia', role: 'CTO' },
  { name: 'Emerson Demésio Mendes', role: 'Director Geral' },
  { name: 'Carlos Rittos dos Santos', role: 'Designer Gráfico' },
  { name: 'Arianna Duarte', role: 'Gestora de Marketing e B2B' },
  { name: 'José', role: 'Videomaker' },
]

export const contactInfo = {
  address: 'Bairro Ajuda IA Fase, Bissau, Guiné-Bissau',
  phones: ['+245 955 949 429', '+245 966 865 331'],
  email: 'info@abiptom.gw',
}

export const portfolioFilters = ['Todos', 'Websites', 'Design Gráfico', 'Social Media', 'Vídeo']
