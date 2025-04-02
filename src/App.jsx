import './App.css';
import RegistrationForm from './components/RegistrationForm';
import FormikForm from './components/FormikForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Form Handling Comparison</h1>
      </header>

      <div className="forms-container">
        <section className="form-section">
          <h2>Controlled Component Form</h2>
          <RegistrationForm />
        </section>

        <section className="form-section">
          <h2>Formik Form</h2>
          <FormikForm />
        </section>
      </div>
    </div>
  );
}

export default App;