import React from 'react';
import motivation from '../assets/imgs/motivation.png';
import check from '../assets/imgs/motivation-check.svg';
import partner1 from '../assets/imgs/motivation-partner-logo-1.svg';
import partner2 from '../assets/imgs/motivation-partner-logo-2.svg';
import partner3 from '../assets/imgs/motivation-partner-logo-3.svg';
import '../style/Motivation.css';

const Motivation = () => {
  return (
    <div
        className='motivation-container'
        id='about'
    >
        <div className="motivation-left">
            <img src={motivation} alt="A collage of gym equipment and people working out" />
        </div>
        <div className="motivation-right">
            <span className="motivation-header">
                Motivation
            </span>
            <div className="motivation-text">
                <span className='outline-text'>Why </span>
                <span>train with me?</span>
            </div>
            
            <div className='motivation-details-right'>
                <div>
                    <img src={check} alt="A checkmark bullet point" className='check' />
                    <span className='motivation-bullet'>
                        +30 of satisfied customers
                    </span>
                </div>
                <div>
                    <img src={check} alt="A checkmark bullet point" className='check' />
                    <span className='motivation-bullet'>
                        Expert strength coach
                    </span>
                </div>
                <div>
                    <img src={check} alt="A checkmark bullet point" className='check' />
                    <span className='motivation-bullet'>
                        1 week program for new starters
                    </span>
                </div>
                <div>
                    <img src={check} alt="A checkmark bullet point" className='check' />
                    <span className='motivation-bullet'>
                        Online training availble 
                    </span>
                </div>
            </div>
           
            
        </div>
    </div>
  )
}

export default Motivation;