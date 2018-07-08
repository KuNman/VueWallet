import ls from 'local-storage'
import { STORAGE_AUTH_TOKEN } from 'src/constants'
import api from 'src/services/api'

const state = {
  balance: 0,
  transactions: {
    out: [],
    in: [],
    all: [],
  },
  tab: 'all',
}

const getters = {
  balance: state => state.balance,
  tab: state => state.tab,
  transactions: state => state.transactions,
}


const mutations = {
  UPDATE_BALANCE: (state, data) => {
    data.forEach(value => state.balance += value.amount)
  },
  FILTER_TRANSACTIONS: (state, data) => {
    data.filter(item => item.amount >= 0 ? state.transactions['in'].push(item) : state.transactions['out'].push(item))
    data.forEach(item => state.transactions['all'].push(item))
  },
  TAB: (state, data) => {
    state.tab = data
  }
}

const actions = {
  async listTransactions({ commit }) {
    try {
        api.setHeader('x-auth-token', ls.get(STORAGE_AUTH_TOKEN))
        api.get('/transactions')
          .then((res) => {
            commit('UPDATE_BALANCE', res.data.data)
            commit('FILTER_TRANSACTIONS', res.data.data)
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
