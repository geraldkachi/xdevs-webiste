import Link from 'next/link'
import Script from 'next/script'
import { breadcrumbSchema } from '@/lib/metadata'

interface Crumb { name: string; href: string }

interface Props { items: Crumb[] }

export function Breadcrumb({ items }: Props) {
  const all = [{ name: 'Home', href: '/' }, ...items]
  return (
    <>
      <Script
        id={`breadcrumb-${items.map(i => i.href).join('-')}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(all)) }}
      />
      <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs opacity-50">
        {all.map((crumb, i) => (
          <span key={`crumb-${crumb.href}-${i}`} className="flex items-center gap-2">
            {i > 0 && <span aria-hidden="true">/</span>}
            {i < all.length - 1
              ? <Link href={crumb.href} className="hover:opacity-70 transition-opacity">{crumb.name}</Link>
              : <span aria-current="page">{crumb.name}</span>
            }
          </span>
        ))}
      </nav>
    </>
  )
}
