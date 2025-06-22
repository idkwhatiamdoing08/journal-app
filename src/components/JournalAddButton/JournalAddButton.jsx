import CardButton from "../CardButton/CardButton";
import "./JournalAddButton.css";

function JournalAddButton({ clearForm }) {
  return (
    <CardButton className="journal-add" onClick={clearForm}>
      <img src="/add.svg" alt="иконка добавить" />
      Новое воспонимание
    </CardButton>
  );
}

export default JournalAddButton;
