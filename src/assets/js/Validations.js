import * as Regex from "./RegularExpressions.js";

export const validateCedula = (value) => {
  const lengthError = validateLength(value, 12); 
  if (lengthError) return lengthError;

  if (!value.match(Regex.costaricanIdRegex)) {
    return "La cédula debe tener un formato nacional o extranjero.";
  }
  return undefined;
};

export const validateName = (value) => {
  const lengthError = validateLength(value, 20); 
  if (lengthError) return lengthError;

  if (!value.match(Regex.nameRegex)) {
    return "El nombre solo puede contener letras.";
  }
  return undefined;
};

export const validateApellido = (value) => {
  const lengthError = validateLength(value, 20); 
  if (lengthError) return lengthError;

  if (!value.match(Regex.nameRegex)) {
    return "El apellido solo puede contener letras.";
  }
  return undefined;
};

export const validateText = (value) => {
  const lengthError = validateLength(value, 20); 
  if (lengthError) return lengthError;

  if (!value.match(Regex.onlyTextRegex)) {
    return "Este campo solo puede contener letras.";
  }
  return undefined;
};

export const validateNumPoliza = (value) => {
  const lengthError = validateLength(value, 20); 
  if (lengthError) return lengthError;

  if (!value.match(Regex.policyRegex)) {
    return "Este campo solo puede contener letras y guiones.";
  }
  return undefined;
};

export const validatePositiveNumber = (value) => {
  if (isNaN(value) || value <= 0) {
    return "Este campo debe ser un número mayor a 0.";
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

export const validateLength = (value, length) => {

  if (value.length> length) {
    return `La longitud de este campo debe ser menor a ${length}.`;
  }

  return undefined;
};