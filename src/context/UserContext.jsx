import { createContext, useState, useContext, useEffect } from "react";
import useCrypto from "../hooks/useCrypto";

// 1. Crea el contexto
const UserContext = createContext()

// 2. Provee acceso al contexto 
export function UserProvider ({ children })  {
    // Importa la función de cifrado
    const { encryptData, decryptData } = useCrypto();

    // Obtiene el usuario desde la sesión
    const [userInfo, setUserInfo] = useState(() => {
        const storedUserInfo = sessionStorage.getItem('user');
        return storedUserInfo ? decryptData(storedUserInfo) : { name: '', rol: '', email: '' };
    });

    // Guarda el usuario en la sesión
    useEffect(() => {
        sessionStorage.setItem('user', encryptData(userInfo));
    }, [userInfo, encryptData]);

    // Función para actualizar el rol del usuario
    const updateUserRol = (newRole) => {
        setUserInfo((prevUserInfo) => ({ ...prevUserInfo, rol: newRole }));
    }

    return <UserContext.Provider value={{userInfo, setUserInfo, updateUserRol}}> {children} </UserContext.Provider>;
}

// 3. Usa el contexto
export function useUserContext () {
    return useContext(UserContext)
}
