import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-tailwind/react";

export const StartPage = () => {
  const [isLinkActive, setIsLinkActive] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLinkActive(true);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <Link to="/home/service1/ppGet" className="my-auto">
      <Button
        size="lg"
        variant="outlined"
        color="blue-gray"
        className="flex items-center gap-3 px-10 py-5"
      >
        Get start
      </Button>
    </Link>
  );
};
