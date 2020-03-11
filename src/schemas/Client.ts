import { Schema, model, Document } from 'mongoose'

interface ClientInterface extends Document {
    email?: string,
    phone?: string
}

const ClientSchema = new Schema({
    email: String,
    phone: String
}, {
    timestamps: true
})

export default model<ClientInterface>('Client', ClientSchema)
