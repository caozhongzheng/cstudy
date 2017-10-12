'use strict'

function formatDate() {

  var time = new Date()
  console.log('Date=',time)

  var timemill = new Date().getUTCDate()
  console.log('Date().getUTCDate=',timemill)

  var unixTimestamp = new Date( 1477386005*1000 ) ;
  console.log('Date(1477386005*1000)=',unixTimestamp);
  commonTime = unixTimestamp.toLocaleString();
  console.log('Date().toLocaleString',commonTime);

  console.log('----格式化日期字符串为Date类型--------------------');
  var CreatedAt="2017-08-21T18:36:33.072411+08:00";
  console.log('StringTime:',CreatedAt);
  var cca = new Date(Date.parse(CreatedAt));
  console.log('FormatTime:',cca);


  var unixTimestamp = new Date( 1477386005*1000 ) ;
  console.log('根据long转换为日期---',unixTimestamp);
  var commonTime = unixTimestamp.toLocaleString();
  console.log('日期的本地化---',commonTime);

  var aa = new Date();
  console.log('new Date()=',aa);
  var timemill = new Date().getTime()
  console.log('new Date().getTime()=',timemill);
}
formatDate();

function parseInteger() {
  console.log('----格式化字符串数字为整数类型--------------------');
  var j = parseInt("11");
  console.log(++j);
}
parseInteger();

function arrayFunc() {
  console.log('----数组Array的使用--------------------');
  var arrrcc={};
  // arrrcc.p |= [];
  console.log(arrrcc.p);
  if (arrrcc.p === undefined) {
    console.log("arrrcc.p is undefined");
    arrrcc.p = [];
  console.log(arrrcc.p);
};
  arrrcc.p.push('AAA')
console.log(arrrcc.p);  
  var arrq = []
  arrq[0] = "George"
  arrq[1] = "John"
  arrq[2] = "Thomas"

  console.log('Array1=',arrq)
  arrq.splice(3,1,"William")
  console.log('往第三个位置添加一个William')
  console.log('Array2=',arrq)

  arrq.unshift('Mike')
  console.log('往头部添加一个Mike')
  console.log('Array3=',arrq)

  arrq.splice(1,1)
  console.log('删除第2个位置')
  console.log('Array4=',arrq)

  arrq.push('Rose')
  console.log('末尾添加一个元素')
  console.log('Array5=',arrq)

  arrq = arrq.reverse()
  console.log('倒序')
  console.log('Array6=',arrq)
}
arrayFunc();


function arrayFor() {
  console.log('----遍历数组查找的使用--------------------');
  var xy = ['a','b','c']
  for (var i in xy){
      var has = false;
      if(xy[i]==='b') {
        console.log('got:',i,xy[i])
        break;
      }
      console.log('not got:',i,xy[i])
  }

  console.log('----检查空数组的下标使用--------------------');
  var abc = []
  console.log('abc.0=',abc[0])
  //#console.log('abc.0.x=',!abc[0].x)
  if (!!abc[0]) {
      console.log('abc.0.x=',!abc[0].x)
  }
}
arrayFor();

function strFunc() {
  console.log('----字符串startsWith--------------------');
  var idStr = "history.import.20170816-184115"
  var prefixImport= 'history.import.'
  console.log('String=',idStr,'startsWith1:',idStr.startsWith(prefixImport, 1)
          ,'startsWith2:',idStr.startsWith(prefixImport, 2)
          ,'startsWith0:',idStr.startsWith(prefixImport))

  console.log('----字符串split，reverse，join，length--------------------');
  var text = 'abc 123'
  var stra = text.split("").reverse().join("");
  console.log(text,' after reverse:',stra,' length is ',stra.length)
}
strFunc();


function tpof() {
  console.log('----判断类型是否是boolean--------------------');
  
  var tu = true;
  if (tu === true) {
    console.log('tu is true')
  }

  if (tu ) {
    console.log(typeof tu,'tu 22is true')
  }

}
tpof();

