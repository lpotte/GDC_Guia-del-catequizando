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
                <IonTitle color="primary" style={{textAlign: 'center'}}><br/>LAS BIENAVENTURANZAS<br/></IonTitle>
                <div style={{position: 'absolute', left: '5%', right: '5%', textAlign: 'left'}}>
                    <br/>
                    ¿He rechazado o abandonado mi fe? <br/>
                    ¿Me he preocupado por conocerla mejor?<br/> 
                    ¿La he defendido, o me he avergonzado de ella?<br/>
                    ¿He tomado el nombre de Dios en vano?<br/>
                    ¿He hecho espiritismo o he confiado en adivinos u horóscopos?<br/>
                     ¿He mostrado falta de respeto por las personas, lugares o cosas santas?<br/>
                    ¿He faltado voluntariamente a la Santa Misa los domingos o días de precepto? <br/>
                    ¿Me he olvidado de Dios abandonando mis oraciones?<br/>
                    ¿He recibido al Señor en la Sagrada Comunión teniendo algún pecado grave en mi conciencia?<br/>
                    ¿Le he recibido sin agradecimiento o sin la debida reverencia?<br/>
                    ¿He ayudado poco en casa?<br/>
                    ¿He tratado con poco cariño a mis padres?<br/>
                    ¿He sido impaciente, envidioso?<br/>
                    ¿Me he enfadado? <br/>
                    ¿He fomentado el resentimiento o no he estado dispuesto a perdonar?<br/>
                    ¿He odiado a alguien o le he juzgado mal?<br/>
                    ¿He descuidado mis deberes de estudiante?<br/>
                    ¿He sido perezoso?<br/>
                    ¿He tratado con falta de respeto a mis profesores o a otras personas mayores?<br/>
                    ¿Me he peleado?<br/>
                    ¿He hecho daño a alguien con insultos o hablando mal de ellos?<br/>
                    ¿He revelado algún secreto o he dicho cosas solo para dañar a otros?<br/>
                    ¿He dicho o he pensado cosas impuras?<br/>
                    ¿Las he hecho conmigo mismo o con otros?<br/>
                    ¿He mirado imágenes o películas pornográficas?<br/>
                    ¿He dicho mentiras para justificarme, dañar a otros o por darme más importancia?<br/>
                    ¿He robado algo?<br/>
                     ¿He estropeado algo a propósito?<br/>
                    ¿He tenido envidia de otros por lo que tienen o por el buen resultado de su trabajo? <br/>
                    ¿Pongo mi corazón en tener cosas?<br/>
                    ¿He ayudado o fomentado que otros hagan el mal?<br/>
                    ¿He tomado alcohol en exceso?<br/>
                     ¿He consumido drogas?<br/>
                    ¿He sido egoísta de pensamiento o de obra?<br/>
                    ¿He preferido mi comodidad al servicio a los demás?<br/>
                    ¿He desatendido mi responsabilidad de acercar a los demás a Dios con mi ejemplo y mi palabra?<br/>
                    <br/>
                    Tomado de: <a href='https://www.aciprensa.com/recursos/examen-de-conciencia-para-ninos-5079'>https://www.aciprensa.com/recursos/examen-de-conciencia-para-ninos-5079</a>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default Exm;