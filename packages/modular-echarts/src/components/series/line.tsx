import { memo } from 'react'
import * as echarts from 'echarts/core'
import { LineChart, type LineSeriesOption } from 'echarts/charts'
import { ListDataComponent } from '../list-data-component'

echarts.use([LineChart])

export type LineSeriesPropsType = Omit<LineSeriesOption, 'type'>
export const LineSeries = memo<LineSeriesPropsType>(props => {
    return <ListDataComponent dataKey='series' option={{ type: 'line', ...props }} />
})
