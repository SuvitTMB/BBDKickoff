var dateString = new Date().toLocaleString('en-US', { timeZone: 'Asia/Jakarta' });
var xClickMenu = "A";
var Zone1 = "";
var Zone2 = "";
var Zone3 = "";
var Zone4 = "";
var Zone5 = "";
var Zone6 = "";
var A1 = 0;
var A2 = 0;
var A3 = 0;
var B1 = 0;
var B2 = 0;
var B3 = 0;
var C1 = 0;
var C2 = 0;
var C3 = 0;
var D1 = 0;
var D2 = 0;
var D3 = 0;
var E1 = 0;
var E2 = 0;
var E3 = 0;
var F1 = 0;
var F2 = 0;
var F3 = 0;


$(document).ready(function() {
  if(sessionStorage.getItem("EmpID_Kickoff")==null) { location.href = "index.html"; }
  Connect_DB();
  document.getElementById(1).classList.add('box-menu2');
});


function Connect_DB() {
  var firebaseConfig = {
    apiKey: "AIzaSyDfTJJ425U4OY0xac6jdhtSxDeuJ-OF-lE",
    authDomain: "retailproject-6f4fc.firebaseapp.com",
    projectId: "retailproject-6f4fc",
    databaseURL: "https://file-upload-6f4fc.firebaseio.com",
    storageBucket: "retailproject-6f4fc.appspot.com",
    messagingSenderId: "653667385625",
    appId: "1:653667385625:web:a5aed08500de80839f0588",
    measurementId: "G-9SKTRHHSW9"
  };
  firebase.initializeApp(firebaseConfig);
  dbBBDKickoff = firebase.firestore().collection("BBD_Kickoff");
  CheckScore();
}


function CheckScore() {
  var i = 0;
  dbBBDKickoff.where('Round1','==', xClickMenu)
  .orderBy('TotalRank','asc')
  .orderBy('TotalPoint','desc')
  .get().then((snapshot)=> {
    snapshot.forEach(doc=> {
      console.log(doc.data().EmpZone+" === "+doc.data().Point_1+" === "+doc.data().Point_2+" === "+doc.data().Point_3);
      if(i==0) {
        Zone1 = doc.data().EmpZone;
        A1 = doc.data().Point_1;
        A2 = doc.data().Point_2;
        A3 = doc.data().Point_3;
      } else if(i==1) { 
        Zone2 = doc.data().EmpZone;
        B1 = doc.data().Point_1;
        B2 = doc.data().Point_2;
        B3 = doc.data().Point_3;
      } else if(i==2) { 
        Zone3 = doc.data().EmpZone;
        C1 = doc.data().Point_1;
        C2 = doc.data().Point_2;
        C3 = doc.data().Point_3;
      } else if(i==3) { 
        Zone4 = doc.data().EmpZone;
        D1 = doc.data().Point_1;
        D2 = doc.data().Point_2;
        D3 = doc.data().Point_3;
      } else if(i==4) { 
        Zone5 = doc.data().EmpZone;
        E1 = doc.data().Point_1;
        E2 = doc.data().Point_2;
        E3 = doc.data().Point_3;
      } else if(i==5) { 
        Zone6 = doc.data().EmpZone;
        F1 = doc.data().Point_1;
        F2 = doc.data().Point_2;
        F3 = doc.data().Point_3;
      }
      i++;
    });
    drawStacked();
  })
}

google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawStacked);


function drawStacked() {
  /*
var Zone1 = "ธนบุรี";
var Zone2 = "นครปฐม";
var Zone3 = "ปทุมวัน";
var Zone4 = "สระบุรี";
var Zone5 = "อยุธยา";
var Zone6 = "อุบลราชธานี";
A1 = 0;
A2 = 5;
A3 = 0;
B1 = 5;
B2 = 5;
B3 = 3;
C1 = 4;
C2 = 5;
C3 = 5;
D1 = 2;
D2 = 5;
D3 = 2;
E1 = 1;
E2 = 5;
E3 = 1;
F1 = 3;
F2 = 5;
F3 = 4;
*/


  var data = google.visualization.arrayToDataTable([
    ['Zone', '% Achievement', '% Success Seller ', '% Product Mix'],
    [ Zone1, A1, A2, A3],
    [ Zone2, B1, B2, B3],
    [ Zone3, C1, C2, C3],
    [ Zone4, D1, D2, D3],
    [ Zone5, E1, E2, E3],
    [ Zone6, F1, F2, F3]
  ]);
  var options = {
      annotations: {textStyle: { fontName: 'ekachon-regular' }},
      hAxis: {textStyle: { fontName: 'ekachon-regular' }, titleTextStyle: { fontName: 'ekachon-regular' }},
      vAxis: {textStyle: { fontName: 'ekachon-regular' }, titleTextStyle: { fontName: 'ekachon-regular' }},
      titleTextStyle: { fontName: 'ekachon-regular' },
      tooltip: {textStyle: {fontName: 'ekachon-regular' }},
      fontName: 'ekachon-regular',
      fontSize: 11,
      Top: 0,
      width: 360,
      chartArea: {width: '60%'},
      legend: { position: 'none' },
      title: 'ข้อมูลการแข่งขันของสาย '+xClickMenu,
      bars: 'horizontal',
        isStacked: true,
      bar: { groupWidth: "90%" }
  };
  var chart = new google.visualization.BarChart(document.getElementById('chart_div'));
  chart.draw(data, options);
}



  /*


    var Zone1 = "ธนบุรี";
    var Zone2 = "นครปฐม";
    var Zone3 = "ปทุมวัน";
    var Zone4 = "สระบุรี";
    var Zone5 = "อยุธยา";
    var Zone6 = "อุบลราชธานี";
    var A1 = 0;
    var A2 = 5;
    var A3 = 0;
    var B1 = 5;
    var B2 = 5;
    var B3 = 3;
    var C1 = 4;
    var C2 = 5;
    var C3 = 5;
    var D1 = 2;
    var D2 = 5;
    var D3 = 2;
    var E1 = 1;
    var E2 = 5;
    var E3 = 1;
    var F1 = 3;
    var F2 = 5;
    var F3 = 4;
*/




