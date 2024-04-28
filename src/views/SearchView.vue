<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'

import SelectFilter from '@/components/SearchView/SelectFilter.vue';

import { Input } from '@/components/ui/input'

import { MapPin, Eye, MoonStar } from 'lucide-vue-next'

const route = useRoute()

const filters = ref({
    time: {
        from: '18',
        to: '4'
    },
    altitude: {
        value: '20',
        time: '10'
    },
    objectType: 'Dark Nebula',
})

const hours = ref<string[]>(['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23'])
const objectTypes = ref<string[]>(['Dark Nebula', 'Emission Nebula', 'Galaxy', 'Globular Cluster', 'Group of Galaxies', 'Open Cluster', 'Planetary Nebula', 'Reflection Nebula', 'Supernova'])
</script>

<template>
    <main class="flex mt-10">
        <div class="w-[18.5rem] px-8">
            <h4 class="scroll-m-20 text-xl font-semibold tracking-tight">
                Localisation
            </h4>

            <p class="mt-4 font-semibold flex items-center">
                <MapPin class="w-4 h-4 mr-2" />
                Paris
            </p>
            <p class="text-sm text-muted-foreground">
                0,0000°N, 0,0000°E
            </p>
            <a href="#" class="font-semibold text-primary underline underline-offset-4">
                Modifier
            </a>


            <h4 class="scroll-m-20 text-xl font-semibold tracking-tight mt-8">
                Filtres
            </h4>

            <p class="mt-4 font-semibold flex items-center">
                <Eye class="w-4 h-4 mr-2" />
                Visibilité
            </p>
            <div class="mt-2 flex items-center">
                <span class="mr-2">De</span>
                <SelectFilter :values="hours" suffix="h" v-model="filters.time.from" />
                <span class="mx-2">à</span>
                <SelectFilter :values="hours" suffix="h" v-model="filters.time.to" />
            </div>
            <div class="mt-2 flex items-center">
                <span class="mr-2 text-nowrap">Altitude min</span>
                <Input type="number" min="0" max="90" step="5" v-model="filters.altitude.value" />
                <span class="ml-2">°</span>
            </div>
            <div class="mt-2 flex items-center">
                <span class="mr-2 text-nowrap">pour</span>
                <Input type="number" min="0" max="900" step="5" v-model="filters.altitude.time" />
                <span class="ml-2">minutes</span>
            </div>

            <p class="mt-4 font-semibold flex items-center">
                <MoonStar class="w-4 h-4 mr-2" />
                Type d'objet
            </p>
            <div class="mt-2 flex items-center">
                <SelectFilter :values="objectTypes" v-model="filters.objectType" />
            </div>
        </div>
        <div class="w-full px-8">
            <h3 class="scroll-m-20 text-2xl font-semibold tracking-tight">
                Résultats de recherche pour : {{ route.query.q }}
            </h3>
            <p class="text-sm text-muted-foreground mt-2">
                128 résultats (0.48 secondes)
            </p>
        </div>
    </main>
</template>