import * as React from 'react';
import Section from './Section';
import HighlightSection from './HighlightSection';

const Services = ({ backgroundImage }) =>
  <>
    <HighlightSection
      title={`Transformation as a service`}
      backgroundImage={backgroundImage}
    />
    <Section className="service-section">
      <div className="row">
        <div className="col-lg-6 text-center">
          <h3>ExO Sprint</h3>
          <p>An ExO Sprint is a 10-week process based on the book <a href="https://www.exponentialtransformationbook.com/" target="_blank"><strong><em>Exponential Transformation</em></strong></a> that helps organizations to evolve their business models from scarcity to abundance while dealing with the immune system. The ExO Sprint has been successfully run in large, medium and small organizations around the world. It is designed to rapidly move your organization’s leadership culture and management thinking forward.</p>
        </div>
        <div className="col-lg-6 text-center">
          <h3 >ExO On-Demand</h3>
          <p>ExO On-Demand is a customized product built around flexible access to our ExO Ecosystem members. Consult technology and industry specialists, enhance your strategic offsite with virtual advisors, incubate your disruptive initiatives with exponentially minded people... these are just a few of the ways we can help you if your organization wants to start or has already started a transformation process. </p>
        </div>
      </div>
      <div className="text-center">
        <a target="_blank" className="site-btn text-white" href="https://www.openexo.com/transformation-services">Request a service</a>
      </div>
    </Section>
  </>;

export default Services;
