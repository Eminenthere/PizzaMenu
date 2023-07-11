import React from 'react'

const Footer = () => {
  const hour = new Date().getHours()
  const openHour = 8
  const closeHour = 22
  const isOpen = hour >= openHour && hour <= closeHour
  console.log(isOpen)
  return (
    <footer className='footer'>
      <div className='order'>
        {new Date().toLocaleTimeString()} We're currently{' '}
        {isOpen ? 'Open' : 'Closed'}
        <button className='btn'>{isOpen ? 'Order' : 'Closed'}</button>
      </div>
    </footer>
  )
}

export default Footer
