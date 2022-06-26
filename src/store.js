import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state : {
        //isHard: true,
        //square: this.isHard ? 6 : 3,
        colorGanador: ""
    },

    actions : {
        getObtenerGanador({commit},colorGanador) {
            console.warn('actions -> createColor', colorGanador, new Date().toLocaleString())
            commit('obtenerGanador',colorGanador)
           
        },

        getColorsCuadrados({commit},array){
            commit('actualizarColorArray',array)
        },


         
    },
    mutations : {
        obtenerGanador(state, colorGanador) {
            console.warn('mutations -> crearColores', colorGanador, new Date().toLocaleString())
            state.colorGanador = colorGanador
        },

        actualizarColorArray(state,array){
            state.getColorsCuadrados= array
        },


       
        
    }
})