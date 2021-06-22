import React from 'react';
import {graphql} from 'gatsby'
import Layout from './layout';
import Image from 'gatsby-image'
import {css} from '@emotion/react'

export const query= graphql`
query($slug: String){
	allDatoCmsStock(filter:{slug:{eq: $slug}}){
		nodes{
			titulo
      contenido
      precio
      porciones
      imagen{
				fluid(maxWidth:1200){
                    ...GatsbyDatoCmsFluid
        }
      }
    }
  }
}

`

const ProductoTemplate = ({data}) => {
    const {titulo, contenido, imagen, precio, porciones}= data.allDatoCmsStock.nodes[0]
    return (
        <Layout>
            <main
                css={css`
                    margin: 0 auto;
                    max-width: 700px;
                    width: 95%;
                  
              
               `}
            >
                <h1
                    css={css`
                        text-align: center;
                        margin-top: 2rem;
                        font-family: 'Dancing Script', cursive;
                        
                    `}
                >{titulo}</h1>

                <div
                    css={css`
                          @media (min-width:768px){
                          display: grid;
                          grid-template-columns: repeat(2, 1fr);
                          column-gap: 2rem;

                         }
                    `}
                >
                    <div>
                        <p>{contenido}</p>
                        <p>Rinde: {porciones}</p>
                        <p>Precio: <span
                            css={css`
                    font-weight: bold ;
                 `}>{precio}</span> </p>

                    </div>

                    <div>
                        <Image
                            fluid={imagen.fluid}
                        />


                    </div>
                 
                
                    

                </div>


            </main>
        </Layout>


      );
}
 
export default ProductoTemplate;

