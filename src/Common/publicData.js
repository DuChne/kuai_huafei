
const ApiRootUrl = 'https://mini.scymob.com/';//正式
// const ApiRootUrl = 'https://sandbox.scymob.com/';//测试
const version = '1';
const channel = 'kuai_llb';
const appid = '';


const publicData = { 
    channel:channel,
    version:version,
    appid:appid,
    getTabConfig: `${ApiRootUrl}weapp-pddk/advert/getTabConfig?channel=${channel}&version=${version}`, //是否显示h5
    getAppdasinfo: `${ApiRootUrl}weapp-pddk/advert/getAppAdsInfo?channel=${channel}&version=${version}`, //获取广告
    PostDeviceInfo: `${ApiRootUrl}weapp-pddk/advert/PostDeviceInfo?channel=${channel}&version=${version}`, //获取获取设备号
    PostPullInfoID: `${ApiRootUrl}weapp-pddk//advert/PostPullInfoID?channel=${channel}&version=${version}`, //推送
    getIndex:`https://api-um.kdjz.com/v1/index`,
    getjobs:`https://api-um.kdjz.com/v1/jobs`,
    getmap:`https://apis.map.qq.com/ws/geocoder/v1`,
    
  };
  
  module.exports = publicData;