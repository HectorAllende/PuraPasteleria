import React from 'react';
import Image from 'gatsby-image'
import {css} from '@emotion/react'
import styled from '@emotion/styled';
import { Link } from 'gatsby';

const Boton = styled(Link)`
    margin-top: 2rem;
    padding: 1rem;
    background-color: #DECF11 ;
    width: 100%;
    color: #FFF;
    display: block;
    text-decoration: none;
    font-weight: 700;
    text-align: center;
    
`

const ProductoPreview = ({producto}) => {

    const {imagen, titulo, slug}= producto
  
  
    return (

        <div
            css={css`
            border: 1px solid #e1e1e1;
            margin-bottom: 2rem;
        `}
        >
            <Link to={slug}>
                <Image
                    fluid={imagen.fluid}
                    css={css`
                        width: auto;
                        height: 400px;
                    `}
                />
            </Link>


            <div>
                <h3
                    css={css`
                        font-family: 'Dancing Script', cursive;
                        text-align: center;
                        font-size: 3rem;
                    `}
                >{titulo}</h3>
                <Boton to={slug}>Dejate Tentar</Boton>

            </div>

        </div>
      );
}
 
export default ProductoPreview;