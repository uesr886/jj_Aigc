// index.js
const defaultAvatarUrl = 'https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0'

Page({
  data: {
    "slides": [
      {
        "id": 5,
        "header": "全新一代发现",
        "sub_header": "Discovery",
        "description": "全尺寸七座 SUV，现已接受预订。",
        "image": "https://resources.ninghao.net/landrover/discover-1.jpg"
      },
      {
        "id": 3,
        "header": "全新揽胜星脉",
        "sub_header": "Range Rover",
        "description": "标新立异的前卫揽胜。",
        "image": "https://resources.ninghao.net/landrover/velar-1.jpg"
      },
      {
        "id": 6,
        "header": "发现神行",
        "sub_header": "Discovery",
        "description": "发现的绝佳时刻。",
        "image": "https://resources.ninghao.net/landrover/discovery-sport-1.jpg"
      }
    ],
    "entities":[
        {
          "id": 1,
          "header": "揽胜",
          "sub_header": "Range Rover",
          "description": "世界顶级奢华 SUV 的极致巅峰。",
          "image": "https://resources.ninghao.net/landrover/range-rover-small.jpg",
          "meta": {
            "price": "RMB 1,588,000 起",
            "carbon_dioxide": 262,
            "fuel": 10.7,
            "exterior_design": [
              {
                "header": "闻名遐迩的设计",
                "description": "车身下部特征造型的三条经典线条、飘逸的车顶线和延续的腰线赋予揽胜极高的辨识度。独具特色的侧影略呈锥形，线条更为利落，亮光黑色支柱让车顶格外引人注目。",
                "image": "https://resources.ninghao.net/landrover/range-rover-ext-1.jpg"
              },
              {
                "header": "巅峰创世加长版外观",
                "description": "每种定制方案都透露着优雅和对细节的关注。独特的前格栅以及带深色滚花外观和光亮镀铬边缘的 “Range Rover” 前后字标等奢华的设计理念充分展示了对细节的不懈追求。",
                "image": "https://resources.ninghao.net/landrover/range-rover-ext-2.jpg"
              }
            ],
            "interior_design": [
              {
                "header": "装饰精美",
                "description": "车辆的内饰可带来宁静而奢华的舒适感。内饰奢华，精心打造；宽阔的中控台让基本控制按钮伸手可及。由精美真皮和甄选实木装饰的表面干净、雅致，帮助打造具有现代感的舒适氛围。",
                "image": "https://resources.ninghao.net/landrover/range-rover-int-1.jpg"
              },
              {
                "header": "巅峰创世加长版内饰",
                "description": "从后排中央扶手含高级冷藏箱和伸缩桌的后中央控制台，到带小腿支托的独特座椅设计，此车处处彰显自信高雅，散发出宁静、泰然的感觉。",
                "image": "https://resources.ninghao.net/landrover/range-rover-int-2.jpg"
              }
            ]
          }
        },
        {
          "id": 2,
          "header": "揽胜运动",
          "sub_header": "Range Rover Sport",
          "description": "越界动能，运动型豪华 SUV 的至高典范。",
          "image": "https://resources.ninghao.net/landrover/ranger-rover-sport-small.jpg",
          "meta": {
            "price": "RMB 928,000 起",
            "carbon_dioxide": 262,
            "fuel": 10.7,
            "exterior_design": [
              {
                "header": "优异性能",
                "description": "全铝合金车身结构不仅可以降低车重，更可增加灵活性，并有助于提高车辆安全性。揽胜运动版被设计为路虎迄今反应速度最快、最动感和最敏捷的车型。",
                "image": "https://resources.ninghao.net/landrover/range-rover-sport-ext-1.jpg"
              },
              {
                "header": "为震撼而生",
                "description": "均衡的比例、彰显力量的形象、简洁洗练的线条和精心雕刻的角度，所有这一切让这款车型变得卓而不凡、引人注目。",
                "image": "https://resources.ninghao.net/landrover/range-rover-sport-ext-2.jpg"
              }
            ],
            "interior_design": [
              {
                "header": "为您而设计",
                "description": "驾驶舱和控制布局经过精心设计和简化，为您提供易于集中精力和近乎直觉的驾驶体验。揽胜运动版指挥官式驾驶座椅让您对前方道路一目了然，从而提升自信感和控制感，增强驾驶体验。",
                "image": "https://resources.ninghao.net/landrover/range-rover-sport-int-1.jpg"
              },
              {
                "header": "现代内饰",
                "description": "富有现代气息的精致内饰彰显路虎揽胜运动版的运动气质。有力的线条、干净利落的表面和巧妙的细节处理，与柔和的饰面和精致的材质完美融合。整个空间既舒适又富有功能实用性。",
                "image": "https://resources.ninghao.net/landrover/range-rover-sport-int-2.jpg"
              }
            ]
          }
        },
        {
          "id": 3,
          "header": "揽胜星脉",
          "sub_header": "Range Rover Velar",
          "description": "路虎精湛、强大的中级 SUV。",
          "image": "https://resources.ninghao.net/landrover/velar-small.jpg",
          "meta": {
            "price": "RMB 688,000 起",
            "carbon_dioxide": 173,
            "fuel": 7.5,
            "exterior_design": [
              {
                "header": "简洁，优雅的设计",
                "description": "现代简洁的外观，流露出自信和独具风格的个性。全新路虎揽胜星脉引领设计潮流。现代简洁、优雅而独特的设计，诠释出动魄风范。全新路虎揽胜星脉无论行至何处，无不惹人注目。",
                "image": "https://resources.ninghao.net/landrover/velar-ext-1.jpg"
              },
              {
                "header": "星脉车型",
                "description": "路虎有史以来非常现代性和创新性的中级SUV。全新路虎揽胜星脉拥有悬浮式车顶和流线形腰线，而全新路虎揽胜星脉R-Dynamic则突破常规，以独特的设计，展现难以抗拒的吸引力。",
                "image": "https://resources.ninghao.net/landrover/velar-ext-2.jpg"
              },
              {
                "header": "隐藏式车门把手",
                "description": "全新路虎揽胜星脉以现代简洁、优雅而独特的设计，引领设计潮流。可展开式车门把手在不用时可收回。隐藏式设计缔造出无比简洁、纯粹的线条，提升了空气动力效率，降低了风阻。",
                "image": "https://resources.ninghao.net/landrover/velar-ext-3.jpg"
              }
            ],
            "interior_design": [
              {
                "header": "全新的内饰设计",
                "description": "全新路虎揽胜星脉的内饰设计，诠释了简约中的优雅。从用户可调节车内氛围灯，到分体式滑动扶手，所有的个性化设计，让您与乘客尽享舒适旅程。",
                "image": "https://resources.ninghao.net/landrover/velar-int-1.jpg"
              },
              {
                "header": "精致内饰",
                "description": "全新路虎揽胜星脉的内饰设计，只为您畅意尽享驾驭的乐趣。享有盛誉的指挥官式座椅可扩大您的下方视野，便于更清楚地查看周围环境，让您在任何天气或交通状况下稳操胜券。",
                "image": "https://resources.ninghao.net/landrover/velar-int-2.jpg"
              },
              {
                "header": "工艺",
                "description": "车内的每一个细节，都由我们的专业团队精心打造，让您的所见所触，幻化成精彩的感观盛宴。柔软的豪华真皮，不单用于座椅，内饰空间也大面积地应用了这些材料。",
                "image": "https://resources.ninghao.net/landrover/velar-int-3.jpg"
              }
            ]
          }
        },
        {
          "id": 4,
          "header": "揽胜极光",
          "sub_header": "Range Rover Evoque",
          "description": "时尚豪华全地形 SUV。",
          "image": "https://resources.ninghao.net/landrover/evoque-small.jpg",
          "meta": {
            "price": "RMB 398,000 起",
            "carbon_dioxide": 262,
            "fuel": 10.7,
            "exterior_design": [
              {
                "header": "揽胜极光五门版车型",
                "description": "专门增设的揽胜极光梦莲湖蓝限量版，可将他别具匠心的外观设计诠释得淋漓尽致。无论是携亲友在城市中迅游，还是前往静谧郊野过一天的休闲时光，揽胜极光都会让您轻松出行。",
                "image": "https://resources.ninghao.net/landrover/evoque-ext-1.jpg"
              },
              {
                "header": "揽胜极光敞篷版",
                "description": "黑檀木色织布材质的Z字形自动折叠顶篷系统，将汽车内在性能与非凡外观融合提升至新高度。 凌厉的线条凸显自信、个性与从容的姿态，而宽敞的内部空间可使车上四位乘客尽享开放式的舒适旅途。",
                "image": "https://resources.ninghao.net/landrover/evoque-ext-2.jpg"
              }
            ],
            "interior_design": [
              {
                "header": "五门版",
                "description": "简洁利落的内饰设计更能凸显出路虎对内饰材质的精挑细选。选择您最喜欢的内饰材质与颜色组合，包括双针工艺缝合的真皮包覆、铝合金饰面、可让阳光自然倾泻至车舱的全景天窗，打造个性化座舱空间。",
                "image": "https://resources.ninghao.net/landrover/evoque-int-1.jpg"
              },
              {
                "header": "运动座椅",
                "description": "运动增强包中的运动座椅只在揽胜极光 HSE Dynamic 敞篷版上提供，更贴合人体的设计让您尽享奢华舒适。带腰部支撑和座椅记忆功能的电动调节座椅，提供黑檀木/甘椒红双拼色两种配色方案可选。",
                "image": "https://resources.ninghao.net/landrover/evoque-int-2.jpg"
              },
              {
                "header": "揽胜极光敞篷版内饰",
                "description": "个性化的四座设计，运动美感卓然眼前。 前排座椅集成了诸如温控功能等科技，保证您获得真正轻松愉悦的驾乘体验。 整洁利落的线条辅以高档时尚的饰面，一望便知的揽胜家族奢华 DNA。",
                "image": "https://resources.ninghao.net/landrover/evoque-int-3.jpg"
              }
            ]
          }
        },
        {
          "id": 5,
          "header": "发现",
          "sub_header": "Discovery",
          "description": "全能全尺寸豪华 SUV。",
          "image": "https://resources.ninghao.net/landrover/discovery-small.jpg",
          "meta": {
            "price": "RMB 798,000 起",
            "carbon_dioxide": 254,
            "fuel": 10.7,
            "exterior_design": [
              {
                "header": "现代设计",
                "description": "独特的天窗和随着车身向后部延伸上升的特色线条，外加最新的前后端设计，赋予全新一代发现魅力气息。全新一代发现工艺精致，彬彬有礼，展现极具吸引力的现代英伦设计。",
                "image": "https://resources.ninghao.net/landrover/discovery-ext-1.jpg"
              },
              {
                "header": "黄金比例",
                "description": "独特有力且前挑精短的前端、大倾角挡风玻璃、突出的腰线和线条流畅的锥度后端，彰显简洁动感、高效现代。",
                "image": "https://resources.ninghao.net/landrover/discovery-ext-2.jpg"
              }
            ],
            "interior_design": [
              {
                "header": "智慧空间利用",
                "description": "从手套箱到中央扶手储物箱（可选前排中央通道集成冷藏箱），智慧存储方案会突破您的想象。",
                "image": "https://resources.ninghao.net/landrover/discovery-int-1.jpg"
              },
              {
                "header": "饰面真材实料",
                "description": "优质真皮和织物饰面采用专门设计的优美双针缝线，并用金属和实木细节装帧。可选醒目的光泽黑色或磨砂铝饰面板，前门内部把手和变速箱换挡旋钮采用金属电镀饰面。",
                "image": "https://resources.ninghao.net/landrover/discovery-int-2.jpg"
              }
            ]
          }
        },
        {
          "id": 6,
          "header": "发现神行",
          "sub_header": "Discovery Sport",
          "description": "全能全地形豪华 SUV。",
          "image": "https://resources.ninghao.net/landrover/discovery-sport-small.jpg",
          "meta": {
            "price": "RMB 368,000起",
            "carbon_dioxide": 180,
            "fuel": 7.6,
            "exterior_design": [
              {
                "header": "外观设计",
                "description": "延承发现家族风范，全地形豪华中型SUV路虎发现神行，以紧凑均衡的现代外观，尽展果敢美学姿态。独具标识性的流线型轮廓，令发现神行看起来充满自信，只待随时启程去探享。",
                "image": "https://resources.ninghao.net/landrover/discovery-sport-ext-1.jpg"
              }
            ],
            "interior_design": [
              {
                "header": "内饰设计",
                "description": "发现神行的全享设计理念，同样呈现于座舱内鲜明的水平和垂直线条设计中。整洁利落的饰面、精细的工艺及可选真皮饰面，令多功能内部空间更添质感。",
                "image": "https://resources.ninghao.net/landrover/discovery-sport-int-1.jpg"
              },
              {
                "header": "5 + 2 座椅",
                "description": "如您所愿，功能全面的路虎发现神行可选配 5+2 座椅，但依然保持比传统5座SUV更为紧凑的身形。",
                "image": "https://resources.ninghao.net/landrover/discovery-sport-int-2.jpg"
              }
            ]
          }
        }
      ],

  },
  testDrive(){
    console.log('测试')
  },
  doMore(){
    console.log('More')
    wx.navigateTo({
      url:'/pages/vehicles/show'
    })
  }
})
