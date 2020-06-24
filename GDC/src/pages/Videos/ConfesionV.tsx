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
        ID: '22_1XV73Z7k',
        title: 'CONTRICCION, CONFESION, PENITENCIA'
    }
];

const CofesionV: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="/home/videos" color="primary"/><br/>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <div style={{textAlign: 'center'}}>
                    <IonTitle color="primary" size="small"><br/>CONTRICCION, CONFESION, PENITENCIA<br/></IonTitle>
                    <VideoEmbebido Videos={Videos} />
                </div>
            </IonContent>
        </IonPage>
    );
};

export default CofesionV;