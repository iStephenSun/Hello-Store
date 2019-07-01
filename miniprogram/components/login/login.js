// components/login/login.js
Component({
  /**
   * Component properties
   */
  properties: {

  },

  /**
   * Component initial data
   */
  data: {

  },

  /**
   * Component methods
   */
  methods: {
    onTapLogin(event){
      const loginDetail = {
        userInfo: event.detail.userInfo
      }
      // userInfo to Page-me
      this.triggerEvent("onLogin",loginDetail)
    },

  }
})
