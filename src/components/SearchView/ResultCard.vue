<script setup lang="ts">
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
</script>

<template>
    <Card class="w-[40rem] flex overflow-clip not:first:mt-0 my-3">
        <div class="w-72 aspect-video">
            <img src="https://picsum.photos/500/700" class="w-full h-full object-cover" alt="Object image">
        </div>
        <div>
            <CardHeader>
                <CardTitle>Card Title</CardTitle>
                <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent>
                Card Content
            </CardContent>
            <CardFooter>
                Card Footer
            </CardFooter>
        </div>
    </Card>
</template>