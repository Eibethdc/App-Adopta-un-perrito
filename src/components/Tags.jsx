import Badge from 'react-bootstrap/Badge';

const Tags = ({backgroundColor, textBadge}) => {
    return(
        <>
            <Badge bg={backgroundColor}>{textBadge}</Badge>
        </>
    )
}
export default Tags