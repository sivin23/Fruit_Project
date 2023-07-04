import React from 'react'

function CardEditForm({nutrientInfo}) {
  return (
    <div className='info-content m-0' key={nutrientInfo.id}>
      <div className="row">
        <div className="col">
          <h4 className="h4 fw-bolder fs-4">Nutrients</h4>
          <div className='d-flex flex-row align-items-center justify-content-between mt-1'>
            <p className="lead col m-0 p-0">Carbohydrate</p> 
            <span className='col text-center'>:</span> 
            <input type='text' className="form-control fw-bold col text-end" value={nutrientInfo.carbohydrates} onChange={(e)=>e.target.value} readOnly/>
          </div>
          <div className="d-flex flex-row align-items-center justify-content-between mt-1">
            <p className="lead col m-0 p-0">Protiens</p> 
            <span className='col text-center'>:</span> 
            <input type='text' className="form-control fw-bold col text-end" value={nutrientInfo.protien} onChange={(e)=>e.target.value} readOnly/>
          </div>
          <div className="d-flex flex-row align-items-center justify-content-between mt-1">
            <p className="lead col m-0 p-0">Fat</p>
            <span className='col text-center'>:</span> 
            <input type='text' className="form-control fw-bold col text-end" value={nutrientInfo.fat} onChange={(e)=>e.target.value} readOnly/>
          </div>
          <div className="d-flex flex-row align-items-center justify-content-between mt-1">
            <p className="lead col m-0 p-0">Calories</p> 
            <span className='col text-center'>:</span> 
            <input type='text' className="form-control fw-bold col text-end"value={nutrientInfo.calories} onChange={(e)=>e.target.value} readOnly/>
          </div>
          <div className="d-flex flex-row align-items-center justify-content-between mt-1">
            <p className="lead col m-0 p-0">Sugar</p> 
            <span className='col text-center'>:</span> 
            <input type='text' className="form-control fw-bold col text-end" value={nutrientInfo.sugar} onChange={(e)=>e.target.value} readOnly/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardEditForm