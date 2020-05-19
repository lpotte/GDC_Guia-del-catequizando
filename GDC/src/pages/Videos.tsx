import {
    IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar
} from '@ionic/react';
import React from 'react';
import {videocam} from "ionicons/icons";
import {AppPage} from "../declarations";
import Lista from "../components/Lista";

const appPages: AppPage[] = [
    {
        title: 'El Amor De Dios',
        url: '/home/Videos/AmorDeDios',
        icon: videocam
    },
    {
        title: 'Invitación A Vivir En Comunidad',
        url: '/home/Videos/ComunidadV',
        icon: videocam
    },
    {
        title: 'Contricción, Confesión, Penitencia',
        url: '/home/Videos/confesionV',
        icon: videocam
    },
    {
        title: 'Creo En Dios Padre',
        url: '/home/Videos/CreoEnDios',
        icon: videocam
    },
    {
        title: 'El Pecado Es Como El Queso',
        url: '/home/Videos/ElQueso',
        icon: videocam
    },
    {
        title: 'El Espiritu Santo',
        url: '/home/Videos/Espiritusanto',
        icon: videocam
    },
    {
        title: 'Relación Entre La Familia Y La Comunidad - Papa Francisco',
        url: '/home/Videos/Francisco',
        icon: videocam
    },
    {
        title: 'Los Frutos Del Espiritu Santo',
        url: '/home/Videos/Frutos',
        icon: videocam
    },
    {
        title: 'La Carrera Más Difícil Del Mundo',
        url: '/home/Videos/LaCarrera',
        icon: videocam
    },
    {
        title: 'Maria Madre',
        url: '/home/Videos/MariaMadre',
        icon: videocam
    },
    {
        title: 'El Oso Y El Puma',
        url: '/home/Videos/OsoPuma',
        icon: videocam
    },
    {
        title: 'Reflexión Sobre El Padre Nuestro',
        url: '/home/Videos/PadreNuestro',
        icon: videocam
    },
    {
        title: 'Los Siete Profetas De La Biblia',
        url: '/home/Videos/Profetas',
        icon: videocam
    },
    {
        title: 'Los Sacramentos Te Harán Fuerte',
        url: '/home/Videos/SacramentosFuerte',
        icon: videocam
    },
    {
        title: 'Los Sacramentos De Iniciación Cristiana',
        url: '/home/Videos/SacramentosIniciacion',
        icon: videocam
    },
    {
        title: 'El Verdadero Sentido Del Cristiano',
        url: '/home/Videos/Sentido',
        icon: videocam
    },
    {
        title: 'Los Diez Valores Esenciales De La Familia',
        url: '/home/Videos/Valores',
        icon: videocam
    }
];

const videos: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar mode="ios" color="primary">
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>Lista De Videos Reflexión</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <Lista appPages={appPages} />
            </IonContent>
        </IonPage>
    );
};
export default videos;