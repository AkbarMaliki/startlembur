<template>
    <div>
        <br>
        <p class="text-left" style="font-family:'Merriweather', serif;">List Barang</p>
        <hr class="style10">
        <template v-if="$auth.user.atm!='belum diisi' && $auth.user.verified">
        <div class="text-right">
                <button type="button" class="btn btn-md btn-dark   waves-effect mr-5" 
                style="font-family:times new roman;"
                @click="$nuxt.$emit('componentProfile','BarangForm')"> + Tambah Barang</button>
            </div>
        </template>
        <template v-else>
                <p style="font-size:15px;color:red">Tambahkan rekening dan verifikasi akun anda untuk menambahkan barang</p>
            <div class="text-right">
                <button type="button" class="btn btn-md btn-dark   waves-effect mr-5" 
                style="font-family:times new roman;"
                disabled
                @click="$nuxt.$emit('componentProfile','BarangForm')"> + Tambah Barang</button>
                <br>
            </div>
        </template>
        <hr class="style9">
        <BarangList2 style="width:100%;"/>
    </div>
</template>
<script>
export default{
    mounted() {
        console.log(this.$auth.user);
    },
}
</script>
