<template>
<!-- User status apakah login atau tidak -->
    <div>
         User status:
      <b-badge>{{ $auth.$state.loggedIn ? 'Logged In' : 'Guest' }}</b-badge>
    </div>
</template>
