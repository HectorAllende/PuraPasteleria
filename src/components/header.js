import React from 'react';
import {css} from '@emotion/react'
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import Navegacion from './navegacion';

const EnlaceHome = styled(Link)`
   color: #FFF;
    text-align: center;
    text-decoration: none;
`

const Header = () => {

    return ( 

        <header
            css={css`
                background-color: #EC0C61 ;
                padding: 1rem;
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
         
                <EnlaceHome to="/">
                    <h1
                        css={css`
                        color: #FFF;
                        text-align: center;
                        font-family: 'Dancing Script', cursive;
                    `}
                    >Pura Pastelería</h1>
                </EnlaceHome>

                <Navegacion/>
            </div>
        </header>
     );
}
 
export default Header;