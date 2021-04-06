<template>
    <div>
        <Header></Header>
        <main class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <slot></slot>
        </main>
    </div>
</template>

<script>
import Header from "./Header";

export default {
    props: {
        title: {
            required: true,
            type: String
        }
    },
    components: {
        Header
    },
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
