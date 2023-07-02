let a=document.getElementById("con-time");
let butn2=document.getElementById("btn");
let butn=document.getElementById("btn1");
let butn1=document.getElementById("btn2");
let set=document.getElementById("set");
var audio = new Audio('audio.mp3');
function play() {
    audio.play();
}

function stopAudio(audio) {
    audio.pause();
    audio.currentTime = 0;
}

//then using it:
setInterval(()=>{
    let b=new Date();
    let h=b.getHours();
    let m=String(b.getMinutes()).padStart(2, "0");;
    let s=String(b.getSeconds()).padStart(2, "0");;
    let session1="AM"
    let session2="PM"
    
    if(h==0){
        h=12;
    }
    if(h>12){
        h=h-12;
        let c=h + " : " + m + " : " + s + " : " + session2;
        a.innerHTML=c;
    }
    else{
        let c=h + " : " + m + " : " + s + " : " + session1;
        a.innerHTML=c;
    }
    
    let hrs=document.getElementById("hours").value;
    let min=document.getElementById("min").value;
    let sc=document.getElementById("sec").value;
    let sess=document.getElementById("AM-PM");
    
    if(hrs==h && min==m && sc==s || (sess==session1 || sess==session2)){
        console.log("Hello")
        play();
    }
    butn.onclick=()=>{
        let hrs=document.getElementById("hours");
        let min=document.getElementById("min");
        let sc=document.getElementById("sec");
        let sess=document.getElementById("AM-PM");
        
        hrs.value="Hours"
        min.value="mins"
        sc.value="sec"
        sess.value="AM-PM"

        set.innerHTML="Clearing Alarm !!";
        set.style.letterSpacing="3px";
        set.style.textAlign="center";
        set.style.paddingTop="10px";
        set.style.fontSize="20px";
        set.style.color="red";
        remove();
    }

    butn2.onclick=()=>{
        set.innerHTML="Alarm Setted !!";
        set.style.letterSpacing="3px";
        set.style.textAlign="center";
        set.style.paddingTop="10px";
        set.style.fontSize="20px";
        set.style.color="green";
        remove();
    }    

    const remove=()=>{
        setTimeout(()=>{
            set.innerHTML="";
        },1000)
    }

    butn1.onclick=()=>{
        stopAudio(audio);
        set.innerHTML="Stopping Alarm !!";
        set.style.letterSpacing="3px";
        set.style.textAlign="center";
        set.style.paddingTop="10px";
        set.style.fontSize="20px";
        set.style.color="blue";
        remove();
    }
},1000)
    