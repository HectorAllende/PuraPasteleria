import React from 'react';
import {graphql, useStaticQuery} from 'gatsby'
import BackgroundImage from 'gatsby-background-image';
import styled from '@emotion/styled'

const ImageBackground= styled(BackgroundImage)`
    height: 500px;
    
`
const TextoImagen = styled.div`
     background-image: linear-gradient(to top, rgba(34,49,64,.55), rgba(34,49,63,.55));
    color: #FFF;
    height: 100%;
    display: flex;
    flex-direction: column;
    flex: 1;
    align-items: center;
    justify-content: center;

    h1{
        font-size: 4rem;
        margin: 0%;
        font-family: 'Dancing Script', cursive;
        text-align: center;

        @media (min-width: 992px){
            font-size: 5.8rem;
        }
    }
    p{
        font-size: 2rem;
        text-align: center;
        @media (min-width: 992px){
            font-size: 2.6rem;
        }
    }

`


const ImagenPura = () => {
    const {image}=  useStaticQuery(graphql`
    query{
        image: file(relativePath:{eq: "chocolate.jpg"}){
            sharp: childImageSharp{
                fluid{
                    ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
    
    `)
   

    
    return ( 

        <ImageBackground tag="section" fluid={image.sharp.fluid} fadeIn="soft">
            <TextoImagen>
                 <h1>Bienvenidos a Pura Pastelería</h1>
                <p>Déjate tentar por el sabor</p>
            </TextoImagen>
        </ImageBackground>
       
     );
}
 
export default ImagenPura;