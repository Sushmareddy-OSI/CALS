import {takeLatest, put, call} from 'redux-saga/effects'
import {delay} from 'redux-saga'
import {fetchRequest} from '../helpers/http'
import {urlPrefixHelper} from '../helpers/url_prefix_helper.js.erb'
import {fetchDictionarySuccess, fetchFailure} from 'actions/searchActions'
import {SEARCH_DICTIONARIES_FETCH} from 'constants/actionTypes'

// worker saga: makes the api call when watcher saga sees the action
export function * fetchSearchDictionaries (action) {
  try {
    const url = '/search/search_dictionaries'
    const response = yield call(fetchRequest, url, 'GET')
    const data = yield call([response, response.json])
    yield put(fetchDictionarySuccess({countyTypes: data.countyTypes, facilityTypes: data.facilityTypes}))
  } catch (error) {
    yield put(fetchFailure(error))
  }
}

// watcher saga: watches for actions dispatched to the store, starts worker saga
export function * fetchSearchDictionariesSaga () {
  yield takeLatest(SEARCH_DICTIONARIES_FETCH, fetchSearchDictionaries)
}
