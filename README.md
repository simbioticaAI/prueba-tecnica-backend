# Prueba tecnica

- Crear ruta nueva por GET /movies
- Tomar array de "movies" y filtrarlo por los parametros opcionales 'year' y 'genre' recibidos por la url
- Limitar la cantidad de elementos devueltos dependiendo del parametro 'size'

## Ejemplo de funcionamiento

- URL: http://localhost:3000/?year=2003&genre=Drama&size=2

- Response: [
  { title: 'Pelicula', year: 2003, cast: [], genres: ['Drama'] },
	{ title: "Pelicula", year: 2003, cast: [], genres: ['Drama'] }
]