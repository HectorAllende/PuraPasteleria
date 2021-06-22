import React from 'react';
import Helmet from 'react-helmet';
import Header from './header';
import Footer from './footer';
import { Global, css } from '@emotion/react'
import useSeo from '../hooks/useSeo'


const Layout = (props) => {

  const seo = useSeo()

  const {siteName}= seo
    return (
        <>

            <Global
                styles={css`
            html{
              font-size: 62.5%;
              box-sizing: border-box;
            }

            *, *:before, *:after {
              box-sizing: inherit;
            }
            body{
              font-size: 18px;
              font-size: 1.8rem;
              line-height: 1.5;
              font-family: 'Quattrocento Sans', sans-serif;

            }
            h1, h2, h3{
              margin:0;
              line-height: 1.5;
            }
            h1, h2{
                font-family: 'Quattrocento Sans', sans-serif;
            }

            h3{
                font-family: 'Quattrocento Sans', sans-serif;
            }
            ul{
              list-style: none;
              margin: 0;
              padding: 0;
            }

          `}

            />
            <Helmet>
                <title>{siteName}</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.css" integrity="sha512-oHDEc8Xed4hiW6CxD7qjbnI+B07vDdX7hEPTvn9pSZO1bcRqHp8mj9pyr+8RVC2GmtEfI2Bi9Ke9Ass0as+zpg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />

                <link href="https://fonts.googleapis.com/css2?family=Quattrocento+Sans:wght@400;700&display=swap" rel="stylesheet" />

                <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500&display=swap" rel="stylesheet"/>

            </Helmet>

            <Header />

            {props.children}

            <Footer
              siteName={siteName}
            />

        </>

    );
}

export default Layout;