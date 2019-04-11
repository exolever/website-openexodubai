import * as React from 'react';
import Section from '../components/Section';

interface Column {
  title?: string;
  description?: Function;
  horizontal?: boolean;
  image?: any;
}

interface Props {
  title?: string;
  description?: any;
  content?: Column[]
}

// const Link = (url) => {
//   if(url !== false) {
//     return <a target="_blank" className="site-btn text-white" href={url}>Learn More</a>
//   } else {
//     return <a target="_blank" className="site-btn grey text-white" >Coming Soon</a>
//   }
// }


const Vertical = ({ title, description, image, column }) =>
  <div className={`col-lg-${column}  text-center`}>
    <img src={image} alt={title} width="200" />
    <div className="about-text">
      <h3>{title}</h3>
      <p>{description()}</p>
    </div>
  </div>;

const Horizontal = ({ title, description, image }) =>
  <>
    <div className="col-lg-6  text-center">
      <img src={image} alt={title} />
    </div>
    <div className="col-lg-6 about-text">
      <h3>{title}</h3>
      <p>{description()}</p>
    </div>
  </>;

const About: React.SFC<Props> = ({ title, description, content }) => {
  const column = Math.floor(12 / content.length);
  return (
    <Section className="spad about-section">
      <div className="text-center">
        <h2>{title}</h2>
      </div>
      <p>{description()}</p>
      <div className="row spad">
        {content.map(({ title, description, horizontal, image }) => {
          const props = { title, description, image, column };
          return horizontal ?
            <Horizontal {...props} key={title} /> : <Vertical {...props} key={title} />
        })}
      </div>
    </Section>
  )
};

export default About;
