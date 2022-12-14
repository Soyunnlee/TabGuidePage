import '../Css/Nav.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'

function Nav() {
    const [selected, setSelect] = useState("Guide", "Notice" );
    const selectedstyle = {fontWeight: "700"}
    return (
    <div>
        <nav class="navWrap"> 
            <div class="navPosition">
                {/* Logo */}
      
                <logo class="Logo">
                <Link to="/" >
                    <img src="https://i.esdrop.com/d/f/L0jperRW9F/fNavN8SOKA.png"></img>
                </Link>
                </logo>
         
        
                <ul class="navList">

                    <Link to="/Guide">
                    <li class="navItm" style={selected === "Guide" ? selectedstyle : undefined}
                        onClick={() => setSelect("Guide")}>
                    <a href="">가이드</a>
                    </li>
                    </Link>
                        
                    <Link to="/Notice">
                    <li class="navItm" style={selected === "Notice" ? selectedstyle : undefined}
                        onClick={() => setSelect("Notice")}>
                    <a href="">공지사항</a>
                    </li>
                    </Link>
                        
                </ul>

            </div>
        </nav>
    </div>
    );
}

export default Nav;