import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.CONNECTION_STRING}/${process.env.DB_NAME}`)
        console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("MONGODB connection FAILED ", error);
        process.exit(1)
    }
}
const todoSchema = mongoose.Schema({
    title : {
        type : String,
        // required : true
    },
    description : {
        type : String,
        // required : true
    },
    isComplete : {
        type : Boolean,
        // required : true 
    }
})

const Todo = mongoose.model('Todo', todoSchema)

export {Todo, connectDB};