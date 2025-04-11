import { isAxiosError } from "axios";
//Obtiene la URL de la API
import { apiServicePolicy } from "../lib/axios";

//Obtener todas las polizas
export async function getAll() {
  try {
    const { data } = await apiServicePolicy.get("Policy");
    return data;
  } catch (error) {
    throw new Error("Ocurrió un al obtener todas las pólizas");
  }
}
//Insertar una poliza
export async function insertPolicy(formData) {
  try {
    const { data } = await apiServicePolicy.post("Policy", formData);
    return data;
  } catch (error) {
    throw new Error(error.response.data);
  }
}
//Eliminar una poliza
export async function deletePolicy(id) {
  try {
    const { data } = await apiServicePolicy.delete(`Policy/${id}`);
    return data;
  } catch (error) {
    throw new Error("Ocurrió un error al eliminar la póliza, verifica que exista");
  }
}
//Actualizar una poliza
export async function updatePolicy({id, values}) {
  try {
    const { data } = await apiServicePolicy.put(`Policy/${id}`, values);
    return data;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error("Ocurrió un error al actualizar la póliza, verifica los campos y que las relaciones existan");
    }
  }
}

export async function getAllCoverage() {
    try {
      const { data } = await apiServicePolicy.get("Coverage");
      return data;
    } catch (error) {
      if (isAxiosError(error) && error.response) {
        throw new Error(error.response.data);
      }
    }
}

export async function getAllStatePolicy() {
    try {
      const { data } = await apiServicePolicy.get("StatePolicy");
      return data;
    } catch (error) {
      if (isAxiosError(error) && error.response) {
        throw new Error(error.response.data);
      }
    }
}

export async function getAllTypePolicy() {
    try {
      const { data } = await apiServicePolicy.get("TypePolicy");
      return data;
    } catch (error) {
      if (isAxiosError(error) && error.response) {
        throw new Error(error.response.data);
      }
    }
}