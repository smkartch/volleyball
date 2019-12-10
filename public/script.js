/*global Vue
global axios*/

var app = new Vue({
  el: '#app',
  data: {
    items: [],
    author: "",
    comment: "",
    addItem: null,
  },
  methods:{
    async getItems() {
      try {
        let response = await axios.get("/api/items");
        this.items = response.data;
        return true;
      } catch (error) {
        console.log(error);
      }
    },
    async upload() {
      try {
        let r2 = await axios.post('/api/items', {
          author: this.author,
          comment: this.comment,
        });
        this.addItem = r2.data;
      } catch (error) {
        console.log(error);
      }
      this.getItems();
    },
    
  },
  created() {
    this.getItems();
    },
});