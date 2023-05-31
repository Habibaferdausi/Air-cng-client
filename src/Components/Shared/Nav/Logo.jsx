import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/">
      <img
        className="hidden md:block"
        src="https://img.freepik.com/premium-vector/air-conditioning-a1_67323-159.jpg?w=740"
        alt="logo"
        width="100"
        height="100"
      />
    </Link>
  );
};

export default Logo;
