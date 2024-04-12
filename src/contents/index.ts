import churnPrediction from './projects/churn-prediction.md'
import fakeNewsDetection from './projects/fake-news-detection.md'
import olistDashboard from './projects/olist-dashboard.md'
import hotelBookings from './projects/hotel-bookings-etl.md'
import acid from './notes/acid.md'
import base from './notes/base.md'
import cap from './notes/cap.md'
import partition from './notes/partition.md'

const projects: Record<string, string> = {
  'churn-prediction': churnPrediction,
  'fake-news-detection': fakeNewsDetection,
  'olist-dashboard': olistDashboard,
  'hotel-bookings-etl': hotelBookings
}

const notes: Record<string, string> = {
  acid,
  base,
  cap,
  partition
}

export { projects, notes }
