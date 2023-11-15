# Prueba Cristian Llorca
Back de prueba proceso selección. ANGULAR 11

Hay aspectos que implementaría en un entorno real, y que aquí al ser una prueba, he decidido obviarlos por falta de tiempo.
Estos aspectos son:
	Uso de Local/Session Storage según aplique para nuevas funciones y mejoras.
	Uso de autenticación con Token JWT con una vista de "login".
	Uso de un filtro de búsqueda con un Pipe, y ordenación de columnas, para la lista obtenida en el "home".
La app es una aplicación sencilla, la cual está compuesta por dos vistas, "home" y "add", las cuales son accesibles desde la cabecera de la aplicación
(tiene un desplegable en la esquina superior derecha), que contiene dos botones de acceso a las mismas.
La vista "home", muestra la tabla de "prices" con los siguientes datos de entrada como ejemplo: appDate: "2023-11-11 21:00:00", productId: 1, brandId: 35455.
La vista "add" añade un nuevo registro a la tabla, y luego redirige a "home" automáticamente.