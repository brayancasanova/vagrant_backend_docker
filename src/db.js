import mongoose from "mongoose";



const DB_USER = "admin"; // Usuario de MongoDB
const DB_PASSWORD = "password123"; // Contraseña del usuario
const DB_HOST = "mongo"; // O IP del servidor MongoDB
const DB_PORT = "27017"; // Puerto en el que corre MongoDB
const DB_NAME = "valen"; // Nombre de la base de datos

const mongoURI = `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}?authSource=admin`;
export const connectDB = async () => {
    try {
        await mongoose.connect(mongoURI);
        console.log("DB is connected");
        console.log(mongoURI);
    } catch (error) {
        console.log(error);
    }
    
}


