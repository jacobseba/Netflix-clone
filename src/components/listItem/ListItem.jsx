import React, { useState } from 'react'
import"./listItem.scss"
import { Add, PlayArrow, ThumbDownOutlined, ThumbUpAltOutlined,  } from '@mui/icons-material'

export default function ListItem({index}) {

const [isHovered,setIsHovered] = useState(false);
const trailer = "https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjNpIiXxL-EAxX0MUQIHe0oDh8Q3yx6BAglEAI&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Dmqqft2x_Aa4&usg=AOvVaw0a3sjgsrdC1x8uD_5Ul2O6&opi=89978449";

  return (
    <div className="listItem"
    style={{left: isHovered && index * 225 - 50 + index * 2.5}}
      onMouseEnter={()=> setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
        <img
          src="https://assets-global.website-files.com/6009ec8cda7f305645c9d91b/6408f6e7b5811271dc883aa8_batman-min.png" 
          alt="" 
        />
        {isHovered && (
        <>
          <video src={trailer} autoPlay={true} loop />
          <div className="itemInfo">
            <div className="icons">
              <PlayArrow className="icon"/>
              <Add className="icon"/>
              <ThumbUpAltOutlined className="icon"/>
              <ThumbDownOutlined className="icon"/>
            </div>
            <br/>
            <div className="itemInfoTop">
                <span>1 hour 14 min</span>
                <span className="limit">16+</span>
                <span>2022</span>
            </div>
            <div className="desc">
              Billionaire orphan who is a trained vigilante with the best gear.
            </div>
            <br/>
            <div className="genre">Action</div>
          </div> 
        </>
        )}
    </div>
  )
}
