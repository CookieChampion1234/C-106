function satrtClassification(){
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/WuIR6U383/model.json/", modelReady);
}
function modelReady(){
    classifier.classify(gotResults);
}