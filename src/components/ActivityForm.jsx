import React, { useEffect, useState } from 'react'

//SVG
import { MdCancel } from "react-icons/md";
import { VscAdd } from "react-icons/vsc";


const initialActivity = {
  id: 0,
  title: '',
  priority: 0,
  description: ''
};

const ActivityForm = ({ handleAddActivity, tasks, handleActivity, handleupdateActivity, handleCancelActivity }) => {


  const actualActivity = () => {//atividadeAtual

    if (handleActivity.id !== 0) {
      return handleActivity;

    } else {
      return initialActivity;

    }

  }

  const [editActivity, setEditActivity] = useState(actualActivity());

  useEffect(() => {
    if (handleActivity.id !== 0);
    setEditActivity(handleActivity)


  }, [handleActivity])

  const inputTextHandler = (e) => {
    const { name, value } = e.target


    setEditActivity({ ...editActivity, [name]: value })

  }

  //Button de salvar
  const handleSubmit = (e) => {
    e.preventDefault();

    if (handleActivity.id !== 0) {//a atividade selecionada tem que ser diferente de 0
        handleupdateActivity(editActivity)    //se for executa essa linha de atualizar

    } else { //se não, tem que adicionar a atividade
      handleAddActivity(editActivity)
    }
    setEditActivity(initialActivity)
  }

//Função de cancelar
  const handleCancel = (e) => {
    e.preventDefault();

    handleCancelActivity()

    setEditActivity(initialActivity)
  }



  return (
    <>
      <div className="bg-success p-2 text-white mt-3 ">
        <h1 className='text-center'>TodoList_Bootstrap</h1>
      </div>

      <form className="row g-3 m-3 p-3 mb-2 p-3 mb-2 p-3 mb-2 bg-body-secondary" onSubmit={handleSubmit}>

        <div className="col-md-4  m-3 ">
          <label className='form-label'>Titulo</label>
          <input
            id="title"
            name="title"
            type="text"
            className='form-control'
            value={editActivity.title}
            onChange={inputTextHandler}
          />
        </div>

        <div className="col-md-4">
          <label className="form-label">Prioridade</label>
          <select
            id="priority"
            name='priority'
            className="form-select"
            value={editActivity.priority}
            onChange={inputTextHandler}
          >
            <option defaultValue="0">Selecionar ...</option>
            <option value="1">Baixa</option>
            <option value="2">Normal</option>
            <option value="3">Alta</option>
          </select>
        </div>

        <div className="col-md-8 m-3">
          <label className='form-label'>Descrição</label>
          <textarea
            id="description"
            name="description"
            type="text" className='form-control'
            value={editActivity.description}
            onChange={inputTextHandler}
          />
           <hr />
        </div>

       

        <div className="col-12 mt-0">
          {
            editActivity.id === 0 ?//se estiver na tela normal vai aparecer somente um botão
              (<button
                className='btn btn-outline-secondary'
                type='submit'
              >
                + Atividade
              </button>) : (//se estiver selecionado no editActivity vai aparecer os 2 botão
                <>
                  <button
                    className='btn me-1 btn-outline-success'
                    type='submit'
                  >
                    <VscAdd className='md-5 me-1 fs-5' />{/**me-1: tipo de gap> afastar elementos */}
                    Salvar
                  </button>
                  <button
                    className='btn btn-outline-danger'
                    onClick={handleCancel}
                  >
                    <MdCancel className='md-5 me-1 fs-5' />
                    Cancelar
                  </button>
                </>
              )
          }
        </div>

      </form>
    </>
  )
}

export default ActivityForm