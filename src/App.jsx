import './App.css'
import Button from './components/Button/Button';
import CardButton from './components/CardButton/CardButton';
import JournalItem from './components/JournalItem/JournalItem';
import LeftPannel from './layouts/LeftPannel/LefPannel';
import Body from './layouts/Body/Body';
import Header from './components/Header/Header';
import JournalList from './components/JournalList/JournalList';
import JournalAddButton from './components/JournalAddButton/JournalAddButton';
import JournalForm from './components/JournalForm/JournalForm';
import { useEffect, useState } from 'react';

function App() {
  const [items, setItems] = useState([]);
 useEffect(() => {
		const data = JSON.parse(localStorage.getItem('data'));
		if (data) {
			setItems(data.map(item => ({
				...item,
				date: new Date(item.date)
			})));
		}
	}, []);

  useEffect(()=> {
    if(items.length) {
      localStorage.setItem('data', JSON.stringify(items))
    }
  }, [items])

  

  const addItem = item => {
		setItems(oldItems => [...oldItems, {
			text: item.text,
			tittle: item.tittle,
			date: new Date(item.date),
      id: oldItems.length > 0 ? Math.max(...oldItems.map(i => i.id)) + 1 : 1
		}]);
	};


  return (
      <div className='app'>
        <LeftPannel>
            <Header/>
            <JournalAddButton/>
            <JournalList>
              {items.length === 0 && <p>Добавьте свою первую запись</p>} 
              {items.length > 0 && items.map(el => (
                <CardButton key={el.id}>
                  <JournalItem
                    tittle={el.tittle}
                    text={el.text}
                    date={el.date}
                  />
                </CardButton>
              )

              )}
            </JournalList>
        </LeftPannel>
        <Body>
          <JournalForm onSubmit={addItem}/>
        </Body>
      </div>
      
    )
  }

export default App
