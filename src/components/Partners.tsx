import * as React from 'react';
import Section from './Section';

const Partners = ({ title, sections }) =>
  <Section>
    <div className="row spad text-center">
      <h2 className="col-lg-12">{title}</h2>
    </div>  
    <div className="row text-center">
      <h3 className="col-lg-12">{sections[0].title}</h3>
      {sections[0].logos.map(logo => <div key={logo} className="col-lg-12 logo-item"><img className="text-center" src={logo} /></div>)}
    </div>
    <div className="row text-center">
      <h3 className="col-lg-12">{sections[1].title}</h3>
      {sections[1].logos.map(logo => <div key={logo} className="col-lg-12 logo-item"><img className="text-center" src={logo} /></div>)}
    </div>
    <div className="row text-center">
      <h3 className="col-lg-12">{sections[2].title}</h3>
      {sections[2].logos.map(logo => <div key={logo} className="col-lg-4 logo-item"><img className="text-center" src={logo} /></div>)}
    </div>
  </Section>;

export default Partners;
