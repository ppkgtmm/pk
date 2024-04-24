import type { Config, TCategories, TTags, TPosts } from '../types'
import { category, tag } from '../types'

const config: Config = {
  profile: {
    name: 'Pinky Gautam',
    role: 'data engineer',
    email: 'pinky.gtm@outlook.com',
    linkedin: 'pinky-gautam',
    github: 'ppkgtmm',
    medium: '@ppkgtmm'
  },
  since: 2023
}
const defaultCategory = '📂 all'
const categories: TCategories = [defaultCategory, ...Object.values(category)]
const tags: TTags = Object.values(tag)

const posts: TPosts = [
  {
    title: 'hotel bookings ETL',
    slug: 'hotel-bookings-etl',
    summary:
      'Created data warehouse and dashboards from realistic hotel reservation data',
    tags: [tag.DENG, tag.VIZ, tag.KFK, tag.SPK, tag.ARF, tag.TBL],
    category: category.PROJ,
    thumbnail: './imgs/hotel-bookings/booking-dashboard.png',
    id: 4,
    start_date: 'may 2023'
  },
  {
    title: 'olist e-commerce dashboard',
    slug: 'olist-dashboard',
    summary:
      'Built dashboard to summarize revenue, customer satisfaction and delivery service',
    tags: [tag.VIZ, tag.TBL],
    category: category.PROJ,

    thumbnail: './imgs/olist/dashboard.png',
    id: 3,
    start_date: 'jun 2023'
  },
  {
    title: 'churn prediction',
    slug: 'churn-prediction',
    summary:
      'Utilized machine learning to identify customers who are at risk of churning',
    tags: [tag.ML, tag.VIZ, tag.ARF],
    category: category.PROJ,

    thumbnail: './imgs/churn/front-end.png',
    id: 2,
    start_date: 'mar 2022'
  },
  {
    title: 'fake news detection',
    slug: 'fake-news-detection',
    summary:
      'Implementated machine learning model to automate fake news detection',
    tags: [tag.ML, tag.VIZ, tag.SPK],
    category: category.PROJ,
    thumbnail: './imgs/fake-news/front-end.png',
    id: 1,
    start_date: 'mar 2022'
  }
]
export { config, categories, tags, posts, defaultCategory }
