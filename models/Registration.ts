import mongoose from "mongoose"

const RegistrationSchema = new mongoose.Schema({

  fullName: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },

  school: {
    type: String,
    required: true,
  },

  role: {
    type: String,
    required: true,
  },

  hasTeam: {
    type: String,
    required: true,
  },

}, {
  timestamps: true,
})

export default mongoose.models.Registration ||
mongoose.model(
  "Registration",
  RegistrationSchema
)