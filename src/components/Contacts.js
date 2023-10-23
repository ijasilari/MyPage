import "./css/Contacts.css";
import {BsGithub} from "react-icons/bs";

const Contacts = () => {
    return(
        <div>
            <div className="contactBox">
                <h1>Ilari Ijäs</h1>
                <p><i class="fa fa-envelope" ></i> ijasilari@gmail.com</p>
                <br></br>
                <a href="https://github.com/ijasilari"><BsGithub className="gitLogo"/></a>
            </div>
        </div>
    );
}

export default Contacts;