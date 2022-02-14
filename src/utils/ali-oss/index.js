/*
 * @Author: axu
 * @Date: 2021-05-20 11:51:19
 * @LastEditTime: 2021-05-20 14:43:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-admin-template-master/src/utils/ali-oss/index.js
 */
// const uploadImage = require('./uploadImage')
import uploadImage from './uploadImage'
/**
 * @class ossImg
 */

class ossImg {
  constructor(config) {
    this.config = config
  }
  /**
   *
   *
   * @param {any} file 上传文件
   * @param {any} callback 成功回调 参数 url 为图片地址
   * @memberof ossImg
   */
  upload(file, title, callback) {
    // if(this.check(file)){
    // this.lrzImage(file,(picObj)=>{
    // const hide = Message.loading('上传中', 0)
    this.uploadImg(file, title, callback)
    // })
    // }
  }

  check(file) {
    const max = this.config.max || 10
    const isLt2M = file.size / 1024 / 1024 < max
    if (!isLt2M) {
      alert(`上传图片大小不能超过 ${max}MB!`)
      return false
    }
    return true
  }
  // lrzImage(file,callback){
  //   const that = this
  //   const lrzConfig = that.config.lrz || {}
  //   console.log('上传中...')
  //   lrz( file, {
  //     quality: that.config.quality || 0.8    //自定义使用压缩方式
  //   }).then((rst) => {
  //     console.log(rst)
  //     // console.log('压缩成功！')
  //     if(!rst.file.name) rst.file.name = rst.origin.name
  //     // 校验大小
  //     if(that.check(rst.file)){
  //       callback({
  //         content: rst.base64,
  //         file: rst.file,
  //       })
  //     }
  //   }).catch((error)=> {
  //       //失败时执行
  //      console.log('图片压缩失败，请换张试试！')
  //   })
  // }
  // 分步上传 1.check大小，压缩
  /**
   *
   *
   * @param {any} file  上传图片
   * @param {any} callback 成功回调
   * @memberof ossImg
   */
  async uploadImg(file, title, callback) {
    const url = await uploadImage(file, title, this.config)
    // hide()
    callback && callback(url)
  }
}

export default ossImg
