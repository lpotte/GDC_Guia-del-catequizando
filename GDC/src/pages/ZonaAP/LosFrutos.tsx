import {IonButtons, IonContent, IonHeader, IonPage, IonBackButton, IonToolbar, IonTitle} from '@ionic/react';
import React from 'react';

const Frutos: React.FC = () => {
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
                <IonTitle color="primary" style={{textAlign: 'center'}}><br/>LOS FRUTOS DEL ESPIRITU SANTO<br/></IonTitle>
                <div style={{position: 'absolute', left: '5%', right: '5%', textAlign: 'left'}}>
                    <br/>
                    Los 12 frutos del Espiritu Santo son:<br/>
                    <br/>
                    1) Caridad<br/>
                    2) Gozo<br/>
                    3) Paz<br/>
                    4) Paciencia<br/>
                    5) Longanimidad<br/>
                    6) Bondad<br/>
                    7) Benignidad<br/>
                    8) Mansedumbre<br/>
                    9) Fidelidad<br/>
                    10) Modestia<br/>
                    11) Continencia<br/>
                    12) Castidad<br/>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default Frutos;