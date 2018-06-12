import wepy from 'wepy';
/**
 * http 请求整合
 */
class Http {

  constructor() {
    this.config = {
      loading: false
    }
  }

  /**
   * http post request
   * @param {请求地址} url 
   * @param {请求类型} method
   * @param {请求参数} params
   */
  request(url, method, params) {
    wepy.showNavigationBarLoading();
    return wepy.request({
      url,
      method,
      data: params,
      header: {
        'X-TOKEN': 'ADFASDFDSAFASDFASDF1413421KB4312341G2388HASD1231232E2',
        'X-VERSION': '1.0',
        'X-OS': 'mp'
      }
    });
  }

  /**
   * http get request
   * @param {请求地址} url 
   * @param {请求参数} params 
   */
  get(url, params) {
    return this.request(url, 'GET', params || {})
  }

  /**
   * http post request
   * @param {请求地址} url 
   * @param {请求参数} params
   */
  post = (url, params) => {
    return this.request(url, 'POST', params || {})
  };
}

export default new Http();
