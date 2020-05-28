<template>
    <div class="container text-center mt-4">
        <h1>All books</h1>
        <div class="card">
            <div class="card-body" v-for="eachBook in books" :key="books.index">
                <hr>
                <div>
                    <router-link to='/add/comment/'><h3>Title: {{eachBook.name}}</h3></router-link>
                    <!-- <h3>Comment count: {{this.count}}</h3> -->
                    <h6>Author: {{eachBook.authors}}</h6>

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
                                <small>Created at:{{comment.created_at}}</small>
                                <small>poster Ip:{{comment.client_ip}}</small>
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
            character:{},
            readMoreActivated: false
        }
    },

    mounted(){
        this.listBooks();
    },

    methods:{

        /**
         * fetch books from endpont. 
         * @param URL
         * @return $response
         */

        listBooks(){
            axios.get('/api/book/fetch')
            .then(res => {
               this.books = res.data;    
                //call save book method
                this.saveBook(this.books);
            })
            .catch(err => {
                console.log(err);
            })
        },
        
        
        /**
         * Save books if not saved already. 
         * @param URL
         * @return $response
         */
        
        saveBook(books){
            for (let index = 0; index < books.length; index++) {
                const result = books[index];

                // save in db
                axios.post('api/book/save', {bookName:result.name, bookAuthor:result.authors})
                .then(res=> {
                    console.log(res)
                })
            }
            // save book if not existing already
            // axios.post('api/book/save', {bookVal:books})
            // .then(res=> {
            //     console.log(res.data)
            //     // fetch comments and count
            //     // this.commentCount(this.bookId.id)

            //     // //save character listing
            //     // this.charaterList(this.bookId.id, this.books.characters)

            //     // //fetch character list
            //     // this.fetchCharacterList(this.bookId.id)
            // })
        },

        /**
         * Save comment. 
         * @param URL
         * @return $response
         */
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


        /**
         * fetch comment and comment count. 
         * @param URL
         * @return $response
         */
        commentCount(postId){
            axios.get(`api/book/comment/fetch/count/${postId}`)
            .then(res=>{
                this.count = res.data[1]
                this.comments = res.data[0]
            })
        },


        /**
         * Save character list 
         * @param URL
         * @return $response
         */
        charaterList(postId, listing){
            axios.post(`api/book/add/characterlist/${postId}`,{
                character_url:listing,
                book_id:postId
            })
            .then(res => {
                console.log(res)
            })
        },


        /**
         * fetch character list . 
         * @param URL
         * @return $response
         */
        fetchCharacterList(postId){
            axios.get(`api/book/character/fetch/${postId}`)
            .then(res=>{
                this.character = res.data
            })
        },


        // activateReadMore(){
        //     this.readMoreActivated = true;
        // },
    },

    components:{
        Comment
    }
}
</script>