interface FormCVCProps {
  formCVC: string;
  setFormCVC: React.Dispatch<React.SetStateAction<string>>;
}

function FormCVC({ formCVC, setFormCVC }: FormCVCProps) {
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
        onChange={(e) => setFormCVC(e.target.value)}
      />
    </div>
  );
}

export default FormCVC;
