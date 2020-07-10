<template>
<!-- mengandung info dari req.user -->
    <div>
    <b-alert show variant="warning">This is a secure page!</b-alert>
    <b-row>
      <b-col md="8">
        <b-card title="State">
          <pre>{{ state }}</pre>
        </b-card>
      </b-col>
      <b-col md="4">
        <b-card title="Scopes" class="mb-2">
          User: <b-badge>{{ $auth.hasScope('user') }}</b-badge>
          Test: <b-badge>{{ $auth.hasScope('test') }}</b-badge>
          Admin: <b-badge>{{ $auth.hasScope('admin') }}</b-badge>
        </b-card>
        <b-card title="token">
          {{ $auth.token || '-' }}
        </b-card>
        <b-card title="Verify" v-if="!$store.state.auth.user.verified">
          <button @click="$store.dispatch('auth/verify')">Verify Akun</button>
        </b-card>
      </b-col>
    </b-row>
    <hr>
    <b-btn-group>
      <b-button @click="$auth.fetchUser()">Fetch User</b-button>
      <b-button @click="$store.dispatch('auth/logout')">Logout</b-button>
    </b-btn-group>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  middleware: ['auth'],
  computed: {
    state() {
      return JSON.stringify(this.$auth.$state, undefined, 2)
    }
  },
}
</script>
