 function start()
 {
     navigator.mediaDevices.getUserMedia({audio: true });
     classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/u02fOYRBx/model.json',modelReady);
 }
 function modelReady()
 {
     classifier.classify(gotresult);
 }
 var cat=0;
 var dog=0;
 function gotresult(error,results)
 {
if(error){
    console.error(error);
}
else{
    console.log(results);
    r=Math.floor(Math.random()*255)+1;
    b=Math.floor(Math.random()*255)+1;
    g=Math.floor(Math.random()*255)+1;
    document.getElementById("label").innerHTML="I can hear- "+results[0].label;
    document.getElementById("acc").innerHTML="accuracy- "+(results[0].confidence*100).toFixed(2)+" %";
    document.getElementById("label").style.color="rgb("+r+","+g+","+b+")";
    document.getElementById("acc").style.color="rgb("+r+","+g+","+b+")";
img1=document.getElementById("animal");

if(results[0].label=="Meowing")
{
    img1.src="https://i.gifer.com/NAk7.gif";
    cat=cat+1;
}
else if(results[0].label=="Barking")
{
    img1.src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/ce8b1e76965389.5c7945b0cffef.gif";
    dog=dog+1;
}
else{

img.src="http://www.rattlesnakeannie.com/images/intro6.gif";
}
}
 }