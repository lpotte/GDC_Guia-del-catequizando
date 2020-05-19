import {IonButtons, IonContent, IonHeader, IonPage, IonBackButton, IonToolbar, IonImg} from '@ionic/react';
import React from 'react';

const Comunidad: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="/home/ZonaAP" color="primary"/>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonImg src="../assets/3D.PNG"/>
            </IonContent>
        </IonPage>
    );
};

export default Comunidad;