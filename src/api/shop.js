/**
 * 샘플링용 shop 목업 데이터
 *
 * 연습용으로 이거써도 될듯
 * https://github.com/tastejs/hacker-news-pwas/blob/master/docs/api.md
 * https://api.hnpwa.com/v0
 * 이거 firebase기반인거 같은데 직접해봐도 괜찮을듯
 *
 */

const _products = [
  { id: 1, title: 'iPad 4 Mini', price: 500.01, inventory: 2 },
  { id: 2, title: 'H&M T-Shirt White', price: 10.99, inventory: 10 },
  { id: 3, title: 'Charli XCX - Sucker CD', price: 19.99, inventory: 5 },
];

export default {
  // API 대용 메소드 - callback
  getProducts(cb) {
    setTimeout(() => cb(_products), 2000);
  },

  /**
   * 랜덤으로 checkout 성공, 실패 여부를 던짐
   * @param {*} products
   * @param {*} cb  -checkout 성공 콜백
   * @param {*} errorCb  - checkout 실패 콜백
   */
  buyProducts(products, cb, errorCb) {
    setTimeout(() => {
      // simulate random checkout failure.
      Math.random() > 0.5 || navigator.webdriver ? cb() : errorCb();
    }, 100);
  },
};
