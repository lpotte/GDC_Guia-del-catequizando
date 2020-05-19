import {
    IonButtons,
    IonContent,
    IonHeader,
    IonPage,
    IonBackButton,
    IonToolbar, IonTitle
} from '@ionic/react';
import React from 'react';

const Gloriacpag: React.FC = () => {
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
                    <IonTitle color="primary"><br/> EL GLORIA (Corto) <br/></IonTitle>
                    <br/>
                    Gloria al padre <br/>
                    gloria al hijo <br/>
                    y gloria al espiritu santo. <br/>
                    <br/>
                    como era en el principio<br/>
                    ahora y siempre <br/>
                    por los siglos de los siglos.<br/>
                    <br/>Amén.<br/>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default Gloriacpag;