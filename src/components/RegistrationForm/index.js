import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {firstE: '', final: '', lastE: '', msg1: '', msg2: '', isrun: false}

  firstN = event => {
    if (event.target.value === '') {
      this.setState({msg1: 'Required', input1: 'input1'})
    } else if (event.target.value !== '') {
      this.setState({msg1: '', input1: 'input'})
    }
  }

  lastN = event => {
    if (event.target.value === '') {
      this.setState({msg2: 'Required'})
    } else if (event.target.value !== '') {
      this.setState({msg2: ''})
    }
  }

  sub = event => {
    event.preventDefault()
    const {firstE, lastE} = this.state
    if (firstE === '' && lastE === '') {
      this.setState({msg1: 'Required', msg2: 'Required'})
    } else if (firstE !== '' && lastE !== '') {
      this.setState({isrun: true})
    }
  }

  nameN = event => {
    this.setState({firstE: event.target.value})
  }

  lastN1 = event => {
    this.setState({lastE: event.target.value})
  }

  formData = () => {
    const {firstE, lastE, msg1, msg2, final, input1} = this.state

    return (
      <div className="main">
        <h1>Registration</h1>
        <form onSubmit={this.sub} className="main2">
          <label className="label" htmlFor="first">
            FIRST NAME
          </label>
          <input
            className={input1}
            value={firstE}
            id="first"
            type="text"
            onChange={this.nameN}
            onBlur={this.firstN}
          />
          <p className="para">{msg1}</p>
          <label className="label" htmlFor="last">
            LAST NAME
          </label>
          <input
            className={input1}
            value={lastE}
            id="last"
            type="text"
            onChange={this.lastN1}
            onBlur={this.lastN}
          />
          <p className="para">{msg2}</p>
          <button className="submit" type="submit">
            submit
          </button>
          <p className="para">{final}</p>
        </form>
      </div>
    )
  }

  btn = () => {
    this.setState({firstE: '', lastE: ''})
    this.setState({isrun: false})
  }

  registration = () => (
    <div className="success">
      <h1>Registration</h1>
      <img
        alt="success"
        className="suc"
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png "
      />
      <p>Submitted Successfully</p>
      <button className="to" type="button" onClick={this.btn}>
        Submit Another Response
      </button>
    </div>
  )

  render() {
    const {isrun} = this.state

    return (
      <div>
        <div>{isrun ? this.registration() : this.formData()}</div>
      </div>
    )
  }
}
export default RegistrationForm
