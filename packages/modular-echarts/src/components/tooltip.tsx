import { memo } from 'react'
import * as echarts from 'echarts/core'
import { TooltipComponent } from 'echarts/components'
import { ECOptionType, PickObjType } from '../modular-echarts.type'
import { ListDataComponent } from './list-data-component'

echarts.use([TooltipComponent])

export type TooltipPropsType = PickObjType<NonNullable<ECOptionType['tooltip']>>
export const Tooltip = memo<TooltipPropsType>(props => {
    return <ListDataComponent dataKey='tooltip' option={props} />
})
