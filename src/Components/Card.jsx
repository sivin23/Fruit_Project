import { useContext } from "react";
import axios from 'axios';

// import context variables........................
import {viewCardsFunctionContext, viewDetailsFunctionContext, selectedCardFunctionContext, selectedCardBenefitsFunctionContext, selectedCardNutrientsFunctionContext} from '../App';


function Card({fruitName, id, url, nutrientInfo}) {

    const viewDetailsFunction = useContext(viewDetailsFunctionContext);
    const viewCardFunction = useContext(viewCardsFunctionContext);
    const selectedCardInfo = useContext(selectedCardFunctionContext);
    const selectedBenefits = useContext(selectedCardBenefitsFunctionContext);
    const selectedNutrients = useContext(selectedCardNutrientsFunctionContext);

    // Button Click change component and get data
    async function ClickHandler(i) {

      const apiEndPoint = ("https://localhost:7125/api/Fruits/"+(i));

      await axios.get(apiEndPoint)
      .then(function (responce) {
          return responce.data;
      })
      .then(data => {
        selectedCardInfo(data)
        selectedBenefits(data[0].fruitBenifits)
        console.log("On clik logData");
        console.log(data[0].fruitBenifits);
        selectedNutrients(data[0].fruitNutrient)
      })
      .catch((error)=> {
          console.log(error);
      })

        viewCardFunction(false);
        viewDetailsFunction(true);
    }

  return (
    <div className="card w-100 col-sm-6 col-md-10 pt-3 justify-content-md-center">
      <h5 className="h5 px-3 text-uppercase fw-bold"> {fruitName} </h5>
        <img src={url} alt={`name-${id}`} className="card-img-top px-3 img-fluid" height='150px' width='150px' />
        <div className="card-body">
            <p className="card-text p-0 m-0 px-3">Carbohydrate: {nutrientInfo.carbohydrates}</p>
            <p className="card-text p-0 m-0 px-3">Protien: {nutrientInfo.protien}</p>
            <p className="card-text p-0 m-0 px-3">Fat: {nutrientInfo.fat}</p>
            <p className="card-text p-0 m-0 px-3">Calories: {nutrientInfo.calories}</p>
            <p className="card-text p-0 m-0 px-3">Sugar: {nutrientInfo.sugar}</p>
        </div>
        <button className="btn btn-primary card-btn"value={id} onClick={()=>{ClickHandler(id)}}>Show Details</button>
    </div>
  )
}

export default Card