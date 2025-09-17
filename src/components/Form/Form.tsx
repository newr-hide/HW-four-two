import S from './Form.module.css';
import classNames from 'classnames';



export function Form({ ...props }) {
    
    return (
        <form {...props}  className={classNames(S.form)}></form>
    );
}