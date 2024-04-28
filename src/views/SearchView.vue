<script setup lang="ts">
import { useRoute } from 'vue-router'
const route = useRoute()
</script>

<template>
    <main class="flex mt-10">
        <div class="bg-green-500 bg-opacity-20 w-64">
            <h4 class="scroll-m-20 text-xl font-semibold tracking-tight">
                Localisation
            </h4>
            <h4 class="scroll-m-20 text-xl font-semibold tracking-tight">
                Fitres
            </h4>
        </div>
        <div class="bg-orange-500 bg-opacity-20 w-full">
            <h3 class="scroll-m-20 text-2xl font-semibold tracking-tight">
                Résultats de recherche pour : {{ route.query.q }}
            </h3>
            <p class="text-sm text-muted-foreground">
                38 résultats
            </p>
        </div>
    </main>
</template>