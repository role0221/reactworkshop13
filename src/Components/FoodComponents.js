import React from 'react'

const FoodComponents = (data) => {
  return (
    <div className='card'>
        <div className='card-body'>
            <div className='card-image'>
                <img src={data.image_url} alt={data.name} />
            </div>
        </div>
        <div className='card-title'>{data.name}</div>
    </div>
  )
}

export default FoodComponents