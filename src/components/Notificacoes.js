import imagem01 from '../assets/group4.png';
function getNotification() {
    if (!('Notification' in window)) {
        console.log('Navegador não suporta notificações');
    } else if (Notification.permission === 'granted') {
        const notify = new Notification('Olá, bem vindo(a) de volta!')
    } else if (Notification.permission !== 'denied') {
        Notification.requestPermission(function (permission) {
            if (permission === 'granted') {
                const notify = new Notification('Olá, bem vindo(a)!')
            }
        })
    }
}

function Notificacoes() {
    return (

        <div className="notificacoes" id='inicio'>
            <div className="imagem">
                <img src={imagem01} alt='imagem 01'></img>
            </div>
            <div className="notificacao">
                <h1 className="not-title">Transformação Digital</h1>
                <h3>Lorem Ipsum is simply dummy
                    text of the printing and typesetting
                    industry. Lorem Ipsum has been the
                    industry's standard dummy text ever
                    since the 1500s.</h3>
                <div className='box'></div>
                <button className="btn-ativar" onClick={getNotification}>Ativar Notificações</button>
            </div>
            <div className='traco'></div>
        </div>
    )
}

export default Notificacoes;