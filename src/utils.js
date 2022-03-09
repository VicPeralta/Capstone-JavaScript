async function makeRequest(url, method = 'GET') {
  try {
    const options = {
      method: `${method}`,
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const results = await fetch(url, options).then((data) => data.json());
    return results;
  } catch {
    return [];
  }
}

export default makeRequest;