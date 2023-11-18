import React, {  useEffect }from 'react';
const[myBots, setMyBots] = useState([])
// const [addBot, ]

// const[]
export default function Fetch(){
 useEffect(() => {
    fetchData();
 }, [] );

 const fetchData = () => {
    fetch(' http://localhost:4000/bots')
    .then(res => res.json())
    .then(data => {
        addBot(data)
        viewBot(data)

    })
 }
}

const bots = () => bots.map((bot) => {
   return(
      <ul>
         <li key={bot.id}>{bot.name}</li><button onClick={viewBot}>View Bot</button>
      </ul>
   )
})
const viewBot = (bot) => {
   return (
      <>
      <h2>{bot.name}</h2>
      <img href={bot.avatar_url} />
      <p>{bot.health}</p>
      <p>{bot.bot_class}</p>
      <p>{bot.damage}</p>
      <p>{bot.armor}</p>
      <button onClick={addBots}>Employ</button>
      <button onClick={deleteBot}>Discharge</button>
      </>
   )
}
const addBots = () => {
   useEffect(() => {
 fetchCollection();
   }, [])
   const fetchCollection = () => {
      fetch('http://localhost:4000/enlisted-bots')
      .then(r = r.json())
      .then(data => (
         addBot(data)
      ))
   }
   function addBot(bot){
      return(
         <div id='cart'>
         <img href={bot.avatar_url} />
            <p key={bot.id}>{bot.name}</p>
            <p>{bot.health}</p>
            <p>{bot.bot_class}</p>
            <p>{bot.damage}</p>
            <p>{bot.armor}</p>
               
               
            
         </div>
      )
   }

}
const deleteBot = (bot) => {
   bot.key !== bot.id
}


