import { resetEdges } from "@/utils/navigationHelper";
function FloorOption( {selectedFloor, setSelectedFloor }: { selectedFloor: string; setSelectedFloor: (floor: string) => void })
{
    function floorChange(e: React.ChangeEvent<HTMLSelectElement>) {

        const newFloor = e.target.value;
        setSelectedFloor(newFloor);
        resetEdges();
        
      }
        return(
        <select
        value={selectedFloor}
        onChange={floorChange}
        className="appearance-none pr-4 py-2 pl-4 border border-gray-300 rounded-md"
        >
        <option value="ground">Ground Floor</option>
        <option value="first">First Floor</option>
        <option value="second">Second Floor</option>
        </select>)
    }
    export default FloorOption