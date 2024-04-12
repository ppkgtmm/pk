import churnPrediction from './projects/churn-prediction.md'
import fakeNewsDetection from './projects/fake-news-detection.md'
import olistDashboard from './projects/olist-dashboard.md'
import hotelBookings from './projects/hotel-bookings-etl.md'

const projects: Record<string, string> = {
  'churn-prediction': churnPrediction,
  'fake-news-detection': fakeNewsDetection,
  'olist-dashboard': olistDashboard,
  'hotel-bookings-etl': hotelBookings
}

export { projects }
