import { ReactNode } from 'react'

interface SectionProps {
  children: ReactNode
  className?: string
  id?: string
}

export default function Section({ children, className = '', id }: SectionProps) {
  return (
    <section id={id} className={`py-16 md:py-24 px-4 md:px-6 lg:px-8 ${className}`}>
      {children}
    </section>
  )
}

