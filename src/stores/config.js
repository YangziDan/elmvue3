import {defineStore} from "pinia";
import {ref, computed, inject} from "vue";
import {useRouter} from "vue-router";
import cookie from "vue-cookies";
import axios from "axios";
export const useBusinessStore=defineStore('business',()=>{
    const business=ref(new Object())
    // const business=ref({
    //     'businessId':"",
    //     'businessName':"商家名字",
    //     'businessAddress':"商家地址",
    //     'businessExplain':"商家简介",
    //     'businessImg':"",
    //     'starPrice':17.5, //起送费
    //     'deliveryPrice':3.1,//配送费
    // })
    const businesses=ref(new Array())
    const foods=ref(new Array())
    // const getAge=computed(()=> stu.value.stuAge)
    // const  getDoubleAge=computed(()=>stu.value.stuAge*2)
    // function  resetPwd(newPwd){
    //     stu.value.stuPwd=newPwd
    // }
    // return{stu,getAge,getDoubleAge,resetPwd}
    return{business,businesses,foods}
})
export const useUserStore=defineStore('userStore',()=>{
    let baseUrl=inject('baseUrl')
    let user=ref(Object())
    function checkLogin(){
        if(!isLogin()){
            let router=useRouter();
            router.push({
                path:'/login'
            })
            return false
        }
        return true
    }
    function isLogin(){
        let token=cookie.get('token')
        if(token==null||token==''){
            return false
        }
        console.log('isLogin() : token is :'+token)
        return true
    }
    return{isLogin,checkLogin,user}
})
