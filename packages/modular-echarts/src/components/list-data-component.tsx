import { memo, useEffect, useRef } from 'react'
import { isNumber, pullAt } from 'lodash-es'
import { useContext } from '../modular-echarts.model'

export interface ListDataComponentPropsType {
    dataKey: string
    option: any
}
export const ListDataComponent = memo<ListDataComponentPropsType>(props => {
    const setState = useContext(state => state.setState)
    const index = useRef<number>()

    useEffect(() => {
        setState(state => {
            if (isNumber(index.current)) {
                state.option[props.dataKey][index.current] = props.option
            } else {
                index.current = state.option[props.dataKey].length
                state.option[props.dataKey].push(props.option)
            }
        })

        return () => {
            if (index.current) {
                setState(state => {
                    pullAt(state.option[props.dataKey], [index.current!])
                })
            }
        }
    }, [props.dataKey, props.option])

    return null
})
