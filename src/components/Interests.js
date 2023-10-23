import "./css/Main.css";

const Interests = () => {
    return(
        <div>
            <div className="skillsContainer">
                <h1 className="heading">My hobbies</h1>
                <div className="parentSkillContainer">
                    <div className="skillContainer">
                        <h2>Sports</h2>
                        <p> During winter I like to snowboard and swim. At summer I like to run. I also train at the gym.</p>
                    </div>
                </div>
                <div className="parentSkillcontainer">
                    <div className="skillContainer">
                        <h2>Cooking</h2>
                        <p>I love to try new recipies and explore different ingredients.
                        </p>
                    </div>
                </div>
                <div className="parentSkillcontainer">
                    <div className="skillContainer">
                        <h2>Videogames</h2>
                        <p>I use videogames to relax and connect with my friends.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Interests;