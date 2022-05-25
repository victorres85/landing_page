import img_circulo from '../assets/Ellipse1.png'
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showLocation);
}

function showLocation(position) {
    const long = position.coords.longitude;
    const lat = position.coords.latidude;

    const url = `https://maps.google.com/maps?q=${long},${lat}&t=&z=13&ie=UTF8&iwloc=&output=embed`;

    window.open(url, 'map')

}


function Localizacao() {
    return (
        <div className="localizacao" id='localizacao'>
            <div className="circulo">
                <img src={img_circulo} alt='circulo'></img>
            </div>
            <div className='loc_container'>
                <h2> Localização </h2>
                <p>Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's standard. </p>
                <div className="map">
                    {/* https://google-map-generator.com/  */}
                    <div class="mapouter">
                        <div class="gmap_canvas">
                            <iframe width="800" height="500" id="gmap_canvas" name="map"
                                src=""
                                frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
                            </iframe>
                            <a href="https://fmovies-online.net"></a>
                            <br></br>
                            {/* <style>.mapouter{position:relative;text-align:right;height:500px;width:800px;}</style> */}
                            <a href="https://www.embedgooglemap.net">embedding google maps in html</a>
                            {/* <style>.gmap_canvas {overflow:hidden;background:none!important;height:500px;width:800px;} */}
                            {/* </style> */}
                        </div>
                    </div>
                </div>
            </div>

        </div >
    )
}

export default Localizacao;