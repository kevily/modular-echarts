import { memo } from 'react'
import { ECOptionType, PickObjType } from '../rc-echarts.type'
import { ListDataComponent } from './list-data-component'

export type YAxisPropsType = PickObjType<NonNullable<ECOptionType['yAxis']>>
export const YAxis = memo<YAxisPropsType>(props => {
    return <ListDataComponent dataKey='yAxis' option={props} />
})
