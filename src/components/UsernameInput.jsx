const UsernameInput = ({inputUsername, setInputUsername})=>{


const updateInputUsername = (event)=>{

setInputUsername(event.target.value)


}

return (
    <div>
    
    <input  placeholder="Username" value = {inputUsername} className="userInput" onChange={updateInputUsername}></input>
    </div>
   
  );


}

export default UsernameInput 