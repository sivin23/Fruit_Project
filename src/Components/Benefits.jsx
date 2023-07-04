import React from 'react'
import { useState} from 'react'

// import context states.........................
//import { selectedCardBenefitsContext } from '../App';
import AddBenefits from './AddBenefits';

function Benefits({counter, setCounter, setNewBenefitList, newBenefitList, selectedBenefits, addBenefitOptions, deleteBenefitOptions}) {

    const [selectedBenefitsList, setSelectedBenefitsList] = useState([selectedBenefits])
    // const listData = useContext(selectedCardBenefitsContext);
    // setSelectedBenefitsList(useContext(selectedCardBenefitsContext))
    
  return (
    <div className="container pt-3">
        <h5 className="h4 fw-bolder fs-4">Benefits</h5>
        {addBenefitOptions && <AddBenefits counter={counter} setCounter={setCounter} setNewBenefitList={setNewBenefitList} newBenefitList={newBenefitList} />}
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

            {/* { console.log(newBenefitList)} */}
            <ol className='m-0 p-0 mt-3'>
           {
           newBenefitList != null && (
            newBenefitList.map(element => (
                <li className='d-flex my-2 align-items-start justify-content-between' >
                <div className='fs-5 w-100 p-0 m-0 d-flex align-items-start justify-content-start'>
                    <div className='text-primary' >{element.id} &nbsp;</div>
                    <a href='/'>{element.Item}</a>
                </div>
                {
                deleteBenefitOptions && <span className='text-danger fs-5'>delete</span>
                }
            </li>
            )))
            // console.log(newBenefitList)
            }
            </ol>
    </div>
  )
}

export default Benefits