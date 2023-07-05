import './index.css'

const AppointmentItem = props => {
  const {appointmentDetails, toggleIsStarred} = props
  const {id, name, date, isStarred} = appointmentDetails

  const onStarring = () => {
    toggleIsStarred(id)
  }

  const star = isStarred
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'

  return (
    <div className="appointment-cont">
      <div className="name-star-cont">
        <p> {name} </p>
        <img src={star} alt="star" onClick={onStarring} />
      </div>
      <p className="date"> {date} </p>
    </div>
  )
}

export default AppointmentItem
