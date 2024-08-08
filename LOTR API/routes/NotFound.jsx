import {Link} from "react-router-dom";

const NotFound = () => {

    return (
        <div className="notFound">
            <div className="return404">
                <p style={{color: "rgb(255, 102, 102)", fontSize: "2em"}}>We have wandered to the Depth of Moria</p>
                <Link style={{color: "whitesmoke", fontSize: "1.5em", textDecoration: "underlined"}} to="/">
                    Return safely Home to the Shire
                </Link>
            </div>
        </div>
    )
}

export default NotFound