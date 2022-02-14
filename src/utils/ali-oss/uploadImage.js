/*
 * @Author: axu
 * @Date: 2021-05-20 11:51:19
 * @LastEditTime: 2021-05-20 14:07:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-admin-template-master/src/utils/ali-oss/uploadImage.js
 */
// import request from '@/utils/request'
import axios from 'axios'
function uuid() {
  var d = new Date().getTime()
  if (window.performance && typeof window.performance.now === 'function') {
    d += performance.now()
  }
  var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(
    c
  ) {
    var r = (d + Math.random() * 16) % 16 | 0
    d = Math.floor(d / 16)
    return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16)
  })
  return uuid
}
/**
 * 必须注入handleError
 *
 * @param {*} tempFilePath  img url
 * @param {*} config  uploadConfig
 */
async function uplaodImg(tempFilePath, title, config) {
  const fileLib = config.fileLib || ''
  const form = new FormData()
  if (!title) {
    title = uuid()
  }
  let suffix = tempFilePath.type.split('/')[1]
  if (suffix === 'postscript') {
    suffix = 'ai'
  }
  if (!suffix) {
    suffix = tempFilePath.name.split('.').pop()
  }
  // const fileName = +String(tempFilePath.name)+"_"+new Date()
  const fileName = title + '.' + suffix
  form.append('name', fileName)
  form.append('key', `${fileLib + fileName}`)
  form.append('policy', config.imgPolicy)
  form.append('OSSAccessKeyId', config.OSSAccessKeyId)
  form.append('success_action_status', 200)
  form.append('signature', config.imgSignature)
  form.append('file', tempFilePath)
  const data = await axios.post(config.uploadImageUrl, form)
  if (data.status === 400) {
    alert('上传的图片大小不符合规范！')
  } else if (data.status === 200) {
    return config.getImg + '/' + fileLib + fileName
  }
}

export default uplaodImg
