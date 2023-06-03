import React from 'react'

const Banner = (props) => {
  return (
    <div className='container'>
        <div className='banner'>
    <div className='content'>
 <h1>{props.head1}<span>{props.head2}</span></h1>
 <p className='mt-2'>{props.content}r</p>
  {props.data}
    </div>

    <img src={props.image} alt="" />
    </div>
  
    </div>
  )
}

export default Banner
