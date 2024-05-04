<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'

import SelectFilter from '@/components/SearchView/SelectFilter.vue'
import SearchSelectFilter from '@/components/SearchView/SearchSelectFilter.vue'
import ResultCard from '@/components/SearchView/ResultCard.vue'

import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Badge } from '@/components/ui/badge'

import {
    MapPin,
    Eye,
    MoonStar,
    BookOpen,
    Sparkles,
    MoveHorizontal,
    RotateCw,
    ScanSearch,
    Sun,
    Sparkle
} from 'lucide-vue-next'

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
    mag: {
        unit: `arc_minute`
    },
    objectType: 'globular_cluster',
    catalog: 'messier',
    constellation: 'Andromeda'
})

const hours = ref<string[]>([
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    '11',
    '12',
    '13',
    '14',
    '15',
    '16',
    '17',
    '18',
    '19',
    '20',
    '21',
    '22',
    '23'
])
const objectTypes = ref<string[]>([
    'Dark Nebula',
    'Emission Nebula',
    'Galaxy',
    'Globular Cluster',
    'Group of Galaxies',
    'Open Cluster',
    'Planetary Nebula',
    'Reflection Nebula',
    'Supernova'
])
const catalogs = ref<string[]>(['Messier', 'New General Catalog', 'Index Catalog'])
const constellations = ref<{ label: string; value: string }[]>([
    { label: 'Andromeda', value: 'Andromeda' },
    { label: 'Antlia', value: 'Antlia' },
    { label: 'Aquarius', value: 'Aquarius' }
])
const magUnits = ref<string[]>(['degré', 'arc minute', 'arc second'])
</script>

