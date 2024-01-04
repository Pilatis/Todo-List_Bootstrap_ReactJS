import React from 'react'

//EMOJIS//
import { CiFaceSmile } from "react-icons/ci";
import { IoPencil } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { MdCancel } from "react-icons/md";
import { VscAdd } from "react-icons/vsc";


const Activity = ({ id, priority, description, title, handleDelete, handleEdit }) => {

  function priorityLabel(param, icon) { //recebe um parâmetro
    switch (param) {
      case '1':
        return icon ? 'Baixa' : 'success';
      case '2':
        return icon ? 'Normal' :'warning';
      case '3':
        return icon ? 'Alta' : 'danger';
      default:
        return "Não definido"
    }
  }



  return (
    <>

 
      <div key={id} className={`p-3 mb-2 bg-body-secondary card me-5 m-3 mb-3 shadow-sm p-3 text-primary-emphasis  border-${priorityLabel(priority)} `}>
        <div className="card-body">
          <div className="d-flex justify-content-between ">
            <h5 className="card-title">
              <span className="badge bg-secondary me-1"> {id}</span>
              - {title}
            </h5>
            <h6>
              Prioridade:
              <span className={`ms-1 text-${priorityLabel(priority)}`}>
                <CiFaceSmile className='md-4 me-1' true />

                {priorityLabel(priority)}
              </span>
            </h6>
          </div>
          <p className="card-text">
            {description}
          </p>
          <div className="d-flex justify-content-end pt-2 m-0 border-top">
            <button className="btn btn-sm btn-outline-primary me-2" onClick={() => handleEdit(id)}>
              <IoPencil className='md-4' />
              Editar
            </button>
            <button className="btn btn-sm btn-outline-danger" onClick={() => handleDelete(id)}>
              <MdDelete className='md-8' />
              Deletar
            </button>
          </div>
        </div>
      </div>

    </>
  )
}

export default Activity