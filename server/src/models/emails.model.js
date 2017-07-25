// emails-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const emails = new Schema({
    fromEmail: { type: String, required: true },
    fromUserId: { type: Schema.Types.ObjectId, ref: 'User' },
    toEmail: { type: String, required: true },
    toUserId: { type: Schema.Types.ObjectId, ref: 'User' },
    subject: { type: String, required: true },
    body: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
  });

  return mongooseClient.model('emails', emails);
};
