import CardButton from '../CardButton/CardButton';
import './JournalAddButton.css';

function JournalAddButton() {

  return (
    <CardButton className="journal-add">
      <img src="/add.svg" alt="иконка добавить" />
        Новое воспонимание
    </CardButton>
    
  )
}

export default JournalAddButton;