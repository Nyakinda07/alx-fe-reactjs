import RegistrationForm from './components/RegistrationForm';
import FormikForm from './components/FormikForm';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <h1>Form Handling Comparison</h1>
      
      <div className="forms-grid">
        <div className="form-container">
          <h2>Controlled Component Form</h2>
          <RegistrationForm />
        </div>
        
        <div className="form-container">
          <h2>Formik Form</h2>
          <FormikForm />
        </div>
      </div>
    </div>
  );
}

export default App;