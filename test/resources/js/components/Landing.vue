<template>
    <div class="container text-center mt-4">
        <div class="card">
            <div class="card-body">
                <h1>All books</h1>
                <hr>
                <div>
                    <router-link to='/add/comment/'><h3>Title: {{this.books.name}}</h3></router-link>
                    <h3>Title: {{this.books.isbn}}</h3>
                    <h6>Author: {{this.books.authors}}</h6>
                    <h6>Comment Counts: testing</h6>

                    <!-- Button trigger modal -->
                    <!-- <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                    Comments
                    </button> -->
                </div>

                <hr> 
                <div class="form-group">
                    <label for="exampleFormControlTextarea1">Please comment</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" v-model="comment"></textarea>
                </div>
                <button type="button" class="btn btn-primary btn-lg btn-block" @click="saveBook">Comment</button>
            </div>
        </div>
        <!-- <comment :name="books.name" :author="books.authors"></comment> -->
    </div>
</template>

<script>
import axios from 'axios';
import Comment from './Comment';

export default {
    data(){
        return {
            books:{},
            comment:''
        }
    },

    created(){
        this.listBooks();
    },

    methods:{
        listBooks(){
            axios.get('/api/book/fetch')
            .then(res => {
            //    console.log(res.data);
               this.books = res.data;
            })
            .catch(err => {
                console.log(err);
            })
        }, 

        saveBook(){
            axios.post('api/book/save', {
                name:this.books.name,
                author:this.books.authors
            })
            .then(res=> {
                console.log(res);
            })
            .catch(res => {
                console.log(res);
            })
        }
    },

    components:{
        Comment
    }
}
</script>