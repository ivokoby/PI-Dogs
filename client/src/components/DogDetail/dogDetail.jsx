import React, { useEffect } from "react";
import { getById, clearDetail, deleteDog } from '../../redux/actions/actions.js'
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from "react-router-dom";
import Loader from "../Loader/loader.js";
import './dogDetail.css'

const Detail = () => {
  const {id} = useParams()
  const dispatch = useDispatch()
  const details = useSelector(state => state.details)
  const history = useHistory()
  
  useEffect(() => {
    dispatch(getById(id))
    dispatch(clearDetail())
  }, [dispatch, id])
  
  const handleDeleteDog = () => {
    dispatch(deleteDog(id))
    history.push('/Home')
  }

  const goBack = () => {
    history.push('/Home')
  }

  return (
    <div className="detail">
      <div className="detail-container">
        <button onClick={goBack} className="home-button">
            Home
        </button>
      {
        Object.keys(details).length && typeof details !== 'string' ? (
          <div className="detail-body">
            <img className="detail-img" src={details.image} alt={details.name + ' img'} /> 
            <div className="detail-description">
              <h1 className="detail-title">{details.name}</h1>
              <p><span className="detail-category">Height: </span>{details.height} cm</p>
              <p><span className="detail-category">Weight: </span>{details.weight} kg</p>
              {
                details.life_span && details.life_span[0] !== ' '
                ? <p><span className="detail-category">Life span: </span>{details.life_span}</p>
                : null
              }
              {/* dogs created in db */}
              {
                Array.isArray(details.temperaments) && details.temperaments.length
                ? <p>My temperament is: {details.temperaments.map(t => Object.values(t)).join(', ')}.</p>
                : null
              }
              {/* dogs api */}
              {
                typeof details.temperaments === 'string' && details.temperaments.length
                ? <p>{details.temperaments.length ? `My temperament is: ${details.temperaments}.` : null}</p>
                : null
              }
              <div>
                {details.createdInDB && <button className="home-button" onClick={handleDeleteDog}>Delete</button>}
              </div>
            </div>
          </div>
        ) : (
          Array.isArray(details) 
          ? <Loader className="detail-container"/>
          : <h1 className="detail-dog-not-found">Dog not found :(</h1>
        )
      }
      </div>
    </div>
  );
};

export default Detail;