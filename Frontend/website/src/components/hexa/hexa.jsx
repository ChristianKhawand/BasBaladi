
import React from 'react';
import './hexa.css';

const hexagonsData = [
  {
    imgSrc: 'images/bld.png',
    title: 'What we provide?',
    text: 'BasBaladi is a brokerage company that aims to sell farmers goods in the Lebanese market,providing fruit,vegetables and seeds for sale on one platform',
  },
  {
    imgSrc: 'images/loc.jpg',
    title: 'Location',
    text: 'Lebanon - Beirut / Baabda street 101 near Antonine University',
  },
  {
    imgSrc: 'images/dlv.jpg',
    title: 'Delivery all over Lebanon',
    text: 'We provide fast and sheap delivery service all over Lebanon. Free delivery for big purchases',
  },
  {
    imgSrc: 'images/whyu.jpg',
    title: 'Why BasBaladi?',
    text: 'BasBaladi offers the best quality for best prices and fastest as possible. No longer any need to go to the market',
  },
  {
    imgSrc: 'images/agr.jpg',
    title: 'Our providers',
    text: 'Our providers are elite farmers and argicultural land owners with previous experience.You can also contact us to collaborate',
  },
  {
    imgSrc: 'images/o.jpg',
    title: 'Our sources',
    text: 'The orchads and lands from which we take are carefully examined for their area,soil and climate before being accepted',
  },
  {
    imgSrc: 'images/handshake.jpg',
    title: 'Most popular with costumers',
    text: 'BasBaladi proves the quality of its dealings with customers through the positive opiniions of our customers, an their continued dealings with us',
  },
  {
    imgSrc: 'images/hel.jpg',
    title: 'Most trusted',
    text: 'The goods are inspected very carefully in our own laboratories,and only the highest quality and cleanest are accepted',
  },
  {
    imgSrc: 'images/mon.png',
    title: 'Save your money',
    text: 'We are the only intermediary and there is no other intermediary such as merchants,stores and supermarkets.Ypu will not have to pay what you paid in shops',
  },
  {
    imgSrc: 'images/fruits.jpg',
    title: 'Fruits',
    text: 'All types of local fruits in different seasons',
  },
  {
    imgSrc: 'images/v1.avif',
    title: 'Vegetables',
    text: 'All types of local vegetables',
  },
  {
    imgSrc: 'images/ss.jpg',
    title: 'Seeds',
    text: 'Introducing our new products,all kinds of grains',
  },
  // Add more hexagon data here as needed
];

function Hexa() {
  return (
    <div className="App">
      <ul id="categories" className="clr">
        {hexagonsData.map((hexagon, index) => (
          <li key={index}>
            <div>
              <img src={hexagon.imgSrc} alt="" />
              <h1>{hexagon.title}</h1>
              <p>{hexagon.text}</p>
            </div>
          </li>
        ))}
      </ul>
      
    </div>
  );
}

export default Hexa;
