import React from "react";
import { IAreaProps } from "./all_area";
import "./area.css";

function Incheon({ fill, onClick, onMouseOver, onMouseLeave }: IAreaProps) {
  return (
    <polyline
      id="인천"
      className="area"
      onClick={onClick}
      onMouseOver={onMouseOver}
      onMouseLeave={onMouseLeave}
      strokeMiterlimit="1"
      points="119.063,222.159 119.063,222.351   118.105,223.309 117.53,223.692 117.146,224.267 116.763,225.226 116.188,225.609 116.188,225.8 116.38,226.567 116.38,226.759   115.997,226.375 115.614,227.333 114.847,227.717 114.655,227.717 114.081,228.675 113.889,229.631 113.889,230.398   113.697,230.973 113.505,231.74 111.972,236.339 111.781,236.339 110.822,236.531 110.631,237.105 110.439,237.489 110.248,237.681   110.631,239.214 110.439,239.98 111.014,242.472 112.355,243.047 112.547,243.238 113.122,244.388 113.889,244.771 115.039,245.538   116.38,245.538 116.38,245.729 116.38,248.221 116.38,248.796 116.572,249.371 114.847,251.288 114.847,251.479 114.847,253.971   115.039,254.737 114.655,255.119 114.081,255.31 113.697,255.31 112.355,256.077 112.164,257.227 111.972,257.802 111.781,258.568   111.589,258.951 111.397,259.526 111.206,259.91 110.631,260.676 110.248,260.868 110.056,261.06 109.672,261.443 109.289,261.826   108.906,262.401 108.331,262.976 108.139,263.359 107.373,263.934 106.798,264.509 106.606,264.893 104.69,264.701 100.857,263.551   100.474,263.743 98.365,263.167 97.599,262.593 97.407,262.401 96.832,262.018 96.641,261.826 94.724,260.101 94.533,259.91   94.149,259.526 93.574,258.951 93.958,258.951 93.191,258.185 93.191,257.993 92.808,258.185 92.424,257.802 92.041,257.035   91.85,256.269 91.658,254.737 92.041,254.354 91.85,252.821 91.274,251.862 91.083,252.246 90.7,252.821 90.508,253.396   88.975,253.012 88.591,252.821 87.633,252.054 88.017,251.288 88.975,251.862 89.167,251.288 87.825,250.521 88.4,249.563   88.017,249.371 86.675,251.862 85.529,249.946 85.333,249.563 84.95,248.988 85.146,248.988 85.717,248.988 86.483,248.604   86.1,248.221 85.717,248.604 85.333,248.796 84.95,248.413 85.146,248.221 84.95,246.879 85.146,246.879 85.529,247.071   86.1,246.879 86.675,246.879 86.867,247.455 86.675,247.838 87.058,247.838 87.825,247.646 89.167,248.029 89.741,248.221   89.933,248.221 90.316,248.413 90.316,248.413 90.125,248.029 89.55,247.646 88.975,247.263 88.591,247.071 88.591,246.305   88.975,245.921 88.208,244.388 87.825,244.58 88.017,244.963 87.633,244.58 87.441,244.58 87.825,246.113 87.633,246.496   87.058,246.688 86.1,246.688 86.1,246.496 85.717,245.921 85.333,246.113 85.529,245.729 85.529,245.155 85.912,244.196   86.1,243.813 86.1,243.622 86.675,243.238 86.675,242.855 87.25,243.047 87.25,242.28 87.633,242.28 87.825,243.047 87.058,243.43   87.058,243.622 88.208,243.238 88.4,244.005 88.4,243.238 88.975,243.047 89.167,242.664 89.358,242.472 88.208,243.047   87.825,242.088 88.208,242.088 88.4,242.472 88.4,242.088 88.783,241.705 88.975,241.705 89.358,241.514 89.933,241.322   90.316,241.514 90.316,241.13 90.7,241.13 90.891,241.322 91.083,241.705 91.466,241.897 91.658,242.088 91.466,241.514 93,240.364   93.574,240.555 93.766,240.747 93.383,238.064 93.191,238.447 92.041,239.022 88.975,238.064 89.358,234.039 89.933,234.039   91.274,234.614 92.233,234.614 93,233.848 97.407,232.123 97.024,231.548 96.257,231.165 94.341,232.89 93.574,233.081   86.675,232.89 87.25,227.909 87.058,227.717 86.1,227.909 85.146,227.909 85.146,226.759 83.229,224.267 82.079,221.776   81.696,220.817 82.462,220.435 84.567,219.859 85.717,219.285 85.912,219.093 86.483,218.709 86.867,218.518 87.058,218.518   87.058,218.326 87.441,218.135 87.633,217.56 87.825,217.368 88.591,216.985 89.167,217.368 90.508,217.751 90.508,217.368   91.083,216.602 91.274,216.218 91.274,215.835 91.658,215.26 91.85,214.685 91.85,214.493 92.424,213.918 92.616,212.577   93.958,212.193 94.149,212.193 94.341,212.193 94.533,211.619 94.724,211.427 95.107,210.66 95.299,209.702 95.299,210.085   96.257,209.894 96.641,210.469 97.407,210.469 97.982,210.66 98.365,210.852 98.94,211.427 99.132,211.811 99.898,212.193   100.09,212.577 100.665,213.152 101.24,213.535 101.624,213.535 102.198,213.918 102.965,214.493 103.348,215.26 103.923,215.643   104.498,216.218 104.307,216.602 103.923,217.368 103.923,217.751 104.307,217.56 104.69,217.176 104.881,217.176 105.265,217.176   105.265,217.368 106.798,219.093 107.373,219.668 107.756,219.859 108.906,220.051 109.098,220.243 110.631,220.051   110.822,220.435 111.397,221.393 111.589,221.584 111.972,222.351 111.972,222.542 112.355,222.351 112.931,221.584   114.464,221.009 115.23,221.201 115.614,221.393 116.572,221.584 116.763,221.584 117.53,221.584 117.722,221.584 117.913,221.393   118.872,221.967 119.063,222.159 "
      transform="translate(106.95522,19.462687)"
      style={{
        fill: fill === undefined ? "#cdcccc" : fill,
        fillOpacity: 1,
        stroke: "white",
        strokeMiterlimit: "1",
      }}
    />
  );
}

export default Incheon;
