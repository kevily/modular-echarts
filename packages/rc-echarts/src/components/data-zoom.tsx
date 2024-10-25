import { FunctionComponent, useMemo } from 'react'
import * as echarts from 'echarts/core'
import { DataZoomComponent } from 'echarts/components'
import { PickObjType, ECOptionType } from '../rc-echarts.type'
import { ListDataComponent } from './list-data-component'

echarts.use([DataZoomComponent])

export interface DataZoomPropsType {
    slider: Omit<PickObjType<NonNullable<ECOptionType['dataZoom']>>, 'type'>
    inside?: Omit<PickObjType<NonNullable<ECOptionType['dataZoom']>>, 'type'>
}
export const DataZoom: FunctionComponent<DataZoomPropsType> = props => {
    const sliderOption = useMemo(() => ({ type: 'slider', ...props.slider }), [props.slider])
    const insideOption = useMemo(() => {
        if (props.inside) {
            return { type: 'inside', ...props.inside }
        }
        return void 0
    }, [props.inside])

    return (
        <>
            <ListDataComponent dataKey='dataZoom' option={sliderOption} />
            {insideOption ? <ListDataComponent dataKey='dataZoom' option={insideOption} /> : null}
        </>
    )
}
