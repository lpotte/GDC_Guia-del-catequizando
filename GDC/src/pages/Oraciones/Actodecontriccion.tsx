import {IonButtons, IonContent, IonHeader, IonPage, IonBackButton, IonToolbar, IonTitle} from '@ionic/react';
import React from 'react';

const actopag: React.FC = () => {
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
                    <IonTitle color="primary"><br/>ACTO DE CONTRICCIÓN<br/></IonTitle>
                    <br/>
                    Jesús, mi Señor y Redentor, <br/>
                    yo me arrepiento de todos los pecados <br/>
                    que he cometido hasta hoy, <br/>
                    y me pesa de todo corazón, <br/>
                    porque con ellos ofendí a un Dios tan bueno.<br/>
                    Propongo firmemente no volver a pecar <br/>
                    y confío que por tu infinita misericordia <br/>
                    me has de conceder el perdón de mis culpas <br/>
                    y me has de llevar a la vida eterna.<br/>
                    <br/>Amén.<br/>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default actopag;