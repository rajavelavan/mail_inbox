import mongoose, { Document, Schema } from 'mongoose';

export interface EmailData extends Document {
  id: number;
  fromName: string;
  fromEmail: string;
  toName: string;
  toEmail: string;
  cc?: string | null;
  bcc?: string | null;
  threadId: number;
  messageId: string;
  inReplyTo?: string;
  references?: string;
  subject: string;
  body: string;
  isRead: boolean;
  folder: string;
  uid: number;
  sentAt: Date;
  archivedAt?: Date | null;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date | null;
}

const EmailSchema: Schema<EmailData> = new Schema({
  id: { type: Number, required: true },
  fromName: { type: String, required: true },
  fromEmail: { type: String, required: true },
  toName: { type: String, default: "" },
  toEmail: { type: String, required: true },
  cc: { type: String, default: null },
  bcc: { type: String, default: null },
  threadId: { type: Number },
  messageId: { type: String },
  inReplyTo: { type: String },
  references: { type: String },
  subject: { type: String, required: true },
  body: { type: String, required: true },
  isRead: { type: Boolean },
  folder: { type: String },
  uid: { type: Number },
  sentAt: { type: Date },
  archivedAt: { type: Date },
  createdAt: { type: Date },
  updatedAt: { type: Date },
  deletedAt: { type: Date, default: null },
});

export default mongoose.models.Email || mongoose.model<EmailData>('Email', EmailSchema);
