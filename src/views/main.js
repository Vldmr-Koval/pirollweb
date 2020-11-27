import Header from '../components/header';
import Banner from '../components/banner';
import About from '../components/about';
import Skill from '../components/skill';
import Numbers from '../components/numbers';


const Main = () => {

    return `
        <div class="someGlobalClass">
            
          
            <div class="container">
                ${Header()}
            </div>
            
                ${Banner()}

            <div class="container">
                ${About()}
            </div>
                ${Skill()}
                ${Numbers()}
                

        </div>    
    `
};

const main = document.getElementById('Main');

if (main) {
    main.innerHTML = Main();
}

