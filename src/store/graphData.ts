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
    }
  ],
  "edges": [
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
