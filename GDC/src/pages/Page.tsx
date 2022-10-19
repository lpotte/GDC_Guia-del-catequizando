import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useParams } from 'react-router';
import ExploreContainer from '../components/ExploreContainer';
import './Page.css';

const Page: React.FC = () => {

  const { name } = useParams<{ name: string; }>();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>GDC</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">GDC</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div style={{ position: 'absolute', left: '5%', right: '5%', textAlign: 'center' }}>
          <IonTitle color="primary"><br /> GDC - Guia Del Catequizando <br /></IonTitle>
          <br />
          Esta es una herramienta digital, desarrollada con el fin de <br />
          complementar la preparación de la primera comunión y confirmación.<br />
          <br /> Aqui puedes encontrar oraciones, elementos del catecismo <br />
          y videos de reflexión complementarios.  <br />
          <br/> Úsenla con responsabilidad <br />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Page;
