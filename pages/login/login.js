// pages/login/login.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    account:String,
    password:String
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    login_send:function(){
      // this.setData({account:'84939'})
      if(this.properties.account === ''){
        wx.showToast({
          title: '账号不能为空!',
          icon:'error',
          duration:2000,
        })
        return
      }
      if(this.properties.password === ''){
        wx.showToast({
          title: '密码不能为空!',
          icon:'error',
          duration:2000,
        })
        return
      }
      wx.request({
        url: 'example.php', //仅为示例，并非真实的接口地址
        method:'POST',
        data: {
          username: this.properties.account,
          password: this.properties.password
        },
        header: {
          'content-type': 'application/json' // 默认值
        },
        success (res) {
          console.log(res.data)
        }
      })
    },
    onLoad: function(options) {
      // 页面创建时执行
      // wx.setStorageSync('token', 'sijdisidjisjd')
      wx.clearStorageSync()
      try {
        var value = wx.getStorageSync('token')
        if (value) {
          console.log("您已经登录过啦")
          wx.redirectTo({
            url: '/pages/home/home',
          })
        }else{
          console.log("您还没有登录过哟")
        }
      } catch (error) {
      
      }
    },
  }
})
