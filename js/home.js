var DoneSurvey = 0;
var ShowScore = 0;

$(document).ready(function () {
  if(sessionStorage.getItem("EmpID_Kickoff")==null) { location.href = "index.html"; }
  Connect_DB();
});


function Connect_DB() {
  var firebaseConfig = {
    apiKey: "AIzaSyDfTJJ425U4OY0xac6jdhtSxDeuJ-OF-lE",
    authDomain: "retailproject-6f4fc.firebaseapp.com",
    projectId: "retailproject-6f4fc",
    storageBucket: "retailproject-6f4fc.appspot.com",
    messagingSenderId: "653667385625",
    appId: "1:653667385625:web:a5aed08500de80839f0588",
    measurementId: "G-9SKTRHHSW9"
  };
  firebase.initializeApp(firebaseConfig);
  dbBBDKickoff = firebase.firestore().collection("BBD_Kickoff");
  dbBBDRH = firebase.firestore().collection("BBD_RH");
  CheckRH();
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
      }
      i++;
    });
    NewSet();
  });
}


function NewSet() {
  str = '';
  //str += "<div class='bar' onclick='OpenProfile(\""+ n0 +"\")'><div class='bar-info rsoc7' data-total="+ a0 +">"+ n0 +"";
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
  $('#DisplayZone').html(str);

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

/*
function OpenProfile(uid) {
  var str = "";
  //alert(uid);
  dbBBDKickoff.where(firebase.firestore.FieldPath.documentId(), "==", uid)
  .get().then((snapshot)=> {
  snapshot.forEach(doc=> {
      str += '<center>';
      if(doc.data().LinePicture!="") { 
        str += '<div><img src="'+doc.data().LinePicture+'" class="add-profile" style="margin:40px auto 0px auto;"></div>';
        str += '<div class="NameLine">'+doc.data().LineName+'</div>';
      } else {
        str += '<div style="text-align:center;"><img src="./img/m.png" class="add-profile"></div>';
      }
      str += '<div class="text-1">'+doc.data().EmpName+'</div>';
      str += '<div class="text-2" style="margin-top:0px;"><b>สำนักงานเขตธุรกิจสาขา-'+doc.data().EmpZone+' ('+doc.data().EmpRH+')</b></div>';
      str += '<div class="btn-t2" onclick="CloseAll()" style="margin-top:15px;">ปิดหน้าต่างนี้</div>';
      str += '<div class="clr" style="height: 25px;"></div>';
      str += '</center>';
      //str += '</div>';
    });
    $("#DisplayProfile").html(str);  
    document.getElementById("id02").style.display = "block";
  });
}
*/

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
    document.getElementById("id02").style.display = "block";
  });
}



function CheckRH() {
  //var CalRatio = 15;
  var i = 0;
  dbBBDRH
  .orderBy('TotalPoint','desc')
  .orderBy('TotalRank','asc')
  .get().then((snapshot)=> {
    snapshot.forEach(doc=> {
      //console.log(doc.data().EmpZone+" === "+doc.data().TotalPoint);
      if(i==0) {
        iid0 = doc.id;
        nn0 = doc.data().EmpRH;
        aa0 = ((doc.data().TotalPoint*100)/15).toFixed(0);
      } else if(i==1) { 
        iid1 = doc.id;
        nn1 = doc.data().EmpRH;
        aa1 = ((doc.data().TotalPoint*100)/15).toFixed(0);
      } else if(i==2) { 
        iid2 = doc.id;
        nn2 = doc.data().EmpRH;
        aa2 = ((doc.data().TotalPoint*100)/15).toFixed(0);
      } else if(i==3) { 
        iid3 = doc.id;
        nn3 = doc.data().EmpRH;
        aa3 = ((doc.data().TotalPoint*100)/15).toFixed(0);
      } else if(i==4) { 
        iid4 = doc.id;
        nn4 = doc.data().EmpRH;
        aa4 = ((doc.data().TotalPoint*100)/15).toFixed(0);
      } else if(i==5) { 
        iid5 = doc.id;
        nn5 = doc.data().EmpRH;
        aa5 = ((doc.data().TotalPoint*100)/15).toFixed(0);
      }
      i++;
    });
    SetRH();
  });
}


