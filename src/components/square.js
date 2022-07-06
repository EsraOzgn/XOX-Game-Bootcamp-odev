import {useState} from 'react'
import '../App.css';


function Square({}) {

    
  const [turn,setTurn] = useState("")

  function changeTurn() {
      if (turn === "X") {
          setTurn("O")
      } else {
          setTurn("X")
      }
  }


  return (
    
        <div  className={turn === "X" ? "textX squares " :  "textO squares "} onClick={changeTurn} >  {turn}  </div>
    
  )
}

export default Square