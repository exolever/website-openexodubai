import * as React from 'react';
import Section from '../components/Section';

interface Column {
  title?: any;
  description?: Function;
  horizontal?: boolean;
  image?: any;
}

interface Button {
  label: string;
  url: string;
}

interface Props {
  title?: any;
  description?: any;
  content?: Column[];
  button?: Button;
}

const Vertical = ({ title, description, image, column }) =>
  <div key={title} className={`col-lg-${column} text-center`}>
    <img src={image} alt={title && title()} width="200" />
    <div className="about-text">
    {title && <h3>{title()}</h3>}
      <p>{description()}</p>
    </div>
  </div>;

const Horizontal = ({ title, description, image }) =>
  <div key={title}>
    <div className="col-lg-6 text-center">
      <img src={image} alt={title && title()} />
    </div>
    {title &&
      <div className="col-lg-6 about-text">
        <h3>{title()}</h3>
        <p>{description()}</p>
      </div>}
  </div>;

const About: React.SFC<Props> = ({ title, description, content = [], button }) => {
  const column = Math.floor(12 / content.length);
  return (
    <Section className="about-section">
      {title &&
        <div className="text-center about-text">
          <h2>{title}</h2>
        </div>}
      {description &&
        <div className="text-center about-text">
          <p className="text-center">{description()}</p>
        </div>}
      {content.length > 0 &&
        <div className="row spad">
          {content.map(({ title, description, horizontal, image }, index) => {
            const props = { title, description, image, column };
            return horizontal ?
              <Horizontal {...props} key={index} /> : <Vertical {...props} key={index} />
          })}
        </div>}
      {button &&
        <div className="text-center">
          <a target="_blank" className="site-btn text-white" href={button.url}>{button.label}</a>
        </div>}
    </Section>
  )
};

export default About;
