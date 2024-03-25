import Navigation from "./components/Navigation";
import PaitentForm from "./components/PatientForm";
export default function Home() {
  return (
    <main>
      <div className="flex min-h-screen flex-col items-center pt-5">
        <PaitentForm />
      </div>
    </main>
  );
}
