import {
    IonContent,
    IonIcon,
    IonItem,
    IonLabel,
    IonList
} from '@ionic/react';
import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { AppPage } from '../declarations';

interface ListaProps extends RouteComponentProps {
    appPages: AppPage[];
}

const Lista: React.FunctionComponent<ListaProps> = ({ appPages }) => (
        <IonContent>
            <IonList lines="none" >
                {appPages.map((appPage, index) => {

                    return (
                        <IonItem routerLink={appPage.url} routerDirection="none">
                            <IonIcon slot="start" icon={appPage.icon} color="primary"/>
                            <IonLabel>{appPage.title}</IonLabel>
                        </IonItem>
                    );
                })}
            </IonList>
        </IonContent>
);

export default withRouter(Lista);