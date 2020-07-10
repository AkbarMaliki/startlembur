<template>
    <div>
        <button @click="conver">pdf</button>
    </div>
</template>
<script>
// import jsPDF from 'jspdf';
export default{
    methods:{
        conver(){
            // var doc = new jsPDF();
            // doc.text(10, 10, 'This is a test')
            // doc.autoPrint()
            // doc.save('autoprint.pdf')
        }
    }
}
</script>