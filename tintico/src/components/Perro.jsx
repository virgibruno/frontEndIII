const Perro = props => {
    return (
        <>
            <h3>Nombre: {props.datos.nombre}</h3>
            <ul>
                <li>Edad: {props.datos.edad}</li>
                <li>Sexo: {props.datos.sexo}</li>
                <li>Raza: {props.datos.raza}</li>
                <li>Tamaño: {props.datos.tamanio}</li>
            </ul>
        </>
    )
}

export default Perro;