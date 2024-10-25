import { memo } from 'react'
import * as echarts from 'echarts/core'
import { BarChart, type BarSeriesOption } from 'echarts/charts'
import { ListDataComponent } from '../list-data-component'

echarts.use([BarChart])

export type BarSeriesPropsType = Omit<BarSeriesOption, 'type'>
export const BarSeries = memo<BarSeriesPropsType>(props => {
    return <ListDataComponent dataKey='series' option={{ type: 'bar', ...props }} />
})
