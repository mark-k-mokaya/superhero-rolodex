import "./card.styles.css"

const Card = ({superhero}) =>{
    const {id, name, images, powerstats:{intelligence, strength, speed, durability, power, combat}} = superhero;

    return(
        <div className="card-container" key={id}>
        <img src={images.md} alt={`${name}`}/>

        <div className="stats">
            <hr/>
            <h2>{name}</h2>
            <hr/>
            <p>Intelligence: <span>{intelligence}</span> </p>
            <p> Strength: <span>{strength}</span></p>
            <p>Speed: <span>{speed}</span> </p>
            <p> Durability: <span>{durability}</span></p>
            <p>Power: <span>{power}</span> </p>
            <p> Combat: <span>{combat}</span></p>
        </div>
    </div>
    );
}

export default Card;