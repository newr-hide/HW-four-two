import S from './App.module.css';
import { Form } from '../Form/Form';
import { JournalNotes } from '../JournalNotes/JournalNotes';
import classNames from 'classnames';
import { type ClassName } from '../../models';
import { useState, type ChangeEvent, type FormEventHandler } from 'react';
import { InputTrain } from '../InputDateTrain/InputDateTrain';
import { InputDistance } from '../InputDistance/InputDistance';
import { ButtonSendJournal } from '../ButtonSendJournal/ButtonSendJournal';

interface JournalEntry {
    id: number;
    dateTrain: string;
    distance: number;
}

export function App(props: ClassName) {
    const handleDateChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setStateForm((prevState) => ({
            ...prevState,
            dateTrain: value
        }));
    };

    const handleDistanceChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        const numericValue = parseInt(value, 10);
        setStateForm((prevState) => ({
            ...prevState,
            distance: isNaN(numericValue) ? prevState.distance : numericValue
        }));
    };

    const [journalEntries, setJournalEntries] = useState<JournalEntry[]>([]);

    const [stateForm, setStateForm] = useState({
        dateTrain: '',
        distance: 0
    });

    const onSubmit: FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();
        if (!stateForm.dateTrain || stateForm.distance === 0) return;

        const nextId = Date.now();
        const entryToAdd: JournalEntry = {
            id: nextId,
            dateTrain: stateForm.dateTrain,
            distance: stateForm.distance
        };
        // console.log(entryToAdd)
        setJournalEntries(prevEntries => [...prevEntries, entryToAdd]);
        setStateForm({ dateTrain: '', distance: 0 });
    };

    const deleteEntry = (id: number) => {
        setJournalEntries(journalEntries.filter(entry => entry.id !== id));
    };
    return (
        <div className={classNames(props.className, S.formInput)}>
            <Form {...props} onSubmit={onSubmit}>
                <InputTrain onChange={handleDateChange} name="dateTrain" />
                <InputDistance onChange={handleDistanceChange} name="distance" />
                <ButtonSendJournal />
            </Form>
            <JournalNotes entries={journalEntries} onDelete={deleteEntry} />
        </div>
    );
}