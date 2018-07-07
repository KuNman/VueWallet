import ls from 'local-storage'
import router from 'src/router'
import { STORAGE_AUTH_TOKEN } from 'src/constants'
import api from 'src/services/api'

const state = {
  balance: 0,
  count: 0,
}

const getters = {
  balance: state => state.balance,
}


const mutations = {
  UPDATE_BALANCE: (state, data) => {
    data.forEach(value => state.balance += value.amount)
  },
}

const actions = {
  listTransactions({ commit }) {
    try {
      api.setHeader('x-auth-token', ls.get(STORAGE_AUTH_TOKEN))
      api.get('/transactions')
            .then((res) => {
              commit('UPDATE_BALANCE', res.data.data)
            })
    } catch (err) {
      throw err
    }
  },
}


export default {
  namespaced: 'auth',
  state,
  getters,
  mutations,
  actions,
}
