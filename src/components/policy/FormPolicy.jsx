import ModalBase from "../modal/ModalBase";
import * as Exp from "../../assets/js/RegularExpressions";
import { ToastSuccess, ToastError } from "../../assets/js/Toastify";
import { useFormik } from "formik";
import * as Yup from "yup";
import InputForm from "../form/InputForm";


export default function FormPolicy({title, isOpen, onClose }   ) {
  const formik = useFormik({
    initialValues: {
      numeroPoliza: "",
      tipoPolizaDescripcion: "",
      coberturaDescripcion: "",
      estadoPolizaDescripcion: "",
      montoAsegurado: "",
      fechaVencimiento: "",
      fechaEmision: "",
      prima: "",
      periodo: "",
      fechaInclusion: "",
      aseguradora: "",
      cedulaAsegurado: "",
      nombre: "",
      primerApellido: "",
      segundoApellido: "",
      tipoPersona: "",
      fechaNacimiento: "",
    },
    validationSchema: Yup.object({
      numeroPoliza: Yup.string()
        .email("El email no es válido")
        .required("El email es requerido")
        .matches(Exp.emailRegex, "El email no es válido"),
      tipoPolizaDescripcion: Yup.string()
        .min(8, "La contraseña debe tener al menos 8 caracteres")
        .max(16, "La contraseña debe tener al menos 16 caracteres")
        .required("La contraseña es requerida")
        .matches(
          Exp.passwordRegex,
          "La contraseña debe tener al menos una mayúscula, una minúscula y un número"
        ),
    }),
    onSubmit: (values) => {
      //Estructura los datos
      const formData = {
        Email: values.email,
        Password: values.password,
      };
      setUserInfo({ name: "", rol: "", email: values.email });
      mutate(formData);
    },
  });

  return (
    <ModalBase title={title} onClose={onClose}>
      <form onSubmit={formik.handleSubmit}>
        <InputForm
          fieldType={"text"}
          fieldName={"numeroPoliza"}
          placeholder={"POL-2341"}
          labelText={"Número Poliza"}
          formik={formik}
        />
      </form>
    </ModalBase>
  );
}
