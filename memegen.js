document.addEventListener("DOMContentLoaded", function() {
    var input = document.getElementById("imginput");
    var memeimage = document.getElementById("memeimg")
    var meme = document.getElementById("Meme")
    var finalmeme = document.getElementById("finalmeme");
    var topText = document.getElementById("toptext");
    var btmText = document.getElementById("btmtext");
    var container = document.getElementById("container");

    submit();

    function submit() {
        let count = 0;
        memeimage.addEventListener("submit", function(e) {
            e.preventDefault()
            createCanvas();
            count++;
            console.log(count);
            //if (count > 1) {
            // var meme2 = document.createElement("tr")
            // var canvas2 = document.createElement("canvas")
            // container.append("meme2")
            // meme2.append("canvas2")

            // }
        })

        function createCanvas() {
            var canvas = document.createElement('canvas')
            var ctx = canvas.getContext("2d")
            var placement = document.createElement("td")
            placement.id = "placement"
            var image = document.createElement("img");
            canvas.id = "canvas";
            image.height = canvas.height
            image.width = canvas.width
                // canvas.style.height = "400"
                // canvas.style.width = "400"
            image.class = "image";
            //image.id = "image";
            image.src = input.value;
            container.append(placement);
            placement.append(canvas);
            image.addEventListener("load", function() {
                ctx.drawImage(image, 0, 0, image.width, image.height)

                ctx.fillText(topText.value, 40, 50)
                ctx.fillText(btmText.value, 40, 150)
            })
            ctx.font = "30px serif"
            ctx.fillStyle = "White"
            ctx.textAlign = "centered";
            // Buttons();

            // function Buttons() {
            //     let anchor = document.createElement("a")
            //     canvas.prepend(anchor)
            //     anchor.id = "anchor"
            //     anchor.href = 'meme.png'
            //     anchor.download = canvas;
            //     anchor.addEventListener("click", function(e) {
            //         let urlmeme = canvas.toDataURL("image/png")
            //         localStorage.set("canvas", urlmeme);
            //     })
            const button = document.createElement("button");
            button.id = "button"
            button.innerText = "X"
            placement.append(button)
            button.addEventListener("click", function(e) {
                canvas.parentNode.removeChild(canvas);
                button.style.display = "none"
            })

        }

    }

})