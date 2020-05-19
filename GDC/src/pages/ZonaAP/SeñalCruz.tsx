import {IonButtons, IonContent, IonHeader, IonPage, IonBackButton, IonToolbar, IonTitle, IonImg} from '@ionic/react';
import React from 'react';

const Scruz: React.FC = () => {
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
                <IonTitle color="primary" style={{textAlign: 'center'}}><br/>SEÑAL DE LA CRUZ<br/></IonTitle>
                    <div style={{position: 'absolute', left: '5%', right: '5%', textAlign: 'left'}}>
                    <br/>
                    Santiguarse – lo que se dice<br/>
                    <br/>
                    En nombre del padre (se colocan los dedos en la frente)<br/>
                    En nombre del hijo (se colocan los dedos en el pecho)<br/>
                    Y del espíritu santo (mientras se ponen los dedos primero en el hombro izquierdo y luego en el derecho)<br/>
                    Amén.<br/>
                    <IonImg src="../assets/señal_cruz_1.jpg"/>
                    <br/>Signarse – Lo que se dice<br/>
                    Por la señal de la santa cruz (se hace una cruz en la frente)<br/>
                    De nuestros enemigos (se hace una cruz en la boca)<br/>
                    Líbranos señor Dios nuestro (se hace una cruz en el pecho)<br/>
                    <IonImg src="../assets/señal_cruz_2.jpg"/>
                    <br/> Persignarse <br/>
                    – Es primero signarse y santiguarse después<br/>
                    </div>
            </IonContent>
        </IonPage>
    );
};

export default Scruz;