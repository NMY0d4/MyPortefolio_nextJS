import { Schema, model } from 'mongoose';

const ContactSchema = new Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 50,
  },
  phoneNumber: {
    type: String,
    required: true,
    validate: {
      validator: function (value: string) {
        return /^\d{10}$/.test(value);
      },
      message: 'Invalid phone number',
    },
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Invalid email'],
  },
  subject: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
    minlength: 10,
    maxlength: 500,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

const Contact = model('Contact', ContactSchema);

export default Contact;
