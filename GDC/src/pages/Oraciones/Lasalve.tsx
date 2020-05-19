import {
    IonButtons,
    IonContent,
    IonHeader,
    IonPage,
    IonBackButton,
    IonTitle,
    IonToolbar
} from '@ionic/react';
import React from 'react';

const Avemariapag: React.FC = () => {
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
                    <br/> <IonTitle color="primary">LA SALVE </IonTitle><br/>
                    <br/>
                    Dios te salve, Reina y Madre de misericordia,<br/>
                    vida, dulzura y esperanza nuestra.<br/>
                    Dios te salve.<br/>
                    A Ti clamamos los desterrados hijos de Eva,<br/>
                    a Ti suspiramos, gimiendo y llorando en este valle de lágrimas.<br/>
                    Ea, pues, Señora Abogada Nuestra,<br/>
                    vuelve a nosotros tus ojos misericordiosos,<br/>
                    y después de este destierro, muéstranos a Jesús,<br/>
                    fruto bendito de tu vientre.<br/>
                    Oh, clemente, oh piadosa, oh dulce Virgen María.<br/>
                    Ruega por nosotros, Santa Madre de Dios,<br/>
                    para que seamos dignos de alcanzar<br/>
                    las promesas de Nuestro Señor Jesucristo.<br/>
                    <br/>Amén.<br/>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default Avemariapag;