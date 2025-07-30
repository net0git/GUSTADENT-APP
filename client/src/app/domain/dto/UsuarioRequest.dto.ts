export interface UsuarioRequest{
    username: string,
    password?: string,
    nombre: string,
    telefono: string,
    ap_paterno: string,
    ap_materno: string,
    dni: string
    estado: boolean | null,
}