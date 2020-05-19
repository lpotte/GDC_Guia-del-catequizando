import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage} from '@ionic/react';
import React from 'react';

const Canciones: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonButtons slot="start">
                    <IonMenuButton />
                </IonButtons>
            </IonHeader>

            <IonContent>
                <h2> hello world</h2>
            </IonContent>
        </IonPage>
    );
};
export default Canciones;