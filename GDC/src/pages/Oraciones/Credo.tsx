import {
    IonButtons,
    IonContent,
    IonHeader,
    IonPage,
    IonBackButton,
    IonToolbar, IonTitle
} from '@ionic/react';
import React from 'react';

const Credopag: React.FC = () => {
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
                    <IonTitle color="primary"><br/> EL CREDO <br/></IonTitle>
                    <br/>
                    Creo en Dios, Padre Todopoderoso <br/>
                    Creador del cielo y de la tierra.<br/>
                    Creo en Jesucristo, su único Hijo, Nuestro Señor,<br/>
                    que fue concebido por obra y gracia del Espíritu Santo, <br/>
                    nació de Santa María Virgen, <br/>
                    padeció bajo el poder de Poncio Pilato <br/>
                    fue crucificado, muerto y sepultado,<br/>
                    descendió a los infiernos,<br/>
                    al tercer día resucitó de entre los muertos,<br/>
                    subió a los cielos<br/>
                    y está sentado a la derecha de Dios, Padre todopoderoso.<br/>
                    Desde allí ha de venir a juzgar a vivos y muertos.<br/>
                    <br/>
                    Creo en el Espíritu Santo,<br/>
                    la santa Iglesia católica,<br/>
                    la comunión de los santos,<br/>
                    el perdón de los pecados,<br/>
                    la resurrección de la carne<br/>
                    y la vida eterna.<br/>
                    <br/>Amén.<br/>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default Credopag;