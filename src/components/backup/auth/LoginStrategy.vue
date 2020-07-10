<template>
<!-- macam macam login strategy -->
<div>
  <div class="card card-scroll-sm scrollbar-ripe-malinkas">
    <p class="font-times font-bold uppercase text-sm pb-2">
    Masuk/daftar dengan: 
    </p>
      <div class="card-body">
          <div v-for="s in strategies" :key="s.key" class="mb-2">
             <div class="tips" style="width:100%">
              <button type="button" :id='s.key' :style="{background:s.color}" @click="$auth.loginWith(s.key)" class="btn btn-sm   btn-block font-times font-bold capitalize">
                <span class="typcn " :class="[`typcn-social-${s.class}`]"></span> {{ s.name }}</button>
                <span class="tipstextB">{{s.key}}</span>
            </div>
          </div>
      </div>
  </div>
</div>
</template>
<script>
export default {
	computed: {
		strategies: () => [
			{ key: 'auth0', name: 'Auth0', color: '#ec5425', class: 'dribble' },
			{ key: 'google', name: 'Google', color: '#4284f4', class: 'google-plus' },
			{
				key: 'facebook',
				name: 'Facebook',
				color: '#3c65c4',
				class: 'facebook'
			},
			{ key: 'github', name: 'Github', color: '#3b3f44', class: 'github' }
		],
		redirect() {
			return (
				this.$route.query.redirect &&
        decodeURIComponent(this.$route.query.redirect)
			)
		},
		isCallback() {
			return Boolean(this.$route.query.callback)
		}
	}
}
</script>
