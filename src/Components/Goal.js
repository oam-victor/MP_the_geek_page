import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import { TiHome } from 'react-icons/ti';

const Goal = () => {
    return ( 
        <div>
            <Container fluid="md" id="container">
                <span>Project Goal</span>
                <Link to="/">
                    <TiHome color="white" size="2rem"></TiHome>
                </Link>
            </Container>

            <Container fluid="fluid" id="goal-wrapper">
                <Container id="title-container">
                    <span>Goal</span>
                </Container>
                
                <Container fluid="md" id="goal-description-wrapper">
                    <span>
                        This project was created in order to develop the basic concepts of React. For example, using
                        components, react-icons, router, etc. Also, it was used to learn how to integrate bootstrap and
                        react. The project was not finished due to time reasos. However, the author feels like the learning
                        goal was achieved.
                    </span>
                </Container>
            </Container>


        </div>
     );
}
 
export default Goal;  