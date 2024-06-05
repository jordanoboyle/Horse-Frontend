

export function HorsesIndex(props) {
  return(
    <div>
      <h1>All dem' Horses</h1>
      <div className="HorseCards">   
        {props.horses.map(item => (
          <div key={item.id}>
            <p>{item.id}</p>
            <h2>{item.breed}</h2> 
            <img className="itemImg" src={item.image_url} />
            <p>Build: {item.build}</p>
            <p>Color: {item.color}</p>
            <p>Price: {item.price}</p>
            <button onClick={props.onShowHorse}>More Information</button>
          </div>
        ))}
      </div>
    </div>
  );
}