function SelectBox(x) {
  var xx = "";
  if(x=="A") {
    xx = 1;
  } else if(x=="B") { 
    xx = 2;
  } else if(x=="C") { 
    xx = 3;
  } else if(x=="D") { 
    xx = 4;
  } else if(x=="E") { 
    xx = 5;
  } else if(x=="F") { 
    xx = 6;
  }
  var i = 1;
  for (i = 1; i < 7; i++) {
    document.getElementById(i).classList.remove('box-menu2');
  }   
  if(x!="") {
    //document.getElementById('loading').style.display='block';
    xClickMenu = x;
    console.log(xx);
    document.getElementById(xx).classList.add('box-menu2');
    CheckScore()
  }
}


/*
function NewSet() {
  google.charts.load('current', {packages: ['corechart', 'bar']});
  google.charts.setOnLoadCallback(drawStacked);

  function drawStacked() {
    var data = google.visualization.arrayToDataTable([
      ['Zone', '% Achievement', '% Success Seller ', '% Product Mix'],
      [ Zone1, A1, A2, A3],
      [ Zone2, B1, B2, B3],
      [ Zone3, C1, C2, C3],
      [ Zone4, D1, D2, D3],
      [ Zone5, E1, E2, E3],
      [ Zone6, F1, F2, F3]
    ]);
    var options = {
        //annotations: {textStyle: { fontName: 'ekachon-regular' }},
        //hAxis: {textStyle: { fontName: 'ekachon-regular' }, titleTextStyle: { fontName: 'ekachon-regular' }},
        //vAxis: {textStyle: { fontName: 'ekachon-regular' }, titleTextStyle: { fontName: 'ekachon-regular' }},
        //titleTextStyle: { fontName: 'ekachon-regular' },
        //tooltip: {textStyle: {fontName: 'ekachon-regular' }},
        //fontName: 'ekachon-regular',
        fontSize: 11,
        width: 400,
        chartArea: {width: '60%'},
        legend: { position: 'none' },
        title: 'Zone Championship',
        bars: 'horizontal',
        isStacked: true,
        bar: { groupWidth: "80%" }
    };
    var chart = new google.visualization.BarChart(document.getElementById('chart_div'));
    chart.draw(data, options);
  }
}
*/

/*
  str = '';
  str += "<div class='bar'><div class='bar-info rsoc7' data-total="+ a0 +">"+ n0 +"";
  str += "<span class='percent' style='float: right;'>"+ a0 +"</span></div></div>";  
  str += "<div class='bar'><div class='bar-info rsoc2' data-total="+ a1 +">"+ n1 +"";
  str += "<span class='percent' style='float: right;'>"+ a1 +"</span></div></div>";  
  str += "<div class='bar'><div class='bar-info rsoc3' data-total="+ a2 +">"+ n2 +"";
  str += "<span class='percent' style='float: right;'>"+ a2 +"</span></div></div>";  
  str += "<div class='bar'><div class='bar-info rsoc4' data-total="+ a3 +">"+ n3 +"";
  str += "<span class='percent' style='float: right;'>"+ a3 +"</span></div></div>";  
  str += "<div class='bar'><div class='bar-info rsoc5' data-total="+ a4 +">"+ n4 +"";
  str += "<span class='percent' style='float: right;'>"+ a4 +"</span></div></div>";  
  if(xClickMenu!="F") {
    str += "<div class='bar'><div class='bar-info rsoc6' data-total="+ a5 +">"+ n5 +"";
    str += "<span class='percent' style='float: right;'>"+ a5 +"</span></div></div>";  
  }
  $('#Display').html(str);

  function skillSet() {
    $('.bar-info').each(function() {
      total = $(this).data("total");
      $(this).css("width", total + "%");
    });
    
    $('.percent').each(function() {
      var $this = $(this);
      $({
        Counter: 10
      }).animate({
        Counter: $this.text()
      }, {
        duration: 3000,
        easing: 'swing',
        step: function() {
          $this.text(Math.ceil(this.Counter) + "%");
        }
      });
    });
  };
  setTimeout(skillSet, 1000);

  //alert(a0);
  //document.getElementById('A0').setAttribute('data-total', "87");
*/


