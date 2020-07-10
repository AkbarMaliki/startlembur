
<template>
  <div 
    class="autocomplete" 
    style="z-index:10;">
    <!-- cara memakai 
      <AutoComplete :items="[ 'Tangerine', 'Pineapple']" @input="hasil = $event"/> 
      buat data hasil menjadi tempat data
     -->
    <div class="flex1">
      <div/>
      <div/>
      <label 
        class="sr-only" 
        for="searchBox"/>
      <div class="input-group">
        <div class="input-group-prepend">
          <div 
            class="input-group-text" 
            style="height:30px;"><i class="fas fa-search"/></div>
        </div>
        <input 
          v-model="search" 
          id="searchBox"
          type="text"
          class="form-control py-0"
          style="height:30px;"
          placeholder=""
          @input="onChange"
          @keypress.enter="enter"
          @keydown.down="onArrowDown"
          @keydown.up="onArrowUp" 
          @keydown.enter="onEnter">
      </div>
    </div>
   
    <ul 
      v-show="isOpen"
      id="autocomplete-results"
      style="position:absolute;background:white;"
      class="autocomplete-results"
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
        class="autocomplete-result"
        @click="setResult(result)"
      >
        {{ result }}  
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
  mounted() {
    let data = this.$store.state.barang.filter(e => {
      return e.aktif == true
    })
    data.forEach(bar => {
      this.newItem.push(bar.nama)
    })
    data = data.sort((a, b) => a > b)
    this.items = this.newItem
    document.addEventListener('click', this.handleClickOutside)
  },
  destroyed() {
    document.removeEventListener('click', this.handleClickOutside)
  },

  methods: {
    enter(e) {
      setTimeout(() => {
        console.log('searchnya', e.target.value)
        this.$router.push('/shop?search=' + e.target.value)
      }, 100)
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
        return item.toLowerCase().indexOf(this.search.toLowerCase()) > -1
      })
    },
    setResult(result) {
      this.search = result
      this.isOpen = false
      this.$emit('input', result)
    },
    onArrowDown(evt) {
      if (this.arrowCounter < this.results.length) {
        this.arrowCounter = this.arrowCounter + 1
      }
    },
    onArrowUp() {
      if (this.arrowCounter > 0) {
        this.arrowCounter = this.arrowCounter - 1
      }
    },
    onEnter() {
      if (this.results[this.arrowCounter] == undefined) {
      } else {
        this.search = this.results[this.arrowCounter]
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
    handleClickOutside(evt) {
      if (!this.$el.contains(evt.target)) {
        this.isOpen = false
        this.arrowCounter = -1
      }
    }
  }
}
</script>


<style>
.flex1 {
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  display: flex;
}
.autocomplete {
  position: relative;
}

.autocomplete-results {
  padding: 0;
  margin: 0;
  border: 1px solid #eeeeee;
  height: 300px;
  overflow: auto;
  font-size: 14px;
  width: 100%;
}

.autocomplete-result {
  list-style: none;
  text-align: left;
  padding: 4px 2px;
  cursor: pointer;
}

.autocomplete-result.is-active,
.autocomplete-result:hover {
  background-color: #4aae9b;
  color: white;
}
</style>
