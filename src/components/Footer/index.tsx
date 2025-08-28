import logo from '../../assets/logo-neoclassico.png';
import paymentMethods from '../../assets/formas-pagamento.png';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import AccordionItem from '../Accordion';
import './footer.scss';
const Footer = () => {
    return (
        <> 
            <footer className='footer'>
                {/* Footer desktop */}
                <div className='footer-content'>
                    <img src={logo} alt="" />
                    <p>
                        Na neoclássico, combinamos design atemporal e contemporâneo para transformar espaços. Descubra o novo clássico.
                    </p>
                    <h3>NOSSAS REDES</h3>
                    <ul className="social-links">
                        <li>
                            <a
                            href="https://wa.me/5599999999999" 
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="WhatsApp"
                            title="WhatsApp"
                            >
                            <WhatsAppIcon sx={{ fontSize: 28, color: '#61A9CC' }} />
                            </a>
                        </li>
                        <li>
                            <a
                            href="https://instagram.com/seu_usuario"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Instagram"
                            title="Instagram"
                            >
                            <InstagramIcon sx={{ fontSize: 28, color: '#61A9CC' }} />
                            </a>
                        </li>
                        <li>
                            <a
                            href="https://facebook.com/sua_pagina"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Facebook"
                            title="Facebook"
                            >
                            <FacebookIcon sx={{ fontSize: 28,  color: '#61A9CC' }} />
                            </a>
                        </li>
                    </ul>
                    <p>© 2025, Neoclássico
                    </p>
                </div>
                <div className='footer-links'>
                    <div className='links-section'>
                        <div>
                            <h3>Sobre nós</h3>
                            <ul>
                                <li><a href="#">Nossa história</a></li>
                                <li><a href="#">Curadoria Exclusiva</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3>CONTATO</h3>
                            <ul>
                                <li><a href="#">Fale conosco</a></li>
                                <li><a href="#">Trabalhe Conosco</a></li>
                            </ul>
                        </div>
                        <div className='contact-info'>
                            <h3>ATENDIMENTO</h3>
                            <p>
                                Segunda a seta das 8h às 18h
                                <br />
                                e sábado das 8h às 15h
                            </p>
                            <p>
                                Whatsapp: <a
                                href="https://wa.me/5500000000000" 
                                target="_blank" 
                                rel="noopener noreferrer">+55 (00) 000000000</a>
                            </p>
                            <p>
                                E-mail: <a href="mailto:contato@neoclassico.com.br" rel="noopener noreferrer">contato@neoclassico.com.br</a>
                            </p>
                        </div>
                    </div>
                    <div className="payments">
                        <h3>MEIOS DE PAGAMENTO</h3>
                        <img src={paymentMethods} alt=""/>
                    </div>
                </div>
            </footer>
            {/* Footer mobile  */}
            <div className="footer-mobile">
                <div className="mobile-accordion">
                    <AccordionItem title="Atendimento">
                        <p>Segunda a sexta: 8h às 18h</p>
                        <p>Sábado: 8h às 15h</p>
                        <p>WhatsApp: <a href="https://wa.me/5500000000000">+55 (00) 00000-0000</a></p>
                        <p>E-mail: <a href="mailto:contato@neoclassico.com.br">contato@neoclassico.com.br</a></p>
                    </AccordionItem>
                    <AccordionItem title="Institucional">
                        <ul>
                            <li><a href="#">Nossa história</a></li>
                            <li><a href="#">Curadoria Exclusiva</a></li>
                        </ul>
                    </AccordionItem>

                    <AccordionItem title="Fale conosco ">
                        <ul>
                        <li><a href="#">Fale conosco</a></li>
                        <li><a href="#">Trabalhe Conosco</a></li>
                        </ul>
                    </AccordionItem>

                </div>
                <div className="footer-language">
                    <label htmlFor="language-select">Idioma:</label>
                    <select id="language-select" name="language">
                        <option value="pt">Português</option>
                        <option value="en">Inglês</option>
                        <option value="es">Espanhol</option>
                    </select>
                </div>
                <div className="mobile-top">
                    <ul className="social-links">
                        <li><a href="https://wa.me/5599999999999" target="_blank"><WhatsAppIcon sx={{ fontSize: 28, color: '#61A9CC' }} /></a></li>
                        <li><a href="https://instagram.com/seu_usuario" target="_blank"><InstagramIcon sx={{ fontSize: 28, color: '#61A9CC' }} /></a></li>
                        <li><a href="https://facebook.com/sua_pagina" target="_blank"><FacebookIcon sx={{ fontSize: 28, color: '#61A9CC' }}/></a></li>
                    </ul>
                </div>
                <div className="footer-payments">
                    <h3>Meios de Pagamento</h3>
                    <img src={paymentMethods} alt="Meios de Pagamento" />
                </div>
                <p>© 2025 Neoclássico</p>
            </div>
        </>
    
    );
};

export default Footer;