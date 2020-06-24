import React from 'react';
import VideoEmbebido from "../../components/VideoEmbebido";
import { VideoPlay} from "../../declarations";
import {
    IonBackButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar
} from "@ionic/react";

const Videos: VideoPlay[] = [
    {
        ID: '9vZ7rWQoNiI',
        title: 'LOS SACRAMENTOS TE HARAN FUERTE'
    }
];

const SacramentosFuerte: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="/home/videos" color="primary"/>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <div style={{textAlign: 'center'}}>
                    <IonTitle color="primary" size="small"><br/>LOS SACRAMENTOS TE HARAN FUERTE<br/></IonTitle><br/>
                    <VideoEmbebido Videos={Videos} />
                </div>
            </IonContent>
        </IonPage>
    );
};

export default SacramentosFuerte;