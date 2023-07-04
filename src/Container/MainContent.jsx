import axios from 'axios';
import React, { useContext, useState } from 'react'
import { useEffect } from 'react';
import { Card, DetailedCard } from "../Components"

// import context states.........................
import {viewCardsContext, viewDetailsContext, selectedCardContext} from '../App';



function MainContent() {

  // State for holding api Data..............
  const [apiData, setApiData] = useState([]);

  // State context variables.........................
  const viewCards = useContext(viewCardsContext);
  const viewCardDetail = useContext(viewDetailsContext);
  const selectedCard = useContext(selectedCardContext);


  //Api Axios calling function...............
  async function fetchApiData()
  {
      const apiEndPoint = "https://localhost:7125/api/Fruits/All";

      await axios.get(apiEndPoint)
      .then(function (responce) {
          return responce.data;
      })
      .then(data => {
          setApiData(data)
      })
      .catch((error)=> {
          console.log(error);
      })
  }


// Use Effect hook to load Cards with initial data list from api ....
  useEffect(() => {

      fetchApiData();

  }, [selectedCard])


  return (
    <div className='main-content'>
      {
        viewCards &&
        (
          <div className="container-fluid">
            <p className='px-5 mb-0  mt-3 fw-bolder fs-5'>Select a fruit to know details</p>
            <div className='row pt-3 d-flex justify-content-md-center justify-content-lg-start px-1'>
              {
                apiData.length > 0 && apiData.map(cards => (
                  <div className='col-sm-12 col-md-3 col-lg-2 d-flex justify-content-center p-0 ms-1 my-3'>
                    <Card fruitName = {cards.fruitName} id = {cards.id} url = {cards.fruitImageUrl} nutrientInfo = {cards.fruitNutrient} />
                  </div>
                ))
              }
            </div>
          </div>
        ) 
      }

      {
        viewCardDetail && selectedCard.length > 0 &&
        (
          // console.log(selectedCard)
        <DetailedCard cardInfoData = {selectedCard[0]} />
        )
      }

    </div>
  )
}

export default MainContent