import React from 'react';
import './Faq.css';
import Accordion from '../../common/Accordian/Accordian';

function Faq() {
  return (
    <div>
      <Accordion
        title="How can we be part of your foundation"
        content="Please Whatsapp us at +91 7827552596"
      />
      <Accordion
        title="Is it an established NGO?"
        content="Yes, it's establshed NGO registered under society ACT."
      />
      <Accordion
        title="Where does it primarily work?"
        content="Delhi NCR , Bhilwara , Patna , Gurgaon , Sonipat and Chattisgarh"
      />
      <Accordion
        title="How long has the organization been working within the community?"
        content="On 19 May 2019 we did our first event. We are working in community from last 7 month"
      />
      <Accordion
        title="What are the incentives if any?"
        content="Internship letter , Certificate and Appreciation letter."
      />
      <Accordion
        title="Are there any specific rules on  dress code, behavior, timing?"
        content="No dress code but our volunteer wear vrikshit T-shirt which you can get after joining our foundation.Yes there are certain Terms and Condition click here to find more.Timing fluctutates our coordinator will let you know for more details call us at +91 7827552596 "
      />
      <Accordion
        title="How can I contribute to this NGO off the field?"
        content="You can be part of our social media team , Legal Team and Graphic editing Team"
      />
      <Accordion
        title="Wht is main objective or main motive to start up this NGO?"
        content="<ul>
        <li><p>To make India Clean and Green</p></li>
        </br>
        <li><p>To raise voice of poor people who lives in poor sanitry condition</p></li>
        </br>
        <li><p>Stop Slash Burning</p></li>
        </br>
        <li><p>Awareness Drive on Environment protection and Population control</li></br>
        <li><p>Encouragment toward sex Education</li>
    </ul>"
      />
      <Accordion
        title="Does it have any joining charges??"
        content="No not at all ,It's social work any one who want to bring the change can be part of this foundation.If any one asked money on this please call us at +91 7827552596"
      />
      <Accordion
        title="What is done with garbage after cleaning?"
        content="We segregate and we have few tie ups with the waste mangament company they picked our garbages."
      />
      <Accordion
        title="What is the way to select an area fir the purpose?"
        content="<p>Generally - Slum area </p>
         </br>
         <p> 1.Where government don't pay attention on sanity condition.</p>
         <p> 2. Place which we can beautify like (plantation) after cleaning </p>
         <p> 3. On children request we clean park as well so that we can play </p>
         <p> 4.  Metro connectivity and security for girls </p>"
      />
    </div>
  );
}

export default Faq;
