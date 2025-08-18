const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  role: String,
  company: String,
  location: String,
  salary: Number,
  dateApplied: Date,
  interviewDate: Date,
  resumeLink: String,
  status: {
    type: String,
    enum: ['Applied', 'Interview Scheduled', 'Offer', 'Rejected'],
    default: 'Applied'
  }
}, { timestamps: true });

module.exports = mongoose.model('Application', applicationSchema);
