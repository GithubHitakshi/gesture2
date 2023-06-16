gesture_model = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/2oyLMap7Z/model.json",model_loaded);

Webcam.set({
    width: 350,
    height: 300,
    image_format: "png",
    png_quality:100
});

Webcam.attach("#camera");

function take_snapshot(){
    Webcam.snap(function(img){
        document.getElementById("result").innerHTML = '<img id="pic" src="'+img+'">;';
    });
}

function model_loaded(){}