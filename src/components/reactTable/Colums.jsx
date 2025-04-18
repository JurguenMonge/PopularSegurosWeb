import { useMemo } from "react";
import { statePolicy, coverage, typePolicy } from "../../utils/Utils.js";
import * as Val from "../../assets/js/Validations.js";

const filterDefault = [
  "contains",
  "startsWith",
  "endsWith",
  "equals",
  "notEquals",
  "fuzzy",
];

export const columnsPolicys = (validationErrors, setValidationErrors) => {
  const columns = useMemo(
    () => [
      {
        accessorKey: 'idPoliza',
        header: 'Id',
        size: 80,
        enableEditing: false,
        Edit: () => null,
      },
      {
        accessorKey: "numeroPoliza",
        header: "Número Poliza",
        filterFn: "startsWith",
        size: 10,
        muiEditTextFieldProps: {
          required: true,
          error: !!validationErrors?.numeroPoliza,
          helperText: validationErrors?.numeroPoliza,
          onBlur: (e) => {
            setValidationErrors({
              ...validationErrors,
              numeroPoliza: Val.validateNumPoliza(e.target.value),
            });
          },
        },
      },
      {
        accessorKey: "cedulaAsegurado",
        header: "Cédula",
        filterFn: "startsWith",
        columnFilterModeOptions: filterDefault,
        size: 10,
        muiEditTextFieldProps: {
          required: true,
          error: !!validationErrors?.cedulaAsegurado,
          helperText: validationErrors?.cedulaAsegurado,
          onBlur: (e) => {
            setValidationErrors({
              ...validationErrors,
              cedulaAsegurado: Val.validateCedula(e.target.value),
            });
          },
        },
      },
      {
        accessorKey: "nombre",
        header: "Nombre",
        filterFn: "startsWith",
        enableEditing: false,
        Edit: () => null,
      },
      {
        accessorKey: "primerApellido",
        header: "Primer apellido",
        filterFn: "startsWith",
        enableEditing: false,
        Edit: () => null,
      },
      {
        accessorKey: "segundoApellido",
        header: "Segundo apellido",
        filterFn: "startsWith",
        columnFilterModeOptions: filterDefault,
        enableEditing: false,
        Edit: () => null,
      },
      {
        accessorKey: "tipoPersona",
        header: "Tipo de persona",
        filterFn: "startsWith",
        columnFilterModeOptions: filterDefault,
        size: 10,
        enableEditing: false,
        Edit: () => null,
      },
      {
        accessorKey: "fechaNacimiento",
        header: "Fecha de nacimiento",
        filterFn: "startsWith",
        columnFilterModeOptions: filterDefault,
        muiEditTextFieldProps: {
          required: true,
          InputLabelProps: { shrink: true },
          type: "date",
        },
        enableEditing: false,
        Edit: () => null,
      },
      {
        accessorKey: "tipoPolizaDescripcion",
        header: "Tipo de póliza",
        editVariant: 'select',
        editSelectOptions: typePolicy,    
        muiEditTextFieldProps: {
          select: true,
          error: !!validationErrors?.tipoPolizaDescripcion,
          helperText: validationErrors?.tipoPolizaDescripcion,
          onBlur: (e) => {
            setValidationErrors({
              ...validationErrors,
              tipoPolizaDescripcion: Val.validate(e.target.value),
            });
          },
        },
      },
      {
        accessorKey: "coberturaDescripcion",
        header: "Cobertura",
        filterFn: "startsWith",
        columnFilterModeOptions: filterDefault,
        size: 10,
        editVariant: 'select',
        editSelectOptions: coverage,
        muiEditTextFieldProps: {
          select: true,
          error: !!validationErrors?.coberturaDescripcion,
          helperText: validationErrors?.coberturaDescripcion,
          onBlur: (e) => {
            setValidationErrors({
              ...validationErrors,
              coberturaDescripcion: Val.validate(e.target.value),
            });
          },
        },
      },
      {
        accessorKey: "estadoPolizaDescripcion",
        header: "Estado de la póliza",
        filterFn: "startsWith",
        columnFilterModeOptions: filterDefault,
        size: 10,
        editVariant: 'select',
        editSelectOptions: statePolicy,
        muiEditTextFieldProps: {
          select: true,
          error: !!validationErrors?.estadoPolizaDescripcion,
          helperText: validationErrors?.estadoPolizaDescripcion,
          onBlur: (e) => {
            setValidationErrors({
              ...validationErrors,
              estadoPolizaDescripcion: Val.validate(e.target.value),
            });
          },
        },
      },
      {
        accessorKey: "montoAsegurado",
        header: "Monto asegurado",
        filterFn: "startsWith",
        columnFilterModeOptions: filterDefault,
        size: 10,
        muiEditTextFieldProps: {
          required: true,
          type: "number",
          inputProps:{
            min: 1,  
          },
          error: !!validationErrors?.montoAsegurado,
          helperText: validationErrors?.montoAsegurado,
          onBlur: (e) => {
            setValidationErrors({
              ...validationErrors,
              montoAsegurado: Val.validatePositiveNumber(e.target.value),
            });
          },
        },
      },
      {
        accessorKey: "fechaVencimiento",
        header: "Fecha de vencimiento",
        filterFn: "startsWith",
        columnFilterModeOptions: filterDefault,
        size: 10,
        muiEditTextFieldProps: {
          required: true,
          inputProps:{
            min: new Date().toISOString().split("T")[0],  
          },
          InputLabelProps: { shrink: true },
          type: "date",
          error: !!validationErrors?.fechaVencimiento,
          helperText: validationErrors?.fechaVencimiento,
          onBlur: (e) => {
            setValidationErrors({
              ...validationErrors,
              fechaVencimiento: Val.validateBeforeDate(e.target.value),
            });
          },
        },
      },
      {
        accessorKey: "fechaEmision",
        header: "Fecha de Emision",
        filterFn: "startsWith",
        columnFilterModeOptions: filterDefault,
        size: 10,
        muiEditTextFieldProps: {
          required: true,
          inputProps:{
            max: new Date().toISOString().split("T")[0],  
          },
          InputLabelProps: { shrink: true },
          type: "date",
          error: !!validationErrors?.fechaEmision,
          helperText: validationErrors?.fechaEmision,
          onBlur: (e) => {
            setValidationErrors({
              ...validationErrors,
              fechaEmision: Val.validateDate(e.target.value),
            });
          },
        },
      },
      {
        accessorKey: "prima",
        header: "Prima",
        filterFn: "startsWith",
        columnFilterModeOptions: filterDefault,
        size: 10,
        muiEditTextFieldProps: {
          required: true,
          inputProps:{
            min: 1,
          },
          type: "number",
          error: !!validationErrors?.prima,
          helperText: validationErrors?.prima,
          onBlur: (e) => {
            setValidationErrors({
              ...validationErrors,
              prima: Val.validatePositiveNumber(e.target.value),
            });
          },
        },
      },
      {
        accessorKey: "periodo",
        header: "Periodo",
        filterFn: "startsWith",
        columnFilterModeOptions: filterDefault,
        size: 10,
       muiEditTextFieldProps: {
          required: true,
          InputLabelProps: { shrink: true },
          type: "date",
          error: !!validationErrors?.periodo,
          helperText: validationErrors?.periodo,
          onBlur: (e) => {
            setValidationErrors({
              ...validationErrors,
              periodo: Val.validate(e.target.value),
            });
          },
        },
      },
      {
        accessorKey: "fechaInclusion",
        header: "Fecha de Inclusión",
        filterFn: "startsWith",
        columnFilterModeOptions: filterDefault,
        size: 10,
        muiEditTextFieldProps: {
          required: true,
          InputLabelProps: { shrink: true },
          type: "date",
          error: !!validationErrors?.fechaInclusion,
          helperText: validationErrors?.fechaInclusion,
          onBlur: (e) => {
            setValidationErrors({
              ...validationErrors,
              fechaInclusion: Val.validate(e.target.value),
            });
          },
        },
      },
      {
        accessorKey: "aseguradora",
        header: "Aseguradora",
        filterFn: "startsWith",
        columnFilterModeOptions: filterDefault,
        size: 10,
        muiEditTextFieldProps: {
          required: true,
          error: !!validationErrors?.aseguradora,
          helperText: validationErrors?.aseguradora,
          onBlur: (e) => {
            setValidationErrors({
              ...validationErrors,
              aseguradora: Val.validateText(e.target.value),
            });
          },
        },
      },
    ],
    [validationErrors]
  );

  return columns;
};

