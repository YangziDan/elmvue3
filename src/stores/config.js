import {defineStore} from "pinia";
import {ref,computed} from "vue";
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
    // const getAge=computed(()=> stu.value.stuAge)
    // const  getDoubleAge=computed(()=>stu.value.stuAge*2)
    // function  resetPwd(newPwd){
    //     stu.value.stuPwd=newPwd
    // }
    // return{stu,getAge,getDoubleAge,resetPwd}
    return{business,businesses}
})
export const useUserStore=defineStore('user',()=>{
    const token=ref('')
    return{token}
})
