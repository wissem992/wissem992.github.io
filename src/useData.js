import { useTranslation } from 'react-i18next'
import { data as dataFr } from './data'
import { data as dataEn } from './data.en'

export function useData() {
  const { i18n } = useTranslation()
  return i18n.language === 'en' ? dataEn : dataFr
}