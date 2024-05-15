import { ComponentPropsWithoutRef } from "react";

export const EtudeIcon = (
  props: ComponentPropsWithoutRef<"svg"> & { size?: number }
) => {
  return (
    <svg
      width={props.size}
      height={props.size}
      viewBox="0 0 64 64"
      enable-background="new 0 0 64 64"
    >
      <g>
        <g>
          <path
            fill="#394240"
            d="M58.902,0.152L32,7.84L5.098,0.152C3.898-0.188,2.594,0.051,1.59,0.805C0.59,1.562,0,2.746,0,4v48
          c0,1.785,1.184,3.355,2.902,3.848l28,8C31.262,63.949,31.629,64,32,64s0.738-0.051,1.098-0.152l28-8
          C62.816,55.355,64,53.785,64,52V4c0-1.254-0.59-2.438-1.59-3.195C61.406,0.051,60.105-0.188,58.902,0.152z M8,9.305l20,5.715
          v39.676L8,48.984V9.305z M56,48.984l-20,5.711V15.02l20-5.715V48.984z"
          />
        </g>
        <g>
          <polygon
            fill="#F9EBB2"
            points="8,48.984 28,54.695 28,15.02 8,9.305 "
          />
          <polygon
            fill="#F9EBB2"
            points="36,15.02 36,54.695 56,48.984 56,9.305 "
          />
        </g>
        <polygon
          opacity="0.15"
          fill="#231F20"
          points="36,15.02 36,54.695 56,48.984 56,9.305 "
        />
      </g>
    </svg>
  );
};
