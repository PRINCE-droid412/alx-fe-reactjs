import { useState } from 'react'
import './App.css'
import RegistrationForm from './components/RegistrationForm';
import FormikForm from './components/formikForm';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div>
      <h1>Controlled Components Form</h1>
      <RegistrationForm />
      <h1>Formik Registration Form</h1>
      <FormikForm />
    </div>
    </>
  )
}

export default App
