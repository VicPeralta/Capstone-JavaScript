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
    const result = await fetch(url, options);
    if (result.status === 200) return result.json();
    return [];
  } catch {
    return [];
  }
}

function makeScrollable() {
  const body = document.querySelector('.main-cont');
  body.classList.remove('makeNotScrollable');
  body.classList.add('makeScrollable');
}

function makeNotScrollable() {
  const body = document.querySelector('.main-cont');
  body.classList.remove('makeScrollable');
  body.classList.add('makeNotScrollable');
}

export { makeRequest, makeScrollable, makeNotScrollable };