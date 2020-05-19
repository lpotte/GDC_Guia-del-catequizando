import {
    IonButtons,
    IonContent,
    IonHeader,
    IonPage,
    IonBackButton,
    IonToolbar, IonTitle
} from '@ionic/react';
import React from 'react';

const Gloriapag: React.FC = () => {
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
                    <IonTitle color="primary"><br/> EL GLORIA (Largo) <br/></IonTitle>
                    <br/>
                    Gloria a Dios en el cielo,<br/>
                    y en la tierra paz a los hombres que ama el Señor.<br/>
                    <br/>
                    Por tu inmensa gloria te alabamos,<br/>
                    te bendecimos, te adoramos,<br/>
                    te glorificamos, te damos gracias,<br/>
                    Señor Dios, Rey celestial,<br/>
                    Dios Padre todopoderoso<br/>
                    Señor, Hijo único, Jesucristo.<br/>
                    <br/>
                    Señor Dios, Cordero de Dios, Hijo del Padre;<br/>
                    tú que quitas el pecado del mundo,<br/>
                    ten piedad de nosotros;<br/>
                    tú que quitas el pecado del mundo,<br/>
                    atiende nuestra súplica;<br/>
                    tú que estás sentado a la derecha del Padre,<br/>
                    ten piedad de nosotros;<br/>
                    porque sólo tú eres Santo,<br/>
                    sólo tú Señor, sólo tú Altísimo, Jesucristo,<br/>
                    con el Espíritu Santo en la gloria de Dios Padre.<br/>
                    <br/>Amén.<br/>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default Gloriapag;