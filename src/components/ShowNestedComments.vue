<template>
    <div>
        <button v-if="showNested == false" @click="getNested()">Show more Comments</button>
        <button v-if="showNested == true" @click="showNested = false">&times;</button>
        <div class="comments" v-if="showNested == true">
            <div v-for="comment in comments" :key="comment.nestedCommentId">
                <p>{{ comment.content }}</p>
                <edit-nested-comments :commentId="comment.nestedCommentId" :userId="comment.userId"> </edit-nested-comments>
                <delete-nested-comments :commentId="comment.nestedCommentId" :userId="comment.userId"> </delete-nested-comments>

            </div>
        </div>

    </div>
</template>

<script>
import axios from 'axios'
import EditNestedComments from '../components/EditNestedComments'
import DeleteNestedComments from '../components/DeleteNestedComments.vue'

    export default {
        name: "show-nested-comments",
        props: {
            commentId: Number
        },
        data() {
            return {
                comments: [],
                showNested: false,
            }
        },
        components: {
            EditNestedComments,
            DeleteNestedComments,
        },
        methods: {
            getNested: function() {
                this.showNested = true
                axios.request({
                    method: "GET",
                    url: "http://127.0.0.1:5000/api/nested-comments",
                    params: {
                        commentId: this.commentId
                    }
                }).then((response) => {
                    this.comments = response.data
                }).catch((error) => {
                    console.log(error)
                })
            }
        },
    }
</script>

<style lang="sass" scoped>

</style>