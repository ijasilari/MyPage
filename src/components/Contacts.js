import "./css/Contacts.css";
const Contacts = () => {
    return(
        <div>
            <div className="contactBox">
                <h1>Ilari Ijäs</h1>
                <p><i class="fa fa-envelope" ></i> ijasilari@gmail.com</p>
                <br></br>
                <a href="https://github.com/ijasilari"><i class="fa fa-github" style={{fontSize: "2rem"}}></i></a>
            </div>
        </div>
    );
}

export default Contacts;