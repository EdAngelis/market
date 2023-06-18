import { Document, Schema, model } from "mongoose";

interface IProducts extends Document {
  cod: string;
  name: string;
  unit: string;
  badge: string;
  price: number;
  characteristic: string;
  description: string;
  image: string;
  category: string;
  createdAt: Date;
  updatedAt: Date;
}

const schema = new Schema({
  cod: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  unit: { type: String, required: true },
  badge: { type: String },
  price: { type: Number, required: true },
  characteristic: { type: String },
  description: { type: String },
  image: { type: String },
  category: { type: String, required: true },
});

export default model<IProducts>("Products", schema);
