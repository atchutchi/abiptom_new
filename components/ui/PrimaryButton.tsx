import Link from 'next/link'
import StarBorder from '@/components/reactbits/StarBorder'
import { cn } from '@/lib/utils'

interface PrimaryButtonProps {
  href?: string
  onClick?: () => void
  children: React.ReactNode
  className?: string
  type?: 'button' | 'submit'
  variant?: 'yellow' | 'outline' | 'star'
}

export default function PrimaryButton({
  href,
  onClick,
  children,
  className,
  type = 'button',
  variant = 'yellow',
}: PrimaryButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center px-8 py-4 font-bold uppercase tracking-wider text-sm transition-all duration-300 cursor-pointer'
  const variants = {
    yellow: 'bg-yellow text-black hover:bg-yellow-hover',
    outline: 'bg-transparent text-white border border-white/30 hover:border-yellow hover:text-yellow',
    star: '',
  }

  const styles = cn(baseStyles, variants[variant], className)

  const inner = href ? (
    <Link href={href} className={styles}>{children}</Link>
  ) : (
    <button type={type} onClick={onClick} className={styles}>{children}</button>
  )

  if (variant === 'star') {
    return <StarBorder>{inner}</StarBorder>
  }

  return inner
}
