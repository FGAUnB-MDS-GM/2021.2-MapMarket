import React from 'react'

function CadastroSM(){
    return(

        <div className='main'>
            <header>
                <meta charSet='UTF-8'/>
                <link rel='stylesheet' href='../Styles/main.css'/>
            </header>
            <body>
                <div className='TextoHome'>
                    <h1>Login</h1>
                    <form>
                        <label for='fnomeSM'>Nome do Supermercado:</label><br/>
                        <input type='text' id='fnomeSM' name='fnomeSM'></input>
                        <label for='femail'>Email:</label><br/>
                        <input type='text' id='femail' name='femail'></input>
                        <label for='fconfEmail'>Confirmar email:</label><br/>
                        <input type='text' id='fconfEmail' name='fconfEmail'></input>
                        <label for='fcnpj'>CNPJ:</label><br/>
                        <input type='number' id='fcnpj' name='fcnpj'></input>
                        <label for='ftelefone'>Telefone:</label><br/>
                        <input type='number' id='ftelefone' name='ftelefone'></input>
                        <label for='fcidade'>Cidade:</label><br/>
                        <input type='text' id='fcidade' name='fcidade'></input>
                        <label for='frua'>Rua:</label><br/>
                        <input type='text' id='frua' name='frua'></input>
                        <label for='fnumero'>Número:</label><br/>
                        <input type='number' id='fnumero' name='fnumero'></input>
                        <label for='fcomplemento'>Complemento:</label><br/>
                        <input type='text' id='fcomplemento' name='fcomplemento'></input>
                        <label for='fsenha'>Senha:</label><br/>
                        <input type='text' id='fsenha' name='fsenha'></input>
                        <label for='fconfSenha'>Confirmar Senha:</label><br/>
                        <input type='text' id='fconfSenha' name='fconfSenha'></input>
                    </form>
                    <div className='botoes'>
                        <button className='btnEntrar'>Cadastrar</button>
                    </div>
                </div> 
            </body>
            <footer>
                <h3>© Copyright  MapMarket - All Rights Reserved</h3>
            </footer>    
        </div>
        
    )
}

export default CadastroSM