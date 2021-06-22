import React from 'react';
import {graphql, useStaticQuery} from 'gatsby'
import Image from 'gatsby-image'
import styled from '@emotion/styled'
import {css} from '@emotion/react'

const ContenidoNosotros = () => {

    const informacion= useStaticQuery(graphql`
    query{
        allDatoCmsPagina(filter:{slug:{eq: "nosotros"}}){
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
    max-width: 1400px;
    width: 100%;

    margin: 0 auto;

    @media (min-width:768px){
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        column-gap: 2rem;

    }
    p{
        line-height: 3;
        margin-left: 2rem;
        margin-right: 2rem;
        text-align: justify;
      
    }
`

// console.log(informacion.allDatoCmsPagina.nodes[0])

const { imagen, contenido}= informacion.allDatoCmsPagina.nodes[0]

    
   
   
    return ( 

        <>
    
       
        
        <TextoInicio>
            <p>{contenido}</p>
            <Image
                fluid={imagen.fluid}
                css={css`
                    margin-right: 1rem;
                    margin-left: 1rem;
                `}
            />
        </TextoInicio>
      
    </>
     );


}
 
export default ContenidoNosotros;