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
      },
      {
        accessorKey: "tipoPolizaDescripcion",
        header: "Tipo de póliza",
        editVariant: 'select',
        editSelectOptions: typePolicy,    
        muiEditTextFieldProps: {
          select: true,
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
          InputLabelProps: { shrink: true },
          type: "date",
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
          InputLabelProps: { shrink: true },
          type: "date",
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
          type: "number",
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
        },
      },
    ],
    [validationErrors]
  );

  return columns;
};

export const columnsClient = () => {
  
  const columns = useMemo(
    () => [
      {
        accessorKey: "cedulaAsegurado",
        header: "Cédula",
        filterFn: "startsWith",
        size: 10,
        muiEditTextFieldProps: {
          required: true,
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
          InputLabelProps: { shrink: true },
          type: "date", 
        },
      },
    ],
    []
  );

  return columns;
};
