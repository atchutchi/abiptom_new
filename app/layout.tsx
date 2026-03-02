import type { Metadata } from 'next'
import './globals.css'
import SiteHeader from '@/components/layout/SiteHeader'
import SiteFooter from '@/components/layout/SiteFooter'
import BackToTop from '@/components/ui/BackToTop'
import GSAPProvider from '@/components/providers/GSAPProvider'

export const metadata: Metadata = {
  title: {
    default: 'ABIPTOM - Marketing Digital, Design & Desenvolvimento Web | Guiné-Bissau',
    template: '%s | ABIPTOM',
  },
  description:
    'ABIPTOM, SARL - Consultores especializados em Marketing Digital, Design Gráfico, Desenvolvimento Web e Produção de Vídeo em Guiné-Bissau. Transformamos ideias em realidade digital.',
  keywords: [
    'ABIPTOM',
    'marketing digital',
    'design gráfico',
    'desenvolvimento web',
    'Guiné-Bissau',
    'Bissau',
    'produção de vídeo',
    'social media',
  ],
  openGraph: {
    type: 'website',
    locale: 'pt_GW',
    siteName: 'ABIPTOM',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt">
      <body className="font-sans antialiased">
        <GSAPProvider>
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
          <BackToTop />
        </GSAPProvider>
      </body>
    </html>
  )
}
