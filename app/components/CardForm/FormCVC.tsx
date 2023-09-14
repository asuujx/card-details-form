import { useState } from "react";

interface FormCVCProps {
  formCVC: string;
  setFormCVC: React.Dispatch<React.SetStateAction<string>>;
}

function FormCVC({ formCVC, setFormCVC }: FormCVCProps) {
  const [error, setError] = useState("");
  const handleInputchange = (e: any) => {
    const inputCVC = e.target.value;

    if (/^[0-9]*$/.test(inputCVC)) {
      setFormCVC(inputCVC);
      setError("");
    } else {
      setError("Wrong format, numbers only");
    }
  };
  return (
    <div className="ml-auto">
      <p className="uppercase text-[#220930] tracking-widest font-bold mb-2 text-sm">
        CVC
      </p>
      <input
        type="text"
        placeholder="e.g. 123"
        value={formCVC}
        name="cvc"
        id="cvc"
        className="border rounded-lg py-2 px-4 placeholder-[hsl(279,6%,55%)] w-full"
        // onChange={(e) => setFormCVC(e.target.value)}
        onChange={handleInputchange}
        minLength={3}
        maxLength={3}
        required
      />
    </div>
  );
}

export default FormCVC;
