import {IonButtons, IonContent, IonHeader, IonPage, IonBackButton, IonToolbar, IonTitle} from '@ionic/react';
import React from 'react';

const Bienaventuranzas: React.FC = () => {
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
                <IonTitle color="primary" style={{textAlign: 'center'}}><br/>LAS BIENAVENTURANZAS<br/></IonTitle>
                <div style={{position: 'absolute', left: '5%', right: '5%', textAlign: 'center'}}>
                    <br/>
                    "Bienaventurados los pobres de espíritu, porque de ellos es el Reino de los cielos.<br/>
                    <br/>Bienaventurados los que lloran, porque ellos serán consolados.<br/>
                    <br/>Bienaventurados los mansos porque ellos poseern la tierra.<br/>
                    <br/> Bienaventurados los hambrientos y sedientos de Santidad, porque ellos serán saciados.<br/>
                    <br/> Bienaventurados los misericordiosos, porque ellos conseguirán la misericordia.<br/>
                    <br/>Bienaventurados los limpios de corazón, porque ellos verán a Dios.<br/>
                    <br/>Bienaventurados los que trabajan por la paz, porque ellos serán llamados hijos de Dios.<br/>
                    <br/>Bienaventurados los perseguidos a causa de la santidad, porque de ellos es el reino de los cielos.<br/>
                    <br/> Bienaventurados ustedes cuando los maldijeren y persiguieren y dijeren, mintiendo, todo mal contra ustedes por mi causa. Alégrense, porque la recompensa de ustedes será grande en los cielos".<br/>
                    <br/>(Mt 5,3-12).<br/>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default Bienaventuranzas;