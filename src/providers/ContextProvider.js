import React, { createContext, useReducer, useContext } from "react";

export const Context = new createContext();

export const ContextProvider = ({ children }) => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "SET_NOMBRE":
        return { ...state, fullNombre: !state.estudia };
      case "SET_UNIVERSIDAD":
        return { ...state, universidad: action.value };
      case "SET_CIUDAD":
        return { ...state, ciudad: action.value };
      case "SET_SEXO":
        return { ...state, sexo: action.value };
      case "SET_CORREO":
        return { ...state, correo: action.value };
      case "SET_LOGGED":
        return { ...state, logged: action.value };
      case "SET_TOKEN":
        return { ...state, token: action.value };
      default:
        console.error("Reducer, type not found...", action.type);
        break;
    }
  };

  const [context, dispatch] = useReducer(reducer, {
    gustos: [],
    fullNombre: "",
    universidad: "",
    ciudad: "",
    sexo: null,
    correo: "",
    token: null
  });

  return (
    <Context.Provider value={[context, dispatch]}>{children}</Context.Provider>
  );
};

export const useStateValue = () => useContext(Context);
