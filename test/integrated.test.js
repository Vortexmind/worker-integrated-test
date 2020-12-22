const fetch = require('node-fetch');

it('Reports error on missing m param', async () => {
  const response = fetch('http://127.0.0.1:8787/?&n=2')
    .then( res => res.json())
    .then( json => {  
      expect(json.outcome).toBe("ERR")
    })
});

it('Reports error on missing n param', async () => {
  const response = fetch('http://127.0.0.1:8787/?&m=2')
    .then( res => res.json())
    .then( json => {  
      expect(json.outcome).toBe("ERR")
    })
});

it('Adds correctly by default', async () => {
  const response = fetch('http://127.0.0.1:8787/?m=3&n=2')
    .then( res => res.json())
    .then( json => {  
      expect(json.outcome).toBe("OK")
      expect(parseInt(json.result)).toBe(parseInt(5))
    })
});

it('Adds correctly (with op)', async () => {
  const response = fetch('http://127.0.0.1:8787/?m=201&n=1&op=add')
    .then( res => res.json())
    .then( json => {  
      expect(json.outcome).toBe("OK")
      expect(parseInt(json.result)).toBe(parseInt(202))
    })
});

it('Subtracts correctly', async () => {
  const response = fetch('http://127.0.0.1:8787/?m=100&n=30&op=sub')
    .then( res => res.json())
    .then( json => {  
      expect(json.outcome).toBe("OK")
      expect(parseInt(json.result)).toBe(parseInt(70))
    })
});

it('Divides correctly', async () => {
  const response = fetch('http://127.0.0.1:8787/?m=14&n=2&op=div')
    .then( res => res.json())
    .then( json => {  
      expect(json.outcome).toBe("OK")
      expect(parseInt(json.result)).toBe(parseInt(7))
    })
});

it('Multiplies correctly', async () => {
  const response = fetch('http://127.0.0.1:8787/?m=6&n=5&op=mul')
    .then( res => res.json())
    .then( json => {  
      expect(json.outcome).toBe("OK")
      expect(parseInt(json.result)).toBe(parseInt(30))
    })
});