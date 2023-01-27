# Prueba tecnica

- Crear ruta nueva por GET /movies
- Implementar busqueda de pelicula por `name` (opcional) a traves de los <i>query parameters</i>
	- Ten en cuenta de que el nombre puede estar incompleto y no diferencia entre mayusculas y minusculas
- Filtrar el array de `movies` por los <i>query parameters</i> opcionales `year`, `genre`
- Limitar la cantidad de elementos devueltos dependiendo del <i>query parameter</i> `size`

## Ejemplo de funcionamiento

- URL: http://localhost:3000/movies?name=Damsel
- Response:

```json
[
	{
		"title": "Damsel",
		"year": 2018,
		"cast": ["Robert Pattinson", "Mia Wasikowska"],
		"genres": ["Comedy", "Drama"]
	}
]
```

- URL: http://localhost:3000/movies?year=1900&genre=comedy&size=1
- Response:

```json
[{ "title": "Trouble in Hogan's Alley", "year": 1900, "cast": [], "genres": ["Comedy"] }]
```
