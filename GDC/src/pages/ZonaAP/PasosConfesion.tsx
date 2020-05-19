import {IonButtons, IonContent, IonHeader, IonPage, IonBackButton, IonToolbar, IonTitle} from '@ionic/react';
import React from 'react';

const PConfesion: React.FC = () => {
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
            <IonTitle color="primary" style={{textAlign: 'center'}}><br/>LOS CINCO PASOS PARA UNA BUENA CONFESIÓN<br/></IonTitle>
                <div style={{position: 'absolute', left: '5%', right: '5%', textAlign: 'left'}}>
                <br/>
                1. Examen de Conciencia:<br/>
                <br/>
                - Ponernos ante Dios que nos ama y quiere ayudarnos.<br/> 
                - Analizar nuestra vida y abrir nuestro corazón sin engaños. <br/>
                - Puedes ayudarte de una guía para hacerlo bien.<br/>
                <br/>
                2. Arrepentimiento de los pecados: <br/>
                <br/>
                - Sentir un dolor verdadero de haber pecado porque hemos lastimado al que más nos quiere, Dios.<br/>
                <br/>
                3. Propósito de no volver a pecar:<br/>
                <br/>
                - Si verdaderamente amo, no puedo seguir lastimando al amado. <br/>
                - De nada sirve confesarnos si no queremos mejorar. Podemos caer de nuevo por debilidad, pero lo importante es la lucha, no la caída.<br/>
                <br/>
                4. Decir los pecados al sacerdote: <br/>
                - El Sacerdote es un instrumento de Dios. <br/>
                - Hagamos a un lado la “vergüenza” o el “orgullo” y abramos nuestra alma, seguros de que es Dios quien nos escucha.<br/>
                <br/>
                5. Recibir la absolución y cumplir la penitencia que le ponga el sacerdote: <br/>
                - Es el momento más hermoso, pues recibimos el perdón de Dios. La penitencia es un acto sencillo que representa nuestra reparación por la falta que cometimos.<br/>
                <br/>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default PConfesion;