export const columnsClient = (validationErrors, setValidationErrors) => {
  
  const columns = useMemo(
    () => [
      {
        accessorKey: "cedulaAsegurado",
        header: "Cédula",
        filterFn: "startsWith",
        size: 10,
        muiEditTextFieldProps: {
          required: true,
          error: !!validationErrors?.cedulaAsegurado,
          helperText: validationErrors?.cedulaAsegurado,
          onBlur: (e) => {
            setValidationErrors({
              ...validationErrors,
              nombre: Val.validateCedula(e.target.value),
            });
          },
        },
      },
      {
        accessorKey: "nombre",
        header: "Nombre",
        filterFn: "startsWith",
        columnFilterModeOptions: filterDefault,   
        size: 10, 
        muiEditTextFieldProps: {
          required: true,
          error: !!validationErrors?.nombre,
          helperText: validationErrors?.nombre,
          onBlur: (e) => {
            setValidationErrors({
              ...validationErrors,
              nombre: Val.validateName(e.target.value),
            });
          },
        },
      },
      {
        accessorKey: "primerApellido",
        header: " Primer Apellido",
        filterFn: "startsWith",
        columnFilterModeOptions: filterDefault,   
        size: 10, 
        muiEditTextFieldProps: {
          required: true,
          error: !!validationErrors?.primerApellido,
          helperText: validationErrors?.primerApellido,
          onBlur: (e) => {
            setValidationErrors({
              ...validationErrors,
              primerApellido: Val.validateApellido(e.target.value),
            });
          },
        },
      },
      {
        accessorKey: "segundoApellido",
        header: "Segundo Apellido",
        filterFn: "startsWith",
        columnFilterModeOptions: filterDefault,   
        size: 10, 
        muiEditTextFieldProps: {
          required: true,
          error: !!validationErrors?.segundoApellido,
          helperText: validationErrors?.segundoApellido,
          onBlur: (e) => {
            setValidationErrors({
              ...validationErrors,
              segundoApellido: Val.validateApellido(e.target.value),
            });
          },
        },
      },
      {
        accessorKey: "tipoPersona",
        header: "Tipo de Persona",
        filterFn: "startsWith",
        columnFilterModeOptions: filterDefault,   
        size: 10, 
        muiEditTextFieldProps: {
          required: true,
          error: !!validationErrors?.tipoPersona,
          helperText: validationErrors?.tipoPersona,
          onBlur: (e) => {
            setValidationErrors({
              ...validationErrors,
              tipoPersona: Val.validateText(e.target.value),
            });
          },
        },
      },
      {
        accessorKey: "fechaNacimiento",
        header: "Fecha de Nacimiento",
        filterFn: "startsWith",
        columnFilterModeOptions: filterDefault,
        size: 10,
        muiEditTextFieldProps: {
          required: true,
          inputProps:{
            max: new Date().toISOString().split("T")[0],  
          },
          InputLabelProps: { shrink: true },
          type: "date",
          error: !!validationErrors?.fechaNacimiento,
          helperText: validationErrors?.fechaNacimiento,
          onBlur: (e) => {
            setValidationErrors({
              ...validationErrors,
              fechaNacimiento: Val.validateDate(e.target.value),
            });
          },
        },
      },
    ],
    [validationErrors]
  );

  return columns;
};
