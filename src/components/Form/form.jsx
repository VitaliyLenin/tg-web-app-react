import React, { useEffect, useState } from "react";

import "./form.css";
import { useTelegram } from "../../hooks/useTelegram";

const Form = () => {
  const [country, setCountry] = useState("");
  const [street, setStreet] = useState("");
  const [subject, setSubject] = useState("physical");

  const { tg } = useTelegram();

  useEffect(() => {
    tg.MainButton.setParams({
      text: "Відправити дані",
    });
  }, []);

  useEffect(() => {
    if (!street || !country) {
      tg.MainButton.hide();
    } else {
      tg.MainButton.show();
    }
  });

  const onChangeCountry = (e) => {
    setCountry(e.target.value);
  };

  const onChangeStreet = (e) => {
    setStreet(e.target.value);
  };

  const onChangeSubject = (e) => {
    setSubject(e.target.value);
  };

  return (
    <div className={"form"}>
      <h3>Введіть Ваші дані</h3>
      <input
        className={"input"}
        type="text"
        placeholder="Країна"
        value={country}
        onChange={onChangeCountry}
      />
      <input
        className={"input"}
        type="text"
        placeholder="Вулиця"
        value={street}
        onChange={onChangeStreet}
      />

      <select className={"select"} value={subject} onChange={onChangeSubject}>
        <option value={"physical"}> Фіз. обличчя</option>
        <option value={"legal"}>Юр. обличчя</option>
      </select>
    </div>
  );
};

export default Form;
