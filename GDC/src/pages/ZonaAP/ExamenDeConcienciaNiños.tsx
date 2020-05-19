import {IonButtons, IonContent, IonHeader, IonPage, IonBackButton, IonToolbar, IonTitle} from '@ionic/react';
import React from 'react';

const Exm: React.FC = () => {
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
                <IonTitle color="primary" style={{textAlign: 'center'}}><br/>EXAMEN DE CONCIENCIA PARA NIÑOS<br/></IonTitle>
                <div style={{position: 'absolute', left: '5%', right: '5%', textAlign: 'left'}}>
                    <br/>
                    ¿He rezado mis oraciones?<br/>
                    ¿He ido a Misa los domingos?<br/>
                    ¿He tomado el nombre de Dios en vano?<br/>
                    ¿Me he distraído voluntariamente en Misa o en la Iglesia?<br/>
                    ¿He ayudado en casa?<br/>
                    ¿He sido egoísta o he tratado a mis padres y hermanos con poco cariño?<br/>
                    ¿He obedecido a mis padres y profesores?<br/>
                    ¿He compartido mis juguetes con los demás?<br/>
                    ¿He sido impaciente? ¿Me he enfadado?<br/>
                    ¿He sido caprichoso o pesado para que las cosas se hicieran como yo quiero?<br/>
                    ¿Pierdo el tiempo en clase?<br/>
                    ¿He hecho mis deberes lo mejor que puedo? ¿He copiado en los exámenes?<br/>
                    ¿Me he peleado?<br/>
                    ¿He hecho daño a alguna persona hablando mal de ella?<br/>
                    ¿He dicho mentiras?<br/>
                    ¿He robado algo?<br/>
                    ¿He estropeado alguna cosa que no era mía a propósito?<br/>
                    ¿He dado buen ejemplo?<br/>
                    ¿He animado a otros a que hicieran cosas malas?<br/>
                    ¿He sido egoísta de pensamiento o de obra?<br/>
                    ¿He tenido celos de otros?<br/>
                    ¿He excluido a alguien de mis juegos?<br/>
                    ¿He rezado por los demás y les he ayudado para que estén más cerca de Dios?<br/>
                    <br/>
                    Tomado de: <a href='https://www.aciprensa.com/recursos/examen-de-conciencia-para-ninos-5079'>https://www.aciprensa.com/recursos/examen-de-conciencia-para-ninos-5079</a>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default Exm;