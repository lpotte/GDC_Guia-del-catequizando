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
                <IonTitle color="primary" style={{textAlign: 'center'}}><br/>LOS SACRAMENTOS<br/></IonTitle>
                <div style={{position: 'absolute', left: '5%', right: '5%', textAlign: 'left'}}>
                    <br/>
                    Los 7 sacramentos son:<br/>
                    <br/>
                    1) Bautismo<br/>
                    2) Confesión<br/>
                    3) Primera Comunión<br/>
                    4) Confirmación<br/>
                    5) Matrimonio<br/>
                    6) Orden Sacerdotal<br/>
                    7) Unción De Los Enfermos<br/>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default PecadosCapitales;