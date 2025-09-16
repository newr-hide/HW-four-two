import { type JSX } from 'react'
import S from './InputDateTrain.module.css'
import classNames from 'classnames'

export type InputTrainProps = JSX.IntrinsicElements['input']

export function InputTrain(props: InputTrainProps) {
    return(
        <div className={classNames(props.className, S.groupT)}>
        <div className={classNames(props.className, S.titleT)}>Дата (ДД.ММ.ГГ)</div>
        <input {...props} type= "date" className={classNames(props.className, S.inputT)}/>
        </div>
    )
}

