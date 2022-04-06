import React from 'react'

function MenuSM(){
    return(

        <div className='main'>
            <header>
                <meta charSet='UTF-8'/>
                <link rel='stylesheet' href='../Styles/main.css'/>
            </header>
            <body>
                <div className='botoesMenu'>
                    <button className='btnEditDados'>Editar Dados</button>
                    <button className='btnListCompra'>Listas de Compra</button>
                    <button className='btnCadPruduto'>Cadastrar Produto</button>
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

export default MenuSM