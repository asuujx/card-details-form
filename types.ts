export interface FormProps {
  formName: string;
  setFormName: React.Dispatch<React.SetStateAction<string>>;

  formNumber: number;
  setFormNumber: React.Dispatch<React.SetStateAction<number>>;

  formDateMonth: number;
  setFormDateMonth: React.Dispatch<React.SetStateAction<number>>;

  formDateYear: number;
  setFormDateYear: React.Dispatch<React.SetStateAction<number>>;

  formCVC: number;
  setFormCVC: React.Dispatch<React.SetStateAction<number>>;
}