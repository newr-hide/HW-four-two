import { type FormEventHandler, type ChangeEvent, useState } from 'react';
import S from './Form.module.css';
import classNames from 'classnames';
import { JournalCard } from '../JournalCard/JournalCard';
import { InputTrain } from '../InputDateTrain/InputDateTrain';
import { InputDistance } from '../InputDistance/InputDistance';
import { ButtonSendJournal } from '../ButtonSendJournal/ButtonSendJournal';


export function Form({ ...props }) {
    const [state, setState] = useState({
        dateTrain: '',
        distance: ''
    });
    const onSubmit: FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();
        const nextId = Date.now(); 
        const entryToAdd = {
            id: nextId,
            dateTrain: state.dateTrain,
            distance: parseInt(state.distance, 10)
        };
        
        // return(
        //     <JournalCard data={{
        //         dateTrain: entryToAdd.dateTrain,
        //         distance: entryToAdd.distance
        //     }}/>
        // ) 
    }
    
    return (
        <form {...props} onSubmit={onSubmit} className={classNames(S.form)}>
            <InputTrain name="dateTrain"/>
            <InputDistance name="distance" />
            <ButtonSendJournal />
        </form>
    );
}