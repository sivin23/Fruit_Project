import React from 'react'

function CardInfoForm({nutrientInfo}) {
  return (
    <div className='info-content flex-md-column justify-content-md-center m-0' key={nutrientInfo.id}>
      <div className="row">
        <div className="col px-4">
          <h4 className="h4 fw-bolder fs-4">Nutrients</h4>
          <div className='d-flex flex-row align-items-center justify-content-between mt-1'>
            <p className="lead col m-0 p-0">Carbohydrate</p> <span className='col text-center'>:</span> <p className="fw-bold col text-end">{nutrientInfo.carbohydrates}</p>
          </div>
          <div className="d-flex flex-row align-items-center justify-content-between mt-1">
            <p className="lead col m-0 p-0">Protiens</p> <span className='col text-center'>:</span> <p className="fw-bold col text-end">{nutrientInfo.protien}</p>
          </div>
          <div className="d-flex flex-row align-items-center justify-content-between mt-1">
            <p className="lead col m-0 p-0">Fat</p> <span className='col text-center'>:</span> <p className="fw-bold col text-end">{nutrientInfo.fat}</p>
          </div>
          <div className="d-flex flex-row align-items-center justify-content-between mt-1">
            <p className="lead col m-0 p-0">Calories</p> <span className='col text-center'>:</span> <p className="fw-bold col text-end">{nutrientInfo.calories}</p>
          </div>
          <div className="d-flex flex-row align-items-center justify-content-between mt-1">
            <p className="lead col">Sugar</p> <span className='col text-center'>:</span> <p className="fw-bold col text-end">{nutrientInfo.sugar}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardInfoForm