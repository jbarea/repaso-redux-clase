import uuid from 'uuid';
import moment from 'moment';

export const actionTypes = {
    ADD: 'ADD_TARJETA'
}

export const addTarjeta = (name) => {
    return {
        type: actionTypes.ADD,
        tarjeta: {
            name,
            _id: uuid(),
            createdAt: moment.now()
        }
    }
}