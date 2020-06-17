document.addEventListener("DOMContentLoaded", function() {
    var input = document.getElementById("imginput");
    var memeimage = document.getElementById("memeimg")
    var meme = document.getElementById("Meme")
    var finalmeme = document.getElementById("finalmeme");
    var topText = document.getElementById("toptext");
    var btmText = document.getElementById("btmtext");
    var container = document.getElementById("container");
    var table = document.getElementById("table")
    submit();

    function submit() {
        let count = 0;
        memeimage.addEventListener("submit", function(e) {
            e.preventDefault()
            count++;
            createCanvas();
            alertMeme();


        })

        function createCanvas() {

            var canvas = document.createElement('canvas')
            var ctx = canvas.getContext("2d")
            var placement = document.createElement("td")
            placement.id = "placement"
            var image = document.createElement("img");
            canvas.id = "canvas";
            image.height = canvas.height
            image.width = canvas.width;
            image.src = input.value;
            image.opacity = .2;
            container.append(placement);
            placement.append(canvas);

            image.addEventListener("load", function() {
                ctx.font = "30px small-caps impact"
                ctx.fillStyle = "White"
                ctx.textAlign = "centered"

                ctx.drawImage(image, 0, 0, image.width, image.height);
                ctx.fillText(topText.value, 40, 50)
                ctx.fillText(btmText.value, 40, 120)
            })

            deleteButton();
            //DO NOT CHANGE ANYTHING BELOW THIS!!!
            function deleteButton() {
                const button = document.createElement("button");
                button.id = "button"
                button.innerText = "X"
                container.append(button)
                button.addEventListener("click", function(e) {
                    if (button) {
                        canvas.parentNode.removeChild(canvas);
                        button.style.display = "none";
                    }
                })
            }

        }

        function alertMeme() {
            if (count >= 1) {
                alert("next viral meme coming your way!!");
            }
        }
    }

})



function download() {
    var imagedwnld = new Image();
    imagedwnld.src = ctx;
    localStorage(imagedwnld)

}