export interface UsuarioLoginResponse{
    id_usuario: number,
    username: string,
    nombre: string,
    telefono: string,
    ap_paterno: string,
    ap_materno: string,
    dni: string
    estado: boolean | null,
    success: true,
        
}