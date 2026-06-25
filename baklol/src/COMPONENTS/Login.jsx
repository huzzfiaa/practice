import React, { useState, useMemo } from "react";
import { debounce } from "./costomehooks.js";

const Login = () => {
  const [data, setdata] = useState({
    name: "",
  });

  // normal input handler (instant update version optional)
  const handleinput = (value) => {
    setdata((prev) => ({
      ...prev,
      name: value,
    }));
  };

  // debounce wraps state update (delayed UI update)
  const debouncedInput = useMemo(() => {
    return debounce(handleinput, 2000);
  }, []);

  return (
    <div>
      <input
        onChange={(e) => debouncedInput(e.target.value)}
        name="name"
        type="text"
        value={data.name}
        placeholder="enter name..."
      />

      <h3>{data.name}</h3>
    </div>
  );
};

export default Login;