import {IonButtons, IonContent, IonHeader, IonPage, IonBackButton, IonToolbar, IonTitle} from '@ionic/react';
import React from 'react';

const DiezMandamientos: React.FC = () => {
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
                <IonTitle color="primary" style={{textAlign: 'center'}}><br/>LOS MANDAMIENTOS DE LA LEY DE DIOS<br/></IonTitle>
                <div style={{position: 'absolute', left: '5%', right: '5%', textAlign: 'left'}}>
                    <br/>
                    Los diez mandamienos de la ley de Dios son: <br/>
                    <br/>
                    1) Amar a Dios sobre todas las cosas. <br/>
                    2) No jurar su santo nombre en vano. <br/>
                    3) Santificar las fiestas. <br/>
                    4) Honrar a padre y madre. <br/>
                    5) No matar. <br/>
                    6) No cometer actos impuros. <br/>
                    7) No robar. <br/>
                    8) No levantar falsos testimonios, ni mentir. <br/>
                    9) No consentir pensamientos ni deseos impuros. <br/>
                    10) No codiciar los bienes ajenos. <br/>
                </div>
                
            </IonContent>
        </IonPage>
    );
};

export default DiezMandamientos;