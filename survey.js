
function onQuestionAnswered(answer){
    let innerBox = document.getElementById('flip-box-inner');
    let mainBox = document.getElementById('main-box');
    let googleForm = document.getElementById("google-form");
    let banner = document.getElementsByClassName('product-banner')[0];

    if(answer === 'Yes'){
        googleForm.src = "https://docs.google.com/forms/d/e/1FAIpQLSei1eGqsDTFzlAkPfnVyo8ZMtub8Q165flllTEnb6_fgQ-NRw/viewform?embedded=true";
    }

    innerBox.classList.add('flipped');
    mainBox.style.width = "100%";
    mainBox.style.height = "100%";
    console.log("Height: " + banner.clientHeight + ", Width: " + banner.clientWidth);
    googleForm.width = banner.clientWidth;
    googleForm.height = banner.clientHeight;
    document.getElementById('flip-box-front').remove();

    
}