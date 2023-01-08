import "./css/Main.css";
import SkillButton from "./SkillButton";
import weatherimg from "./images/weatherimg.PNG";

const Main = () => {

    return(
        <div>
            <div className='mainContainer'>
                <div className="innerContainer">
                    <h1>Hi, I'm Ilari | <h1 className="underline">Software Engineering student</h1> & <h1 className="underline">Developer</h1></h1>
                    <p>I love learning and creating new things.</p>
                </div>
            </div>

            <div className="skillsContainer">
                <h1 className="heading">My Skills</h1>
                <div className="parentSkillContainer">
                    <div className="skillContainer">
                        <h2>C++</h2>
                        <p >Good understanding of the language and my most used language.
                        I have mainly used it in school projects.
                        </p>
                        <p>Enviroments I have worked with:</p>
                        <ul className="envList">
                            <li>- Qt</li>
                            <li>- Arduino</li>
                            <li>- Visual studio</li>
                        </ul>
                    </div>
                </div>
                <div className="parentSkillcontainer">
                    <div className="skillContainer">
                        <h2>JavaScript</h2>
                        <p>I have used <strong>JavaScript</strong>, <strong>HTML</strong> and <strong>CSS</strong> to make web applications for school projects.
                        I have some experience with Firebase.
                        I am more familiar with frontend,
                        but I'm excited to learn backend in currently ongoing courses. JavaScript is my second most used language.
                        </p>
                        <p>Enviroments and libraries I have worked with:</p>
                        <ul className="envList">
                            <li>- <strong>React</strong></li>
                            <li>- <strong>Node.js</strong></li>
                            <li>- React native</li>
                            <li>- Visual studio code</li>
                        </ul>
                    </div>
                </div>
                <div className="parentSkillcontainer">
                    <div className="skillContainer">
                        <h2>Python</h2>
                        <p >I have learned Python on my own using online courses. I have also used Python in school to do <strong>machine learning </strong>
                            and <strong>data analytics</strong> using Spyder. 
                        </p>
                    </div>
                </div>
                <div className="parentSkillcontainer">
                    <div className="skillContainer">
                        <h2>Java</h2>
                        <p >I have used Java in school to make Android apps with Android Studio.
                        </p>
                    </div>
                </div>
                <div className="parentSkillcontainer">
                    <div className="skillContainer">
                        <h2>C#</h2>
                        <p>I have done two <strong>Unity</strong> online courses where I have used C# to make videogames. 
                        </p>
                    </div>
                </div>
                <h1 className="heading">Education</h1>
                <div className="parentSkillcontainer">
                    <div className="skillContainer">
                        <h2>Tampere University of Applied Sciences</h2>
                        <p>Third year Software Engineering student. First two years I studied Electrical and Automation Engineering.
                        </p>
                    </div>
                    <div className="skillContainer">
                        <h2>Liedon lukio</h2>
                        <p>Finnish Matriculation Examination (2016-2019)
                        </p>
                    </div>
                </div>
            </div>
            <br></br>
            <br></br>
        </div>
        
    );

};

export default Main;