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
//create a request
    var request=new XMLHttpRequest();
    
    //capture the response
    request.onreadystatechange=function() {
        if(request.readyState === XMLHttpRequest.DONE) {
            //take some action
        if(request.status===200){
    var counter=request.responseText;
    var span=document.getElementById('count');
    span.innerHTML=counter.toString();
        }
        }
        //Noe done yet
    };
    //make the request
    request.open('GET','http://sujeetk270396.imad.hasura-app.io/counter',true);
    request.send(null);
};

//submit name
var nameInput = document.getElementById('name');
var name=nameInput.value;
var submit=document.getElementById('submit_btn');
submit.onclick=function() {
//make request
//capture a list
var names=['name1','name2','name3','name4'];
var list='';
for(var i=0;i<names.length;i++){
    list+='<li>' +names[i] + '</li>';
}
var ul=document.getElementById('namelist');
ul.innerHTML=list;
};
