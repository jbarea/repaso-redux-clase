import { createStore, combineReducers} from 'redux';
import {tarjetasReducer} from '../reducers/tarjetas';
import uuid from 'uuid';
import moment from 'moment';

const exampleInitialStore = {
    tarjetas: [
        {
            _id: uuid(),
            name: 'Curso Redux',
            createdAt: moment().add(-2,'day').valueOf()
        },
        {
            _id: uuid(),
            name: 'Curso MongoDB',
            createdAt: moment().add(-1,'year').valueOf()
        }
    ]
}

export default (initialState = exampleInitialStore) => {
    const store = createStore(
        combineReducers({
           tarjetas: tarjetasReducer
        }),
        initialState,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

        )
        return store;
}