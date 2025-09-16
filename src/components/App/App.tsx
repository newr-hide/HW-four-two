import S from './App.module.css'
import { Form } from '../Form/Form'
import { JournalNotes } from '../JournalNotes/JournalNotes'
import classNames from 'classnames'
import  {type ClassName}  from '../../models'





export function App(props: ClassName) {
        
    return(
        <div className={classNames(props.className, S.formInput)}>
            <Form />
            <JournalNotes/>
        </div>
            
                
        
        
    )
}