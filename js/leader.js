var dateString = new Date().toLocaleString('en-US', { timeZone: 'Asia/Jakarta' });
var xClickMenu = "A";


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
      console.log(doc.data().EmpZone+" === "+doc.data().TotalPoint);
      if(i==0) {
        id0 = doc.id;
        n0 = doc.data().EmpZone;
        a0 = ((doc.data().TotalPoint*100)/15).toFixed(0);
      } else if(i==1) { 
        id1 = doc.id;
        n1 = doc.data().EmpZone;
        a1 = ((doc.data().TotalPoint*100)/15).toFixed(0);
      } else if(i==2) { 
        id2 = doc.id;
        n2 = doc.data().EmpZone;
        a2 = ((doc.data().TotalPoint*100)/15).toFixed(0);
      } else if(i==3) { 
        id3 = doc.id;
        n3 = doc.data().EmpZone;
        a3 = ((doc.data().TotalPoint*100)/15).toFixed(0);
      } else if(i==4) { 
        id4 = doc.id;
        n4 = doc.data().EmpZone;
        a4 = ((doc.data().TotalPoint*100)/15).toFixed(0);
      } else if(i==5) { 
        id5 = doc.id;
        n5 = doc.data().EmpZone;
        a5 = ((doc.data().TotalPoint*100)/15).toFixed(0);
      }
      i++;
    });
    NewSet();
  });
}



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
  if(xClickMenu!="F") {
    str += "<div class='bar' onclick='OpenProfile(\""+ id5 +"\")'><div class='bar-info rsoc6' data-total="+ a5 +">"+ n5 +"";
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
