var dateString = new Date().toLocaleString('en-US', { timeZone: 'Asia/Jakarta' });
var xClickMenu = "A";


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
  dbBBDKickoff = firebase.firestore().collection("BBD_Kickoff");
  CheckScore();
}

function CheckScore() {
  var i = 0;
  dbBBDKickoff
  .orderBy('TotalPoint','desc')
  .orderBy('TotalRank','asc')
  .get().then((snapshot)=> {
    snapshot.forEach(doc=> {
      console.log(doc.data().EmpZone+" === "+doc.data().TotalPoint);
      if(i==0) {
        id0 = doc.id;
        n0 = doc.data().Round1+"-"+doc.data().EmpZone+" ("+doc.data().EmpRH+")";
        a0 = ((doc.data().TotalPoint*100)/15).toFixed(0);
      } else if(i==1) { 
        id1 = doc.id;
        n1 = doc.data().Round1+"-"+doc.data().EmpZone+" ("+doc.data().EmpRH+")";
        a1 = ((doc.data().TotalPoint*100)/15).toFixed(0);
      } else if(i==2) { 
        id2 = doc.id;
        n2 = doc.data().Round1+"-"+doc.data().EmpZone+" ("+doc.data().EmpRH+")";
        a2 = ((doc.data().TotalPoint*100)/15).toFixed(0);
      } else if(i==3) { 
        id3 = doc.id;
        n3 = doc.data().Round1+"-"+doc.data().EmpZone+" ("+doc.data().EmpRH+")";
        a3 = ((doc.data().TotalPoint*100)/15).toFixed(0);
      } else if(i==4) { 
        id4 = doc.id;
        n4 = doc.data().Round1+"-"+doc.data().EmpZone+" ("+doc.data().EmpRH+")";
        a4 = ((doc.data().TotalPoint*100)/15).toFixed(0);
      } else if(i==5) { 
        id5 = doc.id;
        n5 = doc.data().Round1+"-"+doc.data().EmpZone+" ("+doc.data().EmpRH+")";
        a5 = ((doc.data().TotalPoint*100)/15).toFixed(0);
      } else if(i==6) { 
        id6 = doc.id;
        n6 = doc.data().Round1+"-"+doc.data().EmpZone+" ("+doc.data().EmpRH+")";
        a6 = ((doc.data().TotalPoint*100)/15).toFixed(0);
      } else if(i==7) { 
        id7 = doc.id;
        n7 = doc.data().Round1+"-"+doc.data().EmpZone+" ("+doc.data().EmpRH+")";
        a7 = ((doc.data().TotalPoint*100)/15).toFixed(0);
      } else if(i==8) { 
        id8 = doc.id;
        n8 = doc.data().Round1+"-"+doc.data().EmpZone+" ("+doc.data().EmpRH+")";
        a8 = ((doc.data().TotalPoint*100)/15).toFixed(0);
      } else if(i==9) { 
        id9 = doc.id;
        n9 = doc.data().Round1+"-"+doc.data().EmpZone+" ("+doc.data().EmpRH+")";
        a9 = ((doc.data().TotalPoint*100)/15).toFixed(0);
      } else if(i==10) { 
        id10 = doc.id;
        n10 = doc.data().Round1+"-"+doc.data().EmpZone+" ("+doc.data().EmpRH+")";
        a10 = ((doc.data().TotalPoint*100)/15).toFixed(0);
      } else if(i==11) { 
        id11 = doc.id;
        n11 = doc.data().Round1+"-"+doc.data().EmpZone+" ("+doc.data().EmpRH+")";
        a11 = ((doc.data().TotalPoint*100)/15).toFixed(0);
      } else if(i==12) { 
        id12 = doc.id;
        n12 = doc.data().Round1+"-"+doc.data().EmpZone+" ("+doc.data().EmpRH+")";
        a12 = ((doc.data().TotalPoint*100)/15).toFixed(0);
      } else if(i==13) { 
        id13 = doc.id;
        n13 = doc.data().Round1+"-"+doc.data().EmpZone+" ("+doc.data().EmpRH+")";
        a13 = ((doc.data().TotalPoint*100)/15).toFixed(0);
      } else if(i==14) { 
        id14 = doc.id;
        n14 = doc.data().Round1+"-"+doc.data().EmpZone+" ("+doc.data().EmpRH+")";
        a14 = ((doc.data().TotalPoint*100)/15).toFixed(0);
      } else if(i==15) { 
        id15 = doc.id;
        n15 = doc.data().Round1+"-"+doc.data().EmpZone+" ("+doc.data().EmpRH+")";
        a15 = ((doc.data().TotalPoint*100)/15).toFixed(0);
      } else if(i==16) { 
        id16 = doc.id;
        n16 = doc.data().Round1+"-"+doc.data().EmpZone+" ("+doc.data().EmpRH+")";
        a16 = ((doc.data().TotalPoint*100)/15).toFixed(0);
      } else if(i==17) { 
        id17 = doc.id;
        n17 = doc.data().Round1+"-"+doc.data().EmpZone+" ("+doc.data().EmpRH+")";
        a17 = ((doc.data().TotalPoint*100)/15).toFixed(0);
      } else if(i==18) { 
        id18 = doc.id;
        n18 = doc.data().Round1+"-"+doc.data().EmpZone+" ("+doc.data().EmpRH+")";
        a18 = ((doc.data().TotalPoint*100)/15).toFixed(0);
      } else if(i==19) { 
        id19 = doc.id;
        n19 = doc.data().Round1+"-"+doc.data().EmpZone+" ("+doc.data().EmpRH+")";
        a19 = ((doc.data().TotalPoint*100)/15).toFixed(0);
      } else if(i==20) { 
        id20 = doc.id;
        n20 = doc.data().Round1+"-"+doc.data().EmpZone+" ("+doc.data().EmpRH+")";
        a20 = ((doc.data().TotalPoint*100)/15).toFixed(0);
      } else if(i==21) { 
        id21 = doc.id;
        n21 = doc.data().Round1+"-"+doc.data().EmpZone+" ("+doc.data().EmpRH+")";
        a21 = ((doc.data().TotalPoint*100)/15).toFixed(0);
      } else if(i==22) { 
        id22 = doc.id;
        n22 = doc.data().Round1+"-"+doc.data().EmpZone+" ("+doc.data().EmpRH+")";
        a22 = ((doc.data().TotalPoint*100)/15).toFixed(0);
      } else if(i==23) { 
        id23 = doc.id;
        n23 = doc.data().Round1+"-"+doc.data().EmpZone+" ("+doc.data().EmpRH+")";
        a23 = ((doc.data().TotalPoint*100)/15).toFixed(0);
      } else if(i==24) { 
        id24 = doc.id;
        n24 = doc.data().Round1+"-"+doc.data().EmpZone+" ("+doc.data().EmpRH+")";
        a24 = ((doc.data().TotalPoint*100)/15).toFixed(0);
      } else if(i==25) { 
        id25 = doc.id;
        n25 = doc.data().Round1+"-"+doc.data().EmpZone+" ("+doc.data().EmpRH+")";
        a25 = ((doc.data().TotalPoint*100)/15).toFixed(0);
      } else if(i==26) { 
        id26 = doc.id;
        n26 = doc.data().Round1+"-"+doc.data().EmpZone+" ("+doc.data().EmpRH+")";
        a26 = ((doc.data().TotalPoint*100)/15).toFixed(0);
      } else if(i==27) { 
        id27 = doc.id;
        n27 = doc.data().Round1+"-"+doc.data().EmpZone+" ("+doc.data().EmpRH+")";
        a27 = ((doc.data().TotalPoint*100)/15).toFixed(0);
      } else if(i==28) { 
        id28 = doc.id;
        n28 = doc.data().Round1+"-"+doc.data().EmpZone+" ("+doc.data().EmpRH+")";
        a28 = ((doc.data().TotalPoint*100)/15).toFixed(0);
      } else if(i==29) { 
        id29 = doc.id;
        n29 = doc.data().Round1+"-"+doc.data().EmpZone+" ("+doc.data().EmpRH+")";
        a29 = ((doc.data().TotalPoint*100)/15).toFixed(0);
      } else if(i==30) { 
        id30 = doc.id;
        n30 = doc.data().Round1+"-"+doc.data().EmpZone+" ("+doc.data().EmpRH+")";
        a30 = ((doc.data().TotalPoint*100)/15).toFixed(0);
      } else if(i==31) { 
        id31 = doc.id;
        n31 = doc.data().Round1+"-"+doc.data().EmpZone+" ("+doc.data().EmpRH+")";
        a31 = ((doc.data().TotalPoint*100)/15).toFixed(0);
      } else if(i==32) { 
        id32 = doc.id;
        n32 = doc.data().Round1+"-"+doc.data().EmpZone+" ("+doc.data().EmpRH+")";
        a32 = ((doc.data().TotalPoint*100)/15).toFixed(0);
      } else if(i==33) { 
        id33 = doc.id;
        n33 = doc.data().Round1+"-"+doc.data().EmpZone+" ("+doc.data().EmpRH+")";
        a33 = ((doc.data().TotalPoint*100)/15).toFixed(0);
      } else if(i==34) { 
        id34 = doc.id;
        n34 = doc.data().Round1+"-"+doc.data().EmpZone+" ("+doc.data().EmpRH+")";
        a34 = ((doc.data().TotalPoint*100)/15).toFixed(0);
      }
      i++;
    });
    NewSet();
  });
}


