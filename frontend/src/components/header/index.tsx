import logo from '../../assets/img/logo.svg'

import './styles.css'

function Hearder() {

    return (
        <header>
            <div className="dsmeta-logo-container">
                <img src={logo} alt="DSMeta" />
                <h1>DSMeta</h1>
                <p>
                    Desenvolvido por
                    <a href="https://www.raeltecnologia.com.br">@RaelTec</a>
                </p>
            </div>
        </header>


    )
}

export default Hearder