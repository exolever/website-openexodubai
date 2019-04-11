import * as React from 'react';
import HighlightSection from '../HighlightSection';
import Form from './BaseForm';
// import formBg from '../../img/bg.jpg';

interface Props {
  title: any;
  labels: any;
  formBg: any;
  fields: { groups: any; groupTitle?: any; };
  messages: any;
  description: any;
}

const LeaderForm: React.SFC<Props> = ({ title, labels, fields, messages, formBg, description }) => {
  return (
    <HighlightSection title={title} backgroundImage={formBg}>
    <div id="submit" className="text-white text-center">{description}</div>
    <div className="row">
      <div className="col-lg-6">
      <Form
        labels={labels}
        messages={messages}
        enableName
        enablePhone
        enableSubject
        enableDescription
        enableGroups={fields.groups}
        groupTitle={fields.groupTitle}
      />
      </div>
      <div className="col-lg-6">
      {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.1575461490456!2d55.153977615936704!3d25.096527741934022!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6b43c7f5dd7d%3A0xdfd153b19df4e607!2sDubai+Media+City+Building+5+-+Dubai+-+United+Arab+Emirates!5e0!3m2!1sen!2sjp!4v1554969611592!5m2!1sen!2sjp&zoom=9" width="100%" height="550"></iframe> */}
      <iframe width="100%" height="550" src="https://maps.google.com/?ie=UTF8&amp;t=m&amp;daddr=25.0965277,55.1539776&amp;spn=0.018486,0.027466&amp;z=9&amp;output=embed"></iframe>
      </div>
    </div>
    </HighlightSection>
  )
};

export default LeaderForm;
