import React, { useState } from 'react';
import Card from './Card';

const Cards = () => {
  const [cardData, setCardData] = useState([
    {
      img: (
            <svg className='w-20 h-20 sm:w-24 sm:h-24' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zm64 32v64c0 17.7 14.3 32 32 32H416c17.7 0 32-14.3 32-32V160c0-17.7-14.3-32-32-32H96c-17.7 0-32 14.3-32 32zM80 320c-13.3 0-24 10.7-24 24s10.7 24 24 24h56c13.3 0 24-10.7 24-24s-10.7-24-24-24H80zm136 0c-13.3 0-24 10.7-24 24s10.7 24 24 24h48c13.3 0 24-10.7 24-24s-10.7-24-24-24H216z"/></svg>
      ),
      title: "Blue",
      para: "Blue is the color of the sky and sea. It is often associated with depth and stability. It symbolizes trust, loyalty, wisdom, confidence, intelligence, faith, truth, and heaven.",
    },
    {
      img: (
            <svg className='w-24 h-24' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zm64 32v64c0 17.7 14.3 32 32 32H416c17.7 0 32-14.3 32-32V160c0-17.7-14.3-32-32-32H96c-17.7 0-32 14.3-32 32zM80 320c-13.3 0-24 10.7-24 24s10.7 24 24 24h56c13.3 0 24-10.7 24-24s-10.7-24-24-24H80zm136 0c-13.3 0-24 10.7-24 24s10.7 24 24 24h48c13.3 0 24-10.7 24-24s-10.7-24-24-24H216z"/></svg>
      ),
      title: "Red",
      para: "Red is the color of fire and blood. It is associated with energy, war, danger, strength, power, determination, passion, desire  and love.",
    },
    {
      img: (
            <svg className='w-24 h-24' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zm64 32v64c0 17.7 14.3 32 32 32H416c17.7 0 32-14.3 32-32V160c0-17.7-14.3-32-32-32H96c-17.7 0-32 14.3-32 32zM80 320c-13.3 0-24 10.7-24 24s10.7 24 24 24h56c13.3 0 24-10.7 24-24s-10.7-24-24-24H80zm136 0c-13.3 0-24 10.7-24 24s10.7 24 24 24h48c13.3 0 24-10.7 24-24s-10.7-24-24-24H216z"/></svg>
      ),
      title: "Green",
      para: "Green is the color of nature. It symbolized growth , harmony freshness, and fertility. green has stromg emotional correspondence with safety. ",
    },
  ]);

  return (
    <div className=' flex flex-col items-center md:flex-row gap-4 sm:justify-center   relative bottom-28'>
      {cardData.map((item, index) => (
        <Card key={index} data={item}  />
      ))}
    </div>
  );
};

export default Cards;
