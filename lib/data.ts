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
  // Websites
  { title: 'Website ARN', subtitle: 'Desenvolvimento Web', image: '/images/portfolio/graphicdesign/websites/arn.png', category: 'Websites', slug: 'website-arn', featured: true },
  { title: 'Website Hotel Uque', subtitle: 'Desenvolvimento Web', image: '/images/portfolio/graphicdesign/websites/hotel-uque.png', category: 'Websites', slug: 'hotel-uque' },
  { title: 'Website APBEF', subtitle: 'Desenvolvimento Web', image: '/images/portfolio/graphicdesign/websites/apbef.png', category: 'Websites', slug: 'website-apbef' },
  { title: 'Website ABIPTOM', subtitle: 'Desenvolvimento Web', image: '/images/portfolio/graphicdesign/websites/abiptom.png', category: 'Websites', slug: 'website-abiptom' },
  { title: 'Website NDJAR', subtitle: 'Desenvolvimento Web', image: '/images/portfolio/graphicdesign/websites/ndjar.png', category: 'Websites', slug: 'website-ndjar' },
  { title: 'Website FUNDEI', subtitle: 'Desenvolvimento Web', image: '/images/portfolio/graphicdesign/websites/fundei.png', category: 'Websites', slug: 'website-fundei' },
  { title: 'Website Magui', subtitle: 'Desenvolvimento Web', image: '/images/portfolio/graphicdesign/websites/magui.png', category: 'Websites', slug: 'website-magui' },

  // Design Gráfico
  { title: 'Bissau Rising', subtitle: 'Design Gráfico', image: '/images/portfolio/graphicdesign/graphicdesign/bissaurising-banner.png', category: 'Design Gráfico', slug: 'bissau-rising', featured: true },
  { title: 'Campanha MTN Boss', subtitle: 'Design Gráfico', image: '/images/portfolio/graphicdesign/graphicdesign/campanha-boss-mtn-guine-bissau.jpg', category: 'Design Gráfico', slug: 'campanha-mtn-boss' },
  { title: 'Caiiro Tour', subtitle: 'Design Gráfico', image: '/images/portfolio/graphicdesign/graphicdesign/Caiiro-tour-setembro-social-media.png', category: 'Design Gráfico', slug: 'caiiro-tour' },
  { title: 'BioGuiné', subtitle: 'Design Gráfico', image: '/images/portfolio/graphicdesign/graphicdesign/POLO-shirt_bioGuine.png', category: 'Design Gráfico', slug: 'bioguine' },
  { title: 'Ateliê Afrochic', subtitle: 'Design Gráfico', image: '/images/portfolio/graphicdesign/graphicdesign/atelie-afrochic-salao.png', category: 'Design Gráfico', slug: 'atelie-afrochic' },
  { title: 'Bissau Rising Sectorial Forum', subtitle: 'Design Gráfico', image: '/images/portfolio/graphicdesign/graphicdesign/bissau-rising sectorial-forum-banner.png', category: 'Design Gráfico', slug: 'bissau-rising-sectorial' },
  { title: 'Domínio .GW', subtitle: 'Design Gráfico', image: '/images/portfolio/graphicdesign/graphicdesign/.gw-banner.png', category: 'Design Gráfico', slug: 'dominio-gw' },
  { title: 'Creative Industry Forum', subtitle: 'Design Gráfico', image: '/images/portfolio/graphicdesign/graphicdesign/flyer-evento-bissau-rising-criative-industry.png', category: 'Design Gráfico', slug: 'creative-industry' },
  { title: 'UNDP Luta Contra Corrupção', subtitle: 'Design Gráfico', image: '/images/portfolio/graphicdesign/graphicdesign/flyer_campanha_luta contra_corrupção_UNDP.jpg', category: 'Design Gráfico', slug: 'undp-luta-corrupcao' },
  { title: 'Capa Documento UNDP', subtitle: 'Design Gráfico', image: '/images/portfolio/graphicdesign/graphicdesign/capa-documento-UNDP.jpg', category: 'Design Gráfico', slug: 'capa-undp' },
  { title: 'iNff Banner', subtitle: 'Design Gráfico', image: '/images/portfolio/graphicdesign/graphicdesign/iNff-banner.png', category: 'Design Gráfico', slug: 'inff-banner' },
  { title: 'YSB Agenda', subtitle: 'Design Gráfico', image: '/images/portfolio/graphicdesign/graphicdesign/YSB_Agenda.png', category: 'Design Gráfico', slug: 'ysb-agenda' },

  // Social Media
  { title: 'Yunus Social Business', subtitle: 'Social Media', image: '/images/portfolio/graphicdesign/graphicdesign/ysb-design-social-media-1.jpg', category: 'Social Media', slug: 'yunus-social-business' },
  { title: 'YSB Social Media 2', subtitle: 'Social Media', image: '/images/portfolio/graphicdesign/graphicdesign/ysb-design-social-media-2.jpg', category: 'Social Media', slug: 'ysb-social-media-2' },
  { title: 'Bissau Rising Novembro', subtitle: 'Social Media', image: '/images/portfolio/graphicdesign/graphicdesign/flyer-bissau_rising_novembro_2022-07.jpg', category: 'Social Media', slug: 'bissau-rising-novembro' },

  // Fotografia
  { title: 'Afrochic - Produtos Capilares', subtitle: 'Fotografia', image: '/images/portfolio/graphicdesign/photos/atelie-afrochic-fotos-produtos-de-cabelo.png', category: 'Fotografia', slug: 'afrochic-fotos' },
  { title: 'Biscoitos de Caju - Alil', subtitle: 'Fotografia', image: '/images/portfolio/graphicdesign/photos/biscoitos_caju-da-alil_fabrico.jpg', category: 'Fotografia', slug: 'biscoitos-caju-alil' },
  { title: 'Chá Nha Guinendadi', subtitle: 'Fotografia', image: '/images/portfolio/graphicdesign/photos/chá_mistura_ervas-da-nha_guinendadi.jpg', category: 'Fotografia', slug: 'cha-nha-guinendadi' },
  { title: 'Modelo Braima Djata', subtitle: 'Fotografia', image: '/images/portfolio/graphicdesign/photos/modelo-braima-djata.jpg', category: 'Fotografia', slug: 'modelo-braima-djata' },
  { title: 'Sabonete Natural - Damaia', subtitle: 'Fotografia', image: '/images/portfolio/graphicdesign/photos/sabonete_natural-da-damaia.jpg', category: 'Fotografia', slug: 'sabonete-damaia' },
  { title: 'Tomate Pelado - Mehéd', subtitle: 'Fotografia', image: '/images/portfolio/graphicdesign/photos/tomate_pelado-da-mehéd.jpg', category: 'Fotografia', slug: 'tomate-mehed' },
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
    title: 'Sessão Fotográfica de Branding — Produtos Locais',
    date: '10 Fevereiro, 2024',
    excerpt: 'Realizámos sessões fotográficas profissionais para os produtos das empreendedoras, capturando a essência de cada marca.',
    image: '/images/blog/photo-shooting-branding.jpg',
    slug: 'sessao-fotografica-branding',
  },
  {
    title: 'Visita às Empreendedoras em Bafatá — Projeto AMAE',
    date: '28 Janeiro, 2024',
    excerpt: 'A nossa equipa visitou Bafatá para trabalhar directamente com as empreendedoras no terreno, recolhendo informações para o branding.',
    image: '/images/blog/visita-a-mehed-bafata-branding.jpg',
    slug: 'visita-bafata-amae',
  },
  {
    title: 'Visita a Nha Guinendadi em Pelundo',
    date: '15 Janeiro, 2024',
    excerpt: 'Conhecemos a produção artesanal de chás e ervas medicinais de Nha Guinendadi para desenvolver a identidade visual.',
    image: '/images/blog/visita-nha-guinendadi-em-pelundo-branding.jpg',
    slug: 'visita-nha-guinendadi-pelundo',
  },
  {
    title: 'Selo AMAE — Identidade Visual da Associação',
    date: '5 Janeiro, 2024',
    excerpt: 'Criámos o selo e a identidade visual da AMAE, representando o espírito empreendedor das mulheres guineenses.',
    image: '/images/blog/selo_amae.jpg',
    slug: 'selo-amae-identidade',
  },
  {
    title: 'Visita às Empreendedoras de Amuguimapa',
    date: '20 Dezembro, 2023',
    excerpt: 'Mais uma visita ao terreno, desta vez em Amuguimapa, Bafatá, para documentar e desenvolver identidades visuais.',
    image: '/images/blog/visita-amuguimapa-bafata-branding.jpg',
    slug: 'visita-amuguimapa-bafata',
  },
]

