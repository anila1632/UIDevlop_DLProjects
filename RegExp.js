//var submitbtn=doucment.getElementById('submit');
//var submit=formvalidation()
function formvalidation()
{

var fname=document.getElementById('firstname').value;
//var regfname=/[^A-K]/;// invalid cases:akakaka;ererere;   valid cases:AKAKAKA;AK;djdhfjdhAK;ererreereA;ERERER;
//for expression: /[^A-K]/ => should match with only a-k invalid cases:AKAKAKA;ABCDEFGHIJK;   valid cases:akaKaKAK;jrjrjrjak;abcdefghijk;
//
//var regfname=/ab+c/;// invalid cases:aaaab;aaaaaaaa;abbbbbb;bbbbc;babababc;ABCD;
// valid:aaabc;abcd;abababababc;2121abc;eoueoitabceiurieruei;
//
//var regfname=/[a*]/;//allows only 'a' atleast 0 or more times. doesnt allow any other char even 'A'
//var regfname=/^[a]/; //invalid case:ghghgh;Ajfhfh;  valid case:abcd;aaaahghg;
//var regfname=/^[a-k]/;//invalid case:tytyty;tytytyta; valid case:atytyt;abcdefghijktytyt;abcdb787
//var regfname=/^[A-D]/;//invalid:abcd;uuuABCD;  valid case:ABCD;AaBbCcDd;
//var regfname=/a$/; //invalid case:jfhfhfA;  valid case:hghghga;
//var regfname=/[a-d]$/;//valid case:hfhfhfabcd; invalid:hfhfhfh;
//var regfname=/[A-D]$/;//valid: hfhfhfA; invalid:hfkjkfMNMN;
//var regfname=/^[A-D]\...[E-Z]$/; ------------------------------------------
//var regfname=/abc/;//valid: hfhfhabcdkd;  invalid:cba;grabgrac;ab c;
//var regfname=/ab*c/;//valid:abbbbbc;ac;aaabbbbcccc;kdjfkdjabc;  invalid:bc;axyzbc;
//var regfname=/a\*/;//valid:a**;kdjfkdjfa*;  invalid:*;
//var regfname=/a?jk?/;//valid:jjjjj;ajk;aaaaajkkkk;  invalid:dududud;
//var regfname=/.n/;//valid:fan;an;anjali;alukan;  invalid:n;not;
//var regfname=/n./;//valid:not;djidfjnji;  invalid:an;
//var regfname=/a{2}/;//valid:jkjkaajk;jkaaaa --it matches with first 2 a's  invalid:jka;	
//var regfname=/a{2,}/;//matches atleaset 2 occurences.valid:aa;jkaa;jkaaaaa;  invalid:a;
var regfname=/a{2,4}/;//valid:jkaa;jkaaa;jkaaaaaaaa;--its matching with aaaa 4 a's even though der r more
//  invalid:jka;
if(!regfname.test(fname))
{
	alert("please enter char between a-k");
}
else
{
	alert("Valid firstname");

}
var lname=document.getElementById('lastname').value;
var reglname=/\w/;
if (!reglname.test(lname)) 
{
	alert("please enter only letters");

}
else
{
	alert("valid last name");

}
var email=document.getElementById('emailid').value;
var regemail=/[a-z]/;
if (!regemail.test(email)) 
{
	alert("enter valid email id");

}
else
{
	alert("valid email id");

}


















}
//submitbtn.onsubmit();
