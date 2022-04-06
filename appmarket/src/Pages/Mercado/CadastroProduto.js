import React from 'react'

function CadastroProduto(){
    return(

        <div className='main'>
            <header>
                <meta charSet='UTF-8'/>
                <link rel='stylesheet' href='../Styles/main.css'/>
            </header>
            <body>
                <div className='CadastroP'>
                    <h1>Cadastrar Produto</h1>
                    <form>
                        <label for='idProduto'>Id do Produto:</label><br/>
                        <input type='number' id='idProduto' name='idProduto'></input>
                        <label for='nome'>Nome do Produto:</label><br/>
                        <input type='text' id='nome' name='nome'></input>
                        <label for='marca'>Marca:</label><br/>
                        <input type='text' id='marca' name='marca'></input>
                        <label for='preco'>Preço:</label><br/>
                        <input type='number' id='preco' name='preco'></input>
                        <label for='descricao'>Descrição:</label><br/>
                        <input type='text' id='descricao' name='descricao'></input>
                        <label for='categoria'>Categoria:</label><br/>
                        <input type='text' id='categoria' name='categoria'></input>
                    </form>
                    <div className='botoes'>
                        <button className='btnCadastar'>Cadastrar</button>
                    </div>
                </div> 
            </body>
            <footer>
                <h3>© Copyright  MapMarket - All Rights Reserved</h3>
            </footer>    
        </div>
        
    )
}

export default CadastroProduto