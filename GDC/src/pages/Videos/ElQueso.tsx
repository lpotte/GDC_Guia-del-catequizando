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
        ID: 'j7pxTiLnFic',
        title: 'EL pecado es como el queso'
    }
];

const ElQueso: React.FC = () => {
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
                <div style={{position: 'absolute', left: '5%', right: '5%', textAlign: 'center'}}>
                    <IonTitle color="primary"><br/>EL PECADO ES COMO EL QUESO<br/></IonTitle><br/>
                    <VideoEmbebido Videos={Videos} />
                </div>
            </IonContent>
        </IonPage>
    );
};

export default ElQueso;