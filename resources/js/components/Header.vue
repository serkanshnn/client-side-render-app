<template>
    <!-- This example requires Tailwind CSS v2.0+ -->
    <div class="relative bg-white">
        <div class="absolute inset-0 shadow z-30 pointer-events-none" aria-hidden="true"></div>
        <div class="relative z-20">
            <div
                class="max-w-7xl mx-auto flex justify-between items-center px-4 py-5 sm:px-6 sm:py-4 lg:px-8 md:justify-start md:space-x-10">
                <div>
                    <a href="/" class="flex">
                        <span class="sr-only">Workflow</span>
                        <img class="h-8 w-auto sm:h-10"
                             src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="">
                    </a>
                </div>
                <div class="-mr-2 -my-2 md:hidden">
                    <button type="button"
                            class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                            aria-expanded="false"
                            @click="toggle">
                        <span class="sr-only">Open menu</span>
                        <!-- Heroicon name: outline/menu -->
                        <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                             stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                  d="M4 6h16M4 12h16M4 18h16"/>
                        </svg>
                    </button>
                </div>
                <div class="hidden md:flex-1 md:flex md:items-center md:justify-between">
                    <nav class="flex space-x-10">
                        <a href="/users" class="text-base font-medium text-gray-500 hover:text-gray-900">
                            Users
                        </a>
                    </nav>
                </div>
            </div>
        </div>

        <!--
          Mobile menu, show/hide based on mobile menu state.

          Entering: "duration-200 ease-out"
            From: "opacity-0 scale-95"
            To: "opacity-100 scale-100"
          Leaving: "duration-100 ease-in"
            From: "opacity-100 scale-100"
            To: "opacity-0 scale-95"
        -->
        <div class="absolute z-30 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden" v-show="isToggled">
            <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                <div class="pt-5 pb-6 px-5 sm:pb-8">
                    <div class="flex items-center justify-between">
                        <div>
                            <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                                 alt="Workflow">
                        </div>
                        <div class="-mr-2">
                            <button type="button"
                                    class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                                    @click="toggle">
                                <span class="sr-only">Close menu</span>
                                <!-- Heroicon name: outline/x -->
                                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                          d="M6 18L18 6M6 6l12 12"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div class="mt-6 sm:mt-8">
                        <nav>
                            <div class="grid gap-7 sm:grid-cols-2 sm:gap-y-8 sm:gap-x-4">
                                <a href="/users" class="-m-3 flex items-center p-3 rounded-lg hover:bg-gray-50">
                                    <div
                                        class="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white sm:h-12 sm:w-12">
                                        <!-- Heroicon name: outline/chart-bar -->
                                        <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none"
                                             viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                                        </svg>
                                    </div>
                                    <div class="ml-4 text-base font-medium text-gray-900">
                                        Users
                                    </div>
                                </a>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {ref} from "vue";

export default {
    name: "Header",
    setup() {
        const isToggled = ref(false);
        function toggle() {
            isToggled.value = !isToggled.value;
        }
        return { isToggled, toggle }
    }
}
</script>

<style scoped>

</style>
