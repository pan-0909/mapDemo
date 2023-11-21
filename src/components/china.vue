<template>
  <div class="panmap" ref="panmap" id="panmap"  style="height: 1000px;width: 1000px;"></div>
</template>
 
<script>
import pan from "../assets/china.json";
import * as echarts from 'echarts'
export default {
  data() {
    return {
      datasss : [
      { name: "天津市", value: 1000 },
        { name: "北京市", value: 3000 },
        { name: "河北省", value: 900 },
        { name: "内蒙古自治区", value: 500 },
        { name: "广东省", value: 2800 },
        { name: "山西省", value: 600 },
        { name: "辽宁省", value: 500 },
        { name: "吉林省", value: 700 },
        { name: "黑龙江省", value: 700 },
        { name: "上海市", value: 2800 },
        { name: "江苏省", value: 1400 },
        { name: "浙江省", value: 1200 },

        { name: "安徽省", value: 600 },
        { name: "福建省", value: 700 },
        { name: "江西省", value: 500 },
        { name: "山东省", value: 700 },
        { name: "河南省", value: 900 },
        { name: "湖北省", value: 1000 },
        { name: "湖南省", value: 1200 },
        { name: "海南省", value: 1500 },
        { name: "重庆市", value: 1400 },
        { name: "四川省", value: 1700 },
        { name: "贵州省", value: 900 },
        { name: "云南省", value: 1000 },

        { name: "西藏自治区", value: 200 },
        { name: "陕西省", value: 400 },
        { name: "甘肃省", value: 900 },
        { name: "青海省", value: 1000 },
        { name: "宁夏回族自治区", value: 800 },
        { name: "新疆维吾尔自治区", value: 1200 },
        { name: "台湾省", value: 1700 },

        { name: "香港特别行政区", value: 2000 },
        { name: "澳门特别行政区", value: 2200 },
        { name: "广西壮族自治区", value: 1200 }, 
        ],
        areaMap:'',
    };
  },
  mounted() {
    this.$nextTick(()=>{
      this.init();
    // this.getMapList()
 
    })
  },
 
  methods: {
    init() {
      const that = this;
     
      var chartDom = document.getElementById("panmap");
      var myChart = echarts.init(chartDom);
      window.addEventListener("resize", function () {
        myChart.resize();
      });
      myChart.off("click");
 
      echarts.registerMap("js", pan);
      echarts.registerMap("js2", pan);
      // console.log(pan);
      var aaa = [
     
      ]
      this.areaMap = [
      { name: "天津市", value: 1000 },
        { name: "北京市", value: 3000 },
        { name: "河北省", value: 900 },
        { name: "内蒙古自治区", value: 500 },
        { name: "广东省", value: 2800 },
        { name: "山西省", value: 600 },
        { name: "辽宁省", value: 500 },
        { name: "吉林省", value: 700 },
        { name: "黑龙江省", value: 700 },
        { name: "上海市", value: 2800 },
        { name: "江苏省", value: 1400 },
        { name: "浙江省", value: 1200 },

        { name: "安徽省", value: 600 },
        { name: "福建省", value: 700 },
        { name: "江西省", value: 500 },
        { name: "山东省", value: 700 },
        { name: "河南省", value: 900 },
        { name: "湖北省", value: 1000 },
        { name: "湖南省", value: 1200 },
        { name: "海南省", value: 1500 },
        { name: "重庆市", value: 1400 },
        { name: "四川省", value: 1700 },
        { name: "贵州省", value: 900 },
        { name: "云南省", value: 1000 },

        { name: "西藏自治区", value: 200 },
        { name: "陕西省", value: 400 },
        { name: "甘肃省", value: 900 },
        { name: "青海省", value: 1000 },
        { name: "宁夏回族自治区", value: 800 },
        { name: "新疆维吾尔自治区", value: 1200 },
        { name: "台湾省", value: 1700 },

        { name: "香港特别行政区", value: 2000 },
        { name: "澳门特别行政区", value: 2200 },
        { name: "广西壮族自治区", value: 1200 }, 
     
      ]
      function sss(pan){
        // console.log(pan);
         aaa = pan.features.map((item)=>{
          return {
            value: (Math.random() * 1000).toFixed(2),
            name:item.properties.name
          }
        });
          // console.log(aaa);
      }
      sss(pan)
      var option;
 
      // 柱状图 图中的位置
      var center = {
        天津市: [117.190182,39.125596],
        北京市: [116.405285,39.904989],
        河北省: [114.502461,38.045474],
        内蒙古自治区: [111.670801,40.818311],
        广东省: [113.280637,23.125178],
        山西省: [112.549248,37.857014],
        辽宁省: [123.429096,41.796767],
        吉林省: [125.3245,43.886841],
        黑龙江省: [126.642464,45.756967],
        上海市: [121.472644,31.231706],
        江苏省:[118.767413,32.041544],
        浙江省: [120.153576,30.287459],

        安徽省: [117.283042,31.86119],
        福建省: [119.306239,26.075302],
        江西省: [115.892151,28.676493],
        山东省: [117.000923,36.675807],
        河南省: [113.665412,34.757975],
        湖北省: [114.298572,30.584355],
        湖南省: [112.982279,28.19409],
        贵州省:[106.713478,26.578343],
        广西壮族自治区: [108.320004,22.82402],
        海南省: [110.33119,20.031971],
        重庆市:[106.504962,29.533155],
        四川省: [104.065735,30.659462],


        云南省: [102.712251,25.040609],
        西藏自治区: [91.132212,29.660361],
        陕西省: [108.948024,34.263161],
        甘肃省: [103.823557,36.058039],
        青海省: [101.778916,36.623178],
        宁夏回族自治区: [106.278179,38.46637],
        新疆维吾尔自治区:[87.617733,43.792818],
        台湾省: [121.509062,25.044332],
        香港特别行政区: [114.173355,22.320048],
        澳门特别行政区: [113.54909,22.198951],
      };
      // 图中 省份字的位置
      var center2 = {
        天津市: [117.190182,39.125596],
        北京市: [116.405285,39.904989],
        河北省: [114.502461,38.045474],
        内蒙古自治区: [111.670801,40.818311],
        广东省: [113.280637,23.125178],
        山西省: [112.549248,37.857014],
        辽宁省: [123.429096,41.796767],
        吉林省: [125.3245,43.886841],
        黑龙江省: [126.642464,45.756967],
        上海市: [121.472644,31.231706],
        江苏省:[118.767413,32.041544],
        浙江省: [120.153576,30.287459],

        安徽省: [117.283042,31.86119],
        福建省: [119.306239,26.075302],
        江西省: [115.892151,28.676493],
        山东省: [117.000923,36.675807],
        河南省: [113.665412,34.757975],
        湖北省: [114.298572,30.584355],
        湖南省: [112.982279,28.19409],
        贵州省:[106.713478,26.578343],
        广西壮族自治区: [108.320004,22.82402],
        海南省: [110.33119,20.031971],
        重庆市:[106.504962,29.533155],
        四川省: [104.065735,30.659462],
        云南省: [102.712251,25.040609],
        西藏自治区: [91.132212,29.660361],
        陕西省: [108.948024,34.263161],
        甘肃省: [103.823557,36.058039],
        青海省: [101.778916,36.623178],
        宁夏回族自治区: [106.278179,38.46637],
        新疆维吾尔自治区:[87.617733,43.792818],
        台湾省: [121.509062,25.044332],
        香港特别行政区: [114.173355,22.320048],
        澳门特别行政区: [113.54909,22.198951],

        
      };
      // 数据
      var dataw = that.datasss;
      console.log(dataw);
      var lineData = dataw.map((item) => {
        // debugger
        console.log(item);
        return {
          coords: [
            center[item.name],
            [center[item.name][0], center[item.name][1] + item.value * 4 * 0.001],
          ],
        };
      });
      var scatterData = dataw.map((item) => {
        return [
          center[item.name][0],
          center[item.name][1] + item.value * 4 * 0.001,
        ];
      });
      var scatterData2 = dataw.map((item) => {
        return center[item.name];
      });
      var scatterData3 = dataw.map((item) => {
        return center2[item.name].concat(item.name);
      });
        console.log(lineData,scatterData,scatterData2,scatterData3);
      option = {
        backgroundColor: "rgba(0,0,0,0)",
        tooltip: {
                trigger: 'item',
                show: true,
                enterable: true,
                textStyle:{
                    fontSize:20,
                    color: '#fff'
                },
                backgroundColor: 'rgba(0,0,0,0.5)',
                // backgroundColor: 'rgba(0,2,89,0.8)',
                // formatter: '{b}'
                formatter: function (item) {
                  var aaaaa = dataw
                return `商户数${aaaaa[item.dataIndex].value}`;
              },
            },
        // 地图图层样式
        geo: [
          {
            map: "js",
            aspectScale: 0.9,
            roam: false, //是否允许缩放
            // roam:true,
            //zoom: 1.1, //默认显示级别
            layoutSize: "95%",
            layoutCenter: ["50%", "50%"],
            itemStyle: {
              areaColor: "transparent",
              borderColor: "#37C1FD",
              borderWidth: 2,
            },
            emphasis: {
              itemStyle: {
                areaColor: "#72b2ff",
              },
              label: {
                show: 0,
                color: "#fff",
              },
            },
 
            zlevel: 3,
            regions: [ // 区域配置
            {
              name: '金台区', //区块名称
              itemStyle: {
                normal: {
                  areaColor: 'rgb(247, 192, 35)' // 区域颜色
                }
              }
            },
             ]
          },
          {
            map: "js2",
            aspectScale: 0.9,
            roam: false, //是否允许缩放
            //zoom: 1.1, //默认显示级别
            layoutSize: "95%",
            layoutCenter: ["50%", "50%"],
            itemStyle: {
              areaColor: {
                type: "radial",
                x: 0.7,
                y: 0.5,
                r: 0.4,
                colorStops: [
                  {
                    offset: 0,
                     //color: "#72b2ff", // 0% 处的颜色
                    // color:"rgba(8, 79, 207)"
                    color:"rgba(1, 32, 137,0.5)"
 
                  },
                  {
                    offset: 1,
                    color: "rgba(1, 32, 137,0.5)", // 100% 处的颜色
                  },
                ],
                global: false, // 缺省为 false
              },
              borderColor: "#37C1FD",
              borderWidth: 2,
            },
            zlevel: 2,
            silent: true,
          },
          {
            map: "js2",
            aspectScale: 0.9,
            roam: false, //是否允许缩放
            //zoom: 1.1, //默认显示级别
            layoutSize: "95%",
            layoutCenter: ["50%", "52%"],
            itemStyle: {
              areaColor: "#005DDC",
              borderColor: "#329BF5",
              borderWidth: 1,
            },
            zlevel: 1,
            silent: true,
          },
        ],
        series: [
          // 画柱状图
          {
            type: "lines",
            zlevel: 5,
            effect: {
              show: false,
              period: 4, //箭头指向速度，值越小速度越快
              trailLength: 0.02, //特效尾迹长度[0,1]值越大，尾迹越长重
              symbol: "arrow", //箭头图标
              symbolSize: 5, //图标大小
            },
            lineStyle: {
              width: 15, //尾迹线条宽度
              color: 'rgb(22,255,255, .6)',
              opacity: 1, //尾迹线条透明度
              curveness: 0, //尾迹线条曲直度
            },
            label: {
              show: 0,
              position: "end",
              formatter: "245",
            },
            silent: true,
            data: lineData,
          },
          // 柱形数量显示
          {
            type: "scatter",
            coordinateSystem: "geo",
            geoIndex: 0,
            zlevel: 5,
            label: {
              show: !0,
              position: "left",
              formatter: (params) => dataw[params.dataIndex].value,
              padding: [4, 8],
              backgroundColor: "#003F5E",
              borderRadius: 5,
              borderColor: "#67F0EF",
              borderWidth: 1,
              color: "#67F0EF",
            },
            symbol: "circle",
            symbolSize: [15, 8],
            itemStyle: {
              color: 'rgb(22,255,255, .6)',
              opacity: 1,
            },
            silent: true,
            data: scatterData,
          },
          // 图中圆点设置
          {
            type: "scatter",
            coordinateSystem: "geo",
            geoIndex: 0,
            zlevel: 5,
            symbol: "circle",
            symbolSize: [15, 8],
            itemStyle: {
              color: 'rgb(22,255,255, .6)',
              opacity: 1,
              shadowColor: "#000",
              shadowBlur: 5,
              shadowOffsetY: 2,
            },
            silent: true,
            data: scatterData2,
          },
          {
            type: "effectScatter",
            coordinateSystem: "geo",
            geoIndex: 0,
            symbol: "circle",
            symbolSize: 4,
            showEffectOn: "render",
            rippleEffect: {
              brushType: "fill",
              scale: 10,
            },
            hoverAnimation: true,
            label: {
              formatter: (p) => p.data[2],
              position: "right",
              color: "#fff",
              fontSize: 14,
              distance: 10,
              show: !0,
            },
            itemStyle: {
              color: 'rgb(22,255,255, .6)',
            },
            zlevel: 6,
            data: scatterData3,
          },
        ],
 
      };
 
      myChart.setOption(option);
// 地图中高亮的省份 ，this.areaMap为地区名
      myChart.on("globalout",()=>{
        setTimeout(()=>{
          showTips(this.areaMap)
        },1000)
      })
       function showTips(name) {
        aaa.forEach((item,i)=>{
           if (item.name.includes(name)) {
            myChart.dispatchAction({
                type: 'showTip',
                seriesIndex: 0,
                dataIndex: i
            });
            myChart.dispatchAction({
                type: 'mapSelect',
                seriesIndex: 0,
                dataIndex: i
            });
        }
        });
       }
    },
//接口
//     async getMapList(){
//       await axios.post("/api/v2/index/HomeMapData").then((res)=>{
//         if(res.data.code === 200){
//           // console.log(res);
//           this.datasss = res.data.data.data
//           this.areaMap = res.data.data.areaName
// // 在拿到数据后再调用echarts，防止echarts在没拿到数据之前渲染
//           this.init();  
//           console.log(this.datasss);
//         }
//       })
//     }
  },
};
</script>
<style>
.panmap {
  height: 100%;
  width: 100%;
}
</style>
 
 