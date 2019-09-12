

var aa = 0;
function initPage(){
    var h1 = document.getElementsByTagName("h1");
    h1[0].onclick = function(event){
        alert("click....");
    };

    var div = $("#dataContainer");
    //div.load("/data1.html #loadingData");

    $('#dataContainer').load('/data1.html #loadingData', // url 
                  null,    // data 
                  function(data, status, jqXGR) {  // callback function 
                            alert('data loaded');
                    });
}

function initPage2(){
    console.log("init page2");
}