import React, {useState, useEffect} from "react"
import { Header, Form, Button } from "semantic-ui-react"
import Recipe from "./Recipe"
import {APP_ID, APP_key} from '../env'

const Home = () => {
  
 

  const [recipes, setRecipes] = useState([])

  useEffect(() => {
    getRecipes();
  }, [])
  
  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_key}`)
    const data = await response.json();
    console.log(data)
    setRecipes(data.hits)
  }

  return (
    <>
    <Header as='h3' textAlign='center' >InstaCook</Header>
      <Form  className="search-form"  >
        <input className="search-bar" type="text"
        placeholder="Search"/>
        <Button className="search-button" type="submit" ><i class="search icon"></i></Button>
      </Form>
      {recipes.map(recipe => (
        <Recipe title={recipe.recipe.label} calories={recipe.recipe.calories}
          image={recipe.recipe.image}/>
      ))}
      

      </>
  )
}


export default Home