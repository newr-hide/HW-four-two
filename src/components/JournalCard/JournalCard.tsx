import classNames from 'classnames'
import S from './JournalCard.module.css'

export type JournalCardProps = {
    className?: string
    data: {
        id: number
        dateTrain: string
        distance: number
    }
    onDelete: (id: number) => void;
}

export function JournalCard({data, onDelete, ...props}: JournalCardProps) {
    
        return(
        <div className={classNames(props.className, S.Card)}>
            <div className={classNames(props.className, S.title)}>{data.dateTrain}</div>
            <div className={classNames(props.className, S.title)}>{data.distance}</div>
            <div className={classNames(props.className, S.btnsCard)}>
                <button className={classNames(props.className, S.btnCard)}>✎</button>
                <button className={classNames(props.className, S.btnCard)} onClick={() => onDelete(data.id)}>✘</button>
            </div>
        </div>
    )
}