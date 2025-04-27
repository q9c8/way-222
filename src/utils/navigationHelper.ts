import { Dispatch, SetStateAction } from "react";
import { graph } from "../algorithms/dijkstra";
import { Navigation, NavigationContextType } from "./types";
import { ObjectItem } from "./types";
import { graphData } from "@/store/graphData";
import { toast } from "react-toastify";
import {objects} from "@/../server/data";


export let routeLength = 0;

const findVertexByObjectId = (vertexId: string,floorNumber: number) =>
  graphData[floorNumber].vertices.find((v) => v.objectName === vertexId);

export let floorIndex=0;
const findObjectFloor = (vertexId: string) =>
  objects.find((v) => v.name === vertexId);
export function navigateToObject(
  selectedObjectId: string,
  navigation: NavigationContextType["navigation"],
  setNavigation: NavigationContextType["setNavigation"],
  selectedFloor: string,
  setSelectedFloor: (floor: string) => void
) {
  let floor=findObjectFloor(selectedObjectId)?.floor;
 
  if(floor=="ground")
  {
    floorIndex=0;
  }
  else if(floor=="first")
    {
      
    floorIndex=1;
  }else{
    
    floorIndex=2;
  }

  const target = findVertexByObjectId(selectedObjectId,floorIndex);
    
  if (!target) {
    console.error("Target not found");
    toast.error("Target not found");
    return;
  }
  if(floor!=selectedFloor){
    setSelectedFloor(floor);
    navigation.start="v1";
    setNavigation(() => ({
      start:"v1",
      end: selectedObjectId,
    }));
  }
  else{
  setNavigation((prevNavigation) => ({
    ...prevNavigation,
    end: selectedObjectId,
  }));
}
  const shortestPath = graph.calculateShortestPath(navigation.start, target.id);
  const pathString = shortestPath
    .slice(1)
    .map((vertexId) => {
      const vertex = graphData[floorIndex].vertices.find((v) => v.id === vertexId);
      return vertex ? `L${vertex.cx} ${vertex.cy}` : "";
    })
    .join(" ");

  const startVertex = graphData[floorIndex].vertices.find((v) => v.id === navigation.start);
 
  const navigationRoutePath = document.getElementById("navigation-route");
  if (navigationRoutePath && startVertex) {
    navigationRoutePath.setAttribute(
      "d",
      `M${startVertex.cx} ${startVertex.cy} ${pathString}`
    );
    console.log("navigationRoutePath", navigationRoutePath);
    navigationRoutePath.classList.remove("path-once", "path-active");
    navigationRoutePath.classList.add("path-once");
    navigationRoutePath.addEventListener(
      "animationend",
      () => {
        navigationRoutePath.classList.remove("path-once");
        navigationRoutePath.classList.add("path-active");
      },
      { once: true }
    );
  }

 
}

export function resetEdges() {
  document.getElementById("navigation-route")?.setAttribute("d", "");
  graphData[floorIndex].edges.forEach((edge) => {
    const element = document.getElementById(edge.id);
    if (element) {
      element.classList.remove("path-active");
    }
  });
}

export async function navigateWithDelay(
  objects: ObjectItem[],
  index: number,
  delay: number,
  navigation: Navigation,
  setNavigation: Dispatch<SetStateAction<Navigation>>,
  getSetSelectedFloor: () => ((floor: string) => void) | undefined
) {
  const setSelectedFloor = await waitFor(getSetSelectedFloor);

  if (index < objects.length) {
    const obj = objects[index];
    await navigateToObject(obj.name, navigation, setNavigation, setSelectedFloor);

    setTimeout(() => {
      navigateWithDelay(objects, index + 1, delay, navigation, setNavigation, getSetSelectedFloor);
    }, delay);
  }
}

function waitFor<T>(getter: () => T | undefined, interval = 100): Promise<T> {
  return new Promise((resolve) => {
    const check = () => {
      const value = getter();
      if (value !== undefined) {
        resolve(value);
      } else {
        setTimeout(check, interval);
      }
    };
    check();
  });
}
