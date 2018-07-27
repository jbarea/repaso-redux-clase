export const findById = (state,id) => {
    return state.tarjetas.filter(tarjeta => {
        const isSameId = tarjeta._id === id;

        return isSameId;
    })[0]
}