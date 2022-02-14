/*
 * @Description:
 * @Autor: agul
 * @Date: 2020-07-09 13:14:48
 * @LastEditTime: 2021-05-20 14:07:29
 */

import ossImg from './ali-oss'
import request from '@/utils/request'

class Oss {
  _oss
  _oss_video
  _oss_material
  constructor() {
    this.getSign().then(res => {
      const { data } = res
      // eslint-disable-next-line new-cap
      this._oss = new ossImg({
        // aliyun oss config
        uploadImageUrl: data.host,
        // AccessKeySecret: res.accesskeysecret,
        OSSAccessKeyId: data.accessid,
        imgPolicy: data.policy,
        imgSignature: data.signature,
        getImg: data.host,
        // default (文件大小最大上限/M,默认10M)
        max: 10,
        fileLib: data.dir, // 比如: "front/" 对应就会传到oss front文件夹下
        // lrz config
        quality: 1 // 图片质量 0-1 从低到高, 默认0.8 具体参数参考lrz
      })
    })

    this.getSign('vod/').then(res => {
      const { data } = res
      // eslint-disable-next-line new-cap
      this._oss_video = new ossImg({
        // aliyun oss config
        uploadImageUrl: data.host,
        // AccessKeySecret: res.accesskeysecret,
        OSSAccessKeyId: data.accessid,
        imgPolicy: data.policy,
        imgSignature: data.signature,
        getImg: data.host,
        // default (文件大小最大上限/M,默认10M)
        max: 10,
        fileLib: data.dir, // 比如: "front/" 对应就会传到oss front文件夹下
        // lrz config
        quality: 1 // 图片质量 0-1 从低到高, 默认0.8 具体参数参考lrz
      })
    })

    this.getSign('3d-material/').then(res => {
      const { data } = res
      // eslint-disable-next-line new-cap
      this._oss_material = new ossImg({
        // aliyun oss config
        uploadImageUrl: data.host,
        // AccessKeySecret: res.accesskeysecret,
        OSSAccessKeyId: data.accessid,
        imgPolicy: data.policy,
        imgSignature: data.signature,
        getImg: data.host,
        // default (文件大小最大上限/M,默认10M)
        max: 20,
        fileLib: data.dir, // 比如: "front/" 对应就会传到oss front文件夹下
        // lrz config
        quality: 1 // 图片质量 0-1 从低到高, 默认0.8 具体参数参考lrz
      })
    })
  }
  getSign(dir) {
    return request({
      url: 'api/oss/policy',
      method: 'get',
      data: { dir }
    })
  }
  upFile(file, title) {
    return new Promise((resolve, reject) => {
      this._oss.upload(file, title, url => {
        resolve(url)
      })
    })
  }
  upVideo(file) {
    return new Promise((resolve, reject) => {
      this._oss_video.upload(file, '', url => {
        resolve(url)
      })
    })
  }
  upMaterial(file) {
    return new Promise((resolve, reject) => {
      this._oss_material.upload(file, '', url => {
        resolve(url)
      })
    })
  }
}

export default new Oss()
