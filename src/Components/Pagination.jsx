import React from 'react'

function Pagination({name, editTag}) {
  return (
    <div className='fw-bolder fs-5'>Fruit Details - {name} {editTag?'': "> Edit Info"}</div>
  )
}

export default Pagination