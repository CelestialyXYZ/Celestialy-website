<script setup lang="ts">
import { useRoute } from 'vue-router'
import Aladin from '@/components/Aladin.vue'

const route = useRoute()
</script>

<template>
    <main class="flex mt-10 px-8">
        <div class="m-auto max-w-5xl">
            <img src="https://telescopius.com/img/dsos/6ad5dfee4eda09255d9a7bd929b23df9_fullhd.webp" alt="Orion nebula"
                class="rounded-2xl border w-full">
            <h1 class="scroll-m-20 text-4xl font-semibold tracking-tight lg:text-5xl mt-4">M42 - La grande nébuleuse
                d'Orion
            </h1>
            <h4 class="scroll-m-20 text-xl text-muted-foreground tracking-tight mt-2">
                Constellation :
                <a href=" #" class="underline text-primary font-semibold">Orion</a>
            </h4>

            <h2 class="scroll-m-20 text-3xl font-semibold tracking-tight transition-colors my-4">
                Simulateur de vue
            </h2>
            <Aladin />
        </div>
        <div>
            <h3 class="scroll-m-20 text-2xl font-semibold tracking-tight">
                Informations
            </h3>
            <p class="text-lg mt-3">
                Ascension droite : 0° 0' 0.00"
            </p>
            <p class="text-lg mt-1">
                Déclinaison : 0° 0' 0.00"
            </p>
            <p class="text-lg mt-1">
                Type : nébuleuse
            </p>
        </div>
    </main>
</template>
