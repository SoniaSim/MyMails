var nmbMessages = $("p").length;
$("#compteur").text(nmbMessages);

$("body").on("click", ".picto", function() {
    $(this).parent().remove();
    var nmbMessages = $("p").length;
    $("#compteur").text(nmbMessages);
});

var button = $("#button");

button.click(
    function() {
        
        var message = $('#add-message').val();

       $("body").append(`
       <div class="main-div">
            <img src="avatar-2.jpg" class="avatar">
            <div class="second-div">
                <h6>Sonia Si Moussi</h6>
                <p>` + message + `</p>
            </div>
            <img src="trash.png" class="picto">
        </div>
       `);
       
       $('#add-message').val("");
      
       var nmbMessages = $("p").length;
        $("#compteur").text(nmbMessages);
    }
);

$("#btn-search").click(function(){
    $("h6").each(function(){
        if ($('#search-message').val() != $(this).text()){
            $(this).parent().parent().fadeOut();
        } else {
            $(this).parent().parent().show();
        }
    })
    $("#search-message").val("");
});
