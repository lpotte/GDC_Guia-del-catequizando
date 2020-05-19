import {
    IonButtons,
    IonContent,
    IonHeader,
    IonPage,
    IonBackButton,
    IonToolbar, IonTitle
} from '@ionic/react';
import React from 'react';

const pecadordpag: React.FC = () => {
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
                    <IonTitle color="primary"><br/>YO PECADOR<br/></IonTitle>
                    <br/>
                    Yo confieso ante Dios Todopoderoso,<br/>
                    y ante ustedes hermanos<br/>
                    que he pecado mucho de pensamiento, palabra, obra y omisión.<br/>
                    Por mi culpa, por mi culpa, por mi gran culpa.<br/>
                    Por eso ruego a Santa María siempre Virgen,<br/>
                    a los ángeles, a los santos y a ustedes hermanos,<br/>
                    que intercedan por mí ante Dios, Nuestro Señor.<br/>
                    <br/>Amén.<br/>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default pecadordpag;