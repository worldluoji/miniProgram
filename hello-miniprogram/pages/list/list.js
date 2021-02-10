// pages/list/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bookList: ['JavaScript设计模式','CSS揭秘','HTML5实战'],
    inputVaule: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const bookList = wx.getStorageSync('bookList') || ['JavaScript设计模式','CSS揭秘','HTML5实战']; 
    this.setData({ bookList: bookList });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  inputHandler(event) {
    this.setData({
      inputVaule: event.detail.value || ''
    })
  },

  add() {
    const newBook = this.data.inputVaule.trim()
    if (!newBook) {
      return
    }
    const newBookList = [...this.data.bookList, newBook]
    wx.setStorageSync('bookList', newBookList)
    this.setData({
      bookList: newBookList
    })
  },

  removeBook(e) {
    const bookName =  e.target.dataset.bookname
    let that = this
    wx.showModal({
      title: '删除',
      content: `确认删除${bookName}吗`,
      success (res) {      
        if (res.confirm) {
          const newBookList = that.data.bookList.filter(book => book !== bookName)
          wx.setStorageSync('bookList', newBookList)
          that.setData({
            bookList: newBookList
          })
        } else if (res.cancel) {
          console.log('用户取消')
        }
      }
    });
  }

})