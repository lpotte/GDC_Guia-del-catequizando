import {
    IonButtons, IonContent, IonHeader, IonPage, IonBackButton, IonToolbar, IonTitle
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
                    <IonTitle color="primary"><br/> BAJO TU AMPARO <br/></IonTitle>
                    <br/>
                    Bajo tu amparo nos acogemos,<br/>
                    santa Madre de Dios;<br/>
                    no deseches las oraciones<br/>
                    que te dirigimos<br/>
                    en nuestras necesidades,<br/>
                    antes bien<br/>
                    líbranos de todo peligro,<br/>
                    ¡oh Virgen gloriosa y bendita!<br/>
                    <br/>Amén.<br/>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default Avemariapag;