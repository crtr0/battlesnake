let arc = require('@architect/functions')

exports.handler = arc.http.async (http)

/*
- stay on board
- eat food
- don't collide with other snakes
*/

async function http (req) {
  console.log(req.body)
  
  let json = {
    move: 'up'
  }
  return {
    statusCode: 200,
    json
  }
}
