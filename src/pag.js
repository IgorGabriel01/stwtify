import Github from "./icons-nav/github.png";
import Linkedin from "./icons-nav/linkedin.png";
import Repositorio from "./icons-nav/documento-de-texto.png";
import Logo from "./images/logo-stwtify.png";
import Button from "./icons-nav/lupa.png";
import "./css/style.css";

function Pag(){
    
    return(
        <div id="pag-p">
            <a href="https://open.spotify.com/user/e6k3f97ebc0tu12q6e0rkp838?si=64060ff8199a42da" target="blank"><img src={Logo} id="logo" title="Logo stwtify" alt="Logo stwtify" /></a>
            <div id="div-input-p">
                <input id="input-p" placeholder="Digite seu @Username"/>
                <button type="button"><img src={Button} id="button-p" title="Pesquisar" alt="Pesquisar"></img></button>
            </div>
            <div id="pai-icon">
                <a href="https://github.com/IgorGabriel01" target="blank">< img src={Github} alt="Ícone GitHub" title="Ícone GitHub" className="icon-p"></img></a>
                <a href="https://www.linkedin.com/in/igor-gabriel-04115a24b/" target="blank"><img src={Linkedin} alt="Ícone Linkedin" title="Ícone Linkedin" className="icon-p"></img></a>
                <a href="https://github.com/IgorGabriel01/stwtify" target="blank"><img src={Repositorio} alt="Ícone repositório" title="Ícone Repositório" className="icon-p"></img> </a>
            </div>
        </div>
    )
}

export default Pag;