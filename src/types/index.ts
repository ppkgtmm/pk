type ConfigObject = Record<string, string>

interface Config {
  profile: ConfigObject
  blog: ConfigObject
  since: number
  isProd: boolean
}

export enum category {
  PROJ = '📊 project',
  ARTI = '📝 article'
}

export enum tag {
  KFK = 'kafka',
  SPK = 'spark',
  ARF = 'airflow',
  TBL = 'tableau',
  ML = 'machine learning',
  VIZ = 'visualization',
  DENG = 'data engineering'
}

export interface TPost {
  id: number
  title: string
  link: string
  category: category
  tags: tag[]
  summary: string
  thumbnail: string
  start_date: string
}

export type TPosts = TPost[]
export type TTags = tag[]
export type TCategories = string[]

export type { Config }
