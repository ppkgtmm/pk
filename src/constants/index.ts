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
    title: 'Guide to Kafka Core Concepts Part 2',
    url: 'https://medium.com/@ppkgtmm/guide-to-kafka-core-concepts-part-2-0a50a401bc83',
    summary:
      'Second article about Kafka Concepts explaining data replication, producer acks, producer acks impact on availability and delivery semantics',
    tags: [tag.DENG, tag.CON, tag.KFK],
    category: category.ARTI,
    thumbnail: './imgs/kfk-concepts-pt2.png',
    id: 8,
    start_date: 'dec 2023'
  },
  {
    title: 'Guide to Kafka Core Concepts Part 1',
    url: 'https://medium.com/@ppkgtmm/guide-to-kafka-core-concepts-part-1-43a4afa58376',
    summary:
      'First article of Guide to Kafka Core Concepts series where purpose of Kafka and basic Kafka concepts are explained',
    tags: [tag.DENG, tag.CON, tag.KFK],
    category: category.ARTI,
    thumbnail: './imgs/kfk-concepts-pt1.png',
    id: 7,
    start_date: 'dec 2023'
  },
  {
    title: 'Shell Scripting Handbook',
    url: 'https://medium.com/@ppkgtmm/shell-scripting-handbook-c6cc6442814e',
    summary:
      'Comprehensive handbook with purposeful commands, syntax and example code clearly explained for learners',
    tags: [tag.PLT, tag.LNX, tag.SCR],
    category: category.ARTI,
    thumbnail: './imgs/shell-scripting-hb.png',
    id: 6,
    start_date: 'dec 2023'
  },
  {
    title: 'What expat students should know prior to graduating from TH',
    url: 'https://medium.com/@ppkgtmm/what-expat-students-should-know-prior-to-graduating-from-thailand-f774bcb45690',
    summary:
      'Based on my experience, helpful knowledge that expat students need to know before graduating from university in Thailand',
    tags: [tag.LIFE, tag.STU, tag.GRD],
    category: category.ARTI,
    thumbnail: './imgs/experience-grad-th.png',
    id: 5,
    start_date: 'aug 2023'
  },
  {
    title: 'hotel bookings ETL',
    slug: 'hotel-bookings-etl',
    summary:
      'Transform hotel reservation data into a format more suitable for visualization and analysis. Such conversion enables data users to create dashboards for insights discovery and decision making from data more effortlessly',
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
      'Identify customers who are at risk of churning with machine learning. Knowing possibility to churn of high value customers beforehand enables businesses to proactively take actions, retain customers and prevent possible loss',
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