export const services: Service[] = [
  { title: 'Design Gráfico', slug: 'design-grafico', icon: 'palette', description: 'Criação de logotipos, flyers, cartazes, brochuras e materiais visuais que fortalecem sua marca.', image: '/images/servicos/design-grafico-img.png' },
  { title: 'Desenvolvimento Web', slug: 'desenvolvimento-web', icon: 'code', description: 'Websites modernos, responsivos e otimizados para SEO que convertem visitantes em clientes.', image: '/images/servicos/desenvolvimento-web.png' },
  { title: 'Social Media', slug: 'social-media', icon: 'share2', description: 'Gestão profissional de redes sociais com estratégias personalizadas para aumentar seu engajamento.', image: '/images/servicos/social-media.jpg' },
  { title: 'Produção de Vídeo', slug: 'producao-video', icon: 'video', description: 'Vídeos promocionais, animações e conteúdo audiovisual para impulsionar sua comunicação.' },
  { title: 'Fotografia', slug: 'fotografia', icon: 'camera', description: 'Serviços fotográficos profissionais para produtos, eventos e conteúdo corporativo.', image: '/images/servicos/fotografias.jpg' },
  { title: 'Animação 2D', slug: 'animacao-2d', icon: 'zap', description: 'Animações criativas que dão vida às suas ideias e capturam a atenção do seu público.' },
  { title: 'Marketing Digital', slug: 'marketing-digital', icon: 'trending-up', description: 'Estratégias digitais completas para crescer a sua presença online e gerar resultados.', image: '/images/servicos/marketing.png' },
  { title: 'Desenvolvimento de Software', slug: 'desenvolvimento-software', icon: 'cpu', description: 'Aplicações web e móveis customizadas para as necessidades específicas do seu negócio.' },
  { title: 'Redes, Cablagem e HelpDesk', slug: 'redes-helpdesk', icon: 'network', description: 'Infraestrutura de TI, instalação de redes e suporte técnico especializado.', image: '/images/servicos/redes.png' },
]

