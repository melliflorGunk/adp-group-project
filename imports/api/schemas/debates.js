export const Debates = new Mongo.Collection('debates');

export const DebateSchema = new SimpleSchema({
  question: {
    type: String,
    label: "Question",
    max: 140,
    optional: true
  },
  yesUser_id: {
    type: String,
    label: "yesUser_id",
    max: 140,
    optional: false
  },
  yesBecause: {
    type: String,
    label: "yesBecause",
    max: 140,
    autoValue: function() { return ''},
    optional: true
  },
  noUser_id: {
    type: String,
    label: "noUser_id",
    max: 140,
    optional: false
  },
  noBecause: {
    type: Boolean,
    label: "noBecause",
    min: 140,
    autoValue: function() { return ''},
    optional: true
  },
  organization: {
    type: Object,
    label: "Organization",
    optional: true
  },
  location: {
    type: String,
    label: "Location",
    min: 3,
    max: 280,
    optional: false
  },
  start: {
    type: Date,
    label: "Start",
    optional: true
  },
  end: {
    type: Date,
    label: "End",
    optional: true
  }
});
