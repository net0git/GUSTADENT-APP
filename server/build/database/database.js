"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.pool = void 0;
const pg_1 = require("pg");
const key_1 = __importDefault(require("../database/key"));
// Creamos el pool de conexión usando solo una base de datos
const pool = new pg_1.Pool(key_1.default.databaseUserParameters);
exports.pool = pool;
// Función para verificar la conexión
const testConnection = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const client = yield pool.connect();
        console.log('✅ Conexión exitosa a la base de datos');
        client.release();
    }
    catch (error) {
        console.error('❌ Error en la conexión a la base de datos:', error);
    }
});
// Ejecutamos la prueba de conexión
testConnection();
