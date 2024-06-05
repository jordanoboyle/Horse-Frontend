import axios from "axios"

export function HorseShow(props) {
  console.log(props);
  //make a form
  //submit a form
  //mimic httpie web request using JS
  //modify frontend to show changes
  const submitUpdateHorse = (event) => {
    console.log("updating the horse");
    event.preventDefault();
    const params = new FormData(event.target); //this pulls the data from the form (react magic)
    axios.patch(`http://localhost:3000/horses/${props.horse.id}.json`, params).then((response) => {
      console.log(response.data);
      window.location.href = "/";
    });
  }

  //make delete button
  //attach button submission to function const....
  //create horse to delete
  //mimic httpie delete request using JS
  //modify front end basically to show result. 
  const submitDeleteHorse = (event) => {
    console.log("deleting this horse record")
    axios.delete("http://localhost:3000/horses/59.json");
  }

  return (
    <div>
        <p>HORSE ID: {props.horse.id}</p>
        <p>HORSE BREED: {props.horse.breed}</p>
      <form onSubmit={submitUpdateHorse}>
        <p>Breed: <input type="text" name="breed" defaultValue={props.horse.breed} /></p>
        <p>Color: <input type="text" name="color" defaultValue={props.horse.color} /></p>
        <p>Price: <input type="text" name="price" defaultValue={props.horse.price} /></p>
        <p>Build: <input type="text" name="build" defaultValue={props.horse.build} /></p>
        <p>Image_url: <input type="text" name="image_url" defaultValue={props.horse.image_url} /></p>
        <button type="submit" value="update horse">Update Horse Information</button>
      </form>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <button onClick={submitDeleteHorse}>Delete This Horse</button>
    </div>
  )
}