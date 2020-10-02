<template>
    <div>
        <edit-profile-form />
        <br><br>
        <delete-profile-form />
    </div>
</template>

<script>
import EditProfileForm from "../components/EditProfileForm.vue"
import DeleteProfileForm from "../components/DeleteProfileForm.vue"
    export default {
        name: "edit-page",
        components: {
            EditProfileForm,
            DeleteProfileForm,
        }
    }
</script>

<style lang="sass" scoped>

</style>