
<template>
<div>

  <div 
    class="autocomplete" 
    style="z-index:10;">
     <label><span style="position:absolute;z-index:-1;color:white;">test</span>
        <input 
          v-model="search" 
          type="text"
          class="form-control py-0 customeKotak"
          placeholder="search"
          @click="addData"
          @input="onChange"
          @keypress.enter="enter"
          @keydown.down="onArrowDown"
          @keydown.up="onArrowUp" 
          @keydown.enter="onEnter">
      </label>
</div>
<ul 
      v-show="isOpen"
      class="autocomplete-results text-center"
      style="z-index:2000;"
    >
      <li
        v-if="isLoading"
        class="loading"
      >
        Loading results...
      </li>
      <li
        v-for="(result, i) in results"
        v-else
        :key="i"
        :class="{ 'is-active': i === arrowCounter }"
        class="autocomplete-result " style="padding:10px;border-bottom:1px solid gray;"
        @click="setResult(result)"
      >
        {{ result.title }} | <span class="font-bold">
          {{result.keywords}}
          </span> 
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'Autocomplete',

  props: {
    isAsync: {
      type: Boolean,
      required: false,
      default: false
    }
  },

  data() {
    return {
      dataNya: [],
      isOpen: false,
      results: [],
      search: '',
      isLoading: false,
      arrowCounter: 0,
      newItem: [],
      items: []
    }
  },
  watch: {
    items: function(val, oldValue) {
      // actually compare them
      if (val.length !== oldValue.length) {
        this.results = val
        this.isLoading = false
      }
    }
  },
  mounted() {},
  destroyed() {
    document.removeEventListener('click', this.handleClickOutside)
  },

  methods: {
    addData() {
      this.isOpen = true
      // diklik tempat datanya lalu data diisi
      if (this.items.length < 1) {
        document.addEventListener('click', this.handleClickOutside)
      }
      this.$axios.get('/api/data/blog/search').then(res => {
        let hasil = res.data.data
        this.items = hasil
      })
    },
    enter(e) {
      setTimeout(() => {
        this.$router.push('/blog/' + this.search)
        this.search = ''
      }, 0)
    },
    onEnter() {
      if (this.results[this.arrowCounter] == undefined) {
      } else {
        this.search =
          this.results[this.arrowCounter].title.split(' ').join('-') +
          `?xx=${this.results[this.arrowCounter]._id}`
        let hasil = this.results[this.arrowCounter].kategori + '/' + this.search
        console.log(this.results[this.arrowCounter])
        // this.$router.push('/blog/' + hasil)
        this.search = hasil
      }
      this.isOpen = false
      console.log(this.arrowCounter)
      if (this.arrowCounter == -1) {
        this.arrowCounter = -1
        this.$emit('input', this.results[0])
      } else {
        this.arrowCounter = -1
        this.$emit('input', this.search)
      }
    },
    onChange() {
      // Let's warn the parent that a change was made
      // this.$emit('input', this.search);
      // Is the data given by an outside ajax request?
      if (this.isAsync) {
        this.isLoading = true
      } else {
        // Let's  our flat array
        this.filterResults()
        this.isOpen = true
      }
    },

    filterResults() {
      // first uncapitalize all the things
      this.results = this.items.filter(item => {
        if (
          item.title.toLowerCase().indexOf(this.search.toLowerCase()) > -1 ||
          item.keywords.toLowerCase().indexOf(this.search.toLowerCase()) > -1
        ) {
          return true
        }
      })
    },
    setResult(result) {
      this.search = result.title.split(' ').join('-') + `?xx=${result._id}`
      let hasil = result.kategori + '/' + this.search
      this.$router.push('/blog/' + hasil)
      this.search = ''
      this.isOpen = false
      // this.$emit('input', result)
    },
    onArrowDown(evt) {
      if (this.arrowCounter < this.results.length) {
        this.arrowCounter = this.arrowCounter + 1
      }
      console.log(this.arrowCounter)
    },
    onArrowUp() {
      if (this.arrowCounter > 0) {
        this.arrowCounter = this.arrowCounter - 1
      }
      console.log(this.arrowCounter)
    },

    handleClickOutside(evt) {
      if (!this.$el.contains(evt.target)) {
        this.isOpen = false
        this.arrowCounter = -1
      }
    }
  }
}
</script>
