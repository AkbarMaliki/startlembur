<template>
    <div>
        <button type="button" @click="$router.push('/testing/firebase/auth')" class="btn btn-sm btn-dark ">AUTH</button>
        <button type="button" @click="$router.push('/testing/firebase/fingerauth')" class="btn btn-sm btn-dark ">Finger Print Authentication</button>
        <button type="button" @click="$router.push('/testing/firebase/crud')" class="btn btn-sm btn-dark ">CRUD</button>
        <button type="button" @click="$router.push('/testing/firebase/storage')" class="btn btn-sm btn-dark ">STORAGE</button>
    </div>
</template>