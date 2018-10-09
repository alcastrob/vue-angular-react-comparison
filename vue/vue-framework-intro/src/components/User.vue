<template>
    <div id="user">
        <h3>The user</h3>
        <p>My username is {{username}}</p>
        <app-info></app-info>
    </div>
</template>
<script>
    import Info from "./Info.vue";
    export default {
        data() {
            return { username: "Max" };
        },
        components: { "app-info": Info }
    };
</script>
<style>
    p {
    font-style: italic;
    }
</style>