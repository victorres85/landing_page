import img_circulo from '../assets/Ellipse1(1).png'

function Servicos() {
    return (
        <div className="servicos" id='servicos'>
            <div className='traco'></div>
            <div>
                <img className="circulo2" src={img_circulo} alt='circulo2'></img>
            </div>
            <h2 id='id_serv'>Serviços</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's standard</p>
            <div className="cards">
                <div className="card">
                    <h1>01</h1>
                    <h2>UX Design</h2>
                    <p>o	Web Development
                        o	SaaS Platform Development
                        o	Full Stack Development<br></br><br></br>

                        create innovative solutions to solve customer problems and giving you more control over product.
                    </p>
                </div>
                <div className="card">
                    <h1>02</h1>
                    <h2>Front-end</h2>

                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br></br><br></br>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                </div>

                <div className="card">
                    <h1>03</h1>
                    <h2>Test</h2>

                    <p>Designing success through creative web design for your business to be the best.<br></br><br></br>

                        Improving customer engagement with enhanced user experience.</p>
                </div>

                <div className="card">

                    <h1>04</h1>
                    <h2>Delivery</h2>

                    <p>Develop your MVP with our experts who help create a solution that solves customer problems.<br></br><br></br>

                        We fill in the technology gaps for you.</p>
                </div>
            </div>
        </div>
    )
}

export default Servicos;