/*
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
*/

function NewSet() {
  str = '';
  str += "<div class='bar' onclick='OpenProfile(\""+ id0 +"\")'><div class='bar-info rsoc7' data-total="+ a0 +">"+ n0 +"";
  str += "<span class='percent' style='float: right;'>"+ a0 +"</span></div></div>";  
  str += "<div class='bar' onclick='OpenProfile(\""+ id1 +"\")'><div class='bar-info rsoc2' data-total="+ a1 +">"+ n1 +"";
  str += "<span class='percent' style='float: right;'>"+ a1 +"</span></div></div>";  
  str += "<div class='bar' onclick='OpenProfile(\""+ id2 +"\")'><div class='bar-info rsoc3' data-total="+ a2 +">"+ n2 +"";
  str += "<span class='percent' style='float: right;'>"+ a2 +"</span></div></div>";  
  str += "<div class='bar' onclick='OpenProfile(\""+ id3 +"\")'><div class='bar-info rsoc4' data-total="+ a3 +">"+ n3 +"";
  str += "<span class='percent' style='float: right;'>"+ a3 +"</span></div></div>";  
  str += "<div class='bar' onclick='OpenProfile(\""+ id4 +"\")'><div class='bar-info rsoc5' data-total="+ a4 +">"+ n4 +"";
  str += "<span class='percent' style='float: right;'>"+ a4 +"</span></div></div>";  
  str += "<div class='bar' onclick='OpenProfile(\""+ id5 +"\")'><div class='bar-info rsoc6' data-total="+ a5 +">"+ n5 +"";
  str += "<span class='percent' style='float: right;'>"+ a5 +"</span></div></div>";  
  str += "<div class='bar' onclick='OpenProfile(\""+ id6 +"\")'><div class='bar-info rsoc7' data-total="+ a6 +">"+ n6 +"";
  str += "<span class='percent' style='float: right;'>"+ a6 +"</span></div></div>";  
  str += "<div class='bar' onclick='OpenProfile(\""+ id7 +"\")'><div class='bar-info rsoc8' data-total="+ a7 +">"+ n7 +"";
  str += "<span class='percent' style='float: right;'>"+ a7 +"</span></div></div>";  
  str += "<div class='bar' onclick='OpenProfile(\""+ id8 +"\")'><div class='bar-info rsoc9' data-total="+ a8 +">"+ n8 +"";
  str += "<span class='percent' style='float: right;'>"+ a8 +"</span></div></div>";  
  str += "<div class='bar' onclick='OpenProfile(\""+ id9 +"\")'><div class='bar-info rsoc10' data-total="+ a9 +">"+ n9 +"";
  str += "<span class='percent' style='float: right;'>"+ a9 +"</span></div></div>";  
  str += "<div class='bar' onclick='OpenProfile(\""+ id10 +"\")'><div class='bar-info rsoc11' data-total="+ a10 +">"+ n10 +"";
  str += "<span class='percent' style='float: right;'>"+ a10 +"</span></div></div>";  

  str += "<div class='bar' onclick='OpenProfile(\""+ id11 +"\")'><div class='bar-info rsoc12' data-total="+ a11 +">"+ n11 +"";
  str += "<span class='percent' style='float: right;'>"+ a11 +"</span></div></div>";  
  str += "<div class='bar' onclick='OpenProfile(\""+ id12 +"\")'><div class='bar-info rsoc13' data-total="+ a12 +">"+ n12 +"";
  str += "<span class='percent' style='float: right;'>"+ a12 +"</span></div></div>";  
  str += "<div class='bar' onclick='OpenProfile(\""+ id13 +"\")'><div class='bar-info rsoc14' data-total="+ a13 +">"+ n13 +"";
  str += "<span class='percent' style='float: right;'>"+ a13 +"</span></div></div>";  
  str += "<div class='bar' onclick='OpenProfile(\""+ id14 +"\")'><div class='bar-info rsoc15' data-total="+ a14 +">"+ n14 +"";
  str += "<span class='percent' style='float: right;'>"+ a14 +"</span></div></div>";  
  str += "<div class='bar' onclick='OpenProfile(\""+ id15 +"\")'><div class='bar-info rsoc16' data-total="+ a15 +">"+ n15 +"";
  str += "<span class='percent' style='float: right;'>"+ a15 +"</span></div></div>";  
  str += "<div class='bar' onclick='OpenProfile(\""+ id16 +"\")'><div class='bar-info rsoc17' data-total="+ a16 +">"+ n16 +"";
  str += "<span class='percent' style='float: right;'>"+ a16 +"</span></div></div>";  
  str += "<div class='bar' onclick='OpenProfile(\""+ id17 +"\")'><div class='bar-info rsoc18' data-total="+ a17 +">"+ n17 +"";
  str += "<span class='percent' style='float: right;'>"+ a17 +"</span></div></div>";  
  str += "<div class='bar' onclick='OpenProfile(\""+ id18 +"\")'><div class='bar-info rsoc19' data-total="+ a18 +">"+ n18 +"";
  str += "<span class='percent' style='float: right;'>"+ a18 +"</span></div></div>";  
  str += "<div class='bar' onclick='OpenProfile(\""+ id19 +"\")'><div class='bar-info rsoc20' data-total="+ a19 +">"+ n19 +"";
  str += "<span class='percent' style='float: right;'>"+ a19 +"</span></div></div>";  
  str += "<div class='bar' onclick='OpenProfile(\""+ id20 +"\")'><div class='bar-info rsoc21' data-total="+ a20 +">"+ n20 +"";
  str += "<span class='percent' style='float: right;'>"+ a20 +"</span></div></div>";  

  str += "<div class='bar' onclick='OpenProfile(\""+ id21 +"\")'><div class='bar-info rsoc22' data-total="+ a21 +">"+ n21 +"";
  str += "<span class='percent' style='float: right;'>"+ a21 +"</span></div></div>";  
  str += "<div class='bar' onclick='OpenProfile(\""+ id22 +"\")'><div class='bar-info rsoc23' data-total="+ a22 +">"+ n22 +"";
  str += "<span class='percent' style='float: right;'>"+ a22 +"</span></div></div>";  
  str += "<div class='bar' onclick='OpenProfile(\""+ id23 +"\")'><div class='bar-info rsoc24' data-total="+ a23 +">"+ n23 +"";
  str += "<span class='percent' style='float: right;'>"+ a23 +"</span></div></div>";  
  str += "<div class='bar' onclick='OpenProfile(\""+ id24 +"\")'><div class='bar-info rsoc25' data-total="+ a24 +">"+ n24 +"";
  str += "<span class='percent' style='float: right;'>"+ a24 +"</span></div></div>";  
  str += "<div class='bar' onclick='OpenProfile(\""+ id25 +"\")'><div class='bar-info rsoc26' data-total="+ a25 +">"+ n25 +"";
  str += "<span class='percent' style='float: right;'>"+ a25 +"</span></div></div>";  
  str += "<div class='bar' onclick='OpenProfile(\""+ id26 +"\")'><div class='bar-info rsoc27' data-total="+ a26 +">"+ n26 +"";
  str += "<span class='percent' style='float: right;'>"+ a26 +"</span></div></div>";  
  str += "<div class='bar' onclick='OpenProfile(\""+ id27 +"\")'><div class='bar-info rsoc28' data-total="+ a27 +">"+ n27 +"";
  str += "<span class='percent' style='float: right;'>"+ a27 +"</span></div></div>";  
  str += "<div class='bar' onclick='OpenProfile(\""+ id28 +"\")'><div class='bar-info rsoc29' data-total="+ a28 +">"+ n28 +"";
  str += "<span class='percent' style='float: right;'>"+ a28 +"</span></div></div>";  
  str += "<div class='bar' onclick='OpenProfile(\""+ id29 +"\")'><div class='bar-info rsoc30' data-total="+ a29 +">"+ n29 +"";
  str += "<span class='percent' style='float: right;'>"+ a29 +"</span></div></div>";  
  str += "<div class='bar' onclick='OpenProfile(\""+ id30 +"\")'><div class='bar-info rsoc31' data-total="+ a30 +">"+ n30 +"";
  str += "<span class='percent' style='float: right;'>"+ a30 +"</span></div></div>";  

  str += "<div class='bar' onclick='OpenProfile(\""+ id31 +"\")'><div class='bar-info rsoc32' data-total="+ a31 +">"+ n31 +"";
  str += "<span class='percent' style='float: right;'>"+ a31 +"</span></div></div>";  
  str += "<div class='bar' onclick='OpenProfile(\""+ id32 +"\")'><div class='bar-info rsoc33' data-total="+ a32 +">"+ n32 +"";
  str += "<span class='percent' style='float: right;'>"+ a32 +"</span></div></div>";  
  str += "<div class='bar' onclick='OpenProfile(\""+ id33 +"\")'><div class='bar-info rsoc34' data-total="+ a33 +">"+ n33 +"";
  str += "<span class='percent' style='float: right;'>"+ a33 +"</span></div></div>";  
  str += "<div class='bar' onclick='OpenProfile(\""+ id34 +"\")'><div class='bar-info rsoc35' data-total="+ a34 +">"+ n34 +"";
  str += "<span class='percent' style='float: right;'>"+ a34 +"</span></div></div>";  


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
}





