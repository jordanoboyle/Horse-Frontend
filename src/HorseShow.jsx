export function HorseShow(props) {
  console.log(props);
  //make a form
  //submit a form
  //mimic httpie web request using JS
  //modify frontend to show changes

  return (
    <div>
      <form>
        <p>Breed: <input type="text" /></p>
        <p>Color: <input type="text" /></p>
        <p>Price: <input type="text" /></p>
        <p>Build: <input type="text" /></p>
        <p>Image_url: <input type="text" /></p>
        <button type="submit">Update Horse Information</button>
      </form>
    </div>
  )
}