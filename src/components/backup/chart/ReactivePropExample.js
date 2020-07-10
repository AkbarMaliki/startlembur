import {
  Bar
} from '@/plugins/BaseCharts'
import {
  reactiveProp
} from '@/plugins/mixins'

export default {
  extends: Bar,
  mixins: [reactiveProp],
  data: () => ({
    options: {
      responsive: true,
      maintainAspectRatio: false
    }
  }),

  mounted () {
    this.renderChart(this.chartData, this.options)
  }
}
