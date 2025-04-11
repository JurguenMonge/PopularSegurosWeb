import { isAxiosError } from "axios";
//Obtiene la URL de la API
import { apiServiceClient } from "../lib/axios";

//Obtener todos los clientes
export async function getAll() {
  try {
    const { data } = await apiServiceClient.get("Cliente");
    return data;
  } catch (error) {
    throw new Error("Ocurrió un error al obtener todos los clientes");
  }
}
//Insertar un cliente
export async function insertClient(formData) {
  try {
    const { data } = await apiServiceClient.post("Cliente", formData);
    return data;
  } catch (error) {
    throw new Error(error.response.data);
  }
}
//Eliminar un cliente
export async function deleteClient(id) {
  try {
    const { data } = await apiServiceClient.delete(`Cliente/${id}`);
    return data;
  } catch (error) {
    throw new Error("Ocurrió al eliminar el cliente");
  }
}
//Actualizar un cliente
export async function updateClient({id, values}) {
  try {
    const { data } = await apiServiceClient.put(`Cliente/${id}`, values);
    return data;
  } catch (error) {
    throw new Error(error.response.data);
  }
}