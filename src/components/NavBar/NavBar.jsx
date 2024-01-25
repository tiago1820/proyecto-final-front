import React, { useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom';
import Helpers from '../../Helpers/RoutesFront';
import StoreItem from '../../Helpers/LocalStorage';

function NavBar() {

    const location = useLocation()

    /* const handleLocalStorage = (bool) => {
        localStorage.setItem('isProvider',JSON.stringify(bool))
        console.log(localStorage.getItem('isProvider'))
    } */

    const isProvider = JSON.parse(localStorage.getItem(StoreItem.isProvider))
    const idUserLogged = JSON.parse(localStorage.getItem(StoreItem.idUserLogged))

    // 5 Opciones: Landing / AccessAccount / Cliente / Proveedor / Administrador
    return (
        <div>
            {
                location.pathname === Helpers.Landing && <NavLink to="/#">¿Como Funciona?</NavLink>
            }
            {
                location.pathname === Helpers.AccessAccount && <NavLink to="/">Volver</NavLink>
            }
            {
                isProvider && location.pathname !== Helpers.AccessAccount &&
                <div>
                    <NavLink to="#">Mis Estadisticas</NavLink>
                    <NavLink to="#">Mis Conexiones</NavLink>
                    <NavLink to="#">Mis Reportes</NavLink>
                    <NavLink to={Helpers.ProfileProveedorView.replace(':id', idUserLogged)}>Mi Perfil</NavLink>
                </div>
            }
            {
                !isProvider && location.pathname !== Helpers.AccessAccount &&
                <div>
                    <NavLink to="#">Ver Proveedores</NavLink>
                    <NavLink to="#">Mis Conexiones</NavLink>
                    <NavLink to="#">Mis Reportes</NavLink>
                    <NavLink to="#">Mi Perfil</NavLink>
                </div>
            }
        </div>
    )
}

export default NavBar