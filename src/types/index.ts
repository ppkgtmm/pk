type ConfigObject = Record<string, string>

interface Config {
  profile: ConfigObject
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
  DENG = 'data engineering',
  CON = 'concepts',
  LIFE = 'life',
  STU = 'students',
  GRD = 'graduation',
  SCR = 'scripting',
  LNX = 'linux',
  PLT = 'platform'
}

export interface TPost {
  id: number
  title: string
  slug?: string
  url?: string
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
