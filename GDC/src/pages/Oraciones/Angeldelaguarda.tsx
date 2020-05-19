import {
    IonButtons,
    IonContent,
    IonHeader,
    IonPage,
    IonBackButton,
    IonToolbar, IonTitle
} from '@ionic/react';
import React from 'react';

const Avemariapag: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="/home/oraciones" color="primary"/>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <div style={{position: 'absolute', left: '5%', right: '5%', textAlign: 'center'}}>
                    <IonTitle color="primary"><br/> EL ANGEL DE LA GUARDA <br/></IonTitle>
                    <br/>
                    Angel de mi guarda<br/>
                    mi dulce compañia <br/>
                    no me desanpares <br/>
                    ni de noche, ni de día<br/>
                    hasta que me pongas en paz y alegría<br/>
                    con todos los santos, Jesús y María<br/>
                    <br/>Amén.<br/>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default Avemariapag;