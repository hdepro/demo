<template>
    <div id="app">
        <div id="header">
            <Tab v-bind:defaultActive="active" v-bind:num="3" />
        </div>
        <div id="content">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        let path = location.pathname;
        let active = 0;
        let match = /path(\d)/.exec(path);
        if(match){
            active = +match[1];
        }
        console.log("active : ",match,active);
        return {active};
    }
}
</script>

<style>
</style>