import React, { useContext } from 'react';
import './SportsBox.css';
import { dataContext } from '../../data/Data';
const SportsBox = ({img, name}) => {
    // const { sports } = useContext(dataContext);
    return (
        <div className='sports-box'>
            <img src={img} alt="" />
            <p>{name}</p>
        </div>
    );
}

export default SportsBox;
