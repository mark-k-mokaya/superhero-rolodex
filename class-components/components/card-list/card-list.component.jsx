import {Component} from "react";
import "./card-list.styles.css";
import Card from "../card/card.component";

class CardList extends Component{
    render(){
        const {heroes} = this.props;
        return(
            <div className="card-list">
                {heroes.map((superhero)=>{
                    return (
                        <Card superhero={superhero}/>
                    );
                })}
            </div>
        );
    }
}

export default CardList;