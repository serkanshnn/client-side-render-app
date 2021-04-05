<template>
    <layout title="Users">
        <h1>Users</h1>
        <ul class="mt-5">
            <li v-for="user in users">
                <a :href="`/users/${user.id}`">{{ user.name }}</a> <span>({{ user.email }})</span>
            </li>
        </ul>
        <div class="mt-5">
            <a class="btn btn-primary" href="/users/create">Create user</a>
        </div>
    </layout>
</template>

<script>
export default {
    props: {
        users: {
            required: true,
            type: Array
        }
    },
}
</script>

<style scoped>

</style>
