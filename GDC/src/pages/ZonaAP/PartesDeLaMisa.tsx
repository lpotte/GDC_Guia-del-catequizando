import {IonButtons, IonContent, IonHeader, IonPage, IonBackButton, IonToolbar, IonTitle} from '@ionic/react';
import React from 'react';

const PMisa: React.FC = () => {
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
            <IonTitle color="primary" style={{textAlign: 'center'}}><br/>PARTES DE LA MISA<br/></IonTitle>
                <div style={{position: 'absolute', left: '5%', right: '5%', textAlign: 'left'}}>
                <br/>
                Las partes de las misa son: <br/>   
                <br/>          
                1) Ritos iniciales <br/>  
                - Entrada<br/>  
                - Saludo al altar y al pueblo congregado<br/>  
                - Acto penitencial<br/>  
                - Señor, ten piedad<br/>  
                - Gloria a Dios en el cielo<br/>  
                - Colecta<br/>  
                <br/>  
                2) Liturgia de la Palabra <br/>  
                - Silencio<br/>  
                - Lecturas bíblicas<br/>  
                - Salmo responsorial<br/>  
                - Aclamación antes de la lectura del Evangelio<br/>  
                - Homilía<br/>  
                - Profesión de fe<br/>  
                - Oración universal<br/>  
                <br/>  
                3) Liturgia eucarística <br/>  
                - Preparación de los dones<br/>  
                - Oración sobre las ofrendas<br/>  
                - Plegaria Eucarística<br/>  
                - Rito de la comunión<br/>  
                - Oración del Señor<br/>  
                - Rito de la paz<br/>  
                - Fracción del Pan<br/>  
                - Comunión<br/>  
                <br/>  
                4) Rito de conclusión <br/>  
                </div>
            </IonContent>
        </IonPage>
    );
};

export default PMisa;