import { useState } from "react"

const Ejercicio3 = () => {
  const [message, setMessage] = useState('Hello my friend');

  const handleClick = () => {
    setMessage(`${message} (from changed state)!`);
  }
  return (
    <div>
      <h1>{message}</h1>
      <button className="btn btn-primary" onClick={handleClick}>Click me</button>
    </div>
  )
}
export default Ejercicio3