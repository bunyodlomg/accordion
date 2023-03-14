import { useState } from 'react';
function Accordion({ title, text }) {
    const [show, setShow] = useState(false)

    return (
        <div className='accordion'>
            <div className="header">
                <h5 className='title'>{title}</h5>
                <button className='btn' onClick={() => setShow(!show)}>{show ? "-" : "+"}</button>
            </div>
            {show && <p  className='text'>{text}</p>}
        </div>
    );
}

export default Accordion;