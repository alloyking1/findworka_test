<template>
    <div class="container text-center mt-4">
        <div class="card">
            <div class="card-body">
                <h1>All books</h1>
                <hr>
                <div>
                    <router-link to='/add/comment/'><h3>Title: {{this.books.name}}</h3></router-link>
                    <h3>Comment count: {{this.count}}</h3>
                    <h6>Author: {{this.books.authors}}</h6>
                    <h6>Comment Counts: testing</h6>

                </div>

                <hr> 
                <div class="form-group">
                    <label for="exampleFormControlTextarea1">Please comment</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" v-model="comment"></textarea>
                </div>
                <button type="button" class="btn btn-primary btn-lg btn-block" @click="saveComment(bookId)">Comment</button>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data(){
        return {
            books:{},
            comment:'',
            bookId:'',
            count:''
        }
    },

    mounted(){
        this.listBooks();
    },

    methods:{
        listBooks(){
            axios.get('/api/book/fetch')
            .then(res => {
               this.books = res.data;
               // save book if not existing already
                axios.post('api/book/save', {
                    name:this.books.name,
                    author:this.books.authors
                })
                .then(res=> {

                    // fetch comments and count
                    this.bookId = res.data
                    this.commentCount(this.bookId.id)
                })
            })
            .catch(err => {
                console.log(err);
            })
        }, 

        saveComment(bookId){
            if(this.comment === ""){
                alert('Comment field cannot be empty')
            }else{

                axios.post(`api/book/add/comment/${bookId}`, {
                    comment_body:this.comment,
                    book_id:bookId
                })
                .then(res=> {
                    alert('comment saved');
                })   
            }
           
        },

        commentCount(postId){
            axios.get(`api/book/comment/fetch/count/${postId}`)
            .then(res=>{
                console.log(res)
                this.count = res.data[1]
            })
        }
    },

    components:{
        Comment
    }
}
</script>