import Vue from 'vue'

// const keys = require('@/application-keys.json')
import axios from 'axios'
var axiosInstance = axios.create({
  baseURL: 'http://localhost:8080'
  /* other custom settings */
})
Object.defineProperty(Vue.prototype, '$axios', {
  value: axiosInstance
})

// import socketio from 'socket.io';
// import VueSocketIO from 'vue-socket.io';

// export const SocketInstance = socketio('http://localhost:3000');

// Vue.use(VueSocketIO, SocketInstance)
import _ from 'lodash'
Object.defineProperty(Vue.prototype, '$_', {
  value: _
})
// import moment from 'moment'
// require('moment/locale/id')
// moment.locale('id')
// Object.defineProperty(Vue.prototype, '$moment', {
//   value: moment
// })

import datefns from 'date-fns'
Object.defineProperty(Vue.prototype, '$datefns', {
  value: datefns
})

import daycaca from 'daycaca'
Object.defineProperty(Vue.prototype, '$daycaca', {
  value: daycaca
})
import uniqid from 'uniqid'
Object.defineProperty(Vue.prototype, '$uniqid', {
  value: uniqid
})
let newVue = new Vue();
Object.defineProperty(Vue.prototype, "$nuxt", {
  value: newVue
});

let tofile = function (url, filename, mimeType) {
  return fetch(url)
    .then(function (res) {
      return res.arrayBuffer()
    })
    .then(function (buf) {
      return new File([buf], filename, {
        type: mimeType
      })
    })
}
Object.defineProperty(Vue.prototype, "$urltofile", {
  value: tofile
});




import base64 from 'base-64'
Object.defineProperty(Vue.prototype, '$base64', {
  value: base64
})

import utf8 from 'utf8'
Object.defineProperty(Vue.prototype, '$utf8', {
  value: utf8
})

Object.defineProperty(Vue.prototype, "$scramble", {
  value: function(data){
    let char = "";
    let hasil = "";
    for (var i = 0; i < data.length; i++) {
      char = "";
      char = data.charAt(i);
      if (char == "a") {
        char = char.replace("a", "x");
      } else if (char == "b") {
        char = char.replace("b", "v");
      } else if (char == "c") {
        char = char.replace("c", "u");
      } else if (char == "d") {
        char = char.replace("d", "w");
      } else if (char == "e") {
        char = char.replace("e", "y");
      } else if (char == "f") {
        char = char.replace("f", "z");
      } else if (char == "g") {
        char = char.replace("g", "t");
      } else if (char == "h") {
        char = char.replace("h", "s");
      } else if (char == "i") {
        char = char.replace("i", "r");
      } else if (char == "j") {
        char = char.replace("j", "q");
      } else if (char == "k") {
        char = char.replace("k", "p");
      } else if (char == "l") {
        char = char.replace("l", "o");
      } else if (char == "m") {
        char = char.replace("m", "n");
      } else if (char == "z") {
        char = char.replace("z", "f");
      } else if (char == "y") {
        char = char.replace("y", "e");
      } else if (char == "x") {
        char = char.replace("x", "a");
      } else if (char == "w") {
        char = char.replace("w", "d");
      } else if (char == "v") {
        char = char.replace("v", "b");
      } else if (char == "u") {
        char = char.replace("u", "c");
      } else if (char == "t") {
        char = char.replace("t", "g");
      } else if (char == "s") {
        char = char.replace("s", "h");
      } else if (char == "r") {
        char = char.replace("r", "i");
      } else if (char == "q") {
        char = char.replace("q", "j");
      } else if (char == "p") {
        char = char.replace("p", "k");
      } else if (char == "o") {
        char = char.replace("o", "l");
      } else if (char == "n") {
        char = char.replace("n", "m");
      } else if (char == "1") {
        char = char.replace("1", "0");
      } else if (char == "2") {
        char = char.replace("2", "8");
      } else if (char == "3") {
        char = char.replace("3", "9");
      } else if (char == "4") {
        char = char.replace("4", "7");
      } else if (char == "5") {
        char = char.replace("5", "6");
      } else if (char == "0") {
        char = char.replace("0", "1");
      } else if (char == "8") {
        char = char.replace("8", "2");
      } else if (char == "9") {
        char = char.replace("9", "3");
      } else if (char == "7") {
        char = char.replace("7", "4");
      } else if (char == "6") {
        char = char.replace("6", "5");
      } else if (char == " ") {
        char = char.replace(" ", "_");
      } else if (char == "_") {
        char = char.replace("_", " ");
      } else if (char == "*") {
        char = char.replace("*", "/");
      } else if (char == "/") {
        char = char.replace("/", "*");
      } else if (char == ",") {
        char = char.replace(",", "^");
      } else if (char == "^") {
        char = char.replace("^", ",");
      }
      hasil = hasil + char;
    }
    return hasil;
  }
});