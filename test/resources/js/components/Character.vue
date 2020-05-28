<template>
    <div>

        <div class="row mb-5">
            <div class="container">

                <div class="card p-5 mt-5">
                    <small>Enter value to sort character list</small>

                    <div class="col-md-12">

                        <input type="text" v-model="search" class="form-control mb-4" placeholder="enter sort value">
                        <button type="button" class="btn btn-primary btn-lg btn-block" @click="sortRequest()">Comment</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="container">
                <div class="col-md-12">

                    <div class="card">
                        <div v-for="eachList in allList" :key="allList.index" class="p-3">
                            <h3 >{{eachList.aliases}}</h3>
                            <h5><span>Gender:</span> {{eachList.gender}}</h5>
                            <h5><span>Culture:</span> {{eachList.culture}}</h5>
                            <h5><span>Allegiances:</span> {{eachList.allegiances}}</h5>
                            <h5><span>books:</span> {{eachList.books}}</h5>
                            <h5><span>tvSeries:</span> {{eachList.tvSeries}}</h5>
                            <h5><span>playedBy:</span> {{eachList.playedBy}}</h5>
                            <!-- {{eachList}} -->
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
            search:'',
            allList:{}
        }
    },

    created(){
        this.fetchCharacter();
    },

    methods:{
        fetchCharacter(){
            axios.get('api/book/fetch/characterlist/')
            .then(res=> {
                this.allList=res.data
            })
            .catch(res => {
                console.log(res);
            })
        },

        sortRequest(){
            console.log('testing')
        }
    }
}
</script>