
import { Link } from "react-router-dom";
// import img from "./src/pages/home/img/facebook.png"
import {BsInstagram} from "react-icons/bs";
import {FiFacebook} from "react-icons/fi";
import {AiFillGithub} from "react-icons/ai";
// import './src/index.css'; 
// import img from "./src/pages/home/img/instagram.png"
export const Menu = () => {
    return (
        <>
        <section className="menu">
        <div className="circle"></div>
           <body> 
            <header className="he">
                
            <div className="menuzinho">
                <nav className="navegation">
                        <ul>
                            <li className="Home">
                            <Link  to= '/'>Home</Link>
                            </li>
                            <li className="servico">
                                <Link to='Servicos'>Serviços</Link>
                            </li>
                            <li className="contato">
                                <Link to='Contatos'>Contatos</Link>
                            </li>
                        </ul>
                        </nav>
                        <div className="distance">
                            <div className="circulo1"></div>
                            <div className="linha1"></div>
                            <div className="circulo2"></div>
                            <div className="linha2"></div>
                            <div className="circulo3"></div>
                        </div>
                    </div>
                    <nav>
                    
                    
                    <ul className="icons">
            {/* <li><a href="#"><img src="img/facebook.png" alt="icons"></a></li>
            <li><a href="#"><img src="img/twitter.png" alt="icons"></a></li> */}
            <li><a href="https://www.instagram.com/roque.lp7/"><BsInstagram/></a></li>
            <li><a href="https://www.facebook.com/profile.php?id=100086004572452"><FiFacebook/></a></li>
            <li><a href="https://github.com/lipetk"><AiFillGithub/></a></li>
                    </ul>
                </nav>
                
            </header>
            
                
                {/* <div className="container">
        <div className="text">
            <h1>THAT'S WHAT <br/> <span>I LIKE</span></h1>
              <h2 className="lorem">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad vel iste nisi id dignissimos rerum, autem velit fuga ipsa accusamus aut minus consectetur eveniet et voluptates quibusdam cumque minima vero.</h2>
            <a href="#">VIEW ALL PRODUCTS</a>
        </div>
                
                </div> */}
                
            </body>
        </section>
        
        </>
    );
}
//animation
//  export const squares = (){
//     return( <>
        
//     const ulSquares = document.querySelector("ul.squares");

// for (let i = 0; i < 11; i++) {
//     const li = document.createElement("li");

//     const random = (min, max) => Math.random() * (max - min)

//     const size = Math.floor(random(10, 120));
//     const position = random(1, 99)
//     const delay = random(5, 0.1)
//     const duration = random(24, 12)

//     li.style.width = `${size}px`;
//     li.style.height = `${size}px`;
//     li.style.bottom = `-${size}px`;

//     li.style.left = `${position}%`;

//     li.style.animationDelay = `${delay}s`;
//     li.style.animationDuration = `${duration}s`;

//     ulSquares.appendChild(li);
//     </>
// )
// }}































{/* <section>
        <header>
            
            <nav class="navegation">
            <nav>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Serviços</a></li>
                    <li><a href="#">Contato</a></li>
                </ul>
            </nav>
        </header>
        <div class="container">
       
            
        </div>
        </div>
        <ul class="icons">
            <li><a href="#"><img src="img/facebook.png" alt="icons"></a></li>
            <li><a href="#"><img src="img/twitter.png" alt="icons"></a></li>
            <li><a href="#"><img src="img/instagram.png" alt="icons"></a></li>
        </ul>
       
    </section> */}