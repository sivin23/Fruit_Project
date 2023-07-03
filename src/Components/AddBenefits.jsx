import React, { useState } from 'react'

function AddBenefits({BenefitListId, setBenefitListId, newBenefitList, setNewBenefitList}) {
  const [benefitMessage, setBenefitMessage] = useState("")
  function handleChange(e) {
    setBenefitMessage(e.target.value)
  }
  function addBenefit() { 
    const d = [...newBenefitList, benefitMessage]
    setNewBenefitList(d)
    document.getElementById('bentext').value = " "
  }
  return (
    <div className='input-group input-group-lg'>
        <input id='bentext' className='form-control' onChange={handleChange} type='text'/>
        <button className='btn' onClick={addBenefit}>+ Add benefit</button>
    </div>
  )
}

export default AddBenefits