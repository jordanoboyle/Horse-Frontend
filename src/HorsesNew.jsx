

export function HorsesNew() {

  return (
    <div>
      <h1>Add Horse to Collection</h1>
      <form>
        <ul className="createWrapper">
          <li className="createRow">
            <label htmlFor="breed">Breed type:</label>
            <input type="text"/>
          </li>
          <br/>
          <br/>
          <li className="createRow">
            <label htmlFor="color">Horse Color:</label>
            <input type="text" />
          </li>
          <br/>
          <br/>
          <li className="createRow">
            <label htmlFor="build">Build: </label> 
            <input type="text" />
          </li>
          <br/>
          <br/>
          <li className="createRow">
            <label htmlFor="price">Price: </label>
            <input type="number" />
          </li>
          <br/>
          <br/>
          <li className="createRow">
            <label htmlFor="image_url">Image_URL: </label>
            <input type="url" />
          </li>
        </ul>
        <button type="submit">Submit Horse Information</button>
      </form>
    </div>
  )
}