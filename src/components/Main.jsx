// import React from 'react'

export default function Main(props) {
    const{data} = props
  return (
    <div className='imgContainer'>
        <img  className="bgImage" src={data?.url} alt={data?.title || 'bg-img'} />
    </div> 
 )
}
