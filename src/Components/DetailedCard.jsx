
import Pagination from './Pagination'
import CardInfoForm from './CardInfoForm'
import CardEditForm from './CardEditForm'
import { useState, useContext} from 'react'

// import context states.........................
import { selectedCardBenefitsContext, selectedCardBenefitsFunctionContext, selectedCardNutrientsFunctionContext, selectedCardNutrientsContext} from '../App';
import Benefits from './Benefits';
import SaveChanges from './SaveChanges';




function DetailedCard({cardInfoData}) {

  //Setting context values for the Nutrients and benefits

  const selectedBenefits = useContext(selectedCardBenefitsContext);
  const selectedNutrients = useContext(selectedCardNutrientsContext);

  const selectedBenefitsFun = useContext(selectedCardBenefitsFunctionContext);
  selectedBenefitsFun(cardInfoData.fruitBenefits);
  const selectedNutrientsFun = useContext(selectedCardNutrientsFunctionContext);
  selectedNutrientsFun(cardInfoData.fruitNutrient);

  // benefit state List for new list items of benefit
  const [newBenefitList, setNewBenefitList] = useState([])
  // States to manage button options
  const [addBenefitOptions, setAddBenefitOptions] = useState(false);
  const [deleteBenefitOptions, setDeleteBenefitOptions] = useState(false)
  const [saveChangesOptions, setsaveChangesOptions] = useState(false);
  const [editInfoBtn, setEditInfoBtn] = useState(true);
  const [discriptionEditable, setDiscriptionEditable] = useState(false);

  const [editCardNutrientInfo, setEditCardNutrientInfo] = useState(false);
  const [cardNutrientInfo, setCardNutrientInfo] = useState(true);

  // Pagination tracking
  const [editPageInfo, setEditPageInfo] = useState(true);

  // On click Edit info button show other options
  function ClickShowEditOptions ()
  {
    setAddBenefitOptions(true);
    setDeleteBenefitOptions(true);
    setsaveChangesOptions(true);
    setEditInfoBtn(false);
    setEditCardNutrientInfo(true);
    setCardNutrientInfo(false);
    setDiscriptionEditable(true);
    setEditPageInfo(false);
  }
  return (
    <div className='container-fluid card-detail-content'>
      <div className='detail-page-nav px-5'>
        {/* Pagination */}
        <Pagination name = {cardInfoData.fruitName} editTag = {editPageInfo}/>
        {/* Edit Info button */}
        {editInfoBtn && (<button className='btn btn-primary fw-bold fs-4 px-5' onClick={ClickShowEditOptions}>Edit Info</button>)}
      </div>
      <div className='row px-0 mt-3'>
        <div className="col-md-8 px-5">
          <div className="row">
            <div className="col-md-5 d-flex flex-column justify-content-start">
              {/* Fruit image */}
              <img src={cardInfoData.fruitImageUrl} width="300px" alt="Fruit Img" />
              {editCardNutrientInfo && (<span className='lead text-danger d-flex justify-content-end'>Upload Photo</span>)}
            </div>
            <div className="col-md-7 d-flex justify-content-end">
              {/* Fruit Nutrient cards with editable component */}
            {editCardNutrientInfo && ( <CardEditForm nutrientInfo={selectedNutrients}/>)}
            {cardNutrientInfo && (<CardInfoForm nutrientInfo={selectedNutrients} />)}
            </div>
          </div>
          <div className='row my-3'>
            <div className="col">
              {/* Fruit discription */}
              { discriptionEditable ? 
              (<textarea className='form-control lead fs-4' style={{resize: 'none'}} rows="5" name="Discription" id="discription" contenteditable="false" >{cardInfoData.fruitDiscription}</textarea>)
              :
              (<p className='fs-4 mt-5 '>{cardInfoData.fruitDiscription}</p>)}
            </div>
          </div>
        </div>
        <div className="col-md-4 px-5 h-100 d-flex flex-column justify-content-between border-start border-secondary-subtle more-details-link">
          {/* benefit Component witth options */}
          <Benefits selectedBenefits = {selectedBenefits} newBenefitList = {newBenefitList} setNewBenefitList={setNewBenefitList} addBenefitOptions = {addBenefitOptions} deleteBenefitOptions = {deleteBenefitOptions} />
        </div>
        <div className='d-flex flex-row align-items-end justify-content-end save-cancel-btn-container'>
          {/* Save Change and Update buttons component */}
          {saveChangesOptions && <SaveChanges setDiscriptionEditable={setDiscriptionEditable} setCardNutrientInfo={setCardNutrientInfo} setEditCardNutrientInfo={setEditCardNutrientInfo} setEditInfoBtn={setEditInfoBtn} setsaveChangesOptions={setsaveChangesOptions} setDeleteBenefitOptions = {setDeleteBenefitOptions} setAddBenefitOptions = {setAddBenefitOptions} />}
        </div>
      </div>
    </div>
  )
}

export default DetailedCard