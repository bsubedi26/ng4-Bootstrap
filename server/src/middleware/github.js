const githubOauth = require('github-oauth');

module.exports = function (app) {


  return async function (req, res, next) {
    console.log("started oauth");
    // const ress = githubOauth.login(req, res);
    // console.log(ress)
    return next()
    // return githubOauth.login(req, res);
    // const { message, room } = req.body;
    // const roomDoc = await roomModel.find({ room: room })
    // const messageDoc = await messageModel.create({ text: message, roomId: roomDoc[0]._id })

    // return res.json(messageDoc);
  };

}

  // app.get("/auth/github/callback", function (req, res) {
  //   console.log("received callback");
  //   return githubOauth.callback(req, res);
  // });

  // githubOauth.on('error', function (err) {
  //   console.error('there was a login error', err)
  // })

  // githubOauth.on('token', function (token, serverResponse) {
  //   serverResponse.end(JSON.stringify(token))
  // })

// }
