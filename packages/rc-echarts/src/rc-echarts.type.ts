import type { BarSeriesOption, LineSeriesOption } from 'echarts/charts'
import type {
    TitleComponentOption,
    TooltipComponentOption,
    GridComponentOption,
    DatasetComponentOption,
    DataZoomComponentOption,
    LegendComponentOption
} from 'echarts/components'
import type { ComposeOption } from 'echarts/core'

export type ECOptionType = ComposeOption<
    | BarSeriesOption
    | LineSeriesOption
    | TitleComponentOption
    | TooltipComponentOption
    | GridComponentOption
    | DatasetComponentOption
    | DataZoomComponentOption
    | LegendComponentOption
>

export type PickObjType<T> = T extends Array<any> ? never : T
export type PickArrayType<T> = T extends Array<any> ? T : never
