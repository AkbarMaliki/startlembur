<template>
  <div>
    <div class="container">
      <div class="row justify-content-center mt-4">
        <div class="col-lg-6 col-md-10 col-12">
          <h1 class="text-center">WebSocket Chat client</h1>
        </div>
      </div>
      <div class="row justify-content-center mt-4">
        <div class="col-lg-6 col-md-10 col-12">
          <textarea class="form-control" id="text-area" rows="16" disabled></textarea>
        </div>
      </div>
      <div class="row justify-content-center mt-1">
        <div class="col-lg-6 col-md-10 col-12 w-100">
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <button
                type="button"
                class="btn btn-outline-primary mr-1"
                id="button-send"
                @click="kirim"
              >Send</button>
            </div>
            <input type="text" class="form-control" id="input-message" placeholder="Message ...">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    kirim() {
      let message = this.$el.querySelector("#input-message").value;
      if (message) {
        this.sendMessage(message);
        this.$el.querySelector("#input-message").value = "";
      }
    },
    addMessage(message) {
      let el = this.$el.querySelector("#text-area");

      el.value = el.value + `${message}\n`;
      //  el.scrollTop = el.scrollHeight - el.height
    },

    sendMessage(message) {
      this.$ws.send(message);
    }
  },
  mounted() {
    let that = this;

    this.$ws.onopen = () => that.addMessage("Connected");
    this.$ws.onmessage = message => {
      console.log(message);
      return that.addMessage(message.data);
    };
    this.$ws.onclose = () => that.addMessage("Disconnected");

    this.$ws.onerror = evt => console.log("error", evt);
  }
};
</script>