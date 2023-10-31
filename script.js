
$(document).ready(function(){
    console.log("DOM Ready!");
})
$("#submit").on("click", function(event){
    event.preventDefault();
    if($('#rating').val() >= 0 && $('#rating').val() <= 10 && $('#title').val().length > 1){
        $('#movTable tbody').append(`<tr><td>${$('#title').val()}</td><td>${$('#rating').val()}</td><td><button class="rm-btn">remove</button></td></tr>`);
    }else{
        alert("Ratings can only be between 0 and 10 and movie titles must have at least 2 charaters in it!");
    }
    $('#title').val('');
    $('#rating').val('');
})
$("#display").on("click", '.rm-btn', function(){
    $(this).parent().parent().remove();
})