import { Pool } from 'pg';
import key from '../database/key';

// Creamos el pool de conexión usando solo una base de datos
const pool = new Pool(key.databaseUserParameters);

// Función para verificar la conexión
const testConnection = async () => {
    try {
        const client = await pool.connect();
        console.log('✅ Conexión exitosa a la base de datos');
        client.release();
    } catch (error) {
        console.error('❌ Error en la conexión a la base de datos:', error);
    }
};

// Ejecutamos la prueba de conexión
testConnection();

// Exportamos el pool para usarlo en otras partes del proyecto
export { pool };