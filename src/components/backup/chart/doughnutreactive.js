import {
  Doughnut
} from '@/plugins/BaseCharts'

export default {
  extends: Doughnut,
  props: {
    chartdata: {
      type: Object,
      default: null
    },
    options: {
      type: Object,
      default: null
    }
  },
  mounted () {
    this.renderChart(this.chartdata, {
      responsive: true,
      maintainAspectRatio: false
    })
  }
}
