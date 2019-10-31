import React from 'react';
import './Faq.css';
import Accordion from '../../common/Accordian/Accordian';
import {FaqData} from './FaqData';

function Faq() {
  return (
    <div>
      {FaqData.map(data => (
      <Accordion
        title={data.title}
        content={data.content}
      />
      ))}
    </div>
  );
}

export default Faq;
