var heartL = document.getElementsByClassName("ico")
for (let i=0; i< heartL.length; i++){
    heartL[i].onclick = function()  {myfunction()};
    function myfunction() {
        source = heartL[i].getAttribute("src");
        if (source=="./data/ico/empty-heart-ico.jpeg"){
            heartL[i].setAttribute("src","./data/ico/heart-ico-red.jpeg")
        }else if ( source == "./data/ico/heart-ico-red.jpeg"){
            heartL[i].setAttribute("src","./data/ico/empty-heart-ico.jpeg")
        }
    }
}
var totP = document.getElementById("TP")
var valtotP = parseInt(totP.innerHTML)
valtotP=0
//console.log(valtotP)

var plus1 = document.getElementsByClassName("add")
var Qte1 = document.getElementsByClassName("Qte")
var puttc1 = document.getElementsByClassName("PUTTC")
for ( let i = 0; i < plus1.length; i++) {
    console.log(puttc1[i].innerText)
    let val = parseInt( puttc1[i].innerText)
    plus1[i].onclick = function () {adding()}
    function adding() {
        console.log ( puttc1[i].innerHTML)
    let val = parseInt(puttc1[i].innerHTML)
    let t=parseInt(Qte1[i].innerHTML)
    t += 1
    Qte1[i].Value = t
    Qte1[i].innerHTML = Qte1[i].Value
    valtotP+= val
    console.log(valtotP)
    console.log(val)
    console.log(valtotP.Value)
    totP.innerHTML = valtotP
    }
}
var moins1 = document.getElementsByClassName("rem")
var Qte1 = document.getElementsByClassName("Qte")
for (let i = 0; i < plus1.length; i++) {
    console.log(puttc1[i].innerText)
    let val = parseInt(puttc1[i].innerText)
    //console.log(Qte1[i].Value)
    moins1[i].onclick = function (){ minus1()}
    function minus1() {
        let t=parseInt(Qte1[i].innerHTML)
        t -= 1
        if (t<0){
            t=0
            return
        }
      Qte1[i].Value = t
      Qte1[i].innerHTML = Qte1[i].Value
      valtotP-= val
      console.log(valtotP)
      console.log(val)
      console.log(valtotP.Value)
      totP.innerHTML = valtotP

    }

    }
 