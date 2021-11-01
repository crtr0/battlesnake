let arc = require('@architect/functions')

exports.handler = arc.http.async (http)

async function http (req) {
  return {
    statusCode: 200,
    json: { ok: true }
  }
}
