import { type JSX } from 'react'
import S from './ButtonSendJournal.module.css'
import classNames from 'classnames'


export type ButtonSendJournalProps = JSX.IntrinsicElements['button']


export function ButtonSendJournal(props: ButtonSendJournalProps) {

    return(
        <button className={classNames(props.className, S.btnJourn)}>OK</button>
    )
}