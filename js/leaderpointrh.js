var dateString = new Date().toLocaleString('en-US', { timeZone: 'Asia/Jakarta' });
var xClickMenu = "RH1";
var Zone1 = "";
var Zone2 = "";
var Zone3 = "";
var Zone4 = "";
var Zone5 = "";
var Zone6 = "";
var Zone7 = "";
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
var G1 = 0;
var G2 = 0;
var G3 = 0;


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
  dbBBDKickoff.where('EmpRH','==', xClickMenu)
  .orderBy('TotalPoint','desc')
  .orderBy('TotalRank','asc')
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
      } else if(i==6) { 
        Zone7 = doc.data().EmpZone;
        G1 = doc.data().Point_1;
        G2 = doc.data().Point_2;
        G3 = doc.data().Point_3;
      }
      i++;
    });
    drawStacked();
  })
}

google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawStacked);


function drawStacked() {
  if(xClickMenu=="RH1") {
    var data = google.visualization.arrayToDataTable([
      ['Zone', '% Achievement', '% Success Seller ', '% Product Mix'],
      [ Zone1, A1, A2, A3],
      [ Zone2, B1, B2, B3],
      [ Zone3, C1, C2, C3],
      [ Zone4, D1, D2, D3],
      [ Zone5, E1, E2, E3],
      [ Zone6, E1, E2, E3],
      [ Zone7, G1, G2, G3]
    ]);
  } else if(xClickMenu=="RH4" || xClickMenu=="RH6") {
    var data = google.visualization.arrayToDataTable([
      ['Zone', '% Achievement', '% Success Seller ', '% Product Mix'],
      [ Zone1, A1, A2, A3],
      [ Zone2, B1, B2, B3],
      [ Zone3, C1, C2, C3],
      [ Zone4, D1, D2, D3],
      [ Zone5, E1, E2, E3]
    ]);
  } else {
    var data = google.visualization.arrayToDataTable([
      ['Zone', '% Achievement', '% Success Seller ', '% Product Mix'],
      [ Zone1, A1, A2, A3],
      [ Zone2, B1, B2, B3],
      [ Zone3, C1, C2, C3],
      [ Zone4, D1, D2, D3],
      [ Zone5, E1, E2, E3],
      [ Zone6, E1, E2, E3]
    ]);
  }
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
      title: 'ข้อมูลภาพรวมของ '+xClickMenu,
      bars: 'horizontal',
        isStacked: true,
      bar: { groupWidth: "90%" }
  };
  var chart = new google.visualization.BarChart(document.getElementById('chart_div'));
  chart.draw(data, options);
}



function SelectBox(x) {
  var xx = "";
  if(x=="RH1") {
    xx = 1;
  } else if(x=="RH2") { 
    xx = 2;
  } else if(x=="RH3") { 
    xx = 3;
  } else if(x=="RH4") { 
    xx = 4;
  } else if(x=="RH5") { 
    xx = 5;
  } else if(x=="RH6") { 
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
