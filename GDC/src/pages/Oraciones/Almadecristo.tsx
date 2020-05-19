import {
    IonButtons,
    IonContent,
    IonHeader,
    IonPage,
    IonBackButton,
    IonToolbar, IonTitle
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
                    <IonTitle color="primary"><br/> ALMA DE CRISTO <br/></IonTitle>
                    <br/>
                    Alma de Cristo, santifícame.<br/>
                    Cuerpo de Cristo, sálvame.<br/>
                    Sangre de Cristo, embriágame.<br/>
                    Agua del costado de Cristo, lávame.<br/>
                    Pasión de Cristo, confórtame.<br/>
                    ¡Oh, buen Jesús!, óyeme.<br/>
                    Dentro de tus llagas, escóndeme.<br/>
                    No permitas que me aparte de Ti.<br/>
                    Del maligno enemigo, defiéndeme.<br/>
                    En la hora de mi muerte, llámame.<br/>
                    Y mándame ir a Ti.<br/>
                    Para que con tus santos te alabe.<br/>
                    Por los siglos de los siglos.<br/>
                    <br/>Amén.<br/>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default Avemariapag;