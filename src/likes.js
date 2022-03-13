import { makeRequest } from './utils.js';

/*
  Involment API
  Likes
    getLikes  return an array with the number of likes for each item_id
    postLike  takes an item_id and update counter
*/

class Likes {
  likesInfo = [];

  getLikesForID(id) {
    const item = this.likesInfo.find((element) => element.item_id === String(id));
    if (!item) return 0;
    return item.likes;
  }

  updateLikesForID(id) {
    const item = this.likesInfo.find((element) => element.item_id === String(id));
    if (!item) this.likesInfo.push({ item_id: String(id), likes: 1 });
    else item.likes += 1;
  }

  static postLike(id) {
    const body = { item_id: String(id) };
    makeRequest('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/CVBeCf72ZS2klfsl0Bxs/likes/',
      'POST', JSON.stringify(body));
  }

  async getLikesInfo() {
    this.likesInfo = await makeRequest('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/CVBeCf72ZS2klfsl0Bxs/likes/');
    this.likesInfo.sort((first, second) => {
      if (first.item_id > second.item_id) return -1;
      if (first.item_id < second.item_id) return 1;
      return 0;
    });
  }
}

export default Likes;