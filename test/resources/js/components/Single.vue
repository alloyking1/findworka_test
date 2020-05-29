<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col-md-12 p-5">
                    <div class="card p-5">
                        <div class="p-5 text-center">
                            <h3>Title: {{this.singleBook.name}}</h3>
                            <h6>Author: {{this.singleBook.author}}</h6>
                        </div>
                        <hr> 
                        <div class="form-group">
                            <div class="row text-center p-7">

                                <div class="col-md-12">

                                    <h3 class="text-center">All Comments</h3>
                                    <h5>Comments count: {{comments.length}}</h5>
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
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" v-model="commentText"></textarea>
                        </div>
                        <button type="button" class="btn btn-primary btn-lg btn-block" @click="saveComment($route.params.id)">Comment</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            singleBook:{},
            comments:{},
            commentText:''
        }
    },

    mounted(){
        var id = this.$route.params.id
        this.singBook(id);
    },

    methods:{
        /**
         * Fetch a single book from database. 
         * @param URL
         * @return $response
         */
        singBook(id){
            axios.get(`api/book/get/single/${id}`)
            .then(res => {
                this.singleBook = res.data[1]
                this.comments = res.data[0]
            })
        },

        
        /**
         * Save comment. 
         * @param URL
         * @return $response
         */
        saveComment(bookId){
            if(this.commentText === ""){
                alert('Comment field cannot be empty')
            }else{

                axios.post(`api/book/add/comment/${bookId}`, {
                    comment_body:this.commentText,
                    book_id:bookId
                })
                .then(res=> {
                    alert('comment saved');
                })   
            }
           
        },
    }
}
</script>