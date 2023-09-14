import { useState } from "react";

interface FormNumberProps {
  formNumber: string;
  setFormNumber: React.Dispatch<React.SetStateAction<string>>;
}

function FormNumber({ formNumber, setFormNumber }: FormNumberProps) {
  const [error, setError] = useState("");
  const handleInputChange = (e: any) => {
    const inputNumber = e.target.value.replace(/\s/g, "");

    if (/^[0-9]*$/.test(inputNumber)) {
      let formattedNumber = "";

      for (let i = 0; i < inputNumber.length; i++) {
        if (i > 0 && i % 4 === 0) {
          formattedNumber += " ";
        }
        formattedNumber += inputNumber.charAt(i);
      }

      setFormNumber(formattedNumber);
      setError("");
    } else {
      setError("Wrong format, numbers only");
    }
  };

  return (
    <div>
      <p className="uppercase text-[#220930] tracking-widest font-bold mb-2 text-sm">
        Card Number
      </p>
      <input
        type="text"
        placeholder="e.g. 1234 5678 9123 0000"
        value={formNumber}
        name="number"
        id="number"
        className="border rounded-lg w-full py-2 px-4 placeholder-[hsl(279,6%,55%)]"
        onChange={handleInputChange}
        minLength={19}
        maxLength={19}
        required
      />
    </div>
  );
}

export default FormNumber;
