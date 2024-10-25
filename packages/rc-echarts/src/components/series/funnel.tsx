import { memo } from 'react'
import * as echarts from 'echarts/core'
import { FunnelChart, type FunnelSeriesOption } from 'echarts/charts'
import { ListDataComponent } from '../list-data-component'

echarts.use([FunnelChart])

export type FunnelSeriesPropsType = Omit<FunnelSeriesOption, 'type'>
export const FunnelSeries = memo<FunnelSeriesPropsType>(props => {
    return <ListDataComponent dataKey='series' option={{ type: 'funnel', ...props }} />
})
