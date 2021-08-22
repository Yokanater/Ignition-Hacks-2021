/* This script will load our model in the model variable*/
let model;
(async function testModel() {
    console.log("Hello")
   model = await tf.loadLayersModel("http://localhost:85/model/model.json");
   console.log("bye")
})();
$("#image-selector").change(function (){
    let reader = new FileReader();
    reader.onload = function(e){
        let dataurl = reader.result;
    $("#selected-image").attr("src", dataurl)
    }
    let file = $("#image-selector").prop("files")[0];
    reader.readAsDataURL(file);
})

predict_button = document.querySelector("#predict-button")
predict_button.onclick = (async function () {
    let image= $("#selected-image").get(0);
    console.log("Hi")
    let tensor = tf.browser.fromPixels(image).resizeNearestNeighbor([150, 150]).mean(2).toFloat().expandDims().expandDims(3);
    console.log("Stage 0")
    let predictions = await model.predict(tensor).data();
    let iterate = 0;
    let classification = "Hi"
    console.log(predictions)
    for (let i = 0; i < predictions.length; i++){
        console.log(i)
        if (predictions[i] == 1){ 
            if (iterate == 0){
                classification = "meningioma tumor"
            }
            if (iterate == 1){
                classification = "no tumor"
            }
            if (iterate == 2){
                classification = "glioma tumor"
            }
            if (iterate == 3){
                classification = "pituatary tumor"
            }
        }
        iterate += 1;
    }
    console.log(classification)
    console.log("Hellokgkgkg")
    document.getElementById("prediction-list").innerText = "You have been diagnosed with " + " " + classification
    });
    console.log("Hurray")

function func(){
    console.log("Hello")
}



