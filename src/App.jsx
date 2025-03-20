import { useState } from 'react'
import './App.css'

function App() {
  //todos is a variable and settodos is a function creation
  //use states are to temporarily hold data
  const [todos, setTodos] = useState(["wash clothes", "do dishes", "watch Friends"])
  const [userInput, setUserInput] = useState("")
  //e stands for event as in event listener
  //target is going to target the tag you specific in this case it is targetting the input tag
  //value is the input value user has input in this context.
  const inputHandler = (e) => {
    setUserInput(e.target.value)
    console.log(e.target)
  }
  const AddInput = (e) =>{
    e.preventDefault()
    //... is spreading as in spread all the array out
    if(userInput === ""){
      alert("stop, it is a null value")
    }
    else{
      setTodos([...todos, userInput])
    }
    setUserInput("")
  }
  return (
    <div className="App">
      <h1 className='logo'>Todo App</h1>
      <form type="submit" onSubmit={AddInput}>
      <input value={userInput} onChange={inputHandler} type="text"/>
      <button>Add to do list</button>
      <p>{userInput}</p>
      </form>
      <div>
        <ul>
          {
            //mapping is overlapping the existing array keeping the old one as well as adding new ones
            todos.map((todo) => {
              return(
                <li>{todo}</li>
              )
            })
          }
        </ul>
      </div>
    </div>
  );
}

export default App
