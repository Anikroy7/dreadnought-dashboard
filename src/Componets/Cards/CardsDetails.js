import { faDollar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

const CardsDetails = ({ card, setModalInfo }) => {
    const { barValue, title, value, background, time, } = card;
    const [isHovering, setIsHovering] = useState(false);
    const openModal = (card) => {
        setModalInfo(card)
    }

    //  hover effet 
    const handleMouseEnter = () => {
        setIsHovering(true);
    };

    const handleMouseLeave = () => {
        setIsHovering(false);
    };

    console.log(isHovering);

    return (
        <div className=''>
            <label htmlFor="card-modal" onClick={() => openModal(card)} class="card w-100 shadow-xl modal-action hover:bg-slate-50">
                <div style={{ backgroundColor: isHovering ? '#a9c0d9' : background }} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} class="p-3 " >
                    <div className='flex items-center justify-between'>
                        <div class="radial-progress mr-2 text-blue-900  font-semibold" style={{ "--value": barValue }}>{barValue} %
                        </div>
                        <div className='font-semibold flex flex-col items-center'>
                            <span className='ml-9 mb-4 border-2'><FontAwesomeIcon icon={faDollar}></FontAwesomeIcon></span>
                            <span>${value}</span>
                        </div>
                    </div>

                    <div className='flex items-center justify-between mt-3 font-semibold'>
                        <h2>{title}</h2>
                        <h3>Last {time} hours</h3>
                    </div>
                </div>

            </label>
        </div >
    );
};

export default CardsDetails;