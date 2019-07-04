import React from 'react'
import addToMailchimp from 'gatsby-plugin-mailchimp'

const initialState = {
  EMAIL: '',
  NAME: '',
  MESSAGE: '',
  success: false,
  error: false,
  errorMessage: '',
}

class ContactForm extends React.Component {
  state = initialState

  handleFieldChange = event => {
    const { name, value } = event.currentTarget
    this.setState({
      [name]: value,
    })
  }

  _handleSubmit = async event => {
    event.preventDefault()

    const email = this.state.EMAIL

    const listFields = {
      NAME: this.state.NAME,
      MESSAGE: this.state.MESSAGE,
      'group[189][512]': 512,
    }
    const { result, msg } = await addToMailchimp(email, listFields)

    if (result === 'success') {
      this.setState({ success: true })
    } else if (result === 'error') {
      this.setState({ error: true, errorMessage: msg })
    } else {
      console.error(
        'The result from addToMailchimp was neither success nor error'
      )
    }
  }

  renderForm = () => {
    const { EMAIL, NAME, MESSAGE, error, errorMessage } = this.state

    return (
      <form
        className="custom_form"
        method="post"
        name="mc-embedded-subscribe-form"
        onSubmit={this._handleSubmit}
      >
        <div className="fields">
          <div className="field">
            <input
              required
              type="text"
              name="NAME"
              id="mce-NAME"
              placeholder="Your name"
              value={NAME}
              onChange={this.handleFieldChange}
            />
            <input
              required
              type="email"
              name="EMAIL"
              id="mce-EMAIL"
              placeholder="Your email"
              value={EMAIL}
              onChange={this.handleFieldChange}
            />
            <textarea
              required
              rows="3"
              name="MESSAGE"
              id="mce-MESSAGE"
              placeholder="Your message"
              style={{ resize: 'none' }}
              value={MESSAGE}
              onChange={this.handleFieldChange}
            />
          </div>
        </div>
        {error && <p style={{ color: 'red' }}>{errorMessage}</p>}
        <button type="submit">Send</button>
      </form>
    )
  }

  render() {
    const { success } = this.state

    return (
      <>
        {success ? (
          <p className="form-success-message">
            Thank you for your message. We’ll be in touch soon!
          </p>
        ) : (
          this.renderForm()
        )}
      </>
    )
  }
}

export default ContactForm
