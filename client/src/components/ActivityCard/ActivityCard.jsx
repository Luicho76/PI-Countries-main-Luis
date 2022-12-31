import React from 'react';
import s from './activityCard.module.css'


const ActivityCard = (activity) => {
    return (
        <div className={s.cardAct}> 
            {activity && (
                <div>
                    <p><b>Actividad: </b>{activity.name}</p>
                    <p><b>Dificultad: </b>{activity.difficulty}</p>
                    <p><b>Duration: </b>{activity.duration} horas</p>
                    <p><b>Temporada: </b>{activity.season}</p>
                </div>  
            )}
        </div>
    )
}

export default ActivityCard;