<template>
    <main class="flex mt-10">
        <div class="w-[18.5rem] px-8">
            <h4 class="scroll-m-20 text-xl font-semibold tracking-tight">Localisation</h4>

            <p class="mt-4 font-semibold flex items-center space-x-2">
                <MapPin class="w-4 h-4" />
                <span>Paris</span>
            </p>
            <p class="text-sm text-muted-foreground">0,0000°N, 0,0000°E</p>
            <a href="#" class="font-semibold text-primary underline underline-offset-4"> Modifier </a>

            <h4 class="scroll-m-20 text-xl font-semibold tracking-tight mt-8">Filtres</h4>

            <Button class="mt-4 w-full"> Réinitialiser les filtres </Button>

            <p class="mt-5 font-semibold flex items-center space-x-2">
                <Eye class="w-4 h-4" />
                <span>Visibilité</span>
            </p>
            <div class="mt-3 flex items-center space-x-2">
                <span>De</span>
                <SelectFilter :values="hours" suffix="h" v-model="filters.time.from" />
                <span>à</span>
                <SelectFilter :values="hours" suffix="h" v-model="filters.time.to" />
            </div>
            <div class="mt-2 flex items-center space-x-2">
                <span class="text-nowrap">Altitude min</span>
                <Input type="number" min="0" max="90" step="5" v-model="filters.altitude.value" />
                <span>°</span>
            </div>
            <div class="mt-2 flex items-center space-x-2">
                <span>pour</span>
                <Input type="number" min="0" max="900" step="5" v-model="filters.altitude.time" />
                <span>minutes</span>
            </div>

            <p class="mt-5 font-semibold flex items-center space-x-2">
                <MoonStar class="w-4 h-4" />
                <span>Type d'objet</span>
            </p>
            <div class="mt-3 flex items-center">
                <SelectFilter :values="objectTypes" v-model="filters.objectType" />
            </div>

            <p class="mt-5 font-semibold flex items-center space-x-2">
                <BookOpen class="w-4 h-4" />
                <span>Catalogue</span>
            </p>
            <div class="mt-3">
                <SelectFilter :values="catalogs" v-model="filters.catalog" />
            </div>

            <p class="mt-5 font-semibold flex items-center space-x-2">
                <Sparkles class="w-4 h-4" />
                <span>Constellation</span>
            </p>
            <div class="mt-3">
                <SearchSelectFilter :values="constellations" v-model="filters.constellation" />
            </div>

            <p class="mt-5 font-semibold flex items-center space-x-2">
                <RotateCw class="w-4 h-4" />
                <span>Ascension droite</span>
            </p>
            <div class="mt-3 flex items-center space-x-2">
                <span>De</span>
                <SelectFilter :values="hours" suffix="h" v-model="filters.time.from" />
                <span>à</span>
                <SelectFilter :values="hours" suffix="h" v-model="filters.time.to" />
            </div>

            <p class="mt-5 font-semibold flex items-center space-x-2">
                <MoveHorizontal class="w-4 h-4" />
                <span>Déclinaison</span>
            </p>
            <div class="mt-3 flex items-center space-x-2">
                <span>De</span>
                <SelectFilter :values="hours" suffix="h" v-model="filters.time.from" />
                <span>à</span>
                <SelectFilter :values="hours" suffix="h" v-model="filters.time.to" />
            </div>

            <p class="mt-5 font-semibold flex items-center space-x-2">
                <Sparkle class="w-4 h-4" />
                <span>Magnitude apparente</span>
            </p>
            <div class="mt-3 flex items-center space-x-2">
                <span>De</span>
                <Input type="number" min="0" step="1" v-model="filters.altitude.value" />
                <span>à</span>
                <Input type="number" min="0" step="1" v-model="filters.altitude.value" />
            </div>
            <div class="mt-2 flex items-center space-x-2">
                <Checkbox id="magAllMissing" />
                <label for="magAllMissing"
                    class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Inclure manquant
                </label>
            </div>

            <p class="mt-5 font-semibold flex items-center space-x-2">
                <ScanSearch class="w-4 h-4" />
                <span>Taille apparente</span>
            </p>
            <div class="mt-3 flex items-center space-x-2">
                <span>De</span>
                <Input type="number" min="0" step="1" v-model="filters.altitude.value" />
                <span>à</span>
                <Input type="number" min="0" step="1" v-model="filters.altitude.value" />
            </div>
            <div class="mt-2 flex items-center space-x-2">
                <span>Unité</span>
                <SelectFilter :values="magUnits" v-model="filters.mag.unit" />
            </div>
            <div class="mt-2 flex items-center space-x-2">
                <Checkbox id="SizeAllMissing" />
                <label for="SizeAllMissing"
                    class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Inclure manquant
                </label>
            </div>

            <p class="mt-5 font-semibold flex items-center">
                <Sun class="w-4 h-4 mr-2" />
                <span>Luminosité de l'objet</span>
            </p>
            <div class="mt-3 flex items-center space-x-2">
                <span>De</span>
                <Input type="number" min="0" step="1" v-model="filters.altitude.value" />
                <span>à</span>
            </div>
            <div class="mt-2 flex items-center space-x-2">
                <Input type="number" min="0" step="1" v-model="filters.altitude.value" />
                <span>mag/arcsec²</span>
            </div>
            <div class="mt-2 flex items-center space-x-2">
                <Checkbox id="LuminosityAllMissing" />
                <label for="LuminosityAllMissing"
                    class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Inclure manquant
                </label>
            </div>
        </div>
        <div class="w-full px-8">
            <h3 class="scroll-m-20 text-2xl font-semibold tracking-tight">
                Résultats de recherche pour : {{ route.query.q }}
            </h3>
            <p class="text-sm text-muted-foreground mt-2">128 résultats (0.48 secondes)</p>

            <ResultCard v-for="i in 10" :key="i" title="M42 - Nébuleuse d'Orion"
                descriptors="Lever : 18h22 - Coucher : 2h15"
                img="https://telescopius.com/img/dsos/6ad5dfee4eda09255d9a7bd929b23df9_fullhd.webp">
                <Badge>
                    <Telescope :size="18" class="mr-2" />
                    NGC 1976
                </Badge>
                <Badge>
                    <Sparkles :size="18" class="mr-2" />
                    Orion
                </Badge>
                <Badge>
                    <Compass :size="18" class="mr-2" />
                    Sud
                </Badge>
                <Badge>
                    <Sun :size="18" class="mr-2" />
                    Mag : 4
                </Badge>
            </ResultCard>
        </div>
        <Map />
    </main>
</template>

