document.addEventListener("DOMContentLoaded", function() {
        var input = document.getElementById("imginput");
        var finalmeme = document.getElementById("finalmeme");
        var topText = document.getElementById("toptext");
        var btmText = document.getElementById("btmtext");
        var fintoptext = document.getElementById("fintoptext");
        var finbtmtext = document.getElementById("finbtmtext");
        var container = document.getElementById("container");
        submit();

        function submit() {
            document.getElementById("memeimg").addEventListener("submit", function(e) {
                e.preventDefault();
                memeImage();
            })
        }

        function memeImage() {
            var finalmeme = document.createElement("img");
            finalmeme.id = "finalMeme";
            //finalmeme.className = "newImage"
            fintoptext.innerText = topText.value;
            finbtmtext.innerText = btmText.value;
            finalmeme.src = input.value;
            document.getElementById("Meme").append(finalmeme);
            deleteButton();

            function deleteButton() {
                const deleter = document.getElementById("deleter")
                const button = document.createElement("button");
                button.classList = "deletbtn";
                button.innerText = "X";
                deleter.append(button);
                finalmeme.addEventListener("click", function(event) {
                    event.target.style.display = "none";
                })
            }
        }

    })
    //var memeimg = document.getElementById("imginput").value;
    // function canvasImg() {
    //     container.addEventListener("load", function(event) {
    //         let newMeme = document.getElementById("Meme");
    //         memeContext = newMeme.getContext("2d");
    //         newMeme.width = memeimg.width;
    //         newMeme.height = memeimg.height;
    //         memeContext.fillText(fintoptext);
    //         memeContext.fillText(finbtmtext);
    //         memeContext.drawImage(memeimg, 0, 0, newMeme.width, newMeme.height);
    //         var memeUrl = newMeme.toDataURL("image/png");
    //         try {
    //             localStorage.setItem("memeContext", memeUrl);
    //         } catch (event) {
    //             console.log("Storage failed: " + event);
    //         }
    //     }, false);










// 



//create location fo rmeme
//place link for meme
//function newText() {
//     const newToptxt = document.createElement("p");
//     const newBtmtxt = document.createElement("p");
//     newToptxt.append(fintoptext);
//     newBtmtxt.append(finbtmtext);
//     newToptxt.className = "p1";
//     newBtmtxt.className = "p2";
//     newToptxt.innerText = topText.value;
//     newBtmtxt.innerText = btmText.value;

// }
// }