import {IonButtons, IonContent, IonHeader, IonPage, IonBackButton, IonToolbar, IonTitle} from '@ionic/react';
import React from 'react';

const PecadosCapitales: React.FC = () => {
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
                <IonTitle color="primary" style={{textAlign: 'center'}}><br/>LOS PECADOS CAPITALES<br/></IonTitle>
                <div style={{position: 'absolute', left: '5%', right: '5%', textAlign: 'left'}}>
                    <br/>
                    Los 7 pecados capitales son:<br/>
                    <br/>
                    1) Orgullo<br/>
                    2) Avaricia<br/>
                    3) Gula<br/>
                    4) Lujuria<br/>
                    5) Pereza<br/>
                    6) Ira<br/>
                    7) Envidia<br/>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default PecadosCapitales;