//function one() {
//  var n;
//    n =
//document.getElementById('inp1').value;
 // var stepen;
//  //stepen=document.getElementById('stepen').value;
 // var number=1;
//	for (var i=1; i<=stepen; i++) {
//    number=number*n;
 // }
	//document.getElementById('out').innerHTML//=n+' в степени '+stepen+' = //<b>'+number+'<b>';
//}

//var num=7;
//var a='';
//for (var i=1; i<=9; i++) {
//  a += i+'*'+num+'='+i*num+'<br>';
//  console.log(a);
//}
//document.getElementById('out').innerHTML=a;

//var multiply=1;
//var a='';
//for (var i=1; i<=50; i++){
//  a+='*'+i;
//  multiply=multiply*i;
 // console.log(multiply);
//}
//document.getElementById('out').innerHTML=a+'<br>='+multiply;

var symbols='';
for (var i=1000; i<2000; i++) {
  symbols +='&#'+i+';'+' ';
}
document.getElementById('out').innerHTML=symbols;
