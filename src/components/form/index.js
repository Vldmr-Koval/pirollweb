const Form = () => {

    return `

        <section class="section-form">
            <div class="container">
                <h2 class="section-form__title">Need a Project?</h2>
                <p class="section-form__subtitle">Let us know what you're looking for in an agency. We'll take a look and see 
                    if this could be the start of something beautiful.</p>
                
                <form action="#" method="POST" class="section-form_form">
                
                    <input type="text" placeholder="Your name" name="name" class="section-form_form__item section-form_form__item-name">
                    <input type="email" placeholder="Your email" name="email" class="section-form_form__item section-form_form__item-email">
                    <input type="text" placeholder="Your title" name="title" class="section-form_form__item section-form_form__item-title">
                    <textarea type="text" placeholder="Your comment" name="comment" class="section-form_form__item section-form_form__item-comment"></textarea>
                    <button class="section-form_form__send">send message</button>        
                </form>   
        </section>

        <div id="map"></div>


    `
};


export default  Form; 
