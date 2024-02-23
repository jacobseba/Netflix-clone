import React, { useRef, useState } from 'react'
import "./list.scss"
import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@mui/icons-material'
import ListItem from './../listItem/ListItem';

export default function List() {
    const [isMoved, setIsMoved] = useState(false);
    const [slideNumber,setSlideNumber] = useState(0);

    const listRef = useRef(); //similar to how you use getElementById

    const handleClick = (direction) => {
        setIsMoved(true);
        //get the distance from the 0 left x-axis minus the space taken by the arrow
        let distance = listRef.current.getBoundingClientRect().x - 50; 
        
        if(direction === "left" && slideNumber > 0) {
            setSlideNumber(slideNumber - 1);
            listRef.current.style.transform = `translateX(${230 + distance}px)`
        }

        if(direction === "right" && slideNumber < 5) {
            setSlideNumber(slideNumber + 1);
            listRef.current.style.transform = `translateX(${-230 + distance}px)`
        }
     }
  return (
    <div className="list">
        <span className="list-Title">Continue to watch</span>
        <div className="wrapper">
            <ArrowBackIosOutlined 
                className="sliderArrow left" 
                onClick={() => handleClick("left")}
                style={{display : !isMoved && "none"}}
                />
            <div className="container" ref={listRef}>
                <ListItem index={0}/>
                <ListItem index={1}/>
                <ListItem index={2}/>
                <ListItem index={3}/>
                <ListItem index={4}/>
                <ListItem index={5}/>
                <ListItem index={6}/>
                <ListItem index={7}/>
                <ListItem index={8}/>
                <ListItem index={9}/>
            </div>
            <ArrowForwardIosOutlined 
                className="sliderArrow right" 
                onClick={() => handleClick("right")}
            />
        </div>
    </div>
  )
}
