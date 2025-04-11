import { Link } from "react-router-dom";

export default function LinkForm({ redirect, text, className }) {
  return (
    <div className={`text-center ${className}`}>
      <Link to={redirect} className="text-orange-50 hover:underline">
        {text}
      </Link>
    </div>
  );
}
