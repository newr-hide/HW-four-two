import { type JSX } from 'react'
import S from './InputDistance.module.css'
import classNames from 'classnames'


export type InputDistanceProps = JSX.IntrinsicElements['input']


export function InputDistance(props: InputDistanceProps) {
    return(
        <div className={classNames(props.className, S.groupDist)}>
        <div className={classNames(props.className, S.titleD)}>Пройдено км.</div>
        <input {...props} className={classNames(props.className, S.inputD)}></input>
        </div>
    )
}
