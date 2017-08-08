<template>
    <div id="content1" v-on:click="handleClick">
        <h3>page1</h3>
        <div class="list">
            <li v-for="li in list">{{li}}</li>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {list:[]}
        },
        created(){
            fetch("/api/data").then((response)=>{
                console.log("fetch response : ",response);
                return response.json();
            }).then((json) => {
                console.log("fetch json : ",json);
                this.list = json.data;
            });
        },
        methods:{
            handleClick(){
                alert("page 1 click");
            }
        }
    }
</script>

<style>
    #content1{
        background:red;
    }
</style>