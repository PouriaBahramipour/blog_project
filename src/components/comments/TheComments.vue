<template>
<div class="mt-5">
    <base-dialog v-if="isSendingSuccessful" title="Success">
        <template #default>
            <p>Your comment was sent successfully.</p>
            <!-- <p>Please check all inputs and make sure you enter at least a few characters into each input field.</p> -->
        </template>
        <template #actions>
            <button @click="closeDialog">Okay</button>
        </template>
    </base-dialog>
    <div class="comments container-md mt-5" v-scrollanimation>
        <div id="respond" class="comment-respond">
            <h3 id="reply-title" class="comment-reply-title">what is your opinion?</h3>
            <form class="comment-form" @submit.prevent="addComment">
                <p class="comment-notes">Your email address will not be published. Required fields are marked *</p>
                <div class="row comment-form-comment">
                    <div>
                        <textarea class="form-control" value="commentText" placeholder="Comment text*" name="comments" id="comment-textarea" cols="35" rows="6" aria-required="true" v-model="commentText"></textarea>
                    </div>
                    <div class="col2">
                        <input type="text" placeholder="Your Name*" class="form-control" value="name" v-model="name">
                        <input type="email" placeholder="Your Email*" class="form-control" value="email" v-model="email">
                        <input type="text" placeholder="where is the capital of Iran*" class="form-control" value="question" v-model="question">
                    </div>

                </div>
                <div class="submit">
                    <base-button>Send Comment</base-button>
                </div>
            </form>
        </div>
    </div>

</div>
</template>

<script>
export default {
    data() {
        return {
            commentText: '',
            name: "",
            email: "",
            question: ""
        }
    },
    methods: {
        addComment() {
            this.$store.dispatch({
                type: 'addComment',
                commentText: this.commentText,
                name: this.name,
                email: this.email,
                question: this.question
            })
        },
        closeDialog() {
            this.$store.dispatch({
                type: 'closeDialog'
            })
        }
    },
    computed: {
        isSendingSuccessful() {
            return this.$store.getters.isSendingSuccessful;
        }
    }

}
</script>
<style scoped>
.before-enter {
    opacity: 0;
    transform: translateY(100px);
    transition: all 2s ease-out;
}

.enter {
    opacity: 1;
    transform: translateY(0px);
}
</style>