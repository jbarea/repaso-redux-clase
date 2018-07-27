import React from 'react';
import { connect } from 'react-redux';
import {findById as FindTarjetaById} from '../filters/tarjetas'; //le ponemos un alias a la funcion findById

export const UnaTarjeta = (props) => {
    const {id} = props.match.params;
    return (
        <div>
            Estamos viendo la tarjeta por id: {id}
            <h2>
            {props.tarjeta.name ? (props.tarjeta.name): (<div style={{color: 'red'}}>NO EXISTE LA TARJETA</div>)}
            </h2>
        </div>
    )
}

const mapStateToProps = (state,props) => {
    const {id} = props.match.params;
    const tarjeta = FindTarjetaById(state,id) || {name: undefined};
    console.log(tarjeta)
    return {
        tarjeta
    }
}

export default connect(mapStateToProps)(UnaTarjeta);
