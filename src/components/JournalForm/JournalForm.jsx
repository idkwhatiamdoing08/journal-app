import styles from './JournalForm.module.css';
import Button from '../Button/Button';
import { useEffect, useReducer } from 'react';
import cn from 'classnames';
import { formReducer, INITIAL_STATE } from './JournalForm.state';



function JournalForm({ onSubmit }) {
    const [formState, dispatchForm] = useReducer(formReducer, INITIAL_STATE);
    const { isValid, isFormReadyToSubmit, values } = formState;
    
    useEffect(() => {
        let timerId;
        if(!isValid.tittle || !isValid.text || !isValid.date) {
            timerId = setTimeout(() => {
                dispatchForm({ type: 'RESET_VALIDITY' })
            }, 2000)
        } 
        return () => {
            clearTimeout(timerId);
        }
    }, [isValid])

    useEffect(()=>{
       onSubmit(values); 
    }, [isFormReadyToSubmit])


    const addNewJournal = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formProps = Object.fromEntries(formData);
    dispatchForm({ type: 'SUBMIT', payload: formProps })
    
  }

  return (
    <form className={styles['journal-form']} onSubmit={addNewJournal}>
        <input type='text' name='tittle' className={cn(styles['input-tittle'], {
            [styles['invalid']] : !formState.isValid.tittle
        })}/>
        <div className={styles['form-row']}>
            <label htmlFor="date" className={styles['form-label']}>
                <img src="/calendar.svg" alt="иконка календаря" />
                <span>Дата</span>
            </label>
            <input type="date" name="date" className={`${styles['input']} ${formState.isValid.date ? '' : styles['invalid']}`}  />
        </div>
        <div className={styles['form-row']}>
            <label htmlFor="date" className={styles['form-label']}>
                <img src="/folder.svg" alt="иконка папки" />
                <span>Метки</span>
            </label>
             <input type='text' name='tag' />
        </div>
        
         <textarea name="text" className={`${styles['input']} ${formState.isValid.text ? '' : styles['invalid']}`}></textarea>
         <Button  text="Сохранить"/>

    </form>
   
    
  )
}

export default JournalForm;