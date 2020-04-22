// Our labels along the x-axis
var Hours = [1200,1300,1400,1500,1600,1700,1800,1900,2000,2100,2200,2300];
// For drawing the lines
var MON = [86,114,106,106,107,111,133,221,783,2478,1000,300];
var TUE = [282,350,411,502,635,809,947,1402,3700,5267,1100,400];
var WED = [168,170,178,190,203,276,408,547,675,734,550,200];
var THURS = [40,20,10,16,24,38,74,167,508,784,555,225];
var FRI = [6,3,2,2,7,26,82,172,312,433,4000,3500];
var SAT = [654,344,432,254,755,264,824,1724,3120,3800,4500,4200];
var SUN = [622,322,222,222,722,262,822,1722,3122,3500,3000,2200];
var impression={
  "Sheet1": [
    {
      "Impressiontype": "Repeat impression",
      "impressioncount": "1000"
    },
    {
      "Impressiontype": "Unique Impression",
      "impressioncount": "200"
    }
  ]
}
var jsonFromAI= [
  {
    "time": "0:01:00",
    "pedestrain": 3,
    "2wheel": 15,
    "4wheel": 13,
    "heavy": 2,
    "total vehicle": 30,
    "total people": 84
  },
  {
    "time": "0:02:00",
    "pedestrain": 3,
    "2wheel": 23,
    "4wheel": 5,
    "heavy": 1,
    "total vehicle": 29,
    "total people": 70
  },
  {
    "time": "0:03:00",
    "pedestrain": 0,
    "2wheel": 17,
    "4wheel": 15,
    "heavy": 3,
    "total vehicle": 35,
    "total people": 97
  },
  {
    "time": "0:04:00",
    "pedestrain": 4,
    "2wheel": 7,
    "4wheel": 5,
    "heavy": 3,
    "total vehicle": 15,
    "total people": 51
  },
  {
    "time": "0:05:00",
    "pedestrain": 1,
    "2wheel": 21,
    "4wheel": 11,
    "heavy": 6,
    "total vehicle": 38,
    "total people": 112
  },
  {
    "time": "0:06:00",
    "pedestrain": 1,
    "2wheel": 21,
    "4wheel": 9,
    "heavy": 5,
    "total vehicle": 35,
    "total people": 100
  },
  {
    "time": "0:07:00",
    "pedestrain": 9,
    "2wheel": 9,
    "4wheel": 10,
    "heavy": 4,
    "total vehicle": 23,
    "total people": 81
  },
  {
    "time": "0:08:00",
    "pedestrain": 2,
    "2wheel": 23,
    "4wheel": 10,
    "heavy": 0,
    "total vehicle": 33,
    "total people": 78
  },
  {
    "time": "0:09:00",
    "pedestrain": 0,
    "2wheel": 14,
    "4wheel": 11,
    "heavy": 0,
    "total vehicle": 25,
    "total people": 61
  },
  {
    "time": "0:10:00",
    "pedestrain": 1,
    "2wheel": 17,
    "4wheel": 7,
    "heavy": 6,
    "total vehicle": 30,
    "total people": 92
  },
  {
    "time": "0:11:00",
    "pedestrain": 7,
    "2wheel": 14,
    "4wheel": 5,
    "heavy": 3,
    "total vehicle": 22,
    "total people": 68
  },
  {
    "time": "0:12:00",
    "pedestrain": 5,
    "2wheel": 17,
    "4wheel": 12,
    "heavy": 1,
    "total vehicle": 30,
    "total people": 81
  },
  {
    "time": "0:13:00",
    "pedestrain": 7,
    "2wheel": 8,
    "4wheel": 12,
    "heavy": 6,
    "total vehicle": 26,
    "total people": 95
  },
  {
    "time": "0:14:00",
    "pedestrain": 8,
    "2wheel": 21,
    "4wheel": 7,
    "heavy": 3,
    "total vehicle": 31,
    "total people": 89
  },
  {
    "time": "0:15:00",
    "pedestrain": 8,
    "2wheel": 25,
    "4wheel": 15,
    "heavy": 3,
    "total vehicle": 43,
    "total people": 121
  },
  {
    "time": "0:16:00",
    "pedestrain": 7,
    "2wheel": 22,
    "4wheel": 6,
    "heavy": 4,
    "total vehicle": 32,
    "total people": 93
  },
  {
    "time": "0:17:00",
    "pedestrain": 3,
    "2wheel": 10,
    "4wheel": 15,
    "heavy": 0,
    "total vehicle": 25,
    "total people": 68
  },
  {
    "time": "0:18:00",
    "pedestrain": 2,
    "2wheel": 22,
    "4wheel": 11,
    "heavy": 6,
    "total vehicle": 39,
    "total people": 115
  },
  {
    "time": "0:19:00",
    "pedestrain": 5,
    "2wheel": 22,
    "4wheel": 10,
    "heavy": 3,
    "total vehicle": 35,
    "total people": 97
  },
  {
    "time": "0:20:00",
    "pedestrain": 7,
    "2wheel": 10,
    "4wheel": 10,
    "heavy": 5,
    "total vehicle": 25,
    "total people": 87
  },
  {
    "time": "0:21:00",
    "pedestrain": 1,
    "2wheel": 15,
    "4wheel": 12,
    "heavy": 5,
    "total vehicle": 32,
    "total people": 97
  },
  {
    "time": "0:22:00",
    "pedestrain": 6,
    "2wheel": 8,
    "4wheel": 14,
    "heavy": 1,
    "total vehicle": 23,
    "total people": 70
  },
  {
    "time": "0:23:00",
    "pedestrain": 8,
    "2wheel": 10,
    "4wheel": 15,
    "heavy": 2,
    "total vehicle": 27,
    "total people": 85
  },
  {
    "time": "0:24:00",
    "pedestrain": 4,
    "2wheel": 11,
    "4wheel": 15,
    "heavy": 5,
    "total vehicle": 31,
    "total people": 101
  },
  {
    "time": "0:25:00",
    "pedestrain": 3,
    "2wheel": 25,
    "4wheel": 5,
    "heavy": 2,
    "total vehicle": 32,
    "total people": 80
  },
  {
    "time": "0:26:00",
    "pedestrain": 8,
    "2wheel": 10,
    "4wheel": 14,
    "heavy": 3,
    "total vehicle": 27,
    "total people": 88
  },
  {
    "time": "0:27:00",
    "pedestrain": 0,
    "2wheel": 8,
    "4wheel": 15,
    "heavy": 3,
    "total vehicle": 26,
    "total people": 79
  },
  {
    "time": "0:28:00",
    "pedestrain": 0,
    "2wheel": 20,
    "4wheel": 6,
    "heavy": 3,
    "total vehicle": 29,
    "total people": 76
  },
  {
    "time": "0:29:00",
    "pedestrain": 7,
    "2wheel": 12,
    "4wheel": 15,
    "heavy": 0,
    "total vehicle": 27,
    "total people": 76
  },
  {
    "time": "0:30:00",
    "pedestrain": 6,
    "2wheel": 22,
    "4wheel": 7,
    "heavy": 4,
    "total vehicle": 33,
    "total people": 95
  },
  {
    "time": "0:31:00",
    "pedestrain": 2,
    "2wheel": 17,
    "4wheel": 15,
    "heavy": 3,
    "total vehicle": 35,
    "total people": 99
  },
  {
    "time": "0:32:00",
    "pedestrain": 4,
    "2wheel": 20,
    "4wheel": 8,
    "heavy": 2,
    "total vehicle": 30,
    "total people": 80
  },
  {
    "time": "0:33:00",
    "pedestrain": 0,
    "2wheel": 11,
    "4wheel": 10,
    "heavy": 6,
    "total vehicle": 27,
    "total people": 88
  },
  {
    "time": "0:34:00",
    "pedestrain": 0,
    "2wheel": 21,
    "4wheel": 8,
    "heavy": 1,
    "total vehicle": 30,
    "total people": 72
  },
  {
    "time": "0:35:00",
    "pedestrain": 3,
    "2wheel": 25,
    "4wheel": 13,
    "heavy": 1,
    "total vehicle": 39,
    "total people": 98
  },
  {
    "time": "0:36:00",
    "pedestrain": 1,
    "2wheel": 22,
    "4wheel": 8,
    "heavy": 3,
    "total vehicle": 33,
    "total people": 87
  },
  {
    "time": "0:37:00",
    "pedestrain": 1,
    "2wheel": 16,
    "4wheel": 8,
    "heavy": 3,
    "total vehicle": 27,
    "total people": 75
  },
  {
    "time": "0:38:00",
    "pedestrain": 4,
    "2wheel": 9,
    "4wheel": 13,
    "heavy": 4,
    "total vehicle": 26,
    "total people": 85
  },
  {
    "time": "0:39:00",
    "pedestrain": 3,
    "2wheel": 17,
    "4wheel": 11,
    "heavy": 5,
    "total vehicle": 33,
    "total people": 100
  },
  {
    "time": "0:40:00",
    "pedestrain": 1,
    "2wheel": 15,
    "4wheel": 9,
    "heavy": 0,
    "total vehicle": 24,
    "total people": 58
  },
  {
    "time": "0:41:00",
    "pedestrain": 3,
    "2wheel": 16,
    "4wheel": 14,
    "heavy": 0,
    "total vehicle": 30,
    "total people": 77
  },
  {
    "time": "0:42:00",
    "pedestrain": 3,
    "2wheel": 11,
    "4wheel": 9,
    "heavy": 1,
    "total vehicle": 21,
    "total people": 58
  },
  {
    "time": "0:43:00",
    "pedestrain": 2,
    "2wheel": 24,
    "4wheel": 12,
    "heavy": 5,
    "total vehicle": 41,
    "total people": 116
  },
  {
    "time": "0:44:00",
    "pedestrain": 3,
    "2wheel": 19,
    "4wheel": 8,
    "heavy": 1,
    "total vehicle": 28,
    "total people": 71
  },
  {
    "time": "0:45:00",
    "pedestrain": 1,
    "2wheel": 12,
    "4wheel": 6,
    "heavy": 5,
    "total vehicle": 23,
    "total people": 73
  },
  {
    "time": "0:46:00",
    "pedestrain": 0,
    "2wheel": 13,
    "4wheel": 10,
    "heavy": 5,
    "total vehicle": 28,
    "total people": 86
  },
  {
    "time": "0:47:00",
    "pedestrain": 0,
    "2wheel": 22,
    "4wheel": 10,
    "heavy": 0,
    "total vehicle": 32,
    "total people": 74
  },
  {
    "time": "0:48:00",
    "pedestrain": 8,
    "2wheel": 18,
    "4wheel": 13,
    "heavy": 3,
    "total vehicle": 34,
    "total people": 101
  },
  {
    "time": "0:49:00",
    "pedestrain": 0,
    "2wheel": 15,
    "4wheel": 10,
    "heavy": 0,
    "total vehicle": 25,
    "total people": 60
  },
  {
    "time": "0:50:00",
    "pedestrain": 4,
    "2wheel": 13,
    "4wheel": 9,
    "heavy": 7,
    "total vehicle": 29,
    "total people": 99
  },
  {
    "time": "0:51:00",
    "pedestrain": 0,
    "2wheel": 17,
    "4wheel": 15,
    "heavy": 4,
    "total vehicle": 36,
    "total people": 103
  },
  {
    "time": "0:52:00",
    "pedestrain": 9,
    "2wheel": 17,
    "4wheel": 13,
    "heavy": 6,
    "total vehicle": 36,
    "total people": 118
  },
  {
    "time": "0:53:00",
    "pedestrain": 0,
    "2wheel": 13,
    "4wheel": 7,
    "heavy": 1,
    "total vehicle": 21,
    "total people": 53
  },
  {
    "time": "0:54:00",
    "pedestrain": 6,
    "2wheel": 14,
    "4wheel": 13,
    "heavy": 1,
    "total vehicle": 28,
    "total people": 79
  },
  {
    "time": "0:55:00",
    "pedestrain": 1,
    "2wheel": 14,
    "4wheel": 11,
    "heavy": 3,
    "total vehicle": 28,
    "total people": 80
  },
  {
    "time": "0:56:00",
    "pedestrain": 3,
    "2wheel": 23,
    "4wheel": 11,
    "heavy": 0,
    "total vehicle": 34,
    "total people": 82
  },
  {
    "time": "0:57:00",
    "pedestrain": 6,
    "2wheel": 25,
    "4wheel": 14,
    "heavy": 3,
    "total vehicle": 42,
    "total people": 116
  },
  {
    "time": "0:58:00",
    "pedestrain": 0,
    "2wheel": 8,
    "4wheel": 12,
    "heavy": 4,
    "total vehicle": 24,
    "total people": 76
  },
  {
    "time": "0:59:00",
    "pedestrain": 8,
    "2wheel": 14,
    "4wheel": 8,
    "heavy": 2,
    "total vehicle": 24,
    "total people": 72
  },
  {
    "time": "1:00:00",
    "pedestrain": 4,
    "2wheel": 11,
    "4wheel": 15,
    "heavy": 1,
    "total vehicle": 27,
    "total people": 77
  },
  {
    "time": "1:01:00",
    "pedestrain": 3,
    "2wheel": 24,
    "4wheel": 6,
    "heavy": 1,
    "total vehicle": 31,
    "total people": 75
  },
  {
    "time": "1:02:00",
    "pedestrain": 5,
    "2wheel": 9,
    "4wheel": 8,
    "heavy": 0,
    "total vehicle": 17,
    "total people": 47
  },
  {
    "time": "1:03:00",
    "pedestrain": 1,
    "2wheel": 11,
    "4wheel": 10,
    "heavy": 1,
    "total vehicle": 22,
    "total people": 59
  },
  {
    "time": "1:04:00",
    "pedestrain": 5,
    "2wheel": 7,
    "4wheel": 12,
    "heavy": 7,
    "total vehicle": 26,
    "total people": 97
  },
  {
    "time": "1:05:00",
    "pedestrain": 8,
    "2wheel": 15,
    "4wheel": 12,
    "heavy": 0,
    "total vehicle": 27,
    "total people": 74
  },
  {
    "time": "1:06:00",
    "pedestrain": 6,
    "2wheel": 9,
    "4wheel": 7,
    "heavy": 1,
    "total vehicle": 17,
    "total people": 51
  },
  {
    "time": "1:07:00",
    "pedestrain": 5,
    "2wheel": 16,
    "4wheel": 6,
    "heavy": 6,
    "total vehicle": 28,
    "total people": 91
  },
  {
    "time": "1:08:00",
    "pedestrain": 5,
    "2wheel": 24,
    "4wheel": 8,
    "heavy": 3,
    "total vehicle": 35,
    "total people": 95
  },
  {
    "time": "1:09:00",
    "pedestrain": 9,
    "2wheel": 21,
    "4wheel": 14,
    "heavy": 7,
    "total vehicle": 42,
    "total people": 135
  },
  {
    "time": "1:10:00",
    "pedestrain": 7,
    "2wheel": 13,
    "4wheel": 15,
    "heavy": 2,
    "total vehicle": 30,
    "total people": 90
  },
  {
    "time": "1:11:00",
    "pedestrain": 4,
    "2wheel": 23,
    "4wheel": 9,
    "heavy": 1,
    "total vehicle": 33,
    "total people": 83
  },
  {
    "time": "1:12:00",
    "pedestrain": 5,
    "2wheel": 11,
    "4wheel": 5,
    "heavy": 1,
    "total vehicle": 17,
    "total people": 48
  },
  {
    "time": "1:13:00",
    "pedestrain": 0,
    "2wheel": 7,
    "4wheel": 10,
    "heavy": 4,
    "total vehicle": 21,
    "total people": 68
  },
  {
    "time": "1:14:00",
    "pedestrain": 7,
    "2wheel": 18,
    "4wheel": 14,
    "heavy": 7,
    "total vehicle": 39,
    "total people": 127
  },
  {
    "time": "1:15:00",
    "pedestrain": 4,
    "2wheel": 25,
    "4wheel": 12,
    "heavy": 7,
    "total vehicle": 44,
    "total people": 132
  },
  {
    "time": "1:16:00",
    "pedestrain": 2,
    "2wheel": 12,
    "4wheel": 6,
    "heavy": 2,
    "total vehicle": 20,
    "total people": 56
  },
  {
    "time": "1:17:00",
    "pedestrain": 8,
    "2wheel": 18,
    "4wheel": 13,
    "heavy": 1,
    "total vehicle": 32,
    "total people": 89
  },
  {
    "time": "1:18:00",
    "pedestrain": 1,
    "2wheel": 16,
    "4wheel": 5,
    "heavy": 1,
    "total vehicle": 22,
    "total people": 54
  },
  {
    "time": "1:19:00",
    "pedestrain": 6,
    "2wheel": 7,
    "4wheel": 8,
    "heavy": 3,
    "total vehicle": 18,
    "total people": 62
  },
  {
    "time": "1:20:00",
    "pedestrain": 3,
    "2wheel": 22,
    "4wheel": 8,
    "heavy": 7,
    "total vehicle": 37,
    "total people": 113
  },
  {
    "time": "1:21:00",
    "pedestrain": 1,
    "2wheel": 10,
    "4wheel": 6,
    "heavy": 7,
    "total vehicle": 23,
    "total people": 81
  },
  {
    "time": "1:22:00",
    "pedestrain": 0,
    "2wheel": 7,
    "4wheel": 11,
    "heavy": 2,
    "total vehicle": 20,
    "total people": 59
  },
  {
    "time": "1:23:00",
    "pedestrain": 4,
    "2wheel": 19,
    "4wheel": 12,
    "heavy": 6,
    "total vehicle": 37,
    "total people": 114
  },
  {
    "time": "1:24:00",
    "pedestrain": 0,
    "2wheel": 12,
    "4wheel": 15,
    "heavy": 0,
    "total vehicle": 27,
    "total people": 69
  },
  {
    "time": "1:25:00",
    "pedestrain": 8,
    "2wheel": 13,
    "4wheel": 10,
    "heavy": 4,
    "total vehicle": 27,
    "total people": 88
  },
  {
    "time": "1:26:00",
    "pedestrain": 7,
    "2wheel": 10,
    "4wheel": 13,
    "heavy": 0,
    "total vehicle": 23,
    "total people": 66
  },
  {
    "time": "1:27:00",
    "pedestrain": 0,
    "2wheel": 23,
    "4wheel": 11,
    "heavy": 5,
    "total vehicle": 39,
    "total people": 109
  },
  {
    "time": "1:28:00",
    "pedestrain": 1,
    "2wheel": 9,
    "4wheel": 7,
    "heavy": 2,
    "total vehicle": 18,
    "total people": 52
  },
  {
    "time": "1:29:00",
    "pedestrain": 0,
    "2wheel": 17,
    "4wheel": 11,
    "heavy": 1,
    "total vehicle": 29,
    "total people": 73
  },
  {
    "time": "1:30:00",
    "pedestrain": 4,
    "2wheel": 20,
    "4wheel": 5,
    "heavy": 4,
    "total vehicle": 29,
    "total people": 83
  },
  {
    "time": "1:31:00",
    "pedestrain": 3,
    "2wheel": 21,
    "4wheel": 14,
    "heavy": 5,
    "total vehicle": 40,
    "total people": 117
  }
]


