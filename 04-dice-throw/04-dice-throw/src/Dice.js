import {useState} from 'react'

export default function Dice(){
  const [number, setNumber] = useState(6);

  return (
    <div
    style = {{
      width: "50px",
      height: "50px",
      background: "gray",
      margin: "50px",
      color: "white",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }} onClick = {() => {setNumber(Math.floor(Math.random()*6+1))}}>
      {number}
    </div>
  )
};