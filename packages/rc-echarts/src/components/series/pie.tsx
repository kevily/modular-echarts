import { memo } from 'react'
import * as echarts from 'echarts/core'
import { PieChart, type PieSeriesOption } from 'echarts/charts'
import { ListDataComponent } from '../list-data-component'

echarts.use([PieChart])

export type PieSeriesPropsType = Omit<PieSeriesOption, 'type'>
export const PieSeries = memo<PieSeriesPropsType>(props => {
    return <ListDataComponent dataKey='series' option={{ type: 'pie', ...props }} />
})