/*var ExcelToJSON = function() {

  this.parseExcel = function(file) {
    var reader = new FileReader();

    reader.onload = function(e) {
      //var data = e.target.result;
      var data = 'Book1.xlsx';
      var workbook = XLSX.read(data, {
        type: 'binary'
      });

      workbook.SheetNames.forEach(function(sheetName) {
        // Here is your object
        var XL_row_object = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[Sheet1]);
        var json_object = JSON.stringify(XL_row_object);
        console.log(json_object);

      })

    };

    reader.onerror = function(ex) {
      console.log(ex);
    };

    reader.readAsBinaryString(file);
  };
};

ExcelToJSON().parseExcel();*/
/*function readFromExcel()
{
  var excel = new ActiveXObject("Excel.Application");
  var excel_file = excel.Workbooks.Open("C:\\Users\\ravi\\WebstormProjects\\untitled2\\js\\Book1.xls");
  var excel_sheet = excel_file.Worksheets("Sheet1");
  return excel_file;
}
var y= readFromExcel();*/




  //var data = e.target.result;
/*
  var data = 'Book1.xlsx';
  var workbook = XLSX.read(data, {
    type: 'binary'
  });

  workbook.SheetNames.forEach(function(sheetName) {
    // Here is your object
    var XL_row_object = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[Sheet1]);
    var json_object = JSON.stringify(XL_row_object);
    console.log(json_object);



})
*/
let x;
let i;

