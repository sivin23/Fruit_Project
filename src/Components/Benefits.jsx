import React from 'react'
import { useState, useContext} from 'react'

// import context states.........................
//import { selectedCardBenefitsContext } from '../App';
import AddBenefits from './AddBenefits';

function Benefits({ selectedBenefits, addBenefitOptions, deleteBenefitOptions}) {
    // Adding new benifits
    const [newBenefitList, setNewBenefitList] = useState([]);
    //Id State variable
    const [BenefitListId, setBenefitListId] = useState(1);

    const [selectedBenefitsList, setSelectedBenefitsList] = useState([selectedBenefits])
    // const listData = useContext(selectedCardBenefitsContext);
    // setSelectedBenefitsList(useContext(selectedCardBenefitsContext))
    
  return (
    <div className="container pt-3">
        <h5 className="h4 fw-bolder fs-4">Benefits</h5>
        {addBenefitOptions && <AddBenefits BenefitListId={BenefitListId} setBenefitListId={setBenefitListId} newBenefitList={newBenefitList} setNewBenefitList={setNewBenefitList}/>}
        <ol className='m-0 p-0 mt-3'>
            {
                selectedBenefitsList[0].map(Item => ( 
                    <li className='d-flex my-2 align-items-start justify-content-between' >
                        <div className='fs-5 w-100 p-0 m-0 d-flex align-items-start justify-content-start'>
                            <div className='text-primary' >{Item.id} &nbsp;</div>
                            <a href='/'>{Item.fruitBenifits}</a>
                        </div>
                        {
                        deleteBenefitOptions && <span className='text-danger fs-5'>delete</span>
                        }
                    </li>
                     ))
            }
            </ol>

            { console.log(newBenefitList)}
            <ol className='m-0 p-0 mt-3'>
           { newBenefitList != null && (
           newBenefitList.map(Item => (
                <li className='d-flex my-2 align-items-start justify-content-between' >
                    <div className='fs-5 w-100 p-0 m-0 d-flex align-items-start justify-content-start'>
                        <div className='text-primary' >*&nbsp;</div>
                        <a href='/'>{Item}</a>
                    </div>
                    {
                    deleteBenefitOptions && <span className='text-danger fs-5'>delete</span>
                    }
                </li>
            ))
            )
            }
            </ol>
    </div>
  )
}

export default Benefits