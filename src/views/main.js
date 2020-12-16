import Header from '../components/header';
import Banner from '../components/banner';
import About from '../components/about';
import Skill from '../components/skill';
import Numbers from '../components/numbers'; 
import Work from '../components/work'; 
import Video from '../components/video'; 
import Services from '../components/services'; 
import TextSlider from '../components/textslider'; 
import Clients from '../components/clients'; 
import Form from '../components/form'; 
import Footer from '../components/footer'; 


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
                ${Work()}
            <div class="container">
                ${Video()}
            </div>    
             ${Services()}
             ${TextSlider()}
             ${Clients()}
             ${Form()}
             ${Footer()}

        </div>    
    `
};

const main = document.getElementById('Main');

if (main) {
    main.innerHTML = Main();
}


