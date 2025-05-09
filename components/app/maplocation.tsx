import { MapProvider } from "@/providers/map-provider";
import { MapComponent } from "../map";

const MapLocation = () => {

  return (
    <MapProvider>
      <MapComponent/>
    </MapProvider>
  );
}

export default MapLocation;