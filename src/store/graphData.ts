export interface VertexData {
  id: string;
  objectName: string | null;
  cx: number;
  cy: number;
}

export interface EdgeData {
  id: string;
  from: string;
  to: string;
}

export interface GraphData {
  floor:string,
  vertices: VertexData[];
  edges: EdgeData[];
}

export const graphData: GraphData[] = [
  {
  "floor": "ground",
  'vertices': [
    {
      "id": "v92",
      "objectName": null,
      "cx": 444.46875,
      "cy": 777
    },
    {
      "id": "v93",
      "objectName": "Dr. Khalid Aloup - G060",
      "cx": 458.46875,
      "cy": 788
    },
    {
      "id": "v1",
      "objectName": null,
      "cx": 729.46875,
      "cy": 588
    },
    {
      "id": "v12",
      "objectName": null,
      "cx": 538.46875,
      "cy": 684
    },
    {
      "id": "v13",
      "objectName": null,
      "cx": 523.46875,
      "cy": 677
    },
    {
      "id": "v14",
      "objectName": null,
      "cx": 448.46875,
      "cy": 747
    },
    {
      "id": "v15",
      "objectName": "G138",
      "cx": 477.46875,
      "cy": 773
    },
    {
      "id": "v16",
      "objectName": null,
      "cx": 400.46875,
      "cy": 795
    },
    {
      "id": "v17",
      "objectName": "G136",
      "cx": 425.46875,
      "cy": 827
    },
    {
      "id": "v18",
      "objectName": null,
      "cx": 353.46875,
      "cy": 832
    },
    {
      "id": "v19",
      "objectName": "G135",
      "cx": 384.46875,
      "cy": 870
    }

  ],
  'edges':[
    {
      "id": "e678",
      "from": "v14",
      "to": "v92"
    },
    {
      "id": "e6",
      "from": "v7",
      "to": "v8"
    },
    {
      "id": "e7",
      "from": "v8",
      "to": "v9"
    },
    {
      "id": "e8",
      "from": "v9",
      "to": "v10"
    },
    {
      "id": "e9",
      "from": "v1",
      "to": "v12"
    },
    {
      "id": "e10",
      "from": "v12",
      "to": "v13"
    },
    {
      "id": "e11",
      "from": "v13",
      "to": "v14"
    },
    {
      "id": "e12",
      "from": "v14",
      "to": "v15"
    },
    {
      "id": "e13",
      "from": "v14",
      "to": "v16"
    },
    {
      "id": "e14",
      "from": "v16",
      "to": "v17"
    },
    {
      "id": "e15",
      "from": "v18",
      "to": "v19"
    },
    {
      "id": "e16",
      "from": "v16",
      "to": "v18"
    },
    {
      "id": "e76",
      "from": "v92",
      "to": "v93"
    }
  ]},{
    "floor": "first",
  "vertices": [
    
    {
      "id": "v1",
      "objectName": null,
      "cx": 459.46875,
      "cy": 612
    },
    {
      "id": "v21",
      "objectName": null,
      "cx": 486.46875,
      "cy": 667
    },
    {
      "id": "v22",
      "objectName": null,
      "cx": 536.46875,
      "cy": 702
    },
    {
      "id": "v23",
      "objectName": null,
      "cx": 654.46875,
      "cy": 702
    },
    {
      "id": "v24",
      "objectName": "Exam Hall",
      "cx": 658.46875,
      "cy": 736
    },
    {
      "id": "v77",
      "objectName": null,
      "cx": 526.46875,
      "cy": 728
    },
    {
      "id": "v78",
      "objectName": null,
      "cx": 479.46875,
      "cy": 773
    },
    {
      "id": "v79",
      "objectName": null,
      "cx": 419.46875,
      "cy": 710
    },
    {
      "id": "v80",
      "objectName": null,
      "cx": 285.46875,
      "cy": 833
    },
    {
      "id": "v81",
      "objectName": "Dr. Irfan - 1084",
      "cx": 274.46875,
      "cy": 821
    },
    {
      "id": "v82",
      "objectName": null,
      "cx": 918.46875,
      "cy": 707
    },
    {
      "id": "v83",
      "objectName": null,
      "cx": 995.46875,
      "cy": 643
    },
    {
      "id": "v84",
      "objectName": null,
      "cx": 994.46875,
      "cy": 588
    },
    {
      "id": "v85",
      "objectName": null,
      "cx": 918.46875,
      "cy": 508
    },
    {
      "id": "v86",
      "objectName": null,
      "cx": 1016.46875,
      "cy": 410
    },
    {
      "id": "v87",
      "objectName": null,
      "cx": 1078.46875,
      "cy": 472
    },
    {
      "id": "v88",
      "objectName": null,
      "cx": 1084.46875,
      "cy": 464
    },
    {
      "id": "v89",
      "objectName": "Dr. Atta - 1165",
      "cx": 1096.46875,
      "cy": 477
    },
    {
      "id": "v90",
      "objectName": null,
      "cx": 534.46875,
      "cy": 516
    },
    {
      "id": "v91",
      "objectName": null,
      "cx": 896.46875,
      "cy": 520
    }
  ],
  "edges": [
    {
      "id": "e62",
      "from": "v23",
      "to": "v82"
    },
    {
      "id": "e622",
      "from": "v1",
      "to": "v90"
    },
    {
      "id": "e16",
      "from": "v1",
      "to": "v21"
    },
    {
      "id": "e17",
      "from": "v21",
      "to": "v22"
    },
    {
      "id": "e18",
      "from": "v22",
      "to": "v23"
    },
    {
      "id": "e19",
      "from": "v23",
      "to": "v24"
    },

    {
      "id": "e60",
      "from": "v22",
      "to": "v77"
    },

    {
      "id": "e64",
      "from": "v77",
      "to": "v78"
    },
    {
      "id": "e65",
      "from": "v78",
      "to": "v79"
    },
    {
      "id": "e66",
      "from": "v79",
      "to": "v80"
    },
    {
      "id": "e67",
      "from": "v80",
      "to": "v81"
    },
    {
      "id": "e68",
      "from": "v82",
      "to": "v83"
    },
    {
      "id": "e69",
      "from": "v83",
      "to": "v84"
    },
    {
      "id": "e70",
      "from": "v84",
      "to": "v85"
    },
    {
      "id": "e71",
      "from": "v85",
      "to": "v86"
    },
    {
      "id": "e72",
      "from": "v86",
      "to": "v87"
    },
    {
      "id": "e73",
      "from": "v87",
      "to": "v88"
    },
    {
      "id": "e74",
      "from": "v88",
      "to": "v89"
    },
    {
      "id": "e75",
      "from": "v90",
      "to": "v91"
    },
    {
      "id": "e76",
      "from": "v85",
      "to": "v91"
    }
  ]},{
    "floor": "second",
  "vertices": [
    
    {
      "id": "v1",
      "objectName": null,
      "cx": 478.46875,
      "cy": 638
    },
    {
      "id": "v45",
      "objectName": null,
      "cx": 488.46875,
      "cy": 563
    },
    {
      "id": "v46",
      "objectName": null,
      "cx": 535.46875,
      "cy": 522
    },
    {
      "id": "v47",
      "objectName": null,
      "cx": 629.46875,
      "cy": 522
    },
    {
      "id": "v48",
      "objectName": null,
      "cx": 626.46875,
      "cy": 586
    },
    {
      "id": "v49",
      "objectName": "Electronics Lab - 2023",
      "cx": 609.46875,
      "cy": 586
    },
    {
      "id": "v50",
      "objectName": null,
      "cx": 504.46875,
      "cy": 711
    },
    {
      "id": "v51",
      "objectName": null,
      "cx": 559.46875,
      "cy": 733
    },
    {
      "id": "v52",
      "objectName": null,
      "cx": 630.46875,
      "cy": 737
    },
    {
      "id": "v53",
      "objectName": null,
      "cx": 729.46875,
      "cy": 738
    },
    {
      "id": "v54",
      "objectName": "Creativity & Innovation Hall",
      "cx": 728.46875,
      "cy": 713
    },
    {
      "id": "v55",
      "objectName": null,
      "cx": 827.46875,
      "cy": 739
    },
    {
      "id": "v56",
      "objectName": null,
      "cx": 826.46875,
      "cy": 589
    },
    {
      "id": "v57",
      "objectName": "Digital Hardware Lab - 2035",
      "cx": 840.46875,
      "cy": 589
    },
    {
      "id": "v58",
      "objectName": null,
      "cx": 821.46875,
      "cy": 522
    }
  ],
  "edges": [
    {
      "id": "e36",
      "from": "v1",
      "to": "v45"
    },
    {
      "id": "e37",
      "from": "v45",
      "to": "v46"
    },
    {
      "id": "e38",
      "from": "v46",
      "to": "v47"
    },
    {
      "id": "e39",
      "from": "v47",
      "to": "v48"
    },
    {
      "id": "e40",
      "from": "v48",
      "to": "v49"
    },
    {
      "id": "e41",
      "from": "v50",
      "to": "v51"
    },
    {
      "id": "e42",
      "from": "v51",
      "to": "v52"
    },
    {
      "id": "e43",
      "from": "v52",
      "to": "v53"
    },
    {
      "id": "e44",
      "from": "v53",
      "to": "v54"
    },
    {
      "id": "e45",
      "from": "v55",
      "to": "v56"
    },
    {
      "id": "e46",
      "from": "v56",
      "to": "v57"
    },
    {
      "id": "e47",
      "from": "v48",
      "to": "v52"
    },
    {
      "id": "e48",
      "from": "v1",
      "to": "v50"
    },
    {
      "id": "e49",
      "from": "v58",
      "to": "v56"
    },
    {
      "id": "e50",
      "from": "v47",
      "to": "v58"
    },
    {
      "id": "e51",
      "from": "v55",
      "to": "v53"
    }
  ]}
  
];
