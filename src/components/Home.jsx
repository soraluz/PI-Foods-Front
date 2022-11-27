import React from "react"
import { connect } from "react-redux"
import Recipes from "./Recipes"
import { useEffect } from "react"
import { getAllRecipes } from "../actions/action"
import '../Styles/Home.css'
import Nav from './Nav.jsx';

export function Home(props){

    {useEffect(() =>  {
        async function fetchData() {
            // You can await here
            await  props.getAllRecipes();
          }
          fetchData();
       
    }, [])}
    return <div>
        <Nav />
   {props.loading ? <span id="loading">{props.loading}</span>:null  }
   {props.ordenamiento.length?<Recipes recetas={props.ordenamiento}/>:
    props.busqueda.length?<Recipes recetas={props.busqueda}/>:
    props.filtro.length?<Recipes recetas={props.filtro}/>:null
}
    </div>
}
function mapStateToProps(state){
    return{
        recipes:state.recipes,
        filtro:state.filtro,
        busqueda:state.busqueda,
        ordenamiento:state.ordenamiento,
        loading:state.loading,
        currentPage:state.currentPage
    }
}
function mapDispatchToProps(dispatch){
    return{
        getAllRecipes:()=>dispatch(getAllRecipes())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)