import { makeRequest } from './utils.js';
/*
  Involment API
  Comments
    getComments takes an item_id and returns an array of comments
    postComment takes an item_id and update the list of comments
*/

class Comments {
  static getHTMLComments(comments) {
    let innerHtml = '';
    comments.forEach((comment) => {
      innerHtml += `
      <div class="comment flex padding-y">
        <p class="date">${comment.creation_date}</p>
        <p class="user bold">${comment.username}</p>
        <p class="comment">${comment.comment}</p>
      </div>
      `;
    });
    return innerHtml;
  }

  static getCommentsSize(comments) {
    return comments.length;
  }

  static getComments(id) {
    const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/CVBeCf72ZS2klfsl0Bxs/comments?item_id=${id}`;
    const result = makeRequest(url);
    return result;
  }

  static postComment(id, user, comment) {
    const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/CVBeCf72ZS2klfsl0Bxs/comments';
    const body = { item_id: id, username: user, comment };
    makeRequest(url, 'POST', JSON.stringify(body));
  }
}

export default Comments;