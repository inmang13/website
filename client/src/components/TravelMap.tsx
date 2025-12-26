import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { X } from "lucide-react";

interface TravelLocation {
  id: string;
  city: string;
  country: string;
  lat: number;       // Real Latitude: -90 to 90
  lng: number;       // Real Longitude: -180 to 180
  year?: string;
  description: string;
  category?: string;
}

export default function TravelMap({ locations }: { locations: TravelLocation[] }) {
  const [selectedLocation, setSelectedLocation] = useState<TravelLocation | null>(null);
  const [rainTileUrl, setRainTileUrl] = useState<string>("");

  // Helper to convert Lat/Lng to Percentages for the CSS 'left' and 'top'
  // This assumes your SVG map is a standard Equirectangular projection
  const getPos = (lat: number, lng: number) => {
    const x = ((lng + 180) / 360) * 100;
    const y = ((90 - lat) / 180) * 100;
    return { x, y };
  };

  useEffect(() => {
    fetch("https://api.rainviewer.com/public/weather-maps")
      .then((res) => res.json())
      .then((data) => {
        const latestTime = data.radar.past[data.radar.past.length - 1].time;
        setRainTileUrl(`https://tilecache.rainviewer.com/v2/radar/${latestTime}/512/2/`);
      })
      .catch((err) => console.error("Weather data fetch error:", err));
  }, []);

  return (
    <section id="travel" className="py-20 md:py-32 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground">
              Where in the world is it raining?
            </h2>
            <p className="text-muted-foreground mt-2 max-w-xl">
              Live precipitation radar overlaid on a log of my professional and academic milestones.
            </p>
          </div>
          
          <div className="flex items-center gap-3 px-3 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/5 text-[11px] font-mono text-blue-500 tracking-tighter">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            SYSTEMS LIVE: RADAR_V2.0
          </div>
        </div>

        <div 
          className="relative w-full h-[500px] md:h-[600px] bg-slate-950 rounded-lg overflow-hidden border border-slate-800 shadow-2xl"
          style={{
            backgroundImage: `radial-gradient(circle, #334155 1px, transparent 1px)`,
            backgroundSize: '32px 32px'
          }}
        >
          {/* LAYER 1: World Map Silhouette */}
          <svg
            viewBox="0 0 2000 1001"
            className="absolute inset-0 w-full h-full opacity-20 text-slate-400 pointer-events-none"
            preserveAspectRatio="none" // Ensure SVG fills the container exactly for coordinate mapping
          >
            <path
              fill="currentColor"
              d="M1846 517l-6-30-33-6-14-27 30-25-16-34 43-19 18-30 31 16 25-21 15 8 1-37 22-11 9 17 35-3 6 18 42 20-3 24 31 30-23 24 17 29-4 32-28 14-11 31-37 8-29-18-32 6-28-22-30 4zM1553 335l38-17 10 21 44 13 14 28 46 5 23 26 53 11 9 35-37 25-4 31-27 7-32-14-29 6-30-23-34 4-25-32-36-8-7-38-33-23 12-30zm-351-80l41-20 38 13 44-7 31 27 46 9 19 33 51 11 5 27-34 23-4 37-27 4-32-14-34 7-29-20-33 5-28-32-37-7-9-36-30-18 6-30zm-516 21l52-28 44 14 58-9 32 28 47 8 27 36 53 9 6 33-42 27-6 38-30 6-39-18-37 7-28-22-32 4-29-30-40-8-9-38-28-22 4-33zm-474 85l34-26 44 6 42-19 28 22 44 5 19 33 46 9 7 27-38 26-3 31-26 7-28-14-27 4-25-23-29 3-23-26-32-5-8-30-25-21 7-29zm357 234l35-24 47 9 43-18 33 27 45 6 17 32 50 9 9 28-33 27-7 36-31 6-36-17-33 8-27-21-28 6-27-29-37-8-8-31-29-22 8-30zm796-48l44-24 43 20 38-9 30 26 41 6 17 29 48 8 6 27-33 25-7 33-28 8-33-14-31 7-26-18-29 5-25-27-35-7-9-33-27-19 5-29z"
            />
          </svg>

          {/* LAYER 2: Rain Tiling */}
          <div className="absolute inset-0 pointer-events-none mix-blend-screen opacity-60">
            <div className="grid grid-cols-4 grid-rows-2 h-full w-full">
              {[...Array(8)].map((_, i) => (
                <div 
                  key={i} 
                  className="w-full h-full bg-contain bg-no-repeat"
                  style={{ backgroundImage: rainTileUrl ? `url(${rainTileUrl}${i % 4}/${Math.floor(i / 4)}.png)` : 'none' }}
                />
              ))}
            </div>
          </div>

          {/* LAYER 3: Interactive Pins */}
          {locations.map((location) => {
            const { x, y } = getPos(location.lat, location.lng);
            return (
              <button
                key={location.id}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 group z-30"
                style={{ left: `${x}%`, top: `${y}%` }}
                onClick={() => setSelectedLocation(location)}
              >
                <div className="relative flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-full border-2 border-blue-500 group-hover:border-white transition-all shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
                  <div className="absolute left-5 px-2 py-0.5 bg-slate-900/80 border border-slate-700 rounded text-[10px] font-mono text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    {location.city}
                  </div>
                </div>
              </button>
            );
          })}

          {/* LAYER 4: Technical Info Card */}
          {selectedLocation && (
            <div className="absolute bottom-6 right-6 w-72 z-40 animate-in fade-in slide-in-from-right-4">
              <Card className="shadow-2xl border-slate-700 bg-slate-900/95 backdrop-blur-md text-slate-100">
                <CardContent className="p-4">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex flex-col">
                      <span className="text-[10px] font-mono text-blue-400 tracking-tighter uppercase">
                        {selectedLocation.category || "Station Detail"}
                      </span>
                      <h3 className="text-lg font-bold leading-none mt-1 uppercase tracking-tight">
                        {selectedLocation.city}
                      </h3>
                    </div>
                    <button onClick={() => setSelectedLocation(null)} className="text-slate-400 hover:text-white">
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed font-light mb-4">
                    {selectedLocation.description}
                  </p>
                  <div className="flex justify-between items-center pt-3 border-t border-slate-800 text-[10px] font-mono text-slate-500">
                    <div className="flex flex-col">
                      <span>LAT: {selectedLocation.lat.toFixed(4)}°</span>
                      <span>LNG: {selectedLocation.lng.toFixed(4)}°</span>
                    </div>
                    <div className="text-right italic">
                      {selectedLocation.year}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}