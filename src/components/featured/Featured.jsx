import React from 'react'
import "./featured.scss"
import { InfoOutlined, PlayArrow } from '@mui/icons-material'

export default function Featured({type}) {
  return (
    <div className="featured">
        {type && (
            <div className="category">
                <span>{type === "movie" ? "Movies" : "Series" }</span>
                <select name="genre" id="genre">
                    <option>Genre</option>
                    <option value="adventure">Adventure</option>
                    <option value="comedy">Comedy</option>
                    <option value="crime">Crime</option>
                    <option value="fantasy">Fantasy</option>
                    <option value="historical">Historical</option>
                    <option value="horror">Horror</option>
                    <option value="romance">Romance</option>
                    <option value="sci-fi">Sci-fi</option>
                    <option value="thriller">Thriller</option>
                    <option value="western">Western</option>
                    <option value="animation">Animation</option>
                    <option value="drama">Drama</option>
                    <option value="documentary">Documentary</option>
                </select>
            </div>
        )}
        <img 
        src="https://i.ebayimg.com/images/g/TuoAAOSw4ARhoMr~/s-l1200.webp"
        alt=""
      />
      <div className="info">
        <img 
            src="https://static0.gamerantimages.com/wordpress/wp-content/uploads/2023/02/the-flash-poster-cut.jpg?q=50&fit=contain&w=943&h=&dpr=1.5"
            alt=""
        />
        <span className="desc">
            A movie about a guy who got hit by lightning and survived to only find out that he has the super power to run really really fast.
        </span>
        <div className="buttons">
            <button className="play">
                <PlayArrow/>
                <span>Play</span>
            </button>
            <button className="more">
                <InfoOutlined/>
                <span>info</span>
            </button>
        </div>
      </div>
    </div>
  )
}
