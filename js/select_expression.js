window.addEventListener("keydown",function(e){
    console.log(e.key);
    if(e.key == "ArrowDown"){
        //laughを消してあげて (sleep状態)
        document.querySelector(".left_eye").classList.remove("laugh_left_eye");
        document.querySelector(".right_eye").classList.remove("laugh_right_eye");
        document.querySelector(".left_mouth").classList.remove("laugh_left_mouth");
        document.querySelector(".right_mouth").classList.remove("laugh_right_mouth");
        //angryを切り替える
        document.querySelector(".left_eye").classList.toggle("angry_left_eye");
        document.querySelector(".right_eye").classList.toggle("angry_right_eye");
        document.querySelector(".left_mouth").classList.toggle("angry_left_mouth");
        document.querySelector(".right_mouth").classList.toggle("angry_right_mouth");
    }
    if(e.key == "ArrowUp"){
        //angryを消してあげて(sleep状態)
        document.querySelector(".left_eye").classList.remove("angry_left_eye");
        document.querySelector(".right_eye").classList.remove("angry_right_eye");
        document.querySelector(".left_mouth").classList.remove("angry_left_mouth");
        document.querySelector(".right_mouth").classList.remove("angry_right_mouth");
        //laughを切り替える
        document.querySelector(".left_eye").classList.toggle("laugh_left_eye");
        document.querySelector(".right_eye").classList.toggle("laugh_right_eye");
        document.querySelector(".left_mouth").classList.toggle("laugh_left_mouth");
        document.querySelector(".right_mouth").classList.toggle("laugh_right_mouth");
    }
})