import {IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar} from '@ionic/react';
import React from 'react';
import Lista from "../components/Lista";
import {AppPage} from "../declarations";
import {bookmarks} from 'ionicons/icons';

const appPages: AppPage[] = [
    {
        title: 'Las  Bienaventuranzas',
        url: '/home/zonaap/bienaventuranzas',
        icon: bookmarks
    },
    {
        title: "Las tres D para vivir en comunidad",
        url: '/home/zonaap/Comunidad',
        icon: bookmarks
    },
    {
        title: 'Examen De Conciencia Niños',
        url: '/home/zonaap/ExamenDeConcienciaNiños',
        icon: bookmarks
    },
    {
        title: 'Examen De Conciencia Jovenes',
        url: '/home/zonaap/ExamenDeConcienciaJovenes',
        icon: bookmarks
    },
    {
        title: 'Los Diez Mandamientos',
        url: '/home/zonaap/losdiezmandaminetos',
        icon: bookmarks
    },
    {
        title: 'Los Dones Del Espiritu Santo',
        url: '/home/zonaap/Dones',
        icon: bookmarks
    },
    {
        title: 'Los Frutos Del Espiritu Santo',
        url: '/home/zonaap/frutos',
        icon: bookmarks
    },
    {
        title: 'Los Mandamientos De La Iglesia',
        url: '/home/zonaap/MandamientosDeLaIglesia',
        icon: bookmarks
    },
    {
        title: 'Los Sacramentos',
        url: '/home/zonaap/Sacramentos',
        icon: bookmarks
    },
    {
        title: 'Los Misterios de Santo Rosario',
        url: '/home/zonaap/MisteriosDelRosario',
        icon: bookmarks
    },
    {
        title: 'Las Obras De Misericordia',
        url: '/home/zonaap/Obras',
        icon: bookmarks
    },
    {
        title: 'Las partes de la misa',
        url: '/home/zonaap/PartesDeLaMisa',
        icon: bookmarks
    },
    {
        title: 'Los pasos para una buena confesión',
        url: '/home/zonaap/PasosParaConfesion',
        icon: bookmarks
    },
    {
        title: 'Los Pecados Capitales',
        url: '/home/zonaap/PecadosCapitales',
        icon: bookmarks
    },
    {
        title: 'La señal de la cruz',
        url: '/home/zonaap/SeñalDeLaCruz',
        icon: bookmarks
    },
    {
        title: 'Las Virtudes Teologales',
        url: '/home/zonaap/Virtudes',
        icon: bookmarks
    }, 
];

const ListPage: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar mode="ios" color="primary">
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>Zona DAP</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <Lista appPages={appPages} />
            </IonContent>
        </IonPage>
    );
};

export default ListPage;
