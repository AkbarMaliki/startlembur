import {
  Doughnut
} from '@/plugins/BaseCharts'
import {
  reactiveProp
} from '@/plugins/mixins'
export default {
  extends: Doughnut,
  mixins: [reactiveProp],
  mounted () {
    this.renderChart(this.chartData, {
      responsive: true,
      maintainAspectRatio: false
    })
  }
}
