var dateString = new Date().toLocaleString('en-US', { timeZone: 'Asia/Jakarta' });
var xClickMenu = "A";

$(document).ready(function () {
  if(sessionStorage.getItem("EmpID_Kickoff")==null) { location.href = "index.html"; }
  Connect_DB()
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
  loadData();
  //loadUser();
}


function loadData() {
  var i = 0;
  var str = "";
  str += '<table class="table" style="width:95%; margin:10px auto;"><tbody>';
  dbBBDKickoff.where('Round1','==', xClickMenu)
  .orderBy('EmpRH','asc')
  .get().then((snapshot)=> {
    snapshot.forEach(doc=> {
      str += '<tr onclick="OpenProfile(\''+ doc.id +'\')" class="LinkProfile">';
      if(doc.data().LinePicture!="") {
        str += '<td class="td-center td-padding" style="width:12%;text-align:center;"><img src="'+doc.data().LinePicture+'" class="profile-team"></td>';
      } else {
        if(doc.data().EmpSex=="M") {
          str += '<td class="td-center td-padding" style="width:12%;text-align:center;"><img src="./img/m.png" class="profile-team"></td>';
        } else {
          str += '<td class="td-center td-padding" style="width:12%;text-align:center;"><img src="./img/f.png" class="profile-team"></td>';
        }
      }
      str += '<td class="td-padding" style="width:88%;"><font color="#0056ff"><b>สนข. '+doc.data().EmpZone+' ('+doc.data().EmpRH+')</b></font>';
      str += '<font color="#002d63"><br><b>คุณ'+doc.data().EmpName+'</b></td>';
      str += '<td class="td-center td-padding" onclick="OpenProfile(\''+ doc.id +'\')"><div class="btn-t1" style="width:40px;margin-top:0px;font-size:9px;">View</div></td>';
      str += '</tr>';
      i++;
    }); 
    str += '</tbody></table>';
    $("#DisplayTeam").html(str);  
    $("#DisplaySum").html("<div class='btn-t33' style='background-color: #94a9b3;border: solid #94a9b3 1px;margin-top:15px;'>ข้อมูลการแบ่งสายการแข่งขัน<br>สาย  "+ xClickMenu +" จำนวน "+ i +" สำนักงานเขตธุรกิจสาขา</div>");  
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
    loadData()
  }
}



function OpenTeam(x) {
  xClickMenu = x;
  loadData()
  //location.href = 'team.html?gid='+x;
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
