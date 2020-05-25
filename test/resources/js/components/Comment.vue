<template>
    <div>

        <!-- Modal -->
        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Comments</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <h1>comments Count: 12</h1>
            </div>

            <div>
                <h4>add comment</h4>
                <div class="form-group">

                    <textarea placeholder="Enter comment" class="form-controll"></textarea>
                    <button>submit</button>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
            </div>
            </div>
        </div>
        </div>
        
    </div>
</template>

<script>
import axios from 'axios';
export default {
    props: {
        name: String,
        author: Array
    },
    data(){
        return {
            user:''
        }
    },

    created(){
        this.saveBook();
        console.log(name)
    },

    methods:{
        saveBook(){
            axios.post('api/book/save', {
                name:this.name,
                author:'tesint'
            })
            .then(res=> {
                console.log(res);
            })
            .catch(res => {
                console.log(res);
            })
        }
    }
}
</script>