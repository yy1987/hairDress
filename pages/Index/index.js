//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
   
  },
  about:function(){
    wx.navigateTo({
      url:'/pages/about/about'
    })
  },
  sign:function(){
    wx.navigateTo({
      url:'/pages/sign/sign'
    })
  },
  caseDetail:function(){
    wx.navigateTo({
      url:'/pages/caseDetail/caseDetail'
    })
  },
  group:function(){
    wx.navigateTo({
      url:'/pages/group/group'
    })
  },
  store:function(){
    wx.navigateTo({
      url:'/pages/store/store'
    })
  },
  map:function(){
    wx.navigateTo({
      url:'/pages/map/map'
    })
  },
  HairDresser:function(){
    console.log("jij")
    wx.switchTab({
      url:'/pages/HairDresser/hairDresser'
    })
  },
})
