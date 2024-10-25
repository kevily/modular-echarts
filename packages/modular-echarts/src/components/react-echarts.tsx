import { FunctionComponent, useEffect, useRef, ReactNode, CSSProperties } from 'react'
import * as echarts from 'echarts/core'
import { GridComponent, DatasetComponent, TransformComponent } from 'echarts/components'
import { LabelLayout, UniversalTransition } from 'echarts/features'
import { CanvasRenderer } from 'echarts/renderers'
import { omit } from 'lodash-es'
import { Provider, useContext } from '../modular-echarts.model'
import { ECOptionType } from '../modular-echarts.type'

echarts.use([
    GridComponent,
    DatasetComponent,
    TransformComponent,
    LabelLayout,
    UniversalTransition,
    CanvasRenderer
])

export interface ReactEChartsPropsType extends Pick<ECOptionType, 'grid'> {
    children?: ReactNode
    style?: CSSProperties
    className?: string
    onInited?: (echartsInstance: echarts.ECharts) => void
    theme?: string
    initOpts?: echarts.EChartsInitOpts
    colors?: echarts.EChartsCoreOption['color']
    animation?: boolean
    /** @default true */
    autoResize?: boolean
}

const ReactEChartsComponent: FunctionComponent<ReactEChartsPropsType> = props => {
    props = { animation: true, autoResize: true, ...props }
    const rootRef = useRef<HTMLDivElement>(null)
    const echartsRef = useRef<echarts.ECharts>()
    const setState = useContext(state => state.setState)
    const option = useContext(state => state.option)

    useEffect(() => {
        const resizeObserver = new ResizeObserver(() => {
            echartsRef.current?.resize({ width: 'auto', height: 'auto' })
        })
        if (rootRef.current && props.autoResize) {
            resizeObserver.observe(rootRef.current)
        }

        return () => {
            resizeObserver.disconnect()
        }
    }, [props.autoResize, rootRef.current])

    useEffect(() => {
        echartsRef.current = echarts.init(rootRef.current, props.theme, props.initOpts)
        setState({ echartsInstance: echartsRef.current })
        props.onInited?.(echartsRef.current)

        return () => {
            echartsRef.current = void 0
            setState({ echartsInstance: void 0 })
        }
    }, [])

    useEffect(() => {
        echartsRef.current?.setOption({
            ...option,
            grid: props.grid,
            color: props.colors,
            animation: props.animation
        })
    }, [option, props.grid, props.colors, props.animation])

    return <div ref={rootRef} style={props.style} className={props.className} />
}

export const ReactECharts: FunctionComponent<ReactEChartsPropsType> = props => {
    return (
        <Provider>
            <ReactEChartsComponent {...omit(props, ['children'])} />
            {props.children}
        </Provider>
    )
}
