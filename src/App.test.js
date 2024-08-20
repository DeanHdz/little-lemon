import { render, fireEvent, screen } from '@testing-library/react';
import BookingForm from './components/BookingForm/BookingForm';


//MOSTRAR ERRORES CUANDO SE ENVÍA EL FORMULARIO SIN DATOS
test('muestra errores cuando se envía el formulario sin datos', () => {
  render(<BookingForm availableTimes={['18:00', '19:00']} updateTimes={() => { }} />);

  // Dispara el evento de submit
  fireEvent.click(screen.getByText('Reservar Mesa'));

  // Verificar errores
  expect(screen.getByText('El nombre es obligatorio.')).toBeInTheDocument();
  expect(screen.getByText('El apellido es obligatorio.')).toBeInTheDocument();
  expect(screen.getByText('El correo electrónico es obligatorio.')).toBeInTheDocument();
  expect(screen.getByText('El número de teléfono es obligatorio.')).toBeInTheDocument();
  expect(screen.getByText('La fecha es obligatoria.')).toBeInTheDocument();
  expect(screen.getByText('Por favor selecciona una preferencia de mesa.')).toBeInTheDocument();
});



//RELLENAR FORMULARIO CON DATOS VÁLIDOS
test('no muestra errores cuando el formulario es válido', () => {
  render(<BookingForm availableTimes={['18:00', '19:00']} updateTimes={() => {}} />);

  // Llenar el formulario con datos válidos
  fireEvent.change(screen.getByPlaceholderText('Nombre'), { target: { value: 'Juan' } });
  fireEvent.change(screen.getByPlaceholderText('Apellidos'), { target: { value: 'Pérez' } });
  fireEvent.change(screen.getByPlaceholderText('Correo electrónico'), { target: { value: 'juan@example.com' } });
  fireEvent.change(screen.getByPlaceholderText('(xxx)-xxx-xxxx'), { target: { value: '444-456-7890' } });
  fireEvent.change(screen.getByLabelText('Número de invitados'), { target: { value: '2' } });
  fireEvent.change(screen.getByLabelText('Seleccionar Fecha'), { target: { value: '2024-08-20' } });
  fireEvent.change(screen.getByLabelText('Seleccionar Hora'), { target: { value: '17:00' } });
  fireEvent.change(screen.getByLabelText('Mesa interior o exterior'), { target: { value: 'Interior' } });

  // Dispara el evento de submit
  fireEvent.click(screen.getByText('Reservar Mesa'));

  // Verificar que no hay errores
  expect(screen.queryByText('El nombre es obligatorio.')).not.toBeInTheDocument();
  expect(screen.queryByText('El apellido es obligatorio.')).not.toBeInTheDocument();
  expect(screen.queryByText('El correo electrónico es obligatorio.')).not.toBeInTheDocument();
  expect(screen.queryByText('El número de teléfono es obligatorio.')).not.toBeInTheDocument();
  expect(screen.queryByText('La fecha es obligatoria.')).not.toBeInTheDocument();
  expect(screen.queryByText('Por favor selecciona una preferencia de mesa.')).not.toBeInTheDocument();
});