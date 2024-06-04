import { HorsesIndex } from "./HorsesIndex"

export function Content() {

  const horses = [
    {size: "big", color: "black", price: 8000}
  ]

  return (
    <main>
      <h1>Welcome to React!</h1>
      <HorsesIndex horses={horses}/>
    </main>
  )
}