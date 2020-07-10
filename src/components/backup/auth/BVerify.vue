<template>
    <div>
        <!-- akan mengirim email untuk verification -->
        <button @click="$store.dispatch('auth/verify')">Verify Akun</button>
    </div>
</template>