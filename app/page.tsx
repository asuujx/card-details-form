import CardDetails from './components/CardDetails/CardDetails';
import CardForm from './components/CardForm/CardForm';

export default function Home() {
  return (
    <div className="w-full h-screen text-lg font-medium">
      <CardDetails />
      <CardForm />
    </div>
  );
}
