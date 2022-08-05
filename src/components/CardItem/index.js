// Write your code here.
import './index.css'

const CardItem = props => {
  const {cardsDetails} = props
  const {title, description, imgUrl, className} = cardsDetails
  const nameCss = `card ${className}`
  return (
    <li className="cards-container">
      <li className={className}></li>
      <div className={nameCss}>
        <div className="card-text">
          <h1 className="title-heading">{title}</h1>
          <p className="paragraph-card">{description}</p>
          <img className="image" src={imgUrl} alt={title} />
        </div>
      </div>
    </li>
  )
}

export default CardItem
