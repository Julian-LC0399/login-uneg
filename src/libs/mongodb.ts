import mongoose from "mongoose";

const {MONGO_URI} = process.env

if (!MONGO_URI) {
    throw new Error("MONGO_URI no esta definido")
}

export const connectDB = async () => {
    try {
         const {connection} = await mongoose.connect(MONGO_URI)
         if (connection.readyState === 1) {
            console.log("Connectado a la base de datos")
            return Promise.resolve(true)
        }
    } catch (error) {
        console.log(error)
        return Promise.reject(false)
    }

}