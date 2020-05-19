import {IonButtons, IonContent, IonHeader, IonPage, IonBackButton, IonToolbar, IonTitle} from '@ionic/react';
import React from 'react';

const Iglesia: React.FC = () => {
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
                <IonTitle color="primary" style={{textAlign: 'center'}}><br/>LOS MANDAMIENTOS DE LA IGLESIA<br/></IonTitle>
                <div style={{position: 'absolute', left: '5%', right: '5%', textAlign: 'left'}}>
                    <br/>
                    Los 5 mandamientos de la iglesia son:<br/>
                    <br/>
                    1) Oír Misa entera los domingos y fiestas de guardar. <br/>
                    2) Confesar los pecados graves cuando menos una vez al año, en peligro de muerte y si se ha de comulgar. <br/>
                    3) Comulgar por Pascua de Resurrección.<br/>
                    4) Ayunar y abstenerse de comer carne cuando lo manda la Iglesia.<br/>
                    5) Ayudar a la Iglesia en sus necesidades. <br/>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default Iglesia;