# Significant Volcanic Eruptions — VisQuill Demo

An interactive world map of significant volcanic eruptions since 4360 BC,
built with [VisQuill GDK](https://www.npmjs.com/package/@visquill/visquill-gdk)
and [MapLibre GL](https://maplibre.org/). Each volcano is drawn as a stacked
bar chart, one segment per Volcanic Explosivity Index (VEI) category, sized
by eruption count within a draggable year range; a small legend decodes the
segment colors.

This is a self-contained Vite project with the eruption data already
prepared — no data pipeline needs to run to see it working.

## Prerequisites

- Node.js >= 18

## Getting started

```bash
npm install
npm run dev       # start the dev server
npm run build     # production build → dist/
npm run preview   # preview the production build locally
```

## Project structure

```
index.html          Entry HTML page
src/
  main.ts             App bootstrap: map setup, scene layout, bar chart, year slider, title panel
  map-adapter.ts       MapLibre integration + VisQuill scene mounting
  data.ts              Parses the eruption CSV into per-volcano event lists
  style.css            VisQuill element styling (SVG classes)
public/
  data/               Eruption CSV + LICENSE.txt
```

## Data sources & licenses

- **Eruptions** (`public/data/volcano-events.csv`): NOAA National Centers
  for Environmental Information (NCEI), *NCEI/WDS Global Significant
  Volcanic Eruptions Database*, doi:
  [10.7289/V5JW8BSH](https://doi.org/10.7289/V5JW8BSH). A U.S. Government
  work with unrestricted access; the CSV here is a reformatted extract of
  the public dataset. Suggested citation: National Geophysical Data Center
  / World Data Service (NGDC/WDS): NCEI/WDS Global Significant Volcanic
  Eruptions Database. NOAA National Centers for Environmental Information.
  See `public/data/LICENSE.txt`.
- **Map tiles**: [OpenFreeMap](https://openfreemap.org/) "Liberty" style,
  built from [OpenStreetMap](https://www.openstreetmap.org/copyright) data
  (© OpenStreetMap contributors, ODbL).

## Code license

The code in this repository is licensed under the [MIT License](LICENSE) —
see that file for the full text.

That grant covers this repository's own code only. It depends on
`@visquill/visquill-gdk`, which is free for non-commercial use — see that
package's license for commercial use terms. The eruption data under
`public/` is separately licensed as described above.
