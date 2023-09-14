"use client";
import { useState } from "react";
import FormCVC from "./FormCVC";
import FormDate from "./FormDate";
import FormName from "./FormName";
import FormNumber from "./FormNumber";

function CardForm() {
  const [formName, setFormName] = useState("");
  const [formNumber, setFormNumber] = useState("");
  const [formDateMonth, setFormDateMonth] = useState("");
  const [formDateYear, setFormDateYear] = useState("");
  const [formCVC, setFormCVC] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault()
    console.log(
      `${formName} + ${formNumber} + ${formDateMonth} + ${formDateYear} + ${formCVC}`
    );

    
  };

  return (
    <div className="max-w-screen px-6 flex flex-col gap-4 mt-28">
      <form onSubmit={handleSubmit}>
        <FormName formName={formName} setFormName={setFormName} />
        <FormNumber formNumber={formNumber} setFormNumber={setFormNumber} />

        <div className="flex">
          <FormDate
            formDateMonth={formDateMonth}
            setFormDateMonth={setFormDateMonth}
            formDateYear={formDateYear}
            setFormDateYear={setFormDateYear}
          />
          <FormCVC formCVC={formCVC} setFormCVC={setFormCVC} />
        </div>

        <button className="w-full bg-[#220930] text-white py-4 mt-5 rounded-lg">
          Confirm
        </button>
      </form>
    </div>
  );
}

export default CardForm;
