var colors = require("colors");

// Marker DQT 
function id0(s){
    if (s.substr(0,2).toLowerCase() == "0x") {
        return s;
    }

    var l = "0123456789ABCDEF";
    var o = "";

    if (typeof s != "string") {
        s = s.toString();
    }
    for (var i=0; i<s.length; i++) {
        var c = s.charCodeAt(i);

        o = o + l.substr((c>>4),1) + l.substr((c & 0x0f),1);
    }

    return "0x" + o;
}

console.log("Marker DQT : ".green + "St3g{".yellow + id0("xFFDB").red + "}".yellow);


//RGBBuffer 35514 bytes
function rgbhex(num){
    var r=((0xff0000&num)>>16).toString(16),
        g=((0x00ff00&num)>>8).toString(16),
        b=(0x0000ff&num).toString(16);
    if (r.length==1) { r = '0'+r; }
    if (g.length==1) { g = '0'+g; }
    if (b.length==1) { b = '0'+b; }
    return '0x'+r+g+b;                
  };

console.log("Buffer RGBHex : ".green + "St3g{".yellow + rgbhex(35514).red + "}".yellow);        

//Matrice
function resolvematrice(){
	var chara = [3, 5].toString();
	var charb = [3, 7].toString();
	var charc = [9, 12].toString();
	var chard = [18, 11].toString();
	var chare = [12, 22].toString();
	var charconcat = chara.concat(charb, charc, chard, chare); 
	var final = charconcat.split(',').reverse().join(''); 
	console.log("Key de la matrice : ".green + "St3g{".yellow + final.red + "}".yellow);
}
resolvematrice();
rgbhex();
id0();
