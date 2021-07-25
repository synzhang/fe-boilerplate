import { createIntl, createIntlCache } from 'react-intl'
import en from '@/lang/en.json'
import zh from '@/lang/zh.json'

const cache = createIntlCache()

const locale = 'zh'

const loadLocaleData = (locale: string) => {
  switch (locale) {
    case 'zh':
      return zh
    default:
      return en
  }
}

const intl = createIntl({
  locale,
  messages: loadLocaleData(locale)
}, cache)

export default intl
