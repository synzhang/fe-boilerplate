import { ReactNode } from 'react'
import type { Metadata } from "next"
import { headers } from 'next/headers'

interface Props {
  params: { [key: string]: string }
  children: ReactNode
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "url": `https://${process.env.DOMAIN}`,
  "name": "",
  "alternateName": [],
  "headline": "",
  "description": "",
  "image": `https://${process.env.DOMAIN}/assets/og.jpg`,
  "copyrightYear": new Date().getFullYear().toString(),
}

const hrefLangMap = {
  id: 'id',
  de: 'de',
  es: 'es',
  fr: 'fr',
  it: 'it',
  my: 'my',
  nl: 'nl',
  tl: 'tl',
  pl: 'pl',
  pt: 'pt',
  ru: 'ru',
  vi: 'vi',
  tr: 'tr',
  uk: 'uk',
  hi: 'hi',
  th: 'th',
  ko: 'ko',
  ja: 'ja',
  'zh-tw': 'tw',
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = params

  return {
    metadataBase: new URL("https://spinthewheel.cc"),
    title: {
      template: "%s | Spin The Wheel - Wheel of Names",
      default: "Spin The Wheel - Wheel of Names",
    },
    description: "",
    openGraph: {
      title: "",
      description: "",
      url: `https://${process.env.DOMAIN}`,
      siteName: "",
      images: [
        {
          url: '',
          width: 800,
          height: 600,
          alt: "",
        },
      ],
      // locale: "en_US",
      type: "website",
    },
    // alternates: {
    //   canonical: `https://${process.env.DOMAIN}/${locale === 'en' ? '' : locale}`,
    // },
  }
}

export default async function BaseLayout({
  children,
  params,
}: Props) {
  const headersList = headers();
  const i18nPathname = headersList.get('x-pathname') || ''
  const pathname = i18nPathname.replace(/^\/(id|de|es|fr|it|my|nl|ph|pl|pt|ru|vn|tr|ua|in|th|kr|jp|tw)/, '')
  const { locale } = params

  return (
    <html lang={locale} dir=''>
      <head>
        <link rel='alternate' hrefLang='en' href={`https://${process.env.DOMAIN}${pathname}`} />
        {Object.entries(hrefLangMap).map(([hrefLang, locale]) => (
          <link key={locale} rel='alternate' hrefLang={hrefLang} href={`https://${process.env.DOMAIN}/${locale}${pathname}`} />
        ))}
        <link rel='alternate' hrefLang='x-default' href={`https://${process.env.DOMAIN}${pathname}`} />
        <script type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
