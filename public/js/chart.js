var chartdata

function build_chart_page(data){
  chartdata = data
  var body_right = document.getElementById("body-right")
  //console.log("length = " + data.total)
  for(run = 0; run < data.total; run++){
    build_chart_box(body_right, data.chart[run])
    if(run == 2){
      break
    }
  }
  

}

function build_chart_box(body, listA){
  console.log(listA)
  var box = document.createElement("div")
  box.className = "box"
  var cover = document.createElement("img")
  cover.className = "left"
  cover.setAttribute('src', listA.images[0].url)
  cover.setAttribute('width', "130")
  cover.setAttribute('height', "86")
  
  var para = document.createElement("p")
  para.innerHTML = listA.title

  var buttons = document.createElement("div")
  buttons.className = "btns"

  var btn = document.createElement("a")
  btn.setAttribute('href', "#")
  var text = document.createElement("span")
  text.innerHTML = "enter"
  btn.appendChild(text)
 
  var btn2 = document.createElement("a")
  var text2= document.createElement("span")
  text2.innerHTML = "second"
  btn2.appendChild(text2)

  buttons.appendChild(btn)
  
  var clear = document.createElement("div")
  clear.className = "clear"


  box.append(cover)
  box.append(para)
  box.append(buttons)
  box.append(clear)
  body.append(box)

}






