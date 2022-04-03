const { readFileSync } = require("fs");
const netcdf = require("netcdfjs");
const file = require("./magic.nc");

export default function loadData() {
  const data = readFileSync(file);

  let reader = new netcdf.NetCDFReader(data);
  const chl = reader.getDataVariable("CHL");
  const time = reader.getDataVariable("time");
  const lat = reader.getDataVariable("lat");
  const lon = reader.getDataVariable("lon");

  const chlStep = chl.length / time.length;
  let layerData = [];
  for (let k = 0; k < time.length; k++) {
    const day = chl.slice(k * chlStep, (k + 1) * chlStep);
    let imageArray = [];
    for (let j = 0; j < lat.length; j++) {
      const row = day.slice(j * lon.length, (j + 1) * lon.length);
      let scaledRow = [];
      row.forEach((value) => {
        if (value === -999) {
          scaledRow.push(null);
        } else {
          scaledRow.push(value);
        }
      });
      imageArray.push(scaledRow);
    }
    layerData.push(imageArray);
  }
  return layerData;
}
