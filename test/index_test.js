const assert = require('chai').assert
const createRequest = require('../index.js').createRequest

describe('createRequest', () => {
  const jobID = '1'
  context('successful calls', () => {
    const requests = [
      { name: 'ask a id', testData: { data: { address: "0x148d59faf10b52063071eddf4aaf63a395f2d41c", namespace: "CyberConnect" } } },
    ]
    requests.forEach(req => {
      it(`${req.name}`, (done) => {
        createRequest(req.testData, (statusCode, data) => {
          assert.equal(statusCode, 200)
          assert.equal(data.jobRunID, jobID)
          assert.isNotEmpty(data.data)
          done()
        })
      })
    })
  })
})
