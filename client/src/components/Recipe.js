import React from "react"
import { Card, CardHeader, Image } from "semantic-ui-react"

const Recipe = ({title, calories, image}) => {
  return (
    <Card style={styles.containerList}>
        <Image src={image}  wrapped ui={false}/>
        <CardHeader>{title}</CardHeader>
      <Card.Meta>{calories}</Card.Meta>
      <i class="heart outline icon"></i>
    </Card>
  )
}

const styles = {
   listContainer: {
    display: "flex",
    justifyContent: "space-around"
  }
}
export default Recipe