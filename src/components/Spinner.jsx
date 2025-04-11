import Logo from "../assets/images/logo.png";
import { Backdrop } from "@mui/material";

export default function Spinner({ open }) {
  return (
    <div>
      <Backdrop
        open={open}
        sx={(theme) => ({ color: "#fff", zIndex: theme.zIndex.drawer + 1 })}
      >
        <div className="flex flex-col justify-center items-center">
          <img src={Logo} alt="spinner" className="animate-rotate-y w-44" />
        </div>
      </Backdrop>
    </div>
  );
}
