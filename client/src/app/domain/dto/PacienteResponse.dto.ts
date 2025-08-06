export interface PacienteListResponse {
    id_paciente: number,
    nombre: string,
    telefono: string,
    ap_paterno: string,
    ap_materno: string,
    dni: string
}

export interface CrearPacienteResponse {
  message: string;
}