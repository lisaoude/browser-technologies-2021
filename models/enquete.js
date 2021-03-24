const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const enqueteSchema = new Schema({
  naam: {
    type: String,
    required: true
  },
  studentnummer: {
    type: String,
    required: true
  },
  WAFSdocent: {
    type: String,
    required: true
  },
  WAFSweken14: {
    type: String,
  },
  WAFSweken59: {
    type: String,
  },
  WAFSweken1014: {
    type: String,
  },
  WAFSmoeilijk: {
    type: String,
    required: true
  },
  WAFSuitleg: {
    type: String,
    required: true
  },
  WAFSsnappen: {
    type: String,
    required: true
  },
  WAFScijfer: {
    type: String,
    required: true
  },


  CSSttRdocent: {
    type: String,
    required: true
  },
  CSSttRweken14: {
    type: String,
  },
  CSSttRweken59: {
    type: String,
  },
  CSSttRweken1014: {
    type: String,
  },
  CSSttRmoeilijk: {
    type: String,
    required: true
  },
  CSSttRuitleg: {
    type: String,
    required: true
  },
  CSSttRsnappen: {
    type: String,
    required: true
  },
  CSSttRcijfer: {
    type: String,
    required: true
  },


  PWAdocent: {
    type: String,
    required: true
  },
  PWAweken14: {
    type: String,
  },
  PWAweken59: {
    type: String,
  },
  PWAweken1014: {
    type: String,
  },
  PWAmoeilijk: {
    type: String,
    required: true
  },
  PWAuitleg: {
    type: String,
    required: true
  },
  PWAsnappen: {
    type: String,
    required: true
  },
  PWAcijfer: {
    type: String,
    required: true
  },


  BTdocent: {
    type: String,
    required: true
  },
  BTweken14: {
    type: String,
  },
  BTweken59: {
    type: String,
  },
  BTweken1014: {
    type: String,
  },
  BTmoeilijk: {
    type: String,
    required: true
  },
  BTuitleg: {
    type: String,
    required: true
  },
  BTsnappen: {
    type: String,
    required: true
  },
  BTcijfer: {
    type: String,
    required: true
  },


  RTWdocent: {
    type: String,
    required: true
  },
  RTWweken14: {
    type: String,
  },
  RTWweken59: {
    type: String,
  },
  RTWweken1014: {
    type: String,
  },
  RTWmoeilijk: {
    type: String,
    required: true
  },
  RTWuitleg: {
    type: String,
    required: true
  },
  RTWsnappen: {
    type: String,
    required: true
  },
  RTWcijfer: {
    type: String,
    required: true
  },


  HCDdocent: {
    type: String,
    required: true
  },
  HCDweken14: {
    type: String,
  },
  HCDweken59: {
    type: String,
  },
  HCDweken1014: {
    type: String,
  },
  HCDmoeilijk: {
    type: String,
    required: true
  },
  HCDuitleg: {
    type: String,
    required: true
  },
  HCDsnappen: {
    type: String,
    required: true
  },
  HCDcijfer: {
    type: String,
    required: true
  }
}, { timestamps: true });


const Enquete = mongoose.model('Enquete', enqueteSchema);

module.exports = Enquete;