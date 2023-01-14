var canvas = new fabric.Canvas('myCanvas');
var x = document.getElementById("myAudio");

function new_image() {
    fabric.Image.fromURL('happyday.jpg', function (Img) {
        block_image_object = Img;

        block_image_object.scaleToWidth(700)
        block_image_object.scaleToWidth(510)
        block_image_object.set({
            top: 10,
            left: 10
        })
        canvas.add(block_image_object);
    });
}



function playSound() {
    x.play()
}
