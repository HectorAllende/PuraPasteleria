exports.createPages = async({actions, graphql, reporter})=>{
    const resultado = await graphql(`
    query{
        allDatoCmsStock{
            nodes{
            slug
          }
        }
        }
    `)

    // console.log(resultado.data.allDatoCmsStock.nodes)


    if(resultado.errors){
        reporter.panic('No hubo resultado', resultado.errors)
    }

    const productos = resultado.data.allDatoCmsStock.nodes;

    productos.forEach(producto => {
        actions.createPage({
            path: producto.slug,
            component: require.resolve('./src/components/tipos.js'),
            context:{
                slug: producto.slug
            }
        })
    });

}
