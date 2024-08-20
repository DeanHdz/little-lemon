import { render, fireEvent, screen } from '@testing-library/react';
import BookingForm from './components/BookingForm/BookingForm';
import App from './App';


//Testeo incluido en Modulo 3 Resumen: "Pruebas Unitarias" del curso
/*test("Adds one", () => {
  // render the App component
  render(<App />);

  // save the heading in a variable
  const heading = screen.getByTestId("currentNumber");

  // save the button in a variable
  const btn = screen.getByTestId("addOne");

  // click the btn
  fireEvent.click(btn);

  // test assumption
  expect(heading).toHaveTextContent("2");
});*/

//Testeo incluido en el Modulo 3 Ejercicio: Agregar pruebas unitarias
test('Renders the BookingForm', () => {
  render(<BookingForm />);
  const headingElement = screen.getByText("Agenda tu mesa");
  expect(headingElement).toBeInTheDocument();
})