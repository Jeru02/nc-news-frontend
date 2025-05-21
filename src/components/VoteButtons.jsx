const voteButtons = ({setVotes, setHasVoted, hasVoted})=>{
    
function incVotes (){
    setVotes((prevVotes)=>{
        prevVotes = prevVotes + 1 
        return prevVotes 
    })

    setHasVoted(true)
}
function decVotes (){

     setVotes((prevVotes)=>{
        prevVotes = prevVotes -1 
        return prevVotes 
    })
    setHasVoted(true)
}



return <><button onClick={incVotes} disabled={hasVoted}>Like</button>
<button onClick={decVotes} disabled={hasVoted}>dislike</button></>
}

export default voteButtons