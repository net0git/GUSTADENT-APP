-- Tabla: Pacientes
CREATE TABLE Pacientes (
    id_paciente SERIAL PRIMARY KEY,
    nombre VARCHAR(20) NOT NULL,
    ap_paterno VARCHAR(20),
    ap_materno VARCHAR(20),
    dni VARCHAR(8) UNIQUE NOT NULL,
    telefono VARCHAR(9),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabla: Usuarios
CREATE TABLE Usuarios (
    id_usuario SERIAL PRIMARY KEY,
    username VARCHAR(20) UNIQUE NOT NULL,
    password VARCHAR(60) NOT NULL,
    nombre VARCHAR(20) NOT NULL,
    ap_paterno VARCHAR(20),
    ap_materno VARCHAR(20),
    telefono VARCHAR(9),
    dni VARCHAR(8),
    estado boolean
);

-- Tabla: Locacion
CREATE TABLE locacion (
    id_locacion SERIAL PRIMARY KEY,
    locacion VARCHAR(25) NOT NULL,
	direccion VARCHAR(50) 
);

-- Tabla: Atencion
CREATE TABLE atencion (
    id_atencion SERIAL PRIMARY KEY,
    id_paciente INT NOT NULL,
    id_usuario INT NOT NULL,
    estado VARCHAR(10), -- programada, cancelada, realizada
    descripcion TEXT,
    sesion TEXT,
    costo DECIMAL(10, 2),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_paciente FOREIGN KEY (id_paciente) REFERENCES Pacientes(id_paciente) ON DELETE CASCADE,
    CONSTRAINT fk_usuario FOREIGN KEY (id_usuario) REFERENCES Usuarios(id_usuario) ON DELETE SET NULL
);