const Video = () => {

    return `
        <section class="section-video">
            <div class="conainer">
                <h2 class="section-video__title">Our Work Process</h2>
                <p class="section-video__subtitle">Was years it seasons was there form he in in them together over that, 
                    third sixth gathered female creeping bearing behold years.
                </p>

                <div class="section-video_player">
                    <video id="myMediaID" width='100%' poster="/src/images/video_here.png"  loop>
                        <source src="/src/video/iphone.mp4" type="video/mp4">
                    </video>               
                    <div class="section-video_player__control">
                        <button  class="control btn play"></и>
                    </div>
                </div>   
               
                 
            </div>
        </section>    


    `
};


export default Video; 
