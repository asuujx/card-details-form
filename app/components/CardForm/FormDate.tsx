import React, { useState } from "react";

interface FormDateProps {
  formDateMonth: string;
  setFormDateMonth: React.Dispatch<React.SetStateAction<string>>;

  formDateYear: string;
  setFormDateYear: React.Dispatch<React.SetStateAction<string>>;
}

function FormDate({
  formDateMonth,
  setFormDateMonth,
  formDateYear,
  setFormDateYear,
}: FormDateProps) {
  const [error, setError] = useState("");
  const handleMonthInputChange = (e: any) => {
    const inputDate = e.target.value;

    if (/^[0-9]*$/.test(inputDate)) {
      if (inputDate >= 1 && inputDate <= 12) {
        setFormDateMonth(inputDate);
        setError("");
      } else {
        setError("There are only 12 months");
      }
    } else {
      setError("Wrong format, numbers only");
    }
  };

  const handleYearInputChange = (e: any) => {
    const inputDate = e.target.value;

    if (/^[0-9]*$/.test(inputDate)) {
      setFormDateYear(inputDate);
      setError("");
    } else {
      setError("Wrong format, numbers only");
    }
  };

  return (
    <div>
      <p className="uppercase text-[#220930] tracking-widest font-bold mb-2 text-sm">
        Exp. Date (MM/YY)
      </p>
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="MM"
          value={formDateMonth}
          name="date-m"
          id="date-m"
          className="border rounded-lg py-2 px-4 w-20 placeholder-[hsl(279,6%,55%)]"
          // onChange={(e) => setFormDateMonth(e.target.value)}
          onChange={handleMonthInputChange}
          minLength={2}
          maxLength={2}
          required
        />
        <input
          type="text"
          placeholder="YY"
          value={formDateYear}
          name="date-y"
          id="date-y"
          className="border rounded-lg py-2 px-4 w-20 placeholder-[hsl(279,6%,55%)]"
          // onChange={(e) => setFormDateYear(e.target.value)}
          onChange={handleYearInputChange}
          minLength={2}
          maxLength={2}
          required
        />
      </div>
    </div>
  );
}

export default FormDate;
