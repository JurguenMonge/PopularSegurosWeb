// Components
import Container from "../../components/form/Container";
import LinkForm from "../../components/form/LinkForm";
import InputForm from "../../components/form/InputForm";
import InputFormPassword from "../../components/form/InputFormPassword";
import Spinner from "../../components/Spinner";

// Libraries
import { useFormik } from "formik";
import * as Yup from "yup";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

// Assets
import * as Exp from "../../assets/js/RegularExpressions";
import { ToastSuccess, ToastError } from "../../assets/js/Toastify";

// API
import { register } from "../../service/AuthAPI";

export default function CreateAccount() {
  const navigate = useNavigate();

  const { mutate, isPending } = useMutation({
    mutationFn: register,
    onError: (error) => {
      ToastError(error.message);
    },
    onSuccess: (data) => {
      ToastSuccess(data);
      navigate("/");
    },
  });

  const formik = useFormik({
    initialValues: {
      nombre: "",
      primerApellido: "",
      segundoApellido: "",
      email: "",
      password: "",
      repetirPassword: "",
    },
    validationSchema: Yup.object({
      nombre: Yup.string()
        .matches(
          Exp.nameRegex,
          "El nombre solo puede contener letras y espacios"
        )
        .min(2, "El nombre debe tener al menos 2 caracteres")
        .required("El nombre es requerido"),
      primerApellido: Yup.string()
        .matches(
          Exp.nameRegex,
          "El primer apellido solo puede contener letras y espacios"
        )
        .min(3, "El primer apellido debe tener al menos 3 caracteres")
        .required("El primer apellido es requerido"),
      segundoApellido: Yup.string()
        .matches(
          Exp.nameRegex,
          "El segundo apellido solo puede contener letras y espacios"
        )
        .min(3, "El segundo apellido debe tener al menos 3 caracteres")
        .required("El segundo apellido es requerido"),
      email: Yup.string()
        .email("El email no es válido")
        .required("El email es requerido")
        .matches(Exp.emailRegex, "El email no es válido"),
      password: Yup.string()
        .min(8, "La contraseña debe tener al menos 8 caracteres")
        .max(16, "La contraseña debe tener al menos 16 caracteres")
        .required("La contraseña es requerida")
        .matches(
          Exp.passwordRegex,
          "La contraseña debe tener al menos una mayúscula, una minúscula y un número"
        ),
      repetirPassword: Yup.string()
        .oneOf([Yup.ref("password")], "Las contraseñas no coinciden")
        .required("La confirmación de contraseña es requerida"),
    }),
    onSubmit: (values) => {
      const formData = {
        email: values.email,
        password: values.password,
        nombre: values.nombre,
        primerApellido: values.primerApellido,
        segundoApellido: values.segundoApellido,
      };
    
      mutate(formData);
    },
    
  });

  return (
    <Container text={"¡Crear una cuenta!"}>
      {isPending && <Spinner open={true} />} 
      <form onSubmit={formik.handleSubmit}> 
        <div className="flex space-x-3 mb-4">
          <div className="flex-1">
            <InputForm
              fieldType={"text"}
              fieldName={"nombre"}
              placeholder={"Nombre"}
              formik={formik}
            />
          </div>
        </div>

        <div className="flex space-x-3 mb-4">
          <div className="flex-1">
            <InputForm
              fieldType={"text"}
              fieldName={"primerApellido"}
              placeholder={"Primer Apellido"}
              formik={formik}
            />
          </div>
          <div className="flex-1">
            <InputForm
              fieldType={"text"}
              fieldName={"segundoApellido"}
              placeholder={"Segundo Apellido"}
              formik={formik}
            />
          </div>
        </div>

        <div className="flex space-x-3 mb-4">
          <div className="flex-1">
            <InputForm
              fieldType={"email"}
              fieldName={"email"}
              placeholder={"Correo electrónico: example@gmail.com"}
              formik={formik}
            />
          </div>
        </div>

        <div className="flex space-x-3 mb-4">
          <div className="flex-1">
            <InputFormPassword
              fieldType={"password"}
              fieldName={"password"}
              placeholder={"Contraseña"}
              formik={formik}
            />
          </div>
          <div className="flex-1">
            <InputFormPassword
              fieldType={"password"}
              fieldName={"repetirPassword"}
              placeholder={"Repetir Contraseña"}
              formik={formik}
            />
          </div>
        </div>

        <div className="mb-4 space-x-3 flex">
          <button
            type="submit"
            className="w-full bg-orange-50 rounded-full text-white p-3 font-semibold"
            disabled={isPending} 
          >
            Registrar Cuenta
          </button>
        </div>
      </form>
      <LinkForm
        redirect={"/"}
        text={"¿Ya tienes una cuenta? ¡Inicia Sesión!"}
      />
    </Container>
  );
}
