import React from 'react';
import {graphql, useStaticQuery} from 'gatsby'
import Image from 'gatsby-image'
import styled from '@emotion/styled'
import {css} from '@emotion/react'

const ContenidoInicio = () => {

    const informacion= useStaticQuery(graphql`
    query{
        allDatoCmsPagina(filter:{slug:{eq: "inicio"}}){
            nodes{
                titulo
                contenido
                imagen{
                    fluid{
                        ...GatsbyDatoCmsFluid
            }
          }
        }
      }
    }

    `)

    const TextoInicio = styled.div`
    padding-top: 4rem;
    max-width: 800px;
    width: 95%;
    margin: 0 auto;
    text-align: justify;

    @media (min-width:768px){
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        column-gap: 2rem;

    }
    p{
        line-height: 3;
      
    }
`

// console.log(informacion.allDatoCmsPagina.nodes[0])

const { imagen, contenido}= informacion.allDatoCmsPagina.nodes[0]

    
   
   
    return ( 

        <>
        
       
        
        <TextoInicio>
            <p
                css={css`
                    font-size: 2.5rem;
                `}
            >{contenido}</p>
            <Image
                fluid={imagen.fluid}
            />
        </TextoInicio>
       
    </>
     );


}
 
export default ContenidoInicio;