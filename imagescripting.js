{
 var image = document.getElementById("imagez");
 var images =["hotelexnight.jpeg","hotelexwater.jpeg","hotelex2.jpeg","airbnbalien.jpeg"];
 var index = 0;
 function updateimage(){
    
 image.src =images[index];
 index =(index+1) % images.length;
 }
 setInterval(updateimage,5000);
};
{
 var pic = document.getElementById("imagez1");
 var pics =["hotelextower.jpeg","airbnbglass.jpeg","hotelexwater1.jpeg","airbnbin.jpeg"];
 var index = 0;
 function updateimage1(){
    
 pic.src =pics[index];
 index =(index++) % pics.length;
 }
 setInterval(updateimage1,6000);
};
{
    var pic1 = document.getElementById("imagez2");
    var pic1s =["hotelex.jpeg","hotelex2.jpeg","airbnb.jpeg","hotelincute.jpeg"];
    var index = 0;
    function updateimage2(){
    
    pic1.src =pic1s[index];
    index =(index++) % pic1s.length;
}
setInterval(updateimage2,7000);
};

