const messages = {
  data() {
    return {
      message: ""
    };
  },
  methods: {
    messageFu(result, that) {
      this.message = result.data.message;
      const component = that.$refs["myPopup"];
      component.show();
      setTimeout(() => {
        component.hide();
      }, 1000);
    }
  }
};
export default messages;
