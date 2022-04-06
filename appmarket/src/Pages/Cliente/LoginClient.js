import React from 'react'

function LoginClient(){
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
                        <label for='email'>Email:</label><br/>
                        <input type='text' id='email' name='email'></input>
                        <label for='senha'>Senha:</label><br/>
                        <input type='text' id='senha' name='senha'></input>
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