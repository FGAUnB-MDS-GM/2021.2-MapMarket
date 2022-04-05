import React from 'react'

function Home(){
    return(

        <div className='main'>
            <header>
                <meta charSet='UTF-8'/>
                <link rel='stylesheet' href='../Styles/main.css'/>
            </header>
            <body>
                <div className='TextoHome'>
                    <div className='title'><h1>Bem Vindo ao MapMarket!</h1></div>
                    <div className='texto'><h3>O MapMarket tem o objetivo<br/> de 
                        melhorar a comunicação<br/> de clientes com super<br/> meracado 
                        de uma maneira<br/> simples e intuitiva.</h3></div>
                </div>
                <div className='botoes'>
                    <button className='btnSMercado'>Supermercado</button>
                    <button className='btnCliente'>Cliente</button>
                </div>
            </body>
            <footer>
                <h3>© Copyright  MapMarket - All Rights Reserved</h3>
            </footer>    
        </div>
        
    )
}

export default Home