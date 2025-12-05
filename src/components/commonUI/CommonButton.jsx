import { Link } from "react-router";

const CommonButton = ({
  label,
  onClick,
  url,
  adjustments,
  variant = "primary",
}) => {
  const styles = {
    primary:
      "bg-amber-400 text-amber-900 shadow-sm hover:bg-amber-300 hover:shadow-md transition",
    secondary:
      "bg-black text-white shadow-sm hover:bg-black/70 hover:shadow-md transition",
    caution: "bg-red-300 text-red-950 shadow-sm hover:bg-red-300/80 hover:shadow-md hover:text-red-800 transition",
  };

  return (
    <Link
      to={url}
      onClick={onClick}
      className={`p-3 rounded font-semibold ${styles[variant]} ${adjustments}`}
    >
      {label}
    </Link>
  );
};

export default CommonButton;
