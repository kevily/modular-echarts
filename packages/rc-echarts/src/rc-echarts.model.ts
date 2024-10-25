import * as echarts from 'echarts/core'
import { defineContext } from 'define-zustand'
import { ECOptionType, PickArrayType } from './rc-echarts.type'

export const { useContext, Provider } = defineContext({
    state: () => ({
        echartsInstance: void 0 as echarts.ECharts | undefined,
        option: {
            title: [] as PickArrayType<ECOptionType['title']>,
            xAxis: [] as PickArrayType<ECOptionType['xAxis']>,
            yAxis: [] as PickArrayType<ECOptionType['yAxis']>,
            series: [] as PickArrayType<ECOptionType['series']>,
            // components
            // ----------------------------------------------------------------------
            tooltip: [] as PickArrayType<ECOptionType['tooltip']>,
            dataZoom: [] as PickArrayType<ECOptionType['dataZoom']>,
            legend: [] as PickArrayType<ECOptionType['legend']>
        }
    }),
    getter: {},
    actions: () => ({})
})
