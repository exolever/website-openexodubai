import * as React from 'react';
import serialize from 'form-serialize';
import jsonp from 'jsonp';
import styled from '@emotion/styled';
import Checkbox from './Checkbox';

const Form = {
  endpoint: 'https://usebasin.com/f/c89a00f6e333'
};

interface Labels {
  required: string;
  email: string;
  name: string;
  location: string;
  linkedIn: string;
  groups: string;
  dates: string;
  button: string;
  description:string;
  phone: string;
  subject: string;
}

interface Messages {
  success: string;
  error: string;
};

interface Group {
  id: number;
  label: string;
  hidden: boolean;
}

interface Props {
  labels: Labels;
  messages: Messages;
  enableName?: boolean;
  enableLocation?: boolean;
  enableLinkedIn?: boolean;
  enableDates?: boolean;
  enableDescription?: boolean;
  enableGroups?: Group[];
  groupTitle?: any;
  enablePhone?: boolean;
  enableSubject?: boolean;
}

interface State {
  complete: boolean;
  message: string;
}

const getUrl = (params: string) => `https://usebasin.com/f/02412db358de`;

const getId = (() => {
  let id = 0;
  return () => {
    id += 1;
    return id;
  };
})();

const getWindowSearch = () => {
 return typeof window !== 'undefined' ? window.location.search : '';
}

const thankYou = () => {
  if(getWindowSearch().indexOf('?thankyou') > -1) {
    return 'show-thank-you'
  }
}

const getMsg = (msg: string) => /^\d \-/.test(msg) ? msg.split('-')[1] : msg;

const Message = styled.div`
  text-align: center;
  font-size: 30px;
`;

class BaseForm extends React.Component<Props, State> {
  id = getId();

  state = {
    complete: false,
    message: ''
  };

  onSubmit = (event: any) => {
    const { messages } = this.props;
    event.preventDefault();
    const url = getUrl(serialize(event.target));

    jsonp(url, { param: 'c' }, (err, data)=> {
      const complete = (data && data.result === 'success');
      const message = complete
        ? messages.success
        : `Error: ${(data && getMsg(data.msg)) || messages.error}`;
      this.setState({ complete, message });
    })
  }

  render() {
    const { labels, enableName, enableLocation, enableLinkedIn, enableDates, enableDescription, enableSubject, enablePhone } = this.props;

    if (this.state.complete) {
      return (
        <div className="domain-form-warp center">
          <div className="mc_embed_signup">
            <Message>{this.state.message}</Message>
          </div>
        </div>
      )
    }
    return (
      <div id="basin-form" className={`domain-form-warp ${thankYou()}`}>
        <div className="thank-you-message">
          <div>Thanks for contacting us!</div>
        </div>
        <div className="mc_embed_signup">
          <form
            className="mc-embedded-subscribe-form domain-search-form validate"
            method="post"
            name="mc-embedded-subscribe-form"
            target="_blank"
            action={`${Form.endpoint}`}
          >
            <div className="mc_embed_signup_scroll">
            <div className="indicates-required"><span className="asterisk">*</span>&nbsp;{labels.required}</div>

            {enableName &&
                <div className="mc-field-group">
                  <label htmlFor={`mce-NAME-${this.id}`}>{labels.name}&nbsp;<span className="asterisk">*</span></label>
                  <input type="text" defaultValue="" name="NAME" id={`mce-NAME-${this.id}`} />
                </div>}
                <div className="mc-field-group">
                <label htmlFor={`mce-EMAIL-${this.id}`}>{labels.email}&nbsp;<span className="asterisk">*</span></label>
                <input type="email" defaultValue="" name="EMAIL" id={`mce-EMAIL-${this.id}`} required />
              </div>
            {enablePhone &&
                <div className="mc-field-group">
                  <label htmlFor={`mce-PHONE-${this.id}`}>{labels.phone}&nbsp;<span className="asterisk">*</span></label>
                  <input type="text" defaultValue="" name="PHONE" id={`mce-PHONE-${this.id}`} />
                </div>}


              {enableDates &&
                <div className="mc-field-group">
                  <label htmlFor={`mce-DATES-${this.id}`}>{labels.dates}&nbsp;<span className="asterisk">*</span></label>
                  <input type="text" defaultValue="" name="DATES" id={`mce-DATES-${this.id}`} />
                </div>}
              {enableLocation &&
                <div className="mc-field-group">
                  <label htmlFor={`mce-LOCATION-${this.id}`}>{labels.location}&nbsp;<span className="asterisk">*</span></label>
                  <input type="text" defaultValue="" name="LOCATION" id={`mce-LOCATION-${this.id}`} />
                </div>}
            {enableSubject &&
              <div className="mc-field-group">
                <label htmlFor={`mce-SUBJECT-${this.id}`}>{labels.subject}&nbsp;<span className="asterisk">*</span></label>
                <input type="text" defaultValue="" name="SUBJECT" id={`mce-SUBJECT-${this.id}`} />
              </div>}
              {enableDescription &&
                <div className="mc-field-group">
                  <label htmlFor={`mce-MESSAGE-${this.id}`}>{labels.description}&nbsp;<span className="asterisk">*</span></label>
                  <textarea defaultValue="" name="MESSAGE" id={`mce-MESSAGE-${this.id}`} ></textarea>
                </div>}
              {enableLinkedIn &&
                <div className="mc-field-group">
                  <label htmlFor={`mce-LINKEDIN-${this.id}`}>{labels.linkedIn}</label>
                  <input type="text" defaultValue="" name="LINKEDIN" id={`mce-LINKEDIN-${this.id}`} />
                </div>}

              {this.state.message && <div className="mce-responses clear" dangerouslySetInnerHTML={{ __html: this.state.message }} />}

              <div className="clear">
                <button type="submit" name="subscribe" className="mc-embedded-subscribe site-btn sb-line">{labels.button}</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default BaseForm;
