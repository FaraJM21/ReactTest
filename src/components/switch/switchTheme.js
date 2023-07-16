import { Switch } from "antd";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { changetheme } from "../../redux/dataReducer";
import './style.scss'

const SwitchTheme = () => {
  const dispatch = useDispatch();
  const [theme, setTheme] = useState(
    localStorage.getItem("themeChange")
      ? JSON.parse(localStorage.getItem("themeChange") || "true")
      : false
  );

  const onChange = (theme) => {
    setTheme(!theme);
    localStorage.setItem("themeChange", JSON.stringify(theme));
    dispatch(changetheme(theme ? "dark" : "light"));
  };

  return <Switch onChange={onChange} defaultChecked={theme} />;
};

export default SwitchTheme;
