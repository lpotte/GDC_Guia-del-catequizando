import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, IonSplitPane } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { AppPage } from './declarations';
import Menu from './components/Menu';

//Elementos del menú
import Home from './pages/Home';
import ZonaAP from './pages/ZonaAP';
import Canciones from "./pages/Canciones";
import Oraciones from "./pages/Oraciones";
import Videos from "./pages/Videos";

//import Calendario from "./pages/Calendario";

//import de las oraciones
import Credo from "./pages/Oraciones/Credo";
import Contricion from "./pages/Oraciones/Actodecontriccion";
import Alma from "./pages/Oraciones/Almadecristo";
import Angel from "./pages/Oraciones/Angeldelaguarda";
import Avemaria from "./pages/Oraciones/Avemaria";
import Amparo from "./pages/Oraciones/Bajotuamparo";
import Gloria from "./pages/Oraciones/Gloria";
import Gloriacorto from "./pages/Oraciones/Gloriacorto";
import Salve from "./pages/Oraciones/Lasalve";
import Padre from "./pages/Oraciones/Padrenuestro";
import Pecador from "./pages/Oraciones/Yopecador";

//Import de elementos de la zona de prendizaje
import Bienaventuranzas from "./pages/ZonaAP/Bienaventuranzas";
import Comunidad from "./pages/ZonaAP/Comunidad";
import exm_niños from "./pages/ZonaAP/ExamenDeConcienciaNiños";
import exm_jovenes from "./pages/ZonaAP/ExamenDeConcienciaJovenes";
import DiezMandamientos from "./pages/ZonaAP/LosDiezMandamientos";
import Dones from "./pages/ZonaAP/LosDones";
import Frutos from "./pages/ZonaAP/LosFrutos";
import Iglesia from "./pages/ZonaAP/LosMandamientosDeIglesia";
import Sacramentos from "./pages/ZonaAP/LosSacramentos";
import Misterios from "./pages/ZonaAP/MisteriosDelRosario";
import Obras from "./pages/ZonaAP/ObrasDeLaMisericordia";
import Misa from "./pages/ZonaAP/PartesDeLaMisa";
import Confesion from "./pages/ZonaAP/PasosConfesion";
import PecadosCapitales from "./pages/ZonaAP/PecadosCapitales";
import SeñalCruz from "./pages/ZonaAP/SeñalCruz";
import Virtudes from "./pages/ZonaAP/Virtudes";

//Import de Videos de reflexión
import AmorDios from './pages/Videos/AmorDios';
import ComunidadV from './pages/Videos/ComunidadV';
import ConfesionV from './pages/Videos/ConfesionV';
import CreoEnDios from './pages/Videos/CreoEnDios';
import ElQueso from './pages/Videos/ElQueso';
import EspiritoSanto from './pages/Videos/EspirituSanto';
import Francisco from './pages/Videos/Francisco';
import FrutosV from './pages/Videos/FrutosV';
import LaCarrera from './pages/Videos/LaCarrera';
import MariaMadre from './pages/Videos/MariaMadre';
import OsoPuma from './pages/Videos/OsoPuma';
import PadreNuestro from './pages/Videos/PadreNuestro';
import Profetas from './pages/Videos/Profetas';
import SacramentosFuerte from './pages/Videos/SacramentosFuerte';
import SacramentosIniciacion from './pages/Videos/SacramentosIniciacion';
import Sentido from './pages/Videos/SentidoDelCristiano';
import Valores from './pages/Videos/ValoresFamilia';


import {book, /*calendar,*/ musicalNote, create, videocam, star} from 'ionicons/icons';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';


