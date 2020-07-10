<template>
    <div>
        <p v-if="$store.state.nossr" v-html="item.description">

        </p>
    </div>
</template>
<script>
export default{
    props:['item']
}
</script>
