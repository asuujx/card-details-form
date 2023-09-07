interface FormNameProps {
  formName: string;
  setFormName: React.Dispatch<React.SetStateAction<string>>;
}

function FormName({ formName, setFormName }: FormNameProps) {
  return (
    <div>
      <p className="uppercase text-[#220930] tracking-widest font-bold mb-2 text-sm">
        Cardholder Name
      </p>
      <input
        type="text"
        placeholder="e.g. Jane Appleseed"
        value={formName}
        name="name"
        id="name"
        className="border rounded-lg w-full py-2 px-4 placeholder-[hsl(279,6%,55%)]"
        onChange={(e) => setFormName(e.target.value)}
      />
    </div>
  );
}

export default FormName;
