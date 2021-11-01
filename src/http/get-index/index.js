let arc = require('@architect/functions')

exports.handler = arc.http.async (http)

async function http (req) {
  const json = {
    apiversion: "1",
    author: "Carter Rabasa",
    color: "#17C37B",
    head: "default",
    tail: "default"
}
  return {
    statusCode: 200,
    json
  }
}
