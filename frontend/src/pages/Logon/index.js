import React from 'react'
import {Link, useHistory} from 'react-router-dom';
import './styles.css';
import {FiLogIn} from 'react-icons/fi'

import api from '../../services/api'

import herosImg from '../../assets/heroes.png';
import logoImg from '../../assets/logo.svg';

export default function Logon(){
    const [id, setId] = React.useState('');
    const history = useHistory();

    async function handleLogin(e){
        e.preventDefault();

        try{
            const response = await api.post('sessions', {id})
            console.log(response.data.name)
            localStorage.setItem('ongId', id)
            localStorage.setItem('ongName', response.data.name)

            history.push('/profile')
        }catch(err){
            alert('Falha no login tente novamente.')
        }
    }

    return(
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="Be The Hero"></img>
                <form onSubmit={handleLogin}>
                    <h1>Faça seu Login</h1>
                    <input placeholder="Sua ID" value={id} onChange={e => setId(e.target.value)}></input>
                    <button className="button"type="submit">Entrar</button>
                    <Link className="back-link"to="/register"><FiLogIn size={16} color="#E02041"></FiLogIn>Não tenho cadastro</Link>
                </form>
            </section>

            <img src={herosImg} alt="Heroes"></img>
        </div>
    );
}