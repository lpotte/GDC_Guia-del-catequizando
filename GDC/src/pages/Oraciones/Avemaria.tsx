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
                    <IonTitle color="primary"><br/> EL AVE MARIA <br/></IonTitle>
                    <br/>
                    Dios te salve María<br/>
                    llena eres de gracia<br/>
                    el Señor es contigo;<br/>
                    bendita tú eres<br/>
                    entre todas las mujeres,<br/>
                    y bendito es el fruto<br/>
                    de tu vientre, Jesús.<br/>
                    Santa María, Madre de Dios,<br/>
                    ruega por nosotros, pecadores,<br/>
                    ahora y en la ahora<br/>
                    de nuestra muerte.<br/>
                    <br/>Amén.<br/>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default Avemariapag;