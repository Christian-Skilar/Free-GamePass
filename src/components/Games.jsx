
import { useEffect, useState } from 'react'
import axios from "axios";
import { motion } from "framer-motion"
import './Games.scss'
import './Search.scss';


const Games = () => {
    const [ games, setGames ] = useState([]);
    const [ search, setSearch ] = useState("");
    console.log(search);


    const fetchGames = {
      method: 'GET',
      url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
      headers: {
        'X-RapidAPI-Key': 'b1a5670495msh75939d1574fe50bp1ac672jsn73c22e8d1428',
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
      }
    };
  
    useEffect(() => {
        axios.request(fetchGames)
            .then((resault) => {
            console.log(resault.data);
            setGames(resault.data)
          })

          .catch((error) => {
            console.error(error);
          }); // eslint-disable-next-line
    }, [])

    
  return (
    <div className='games-container'>
        <form className='search-container' id="search-form">
          <input 
            type="search"
            placeholder="Search Games"
            name="search-form"
            onChange={(e) => setSearch(e.target.value)}
            />
        </form>

        {games.filter((game) => {
          return search.toLowerCase() === '' ? game : game.title.toLowerCase().includes(search)
        }).map((game) => {
            return (
                <motion.div 
                  transition={{ duration: 0.5 }}
                  whileInView={{ opacity: [0, 1] }}
                  className='card-container' 
                  key={game.id}
                  >
                    <img src={game.thumbnail} alt={game.title} />
                    <h2>{game.title}</h2>
                    <p className='description'>{game.short_description}</p>
                    <div className='button'>
                      <div class='line'></div> 
                      <div class='line'></div>
                      <div class='line'></div>
                      <div class='line'></div>
                      <div class='line'></div>
                      <div class='line'></div>       
                      <a className='noselect' href={game.game_url} rel='noreferrer' target="_blank">Play</a>
                    </div>
                    <div className='card-row'>
                      <p>Genre: {game.genre}</p>
                      <p>Platform: {game.platform}</p>
                    </div>
                </motion.div>
            )
        })
    }
    </div>
  );
}

export default Games



