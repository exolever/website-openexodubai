import * as React from 'react';
import Section from '../components/Section';
import HighlightSection from '../components/HighlightSection';

interface Column {
  title: string;
  image: any;
}

interface Button {
  label: string;
  url: string;
}
interface Props {
  title: string;
  titleBg: string;
  content: Column[];
  button: Button;
}

const About: React.SFC<Props> = ({ title, titleBg, content, button }) => {
  const column = Math.floor(12 / content.length);
  return (
    <>
      <HighlightSection
        title={title}
        backgroundImage={titleBg}
      />
      <Section className="about-section">
        <div className="row spad">
          {content.map(({ title, image }) =>
            <div key={title} className={`col-lg-${column}  text-center`}>
              <div className="about-text">
                <h3>{title}</h3>
                <img src={image} alt={title} width="400" />
              </div>
            </div>
          )}
        </div>
        {button &&
          <div className="text-center">
            <a target="_blank" className="site-btn text-white" href={button.url}>{button.label}</a>
          </div>}
      </Section>
    </>
  );
};

export default About;
