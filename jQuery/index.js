/* $(document).ready(function() {
    $("h1").css("color", "red")
    $("button").css("background-color", "red")
    $("button").text()
}) */

$(document).ready(function() {

    $("h1").addClass("title")
    $("h1").removeClass("title")
    $("h1").addClass("title")
    $("button").text("Don't")
    $("button").html("<strong>Click-me</strong>")
    $("button").addClass("btnStyle")

    /* const btns = document.querySelectorAll("button")
    btns.forEach(btn => {
        btn.addEventListener("click", () => {
            document.querySelector("h1").style.color = "red"
        })
    }) */
  /*   $("button").click(function () { 
       $("h1").css("color", "purple")
    }) */

   /*  $(document).keypress(function(event) {
        $("h1").text(event.key)
    }) */

    $("h1").hover(function() {
        $("h1").css("color", "red")
    }, 
    function() {
        $("h1").css("color", "blue")
    })
    
    $("h1").before("<button>click</button>")
    $("h1").after("<button>click</button>")
    $("h1").append("<button>click</button>")
    $("h1").prepend("<button>click</button>")
   /*  $("button").remove() */
    

})
