<template>
    <div class="container text-center mt-4">
        <h1>All books</h1>
        <div class="card">
            <div class="card-body" v-for="eachBook in books" :key="books.index">
                <hr>
                <div>
                    <router-link :to="{ path: '/post/comment/'+eachBook.id}"><h3>Title: {{eachBook.name}}</h3></router-link>
                    <h6>Author: {{eachBook.author}}</h6>

                </div>
                
            </div>
        </div>
        <br>
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
        this.allBooks();
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
                })
            }
        },


        /**
         * get save books from db
         */
        allBooks(){
            axios.get('api/book/get/all')
            .then(res => {
                this.books = res.data
            })
        },



    },

    components:{
        Comment
    }
}
</script>