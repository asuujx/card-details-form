import React from "react";

interface FormDateProps {
  formDateMonth: string;
  setFormDateMonth: React.Dispatch<React.SetStateAction<string>>;

  formDateYear: string;
  setFormDateYear: React.Dispatch<React.SetStateAction<string>>;
}

function FormDate({ formDateMonth, setFormDateMonth, formDateYear, setFormDateYear}: FormDateProps) {
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
          onChange={(e) => setFormDateMonth(e.target.value)}
        />
        <input
          type="text"
          placeholder="YY"
          value={formDateYear}
          name="date-y"
          id="date-y"
          className="border rounded-lg py-2 px-4 w-20 placeholder-[hsl(279,6%,55%)]"
          onChange={(e) => setFormDateYear(e.target.value)}
        />
      </div>
    </div>
  );
}

export default FormDate;