const appPages: AppPage[] = [
  {
    title: 'Pagina Principal',
    url: '/home',
    icon: star
  },
  {
    title: 'Oraciones',
    url: '/home/oraciones',
    icon: book
  },
  {
    title: 'Zona De Aprendizaje',
    url: '/home/ZonaAP',
    icon: create
  },
  {
    title: 'Canciones',
    url: '/home/canciones',
    icon: musicalNote
  },
  /*{
    title: 'Calendario De Actividades',
    url: '/home/calendario',
    icon: calendar
  },*/
  {
    title: 'Videos Reflexión',
    url: '/home/videos',
    icon: videocam
  }
];

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonSplitPane contentId="main">
        <Menu appPages={appPages} />
        <IonRouterOutlet id="main">
          <Route path="/" render={() => <Redirect to="/home"/> } exact={true} />
          <Route path="/home" component={Home} exact={true} />
          <Route path="/home/ZonaAP" component={ZonaAP} exact={true} />
          <Route path="/home/canciones" component={Canciones} exact={true} />
          <Route path="/home/oraciones" component={Oraciones} exact={true} />
          {/*<!--Route path="/home/calendario" component={Calendario} exact={true} /-->*/}
          <Route path="/home/videos" component={Videos} exact={true} />
          {/* Path de las oraciones */}
          <Route path="/home/oraciones/credo" component={Credo} exact={true} />
          <Route path="/home/oraciones/actodecontriccion" component={Contricion} exact={true} />
          <Route path="/home/oraciones/Almadecristo" component={Alma} exact={true} />
          <Route path="/home/oraciones/Angeldelaguarda" component={Angel} exact={true} />
          <Route path="/home/oraciones/Avemaria" component={Avemaria} exact={true} />
          <Route path="/home/oraciones/Bajotuamparo" component={Amparo} exact={true} />
          <Route path="/home/oraciones/Gloria" component={Gloria} exact={true} />
          <Route path="/home/oraciones/Gloriacorto" component={Gloriacorto} exact={true} />
          <Route path="/home/oraciones/Lasalve" component={Salve} exact={true} />
          <Route path="/home/oraciones/Padrenuestro" component={Padre} exact={true} />
          <Route path="/home/oraciones/Yopecador" component={Pecador} exact={true} />
          {/* Path de los leemnos de la zona de aprendizaje */}
          <Route path="/home/zonaap/bienaventuranzas" component={Bienaventuranzas} exact={true} />
          <Route path="/home/zonaap/Comunidad" component={Comunidad} exact={true} />
          <Route path="/home/zonaap/ExamenDeConcienciaNiños" component={exm_niños} exact={true} />
          <Route path="/home/zonaap/ExamenDeConcienciaJovenes" component={exm_jovenes} exact={true} />
          <Route path="/home/zonaap/losdiezmandaminetos" component={DiezMandamientos} exact={true} />
          <Route path="/home/zonaap/Dones" component={Dones} exact={true} />
          <Route path="/home/zonaap/Frutos" component={Frutos} exact={true} />
          <Route path="/home/zonaap/MandamientosDeLaIglesia" component={Iglesia} exact={true} />
          <Route path="/home/zonaap/MisteriosDelRosario" component={Misterios} exact={true} />
          <Route path="/home/zonaap/Sacramentos" component={Sacramentos} exact={true} />
          <Route path="/home/zonaap/Obras" component={Obras} exact={true} />
          <Route path="/home/zonaap/PartesDeLaMisa" component={Misa} exact={true} />
          <Route path="/home/zonaap/PasosParaConfesion" component={Confesion} exact={true} />
          <Route path="/home/zonaap/PecadosCapitales" component={PecadosCapitales} exact={true} />
          <Route path="/home/zonaap/SeñalDeLaCruz" component={SeñalCruz} exact={true} />
          <Route path="/home/zonaap/Virtudes" component={Virtudes} exact={true} />
          <Route path="/home/Videos/AmorDeDios" component={AmorDios} exact={true} />
          <Route path="/home/Videos/ComunidadV" component={ComunidadV} exact={true} />
          <Route path="/home/Videos/confesionV" component={ConfesionV} exact={true} />
          <Route path="/home/Videos/CreoEnDios" component={CreoEnDios} exact={true} />
          <Route path="/home/Videos/ElQueso" component={ElQueso} exact={true} />
          <Route path="/home/Videos/Espiritusanto" component={EspiritoSanto} exact={true} />
          <Route path="/home/Videos/Francisco" component={Francisco} exact={true} />
          <Route path="/home/Videos/Frutos" component={FrutosV} exact={true} />
          <Route path="/home/Videos/LaCarrera" component={LaCarrera} exact={true} />
          <Route path="/home/Videos/MariaMadre" component={MariaMadre} exact={true} />
          <Route path="/home/Videos/OsoPuma" component={OsoPuma} exact={true} />
          <Route path="/home/Videos/PadreNuestro" component={PadreNuestro} exact={true} />
          <Route path="/home/Videos/Profetas" component={Profetas} exact={true} />
          <Route path="/home/Videos/SacramentosFuerte" component={SacramentosFuerte} exact={true} />
          <Route path="/home/Videos/SacramentosIniciacion" component={SacramentosIniciacion} exact={true} />
          <Route path="/home/Videos/Sentido" component={Sentido} exact={true} />
          <Route path="/home/Videos/Valores" component={Valores} exact={true} />
        </IonRouterOutlet>
      </IonSplitPane>
    </IonReactRouter>
  </IonApp>
);

export default App;
