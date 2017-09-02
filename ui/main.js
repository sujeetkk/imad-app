console.log('Loaded!');
//Move the image
var img=document.getElementById('madi');
var marginLeft=0;
function moveRight() {
    marginLeft=marginLeft+10;
    img.style.marginLeft=marginLeft+'px';
}
img.onclick=function() {
    var interval=setInterval(moveRight,100);
};

//Counter code
var button=document.getElementById('counter');

button.onclick=function(){
    
    var submit=document.getElementById('submit_btn');
submit.onclick=function() {
//make request
//create a request
    var request=new XMLHttpRequest();
    
    //capture the response
    request.onreadystatechange=function() {
        if(request.readyState === XMLHttpRequest.DONE) {
            //take some action
        if(request.status===200){
   //capture a list
var names=request.responseText;
names=JSON.parse(names);
var list='';
for(var i=0;i<names.length;i++){
    list+='<li>' +names[i] + '</li>';
}
var ul=document.getElementById('namelist');
ul.innerHTML=list;
        }
        }
        //Noe done yet
    };
    //make the request
    //submit name
var nameInput = document.getElementById('name');
var name=nameInput.value;
    request.open('GET','http://sujeetk270396.imad.hasura-app.io/submit-name?name=' +name,true);
    request.send(null);
};




};
