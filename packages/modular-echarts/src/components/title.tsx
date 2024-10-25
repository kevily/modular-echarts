import { memo } from 'react'
import * as echarts from 'echarts/core'
import { TitleComponent } from 'echarts/components'
import { ECOptionType, PickObjType } from '../modular-echarts.type'
import { ListDataComponent } from './list-data-component'

echarts.use([TitleComponent])

export type TitlePropsType = PickObjType<NonNullable<ECOptionType['title']>>
export const Title = memo<TitlePropsType>(props => {
    return <ListDataComponent dataKey='title' option={props} />
})
