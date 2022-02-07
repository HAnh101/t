import { configureStore } from "@reduxjs/toolkit";
//Get data product

import {
  dataPizzaReducers,
  dataSushiReducers,
  dataPancakeReducers,
  dataHamburgerReducers,
  dataChickenReducers,
  dataSaladReducers,
  dataNoodleReducers,
  dataCupcakeReducers,
  dataDumplingsReducers,
} from "../features/dataSlice";

//Handle Click
import HandleClickReducer from "../features/HandleClickToAppearCheckoutForm";

export const store = configureStore({
  reducer: {
    pizza: dataPizzaReducers,
    sushi: dataSushiReducers,
    pancake: dataPancakeReducers,
    hamburger: dataHamburgerReducers,
    cupcake: dataCupcakeReducers,
    dumplings: dataDumplingsReducers,
    chicken: dataChickenReducers,
    salad: dataSaladReducers,
    noodle: dataNoodleReducers,
    handleClick: HandleClickReducer,
  },
});
