import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { getDetailRecipe } from "../actions/action"
import '../Styles/Detail_Recipe.css'
import { useHistory,useParams } from "react-router-dom"

export default function Detail_Recipe(props){
    const id=useParams().id
    const history=useHistory()
    const dispatch=useDispatch()
    console.log("id",id)
    useEffect(()=>{
      
            async function fetchData() {
              // You can await here
              await dispatch(getDetailRecipe(id))
              
            }
            fetchData();       
       
    },[])
    const detail=useSelector(state=>state.detail)
    function handleClick(){                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
        history.goBack()
    }

    var tipos
    if(detail.diets){
    tipos=new Set([...detail.diets])
    }
    else { tipos=new Set([])}
    if (detail.vegetarian) tipos.add('vegetarian')
    if (detail.vegan) tipos.add('vegan')
    if (detail.glutenFree) tipos.add('gluten free')
    if (detail.dairyFree) tipos.add('dairy free')
    var arreglo=[...tipos]    
   
    return <div className="detail">
       
         {/*loading ? 'loading...' :null */ }
         <h2>{detail.title}</h2>
            {detail.image ? <img src={detail.image} alt='Imagen no encontrada' />:null}
            <p>{detail.dishTypes}</p>
            <p dangerouslySetInnerHTML={{__html:detail.summary}} />
            <p>{ arreglo?.join(" - ")}</p>
            <p dangerouslySetInnerHTML={{__html:detail.steps}} />
            <button onClick={handleClick}>Regresar</button>
        </div>    
}