//Components
import Container from "../../components/form/Container";
import InputForm from "../../components/form/InputForm";
import LinkForm from "../../components/form/LinkForm";
import InputFormPassword from "../../components/form/InputFormPassword";
import Spinner from "../../components/Spinner";

// Libraries
import { useFormik } from "formik";
import * as Yup from "yup";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

//Assets
import * as Exp from "../../assets/js/RegularExpressions"
import { ToastSuccess, ToastError } from "../../assets/js/Toastify";

//API
import { login } from "../../service/AuthAPI";

//Context
import { useUserContext } from "../../context/UserContext.jsx";


export default function Login() {

  const { setUserInfo } = useUserContext();

  const navigate = useNavigate();

  const { mutate, isPending } = useMutation({
    mutationFn: login,
    onError: (error) => {
      ToastError(error.message);
    },
    onSuccess: (data) => {
      ToastSuccess(data.message);
      setUserInfo({ name: data.nombre, rol: data.rol, email: data.email});
      sessionStorage.setItem('token', data.token);
      navigate("/policy");
    },
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
      .email("El email no es válido")
      .required("El email es requerido")
      .matches(Exp.emailRegex, "El email no es válido"),
      password: Yup.string()
      .min(8, "La contraseña debe tener al menos 8 caracteres")
      .max(16, "La contraseña debe tener al menos 16 caracteres")
      .required("La contraseña es requerida")
      .matches(Exp.passwordRegex, "La contraseña debe tener al menos una mayúscula, una minúscula y un número"),
    }),
    onSubmit: (values) => {
      //Estructura los datos
      const formData = {
        Email: values.email,
        Password: values.password
      }
      setUserInfo({ name: '', rol: '', email: values.email });
      mutate(formData);
    }
  })


  return (  
    <Container text={"¡Bienvenido/a!"}>
      {isPending && <Spinner open={true} />} 
      <form onSubmit={formik.handleSubmit}>
        <div className="mb-4">
          <InputForm
            fieldType={"email"}
            fieldName={"email"}
            placeholder={"example@gmail.com"}
            labelText={"Correo electrónico"}
            formik={formik}
          />
        </div>
        <div className="mb-4">
          <InputFormPassword
            fieldType={"password"}
            fieldName={"password"}
            placeholder={"Passw@rd"}
            labelText={"Contraseña"}
            formik={formik}
          />
        </div>
        <div className="mb-4">
          <button
            type="submit"
            className="w-full bg-orange-50 text-white py-3 rounded-full font-semibold"
            disabled={isPending} 
          >
            Iniciar sesión
          </button>
        </div>
      </form>
      <LinkForm
        redirect={"/create_account"}
        text={"¡Crear una cuenta!"}
        className={"mt-2"}
      />
    </Container>
  );
  
}
