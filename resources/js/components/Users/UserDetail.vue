<template>
    <layout title="User">
        <div>
            <p>
                <b>Name:</b> {{ user.name }}
            </p>
            <p>
                <b>Email:</b> {{ user.email }}
            </p>
            <p>
                <b>Created At:</b> {{ formattedCreatedAt }}
            </p>
        </div>
    </layout>

</template>

<script>
import moment from "moment";

export default {
    props: {
        user: {
            required: true,
            type: Array
        }
    },
    computed:{
        formattedCreatedAt(props) {
            return moment(props.user.created_at).format('MM DD YYYY, h:mm:ss')
        }
    }
}
</script>

<style scoped>

</style>
