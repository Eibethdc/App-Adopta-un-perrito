import Card from 'react-bootstrap/Card';
import Tags from './Tags';

const MyCard = ({image, name, description, backgroundColor, textBadge}) =>{
    return(
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>{description}</Card.Text>
                    <Tags backgroundColor={backgroundColor} textBadge={textBadge}/>
                </Card.Body>
            </Card>
        </>
    )
}

export default MyCard