import React from 'react';
import './photo.css';
const Photo = (props) =>{
    return <div class='photo'>
        <a href={props.urls}>
        <img src={props.image} />
        </a>
    </div>
}

export default Photo;