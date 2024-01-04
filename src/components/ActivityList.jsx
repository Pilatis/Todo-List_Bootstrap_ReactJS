import React from 'react'
import Activity from './Activity'

const ActivityList = ({ tasks, handleDelete, handleEdit }) => {
  return (
    <div>
        {tasks && tasks.map((activi) => (
        <Activity 
        key={activi.id}
        id={activi.id}
        title={activi.title}
        description={activi.description}
        priority={activi.priority}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
        >
        </Activity>
      ))}
    </div>
  )
}

export default ActivityList