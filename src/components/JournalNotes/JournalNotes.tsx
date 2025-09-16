import * as React from 'react';
import classNames from 'classnames';
import S from './JournalNotes.module.css';
import { JournalCard } from '../JournalCard/JournalCard';
import { useState } from 'react';

export type JournalNotesProps = {
    entries?: { id: number; dateTrain: string; distance: number }[];
    className?: string;
};

export function JournalNotes({entries, ...props }: JournalNotesProps) {

    return (
        <>
            <ol className={classNames(props.className, S.journal)}>
                <span className={classNames(props.className, S.title)}>Дата (ДД.ММ.ГГ)</span>
                <span className={classNames(props.className, S.title)}>Пройдено км.</span>
                <span className={classNames(props.className, S.title)}>Действия</span>
                {entries?.map((entry) => (
        <JournalCard key={entry.id} data={entry} />
      ))}
            </ol>
        </>
    );
}