function jsonArr() {
  console.log('----json和数组之间--------------------');
  
  var x = {a:'1',b:'2'}
  console.log('查看json中不存在的元素',x.c)
  if (x.c === undefined) {
    x['c']=''
  }
  console.log('往json中添加不存在的元素后',x)

  var k = 2014;
  var l = "data"+k
  console.log('字符串data和数字2014连接==',l);

  var arr=[]
  var js={id:1,name:'admin'}
  js[l]=true;
  console.log('json内添加key:【js[l]=true】',js);
  
  delete js.id;
  console.log('json内删除key【delete js.id】:',js);

  var ay = []
  ay.push(js);
  console.log('数组内添加json:',ay);

  var ss = {a: 'a',b:11}
  ss['x']='xxx'
  ay.push(ss);
  console.log('数组内添加json:',ay);

  arr.push('a')
  arr.push('1')
  arr.push('c')
  for(var i in arr)
  {
    var item = arr[i]
    console.log(i,'遍历数组=',item);
  }

}
jsonArr();

function testJSONParse() {
  var res = '[{"id":3,"createTime":"2017-09-07T05:55:03.80407Z","updateTime":"2017-09-07T05:55:03.80407Z","name":"peer1","alias":"节点1","ip":"192.168.0.14","sshPort":22,"sshUser":"peersafe","sshPwd":"dev1@peersafe","imageId":1,"dockerPorts":"","dockerCmd":"","networkId":4,"state":0,"type":1,"nodeCfg":{"Channels":"","Chaincodes":""}}]';
  // {"data":[{"id":3,"createTime":"2017-09-07T05:55:03.80407Z","updateTime":"2017-09-07T05:55:03.80407Z","name":"peer1","alias":"节点1","ip":"192.168.0.14","sshPort":22,"sshUser":"peersafe","sshPwd":"dev1@peersafe","imageId":1,"dockerPorts":"","dockerCmd":"","dockerCfg":"{\"orgName\":\"dev\"}","networkId":4,"state":0,"type":1,"nodeCfg":{"Channels":"","Chaincodes":""}}],"status":200,"config":{"method":"GET","transformRequest":[null],"transformResponse":[null],"url":"http://192.168.0.185:8888/v1/nodes","params":{"networkId":4,"nodeType":1},"headers":{"Accept":"application/json, text/plain, */*","user":"zhongzheng","token":"f7f43831239a968fc33fa681e15ff11e"}},"statusText":"OK"}';
  
  console.log('json string=\n',res);

  var resjson = JSON.parse(res);
  console.log(typeof resjson,'------json obj=\n',resjson);

  // var resjson2 = JSON.parse(resjson);
  // console.log('------json obj=\n',resjson2);
}
testJSONParse();

function regIp(ip) {
    if (ip == '0.0.0.0' || ip == '255.255.255.255' ||
        !ip.match(/\b(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\b/)) {
        console.log('ip 格式不正确', ip);
    } else {
        console.log('ip 格式正确', ip);
    }
}

regIp('0.0.0.0');
regIp('1.2.3.4');
regIp('255.255.255.255');
regIp('1234.1.1.1');
regIp('1.1');
regIp('1.a');
regIp('255.255.255.254');
regIp('192. 255.255.254');
regIp('192.168.0.230');
function regularIp(ip) {
  if (ip == '0.0.0.0' || ip == '255.255.255.255' ||
    !ip.match(/\b(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\b/)) {
    console.log('ip 格式不正确', ip);
    return false;
  } else {
    console.log('ip 格式正确', ip);
    return true;
  }
}
if (!regularIp('1. 2.3.4')) {
  console.log('ERR');
} else {
  console.log('OK');
}

function revertArr() {
  var arr=[3,7,2,6,1]
  console.log(arr.reverse());
  var a=[1,2,4,3]
  var tail = a.length - 1;
  console.log(a);
  console.log(tail);

  for (var i = 0; i <= tail; i++) {
      var channal = a.splice(tail,1)[0];
      console.log(channal,typeof channal)
      a.splice(i,0,channal);
  }
  console.log(a);

}
revertArr();
function isLeapYr(yr) {

    //判断闰年
    return (yr % 4 === 0 && yr % 100 !== 0) || (yr % 100 === 0 && yr % 400 === 0);

}

function count(y, m, d) {

    var mdays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    var mSum = 0;
    var sum = 0;

    //如果是闰年的话，那么2月份就应该有29天
    isLeapYr(y) ? mdays[1] = 29 : mdays[1];

    //计算该月份之前的总天数，比如m=3，那么就计算1和2月的总天数
    for (var i = 0; i < m - 1; i++) {
        mSum += mdays[i];
    }

    //加上当月天数
    sum = mSum + d;

    return sum;
}
var dayOfYear = count(2016,7,10);
console.log('20160710是一年的第几天：',dayOfYear);