function OpenProfile(uid) {
  var str = "";
  console.log(uid);
  dbBBDKickoff.where(firebase.firestore.FieldPath.documentId(), "==", uid)
  .get().then((snapshot)=> {
  snapshot.forEach(doc=> {
      str += '<center>';
      if(doc.data().LinePicture!="") { 
        str += '<div><img src="'+doc.data().LinePicture+'" class="add-profile" style="margin:40px auto 0px auto;"></div>';
        //str += '<div class="NameLine">'+doc.data().LineName+'</div>';
      } else {
        str += '<div style="text-align:center;"><img src="./img/m.png" class="add-profile"></div>';
      }
      str += '<div class="text-1">'+doc.data().EmpName+'</div>';
      str += '<div class="text-2" style="margin-top:0px;"><b>สำนักงานเขตธุรกิจสาขา-'+doc.data().EmpZone+' ('+doc.data().EmpRH+')</b></div>';
      str += '<div class="btn-t4">คะแนน -> '+doc.data().TotalPoint+' Point | อันดับ -> '+doc.data().TotalRank+'</div>';
      str += '<div class="text-2">แข่งขัน สาย '+doc.data().Round1+'</div>';

      str += '<div>';

      str += '<div class="btn-t77">1. หมวด % Achievement</div>';
      str += '<table class="table table-bordered table-hover" style="width:90%; max-width: 400px; margin:auto;">';
      str += '<thead class="thead-dark"><tr><th scope="col" class="col_td">รายการ</th><th scope="col" class="col_td">รายละเอียด</th></thead>';
      str += '<tbody>';
      str += '<tr><th scope="row">MTD Target</th><td style="text-align:center;">'+doc.data().MTDTarget_1+'</td></tr>';
      str += '<tr><th scope="row">MTD Issue</th><td style="text-align:center;">'+doc.data().MTDIssue_1+'</td></tr>';
      str += '<tr><th scope="row">% Achieve</th><td style="text-align:center;">'+doc.data().Achieve_1+'</td></tr>';
      str += '<tr><th scope="row">Rank</th><td style="text-align:center;">'+doc.data().Rank_1+'</td></tr>';
      str += '<tr><th scope="row">Point</th><td style="text-align:center;">'+doc.data().Point_1+'</td></tr>';
      str += '</tbody>';
      str += '</table>';

      str += '<div class="btn-t77">2. หมวด % Success Seller </div>';
      str += '<table class="table table-bordered table-hover" style="width:90%; max-width: 400px; margin:auto;">';
      str += '<thead class="thead-dark"><tr><th scope="col" class="col_td">รายการ</th><th scope="col" class="col_td">รายละเอียด</th></thead>';
      str += '<tbody>';
      str += '<tr><th scope="row">#BM</th><td style="text-align:center;">'+doc.data().BM_2+'</td></tr>';
      str += '<tr><th scope="row">#BA/MF</th><td style="text-align:center;">'+doc.data().BAMF_2+'</td></tr>';
      str += '<tr><th scope="row">#BM&BA</th><td style="text-align:center;">'+doc.data().BMBA_2+'</td></tr>';
      str += '<tr><th scope="row">#BM 500K</th><td style="text-align:center;">'+doc.data().BM500K_2+'</td></tr>';
      str += '<tr><th scope="row">#BA/MF 250K</th><td style="text-align:center;">'+doc.data().MF250K_2+'</td></tr>';
      str += '<tr><th scope="row">#BM&BA Success</th><td style="text-align:center;">'+doc.data().BASuccess_2+'</td></tr>';
      str += '<tr><th scope="row">% Success</th><td style="text-align:center;">'+doc.data().Success_2+'</td></tr>';
      str += '<tr><th scope="row">Rank</th><td style="text-align:center;">'+doc.data().Rank_2+'</td></tr>';
      str += '<tr><th scope="row">Point</th><td style="text-align:center;">'+doc.data().Point_2+'</td></tr>';
      str += '</tbody>';
      str += '</table>';

      str += '<div class="btn-t77">3. หมวด % Product Mix</div>';
      str += '<table class="table table-bordered table-hover" style="width:90%; max-width: 400px; margin:auto;">';
      str += '<thead class="thead-dark"><tr><th scope="col" class="col_td">รายการ</th><th scope="col" class="col_td">รายละเอียด</th></thead>';
      str += '<tbody>';
      str += '<tr><th scope="row">Product Focus </th><td style="text-align:center;">'+doc.data().ProductFocus_3+'</td></tr>';
      str += '<tr><th scope="row">Total APE</th><td style="text-align:center;">'+doc.data().TotalAPE_3+'</td></tr>';
      str += '<tr><th scope="row">% Mix</th><td style="text-align:center;">'+doc.data().Mix_3+'</td></tr>';
      str += '<tr><th scope="row">Rank</th><td style="text-align:center;">'+doc.data().Rank_3+'</td></tr>';
      str += '<tr><th scope="row">Point</th><td style="text-align:center;">'+doc.data().Point_3+'</td></tr>';
      str += '</tbody>';
      str += '</table>';

      str += '</div>';

      str += '<div class="btn-t2" onclick="CloseAll()" style="margin-top:15px;">ปิดหน้าต่างนี้</div>';
      str += '<div class="clr" style="height: 25px;"></div>';
      str += '</center>';
      //str += '</div>';
    });
    $("#DisplayProfile").html(str);  
    document.getElementById("id01").style.display = "block";
  });
}

function CloseAll() {
  document.getElementById('id01').style.display='none';
  //document.getElementById('id02').style.display='none';
}
