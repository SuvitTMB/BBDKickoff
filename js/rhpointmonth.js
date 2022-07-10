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
  dbBBDRH = firebase.firestore().collection("BBD_RHmonth");
  CheckScore();
}


function CheckScore() {
  var i = 0;
  dbBBDRH
  .orderBy('EmpRH','asc')
  //.orderBy('TotalPoint','desc')
  //.orderBy('TotalRank','asc')
  .get().then((snapshot)=> {
    snapshot.forEach(doc=> {
      console.log(doc.data().EmpRH+" === "+doc.data().Jul_1+" === "+doc.data().Jul_2+" === "+doc.data().Jul_3);
      if(i==0) {
        Zone1 = doc.data().EmpRH;
        A1 = doc.data().Jul_1;
        A2 = doc.data().Jul_2;
        A3 = doc.data().Jul_3;
      } else if(i==1) { 
        Zone2 = doc.data().EmpRH;
        B1 = doc.data().Jul_1;
        B2 = doc.data().Jul_2;
        B3 = doc.data().Jul_3;
      } else if(i==2) { 
        Zone3 = doc.data().EmpRH;
        C1 = doc.data().Jul_1;
        C2 = doc.data().Jul_2;
        C3 = doc.data().Jul_3;
      } else if(i==3) { 
        Zone4 = doc.data().EmpRH;
        D1 = doc.data().Jul_1;
        D2 = doc.data().Jul_2;
        D3 = doc.data().Jul_3;
      } else if(i==4) { 
        Zone5 = doc.data().EmpRH;
        E1 = doc.data().Jul_1;
        E2 = doc.data().Jul_2;
        E3 = doc.data().Jul_3;
      } else if(i==5) { 
        Zone6 = doc.data().EmpRH;
        F1 = doc.data().Jul_1;
        F2 = doc.data().Jul_2;
        F3 = doc.data().Jul_3;
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
      chartArea: {width: '80%'},
      legend: { position: 'none' },
      title: 'ข้อมูลการแข่งขันระดับ Region Championship',
      bars: 'horizontal',
        isStacked: true,
      bar: { groupWidth: "80%" }
  };
  var chart = new google.visualization.BarChart(document.getElementById('chart_div'));
  chart.draw(data, options);
*/
      var data = google.visualization.arrayToDataTable([
        ['RH', '% Achievement', '% Success Seller', '% Product Mix', { role: 'annotation' } ],
        ['RH1', A1, A2, A3, ''],
        ['RH2', B1, B2, B3, ''],
        ['RH3', C1, C2, C3, ''],
        ['RH4', D1, D2, D3, ''],
        ['RH5', E1, E2, E3, ''],
        ['RH6', F1, F2, F3, '']
      ]);

      var options = {
        annotations: {textStyle: { fontName: 'ekachon-regular' }},
        hAxis: {textStyle: { fontName: 'ekachon-regular' }, titleTextStyle: { fontName: 'ekachon-regular' }},
        vAxis: {textStyle: { fontName: 'ekachon-regular' }, titleTextStyle: { fontName: 'ekachon-regular' }},
        titleTextStyle: { fontName: 'ekachon-regular' },
        tooltip: {textStyle: {fontName: 'ekachon-regular' }},
        fontName: 'ekachon-regular',
        fontSize: 11,
        width: 360,
        height: 300,
        chartArea: {width: '80%'},
        legend: { position: 'top', maxLines: 3 },
        bar: { groupWidth: '80%' },
        isStacked: true,
      };
      var chart = new google.visualization.ColumnChart(document.getElementById('chart_div'));
      chart.draw(data, options);
}
