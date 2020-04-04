import React, { createContext, useReducer, useContext } from "react";

export const Context = new createContext();

export const ContextProvider = ({ children }) => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "SET_TAGS":
        return { ...state, tags: action.value };
      case "SET_GUSTOS":
        return { ...state, gustos: action.value };
      case "SET_SELECTED":
        return { ...state, selectedValue: action.value };
      case "SET_NAME":
        return { ...state, fullName: action.value };
      case "SET_GENDER":
        return { ...state, gender: action.value };
      case "SET_BIRTH":
        return { ...state, birthDate: action.value };
      case "SET_LOCATION":
        return { ...state, location: action.value };
      case "SET_PREFERENCIA":
        return { ...state, preferencia: action.value };
      case "SET_CORREO":
        return { ...state, correo: action.value };
      case "SET_CLAVE":
        return { ...state, clave: action.value };
      default:
        console.error("Reducer, type not found...", action.type);
        break;
    }
  };
  const [context, dispatch] = useReducer(reducer, {
    tags: [],
    gustos: [],
    selectedValue: null,
    fullName: "",
    birthDate: null,
    location: null,
    gender: null,
    preferencia: "male",
    correo: "",
    clave: "",
  });

  return (
    <Context.Provider value={[context, dispatch]}>{children}</Context.Provider>
  );
};

export const useStateValue = () => useContext(Context);
