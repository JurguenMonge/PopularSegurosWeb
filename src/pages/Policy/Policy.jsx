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


  const handleSave = async ({ values, table }) => {
    const transformedValues = {
      NumeroPoliza: values.numeroPoliza,
      TipoPolizaDescripcion: values.tipoPolizaDescripcion,
      CoberturaDescripcion: values.coberturaDescripcion,
      EstadoPolizaDescripcion: values.estadoPolizaDescripcion,
      MontoAsegurado: parseFloat(values.montoAsegurado),
      FechaVencimiento: values.fechaVencimiento,
      FechaEmision: values.fechaEmision,
      Prima: parseFloat(values.prima),
      Periodo: values.periodo,
      FechaInclusion: values.fechaInclusion,
      Aseguradora: values.aseguradora,
      CedulaAsegurado: values.cedulaAsegurado,
    };
    insertMutate(transformedValues);
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

  const columns = columnsPolicys(validationErrors, setValidationErrors, false);
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
