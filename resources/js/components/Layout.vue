<template>
    <div class="container">
        <nav class="my-5">
            <a class="mr-3" href="/">Users</a>
        </nav>
        <main>
            <slot></slot>
        </main>
    </div>
</template>

<script>
export default {
    props: ['title'],
    mounted() {
        this.updatePageTitle(this.title)
    },
    watch: {
        title(title) {
            this.updatePageTitle(title)
        }
    },
    methods: {
        updatePageTitle(title) {
            document.title = title ? `${title} | Example app` : `Example app`
        }
    },
}
</script>
