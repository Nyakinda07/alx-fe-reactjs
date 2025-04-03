import './App.css';
import RegistrationForm from './components/RegistrationForm';
import FormikForm from './components/formikForm'; // Note lowercase filename

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Form Handling Comparison</h1>
        <p>Demonstrating controlled components vs. Formik</p>
      </header>

      <div className="forms-container">
        {/* Controlled Component Form */}
        <section className="form-section">
          <h2>Controlled Component Form</h2>
          <RegistrationForm />
        </section>

        {/* Formik Form */}
        <section className="form-section">
          <h2>Formik Implementation</h2>
          <FormikForm />
        </section>
      </div>
    </div>
  );
}

export default App;