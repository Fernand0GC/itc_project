function DatosPersonales(props) {
  return (
    <div>
      <h1>Datos Personales</h1>
      <p>Nombre: {props.nombre}</p>
      <p>Edad: {props.edad}</p>
      <p>Genero: {props.genero}</p>
    </div>
  );
}
export default DatosPersonales;
