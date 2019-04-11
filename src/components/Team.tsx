import * as React from 'react';
import HighlightSection from '../components/HighlightSection';

interface Props {
  className?: string;
  title: string;
  titleBg: any;
  members: Array<any>;
}

function TeamMember({ image, name, position, className }){
  return (
    <div className={className}>
      <div className="team-member">
        <img src={image} alt="#"/>
        <h4>{name}</h4>
        <p>{position}</p>
      </div>
    </div>
  );
}

const Team: React.SFC<Props> = ({ className, title, titleBg, members }) => {
  return (
    <>
      <HighlightSection
        title={title}
        backgroundImage={titleBg}
      />
      <section className={`spad ${className ? className: ''}`}>
        <div className="container">
          <div className="row">
            <TeamMember {...members[0]} className="col-md-12" />
            {members.slice(1).map((member) => {
              return <TeamMember {...member} className="col-lg-4 col-md-6" key={member.name} />;
            })}
          </div>
        </div>
      </section>
    </>
  )
};

export default Team;