var jsonData = jsonFromAI;

var timeArray = jsonData.map (function(item ){
  return item.time;
});
var pedestrianArray = jsonData.map (function(item){
  return item.pedestrain;
});
var twoWheel = jsonData.map (function(item){
  return item['2wheel'];
});
var fourWheel = jsonData.map (function(item){
  return item['4wheel'];
});
var heavy = jsonData.map (function(item){
  return item.heavy   ;
});
var totalVehicle = jsonData.map (function(item){
  return item['total vehicle']   ;
});
var totalPeople = jsonData.map (function(item){
  return item['total people']   ;
});


jsonData.forEach(function(){


})

var short =Math.floor(jsonFromAI.length/6)-1;


var jsonDataShort = jsonData.filter (function(item,index){
 if(index%short===0) return item.time;
});

var timeArrayShort = jsonDataShort.map (function(item){
  return item.time;
});

var twoWheelShort = jsonDataShort.map (function(item){
  return item['2wheel'];
});
var fourWheelShort = jsonDataShort.map (function(item){
  return item['4wheel'];
});
var heavyShort = jsonDataShort.map (function(item){
  return item.heavy   ;
});
var totalVehicleShort = jsonDataShort.map (function(item){
  return item['total vehicle']   ;
});
var totalPeopleShort = jsonDataShort.map (function(item){
  return item['total people']   ;
});