export const teamMembers: TeamMember[] = [
  { name: 'Atchutchi Ferreira', role: 'CEO e Gestor de Projetos', image: '/images/team/atchtchi.jpg' },
  { name: 'Clayton da Cruz L.J. Correia', role: 'CTO', image: '/images/team/clayton.jpg' },
  { name: 'Emerson Demésio Mendes', role: 'Director Geral', image: '/images/team/emerson.png' },
  { name: 'Carlos Rittos dos Santos', role: 'Designer Gráfico', image: '/images/team/carlos-rittos-dos-santos.jpeg' },
  { name: 'Arianna Duarte', role: 'Gestora de Marketing e B2B' },
  { name: 'José', role: 'Videomaker' },
]

export const clientLogos = [
  { name: 'UNDP', logo: '/images/clients/undp.png' },
  { name: 'UNIDO', logo: '/images/clients/unido.png' },
  { name: 'UNICEF', logo: '/images/clients/unicef.png' },
  { name: 'MTN', logo: '/images/clients/mtn.png' },
  { name: 'Aldeias SOS', logo: '/images/clients/sos.png' },
  { name: 'APBEF', logo: '/images/clients/apbef.png' },
  { name: 'ARN', logo: '/images/clients/arn.png' },
  { name: 'Bissau Rising', logo: '/images/clients/bissau-rising.png' },
  { name: 'AMAE', logo: '/images/clients/amae.png' },
  { name: 'BioGuinea', logo: '/images/clients/bioguinea.png' },
  { name: 'Darling', logo: '/images/clients/darling.png' },
  { name: 'ENA', logo: '/images/clients/ena.png' },
  { name: 'FUNDEI', logo: '/images/clients/fundei.png' },
  { name: 'Governo', logo: '/images/clients/governo.png' },
  { name: 'GB Digital', logo: '/images/clients/guine-bissau-digital.png' },
  { name: 'Hotel Uaque', logo: '/images/clients/hotel-uaque.png' },
  { name: 'Afrochic', logo: '/images/clients/afrochic.png' },
  { name: 'Gamela', logo: '/images/clients/gamela.png' },
  { name: 'CICA', logo: '/images/clients/cica.png' },
  { name: 'Convenção Cidadã', logo: '/images/clients/convenção-cidadã.png' },
  { name: 'ALIL', logo: '/images/clients/alil.png' },
  { name: 'AP Trading', logo: '/images/clients/ap-trading.png' },
  { name: 'Nha Guinendadi', logo: '/images/clients/nha-guinendadi.png' },
  { name: 'Fogão de Ouro', logo: '/images/clients/fogao-de-ouro.png' },
]

export const contactInfo = {
  address: 'Bairro Ajuda IA Fase, Bissau, Guiné-Bissau',
  phones: ['+245 955 949 429', '+245 966 865 331'],
  email: 'info@abiptom.gw',
}

export const portfolioFilters = ['Todos', 'Websites', 'Design Gráfico', 'Social Media', 'Fotografia']
