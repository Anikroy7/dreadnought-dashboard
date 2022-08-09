
import React, { useEffect, useState } from 'react';
import CardModal from './CardModal';
import CardsDetails from './CardsDetails';

const Cards = () => {

    const [cards, setCards] = useState([]);
    const [updates, setUpdates] = useState([]);
    const [modalInfo, setModalInfo] = useState(null);

    //  load card data

    useEffect(() => {
        fetch('cardsData.json')
            .then(res => res.json())
            .then(data => setCards(data))
    }, [])

    // load updates data
    useEffect(() => {
        fetch('updatesData.json')
            .then(res => res.json())
            .then(data => setUpdates(data))
    }, [])


    console.log(modalInfo, "dklfjdoe");

    return (

        <section className='px-4 text-white grid lg:grid-cols-3 sm:grid-cols-2 md:grid-cols-2 gap-2'>
            {
                cards.map((card, i) => <CardsDetails
                    card={card}
                    i={i}
                    setModalInfo={setModalInfo}
                ></CardsDetails>)
            }
            {
                modalInfo && <CardModal
                    modalInfo={modalInfo}
                ></CardModal>
            }
        </section>


    );
};

export default Cards;