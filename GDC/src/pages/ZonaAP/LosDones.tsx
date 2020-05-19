import {IonButtons, IonContent, IonHeader, IonPage, IonBackButton, IonToolbar, IonTitle} from '@ionic/react';
import React from 'react';

const Dones: React.FC = () => {
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
                <IonTitle color="primary" style={{textAlign: 'center'}}><br/>LOS DONES DEL ESPIRITU SANTO<br/></IonTitle>
                <div style={{position: 'absolute', left: '5%', right: '5%', textAlign: 'left'}}>
                    <br/>
                    Los 7 dones del Espiritu Santo son:<br/>
                    <br/>
                    1) Sabiduría <br/>
                    2) Entendimiento<br/>
                    3) Consejo<br/>
                    4) Fortaleza<br/>
                    5) Ciencia<br/>
                    6) Piedad<br/>
                    7) Temor de Dios<br/>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default Dones;