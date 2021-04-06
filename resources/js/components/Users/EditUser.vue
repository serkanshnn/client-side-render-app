<template>
    <layout title="Edit User">
        <form class="space-y-8 divide-y divide-gray-200" @submit.prevent="save">
            <div class="space-y-8 divide-y divide-gray-200 sm:space-y-5">

                <div class="pt-8 space-y-6 sm:pt-10 sm:space-y-5">
                    <div>
                        <h3 class="text-lg leading-6 font-medium text-gray-900">
                            Edit User
                        </h3>
                    </div>
                    <div class="space-y-6 sm:space-y-5">
                        <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                            <label for="name" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                Name
                            </label>
                            <div class="mt-1 sm:mt-0 sm:col-span-2">
                                <input type="text" name="name" id="name" v-model="form.name" autocomplete="given-name" class="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md">
                                <div class="text-red-600" v-if="errors.has('name')">
                                    {{ errors.first('name') }}
                                </div>
                            </div>

                        </div>

                        <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                            <label for="email" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                Email address
                            </label>
                            <div class="mt-1 sm:mt-0 sm:col-span-2">
                                <input id="email" name="email" type="email" v-model="form.email" autocomplete="email" class="block max-w-lg w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md">
                                <div class="text-red-600" v-if="errors.has('email')">
                                    {{ errors.first('email') }}
                                </div>
                            </div>
                        </div>

                        <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                            <label for="password" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                Password
                            </label>
                            <div class="mt-1 sm:mt-0 sm:col-span-2">
                                <input id="password" name="password" type="password" v-model="form.password" class="block max-w-lg w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md">
                                <div class="text-red-600" v-if="errors.has('password')">
                                    {{ errors.first('password') }}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="pt-5">
                <div class="flex justify-end">
                    <a href="/users" class="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Cancel
                    </a>
                    <button type="submit" class="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Save
                    </button>
                </div>
            </div>
        </form>

    </layout>
</template>

<script>
import {ref} from "vue";
import { Errors } from 'form-backend-validation';
import axios from "axios";

export default {
    props: {
        user: {
            required: true,
            type: Array
        }
    },
    setup(props) {
        const form = ref({
            name: props.user.name,
            email: props.user.email,
            password: null,
        });

        const errors = ref(new Errors());

        function save() {
            axios.put('/users/' + props.user.id, form.value).then(response => {
                console.log("congrats");
            }).catch(error => {
                errors.value = new Errors(error.response.data.errors)
            });
        }
        return { form, save, errors };
    }
}
</script>

<style scoped>

</style>
