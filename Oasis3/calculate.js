function convert(){
    var t=(document.getElementById('temp')).value;
    
    // t=parseFloat(temp.value);
    var type=document.getElementById('type');
    var typeVal=type.value;
    var ans=document.getElementById("result");
    var fans=parseFloat(ans.value);
    if(typeVal=='C'){
        var r=(t*9/5)+32;
    }
    else{
        var r=(t-32)*(5/9);
    }
    ans.value=r;
    // document.getElementById('result').innerHTML=r;
    // alert(r);

}