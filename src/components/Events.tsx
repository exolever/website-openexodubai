import * as React from 'react';
import Section from '../components/Section';
import HighlightSection from '../components/HighlightSection';

interface Session {
  start: string;
  end: string;
  title: string;
}

interface SessionGroup {
  title: string;
  subtitle: string;
  sessions: Session[] | string[];
}

interface Event {
  title: any;
  subtitle?: string;
  sessions?: Session[]
  sessionGroup?: SessionGroup[];
  notes?: string;
}

interface Button {
  label: string;
  url: string;
}

interface Props {
  title: string;
  titleBg: string;
  content: Event[];
  button: Button;
}

const Sessions = ({ sessions }) => {
  return (
    <ul className="text-left">
      {sessions.map((content) =>
        <li key={typeof content === 'string' ? content : content.title}>
          {typeof content === 'string'
            ? <span>{content}</span>
            : 
              <>
                <span>{content.start}{content.end && (' - '+ content.end)}</span><br/>
                <strong>{content.title}</strong>
              </>
          }
        </li>
      )}
    </ul>
  );
};

const Events: React.SFC<Props> = ({ title, titleBg, content, button }) => {
  const column = Math.floor(12 / content.length);
  return (
    <>
      <HighlightSection
        title={title}
        backgroundImage={titleBg}
      />
      <Section className="about-section">
        <div className="row spad">
          {content.map(({ title, subtitle, sessionGroup, sessions,  notes }) =>
            <div key={title} className={`col-lg-${column}`}>
              <div className="pricing-plan">
                <div className="pricing-body">
                  <h2>
                    {title()}<br />
                    {subtitle && <small>{subtitle}</small>}
                  </h2>
                  {sessionGroup
                    ? sessionGroup.map(({ title, subtitle, sessions: ses }) =>
                      <div key={title}>
                        <h3>
                          {title}<br />
                          {subtitle && <small>{subtitle}</small>}
                        </h3>
                        <Sessions sessions={ses} />
                      </div>)
                    : <Sessions sessions={sessions} />
                  }
                  { notes && <p className="text-left">{notes}</p>}
                </div>
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

export default Events;
