import * as React from 'react';

interface Props {
  className?: string;
  title?: string;
  members: Array<any>;
}

function TeamMember(member){
  return (<div className="col-lg-3 col-md-6">
  <div className="team-member">
    <img src={member.image} alt="#"/>
    <h4>{member.name}</h4>
    <p>{member.position}</p>
  </div>
  </div>)
}

const Team: React.SFC<Props> = ({ className, title, members }) => {

  return (
    <section className={`spad ${className}`}>
      <div className="container">
			<div className="section-title">
				<h2>{title}</h2>
			</div>
      <div className="row">
      {members.map((member) => {
        return TeamMember(member)
      })}
      </div>
				</div>
    </section>
  )
};

export default Team;
