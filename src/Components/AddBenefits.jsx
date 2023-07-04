import React, { useState } from 'react'

function AddBenefits({counter, setCounter, BenefitListId, setBenefitListId, newBenefitList, setNewBenefitList}) {
  const [benefitMessage, setBenefitMessage] = useState("")
  function handleChange(e) {
    setBenefitMessage(e.target.value)
  }
  function addBenefit() { 
    setCounter(counter+1)
    const d = (d)=> ([...newBenefitList, {id: counter, Item: benefitMessage}])
    setNewBenefitList(d)
    document.getElementById('bentext').value = " "
  }

  return (
    <div className='d-flex flex-row flex-md-column flex-lg-row'>
        <input id='bentext' className='form-control mt-2 ms-1' onChange={handleChange} type='text'/>
        <button className='btn btn-outline-primary text-nowrap mt-2 ms-1' onClick={addBenefit}>+ Add benefit</button>
    </div>
  )
}

export default AddBenefits