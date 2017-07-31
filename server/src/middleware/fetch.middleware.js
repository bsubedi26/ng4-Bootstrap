const request = require('request');

module.exports = function (app) {
  // const mongooseClient = app.get('mongooseClient');
  // const messageModel = mongooseClient.model('Message');
  // const roomModel = mongooseClient.model('Room');


  return async function (req, res, next) {
    const { term } = req.params;

    const searchUrl = `http://www.hoovers.com/company-information/company-search.html?term=${term}`
    var options = {
      url: searchUrl,
      headers: {
        'User-Agent': 'request'
      }
    };

    request(options, function (err, response, html) {
      if (err) { throw err };

      console.log('res ', html)

    // request
    //   .get(searchUrl)
    //   .on('response', function (response) {
    //     console.log(response.toJSON())
    //     // console.log(Object.keys(response))
    //     // console.log(response.headers['content-type']) // 'image/png'
    //   })
      // .pipe(request.put('http://mysite.com/img.html'))

    return res.json({response: response, html: html});
  });

  }

}