var kkdata
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
      document.getElementById("body-right").innerHTML = data.Page.rightpart
      document.getElementById("body-left").innerHTML = data.Page.leftpart
      document.getElementById("search").innerHTML = data.Page.searchpart
      
      if(num == 4){
        build_chart_page(data, 1)
      }

    }
  
  })

}

