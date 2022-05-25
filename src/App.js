
import './Sass/styles.scss'
import Cabecalho from './components/Cabecalho';
import Notificacoes from './components/Notificacoes';
import Rodape from './components/Rodape';
import Segmentos from './components/Segmentos';
import Servicos from './components/Servicos';
import Localizacao from './components/Localizacao';

function App() {
  return (
    <div className="App">
      <Cabecalho />
      <Notificacoes />
      <Localizacao />
      <Servicos />
      <Segmentos />
      <Rodape />
    </div>
  );
}

export default App;
