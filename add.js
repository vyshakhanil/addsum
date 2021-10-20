addOperation=()=>{
    var num1=parseFloat(document.getElementById("n1").value)
    var num2=parseFloat(document.getElementById("n2").value)
    var result=num1+num2
    //console.log(result)
    document.getElementById("display").innerText=result
}