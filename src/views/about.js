import Header from '../components/header';
import Banner from '../components/banner';
import About from '../components/about';
import Skill from '../components/skill';
import Footer from '../components/footer'; 


const AboutP = () => {

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
               
             ${Footer()}

        </div>    
    `
};

const main = document.getElementById('AboutP');

if (main) {
    main.innerHTML = AboutP();
}


