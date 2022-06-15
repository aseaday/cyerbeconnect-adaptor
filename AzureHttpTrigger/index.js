const createRequest = require('./../index').createRequest

module.exports = function (context, req) {
  context.log('cyberconnect adapter request for Azure Lambda...')

  createRequest(req.body, (statusCode, data) => {
    context.res = {
      status: statusCode,
      body: data,
      headers: {
        'Content-Type': 'application/json'
      }
    }
    context.done();
  })
}