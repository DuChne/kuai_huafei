const data = require('./publicData.js')


function formatTime(a) {
  const prompt = require('@system.prompt')

  return new Promise(function (resolve, reject) {
    if (a == 1) {

      prompt.showToast({
        // 获取全局定义的包名
        // message:this.packageName
        message: data.channel
      })
      resolve('998')
    }
  })
}


function promptFun(value) {
  const prompt = require('@system.prompt')
  prompt.showToast({
    message: value
  })
}

function welfarea(type, url, statistics) {
  const pkg = require('@system.package')
  const router = require('@system.router')
  if (statistics) {
    requiref(statistics, {}, '').then(res => {

    })
  }

  var time = setTimeout(() => {
    if (type == 1 || type == 0 || type == 3) {
      router.push({
        uri: url
      })
    } else if (type == 2) {
      router.push({
        uri: url
      })
    } else if (type == 4) {
      pkg.install({
        package: 'com.taobao.taobao',
        success: function (data) {
          console.log(`handling success: ${data.result}`)
        },
        fail: function (data, code) {
          console.log(`handling fail, code = ${code}`)
        }
      })
    }
  }, 200)


}



//获取设备信息
function getInfoa(way) {
  // getInfo 获取设备信息
  // getUserId 获取用户唯一标识
  // getAdvertisingId 获取广告唯一标识
  // getSerial 获取设备序列号
  // getOAID 返回厂商设备标识符中的OAID（匿名设备标识符）

  const device = require('@system.device')
  return new Promise(function (resolve, reject) {
    if (way == 'getInfo') {
      device.getInfo({
        success: function (ret) {
          resolve(ret)
        },
        fail: function (err) { reject(err) }
      })
    } else if (way == 'getUserId') {
      device.getUserId({
        success: function (ret) {
          resolve(ret.userId)
        },
        fail: function (err) { reject(err) }
      })
    } else if (way == 'getAdvertisingId') {
      device.getAdvertisingId({
        success: function (ret) {
          resolve(ret.advertisingId)
        },
        fail: function (err) { reject(err) }
      })
    } else if (way == 'getSerial') {
      device.getSerial({
        success: function (ret) {
          resolve(ret.serial)
        },
        fail: function (err) { reject(err) }
      })
    } else if (way == 'getOAID') {
      device.getOAID({
        success: function (ret) {
          resolve(ret.oaid)
        },
        fail: function (err) { reject(err) }
      })
    }

  })

}



function requiref(url, data, method) {
  const fetch = require('@system.fetch')

  let api = url,
    dataA = data,
    met = method ? method : 'GET';

  return new Promise(function (resolve, reject) {
    fetch.fetch({
      url: api,
      method: met,
      data: dataA,
      resphonseType: 'form-data',
      header: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      success: function (res) {
        if (res.code == 200) {
          resolve(res)
        } else {
          resolve(res.msg)
        }
      },
      fail: function (err) { reject(err) }
    })
  })

}


function getStorage(name) {
  const storage = require('@system.storage')
  return new Promise(function (resolve, reject) {
    storage.get({
      key: 'userid',
      success: function (data) {
        if (!data) {
          resolve(data != '' ? JSON.parse(data) : '')
        }
      }
    })
  })


}


export default {
  formatTime,
  welfarea,
  getInfoa,
  promptFun,
  requiref,
  getStorage,
}