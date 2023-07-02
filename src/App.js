import { createContext, useState } from "react";
import "./App.css";
import Footer from "./Container/Footer";
import MainContent from "./Container/MainContent";
import Nav from "./Container/Nav";

// page context variables....................
export const viewCardsContext = createContext();
export const viewCardsFunctionContext = createContext();

export const viewDetailsContext = createContext();
export const viewDetailsFunctionContext = createContext();

export const selectedCardContext = createContext();
export const selectedCardFunctionContext = createContext();

export const selectedCardBenefitsContext = createContext();
export const selectedCardBenefitsFunctionContext = createContext();

export const selectedCardNutrientsContext = createContext();
export const selectedCardNutrientsFunctionContext = createContext();

function App() {
  //State for the component............................
  const [viewCards, setViewCards] = useState(true);
  const [viewDetail, setViewDetail] = useState(false);
  //State Variable for the dataSets.....................
  const [selectedCard, setSelectedCard] = useState([]);
  const [selectedCardBenefits, setSelectedCardBenefits] = useState([]);
  const [selectedCardNutrients, setSelectedCardNutrients] = useState([]);
  return (
    <div className="App">
      {/* Nav */}
      <Nav />

      {/* Main Content */}
      <selectedCardBenefitsFunctionContext.Provider
        value={setSelectedCardBenefits}
      >
        <selectedCardBenefitsContext.Provider value={selectedCardBenefits}>
          <selectedCardNutrientsFunctionContext.Provider
            value={setSelectedCardNutrients}
          >
            <selectedCardNutrientsContext.Provider
              value={selectedCardNutrients}
            >
              <selectedCardFunctionContext.Provider value={setSelectedCard}>
                <selectedCardContext.Provider value={selectedCard}>
                  <viewDetailsFunctionContext.Provider value={setViewDetail}>
                    <viewDetailsContext.Provider value={viewDetail}>
                      <viewCardsFunctionContext.Provider value={setViewCards}>
                        <viewCardsContext.Provider value={viewCards}>
                          <MainContent />
                        </viewCardsContext.Provider>
                      </viewCardsFunctionContext.Provider>
                    </viewDetailsContext.Provider>
                  </viewDetailsFunctionContext.Provider>
                </selectedCardContext.Provider>
              </selectedCardFunctionContext.Provider>
            </selectedCardNutrientsContext.Provider>
          </selectedCardNutrientsFunctionContext.Provider>
        </selectedCardBenefitsContext.Provider>
      </selectedCardBenefitsFunctionContext.Provider>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
