async function makeRequest(url, method = 'GET', Body = '') {
  try {
    const options = {
      method: `${method}`,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
    };
    if (Body !== '') options.body = Body;
    const results = await fetch(url, options).then((data) => data.json());
    return results;
  } catch {
    return [];
  }
}

export default makeRequest;