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

                </div>

                <hr> 
                <div class="form-group">
                    <div class="row ">

                        <div class="col-md-12">

                            <h3 class="text-center">All Comments</h3>
                        </div>
                        <div class="col-md-12" v-for="comment in comments" :key="comments.index">
                            <div class="card">
                                <p>{{comment.comment_body}}</p>
                                <small>{{comment.created_at}}</small>
                            </div>
                            <br>
                        </div>
                    </div>
                    <label for="exampleFormControlTextarea1 mt-5">Please comment</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" v-model="comment"></textarea>
                </div>
                <button type="button" class="btn btn-primary btn-lg btn-block" @click="saveComment(bookId.id)">Comment</button>
            </div>
        </div>
        <br>

        <div class="card">
            <div class="card-head">
                <h3>Character List</h3>
            </div>
            <div class="card-body">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12" v-for="each in character" :key="character.index">
                            {{each.character_url}}
                            <hr>
                        </div>
                    </div>
                </div>
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
            count:'',
            comments:{},
            character:{}
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

                    //save character listing
                    this.charaterList(this.bookId.id, this.books.characters)

                    //fetch character list
                    this.fetchCharacterList(this.bookId.id)
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
                this.count = res.data[1]
                this.comments = res.data[0]
            })
        },

        charaterList(postId, listing){
            axios.post(`api/book/add/characterlist/${postId}`,{
                character_url:listing,
                book_id:postId
            })
            .then(res => {
                console.log(res)
            })
        },

        fetchCharacterList(postId){
            axios.get(`api/book/character/fetch/${postId}`)
            .then(res=>{
                this.character = res.data
            })
        }
    },

    components:{
        Comment
    }
}
</script>