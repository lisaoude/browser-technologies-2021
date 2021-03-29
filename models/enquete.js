const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const enqueteSchema = new Schema({
  naam: {
    type: String
  },
  studentnummer: {
    type: String
  },


  WAFSdocent: {
    type: String
  },
  WAFSweken: {
    type: String
  },
  WAFSmoeilijk: {
    type: String
  },
  WAFSuitleg: {
    type: String
  },
  WAFSsnappen: {
    type: String
  },
  WAFScijfer: {
    type: String
  },


  CSSTTRdocent: {
    type: String
  },
  CSSTTRweken: {
    type: String
  },
  CSSTTRmoeilijk: {
    type: String
  },
  CSSTTRuitleg: {
    type: String
  },
  CSSTTRsnappen: {
    type: String
  },
  CSSTTRcijfer: {
    type: String
  },


  PWAdocent: {
    type: String
  },
  PWAweken: {
    type: String,
  },
  PWAmoeilijk: {
    type: String
  },
  PWAuitleg: {
    type: String
  },
  PWAsnappen: {
    type: String
  },
  PWAcijfer: {
    type: String
  },


  BTdocent: {
    type: String
  },
  BTweken: {
    type: String
  },
  BTmoeilijk: {
    type: String
  },
  BTuitleg: {
    type: String
  },
  BTsnappen: {
    type: String
  },
  BTcijfer: {
    type: String
  },


  RTWdocent: {
    type: String
  },
  RTWweken: {
    type: String
  },
  RTWmoeilijk: {
    type: String
  },
  RTWuitleg: {
    type: String
  },
  RTWsnappen: {
    type: String
  },
  RTWcijfer: {
    type: String
  },


  HCDdocent: {
    type: String
  },
  HCDweken: {
    type: String
  },
  HCDmoeilijk: {
    type: String
  },
  HCDuitleg: {
    type: String
  },
  HCDsnappen: {
    type: String
  },
  HCDcijfer: {
    type: String
  }
}, { timestamps: true });


const Enquete = mongoose.model('Enquete', enqueteSchema);

module.exports = Enquete;