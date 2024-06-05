

export function HorsesIndex(props) {
  return(
    <div>
      <h1>All dem' Horses</h1>
      <div className="HorseCards">   
        {props.horses.map(horse => (
          <div key={horse.id}>
            <p>{horse.id}</p>
            <h2>{horse.breed}</h2> 
            <img className="itemImg" src={horse.image_url} />
            <p>Build: {horse.build}</p>
            <p>Color: {horse.color}</p>
            <p>Price: {horse.price}</p>
            <button onClick={() => props.onShowHorse(horse)}>More Information</button>
          </div>
        ))}
      </div>
    </div>
  );
}