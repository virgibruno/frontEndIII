import Mascota from "./Mascota/Mascota";

const mascotas = [
  {
    nombre : "maia",
    edad : 9,
    sexo : 'hembra',
    raza : 'boxer',
    tamanio : 'mediano'
  },
  {
    nombre : "blas",
    edad : 5,
    sexo : 'macho',
    raza : 'boxer',
    tamanio : 'grande'
  },
  {
    nombre : "nala",
    edad : 3,
    sexo : 'hembra',
    raza : 'caniche',
    tamanio : 'chico'
  },
  {
    nombre : "negro",
    edad : 7,
    sexo : 'macho',
    raza : 'delmon',
    tamanio : 'grande'
  },
  {
    nombre : "rocco",
    edad : 6,
    sexo : 'macho',
    raza : 'cruza',
    tamanio : 'mediano'
  }
]

function App() {
  let lista = mascotas.map(mascota => 
    <Mascota 
        nombre={mascota.nombre}
        sexo={mascota.sexo}
        edad={mascota.edad}
        tamanio={mascota.tamanio}
    />
  )

  return (
    <div className="App">
      {lista}
    </div>
  );
}

export default App;
