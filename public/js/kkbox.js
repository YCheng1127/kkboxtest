function changeMe(num){
  console.log("hello")
  
  $.ajax({
    method: "post",
    url: "./getPage",
    data: {
        index: num
    },
    success: function(data){
      console.log("success")
      document.getElementById("body-right").innerHTML = data.rightpart
      document.getElementById("body-left").innerHTML = data.leftpart
        
    }
  
  })

}


