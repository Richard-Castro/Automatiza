import React from 'react';
import banner from '../../assets/banner.jpg';
//import logo from '../../assets/logo.jpeg';
import qualidades from '../../assets/qualidades.png';
import seguranca from '../../assets/seguranca.png';
import suporte from '../../assets/suporte.png';
import cameras from '../../assets/camera.png';
import arcondicionado from '../../assets/arcondicionado.png';
import cercaeletrica from '../../assets/cercaeletrica.png';
import concertina from '../../assets/concertina.png';
import portaoeletronico from '../../assets/portaoeletronico.jpg';
import fundocontato from '../../assets/fundocontato.jpg';
import imgImac from '../../assets/imacpng.png';
import torrePng from '../../assets/torre.png';
import {} from 'react-router-dom';
import { FaWhatsapp, FaFacebookSquare, FaCheck } from 'react-icons/fa';
import { TiSocialInstagram } from 'react-icons/ti';
import './styleHome.css';
import { Link } from 'react-scroll';


export default function Logon() {
    return(
        <div className="pageHome">

            <div class="bannerHeader">
                <div className="container">

                    <img src={banner}alt="banner inicio" />

                </div>               

            </div>
          

            <div className="menuHeader">
                <nav>
                    <ul>
                        <li><Link to="/" smooth={true} duration={1000}>HOME</Link></li>
                        <li><Link to="servicos" smooth={true} duration={1000}>SERVIÇOS</Link></li>
                        <li><Link to="contato" smooth={true} duration={1000}>CONTATO</Link></li>                       
                    </ul>
                </nav>
            </div>
            
            <div className="presentationText">
                 
                <h1>Automatiza</h1>
                <h2>Elétrica e Automação</h2>

                <div class="contatoMenuHeader">
                    <FaWhatsapp size={25} color="rgb(21, 237, 98)" />
                    <h3>(17) 9 8817 3165</h3>
                    <FaFacebookSquare size={27} />
                    <TiSocialInstagram size={30} />

                </div>
            </div>
            <div class="torrePng">
                <img src={torrePng} alt="torre banner" />
            </div>
            
                    
                
            <div className="contentPresentation">

            <h5>A Automatiza existe para oferecer soluções para você e sua empresa, tornando-a automatizada
                e segura. </h5>
          
                <div className="container">
                      

                    <div className="apresentationBox">
                        
                       <div className="box">
                       

                      
                       
                        <div className="boxContaint">
                            
                            <img src={qualidades}  alt="" />
                            <h3>Comprometimento e qualidade</h3>
                            <p>Lorem Ipsum is simply dummy 
                                text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy
                                </p>
                         </div>
                         </div>
                         <div className="box">
                      
                        <div className="boxContaint">
                            <img src={seguranca} alt="" />
                            <h3>Segurança e tranquilidade</h3>
                            <p>Lorem Ipsum is simply dummy 
                                text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy
                                </p>
                        </div>
                        </div>
                        <div className="box">
                       
                        <div className="boxContaint">
                        
                            <img src={suporte} alt="" />
                            <h3>Suporte imediato</h3>
                            <p>Lorem Ipsum is simply dummy 
                                text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy
                                </p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="contentServices"  id="servicos">
            <h1>OQUE PODEMOS FAZER POR VOCÊ E SUA EMPRESA ?</h1>
                <div className="container">
               
                    <div class="Services">
                        

                        <div className="boxServices">
                        <img src={cameras}  alt="cameras" />
                        <h3>Instalação de cameras</h3>
                        <button>Fazer orçamento</button>
                       
                        
                        </div>
                        <div className="boxServices">
                        <img src={arcondicionado}  alt="cameras" />
                        <h3>Instalação e higienização de ar condicionado</h3>
                        <button>Fazer orçamento</button>

                        </div>
                        <div className="boxServices">
                        <img src={cercaeletrica}  alt="cameras" />
                        <h3>Instalação e manutenção de cerca elétrica</h3>
                        <button>Fazer orçamento</button>
                        </div>
                        
                                                                    
                        
                    </div>
                    <div class="Services2">
                        <div className="boxServices">

                            <img src={concertina}  alt="cameras" />                           
                            <h3>Instalação de consertinas</h3>
                            <button>Fazer orçamento</button>
                                                      
                        </div>
                        <div className="boxServices">

                            <img src={portaoeletronico}  alt="cameras" />
                            <h3>Instalação de portão eletronico</h3>
                            <button>Fazer orçamento</button>
                        
                        </div>
                        <div className="boxServices">

                            <img src={portaoeletronico}  alt="cameras" />
                            <h3>Instalação de cameras</h3>
                            <button>Fazer orçamento</button>
                        
                        </div>
                        
                    </div>
                </div>
            </div>
            <div className="servicesInfo">
                <div class="container">
                    <section>
                        <div class="textInfo">
                            <h1>PROTEÇÃO 24 HORAS</h1>                        
                            <h3>Para resedências, empresas e condomínios</h3>

                            <h4>VENDA, INSALAÇÃO E MANUTENÇÃO</h4>
                            <ul>
                                <li><FaCheck size="20" /><h5>CFTV, ALARME</h5></li>
                                <li><FaCheck size="20" /><h5>CERCA ELÉTRICA</h5></li>
                                <li><FaCheck size="20" /><h5>PORTEIRO ELETRONICO</h5></li>
                                <li><FaCheck size="20" /><h5>PORTÃO AUTOMÁTICO</h5></li>
                                <li><FaCheck size="20" /><h5>VÍDEO PORTEIRO</h5></li>
                                <li><FaCheck size="20" /><h5>FECHADURA ELÉTRICA</h5></li>
                            </ul>
                        </div>
                        <div className="imgImac">

                            <img src={imgImac} alt="imac" />
                            
                        </div>
                    </section>
                   
                </div>
            </div>

            <div className="contact" id="contato">
                <div className="container">
                    <div className="contactBanner">
                        <img src={fundocontato} alt="" />
                    </div>
                    <section className="budgetMessage">
                        <h1>Mantenha sua empresa e sua residência segura</h1>
                        <h3>Faça já seu orçamento, entraremos em contato com 
                            você o mais breve possivel</h3>
                    </section>
                    <section className="contactForm">
                        <h1>FAÇA SEU ORÇAMENTO</h1>
                        <input placeholder="Nome completo" />
                        <input placeholder="Celular" />
                        <input placeholder="Serviço desejado" />
                        <textarea placeholder="Especificações sobre o serviço a ser realizado" />
                        <button>ENVIAR</button>
                    </section>
                    
                </div>
            </div>
               
           
            <footer>
                <div className="container">
                    <section>
                        <h3>Automatiza : Copyright © 2020. Todos os direitos reservados. </h3>
                    </section>
                    <section className="iconsSite">
                        <FaWhatsapp size={50} />
                        <FaFacebookSquare size={50} />
                        <TiSocialInstagram size={53} />
                    </section>
                </div>
            </footer>

            





         </div>
         
    );
}