import { faDollar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const CardsDetails = ({ card, setModalInfo }) => {
    const { barValue, title, value, background, time, } = card;
    const openModal = (card) => {
        setModalInfo(card)
    }
    return (
        <div>
            <label htmlFor="card-modal" onClick={() => openModal(card)} class="card w-100 shadow-xl modal-action">
                <div style={{ backgroundColor: background }} class="p-3 " >
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