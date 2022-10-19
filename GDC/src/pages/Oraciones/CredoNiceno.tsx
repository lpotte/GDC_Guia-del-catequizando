import {
    IonButtons,
    IonContent,
    IonHeader,
    IonPage,
    IonBackButton,
    IonToolbar, IonTitle
} from '@ionic/react';
import React from 'react';

const CredoNiceno: React.FC = () => {
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
                    <IonTitle color="primary"><br/> Credo Niceno-Constantinopolitano <br/></IonTitle>
                    <br/>
                    Creo en un solo Dios, Padre todopoderoso, <br/>
                    Creador del cielo y de la tierra <br/>
                    de todo lo visible y lo invisible. <br/>
                    <br/>
                    Creo en un solo Señor, Jesucristo,<br/>
                    Hijo único de Dios, nacido del Padre antes de todos los siglos: <br/>
                    Dios de Dios, Luz de Luz, Dios verdadero de Dios verdadero,<br/>
                    engendrado, no creado, de la misma naturaleza del Padre,<br />
                    por quien todo fue hecho;<br />
                    que por nosotros lo hombres,<br />
                    y por nuestra salvación bajó del cielo,<br />
                    y por obra del Espíritu Santo se encarnó de María, la Virgen,<br />
                    y se hizo hombre;<br />
                    y por nuestra causa fue crucificado<br />
                    en tiempos de Poncio Pilato;<br />
                    padeció y fue sepultado,<br />
                    y resucitó al tercer día, según las Escrituras,<br />
                    y subió al cielo,<br />
                    y está sentado a la derecha del Padre;<br />
                    y de nuevo vendrá con gloria<br />
                    para juzgar a vivos y muertos,<br />
                    y su reino no tendrá fin.<br />
                    <br />
                    Creo en el Espíritu Santo,<br />
                    Señor y dador de vida,<br />
                    que procede del Padre y del Hijo,<br />
                    que con el Padre y el Hijo<br />
                    recibe una misma adoración y gloria,<br />
                    y que habló por los profetas.<br />
                    <br />
                    Creo en la Iglesia, que es una, santa, católica y apostólica.<br />
                    Confieso que hay un solo bautismo<br />
                    para el perdón de los pecados.<br />  
                    Espero la resurrección de los muertos<br />
                    y la vida del mundo futuro.<br />
                    <br />
                    <br/>Amén.<br/>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default CredoNiceno;