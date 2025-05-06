import { graphData } from "@/store/graphData";
import { NavigationContextType } from "@/utils/types";
import { useContext } from "react";
import { FloorContext } from "@/pages/Map";



interface PositionsProps {
  positionRadius: number;
  handlePositionClick: (e: React.MouseEvent<SVGPathElement>) => void;
  className: string;
  navigation?: NavigationContextType["navigation"];
}

function Positions({
  positionRadius,
  handlePositionClick,
  className,
  navigation,
}: PositionsProps) {
  const positionBackgroundColor = "#4285f4";
  const positionBackgroundRadius = positionRadius + 7;
  const positonBackgroundOpacity = 0.2;
const floorContex = useContext(FloorContext);
const selectedFloor=floorContex?.selectedFloor;
  const startVertex = graphData[getFloorIndex(selectedFloor || "ground")].vertices.find(
    (v) => v.id === navigation?.start
  ) || graphData[getFloorIndex(selectedFloor || "ground")].vertices.find(
    (v) => v.id === "v1"
  );
  
  function getFloorIndex(floor: string): number {
    if (floor === "ground") return 0;
    if (floor === "first") return 1;
    if (floor === "second") return 2;
    return 0;
  }
  
  function isActivePosition(vertexId: string) {
    return navigation?.start === vertexId;
  }
  return (
    <g id="Vertexes">
      {/* Background circle for Google Maps like look */}
      <circle
        id="background-circle"
        cx={startVertex?.cx}
        cy={startVertex?.cy}
        fill={positionBackgroundColor}
        opacity={positonBackgroundOpacity}
        r={positionBackgroundRadius}
      />
      {graphData[getFloorIndex(selectedFloor || "ground")].vertices.map((vertex) => (
        <circle
          // only allow click on positions that are not referring to an object
          onClick={vertex.objectName ? () => {} : handlePositionClick}
          key={vertex.id}
          id={vertex.id}
          // show only positions that are not referring to an object (e.g. shops, restrooms, etc.)
          className={`position ${vertex.objectName ? "opacity-0" : className} ${isActivePosition(vertex.id) && "position-active opacity-100"}`}
          cx={vertex.cx}
          cy={vertex.cy}
          r={positionRadius}
        />
      ))}
      {/* Circle animation */}
      <circle
        id="circle-animation"
        cx={startVertex?.cx}
        cy={startVertex?.cy}
        fill="none"
        stroke="white"
        strokeWidth={2}
        r={positionRadius}
      >
        <animate
          attributeName="stroke-width"
          values="1;3;1"
          dur="3s"
          repeatCount="indefinite"
        />
      </circle>
    </g>
  );
}

export default Positions;