var pedestrianArrayChart = convertDataToDisplayOnChart(jsonData,pedestrianArray);
var twoWheelerArrayChart = convertDataToDisplayOnChart(jsonData,twoWheel);
var fourWheelerArrayChart = convertDataToDisplayOnChart(jsonData,fourWheel);
var heavyArrayChart = convertDataToDisplayOnChart(jsonData,heavy);
var totalPeopleArrayChart = convertDataToDisplayOnChart(jsonData,totalPeople);
var totalVehicleArrayChart = convertDataToDisplayOnChart(jsonData,totalVehicle);
function convertDataToDisplayOnChart(jsonData, individualArray) {
  var total=0;
  var index1=0;
  var chartArray = jsonData.map (function(item,index){
    /*if(index%short===0 && index!==0) {
      var pedestArray = pedestrianArray.slice(index1, index + 1)
      total = 0;
      index1 = index;
      total =  pedestArray.reduce(function(total,item){
        return total+item;
      });
      return total;
    }*/


    if(index%short===0) {
      total=0;
      for (i=index1;i<=index;i++) {
        total += individualArray[i];
      }
      index1=index+1;
      return total;
    }
  });

  chartArray=chartArray.filter(function (item) {
    return item!==undefined;

  });
  return chartArray;
}




var totalpedestrianArray = pedestrianArray.reduce (function(total, item){
  return total + item;
});
var totaltwoWheel = twoWheel.reduce (function(total, item){
  return total + item;
});
var totalfourWheel = fourWheel.reduce (function(total, item){
  return total + item;
});
var totalheavy = heavy.reduce (function(total, item){
  return total + item;
});
var dailytotalVehicle = totalVehicle.reduce (function(total, item){
  return total + item;
});
var dailytotalPeople = totalPeople.reduce (function(total, item){
  return total + item;
});













