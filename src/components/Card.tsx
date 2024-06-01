import styles from './Card.module.scss'
import cardImg from '../assets/image-equilibrium.jpg'
import avatarImg from '../assets/image-avatar.png'
import clockIcon from '../assets/icon-clock.svg'
import ethIcon from '../assets/icon-ethereum.svg'
import viewIcon from '../assets/icon-view.svg'

export const Card = () => {
  const { container, card, separator, footer, eth, time_price, creator_name, hoverEye, overlay, img_container, imgCard } = styles
  return (<div className={container}>
    <div className={card}>
      <div className={img_container}>
        <img src={cardImg} alt="nft equilibrum #3429" className={imgCard} />
        <div className={overlay} />
        <img src={viewIcon} className={hoverEye} />
      </div>
      <h1>Equilibrum #3429</h1>
      <p>Our Equilibrium collection promotes balance and calm.</p>
      <div className={time_price}>
        <span className={eth}><img src={ethIcon} alt="ethereum icon" /> 0.041 ETH</span>
        <span><img src={clockIcon} alt="clock icon" /> 3 days left</span>
      </div>
      <div className={separator} />
      <div className={footer}>
        <img src={avatarImg} alt="Jules" />
        <span>
          Creation of
          <span className={creator_name}> Jules Wyvern</span>
        </span>
      </div>
    </div>
  </div>)
}