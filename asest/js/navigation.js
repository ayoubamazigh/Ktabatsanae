var a = 1;
function show_hide()
{
    if(a==1) {
        document.getElementById("nav-links-id").style.display="block";
        return a=0;
    }else{
        document.getElementById("nav-links-id").style.display="none";
        return a=1;
    }
}