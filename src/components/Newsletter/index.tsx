import './newsletter.scss'
const Newsletter = () => {
    return (
        <div className="newsletter">
            <div className="text-newsletter">
                <h2>Subscribe to our Newsletter</h2>
                <p>cadastre-se na nossa newsletter</p>
            </div>
            <div className="form-newsletter">
                <form>
                    <input type="name" placeholder="Digite o seu nome" />
                    <input type="email" placeholder="Digite seu email" />
                    <button type="submit">Cadastra-se</button>
                </form>
            </div>
        </div>
    );
};

export default Newsletter;