function SetRH() {
  str = '';
  str += "<div class='bar' onclick='OpenRH(\""+ iid0 +"\")'><div class='bar-info rsoc11' data-total="+ aa0 +">"+ nn0 +"";
  str += "<span class='percent' style='float: right;'>"+ aa0 +"</span></div></div>";  
  str += "<div class='bar' onclick='OpenRH(\""+ iid1 +"\")'><div class='bar-info rsoc12' data-total="+ aa1 +">"+ nn1 +"";
  str += "<span class='percent' style='float: right;'>"+ aa1 +"</span></div></div>";  
  str += "<div class='bar' onclick='OpenRH(\""+ iid2 +"\")'><div class='bar-info rsoc13' data-total="+ aa2 +">"+ nn2 +"";
  str += "<span class='percent' style='float: right;'>"+ aa2 +"</span></div></div>";  
  str += "<div class='bar' onclick='OpenRH(\""+ iid3 +"\")'><div class='bar-info rsoc14' data-total="+ aa3 +">"+ nn3 +"";
  str += "<span class='percent' style='float: right;'>"+ aa3 +"</span></div></div>";  
  str += "<div class='bar' onclick='OpenRH(\""+ iid4 +"\")'><div class='bar-info rsoc15' data-total="+ aa4 +">"+ nn4 +"";
  str += "<span class='percent' style='float: right;'>"+ aa4 +"</span></div></div>";  
  str += "<div class='bar' onclick='OpenRH(\""+ iid5 +"\")'><div class='bar-info rsoc16' data-total="+ aa5 +">"+ nn5 +"";
  str += "<span class='percent' style='float: right;'>"+ aa5 +"</span></div></div>";  
  $('#DisplayRH').html(str);
/*
  function skillSet() {
    $('.bar-info').each(function() {
      total1 = $(this).data("total");
      $(this).css("width", total1 + "%");
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
*/
  //setTimeout(skillSet, 1000);
}




function OpenRH(uid) {
/*
  var str = "";
  dbBBDRH.where(firebase.firestore.FieldPath.documentId(), "==", uid)
  .get().then((snapshot)=> {
  snapshot.forEach(doc=> {
      str += '<center>';
      if(doc.data().LinePicture!="") { 
        str += '<div><img src="'+doc.data().LinePicture+'" class="add-profile" style="margin:40px auto 0px auto;"></div>';
        str += '<div class="NameLine">'+doc.data().LineName+'</div>';
      } else {
        str += '<div style="text-align:center;"><img src="./img/m.png" class="add-profile"></div>';
      }
      str += '<div class="text-1">'+doc.data().EmpRH+'</div>';
      str += '<div class="text-2" style="margin-top:0px;"><b>'+doc.data().EmpRH+' ('+doc.data().EmpRH+')</b></div>';
      str += '<div class="btn-t2" onclick="CloseAll()" style="margin-top:15px;">ปิดหน้าต่างนี้</div>';
      str += '<div class="clr" style="height: 25px;"></div>';
      str += '</center>';
      //str += '</div>';
    });
    $("#DisplayRHScore").html(str);  
    document.getElementById("id03").style.display = "block";
  });
*/
  var str = "";
  console.log(uid);
  dbBBDRH.where(firebase.firestore.FieldPath.documentId(), "==", uid)
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
      str += '<div class="text-2" style="margin-top:0px;"><b>'+doc.data().EmpPosition+'</b> ('+ doc.data().EmpRH+')</div>';
      str += '<div class="btn-t4">คะแนน -> '+doc.data().TotalPoint+' Point | อันดับ -> '+doc.data().TotalRank+'</div>';
      //str += '<div class="text-2">แข่งขัน สาย '+doc.data().Round1+'</div>';

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
    document.getElementById("id02").style.display = "block";
  });

}



function OpenLink(page) {
  var str = "";
  if(page==1) {
    location.href = 'intro.html';
  } else if(page==2) {
    location.href = 'howto.html';
  } else if(page==3) { // ประเมินผล
    str += '<center>';
    str += '<div class="btn-t3" style="margin-top:25px;">VDO แนะนำการแข่งขัน</div>';
    str += '<video id="video" style="max-width:450px;width:99%;margin:25px auto 5px auto;" controls="controls" autoplay>';
    str += '<source src="https://firebasestorage.googleapis.com/v0/b/retailproject-6f4fc.appspot.com/o/vdo%2FBBDLeague.mp4?alt=media&token=62eb01b8-8c1f-4dca-955d-221dc4bba317" type="video/mp4"></video>';
    str += '<div class="btn-t2" onclick="CloseVDO()" style="margin-top:15px;">ปิดวิดีโอ</div>';
    str += '</center><div class="clr" style="height: 25px;"></div>';
    $("#DisplayVDO").html(str);  
    document.getElementById('id01').style.display='block';
  } else if(page==4) { // ดูภาพกิจกรรม
    location.href = 'allteam.html';
  } else if(page==5) { // เอกสารอบรม
    location.href = 'rhpoint.html';
  } else if(page==6) {
    location.href = 'notwork.html';
  }
}


function CloseAll() {
  document.getElementById('id01').style.display='none';
  document.getElementById('id02').style.display='none';
  document.getElementById('id03').style.display='none';
}

function CloseVDO() {
  var video = document.querySelector("#video");
  video.pause();
  video.currentTime = 0;
  document.getElementById('id01').style.display='none';
}

