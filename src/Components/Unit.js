import React from 'react';

export const Unit = ({image,name,city,age}) => {
  return (
    <div className='unit_container'>
        <img src={image} alt="image" />
        <h3>{name}</h3>
        <p><span>{age}</span></p>
        <p><span>{city}</span></p>
    </div>
  )
}

export default Unit;