/* This script will load our model in the model variable*/
let model;
(async function testModel() {
    console.log("Hello")
   model = await tf.loadLayersModel("http://localhost:85/Flask/model.json");
})();

