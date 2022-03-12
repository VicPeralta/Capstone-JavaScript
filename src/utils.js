async function makeXMLRequest(url) {
  const socket = new XMLHttpRequest();
  socket.open('GET', `${url}&callback=callData`, false);
  socket.setRequestHeader('Credentials', 'omit');
  socket.setRequestHeader('Acept', 'application/json');
  socket.setRequestHeader('Content-Type', 'application/json');
  socket.setRequestHeader('cache', 'no-store');
  socket.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
  socket.setRequestHeader('Access-Control-Allow-Origin', '*');
  socket.send();
  if (socket.status === 200) {
    return JSON.parse(socket.response.substring(11, socket.response.length - 5));
  }
  return [];
}

async function getBookInfo(url) {
  try {
    const result = await fetch(url);
    if (result.status === 200) return result.json();
    return [];
  } catch {
    return [];
  }
}

async function makeRequest(url, method = 'GET', Body = '') {
  try {
    const options = {
      method: `${method}`,
      headers: {
        'content-type': 'application/json',
        accept: 'application/json',
      },
      mode: 'cors',
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

export {
  makeRequest, makeScrollable, makeNotScrollable, makeXMLRequest, getBookInfo,
};