var ctx = document.getElementById("myChart");

var myChart = new Chart(ctx, {
  type: 'line',
  /*options: {
    scales: {
      yAxes: [{
        ticks: {

          beginAtZero: true,
          stepSize: 5 // this worked as expected
        }
      }],
      xAxes: [{
        ticks: {
          autoSkip: true,
          maxTicksLimit: 6
        }
      }]
    }
  },*/
  options: {
    title: {
      display: true,
      text: 'Impressions'
    }},
  data: {
    labels: timeArrayShort,

    datasets: [

     /* {
        data: totalPeopleArrayChart ,
        label: "Total People",
        lineTension: 0,
        borderColor: "#3e95cd",
        fill: false
      },
     {
        data: totalVehicleArrayChart,
        label: "Total Vehicles",
        lineTension: 0,
        borderColor: "#8e5ea2",
        fill: false
      },*/
      {
        data: twoWheelerArrayChart,
        label: "Two Wheelers",
        lineTension: 0,
        borderColor: "#3cba9f",
        fill: false
      },
      {
        data: fourWheelerArrayChart,
        label: "Four Wheelers",
        lineTension: 0,
        borderColor: "#c45850",
        fill: false
      },
      {
        data: pedestrianArrayChart,
        label: "Pedestrian",
        lineTension: 0,
        borderColor: "#2E8B59",
        fill: false

      },
       {
         data: heavyArrayChart,
         label: "Heavy Vehicles",
         lineTension: 0,
         borderColor: "#411744",
         fill: false

       },
      /* {
         data: SUN,
         label: "Sun",
         lineTension: 0,
         borderColor: "#411744",
         fill: false

       }*/
    ]
  },


});
/*var c1 = document.getElementById("myPieChart");
var myDoughnutChart = new Chart(c1, {
  type: 'doughnut',
   datasets: [{
  data: [impression.Sheet1[0].impressioncount,
    impression.Sheet1[1].impressioncount]
}],

  // These labels appear in the legend and in the tooltips when hovering different arcs
  labels: [
  impression.Sheet1[0].Impressiontype,
  impression.Sheet1[1].Impressiontype
],
  /!*options: options*!/
});*/
var str = "10 lakhs";
var dailytotal=dailytotalPeople.toString();
var totalBudget =  str.fontsize(6);
var totalImpression = dailytotal.fontsize(6)
var costPerImpression =  (Math.round(100000/dailytotalPeople)).toString();
var costPerImp = costPerImpression.fontsize(6)
document.getElementById("total-budget").insertAdjacentHTML("beforeend", totalBudget);
document.getElementById("total-impressions").insertAdjacentHTML("beforeend", totalImpression);
document.getElementById("cost-per-impression").insertAdjacentHTML("beforeend", costPerImp);



