<template>
<section class="container section-a" id="pp">
    <base-box>
        <div class="row">
            <div class="custom-frame" v-scrollanimation>
                <!-- <iframe v-scrollanimation width="860" height="415" src="https://www.aparat.com/video/video/embed/videohash/ogOfI/vt/frame" frameborder="0"></iframe> -->
                <video id="myVideo" controls width="500">
                    <source src="@/assets/video/Videos.mp4" type="video/webm" />
                    sorry
                </video>
            </div>

            <div class="row main-content">
                <h1 id="myP">Lorem, ipsum dolor.</h1>
                <p v-scrollanimation>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, in. A modi sed porro consectetur. Ab nihil veniam ex suscipit, eaque quisquam consequatur eum voluptas culpa ipsa hic doloremque autem pariatur vero iste, aliquid, nemo fuga sint? Est laborum eveniet quis, fugiat aperiam praesentium provident recusandae, vel temporibus culpa quibusdam.</p>
            </div>
        </div>
    </base-box>
</section>
</template>

<script>
export default {
    // mounted() {
    //     let options = {
    //         root: null,
    //         rootMargin: '0px',
    //         threshold: 1.0
    //     };
    //     let callback = (entries, _) => {
    //         entries.forEach(entry => {
    //             if (entry.target.id == 'myVideo') {
    //                 if (entry.isIntersecting) {
    //                     entry.target.play();
    //                 } else {
    //                     entry.target.pause();
    //                 }
    //                 _
    //             }
    //         });
    //     }
    //     let observer = new IntersectionObserver(callback, options);
    //     observer.observe(document.querySelector('#myVideo'));
    // }
    mounted(){
        var vi = document.getElementById('myVideo')
        window.onscroll = function() {myFunction()};
        function myFunction() {
            // var elmnt = document.getElementById("myVideo");
            // var elmntDiv = document.getElementById("myVideo");
            // var st = elmnt.offsetTop;
            // console.log(st)
            var el = document.documentElement.scrollTop;
            // console.log(el)

            if(el > 500 && el < 850)
            {
                vi.play();
            }else {
                vi.pause();
            }
        }
    }
    
}
</script>

<style>


.test {
    background-color: yellow;
}

.before-enter {
    opacity: 0;
    transform: scale(.5) rotateZ(-25deg);
    transition: all 1s ease-out;
}

.enter {
    opacity: 1;
    transform: scale(1) rotateZ(0deg);
}
</style>
