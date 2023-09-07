interface FormNumberProps {
  formNumber: string;
  setFormNumber: React.Dispatch<React.SetStateAction<string>>;
}

function FormNumber({ formNumber, setFormNumber }: FormNumberProps) {
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
        onChange={(e) => setFormNumber(e.target.value)}
      />
    </div>
  );
}

export default FormNumber;
