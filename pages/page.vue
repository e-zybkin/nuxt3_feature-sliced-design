<script setup lang="ts">
## Using Interfaces
## import { EnumButtonStyle, EnumButtonType } from '#imports'
    
const randomPerson: Person = {
    name: 'Jack',
    age: 21
}
console.log(randomPerson)
</script>

<template>
    <div>
        <p> Second Page</p>
        <WidgetCounter />
        <NuxtLink to="/">To Main Page</NuxtLink>
    </div>
</template>

<style scoped>

</style>
