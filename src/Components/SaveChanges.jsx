import React from 'react'


function SaveChanges({setDiscriptionEditable, setEditInfoBtn, setCardNutrientInfo, setEditCardNutrientInfo, setsaveChangesOptions, setDeleteBenefitOptions,setAddBenefitOptions}) {

    function CancelChanges()
    {
        setAddBenefitOptions(false);
        setDeleteBenefitOptions(false);
        setsaveChangesOptions(false);
        setEditCardNutrientInfo(false)
        setDiscriptionEditable(false);
        
        setEditInfoBtn(true);
        setCardNutrientInfo(true);
    }
  return (
    <div className='d-flex align-items-end my-0'>
        <div className='d-flex justify-content-center'>
            <button className='btn btn-primary fw-bold fs-4 px-5 mx-2' onClick={CancelChanges}>Cancel</button>
            <button className='btn btn-primary fw-bold fs-4 px-5 mx-2'>Update</button>
        </div>
    </div>
  )
}

export default SaveChanges