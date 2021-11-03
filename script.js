 function scrolldown() {
            window.scrollTo(0, 600)
        }

        const ph = document.querySelectorAll(".loc");
        const leftb = document.getElementById("left");
        const rightb = document.getElementById("right")

        var currentslide = 0;

        var timer = setInterval(slideshow, 8000);
        slideshow();

        leftb.addEventListener("click", () => {
            console.log("click is ok")
            movleft()
            resettimer()
        })
        rightb.addEventListener("click", () => {
            console.log("rigth click is ok")
            rightmov()
            resettimer()
        })

        function movleft() {
            if (currentslide == 0) {
                currentslide = ph.length - 1;
                console.log("we came back")

            }
            else {
                currentslide--;
            }
            slidechng()
        }

        function rightmov() {
            if (currentslide == ph.length - 1) {
                currentslide = 0;


            }
            else {
                currentslide++;
                console.log("we are on second phto")
            }


            slidechng()
        }


        function slidechng() {
            for (let i = 0; i < ph.length; i++) {
                ph[i].classList.remove('visibility')
            }
            ph[currentslide].classList.add('visibility')
        }

        function slideshow() {
            rightmov()
            resettimer()
        }


        function resettimer() {
            clearInterval(timer)
            timer = setInterval(slideshow, 8000)
        }

