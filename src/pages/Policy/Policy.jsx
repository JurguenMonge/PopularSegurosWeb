//Libraries
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";

//Components
import Spinner from "../../components/Spinner.jsx";
import CustomTable from "../../components/reactTable/CustomTable.jsx";
import { columnsPolicys } from "../../components/reactTable/Colums.jsx";

import { useUserContext } from "../../context/UserContext.jsx";

//API
import { getAll, insertPolicy, deletePolicy, updatePolicy} from "../../service/PolicyAPI.js";

//assets/Utils
import { ToastSuccess, ToastError } from "../../assets/js/Toastify.js";
import { SweetAlertEliminar } from "../../assets/js/sweetAlert.js";

export default function Policy() {
  const queryClient = useQueryClient();
  const [validationErrors, setValidationErrors] = useState({});

  const { mutate: insertMutate } = useMutation({
    mutationFn: insertPolicy,
    onError: (error) => {
      console.error('Error en la inserción:', error.message);
      ToastError(error.message);
    },
    onSuccess: (data) => {
      ToastSuccess(data);
      queryClient.invalidateQueries(["getAllClients"]);
    },
  });

  const {mutate: updateMutate} = useMutation({
      mutationFn: updatePolicy,
      onError: (error) => {
        ToastError(error.message);
      },
      onSuccess: (data) => {
        ToastSuccess(data);
        queryClient.invalidateQueries(["getAllClients"]);
      },
    });

  const { data, isLoading } = useQuery({
    queryKey: ["getAllClients"],
    queryFn: getAll,
  });

  const { mutate } = useMutation({
    mutationFn: deletePolicy,
    onError: (error) => {
      ToastError(error.message);
    },
    onSuccess: (data) => {
      ToastSuccess(data);
      queryClient.invalidateQueries(["getAllClients"]);
    },
  });

  const validateForm = (values) => {
    const errors = {};
    if (!values.numeroPoliza) errors.numeroPoliza = "Este campo es obligatorio.";
    if (!values.tipoPolizaDescripcion) errors.tipoPolizaDescripcion = "Este campo es obligatorio.";
    if (!values.coberturaDescripcion) errors.coberturaDescripcion = "Este campo es obligatorio.";
    if (!values.estadoPolizaDescripcion) errors.estadoPolizaDescripcion = "Este campo es obligatorio.";
    if (!values.fechaVencimiento) errors.fechaVencimiento = "Este campo es obligatorio.";
    if (!values.fechaEmision) errors.fechaEmision = "Este campo es obligatorio.";
    if (!values.prima) errors.prima = "Este campo es obligatorio.";
    if (!values.periodo) errors.periodo = "Este campo es obligatorio.";
    if (!values.fechaInclusion) errors.fechaInclusion = "Este campo es obligatorio.";
    if (!values.aseguradora) errors.aseguradora = "Este campo es obligatorio.";
    if (!values.cedulaAsegurado) errors.cedulaAsegurado = "Este campo es obligatorio.";
    return errors;
  };


  const handleSave = async ({ values, table }) => {
    const errors = validateForm(values);
    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
      return; 
    }
    insertMutate(values);
    table.setCreatingRow(null);
  };

  const handleUpdate = async ({ values, table, row}) => {
    const id = row.original.idPoliza;
    updateMutate({id, values});
    table.setEditingRow(null);
  };

  const handleDelete = (row) => {
    SweetAlertEliminar(
      `¿Estás seguro que deseas eliminar esta póliza  ${row.numeroPoliza}?`,
      () => {
        mutate(row.idPoliza);
      }
    );
  };

  const columns = columnsPolicys(validationErrors, setValidationErrors);
  const { userInfo } = useUserContext();
  return (
    <>
      {isLoading && <Spinner open={true} />}
      <h1 className="text-2xl md:text-3xl text-gray-500 dark:text-orange-50 font-bold">
        Pólizas
      </h1>
      <div className="mt-5">
        <CustomTable
          columns={columns}
          title={"una póliza"}
          data={data || []}
          handleSave={handleSave}
          handleEdit={handleUpdate}
          handleDelete={handleDelete} 
          role={userInfo.rol}
        />
      </div>
    </>
  );
}