new Chart(document.getElementById("myPieChart"), {
  type: 'doughnut',
  data: {
    labels: [ impression.Sheet1[0].Impressiontype,
      impression.Sheet1[1].Impressiontype],
    datasets: [
      {
        label: "Impressions",
        backgroundColor: ["#3e95cd", "#8e5ea2",],
        data: [impression.Sheet1[0].impressioncount,
          impression.Sheet1[1].impressioncount]
      }
    ]
  },
  options: {
    title: {
      display: true,
      text: 'Calculated Impressions'
    }
  }
});
new Chart(document.getElementById("pie-chart"), {
  type: 'pie',
  data: {
    labels: ["Passenger", "Pedestrian"],
    datasets: [{
      label: "Viewers",
      backgroundColor: ["#3e95cd","#3c999f"],
      data: [dailytotalPeople,totalpedestrianArray]
    }]
  },
  options: {
    title: {
      display: true,
      text: 'Viewers'
    }
  }
});
/*Chart.defaults.global.legend.display = false;*/
var myDoughnutChart=new Chart(document.getElementById("doughnut-chart"), {
  type: 'doughnut',
  data: {
    labels: ["2-Wheeler", "4-wheelers"],
    datasets: [
      {
        label: "Vehicle segregation",
        backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f"],
        data: [totaltwoWheel,totalfourWheel+totalheavy]
      }
    ]
  },
  options: {
    title: {
      display: true,
      text: 'Vehicle Segregation'

    },
    legends: {
      labels: {
        display:false,
      },
      display : false,
    }
  }
});

new Chart(document.getElementById("bar-chart-horizontal"), {
  type: 'horizontalBar',
  data: {
    labels: ["2 Wheeler", "4 wheelers", "Heavy","Pedestrian"],
    datasets: [
      {
        label: "Vehicle segregation",
        backgroundColor: ["#3e95cd", "#3e95cd","#3e95cd","#3e95cd","#3e95cd"],
        data: [totaltwoWheel,totalfourWheel,totalheavy,totalpedestrianArray]
      }
    ]
  },
  options: {
    legend: { display: false },
    title: {
      display: true,
      text: 'Compairison graph'
    }
  }
});
