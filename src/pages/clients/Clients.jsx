//Libraries
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
//Components
import Spinner from "../../components/Spinner.jsx";
import CustomTable from "../../components/reactTable/CustomTable.jsx";
import { columnsClient } from "../../components/reactTable/Colums.jsx";

//Context
import { useUserContext } from "../../context/UserContext.jsx";

//API
import { getAll, deleteClient, insertClient, updateClient } from "../../service/ClientAPI.js";

//assets/Utils
import { ToastSuccess, ToastError } from "../../assets/js/Toastify.js";
import { SweetAlertEliminar } from "../../assets/js/sweetAlert.js";

export default function Clients() {
  const queryClient = useQueryClient();
  const [validationErrors, setValidationErrors] = useState({});

  const {mutate: insertMutate} = useMutation({
    mutationFn: insertClient,
    onError: (error) => {
      ToastError(error.message);
    },
    onSuccess: (data) => {
      ToastSuccess(data);
      queryClient.invalidateQueries(["getAllClients"]);
    },
  });

  const {mutate: updateMutate} = useMutation({
    mutationFn: updateClient,
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
    mutationFn: deleteClient,
    onError: () => {
      ToastError("Ocurrió un error al eliminar el cliente");
    },
    onSuccess: () => {
      ToastSuccess("Se ha eliminado el cliente correctamente");
      queryClient.invalidateQueries(["getAllClients"]);
    },
  });

  const handleDelete = (row) => {
    SweetAlertEliminar(
      `Estas seguro que deseas eliminar este cliente con cédula ${row.cedulaAsegurado} llamado ${row.nombre}`,
      () => {
        mutate(row.cedulaAsegurado);
      }
    );
  };

  const handleUpdate = async ({ values, table, row}) => {
    const errors = validateForm(values);
    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
      return; 
    }
    const id = row.original.cedulaAsegurado;
    updateMutate({id, values});
    table.setEditingRow(null);
  };

  const handleSave = async ({ values, table}) => {
    const errors = validateForm(values);
    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
      return; 
    }
    insertMutate(values);
    table.setCreatingRow(null);
  };

  const validateForm = (values) => {
    const errors = {};
    if (!values.cedulaAsegurado) errors.cedulaAsegurado = "Este campo es obligatorio.";
    if (!values.nombre) errors.nombre = "Este campo es obligatorio.";
    if (!values.primerApellido) errors.primerApellido = "Este campo es obligatorio.";
    if (!values.segundoApellido) errors.segundoApellido = "Este campo es obligatorio.";
    if (!values.tipoPersona) errors.tipoPersona = "Este campo es obligatorio.";
    if (!values.fechaNacimiento) errors.fechaNacimiento = "Este campo es obligatorio.";

    return errors;
  };

  const columns = columnsClient(validationErrors, setValidationErrors);
  const { userInfo } = useUserContext();
  
  return (
    <>
      {isLoading && <Spinner open={true} />}
      <h1 className="text-2xl md:text-3xl text-gray-500 dark:text-orange-50  font-bold">
        Clientes
      </h1>
      <div className="mt-5">
        <CustomTable
          columns={columns}
          data={data || []}
          role={userInfo.rol}
          title={"un nuevo cliente"}
          handleDelete={handleDelete}
          handleSave={handleSave}
          handleEdit={handleUpdate}
        />
      </div>
    </>
  );
}
