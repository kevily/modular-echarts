# rc-echarts
English | [中文](./README-ZH.md)

> Component based ECharts for react.

## Install
```shell
npm i rc-echarts
pnpm i rc-echarts
```

## Use
```tsx
import { ReactECharts, XAxis, YAxis, Tooltip, Title, LineSeries, Legend  } from 'rc-echarts'

function Demo() {
    return (
        <ReactECharts style={{ width: 600, height: 300 }}>
            <Title text='Chart Title' />
            <Tooltip trigger='axis' />
            <Legend
                onSelectChanged={info => {
                    console.log('info', info)
                }}
            />
            <XAxis data={['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']} />
            <YAxis />
            <LineSeries name={'销量'} data={[5, 20, 36, 10, 10, 20]} />
            <LineSeries name={'销量2'} data={[5, 20, 36, 10, 10, 20]} />
        </ReactECharts>
    )
}
```

## Customize chart
```tsx
import * as echarts from 'echarts/core'
import { LineChart, type LineSeriesOption } from 'echarts/charts'
import { useContext, ReactECharts, XAxis, YAxis, Tooltip, Title, LineSeries, Legend , ECOption, ListDataComponent } from 'rc-echarts'

echarts.use([LineChart])

const CustomLineSeries: FunctionComponent<Omit<LineSeriesOption, 'type'>> = prop => {
    const option = useMemo(() => ({ type: 'line', ...props }), [props])
    const setState = useContext(state => state.setState)
    const index = useRef<number>()

    useEffect(() => {
        setState(state => {
            if (index.current) {
                state.option.series[index.current] = option
            } else {
                index.current = state.option.series.length
                state.option.series.push(option)
            }
        })

        return () => {
            if (index.current) {
                setState(state => {
                    pullAt(state.option.series, [index.current!])
                })
            }
        }
    }, [option])

    return null
}

const CustomLineSeriesTwo: FunctionComponent<Omit<LineSeriesOption, 'type'>> = prop => {
    const option = useMemo(() => ({ type: 'line', ...props }), [props])

    return <ListDataComponent dataKey='series' option={option} />
}

function Demo() {
    return (
        <ReactECharts style={{ width: 600, height: 300 }}>
            <Title text='Chart Title' />
            <Tooltip trigger='axis' />
            <Legend
                onSelectChanged={info => {
                    console.log('info', info)
                }}
            />
            <XAxis data={['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']} />
            <YAxis />
            <CustomLineSeries name={'销量'} data={[5, 20, 36, 10, 10, 20]} />
            <CustomLineSeriesTwo name={'销量'} data={[5, 20, 36, 10, 10, 20]} />
        </ReactECharts>
    )
}
```

