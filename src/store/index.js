import { createStore } from 'redux';
import reducers from '../reducers/index';
import { getCountries } from '../actions/actions-countries';
import DevTools from '../DevTools';

const store = createStore(
    reducers,
    DevTools.instrument()
    );

store.dispatch(getCountries());

export default store;