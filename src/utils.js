async function makeRequest(url, method = 'GET', Body = '') {
  try {
    const options = {
      method: `${method}`,
      headers: {
        'Content-Type': 'application/json',
      },
    };
    if (Body !== '') options.body = Body;
    const results = await fetch(url, options).then((data) => data.json());
    return results;
  } catch {
    return [];
  }
}

export default makeRequest;