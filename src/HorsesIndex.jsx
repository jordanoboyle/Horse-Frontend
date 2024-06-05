

export function HorsesIndex(props) {
  return(
    <div>
      <h1>All dem' Horses</h1>
      <div id="HorseCards">
      {props.horses.map((horse) => (
        <div key={horse.id}>
          <h2>{horse.breed}</h2> 
          <p>{horse.id}</p>
          <img id="HorseImg" src={horse.image_url}/>
          <p>Build: {horse.build}</p>
          <p>Color: {horse.color}</p>
          <p>Price: {horse.price}</p>
        </div>
      ))}
      </div>
    </div>
  )
}