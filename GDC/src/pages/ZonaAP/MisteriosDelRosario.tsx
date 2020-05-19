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
                <IonTitle color="primary" style={{textAlign: 'center'}}><br/>LOS MISTERIOS DEL SANTO ROSARIO<br/></IonTitle>
                <div style={{position: 'absolute', left: '5%', right: '5%', textAlign: 'left'}}>
                    <br/>
                    Misterios Gozosos (lunes y sábado)<br/>
                    <br/>
                    1. La encarnación del Hijo de Dios.<br/>
                    2. La visitación de Nuestra Señora a Santa Isabel.<br/>
                    3. El nacimiento del Hijo de Dios.<br/>
                    4. La Presentación del Señor Jesús en el templo.<br/>
                    5. La Pérdida del Niño Jesús y su hallazgo en el templo.<br/>
                    <br/>
                    Misterios Dolorosos (martes y viernes)<br/>   <br/>
                    1. La Oración de Nuestro Señor en el Huerto de Getsemaní.<br/>
                    2. La Flagelación del Señor.  <br/>
                    3. La Coronación de espinas. <br/>
                    4. El Camino del Monte Calvario cargando la Cruz. <br/>
                    5. La Crucifixión y Muerte de Nuestro Señor. <br/>  <br/>
                    Misterios Gloriosos (miércoles y domingo)<br/>
                    <br/>
                    1. La Resurrección del Señor. <br/>
                    2. La Ascensión del Señor. <br/>
                    3. La Venida del Espíritu Santo.  <br/>
                    4. La Asunción de Nuestra Señora a los Cielos. <br/>
                    5. La Coronación de la Santísima Virgen. <br/>
                    <br/>
                    Misterios Luminosos (jueves) <br/>
                    <br/>
                    1. El Bautismo en el Jordán.<br/>
                    2. La autorrevelación en las bodas de Caná. <br/>
                    3. El anuncio del Reino de Dios invitando a la conversión.<br/>
                    4. La Transfiguración.<br/>
                    5. La Institución de la Eucaristía, expresión sacramental del misterio pascual.<br/>
                    </div>
            </IonContent>
        </IonPage>
    );
};

export default Obras;