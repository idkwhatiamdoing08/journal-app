import "./JournalItem.css";

function JournalItem({ tittle, text, date }) {
  const formatedDate = new Intl.DateTimeFormat("ru-RU").format(date);
  return (
    <>
      <h2 className="journal-item__header">{tittle}</h2>
      <div className="journal-item__body">
        <div className="journal-item__date">{formatedDate.toString()}</div>
        <div className="journal-item__text">{text}</div>
      </div>
    </>
  );
}

export default JournalItem;
