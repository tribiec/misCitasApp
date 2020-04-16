import React, { createContext, useReducer, useContext } from "react";

export const Context = new createContext();

export const ContextProvider = ({ children }) => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "SET_ESTUDIA":
        return { ...state, estudia: !state.estudia };
      case "SET_UNIVERSIDAD":
        return { ...state, universidad: action.value };
      case "SET_GUSTOS":
        return { ...state, gustos: action.value };
      case "SET_SELECTED":
        return { ...state, selectedValue: action.value };
      case "SET_NOMBRE":
        return { ...state, fullNombre: action.value };
      case "SET_SEXO":
        return { ...state, sexo: action.value };
      case "SET_NACIMIENTO":
        return { ...state, fechaNacimiento: action.value };
      case "SET_CIUDAD":
        return { ...state, ciudad: action.value };
      case "SET_PREFERENCIA":
        return { ...state, preferencia: action.value };
      case "SET_CORREO":
        return { ...state, correo: action.value };
      case "SET_CLAVE":
        return { ...state, clave: action.value };
      case "SET_CLAVE_CONF":
        return { ...state, clave_conf: action.value };
      default:
        console.error("Reducer, type not found...", action.type);
        break;
    }
  };
  const [context, dispatch] = useReducer(reducer, {
    gustos: [],
    fullNombre: "",
    estudia: true,
    universidad: "",
    fechaNacimiento: null,
    ciudad: "",
    sexo: null,
    preferencia: null,
    correo: "",
    clave: "",
    clave_conf: ""
  });

  return (
    <Context.Provider value={[context, dispatch]}>{children}</Context.Provider>
  );
};

export const useStateValue = () => useContext(Context);
