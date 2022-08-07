var dateString = new Date().toLocaleString('en-US', { timeZone: 'Asia/Jakarta' });
var xLeague = "Champion League";
var xClickMenu = 1;
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

  Zone1 = "";
  Zone2 = "";
  Zone3 = "";
  Zone4 = "";
  Zone5 = "";
  Zone6 = "";
  A1 = 0;
  A2 = 0;
  A3 = 0;
  B1 = 0;
  B2 = 0;
  B3 = 0;
  C1 = 0;
  C2 = 0;
  C3 = 0;
  D1 = 0;
  D2 = 0;
  D3 = 0;
  E1 = 0;
  E2 = 0;
  E3 = 0;
  F1 = 0;
  F2 = 0;
  F3 = 0;

  dbBBDKickoff.where('League','==', xLeague)
  .where('Round2','==', parseInt(xClickMenu))
  .orderBy('TotalRank','asc')
  .orderBy('TotalPoint','desc')
  .get().then((snapshot)=> {
    snapshot.forEach(doc=> {
      //console.log(doc.data().EmpZone+" === "+doc.data().Point_1+" === "+doc.data().Point_2+" === "+doc.data().Point_3);
      if(i==0) {
        Zone1 = doc.data().EmpZone  + "\n("+ doc.data().EmpRH +")";
        A1 = doc.data().Point_1;
        A2 = doc.data().Point_2;
        A3 = doc.data().Point_3;
      } else if(i==1) { 
        Zone2 = doc.data().EmpZone + "\n("+ doc.data().EmpRH +")";
        B1 = doc.data().Point_1;
        B2 = doc.data().Point_2;
        B3 = doc.data().Point_3;
      } else if(i==2) { 
        Zone3 = doc.data().EmpZone + "\n("+ doc.data().EmpRH +")";
        C1 = doc.data().Point_1;
        C2 = doc.data().Point_2;
        C3 = doc.data().Point_3;
/*
      } else if(i==3) { 
        Zone4 = doc.data().EmpZone + "\n("+ doc.data().EmpRH +")";
        D1 = doc.data().Point_1;
        D2 = doc.data().Point_2;
        D3 = doc.data().Point_3;
      } else if(i==4) { 
        Zone5 = doc.data().EmpZone + "\n("+ doc.data().EmpRH +")";
        E1 = doc.data().Point_1;
        E2 = doc.data().Point_2;
        E3 = doc.data().Point_3;
      } else if(i==5) { 
        Zone6 = doc.data().EmpZone + "\n("+ doc.data().EmpRH +")";
        F1 = doc.data().Point_1;
        F2 = doc.data().Point_2;
        F3 = doc.data().Point_3;
*/
      }
      i++;
    });
    drawStacked();
  })
}

google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawStacked);


function drawStacked() {
  var data = google.visualization.arrayToDataTable([
    ['Zone', '% Achievement', '% Success Seller ', '% Product Mix'],
    [ Zone1, A1, A2, A3],
    [ Zone2, B1, B2, B3],
    [ Zone3, C1, C2, C3]
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


function SelectBox(x) {
  var xx = "";
  if(x==1) {
    xx = 1;
  } else if(x==2) { 
    xx = 2;
  } else if(x==3) { 
    xx = 3;
  } else if(x=="D") { 
    xx = 4;
  } else if(x=="E") { 
    xx = 5;
  } else if(x=="F") { 
    xx = 6;
  }
  var i = 1;
  for (i = 1; i < 4; i++) {
    document.getElementById(i).classList.remove('box-menu2');
  }   
  if(x!="") {
    //document.getElementById('loading').style.display='block';
    xClickMenu = x;
    //console.log(xx);
    document.getElementById(xx).classList.add('box-menu2');
    CheckScore()
  }
}

