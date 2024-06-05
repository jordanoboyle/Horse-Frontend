import axios from "axios"

export function HorsesNew(props) {

  const handleNewHorse = (event) => {
    console.log("handling creating new horse")
    event.preventDefault();
    const params = new FormData(event.target)
    axios.post("http://localhost:3000/horses.json", params).then(response => {
      console.log(response.data)
    })
  }

  return (
    <div>
      <h1>Add Horse to Collection</h1>
      <form onSubmit={handleNewHorse}>
        <ul className="createWrapper">
          <li className="createRow">
            <label htmlFor="breed">Breed type:</label>
            <input type="text" name="breed" />
          </li>
          <br/>
          <br/>
          <li className="createRow">
            <label htmlFor="color">Horse Color:</label>
            <input type="text" name="color" />
          </li>
          <br/>
          <br/>
          <li className="createRow">
            <label htmlFor="build">Build: </label> 
            <input type="text" name="build" />
          </li>
          <br/>
          <br/>
          <li className="createRow">
            <label htmlFor="price">Price: </label>
            <input type="number" name="price" />
          </li>
          <br/>
          <br/>
          <li className="createRow">
            <label htmlFor="image_url">Image_URL: </label>
            <input type="url" name="image_url" />
          </li>
        </ul>
        <button type="submit">Submit Horse Information</button>
      </form>
    </div>
  )
}