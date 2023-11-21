import React, { useState, useEffect } from 'react';

export default function Fetch() {
  const [botCollection, setBotCollection] = useState([]);
  const [yourBotArmy, setYourBotArmy] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch('https://new-bot-mmsd.onrender.com/bots')
      .then((res) => res.json())
      .then((data) => { 
        setBotCollection(data);
      });
  };

  const enlistBot = (bot) => {
    if (!yourBotArmy.includes(bot)) {
      setYourBotArmy([...yourBotArmy, bot]);

      // Remove enlisted bot from botCollection
      const updatedCollection = botCollection.filter((b) => b !== bot);
      setBotCollection(updatedCollection);
    }
  };

  const releaseBot = (bot) => {
    const updatedArmy = yourBotArmy.filter((b) => b !== bot);
    setYourBotArmy(updatedArmy);
  };

  const dischargeBot = (bot) => {
    fetch(`https://new-bot-mmsd.onrender.com/bots/${bot.id}`, {
      method: 'DELETE',
    })
      .then(() => {
        // Update the bot collection after deletion
        fetchData();
        // Remove the bot from yourBotArmy
        releaseBot(bot);
      })
      .catch((error) => console.error('Error deleting bot:', error));
  };

  return (
    <div>
      <div className="bot-collection">
        <h2>Bot Collection</h2>
        {botCollection.map((bot) => (
          <div key={bot.id}>
            <span>{bot.name}</span>
            <img src={bot.avatar_url} alt='my bot'/>
            <p>Class:{bot.bot_class}</p>
            <p>Health:{bot.health}</p>
            <p>Damage:{bot.damage}</p>
            <p>Armor:{bot.armor}</p>
            <button onClick={() => enlistBot(bot)}>Enlist</button>
            <button className="delete-button" onClick={() => dischargeBot(bot)}>
              Delete
            </button>
          </div>
        ))}
      </div>
      <div className="your-bot-army">
        <h2>Your Bot Army</h2>
        {yourBotArmy.map((bot) => (
          <div key={bot.id}>
            <span>{bot.name}</span>
            <img src={bot.avatar_url} alt='my bot'/>
            <p>Class:{bot.bot_class}</p>
            <p>Health:{bot.health}</p>
            <p>Damage:{bot.damage}</p>
            <p>Armor:{bot.armor}</p>
            <button onClick={() => releaseBot(bot)}>Release</button>
            <button onClick={() => dischargeBot(bot)}>Discharge</button>
          </div>
        ))}
      </div>
    </div>
  );
}
