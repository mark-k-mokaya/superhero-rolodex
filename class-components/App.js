import {Component} from 'react';
import './App.css';
import SearchBox from './components/search-box/search-box.component';
import CardList from './components/card-list/card-list.component';

class App extends Component {
  constructor(){
    super();
    this.state = {
      superheroes: [],
      searchField: ""
    };
  }

  componentDidMount(){
    fetch("https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json")
    .then(response => response.json())
    .then(users => this.setState(()=>{
      return {superheroes: users};
    }));
  }

  onSearchChange = (event)=>{
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState(()=>{
      return {searchField};
    });
  }

  render(){
    const {superheroes, searchField} = this.state;
    const {onSearchChange} = this;

    const filteredHeroes = superheroes.filter((hero)=>{
      return hero.name.toLocaleLowerCase().includes(searchField);
    });

    return (
      <div className="App">
        <h1 className="app-title">The <span>Superhero</span> Rolodex</h1>
        <SearchBox className="heroes-search-box" onChangeHandler={onSearchChange} placeholder="Search Heroes"/>
        <CardList heroes={filteredHeroes} />
      </div>  
    );
  }
}

export default App;
