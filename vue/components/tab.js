/**
 * Created by heben.hb on 2017/8/7.
 */

import Vue from 'vue'

Vue.component('Tab', {
    //functional: true,
    methods: {
        handleClick(e){
            console.log("click");
            Array.from(document.querySelectorAll(".tab-item")).forEach(ele => {
                ele.classList.remove("active");
            });
            e.target.classList.add("active");
        }
    },
    render(h){
        let {defaultActive,num} = this;
        console.log(defaultActive,num,this);
        return(
            <div id="tab" onClick={this.handleClick}>
                {
                    new Array(num).fill(0).map((_,index) =>{
                        let active = index === defaultActive?"active":"";
                        let path = "/";
                        if(index) path = "path"+(index+1);
                        return(
                            <router-link to={path}>
                                <div class={"tab-item "+active}>Thdb{index+1}</div>
                            </router-link>
                        )
                    })
                }
            </div>
        )
    },
    props: {
        defaultActive:{
            type:Number,
            required:true
        },
        num:{
            type:Number,
            required:true
        }
    }
});