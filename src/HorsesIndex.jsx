

export function HorsesIndex(props) {
  return(
    <di>
      <h1>All dem' Horses</h1>
      {props.horses.map((horse) => (
        <div key={horse.id}>
          <h2>{props.horse.breed}</h2> 
          <img src={props.horse.image_url}/>
          <p>Size: {props.horse.size}</p>
          <p>Color: {props.horse.color}</p>
          <p>price: {props.horse.price}</p>
        </div>
      ))}
    </di>
  )
}