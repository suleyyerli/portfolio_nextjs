import { ComponentPropsWithoutRef } from "react";

export const VScodeIcon = (
  props: ComponentPropsWithoutRef<"svg"> & { size?: number }
) => {
  return (
    <svg
      width={props.size}
      height={props.size}
      viewBox="0 0 20 20"
      version="1.1"
    >
      <title>visual_studio [#145]</title>
      <desc>Created with Sketch.</desc>
      <defs></defs>
      <g
        id="Page-1"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <g
          id="Dribbble-Light-Preview"
          transform="translate(-420.000000, -7519.000000)"
          fill="#0FA8E6 "
        >
          <g id="icons" transform="translate(56.000000, 160.000000)">
            <path
              d="M373.999488,7368.989 L378.758614,7365.514 L378.760661,7372.491 L373.999488,7368.989 Z M366.382635,7371.095 L366.379563,7366.915 L368.761173,7368.991 L366.382635,7371.095 Z M383.998976,7360.865 L379.233707,7359 L370.915476,7366.911 L365.906517,7363.187 L364.002048,7364.123 L364,7373.888 L365.896278,7374.817 L370.901142,7371.096 L379.238827,7379 L384,7377.142 L383.998976,7360.865 Z"
              id="visual_studio-[#145]"
            ></path>
          </g>
        </g>
      </g>
    </svg>
  );
};
