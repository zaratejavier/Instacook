import React from "react"
import { Card, CardHeader, Image, Icon } from "semantic-ui-react"

const Recipe = ({ title, calories, image, time }) => {
  
const heart = (
  <a>
    <Icon style={{ color: 'red' }} name='heart outline' />
  </a>
)

  return (
    <Card style={styles.containerList}>
      <Image src={image} wrapped ui={false} />
        {heart}
      <CardHeader style={{ fontWeight: 'bold' }}>{title}</CardHeader>
      <Card.Meta>Calories: {Math.round(calories)}</Card.Meta>
      {/* <Card.Description>
        Cook time: {time}
      </Card.Description> */}
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