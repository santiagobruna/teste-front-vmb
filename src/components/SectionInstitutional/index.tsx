import institutionalImg from '../../assets/institutional.png';
import './institutional.scss';
const SectionInstitutional = () => {
    return (
        <section className="section-institutional">
            <div className='institutional-image'>
                <img src={institutionalImg} alt="" />
            </div>
            <div className="institutional-content">
                <h2>Novo Clássico</h2>
                <p>
                    Na neoclássico, reinventamos a elegância atemporal com um toque contemporâneo. Nossa curadoria de objetos de decoração combina sofisticação e design para transformar qualquer ambiente. De mesas de centro a luminárias de chão, cada peça reflete um equilíbrio entre tradição e modernidade. Descubra o novo clássico e deixe sua casa contar a sua história.
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis aspernatur quam illum, a ipsum saepe magnam in quidem voluptatem ipsa expedita id sequi officiis quas animi, dicta ipsam dolore quaerat?
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo expedita ex quam quo excepturi architecto laboriosam nulla.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                </p>
                <button>Saiba mais</button>
            </div>
        </section>
    );
};

export default SectionInstitutional;