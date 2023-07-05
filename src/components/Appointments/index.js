import {Component} from 'react'
import {v4 as idv4} from 'uuid'
import AppointmentItem from '../AppointmentItem'
import './index.css'

class Appointments extends Component {
  state = {
    name: '',
    date: '',
    appointmentsList: [],
    isStarActive: false,
  }

  onAddingAppointment = event => {
    event.preventDefault()
    const {name, date} = this.state
    const newAppointment = {
      id: idv4(),
      name,
      date,
      isStarred: false,
    }

    this.setState(prevState => ({
      appointmentsList: [...prevState.appointmentsList, newAppointment],
      name: '',
      date: '',
    }))
  }

  toggleIsStarred = id => {
    this.setState(prevState => ({
      appointmentsList: prevState.appointmentsList.map(each => {
        if (id === each.id) {
          return {...each, isStarred: !each.isStarred}
        }
        return each
      }),
    }))
  }

  onClickStarred = () => {
    this.setState(prevState => ({
      isStarActive: !prevState.isStarActive,
    }))
  }

  renderAppointmentList = () => {
    const {appointmentsList} = this.state
    const {isStarActive} = appointmentsList
    const filterList = appointmentsList.filter(
      eachAppointment => eachAppointment.isStarred === true,
    )
    const updatedAppointmentsList = isStarActive ? filterList : appointmentsList

    return updatedAppointmentsList.map(eachAppointment => (
      <AppointmentItem
        key={eachAppointment.id}
        appointmentDetails={eachAppointment}
        toggleIsStarred={this.toggleIsStarred}
      />
    ))
  }

  onNameChange = event => {
    this.setState({name: event.target.value})
  }

  onDateChange = event => {
    this.setState({date: event.target.value})
  }

  render() {
    const {name, date, appointmentsList, isStarActive} = this.state

    return (
      <div className="main-bg">
        <div className="card">
          <div className="add-appointment-sect">
            <form className="form" onSubmit={this.onAddingAppointment}>
              <h1> Add Appointment </h1>
              <label htmlFor="nameInput"> Name </label>
              <input
                className="name-input"
                type="text"
                value={name}
                id="nameInput"
                placeholder="Title"
                onChange={this.onNameChange}
              />
              <label htmlFor="dateInput"> Date </label>
              <input
                className="date-Input"
                type="date"
                value={date}
                id="dateInput"
                placeholder="dd/mm/yyyy"
                onChange={this.onDateChange}
              />
              <button type="submit" className="btn">
                Add
              </button>
            </form>
            <img
              src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
              alt="appointments"
              className="img"
            />
          </div>
          <hr className="line" />
          <div className="appointments-cont">
            <div className="appointments-header">
              <h3 className="hdg"> Appointments </h3>
              <button
                type="button"
                className="starred-btn"
                onClick={this.onClickStarred}
              >
                Starred
              </button>
            </div>
            <ul className="appointmentItems-cont">
              {this.renderAppointmentList()}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Appointments
