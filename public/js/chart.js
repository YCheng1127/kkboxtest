var chartdata

function build_chart_page(data, index){
  chartdata = data
  var body_right = document.getElementById("body-right")
  body_right.innerHTML = data.Page.rightpart
  //console.log("length = " + data.total)
  var boxnum = 3
  index ==  Math.ceil(chartdata.total/3) ? boxnum = chartdata.total%3:boxnum = 3
  for(run = 0; run < boxnum; run++){
    build_chart_box(body_right, chartdata.chart[run + 3*(index - 1)])
  }
  page_btn(body_right, index, chartdata.total)

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

function page_btn(body, index, total){
  var right = 0
  var left = 0
  index == 1 ? (left = 0):(left = 1)
  
  var pagetotal = Math.ceil(total/3)
  pagetotal > (index + 4) ? (right = 1):( right = 0) 

  var pagenum = pagetotal - index + 1
  pagenum > 5 ? (pagenum = 5):(pagenum = pagenum)

  var pagebtn = document.createElement("ul")
  pagebtn.className = "pagination"
  var i = 0;
  for(i = 0; i<pagenum; i++){
    if((i == 0)&&(left == 1)){
      var lil = document.createElement("li")
      var al = document.createElement("a")
      al.setAttribute('href', "#")
      al.innerHTML = "<<"
      al.setAttribute('onclick', "build_chart_page(chartdata, " +  (index - 1).toString()  + ")")
      lil.appendChild(al)
      pagebtn.appendChild(lil)
    }

    var li = document.createElement("li")
    var a = document.createElement("a")
    a.setAttribute('href', "#")
    a.innerHTML = (index + i).toString()
    a.setAttribute('onclick', "build_chart_page(chartdata, " + (index + i).toString() + ")")
    li.appendChild(a)
    pagebtn.appendChild(li)
    if(index == index + i){
      li.className += " " + "clicked_pgbtn" 
    }

    if((i == 4)&&(right == 1)){
      var lir = document.createElement("li")
      var ar = document.createElement('a')
      ar.setAttribute('href', "#")
      ar.innerHTML = ">>"
      ar.setAttribute('onclick', "build_chart_page(chartdata, " + (index + 1).toString() + ")")
      lir.appendChild(ar)
      pagebtn.appendChild(lir)
    }
  }

  body.appendChild(pagebtn)

}




