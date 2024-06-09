import churnPrediction from './projects/churn-prediction.md'
import fakeNewsDetection from './projects/fake-news-detection.md'
import olistDashboard from './projects/olist-dashboard.md'
import hotelDataWarehouse from './projects/hotel-data-warehouse.md'

const projects: Record<string, string> = {
  'churn-prediction': churnPrediction,
  'fake-news-detection': fakeNewsDetection,
  'e-commerce-dashboard': olistDashboard,
  'hotel-data-warehouse': hotelDataWarehouse
}

export { projects }
