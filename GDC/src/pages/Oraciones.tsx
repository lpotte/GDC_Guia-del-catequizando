import {
    IonButtons,
    IonContent,
    IonHeader,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar
} from '@ionic/react';
import {bookmark} from 'ionicons/icons';
import React from 'react';
import Lista from "../components/Lista";
import {AppPage} from "../declarations";


const appPages: AppPage[] = [
    {
        title: 'Acto De Contricción',
        url: '/home/oraciones/Actodecontriccion',
        icon: bookmark
    },
    {
        title: 'Alma De Cristo',
        url: '/home/oraciones/Almadecristo',
        icon: bookmark
    },
    {
        title: 'Angel De La Guarda',
        url: '/home/oraciones/Angeldelaguarda',
        icon: bookmark
    },
    {
        title: 'Ave María',
        url: '/home/oraciones/Avemaria',
        icon: bookmark
    },
    {
        title: 'Bajo Tu Amparo',
        url: '/home/oraciones/Bajotuamparo',
        icon: bookmark
    },
    {
        title: 'Credo Largo',
        url: '/home/oraciones/credoniceno',
        icon: bookmark
    },
    {
        title: 'Credo',
        url: '/home/oraciones/credo',
        icon: bookmark
    },
    {
        title: 'Gloria Largo',
        url: '/home/oraciones/Gloria',
        icon: bookmark
    },
    {
        title: 'Gloria Corto',
        url: '/home/oraciones/Gloriacorto',
        icon: bookmark
    },
    {
        title: 'La Salve',
        url: '/home/oraciones/Lasalve',
        icon: bookmark
    },
    {
        title: 'Padre Nuestro',
        url: '/home/oraciones/Padrenuestro',
        icon: bookmark
    },
    {
        title: 'Yo Pecador',
        url: '/home/oraciones/Yopecador',
        icon: bookmark
    }
];

const Oraciones: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color="primary">
                <IonButtons slot="start">
                    <IonMenuButton />
                </IonButtons>
                    <IonTitle>Lista De Oraciones</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <Lista appPages={appPages} />
            </IonContent>
        </IonPage>
    );
};

export default Oraciones;