--CREATE DATABASE tareas;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE todos (
    id uuid PRIMARY KEY DEFAULT uuid_generate_v4 (),
    nombre varchar(255) NOT NULL,
    descripcion varchar(255) NOT NULL,
    fechaInicio varchar(255) NOT NULL
);

