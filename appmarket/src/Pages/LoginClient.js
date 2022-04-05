import React from 'react'

function LoginClint(){
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
                        <label for='femail'>Email:</label><br/>
                        <input type='text' id='femail' name='femail'></input>
                        <label for='fsenha'>Senha:</label><br/>
                        <input type='text' id='fsenha' name='fsenha'></input>
                    </form>
                    <div className='botoes'>
                        <button className='btnEntrar'>Entrar</button>
                    </div>
                    <link href=''>Cadastre-se</link>
                </div> 
            </body>
            <footer>
                <h3>© Copyright  MapMarket - All Rights Reserved</h3>
            </footer>    
        </div>
        
    )
}

export default LoginClient