<template>
    <div class="container text-center mt-4">
        <div class="card">
            <div class="card-body">
                <h1>All books</h1>
                <hr>
                <div>
                    {{this.books}}
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