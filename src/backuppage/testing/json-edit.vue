<template>
    <JsonEditor
        :options="{
            confirmText: 'confirm',
            cancelText: 'cancel',
        }"
        :objData="vdata" 
        v-model="vdata" >
    </JsonEditor>
</template>
<script>
export default {
    data(){
        return {
            vdata: {
                name: 'mike',
                age: 23,
                phone: '18552129932',
                address: ['AAA C1', 'BBB C2']
            }
        }
    }
}
</script> 