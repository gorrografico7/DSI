# DSI
## Base de datos
```sql
create database DSI;
Go

use DSI;
Go

create table usuario(
	documento int not null,
	nombre nvarchar not null,
	apellido nvarchar not null,
	contrasena nvarchar not null,
	telefono nvarchar not null,
	email nvarchar not null,

	primary key(documento)
);
GO

create table tipoCredenciales(
	id int identity(1,1),
	tipo nvarchar not null,

	primary key(id)
);
GO

create table credenciales(
	usuario int not null,
	tipoCredenciales int not null,
	
	CONSTRAINT fk_ususario FOREIGN KEY (usuario)
    REFERENCES usuario(documento),

	CONSTRAINT fk_tipoCredenciales FOREIGN KEY (tipoCredenciales)
    REFERENCES tipoCredenciales(id)
);
GO

create table aerolinea(
	nit int not null,
	nombre nvarchar not null,

	primary key(nit)
);
GO

create table destinos(
	id int identity(1,1),
	nombre nvarchar not null,
	aerolinea int not null,
	precio money not null,

	primary key(id),
	CONSTRAINT fk_aerolinea_destinos FOREIGN KEY (aerolinea)
    REFERENCES aerolinea(nit),
);
GO

create table hospedaje(
	nit int not null,
	nombre nvarchar not null,
	precio money not null,

	primary key(nit)
);
GO

create table viaje(
	id int identity(1,1),
	salida date not null,
	destino int not null,
	hospedaje int not null,
	fecha date not null,
	usuario int not null,

	primary key(id),

	CONSTRAINT fk_destinos_viaje FOREIGN KEY (destino)
    REFERENCES destinos(id),

	CONSTRAINT fk_destinos_hospedaje FOREIGN KEY (hospedaje)
    REFERENCES hospedaje(nit),

	CONSTRAINT fk_usuario_viaje FOREIGN KEY (usuario)
    REFERENCES usuario(documento)
);
GO

create table actividades(
	id int identity(1,1),
	nombre nvarchar not null,
	fecha date not null,
	restricciones nvarchar null,
	cupos int not null,
	precio money not null,

	primary key(id),
);
GO

create table itinerario(
	id int identity(1, 1),
	actividades int not null,
	usuario int not null,
	precio money not null,

	primary key(id),

	CONSTRAINT fk_actividades_itinerario FOREIGN KEY (actividades)
    REFERENCES actividades(id),

	CONSTRAINT fk_usuario_itinerario FOREIGN KEY (usuario)
    REFERENCES usuario(documento)
);
GO

create table paquetes(
	id int identity(1,1),
	itinerario int not null,
	viaje int not null,

	primary key(id),

	CONSTRAINT fk_paquetes_itinerario FOREIGN KEY (itinerario)
    REFERENCES itinerario(id),

	CONSTRAINT fk_paquetes_viaje FOREIGN KEY (viaje)
    REFERENCES viaje(id)
);
GO

create table facturas(
	id int identity(1, 1),
	precio money not null,
	estado tinyint not null default 0,
	paquete int not null,

	primary key(id),

	CONSTRAINT fk_facturas_paquetes FOREIGN KEY (paquete)
    REFERENCES paquetes(id)
);
GO

create table pqrs(
	id int identity(1, 1),
	usuario int not null,
	descripcion text not null,
	estado tinyint not null default 0,
	Respuesta text null,

	primary key (id),

	constraint fk_pqrs_usuario foreign key(usuario)
	references usuario(documento)
);

```
