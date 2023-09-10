function triangle() {
    document.getElementById("op-1").style.display = "block";
    document.getElementById("ip-1").style.display = "block";
    document.getElementById("op-3").style.display = "block";
    document.getElementById("ip-3").style.display = "block";
    document.getElementById("op-2").style.display = "none";
    document.getElementById("ip-2").style.display = "none";
    document.getElementById("op-4").style.display = "none";
    document.getElementById("ip-4").style.display = "none";
    document.getElementById("submit6").style.display="none";
    document.getElementById("submit5").style.display="none";
    document.getElementById("submit4").style.display="none";
    document.getElementById("submit3").style.display="none";
    document.getElementById("submit2").style.display="none";
    document.getElementById("submit1").style.display="inline";
    document.getElementById("small_screen").style.display="none";
    document.getElementById("details_heading").textContent = "TRIANGLE";
    document.getElementById("result").innerHTML = "You result will be here";
}
function submit1() {
    var h2 = document.getElementById("ip-1");
    var b2 = document.getElementById("ip-3");
    var h = h2.value;
    var b = b2.value;
    var area = (parseInt(h)*parseInt(b))/2;
    if (area >= 0 ) {
        document.getElementById("result").textContent = "Area of triangle : "+area+" sq.cms";
    }
    else{
    document.getElementById("result").textContent = "Enter proper input";
    }
    h2.value="";
    b2.value="";
}
function square() {
    document.getElementById("op-1").style.display = "none";
    document.getElementById("ip-1").style.display = "none";
    document.getElementById("op-4").style.display = "none";
    document.getElementById("ip-4").style.display = "none";
    document.getElementById("op-3").style.display = "block";
    document.getElementById("ip-3").style.display = "block";
    document.getElementById("op-2").style.display = "none";
    document.getElementById("ip-2").style.display = "none";
    document.getElementById("submit6").style.display="none";
    document.getElementById("submit5").style.display="none";
    document.getElementById("submit4").style.display="none";
    document.getElementById("submit3").style.display="none";
    document.getElementById("submit2").style.display="inline";
    document.getElementById("submit1").style.display="none";
    document.getElementById("small_screen").style.display="none";
    document.getElementById("details_heading").textContent = "SQUARE";
    document.getElementById("result").innerHTML = "You result will be here";
}
function submit2() {
    var h2 = document.getElementById("ip-3");
    var h = h2.value;
    var area = (parseInt(h)*parseInt(h));
    if (area >= 0 ) {
        document.getElementById("result").textContent = "Area of square : "+area+" sq.cms";
    }
    else{
    document.getElementById("result").textContent = "Enter proper input";
    }
    h2.value="";
}
function rectangle() {
    
    document.getElementById("op-1").style.display = "block";
    document.getElementById("ip-1").style.display = "block";
    document.getElementById("op-4").style.display = "none";
    document.getElementById("ip-4").style.display = "none";
    document.getElementById("op-3").style.display = "none";
    document.getElementById("ip-3").style.display = "none";
    document.getElementById("op-2").style.display = "block";
    document.getElementById("ip-2").style.display = "block";
    document.getElementById("submit6").style.display="none";
    document.getElementById("submit5").style.display="none";
    document.getElementById("submit4").style.display="none";
    document.getElementById("submit3").style.display="inline";
    document.getElementById("submit2").style.display="none";
    document.getElementById("submit1").style.display="none";
    document.getElementById("small_screen").style.display="none";
    document.getElementById("details_heading").textContent = "RECTANGLE";
    document.getElementById("result").innerHTML = "You result will be here";
}
function submit3() {
    var h2 = document.getElementById("ip-1");
    var b2 = document.getElementById("ip-2");
    var h = h2.value;
    var b = b2.value;
    var area = (parseInt(h)*parseInt(b));
    if (area >= 0 ) {
        document.getElementById("result").textContent = "Area of rectangle : "+area+" sq.cms";
    }
    else{
    document.getElementById("result").textContent = "Enter proper input";
    }
    h2.value="";

    b2.value="";
}
function circle() {
    
    document.getElementById("op-1").style.display = "none";
    document.getElementById("ip-1").style.display = "none";
    document.getElementById("op-4").style.display = "block";
    document.getElementById("ip-4").style.display = "block";
    document.getElementById("op-3").style.display = "none";
    document.getElementById("ip-3").style.display = "none";
    document.getElementById("op-2").style.display = "none";
    document.getElementById("ip-2").style.display = "none";
    document.getElementById("submit6").style.display="none";
    document.getElementById("submit5").style.display="none";
    document.getElementById("submit4").style.display="inline";
    document.getElementById("submit3").style.display="none";
    document.getElementById("submit2").style.display="none";
    document.getElementById("submit1").style.display="none";
    document.getElementById("small_screen").style.display="none";
    document.getElementById("details_heading").textContent = "CIRCLE";
    document.getElementById("result").innerHTML = "You result will be here";
}
function submit4() {
    var h2 = document.getElementById("ip-4");
    h=h2.value;
    var area = 3.14*(parseInt(h)*parseInt(h));
    if (area >= 0 ) {
        document.getElementById("result").textContent = "Area of circle : "+area+" sq.cms";
    }
    else
    {
        document.getElementById("result").textContent = "Enter proper input";
    }
    h2.value = "";
}
function cylinder() {
    document.getElementById("op-1").style.display = "block";
    document.getElementById("ip-1").style.display = "block";
    document.getElementById("op-4").style.display = "block";
    document.getElementById("ip-4").style.display = "block";
    document.getElementById("op-3").style.display = "none";
    document.getElementById("ip-3").style.display = "none";
    document.getElementById("op-2").style.display = "none";
    document.getElementById("ip-2").style.display = "none";
    document.getElementById("submit6").style.display="none";
    document.getElementById("submit5").style.display="inline";
    document.getElementById("submit4").style.display="none";
    document.getElementById("submit3").style.display="none";
    document.getElementById("submit2").style.display="none";
    document.getElementById("submit1").style.display="none";
    document.getElementById("small_screen").style.display="none";
    document.getElementById("details_heading").textContent = "CYLINDER";
    document.getElementById("result").innerHTML = "You result will be here";
}
function submit5() {
    var h2 = document.getElementById("ip-1");
    var r2 = document.getElementById("ip-4");
    var h = h2.value;
    var r = r2.value;
    var area = 2*3.14*parseInt(r)*(parseInt(h)+parseInt(r));
    if (area >= 0 ) {
        document.getElementById("result").textContent = "Surface area of cylinder : "+area+" sq.cms";
    }
    else
    {
        document.getElementById("result").textContent = "Enter proper input";
    }
    h2.value = "";
    r2.value = "";
}
function rhombus(){
    document.getElementById("op-1").style.display = "block";
    document.getElementById("ip-1").style.display = "block";
    document.getElementById("op-4").style.display = "none";
    document.getElementById("ip-4").style.display = "none";
    document.getElementById("op-3").style.display = "none";
    document.getElementById("ip-3").style.display = "none";
    document.getElementById("op-2").style.display = "block";
    document.getElementById("ip-2").style.display = "block";
    document.getElementById("submit6").style.display="inline";
    document.getElementById("submit5").style.display="none";
    document.getElementById("submit4").style.display="none";
    document.getElementById("submit3").style.display="none";
    document.getElementById("submit2").style.display="none";
    document.getElementById("submit1").style.display="none";
    document.getElementById("small_screen").style.display="none";
    document.getElementById("details_heading").textContent = "RHOMBUS";
    document.getElementById("result").innerHTML = "You result will be here";
}
function submit6() {
    var h2 = document.getElementById("ip-1");
    var w2 = document.getElementById("ip-2");
    var h = h2.value;
    var w = w2.value;
    var area = parseInt(h)*parseInt(w);
    if (area >= 0 ) {
        document.getElementById("result").textContent = "Area of rhombus is : "+area+" sq.cms";
    }
    else
    {
        document.getElementById("result").textContent = "Enter proper input";
    }
    h2.value = "";
    w2.value = "";
}