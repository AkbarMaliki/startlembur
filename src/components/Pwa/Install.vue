<template>
  <div>
    <button
      type="button"
      @click="install"
      class="btn btn-sm btn-outline-danger btn-block font-times"
    >
      Install Dekstop
      <span class="typcn typcn-device-laptop" style="font-size:20px;"></span>
    </button>
  </div>
</template>
<script>
var deferredPrompt

const keys = require('@/application-keys.json')
export default {
  mounted() {
    window.addEventListener('beforeinstallprompt', function(e) {
      console.log('beforeinstallprompt Event fired')
      e.preventDefault()

      // Stash the event so it can be triggered later.
      deferredPrompt = e
      return false
    })
  },
  methods: {
    install() {
      if (deferredPrompt !== undefined) {
        // The user has had a postive interaction with our app and Chrome
        // has tried to prompt previously, so let's show the prompt.
        deferredPrompt.prompt()

        // Follow what the user has done with the prompt.
        deferredPrompt.userChoice.then(function(choiceResult) {
          console.log(choiceResult.outcome)

          if (choiceResult.outcome == 'dismissed') {
            console.log('User cancelled home screen install')
          } else {
            console.log('User added to home screen')
          }

          // We no longer need the prompt.  Clear it up.
          deferredPrompt = null
        })
      }
    }
  }
}
</script>