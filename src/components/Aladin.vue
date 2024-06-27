<script setup lang="ts">
import A from 'aladin-lite';

A.init.then(() => {
    let aladin = A.aladin('#aladin-lite-div', {
        fov: 1,
        target: 'M101',
        projection: "STG",
        cooFrame: 'equatorial',
        showCooGridControl: false,
        showSimbadPointerControl: false,
        showCooGrid: false
    });
});
</script>

<template>
    <div id="aladin-lite-div" class="w-full aspect-video"></div>
</template>
