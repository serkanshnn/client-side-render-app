<template>
    <layout title="Edit User">
        <h1>Create user</h1>
        <form class="mt-4" @submit.prevent="submit" style="max-width: 500px;">
            <div class="mb-3">
                <label class="text-xl text-gray-600">Name:</label>
                <input type="text" class="border-2 border-gray-300 p-2 w-full" name="name" v-model="form.name">
                <div class="text-danger" v-if="errors.has('name')">
                    {{ errors.first('name') }}
                </div>
            </div>
            <div class="form-group">
                <label>Email:</label>
                <input class="form-control" type="email" v-model="form.email">
                <div class="text-danger" v-if="errors.has('start_date')">
                    {{ errors.first('email') }}
                </div>
            </div>
            <div class="form-group">
                <label>Password:</label>
                <input class="form-control" type="password" v-model="form.password">
                <div class="text-danger" v-if="errors.has('description')">
                    {{ errors.first('password') }}
                </div>
            </div>
            <button class="btn btn-primary" type="submit">Create</button>
        </form>
    </layout>
</template>

<script>
import axios from 'axios'
import { Errors } from 'form-backend-validation';
import {ref} from "vue";

export default {
    setup() {
        const form = ref({
            name: null,
            email: null,
            password: null,
        });
        const errors = new Errors();
        function submit() {
            axios.post('/users', this.form).then(response => {
                console.log("congrats");
            }).catch((error) => {
                this.errors = new Errors(error.response.data.errors)
            });
            form.value.name = '';
            form.value.email = '';
            form.value.password = '';
        }

        return {form, errors, submit};
    },
}
</script>

<style scoped>

</style>
