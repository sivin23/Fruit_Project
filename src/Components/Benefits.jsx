import React from 'react'
import { useState, useContext} from 'react'

// // import context states.........................
 import { selectedCardBenefitsContext } from '../App';
import AddBenefits from './AddBenefits';
// const listData = [];

function Benefits({selectedBenefits, newBenefitList, setNewBenefitList, addBenefitOptions, deleteBenefitOptions}) {
    const [selectedBenefitsList, setSelectedBenefitsList] = useState([selectedBenefits])
    const listData = useContext(selectedCardBenefitsContext);
    // setSelectedBenefitsList(useContext(selectedCardBenefitsContext))
    console.log("frm benefits")
    console.log(selectedBenefitsList)
    console.log(listData);

    
  return (
    <div className="container pt-3">
        <h5 className="h4 fw-bolder fs-4">Benefits</h5>
        {addBenefitOptions && <AddBenefits setNewBenefitList={setNewBenefitList}/>}
        <ol className='m-0 p-0 mt-3'>
            {
                selectedBenefitsList[0].map(Item => (
                        <li className='d-flex my-2 align-items-start justify-content-between' >
                            <div className='fs-5 w-100 p-0 m-0 d-flex align-items-start justify-content-start'>
                                <div className='text-primary' >{Item.id} &nbsp;</div>
                                <a href='/'> {Item.fruitBenifits}</a>
                            </div>
                            {deleteBenefitOptions && <span className='text-danger fs-5'>delete</span>}
                        </li>
                    ))
            }

            {
            newBenefitList.map(Item => (
                <li className='lead fs-5 my-2 d-flex align-items-start justify-content-between' >
                    <div className=' w-100 p-0 m-0 d-flex align-items-center justify-content-between'>
                        <a href="/">{Item.fruitBenefits}</a>
                        {deleteBenefitOptions && <span>Delete</span>}
                    </div>
                 </li>
            ))
            }
        </ol>
    </div>
  )
}

export default Benefits