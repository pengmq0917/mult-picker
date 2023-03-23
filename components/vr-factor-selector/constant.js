const factorStructure1 = [
  {
    label: "基础参数",
    value: 1,
    level:0,
    icon:'base_params.png',
    children: [
      {
        label: "电量",
        value: 1,
        level:1,
        children: [
          {
            label: "A相电流",
            value: 12,
            level:2
          },
          {
            label: "B相电流",
            value: 13,
            level:2
          },
          {
            label: "C相电流",
            value: 14,
            level:2
          }
        ],
      },
      {
        label: "电压",
        value: 2,
        level:1,
        children: [
          {
            label: "A相电压",
            value: 9,
            level:2
          },
          {
            label: "B相电压",
            value: 10,
            level:2
          },
          {
            label: "C相电压",
            value: 11,
            level:2
          }
        ],
      },
      {
        label: "有功功率",
        value: 3,
        level:1,
        children: [
          {
            label: "总有功功率",
            value: 18
          },
          {
            label: "有功功率1",
            value: 19
          },
          {
            label: "有功功率2",
            value: 20
          },
          {
            label: "有功功率3",
            value: 21
          }
        ],
      },
      {
        label: "无功功率",
        value: 4,
        level:1,
        children: [
          {
            label: "无有功功率",
            value: 22,
            level:2
          },
          {
            label: "无功功率1",
            value: 23,
            level:2
          },
          {
            label: "无功功率2",
            value: 24,
            level:2
          },
          {
            label: "无功功率3",
            value: 25,
            level:2
          }
        ],
      },
      {
        label: "功率因素",
        value: 5,
        level:1,
        children: [
          {
            label: "总功率因素",
            value: 26,
            level:2
          },
          {
            label: "功率因素1",
            value: 27,
            level:2
          },
          {
            label: "功率因素2",
            value: 28,
            level:2
          },
          {
            label: "功率因素3",
            value: 29,
            level:2
          }
        ],
      },
      {
        label: "电网频率",
        value: 6,
        level:1,
        children: [
          {
            label: "电网频率",
            value: 15,
            level:2
          }
        ],
      },
    ],
  },
  {
    label: "电量",
    value: 2,
    level:0,
    icon:'electricity.png',
    children: [
      {
        label: "有功电量",
        value: 1,
        level:1,
        children: [
          {
            label: "正向有功总电能",
            value: 1,
            level:2
          },
          {
            label: "反向有功总电能",
            value: 2,
            level:2
          }
        ],
      },
      {
        label: "无功电量",
        value: 2,
        level:1,
        children: [
          {
            label: "组合无功1总电能",
            value: 3,
            level:2
          },
          {
            label: "组合无功2总电能",
            value: 4,
            level:2
          },
          {
            label: "(当前)第一象限无功总电能",
            value: 5,
            level:2
          },
          {
            label: "(当前)第二象限无功总电能",
            value: 6,
            level:2
          },
          {
            label: "(当前)第三象限无功总电能",
            value: 7,
            level:2
          },
          {
            label: "(当前)第四象限无功总电能",
            value: 8,
            level:2
          },
        ],
      },
      {
        label: "需量",
        value: 3,
        level:1,
        children: [
          {
            label: "当前有功需量",
            value: 16,
            level:2
          },
          {
            label: "当前无功需量",
            value: 17,
            level:2
          },
        ],
      },
    ],
  },
]
export {
  factorStructure1
}