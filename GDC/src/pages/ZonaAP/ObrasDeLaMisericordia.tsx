import {IonButtons, IonContent, IonHeader, IonPage, IonBackButton, IonToolbar, IonTitle} from '@ionic/react';
import React from 'react';

const Obras: React.FC = () => {
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
                <IonTitle color="primary" style={{textAlign: 'center'}}><br/>LAS OBRAS DE MISERICORDIA<br/></IonTitle>
                <div style={{position: 'absolute', left: '5%', right: '5%', textAlign: 'left'}}>
                    <br/>
                    Las 7 obras de la misericordia corporales son:<br/>
                    <br/>
                    1) Visitar a los enfermos<br/>
                    2) Dar de comer al hambriento<br/>
                    3) Dar de beber al sediento<br/>
                    4) Dar posada al peregrino<br/>
                    5) Vestir al desnudo<br/>
                    6) Visitar a los presos<br/>
                    7) Enterrar a los difuntos<br/>
                    <br/>
                    Las 7 obras de la Misericordia Espirituales son:<br/>
                    <br/>
                    1) Enseñar al que no sabe<br/>
                    2) Dar buen consejo al que lo necesita<br/>
                    3) Corregir al que se equivoca<br/>
                    4) Perdonar al que nos ofende<br/>
                    5) Consolar al triste<br/>
                    6) Sufrir con paciencia los defectos del prójimo<br/>
                    </div>
            </IonContent>
        </IonPage>
    );
};

export default Obras;