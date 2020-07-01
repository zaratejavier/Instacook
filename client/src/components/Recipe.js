import React from "react"
import { Card, CardHeader, Image } from "semantic-ui-react"

const Recipe = ({title, calories, image}) => {
  return (
    <Card>
        <Image src={image}  wrapped ui={false} />
        <CardHeader>{title}</CardHeader>
      <Card.Meta>{calories}</Card.Meta>
    </Card>
  )
}

export default Recipe