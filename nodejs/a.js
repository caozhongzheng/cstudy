'use strict'

function formatDate() {
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

  arrq = arrq.reverse()
  console.log('倒序')
  console.log('Array4=',arrq)
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

 

 
