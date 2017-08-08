/**
 * Created by heben.hb on 2017/7/30.
 */

export function common1(){
    console.log("common1");
}

export function common2(){
    console.log("common2");
}

function common3(){
    console.log("common3");
}

export class CommonClass{
    constructor(a,b){
        this.a = a;
        this.b = b;
    }
    func1(){
        console.log("func1:",this.a);
    }
    func2(){
        console.log("func1:",this.b);
    }
}