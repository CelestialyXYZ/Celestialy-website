<script setup lang="ts">
import { useRouter } from 'vue-router'

import { Input } from '@/components/ui/input'
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'
import { Button } from '@/components/ui/button'

import { Search } from 'lucide-vue-next'
import logo from './MainLogo.vue'

const router = useRouter()
</script>

<template>
    <nav class="px-7 pt-5 flex justify-between">
        <div class="inline-flex items-center">
            <logo class="h-6 w-36 cursor-pointer" alt="Logo de Celestialy" @click="router.push({ name: 'home' })" />
            <div class="relative inline-flex w-56 ml-7 items-center">
                <Input id="search" type="text" placeholder="Recherche"
                    @keyup.enter="router.push({ name: 'search', query: { q: $event.target.value } })" class="pl-10" />
                <span class="absolute start-0 inset-y-0 flex items-center justify-center px-2">
                    <Search class="size-6 text-muted-foreground" />
                </span>
            </div>
        </div>

        <div class="inline-flex">
            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>Prévisions</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <NavigationMenuLink>Les prévisions...</NavigationMenuLink>
                        </NavigationMenuContent>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <NavigationMenuTrigger>Objets</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <NavigationMenuLink>Link</NavigationMenuLink>
                        </NavigationMenuContent>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <NavigationMenuTrigger>Outils</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <NavigationMenuLink>Link</NavigationMenuLink>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>

            <Button class="ml-5">Connexion</Button>
        </div>
    </nav>
</template>