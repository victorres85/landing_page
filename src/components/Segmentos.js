import img_eco from '../assets/Group.png';
import img_fin from '../assets/Group(1).png';
import img_mob from '../assets/Group(2).png';
import img_ent from '../assets/Group(3).png';
import img_dir from '../assets/Group(4).png';
import img_hos from '../assets/Group(5).png';



function Segmentos() {
    return (
        <div className="segmentos" id='segmentos'>
            <h2>Segmentos</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's </p>
            <div className='seg_container'>
                <div class="seg-card" >
                    <img id='commerce' src={img_eco} alt=""></img>
                    <h4>
                        E-commerce
                    </h4>
                    <p>We assist physical and digital retailers, wholesalers, and suppliers to automate commercial operations and business workflows.
                        With e-commerce solutions, ERPS and improvised customer services.</p>

                </div>
                <div class="seg-card" >
                    <img id='fintech' src={img_fin} alt=""></img>
                    <h4>
                        FinTechs
                    </h4>
                    <p>We assist physical and digital retailers, wholesalers, and suppliers to automate commercial operations and business workflows.
                        With e-commerce solutions, ERPS and improvised customer services.</p>
                </div>
                <div class="seg-card" >
                    <img id='mobilidade' src={img_mob} alt=""></img>
                    <h4>
                        Mobilidade
                    </h4>
                    <p>We assist physical and digital retailers, wholesalers, and suppliers to automate commercial operations and business workflows.
                        With e-commerce solutions, ERPS and improvised customer services.</p>
                </div>
                <div class="seg-card" >
                    <img id='entretenimento' src={img_ent} alt=""></img>
                    <h4>
                        Entretenimento
                    </h4>
                    <p>We assist physical and digital retailers, wholesalers, and suppliers to automate commercial operations and business workflows.
                        With e-commerce solutions, ERPS and improvised customer services.</p>
                </div>
                <div class="seg-card" >
                    <img id='direto' src={img_dir} alt=""></img>
                    <h4>
                        Direto
                    </h4>
                    <p>We assist physical and digital retailers, wholesalers, and suppliers to automate commercial operations and business workflows.
                        With e-commerce solutions, ERPS and improvised customer services.</p>

                </div>
                <div class="seg-card" >
                    <img id='hospitalidade' src={img_hos} alt=""></img>
                    <h4>
                        Hospitalidade
                    </h4>
                    <p>We assist physical and digital retailers, wholesalers, and suppliers to automate commercial operations and business workflows.
                        With e-commerce solutions, ERPS and improvised customer services.</p>

                </div>
            </div>
        </div>
    )
}

export default Segmentos;