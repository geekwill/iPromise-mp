import wepy from 'wepy';

/**
 * request 拦截器
 */
export default {
  /**
   * 请求前配置
   */
  config(p) {
    // 开启请求加载提示
    wepy.showNavigationBarLoading();
    p.timestamp = +new Date();
    return p;
  },

  /**
   * http 请求成功
   */
  success(p) {
    console.log('request success: ', p);
    return p;
  },

  /**
   * http 请求失败
   */
  fail(p) {
    wepy.showToast({
      title: '请求异常，请稍后重试！',
      icon: 'none'
    });
    console.log('request fail: ', p);
    return p;
  },

  /**
   * http 请求成功 OR 失败
   */
  complete(p) {
    //关闭请求加载提示
    wepy.hideToast();
    wepy.hideNavigationBarLoading();
    console.log('request complete: ', p);
  }
};
