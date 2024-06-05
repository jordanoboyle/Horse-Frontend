import axios from "axios"

export function HorsesNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("handling submit of new horse")
    const params = new FormData(event.target);
    props.onCreateHorse(params)
    event.target.reset()
  };

  return (
    <div>
      <h1>Add Horse to Collection</h1>
        <div className="createWrapper">
          <form onSubmit={handleSubmit}>
            <div className="createRow">
              Breed type: <input name="breed" type="text" />
            </div>
            <br/>
            <br/>
            <div className="createRow">
              Horse Color: <input name="color" type="text" />
            </div>
            <br/>
            <br/>
            <div className="createRow">
              Build: <input name="build" type="text" />
            </div>
            <br/>
            <br/>
            <div className="createRow">
              Price: <input name="price" type="text" />
            </div>
            <br/>
            <br/>
            <div className="createRow">
              Image_URL: <input name="image_url" type="text" />
            </div>
            <button type="submit">Submit Horse Information </button>
          </form>
        </div>
    </div>
  )
}