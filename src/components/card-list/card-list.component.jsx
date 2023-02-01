import "./card-list.styles.css";
import Card from "../card/card.component";

const CardList = ({heroes}) => (
    <div className="card-list">
        {heroes.map((superhero)=>{
            return (
                <Card key={superhero.id} superhero={superhero}/>
            );
        })}
    </div>
);

export default CardList;