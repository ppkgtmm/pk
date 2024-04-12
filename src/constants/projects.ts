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
      'Transformation of hotel reservation data into a better suited format for analytical purpose. Such conversion enables data users to create dashboards for insights discovery and decision making from data more effortlessly',
    tags: [tag.DENG, tag.VIZ, tag.KFK, tag.SPK, tag.ARF, tag.TBL],
    category: category.PROJ,
    thumbnail: './imgs/hotel-bookings/booking-dashboard.png',
    id: 4,
    start_date: 'may 2023'
  },
  {
    title: 'olist dashboard',
    slug: 'olist-dashboard',
    summary:
      'Overview of e-commerce revenue, customer satisfaction and delivery service in form of dashboard. By consolidating improvement areas for business into single view, insights can be derived from data faster and more conveniently',
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
      'Identification of customers at risk of churning with machine learning. Knowing possibility to churn of high value customers beforehand enables businesses to proactively take actions, retain customers and prevent possible loss',
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
      'Implementation of machine learning model to automate fake news detection. With such automation, news readers valuable time could be saved and negative effects from decisions made based on fake news could be reduced',
    tags: [tag.ML, tag.VIZ, tag.SPK],
    category: category.PROJ,
    thumbnail: './imgs/fake-news/front-end.png',
    id: 1,
    start_date: 'mar 2022'
  }
]
export { config, categories, tags, posts, defaultCategory }
