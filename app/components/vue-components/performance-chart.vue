<template>
  <div class="c-chart__container">
    <v-chart ref="chart" :option="chartOptions" />
  </div>
</template>

<script>
import moment from "moment";
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { LineChart } from "echarts/charts";
import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
  VisualMapComponent,
} from "echarts/components";
import VChart from "vue-echarts";

use([
  CanvasRenderer,
  LineChart,
  TitleComponent,
  TooltipComponent,
  GridComponent,
  VisualMapComponent,
]);

export default {
  name: "PerformanceChartComponent",
    props: {
      newData: []
    },
  components: {
    VChart,
  },

  data() {
    return {
       /*chartData: [
         {
           date_ms: 1641772800000,
           performance: 0.2,
         },
         {
           date_ms: 1641859200000,
           performance: 0.33,
         },
         {
           date_ms: 1641945600000,
           performance: 0.53,
         },
         {
           date_ms: 1642032000000,
           performance: 0.31,
         },
         {
           date_ms: 1642118400000,
           performance: 0.65,
         },
         {
           date_ms: 1642204800000,
           performance: 0.88,
         },
         {
           date_ms: 1642291200000,
           performance: 0.07,
         },
       ], */
    };
  },

  computed: {
    chartData(){
      return this.newData.length != 0 ? this.newData : this.$store.getters.getPerformance
    },
    initOptions() {
      return {
        width: "auto",
        height: "300px",
      };
    },

    chartOptions() {
      return {
        title: {
          text: "Team Performance Index",
          left: "center",
        },
        tooltip: {
          trigger: 'axis',
          padding: 10,
          backgroundColor: "#071330",
          textStyle: {
            color: "#fff",
          },
        },
        grid: {
          left: "30px",
          right: "12px",
          bottom: "2px",
          top: "6px",
          containLabel: true,
        },
        xAxis: {
          type: "category",
          showGrid: false,
          data: this.xAxisData,
          axisLine: {
            show: true,
          },
          axisTick: {
            show: false,
          },
          axisLabel: {
            fontSize: 11,
          },
        },
        yAxis: {
          axisLabel: { show: true },
          axisTick: { show: true },
          splitLine: { show: true },
        },
        visualMap: {
          top: 50,
          right: 10,
          pieces: [
            {
              gt: 0,
              lte: 50,
              color: '#FD0100'
            },
            {
              gt: 50,
              lte: 80,
              color: '#FBDB0F'
            },
            {
              gt: 80,
              lte: 100,
              color: '#93CE07'
            },
          ],
          outOfRange: {
            color: '#999'
          }
      },
        series: [
          {
            name:"Team Performance Index",
            itemStyle: {
              color: "#8ec6ad"
             },
            data: this.yAxisData,
            markLine: {
                data: [
                  {
                    yAxis: 50
                  },
                  {
                    yAxis: 80
                  },
                  {
                    yAxis: 100
                  },
                ]
            },
            type: "line",
            symbol: "circle",
            symbolSize: 2,
            cursor: "default",
            lineStyle: {
              width: 2,
            },
          },
        ],
      };
    },

    xAxisData() {
      return this.chartData.map((item) => this.formatDate(item.date_ms));
    },

    yAxisData() {
      return this.chartData.map((item) => +item.performance * 100);
    },
    mySeriesStyles(){

    }
  },

  methods: {
    formatDate(dateInMs) {
      return moment(dateInMs).format("DD MMM YYYY");
    },
  },
};
</script>
