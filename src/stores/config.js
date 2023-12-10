import {defineStore} from "pinia";
import {ref,computed} from "vue";
export const useBusinessStore=defineStore('user',()=>{
    const business=ref({
        'businessId':"",
        'businessName':"商家名字",
        'businessAddress':"商家地址",
        'businessExplain':"商家简介",
        'businessImg':"",
        // 'orderTypeId':123456,
        'starPrice':17.5, //起送费
        'deliveryPrice':3.1,//配送费
        // 'remarks':""
    })
    const businesses=ref(new Array())
    // const getAge=computed(()=> stu.value.stuAge)
    // const  getDoubleAge=computed(()=>stu.value.stuAge*2)
    // function  resetPwd(newPwd){
    //     stu.value.stuPwd=newPwd
    // }
    // return{stu,getAge,getDoubleAge,resetPwd}
    return{business,businesses}
})
