import React from 'react'
import addToMailchimp from 'gatsby-plugin-mailchimp'

const initialState = {
  EMAIL: '',
  NAME: '',
  SURNAME: '',
  COUNTRY: '',
  LINKEDIN: '',
  TWITTER: '',
  CONTRIBUTE: '',
  success: false,
  error: false,
  errorMessage: '',
}

class ContributeForm extends React.Component {
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
      SURNAME: this.state.SURNAME,
      COUNTRY: this.state.COUNTRY,
      LINKEDIN: this.state.LINKEDIN,
      TWITTER: this.state.TWITTER,
      CONTRIBUTE: this.state.CONTRIBUTE,
      'group[189][256]': 256,
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
    const {
      EMAIL,
      NAME,
      SURNAME,
      COUNTRY,
      LINKEDIN,
      TWITTER,
      CONTRIBUTE,
      error,
      errorMessage,
    } = this.state

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
              type="text"
              name="NAME"
              id="mce-NAME"
              placeholder="Name"
              value={NAME}
              onChange={this.handleFieldChange}
            />
            <input
              type="text"
              name="SURNAME"
              id="mce-SURNAME"
              placeholder="Surname"
              value={SURNAME}
              onChange={this.handleFieldChange}
            />
            <input
              required
              type="email"
              name="EMAIL"
              id="mce-EMAIL"
              placeholder="Email"
              value={EMAIL}
              onChange={this.handleFieldChange}
            />
            <input
              required
              type="text"
              name="COUNTRY"
              id="mce-COUNTRY"
              placeholder="Country"
              value={COUNTRY}
              onChange={this.handleFieldChange}
            />
            <input
              type="text"
              name="LINKEDIN"
              id="mce-LINKEDIN"
              placeholder="LinkedIn"
              value={LINKEDIN}
              onChange={this.handleFieldChange}
            />
            <input
              type="text"
              name="TWITTER"
              id="mce-TWITTER"
              placeholder="Twitter"
              value={TWITTER}
              onChange={this.handleFieldChange}
            />
            <textarea
              required
              rows="3"
              name="CONTRIBUTE"
              id="mce-CONTRIBUTE"
              placeholder="Contribution"
              style={{ resize: 'none' }}
              value={CONTRIBUTE}
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
            Thank you for your suggestions and contribution. We’ll be in touch
            soon!
          </p>
        ) : (
          this.renderForm()
        )}
      </>
    )
  }
}

export default ContributeForm
