const UsernameInput = ({inputUsername, setInputUsername})=>{


const updateInputUsername = (event)=>{

setInputUsername(event.target.value)


}

return (
    <div>
    <label htmlFor="userInput">Username </label>
    <input value = {inputUsername} className="userInput" onChange={updateInputUsername}></input>
    </div>
   
  );


}

export default UsernameInput 