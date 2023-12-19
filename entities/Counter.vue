<script setup lang="ts">
    const store = useCounterStore()
</script>

<template>
    <div>
        <p>Counter: {{ store.count }}</p>
        <button type="button" @click="store.increment">Button</button>
    </div>
</template>

<style scoped>

</style>