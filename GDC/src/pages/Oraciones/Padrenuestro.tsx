import {
    IonButtons,
    IonContent,
    IonHeader,
    IonPage,
    IonBackButton,
    IonToolbar, IonTitle
} from '@ionic/react';
import React from 'react';

const padrepag: React.FC = () => {
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
                    <IonTitle color="primary"><br/>PADRE NUESTRO<br/></IonTitle>
                    <br/>
                    Padre nuestro,<br/>
                    que estás en el cielo,<br/>
                    santificado sea tu Nombre;<br/>
                    venga a nosotros tu reino;<br/>
                    hágase tu voluntad<br/>
                    en la tierra como en el cielo.<br/>
                    Danos hoy nuestro pan de cada día;<br/>
                    perdona nuestras ofensas,<br/>
                    como también nosotros perdonamos<br/>
                    a los que nos ofenden;<br/>
                    no nos dejes caer en la tentación,<br/>
                    y líbranos del mal.<br/>
                    <br/>Amén.<br/>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default padrepag;