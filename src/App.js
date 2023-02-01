import { useState, useEffect } from 'react';
import './App.css';
import SearchBox from './components/search-box/search-box.component';
import CardList from './components/card-list/card-list.component';



const App = ()=>{
  const [searchField, setSearchField] = useState('');
  const [superheroes, setSuperheroes] = useState([]);
  const [filteredSuperheroes, setFilteredSuperheroes] = useState(superheroes);

  useEffect(()=>{
    // fetch data from api
    // convert to json
    // set state
    fetch("https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json")
    .then(response => response.json())
    .then((users)=> {setSuperheroes(users);});
  }, []);

  useEffect(()=>{
    const newFilteredHeroes = superheroes.filter((hero)=>{
      return hero.name.toLocaleLowerCase().includes(searchField);
    });

    setFilteredSuperheroes(newFilteredHeroes);
  }, [superheroes, searchField]);

  const onSearchChange = (event)=>{
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  }

  return(
    <div className="App">
        <h1 className="app-title">The <span>Superhero</span> Rolodex</h1>

        <SearchBox className="heroes-search-box" onChangeHandler={onSearchChange} placeholder="Search Heroes"/>

        <CardList heroes={filteredSuperheroes} />
      </div>
  );
}
export default App;
