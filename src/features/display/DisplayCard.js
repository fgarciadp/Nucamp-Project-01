import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';

const DisplayCard = ({ item }) => {
    const { id, image, name, description } = item;
    return (
        
            <Card>
                <Link to={`${id}`}>
                    <CardImg src={image} alt={name} id={id}/>
                </Link>
                <CardBody>
                    <CardTitle>{name}</CardTitle>
                    <CardText>{description}</CardText>
                </CardBody>
            </Card>
        
    );
};

export default DisplayCard;