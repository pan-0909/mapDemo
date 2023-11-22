<template>
    <div class="panmap" ref="panmap" id="panmap"  style="height: 1000px;width: 1000px;"></div>
  </template>
   
  <script>
  import pan from "../assets/guangdong.json";
  import * as echarts from 'echarts'
  export default {
    data() {
      return {
        datasss : [
        { name: "广州市", value: 260 },
          { name: "韶关市", value: 30 },
          { name: "深圳市", value: 90 },
          { name: "珠海市", value: 50 },
          { name: "汕头市", value: 28 },
          { name: "佛山市", value: 60 },
          { name: "江门市", value: 50 },
          { name: "湛江市", value: 70 },
          { name: "茂名市", value: 70 },
          { name: "肇庆市", value: 28 },
          { name: "惠州市", value: 14 },
          { name: "梅州市", value: 12 },
          { name: "汕尾市", value: 60 },
          { name: "河源市", value: 70 },
          { name: "阳江市", value: 50 },
          { name: "清远市", value: 70 },
          { name: "东莞市", value: 90},
          { name: "中山市", value: 10 },
          { name: "潮州市", value: 12 },
          { name: "揭阳市", value: 15 },
          { name: "云浮市", value: 14 },
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
        { name: "广州市", value: 8000 },
          { name: "韶关市", value: 3000 },
          { name: "深圳市", value: 9000 },
          { name: "珠海市", value: 5000 },
          { name: "汕头市", value: 6000 },
          { name: "佛山市", value: 6000 },
          { name: "江门市", value: 1000 },
          { name: "湛江市", value: 2000 },
          { name: "茂名市", value: 2000 },
          { name: "肇庆市", value: 2800 },
          { name: "惠州市", value: 1400 },
          { name: "梅州市", value: 1200 },
  
          { name: "汕尾市", value: 600 },
          { name: "河源市", value: 700 },
          { name: "阳江市", value: 500 },
          { name: "清远市", value: 700 },
          { name: "东莞市", value: 900 },
          { name: "中山市", value: 1000 },
          { name: "潮州市", value: 1200 },
          { name: "揭阳市", value: 1500 },
          { name: "云浮市", value: 1400 },
       
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
          广州市: [116.708463,23.37102],
          韶关市: [113.591544,24.801322],
          深圳市: [114.085947,22.547],
          珠海市: [113.553986,22.224979],
          汕头市: [116.708463,23.37102],
          佛山市: [113.122717,23.028762],
          江门市: [113.094942,22.590431],
          湛江市: [110.364977,21.274898],
          茂名市: [110.919229,21.659751],
          肇庆市: [112.472529,23.051546],
          惠州市:[114.412599,23.079404],
          梅州市: [116.117582,24.299112],
  
          汕尾市:[115.364238,22.774485],
          河源市: [114.697802,23.746266],
          阳江市: [111.975107,21.859222],
          清远市: [113.051227,23.685022],
          东莞市: [113.746262,23.046237],
          中山市: [113.382391,22.521113],
          潮州市:[116.632301,23.661701],
          揭阳市: [116.355733,23.543778],
          云浮市:[112.044439,22.929801],
        };
        // 图中 省份字的位置
        var center2 = {
          广州市: [116.708463,23.37102],
          韶关市: [113.591544,24.801322],
          深圳市: [114.085947,22.547],
          珠海市: [113.553986,22.224979],
          汕头市: [116.708463,23.37102],
          佛山市: [113.122717,23.028762],
          江门市: [113.094942,22.590431],
          湛江市: [110.364977,21.274898],
          茂名市: [110.919229,21.659751],
          肇庆市: [112.472529,23.051546],
          惠州市:[114.412599,23.079404],
          梅州市: [116.117582,24.299112],
  
          汕尾市:[115.364238,22.774485],
          河源市: [114.697802,23.746266],
          阳江市: [111.975107,21.859222],
          清远市: [113.051227,23.685022],
          东莞市: [113.746262,23.046237],
          中山市: [113.382391,22.521113],
          潮州市:[116.632301,23.661701],
          揭阳市: [116.355733,23.543778],
          云浮市:[112.044439,22.929801],
          
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
    },
  };
  </script>
  <style>
  .panmap {
    height: 100%;
    width: 100%;
  }
  </style>
   
   