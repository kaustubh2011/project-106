 function start()
 {
     navigator.mediaDevices.getUserMedia({audio: true });
     classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/Kd6lUc5Im/model.json',modelReady);
 }
 function modelReady()
 {
     classifier.classify(gotresult);
 }
 function gotresult(error,results)
 {
if(error){
    console.error(error);
}
else{
    console.log(results);
}
 }