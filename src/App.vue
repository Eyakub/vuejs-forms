<template>
    <div class="container">
        <div class="col-xs-12">
            <h1>Add Blog Post</h1>
            <form>
                <div class="form-group">
                    <label for="title">Title</label>
                    <input type="text" class="form-control" id="title" v-model="post.title">
                </div>

                <div class="form-group">
                    <label for="title">Content</label>
                    <textarea type="text" class="form-control" id="content" cols="30" rows="10" v-model="post.content"></textarea>
                </div>

                <div class="form-group">
                    <input type="checkbox" id="publish-immediately" v-model="post.publishImmediately" true-value="immediately" false-value="later">
                    <label for="publish-immediately">Publish Immediately</label>
                </div>

                <div class="form-group">
                    <label>Share On</label>
                    <div v-for="media in formData.socialMedia" :key="media">
                        <input type="checkbox" name="media" :id="media" :value="media" v-model="post.shareOn">
                        <label :for="media">{{ media }}</label>
                    </div>
                </div>
            </form>
            <hr>
            <table class="table table-stripped">
                <thead>
                    <tr>
                        <td class="col-xs-6"><strong>Field</strong></td>
                        <td class="col-xs-6"><strong>Value</strong></td>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Title</td>
                        <td>{{ post.title }}</td>
                    </tr>
                    <tr>
                        <td>Content</td>
                        <td style="white-space: pre;"> {{ post.content }}</td>
                    </tr>
                    <tr>
                        <td>Publish immediately</td>
                        <td>{{ post.publishImmediately }}</td>
                    </tr>
                    <tr>
                        <td>Share on</td>
                        <td>
                            <ul>
                                <li v-for="media in post.shareOn" :key="media">{{ media }}</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td>Category</td>
                        <td>{{ post.category }}</td>
                    </tr>
                    <tr>
                        <td>Series</td>
                        <td>{{ post.series }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>


export default {
    data(){
        return {
            post:{
                title: '',
                content: '',
                publishImmediately: false,
                shareOn: [],
                category: '',
                series: '',
            },
            formData:{
                socialMedia: ['Facebook', 'Twitter'],
                categories: ['Frontend', 'Backend'],
                series: [
                    'vue.js: From beginner to professional',
                    'Complete guide to elasticsearch',
                ]
            }
        };
    }
}
</script>

<style>
    input[type="radio"] + label,
    input[type="checkbox"] + label {
        font-weight: normal;
    }
</style>


