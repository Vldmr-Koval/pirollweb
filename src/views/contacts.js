import Header from '../components/header';
import Footer from '../components/footer'; 
import Contact from '../components/contact'; 
import Form from '../components/form'; 


const Contacts = () => {

    return `
        <div class="someGlobalClass">
            
          
            <div class="container">
                ${Header()}
            </div>
               
             ${Contact()}
             

             ${Form()}

             ${Footer()}

        </div>    
    `
};

const main = document.getElementById('Contacts');

if (main) {
    main.innerHTML = Contacts();
}



  

