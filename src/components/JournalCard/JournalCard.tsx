import classNames from 'classnames'
import S from './JournalCard.module.css'

export type JournalCardProps = {
    className?: string
    data: {
        dateTrain: string
        distance: number
    }
}

export function JournalCard(props: JournalCardProps) {
    
        return(
        <li className={classNames(props.className, S.Card)}>
            <div className={classNames(props.className, S.title)}></div>
            <div className={classNames(props.className, S.title)}></div>
            <div className={classNames(props.className, S.btnsCard)}>
                <button className={classNames(props.className, S.btnCard)}>✎</button>
                <button className={classNames(props.className, S.btnCard)}>✘</button>
            </div>
        </li>
    )
}