import mongoose, { Document, Model, Schema } from 'mongoose';

interface IEmail extends Document {
  sender: string;
  recipient: string;
  subject: string;
  body: string;
  date: Date;
}

const EmailSchema: Schema = new Schema({
  sender: { type: String, required: true },
  recipient: { type: String, required: true },
  subject: { type: String, required: true },
  body: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

export default (mongoose.models.Email as Model<IEmail>) ||
  mongoose.model<IEmail>('Email', EmailSchema);
