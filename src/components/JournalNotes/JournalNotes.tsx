
import classNames from 'classnames';
import S from './JournalNotes.module.css';
import { JournalCard } from '../JournalCard/JournalCard';

export type JournalNotesProps = {
    entries?: { id: number; dateTrain: string; distance: number }[];
    className?: string;
    onDelete: (id: number) => void;
};

export function JournalNotes({entries,onDelete, ...props }: JournalNotesProps) {
    const sortedEntries = entries?.slice().sort((a, b) =>
        new Date(a.dateTrain).getTime() - new Date(b.dateTrain).getTime()
    ) ?? [];
   

    return (
        <>
            <ol className={classNames(props.className, S.journal)}>
                <span className={classNames(props.className, S.title)}>Дата (ДД.ММ.ГГ)</span>
                <span className={classNames(props.className, S.title)}>Пройдено км.</span>
                <span className={classNames(props.className, S.title)}>Действия</span>
                {sortedEntries.map((entry) => (
        <li key={entry.id}>
            <JournalCard data={entry} onDelete={onDelete} />
        </li>
    ))}
                
            </ol>
        </>
    );
}