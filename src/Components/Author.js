import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import { TiHome } from 'react-icons/ti';

const Author = () => {
    return ( 
        <div>
            <Container fluid="md" id="container">
                <span>Victor Melo</span>
                <Link to="/">
                    <TiHome color="white" size="2rem"></TiHome>
                </Link>
            </Container>
            <Container fluid="fluid" id="author-wrapper">
                <Container id="image-container">
                    <Container id="author-image-wrapper"/> 
                </Container>
                
                <Container fluid="md" id="author-description-wrapper">
                    <span>
                        Victor has a bachelor's degree in Electrical Engineering at "Federal University of Maranhão".
                        He has had a passion for programming languages since the beginning of his academic career 
                        ,so has now decided to follow this path.
                        He intends to master React, Node and its respectives supporting technologies as his first goal.
                    </span>
                </Container>
            </Container>


        </div>
     );
}
 
export default Author;  