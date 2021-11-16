import {Button} from "react-bootstrap"

const AnimeList = () => {
    return (  
        <div id="dropDown">

            <Button className="dropPosition" variant="light">
                <p className="fontDrop">Kimetsu No Yaiba</p>
            </Button>

            <Button className="dropPosition" variant="light">
                <p className="fontDrop">Inuyasha</p>
            </Button>

        </div>
    );
}
 
export default AnimeList
