const Maths = require('./src/maths')

addEventListener('fetch', (event) => {
  event.respondWith(handleRequest(event.request))
})
/**
 * Respond with hello worker text
 * @param {Request} request
 */
async function handleRequest(request) {
  const url = new URL(request.url)
  const m = url.searchParams.get('m') || ''
  const n = url.searchParams.get('n') || ''
  const op = url.searchParams.get('op') || ''

  if (m === '' && n === '' && op === '') {
    return respJSON('OK', 'healthy', 200)
  }

  if (
    m === '' ||
    n === '' ||
    !Number.isSafeInteger(parseInt(m)) ||
    !Number.isSafeInteger(parseInt(n))
  ) {
    return respJSON(
      'ERR',
      'Please provide two integers using the m and n querystring parameters',
      400
    )
  }

  const math = new Maths(m, n)
  let result = ''
  switch (op) {
    case 'sum':
      result = math.sum()
      break
    case 'sub':
      result = math.subtract()
      break
    case 'mul':
      result = math.multiply()
      break
    case 'div':
      result = math.divide()
      break
    default:
      result = math.sum()
      break
  }

  return respJSON('OK', result, 200)
}

function respJSON(outcome, result, status) {
  return new Response(
    JSON.stringify({
      outcome: outcome,
      result: result,
    }),
    {
      headers: { 'content-type': 'application/json;charset=UTF-8' },
      status: status,
    }
  )
}
