import React from 'react'
import addToMailchimp from 'gatsby-plugin-mailchimp'

const initialState = {
  EMAIL: '',
  success: false,
  error: false,
  errorMessage: '',
}

class ContactForm extends React.Component {
  state = initialState

  downloadFile() {
    const link = document.createElement('a')
    link.download = 'ExO-Canvas.pdf'
    link.href = '/pdf/exocanvas.pdf'
    link.click()
  }

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
      'group[189][1024]': 1024,
    }
    const { result, msg } = await addToMailchimp(email, listFields)

    if (result === 'success') {
      this.setState({ success: true })
      // Download the pdf
      this.downloadFile()
    } else if (result === 'error') {
      this.setState({ error: true, errorMessage: msg })
    } else {
      console.error(
        'The result from addToMailchimp was neither success nor error'
      )
    }
  }

  renderForm = () => {
    const { EMAIL, error, errorMessage } = this.state

    return (
      <form
        className="custom_form"
        method="post"
        name="mc-embedded-subscribe-form"
        onSubmit={this._handleSubmit}
      >
        <div className="fields">
          <div className="field half">
            <input
              required
              type="email"
              name="EMAIL"
              id="mce-EMAIL"
              placeholder="Your email"
              value={EMAIL}
              onChange={this.handleFieldChange}
            />
          </div>
        </div>
        {error && <p style={{ color: 'red' }}>{errorMessage}</p>}
        <button type="submit">Download</button>
      </form>
    )
  }

  render() {
    const { success } = this.state

    return (
      <>
        {success ? (
          <p className="form-success-message">
            Thanks for joining us! Now you are subscribed to the ExO Canvas
            community!
          </p>
        ) : (
          this.renderForm()
        )}
      </>
    )
  }
}

export default ContactForm
