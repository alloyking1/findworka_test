<template>
    <div class="container text-center mt-4">
        <div class="card">
            <div class="card-body">
                <h1>All books</h1>
                <hr>
                <div>
                    <h3>Title: {{this.books.name}}</h3>
                    <!-- <h4 v-for='each in this.books.auth'>Author: {{each[0]}}</h4> -->
                    <h6>Author: {{this.books.authors}}</h6>
                    <h6>Comment Counts: testing</h6>

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
            books:{}
        }
    },

    created(){
        this.listBooks();
    },

    methods:{
        listBooks(){
            axios.get('/api/book/fetch')
            // axios.get('https://anapioficeandfire.com/api/books/1')
            .then(res => {
               console.log(res.data);
               this.books = res.data;
            })
            .catch(err => {
                console.log(err);
            })
        }
    }
}
</script>