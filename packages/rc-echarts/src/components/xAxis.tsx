import { memo } from 'react'
import { ECOptionType, PickObjType } from '../rc-echarts.type'
import { ListDataComponent } from './list-data-component'

export type XAxisPropsType = PickObjType<NonNullable<ECOptionType['xAxis']>>
export const XAxis = memo<XAxisPropsType>(props => {
    return <ListDataComponent dataKey='xAxis' option={props} />
})
