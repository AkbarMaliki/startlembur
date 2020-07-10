<template>
<div>
            <hr class="style13">
    <p style="color:gray"> Rekening harus diisini untuk dapat melakukan transaksi / berjualan di toko online ini :</p>
    <hr>
    <button type="button" class="btn btn-md btn-outline-success   waves-effect pull-right" 
    @click="$nuxt.$emit('modal',true);$nuxt.$emit('modalId','RekeningForm');">UBAH</button>
    <span>No Rekening</span> : 
    {{$store.state.auth.user.atm}}
    <hr>
    <span>Nama Bank</span> : 
    {{$store.state.auth.user.bank}}
    <br>
    <span>Nama Di Rekening</span> : 
{{$store.state.auth.user.namaatm}}
<hr class="style13">
</div>
</template>