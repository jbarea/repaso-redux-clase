import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import moment from 'moment';
import {addTarjeta} from '../actions/tarjetas';

const propTypes = {
    tarjetas: PropTypes.arrayOf(PropTypes.object)
}

class Tarjetas extends Component {
    // componentDidMount(){//esto es para no tener que crear el constructor y mostrar por consola las props. Solo es paraejemplo
    //     console.log(this.props);
    // }
    state = {
        inputForm: {
            name: '',
            error: ''
        }
    }

    handleSubmit = (e)=>{
        e.preventDefault();

        if(this.state.inputForm.name !== ''){
            const name = this.state.inputForm.name;
            this.props.addTarjeta(name);
            this.setState(prevState => {
                return prevState.inputForm = {
                    ...prevState.inputForm,
                    name: '',
                    error: ''
                }
            })
        }else{
            this.setState(prevState => {
                return prevState.inputForm.error = 'No puedes crear una tarjeta sin nombre'
            })
        }
    }

    handleInput = (e)=>{
        e.preventDefault();

        const value = e.target.value;
        this.setState(prevState => {
            prevState.inputForm.name = value
            return prevState;
        })
    }

    render () {
        return (
            <div>
                <h2>Componente Tarjetas</h2>
                {
                    this.props.tarjetas.map(tarjeta=>{
                        return(
                            <p key={tarjeta._id}>
                                ID => {tarjeta._id}, 
                                Name => {tarjeta.name}, 
                                {moment(tarjeta.createdAt).format('DD-MM-YYYY')} => {tarjeta.createdAt}
                                <Link to={`/tarjetas/${tarjeta._id}`}>Ver tarjeta</Link>
                            </p>
                        )
                    })
                }
                <form onSubmit={this.handleSubmit}>
                    <label>Name</label>
                    <input 
                        type='text' 
                        onChange={this.handleInput}
                        value={this.state.inputForm.name}
                    />
                    <input 
                        type='submit' 
                        value='Enviar'
                    />
                    {   this.state.inputForm.error ? (
                        <p 
                            style={{color: 'red'}}>{this.state.inputForm.error}
                        </p>
                        ):null
                    }
                </form>
            </div>

        );
    };
}
Tarjetas.propTypes = propTypes;

const mapStateToProps = (state)=>{
    //console.log(state);
    return {
        tarjetas: state.tarjetas
    }
}

const mapDispatchToProps = (dispatch)=>{
    return({
        addTarjeta: (name) => dispatch(addTarjeta(name))
    })
}

//export default Tarjetas;
export default connect(mapStateToProps,mapDispatchToProps)(Tarjetas);