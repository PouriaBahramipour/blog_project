import Vue from 'vue'
import Vuex from 'vuex'
import Http from 'axios'
Vue.use(Vuex)
export const store = new Vuex.Store({
    state: {
        name:'',
        isSendingSuccessful: false
    },
    mutations:{
        dataSendingStatus(state, payload){
            state.isSendingSuccessful = payload.val
        },
        closeDialog(state, payload){
            state.isSendingSuccessful = payload.val
        }
    },
    actions: {
        addComment(context, payload){
            Http.post('https://blog-project-fab9b-default-rtdb.firebaseio.com/blog.json',payload)
            .then(respone => {
                if(respone){
                    context.commit('dataSendingStatus', {val:true})
                }
            })
            .catch(error => {
                if(error){
                    context.commit('dataSendingStatus', {val:false})
                }
            })
        },
        closeDialog(context){
            context.commit('closeDialog', {val:false})
        }
    },
    getters: {
        isSendingSuccessful(state){
            return state.isSendingSuccessful;
        }
    }
})

