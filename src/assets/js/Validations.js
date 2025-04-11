import * as Regex from "./RegularExpressions.js";

export const validateCedula = (value) => {
  if (!value.match(Regex.costaricanIdRegex)) {
    return "La cédula debe tener 9 dígitos numéricos.";
  }
  return undefined;
};

export const validateName = (value) => {
  if (!value.match(Regex.nameRegex)) {
    return "El nombre solo puede contener letras.";
  }
  return undefined;
};

export const validateApellido = (value) => {
  if (!value.match(Regex.nameRegex)) {
    return "El apellido solo puede contener letras.";
  }
  return undefined;
};

export const validateText = (value) => {
  if (!value.match(Regex.onlyTextRegex)) {
    return "Este campo solo puede contener letras.";
  }
  return undefined;
};

export const validateDate = (value) => {
  const currentDate = new Date();
  const selectedDate = new Date(value);
  if (selectedDate > currentDate) {
    return "La fecha no puede ser futura.";
  }
  return undefined;
};

export const validateRequired = (value) => {
  if (!value || value.trim() === "") {
    return "Este campo es obligatorio.";
  }
  return undefined;
};