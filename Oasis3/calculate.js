function convert(){
    var t=(document.getElementById('temp')).value;
    
    // t=parseFloat(temp.value);
    var type=document.getElementById('type');
    if(type=='C'){
        var r=(t*9/5)+32;
    }
    else{
        var r=(t-32)*(5/9);
    }
    document.getElementById('result').innerHTML=r;
    alert(r);

}