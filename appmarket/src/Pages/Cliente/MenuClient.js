import React from 'react'

function MenuClient(){
    return(

        <div className='main'>
            <header>
                <meta charSet='UTF-8'/>
                <link rel='stylesheet' href='../Styles/main.css'/>
            </header>
            <body>
                <div className='botoesMenu'>
                    <button className='btnMinhasListas'>Minhas Listas</button>
                    <button className='btnCadListCompra'>Cadastrar Listas de Compra</button>
                    <button className='btnEditDados'>Editar Dados</button>
                </div>
                <div className='Chat'>
                </div> 
            </body>
            <footer>
                <h3>© Copyright  MapMarket - All Rights Reserved</h3>
            </footer>    
        </div>
        
    )
}

export default MenuClient