import React from 'react';
import {css} from '@emotion/react'
import styled from '@emotion/styled';
import Navegacion from './navegacion';
import { Link } from 'gatsby';


const EnlaceHome = styled(Link)`
   color: #FFF;
    text-align: center;
    text-decoration: none;
`


const Footer = ({siteName}) => {
    const year = new Date().getFullYear()
    return ( 
        <>

            <footer
                css={css`
                background-color: #C62F68 ;
                padding: 0.2rem;
                margin-top: 5rem;
            `}
            >

                <div
                    css={css`
                    max-width: 1200px;
                    margin:0 auto;

                    @media (min-width: 768px){
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                    }
                `}
                >

                    <Navegacion />
                    <EnlaceHome to="/">
                        <h1
                            css={css`
                        color: #FFF;
                        text-align: center;
                        font-family: 'Dancing Script', cursive;
                    `}
                        >Pura Pastelería</h1>
                        
                    </EnlaceHome>

                    <p
                        css={css`
                            color: #FFFF;
                            text-align: center;
                        `}
                        
                    >Llamanos o escribinos al: 3544-621904</p>
                    
                </div>
            </footer>
        
        <p
            css={css`
                text-align: center;
                color: #fff;
                background-color: #DD1661 ;
                margin:0;
                padding: 0.5rem;
                font-size: 1.5rem;
            `}
        >{siteName}. Hecho con ❤ desde Mina Clavero, Córdoba-Argentina. Todos los derechos Reservados &copy; {year} </p>

        </>
        
     );
}
 
export default Footer;