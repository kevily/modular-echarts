import { ReactECharts, BarSeries, XAxis, YAxis, Tooltip, Title, LineSeries, Legend } from './index'
import type { Meta, StoryObj } from '@storybook/react'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof ReactECharts> = {
    title: 'demo',
    component: ReactECharts,
    tags: ['autodocs']
}
type Story = StoryObj<typeof meta>

export default meta

export const BarChartComponent: Story = {
    render: () => {
        return (
            <ReactECharts style={{ width: 600, height: 300 }}>
                <Title text='Chart Title' />
                <Tooltip trigger='axis' axisPointer={{ type: 'shadow', label: { show: true } }} />
                <XAxis data={['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']} />
                <YAxis />
                <BarSeries name={'销量'} data={[5, 20, 36, 10, 10, 20]} />
            </ReactECharts>
        )
    }
}

export const LineChartComponent: Story = {
    render: () => {
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
}
