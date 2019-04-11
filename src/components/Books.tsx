import * as React from 'react';
import Section from '../components/Section';

interface Column {
  title: string;
  image: any;
}

interface Props {
  title: string;
  content: Column[];
  button: any;
}

const About: React.SFC<Props> = ({ title, content, button }) => {
  const column = Math.floor(12 / content.length);
  return (
    <Section className="spad about-section">
      <div className="text-center">
        <h2>{title}</h2>
      </div>
      <div className="row spad">
        {content.map(({ title, image }) =>
          <div className={`col-lg-${column}  text-center`}>
            <div className="about-text">
              <h3>{title}</h3>
              <img src={image} alt={title} width="400" />
            </div>
          </div>
        )}
      </div>
      <div className="text-center">
        <a target="_blank" className="site-btn text-white" href={button.url}>{button.label}</a>
      </div>
    </Section>
  );
};

export default About;
