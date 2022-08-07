var dateString = new Date().toLocaleString('en-US', { timeZone: 'Asia/Jakarta' });
var xClickMenu = "A";
var xMonth = "กค. - สค.";
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
  document.getElementById(1).classList.add('box-menu44');
  //if(sessionStorage.getItem("EmpID_Kickoff")==null) { location.href = "index.html"; }
  Connect_DB();
  GetLinePicture();
  TargetAPE();
  Achievement();
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
  dbBBDRH = firebase.firestore().collection("BBD_RH");
  dbBBDZone = firebase.firestore().collection("BBD_Kickoff");
  dbLeagueMember = firebase.firestore().collection("BBD_LeagueMember");
  //CheckScore();
}

function GetLinePicture() {
  var i = 0;
  var str = "";
  LineEmpIDArr = [];
  LinePictureArr = [];
  dbLeagueMember
  .orderBy('EmpID','asc')
  .get().then((snapshot)=> {
    snapshot.forEach(doc=> {
      LineEmpIDArr.push(doc.data().EmpID);
      LinePictureArr.push({ EmpID: doc.data().EmpID, EmpName: doc.data().LineName , EmpPicture: doc.data().LinePicture, EmpRef: doc.id });
    });    
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
  }
  var i = 1;
  for (i = 1; i < 4; i++) {
    document.getElementById(i).classList.remove('box-menu44');
  }   
    console.log(x);
  if(x!="") {
    //document.getElementById('loading').style.display='block';
    xClickMenu = x;
    //console.log(xx);
    document.getElementById(xx).classList.add('box-menu44');
    document.getElementById('DisplayWaitting').style.display='block';
    if(x=="A") {
      Achievement();
    } else if(x=="B") { 
      SuccessSeller();
    } else if(x=="C") { 
      ProductMix();
    }
    //loadData()
  }
}


var MTDTarget = 0;
var MTDIssue = 0;
var MTDRatio = 0;
function TargetAPE() {
  str = "";
  dbBBDRH.orderBy('EmpRH','asc')
  .get().then((snapshot)=> {
    snapshot.forEach(doc=> {
      MTDTarget = MTDTarget + doc.data().MTDTarget_1;
      MTDIssue = MTDIssue + doc.data().MTDIssue_1;
    });
    MTDTarget = ((MTDIssue / MTDTarget) * 100).toFixed(2);
    str += '<div class="bar_background"><div style="padding-top:8px;"><div class="bar_body">'+xMonth+'</div>';
    str += '<div class="progress2" style="float: left;width:60%;margin-top:6px;"><div class="bar2" style="width:'+ MTDTarget +'%"></div></div>';
    str += '<div class="bar_body1">'+ MTDTarget +'%</div></div><div class="clr"></div></div>';
    $("#DisplayTarget").html(str);  
    document.getElementById('DisplayWaittingTarget').style.display='none';
    document.getElementById('DisplayTarget').style.display='block';
  })
}





function Achievement() {
  var str = "";
  var sRH = "";
  str += '<div class="btn-t33" style="margin-top:30px; background-color: #94a9b3;border: solid #94a9b3 1px;">เป้าหมาย % Achievement<br> '+xMonth+' 2565</div>';
  dbBBDRH.orderBy('EmpRH','asc')
  .get().then((snapshot)=> {
    snapshot.forEach(doc=> {
      if(sRH=="") { sRH = doc.data().EmpRH; }
      str += '<div class="bar_background"><div style="padding-top:8px;">';
      str += '<div class="bar_body"><div class="btn-t66" onclick="ShowZone(\''+ doc.data().EmpRH +'\')">'+ doc.data().EmpRH +'</div></div>';
      if(doc.data().MTDTarget_1<doc.data().MTDIssue_1) { 
        str += '<div class="progress2" style="float: left;width:60%;margin-top:6px;"><div class="bar4" style="width:'+ doc.data().Achieve_1 +'"></div></div>';
      } else {
        str += '<div class="progress2" style="float: left;width:60%;margin-top:6px;"><div class="bar2" style="width:'+ doc.data().Achieve_1 +'"></div></div>';
      }
      str += '<div class="bar_body1" onclick="OpenProfile(\''+ doc.id +'\')">'+ doc.data().Achieve_1 +'</div>';
      str += '</div><div class="clr"></div></div>';


      if(doc.data().EmpRH!=sRH) {
       // console.log(doc.data().EmpRH);
        //ShowZone(doc.data().EmpRH);

        var str1 = "";
        dbBBDZone.where('EmpRH','==', doc.data().EmpRH)
        .orderBy('EmpZone','asc')
        .get().then((snapshot)=> {
          snapshot.forEach(doc=> {
            console.log(doc.data().EmpZone);
            str1 += '<div class="bar_background"><div style="padding-top:8px;">';
            str1 += '<div class="bar_body"><div class="btn-t66" onclick="OpenProfile1(\''+ doc.id +'\')">'+ doc.data().EmpZone +'</div></div>';
            str1 += '<div class="progress2" style="float: left;width:60%;margin-top:6px;"><div class="bar2" style="width:'+ doc.data().Achieve_1 +'"></div></div>';
            str1 += '<div class="bar_body1">'+ doc.data().Achieve_1 +'</div>';
            str1 += '</div><div class="clr"></div></div>';
          });
          //console.log(str1);
          str += ''+str1;
          //alert(str1);
          sRH = doc.data().EmpRH;
        })
          //ShowZone(doc.data().EmpRH)
         // sRH = doc.data().EmpRH;

      }
    });
    $("#DisplayReport").html(str);  
    document.getElementById('DisplayWaitting').style.display='none';
    document.getElementById('DisplayReport').style.display='block';
  })
}


function ShowZone(RH) {
  var str = "";
  //alert(RH);
  str += '<center><div class="btn-t4" style="margin-top:30px;">ข้อมูลการแข่งขันของเดือนสิงหาคม 2565<br>สำนักงานภาคธุรกิจสาขา -> '+RH+'</div>';
  dbBBDZone.where('EmpRH','==', RH)
  .orderBy('EmpZone','asc')
  .get().then((snapshot)=> {
    snapshot.forEach(doc=> {
      str += '<div class="bar_background"><div style="padding-top:8px;">';
      str += '<div class="bar_body" style="width:30%"><div class="btn-t666">'+ doc.data().EmpZone +'</div></div>';
      if(doc.data().MTDTarget_1<doc.data().MTDIssue_1) {
        str += '<div class="progress2" style="float: left;width:50%;margin-top:6px;"><div class="bar4" style="width:'+ doc.data().Achieve_1 +'"></div></div>';
      } else {
        str += '<div class="progress2" style="float: left;width:50%;margin-top:6px;"><div class="bar3" style="width:'+ doc.data().Achieve_1 +'"></div></div>';
      }
      str += '<div class="bar_body">'+ doc.data().Achieve_1 +'</div>';
      str += '</div><div class="clr"></div></div>';
    });
    str += '<div class="btn-t2" onclick="CloseAll()" style="margin-top:15px;">ปิดหน้าต่างนี้</div>';
    str += '<div class="clr" style="height: 25px;"></div></center>';
    $("#DisplayProfile").html(str);  
    document.getElementById("id01").style.display = "block";

  })

}


function SuccessSeller() {
  var str = "";
  str += '<div class="btn-t33" style="margin-top:30px; background-color: #94a9b3;border: solid #94a9b3 1px;">เป้าหมาย % Success Seller<br> เดือนกรกฎาคม 2565</div>';
  dbBBDRH.orderBy('EmpRH','asc')
  .get().then((snapshot)=> {
    snapshot.forEach(doc=> {
      str += '<div class="bar_background"><div style="padding-top:8px;">';
      str += '<div class="bar_body">'+ doc.data().EmpRH +'</div>';
      str += '<div class="progress2" style="float: left;width:60%;margin-top:6px;"><div class="bar2" style="width:'+ doc.data().Success_2 +'"></div></div>';
      str += '<div class="bar_body1">'+ doc.data().Success_2 +'</div>';
      str += '</div><div class="clr"></div></div>';
    });
    $("#DisplayReport").html(str);  
    document.getElementById('DisplayWaitting').style.display='none';
    document.getElementById('DisplayReport').style.display='block';
  })
}


function ProductMix() {
  var str = "";
  str += '<div class="btn-t33" style="margin-top:30px; background-color: #94a9b3;border: solid #94a9b3 1px;">เป้าหมาย % Product Mix<br> เดือนกรกฎาคม 2565</div>';
  dbBBDRH.orderBy('EmpRH','asc')
  .get().then((snapshot)=> {
    snapshot.forEach(doc=> {
      str += '<div class="bar_background"><div style="padding-top:8px;">';
      str += '<div class="bar_body">'+ doc.data().EmpRH +'</div>';
      str += '<div class="progress2" style="float: left;width:60%;margin-top:6px;"><div class="bar2" style="width:'+ doc.data().Mix_3 +'"></div></div>';
      str += '<div class="bar_body1">'+ doc.data().Mix_3 +'</div>';
      str += '</div><div class="clr"></div></div>';
    });
    $("#DisplayReport").html(str);
    document.getElementById('DisplayWaitting').style.display='none';
    document.getElementById('DisplayReport').style.display='block';
  })
}


function OpenProfile(uid) {
  var str = "";
  dbBBDRH.where(firebase.firestore.FieldPath.documentId(), "==", uid)
  .get().then((snapshot)=> {
  snapshot.forEach(doc=> {
      const results = LinePictureArr.filter(obj => {return obj.EmpID === doc.data().EmpID;});
      //console.log(results[0].EmpName);
      str += '<center>';
      if(results[0].EmpPicture!=undefined) { 
        str += '<div><img src="'+results[0].EmpPicture+'" class="add-profile" style="margin:40px auto 0px auto;"></div>';
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
    document.getElementById("id01").style.display = "block";
  });
}

function CloseAll() {
  document.getElementById('id01').style.display='none';
  //document.getElementById('id02').style.display='none';
}


