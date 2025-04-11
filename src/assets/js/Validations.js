import * as Regex from "./RegularExpressions.js";

export const validateText= (value) =>{
  if(!value.match(Regex.textRegex) || value.length > 20){
    return 'El campo solo puede contener letras, números, espacios y guiones (-) y máximo 20 caracteres';
  }
  return undefined;
}

export const validateOnlyText= (value) =>{
  if(!value.match(Regex.onlyTextRegex) || value.length > 20){
    return 'El campo solo puede contener letras máximo 20 caracteres';
  }
  return undefined;
}

export const validateCedula = (value) => {
  if (value.length < 9 || !value.match(Regex.costaricanIdRegex) || value.length > 20) {
    return 'La cédula debe tener al menos 9 y máximo 20 caracteres. También se permiten cédulas extranjeras con formato como XXXX-123456789 o cédulas con letras y guiones.';
  }
  return undefined; 
};

export const validatePositiveNumber = (value, fieldName) => {
  if (!value) {
    return `${fieldName} es obligatorio`;
  } else if (isNaN(value) || value <= 0) {
    return `${fieldName} debe ser un número positivo`;
  }
  return undefined;
};

export const validateFutureDate = (value, fieldName) => {
  const currentDate = new Date();
  const selectedDate = new Date(value);
  if (selectedDate > currentDate) {
    return `${fieldName} no puede ser una fecha futura`;
  }
  return undefined; 
};

export const validateOnlyFutureDate = (value, fieldName) => {
  const currentDate = new Date();
  const selectedDate = new Date(value);
  if (selectedDate <= currentDate) {
    return `${fieldName} debe ser una fecha futura`;
  }
  return undefined; 
};

export const validateBeforeDate = (value, fieldName, compareDate) => {
  const selectedDate = new Date(value);
  const comparisonDate = new Date(compareDate); 
  if (selectedDate > comparisonDate) {
    return `${fieldName} debe ser anterior o igual a la fecha de vencimiento`;
  }
  return undefined;
};

export const clearError = (setValidationErrors, validationErrors, fieldName) => {
  const updatedErrors = { ...validationErrors };
  delete updatedErrors[fieldName];
  setValidationErrors(updatedErrors);
};

export const setError = (setValidationErrors, validationErrors, fieldName, message) => {
  setValidationErrors({
    ...validationErrors,
    [fieldName]: message,
  });
};