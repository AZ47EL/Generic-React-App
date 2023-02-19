import './App.css'
import React, { useEffect } from 'react'
import List from './Templates/List'
import ListName from '../props/NavList.js'
import Card from './Templates/Card'
import CardData from '../props/CardData.js'
import SiteLogo from '../props/nucleus.svg'
import DropDownLogo from '../props/Drop-down-img.svg'

import Form from './Templates/Form.js'




const BootScreen = () => {  
  return(
    <div className="boot-scr">
      <img className="boot-logo" src={SiteLogo} />
      <img className="boot-logo-shadow" src={SiteLogo} />

      <div className="Author">
        <h3>by<span className="Author-name">AZ47EL</span></h3>
      </div>
    </div>
  )
}

const Logo = () => {
  return(
    <div className="main-logo">
      <img src={SiteLogo} width="10px" />
    </div>
  )
}

const Bar = () => {
  const [formState, setformState] = React.useState(false)

  const list = ListName.map(name => {
    return(
      <List
        handleClick={() => setformState(true)}
        key={Math.floor(Math.random() * 999) + 100}
        name={name}
      />
    )
  })

  return(
    <>
      <nav>
        <Logo />
        <div className="main-list-par">
          <ul className="main-list">
            <li className="drop-down"><img src={DropDownLogo} width="6" d="M5 60 l215 0"/></li>
            {list}
          </ul>
        </div>
        {formState && <Form exit={() => setformState(false)} />}
      </nav>

      {/* {formState && <Form exit={() => setformState(false)} />} */}
      
    </>
  )
} 

const Content = () => {
  const [cardCount, setCount] = React.useState([])

  const Increase = () => {
    setCount(prevValue => {
      return(
        [...prevValue,
        {
          id: Math.floor(Math.random() * 9999999) + 1000000,
          index: prevValue.length + 1
        }]
      )
    })
  }
  const Decrease = () => {
    setCount(prevValue => prevValue.slice(0, prevValue.length-1))
  }

  const Reset = () => {
    setCount([])
  }

  const card = cardCount.map((card) => {
    return(
      <Card 
        key={card.id}
        id={card.id}
        number={card.index}
      />
    )
  })

  return(
    <div className='main-container'>
      <div className='card-container'>
        {card}
      </div>

      <div className='value-container'>
         <div className='circle decrease' onClick={Decrease}>
          <h5>-</h5>  
        </div>
        <div className='circle value' onClick={Reset}>
          <h4>
            {cardCount.length}
          </h4>
        </div>
        <div className='circle increase' onClick={Increase}>
          <h5>+</h5>
        </div>
      </div>

      <hr />

      <div className='lorem'>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu mollis velit, eu lobortis risus. Proin ultrices auctor velit non consequat. Aliquam augue eros, suscipit sit amet eleifend nec, efficitur consequat diam. Nulla facilisi. Integer risus tortor, tristique ut eros in, laoreet vehicula risus. Ut vehicula auctor consectetur. Fusce eu pulvinar turpis. In in quam at libero lobortis hendrerit ac sit amet nunc. In et pulvinar arcu. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur ullamcorper tempor nulla eu egestas.</p>
      
        <p>Curabitur sed egestas velit. Phasellus et est sagittis risus suscipit aliquet eget a massa. Morbi vitae lacus quis quam molestie congue. Proin dapibus egestas lacinia. Fusce tristique at erat in accumsan. Duis sit amet eros turpis. Donec a consequat enim. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce justo neque, tincidunt ac magna vitae, fringilla auctor turpis. Ut tincidunt nibh vel mattis ullamcorper. Pellentesque sollicitudin viverra nisl vitae tempus.</p>

        <p>Phasellus ullamcorper congue faucibus. Aenean dapibus, enim in condimentum fringilla, mauris ex feugiat metus, non luctus risus ligula quis mi. Cras erat sapien, eleifend sed urna et, lacinia pharetra est. Aliquam erat volutpat. Quisque feugiat vitae turpis quis convallis. Quisque posuere in mauris ac semper. Sed ultricies ipsum sed massa accumsan, a euismod leo tincidunt. Sed faucibus, sapien venenatis auctor molestie, ante dui convallis ligula, a lacinia magna magna quis erat. Aliquam maximus quam id velit consequat, nec gravida augue scelerisque. In in nisl sed turpis consequat interdum. Sed ullamcorper iaculis varius. Nam vel mollis tellus, ac rutrum tellus.</p>

        <p>Donec viverra imperdiet molestie. Quisque non interdum odio. Praesent pretium condimentum pretium. Morbi dictum massa sit amet ex faucibus, a dapibus arcu rhoncus. Sed bibendum interdum nulla a ornare. Integer malesuada elit at urna porta imperdiet. In ullamcorper aliquam cursus. Nunc sagittis lobortis sapien. Ut sit amet nisl vel purus vestibulum posuere. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
      </div>
    </div>
  )
}

const Footer = () => {
  return(
    <div className="footer">
      <div></div>
    </div>
  )
}



const App = () => {

  const [BootTime, setBootTime] = React.useState(true)

  useEffect(() => {
    setTimeout(() => {
      setBootTime(false)
    }, 12400);
  });

  return(
    <div className="app">
      {BootTime && <BootScreen />}
      {!BootTime && <Bar />}
      {!BootTime && <Content />}
      {!BootTime &&  <Footer />}
    </div>
  )
}




export default App;