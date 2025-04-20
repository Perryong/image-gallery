import React, { useState, useEffect } from 'react';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import { sliderData } from './Sliderdata';
import '../styles.css';  // for hr, arrow styling

export default function Slider() {
  const [current, setCurrent] = useState(0);
  const len = sliderData.length;

  const next = () => setCurrent(current === len - 1 ? 0 : current + 1);
  const prev = () => setCurrent(current === 0 ? len - 1 : current - 1);

  useEffect(() => {
    const id = setInterval(next, 10000);
    return () => clearInterval(id);
  });

  return (
    <div className="slider">
      <AiOutlineArrowLeft className="arrow prev" onClick={prev} />
      <AiOutlineArrowRight className="arrow next" onClick={next} />

      {sliderData.map((s, i) => (
        <div key={i} className={i === current ? 'slide current' : 'slide'}>
          {i === current && (
            <>
              <img src={s.image} alt="slide" className="image" />
              <div className="content">
                <h2>{s.heading}</h2>
                <p>{s.desc}</p>
                <hr />
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
}
