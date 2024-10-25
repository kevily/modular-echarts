import { memo, useEffect, useRef } from 'react'
import * as echarts from 'echarts/core'
import { LegendComponent } from 'echarts/components'
import { noop } from 'lodash-es'
import { ECOptionType, PickObjType } from '../modular-echarts.type'
import { useContext } from '../modular-echarts.model'
import { ListDataComponent } from './list-data-component'

echarts.use([LegendComponent])

export type LegendPropsType = PickObjType<NonNullable<ECOptionType['legend']>> & {
    onSelectChanged?: (info: {
        type: 'legendselectchanged'
        name: string
        selected: { [name: string]: boolean }
    }) => void
}

export const Legend = memo<LegendPropsType>(props => {
    const echartsInstance = useContext(state => state.echartsInstance)
    const eventsCache = useRef({ legendselectchanged: noop })

    useEffect(() => {
        if (echartsInstance && props.onSelectChanged) {
            echartsInstance.off('legendselectchanged', eventsCache.current.legendselectchanged)
            eventsCache.current.legendselectchanged = props.onSelectChanged || noop
            echartsInstance.on(
                'legendselectchanged',
                eventsCache.current.legendselectchanged as never
            )
        }
    }, [echartsInstance, props.onSelectChanged])

    return <ListDataComponent dataKey='legend' option={props} />
})
