var dateString = new Date().toLocaleString('en-US', { timeZone: 'Asia/Jakarta' });
var xClickMenu = "";
var aClickMenu = "";


$(document).ready(function () {
  if(sessionStorage.getItem("EmpID_RSOC")==null) { location.href = "index.html"; }
  aClickMenu = getParameterByName('gid');
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
  dbRSOCMember = firebase.firestore().collection("RSOC_Member");
  SelectMeunu();
  //CheckProfile();
}

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}


function SelectMeunu() {
  if(aClickMenu!="") {
    xClickMenu = aClickMenu;
    //document.getElementById(aClickMenu).value = aClickMenu;
    //$("#"+aClickMenu).val();  
    document.getElementById("ClickMenu").value = aClickMenu;
  } else {
    xClickMenu = document.getElementById("ClickMenu").value;
  }
  aClickMenu = "";
  loadData();
}


function loadData() {
  var i = 0;
  var str = "";
  str += '<table class="table" style="width:95%; margin:20px auto;"><tbody>';
  dbRSOCMember.where('EmpTeam','==', xClickMenu)
  .orderBy('EmpPosition','asc')
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
      str += '<td class="td-padding" style="width:88%;"><font color="#0056ff"><b>'+doc.data().EmpName+'</b></font>';
      str += '<font color="#f68b1f"> ('+doc.data().ShortName+')</font><br>'+doc.data().EmpRH+'<br>โทร. <b>'+doc.data().EmpPhone+'</b></td>';
      //str += '<td class="td-right" style="width:24%;text-align: center;"><div class="btn-t1" style="margin-top:0px;">View</div></td>';
      str += '</tr>';
      i++;
    }); 
    str += '</tbody></table>';
    $("#DisplayRSOCTeam").html(str);  
    $("#DisplayRSOCSum").html("จำนวน = "+ i +" คน");  
    //alert(i);
  });

}


function OpenProfile(uid) {
  var str = "";
  dbRSOCMember.where(firebase.firestore.FieldPath.documentId(), "==", uid)
  .get().then((snapshot)=> {
  snapshot.forEach(doc=> {
      if(doc.data().LinePicture!="") { 
        str += '<center><div><img src="'+doc.data().LinePicture+'" class="add-profile" style="margin:10px auto 20px auto;"></div>';
        str += '<div class="NameLine">'+doc.data().LineName+'</div></center>';
      } else {
        if(doc.data().EmpSex=="M") {
          str += '<div style="text-align:center;"><img src="./img/m.png" class="add-profile"></div>';
        } else {
          str += '<div style="text-align:center;"><img src="./img/f.png" class="add-profile"></div>';
        }
      }
      str += '<div class="text-1">'+doc.data().EmpName+'<font color="#f68b1f"> ('+doc.data().ShortName+')</font></div>';
      str += '<div class="text-2">'+doc.data().EmpZone+'<br>'+doc.data().EmpPosition+'<br>'+doc.data().EmpRH+'<br>'+doc.data().EmpPhone+'</div>';
      if(doc.data().LoadImg!="") {
        str += '<div style="margin-top:13px;text-align:center;"><img src="'+doc.data().LoadImg+'" style="width:100%; border-radius: 25px;"><div class="btn-t33" style="margin-top:10px;background:#69b8f1;border: solid #fff 1px;">'+doc.data().ShortName+'</div></div>';
      }
      //str += '</div>';
    });
    $("#DisplayProfile").html(str);  
    document.getElementById("id01").style.display = "block";
  });
}


function ClickID(x,id) {
  location.href = "viewpage.html?gid="+id+"";
}



function CloseAll() {
  document.getElementById('id01').style.display='none';
}


function NewDate() {
  var today = new Date();
  var day = today.getDate() + "";
  var month = (today.getMonth() + 1) + "";
  var year = today.getFullYear() + "";
  var hour = today.getHours() + "";
  var minutes = today.getMinutes() + "";
  var seconds = today.getSeconds() + "";
  var ampm = hour >= 12 ? 'PM' : 'AM';
  day = checkZero(day);
  month = checkZero(month);
  year = checkZero(year);
  hour = checkZero(hour);
  minutes = checkZero(minutes);
  seconds = checkZero(seconds);
  dateString = day + "/" + month + "/" + year + " " + hour + ":" + minutes + ":" + seconds +" "+ ampm;
}


function ConvrtDate(str) {
  var date = new Date(str),
  mnth = ("0" + (date.getMonth() + 1)).slice(-2),
  day = ("0" + date.getDate()).slice(-2);
  return [day, mnth, date.getFullYear()+543].join("/");
}


function checkZero(data){
  if(data.length == 1){
    data = "0" + data;
  }
  return data;
}

