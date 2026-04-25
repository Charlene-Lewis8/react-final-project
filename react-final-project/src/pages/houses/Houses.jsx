import React from 'react'
import { houseData } from '../../data';
import './Houses.css';



const Houses = () => {
  return (
   <div className="houses__container">
    <header className="houses__hero">
        <h1 className="cinzel-font">The Four Houses</h1>
        <p>"Their names are known to every witch and wizard..."</p>
    </header>
    <div className="houses__grid">
        {houseData.map((house) => (
            <section key={house.id} className={`house__section ${house.id}`}>
                <div className="house__overlay">
                    <div className="house__crest "><img className='crest__img' src={house.icon}/></div>
                    <h2 className="house__name">{house.name}</h2>
                    <h4 className="house__values">{house.values}</h4>
                    <p className="house__description">{house.description}</p>
                    <button className="house__btn">Enter Common Room</button>
                </div>
            </section>
        ))}
    </div>
   </div>
  );
};

export default Houses


