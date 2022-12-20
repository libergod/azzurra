import * as React from 'react';

type PdfFileProps = {
  width?: string | number;
  height?: string | number;
};

const PdfFile = ({ width = 30, height = 34 }: PdfFileProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 30 34"
    >
      <path
        fill="currentColor"
        d="M29.744 7.52 22.47.244A.843.843 0 0 0 21.875 0H4.497a.843.843 0 0 0-.844.843V5.53H5.34V1.687h15.692v6.43c0 .465.38.844.843.844h6.431v16.721a.843.843 0 1 0 1.687 0V8.118a.845.845 0 0 0-.249-.599Zm-7.025-.246V2.88l4.394 4.394h-4.394ZM13.2 31.59H5.34V18.328H3.653v14.106c0 .468.38.843.844.843H13.2a.843.843 0 0 0 0-1.687ZM4.42 10.173H3.334v1.64h1.084c.631 0 .947-.274.947-.823 0-.55-.316-.818-.947-.818Z"
      />
      <path
        fill="currentColor"
        d="M16.113 7.214H1.723C.771 7.214 0 7.986 0 8.937v5.979c0 .951.771 1.723 1.723 1.723h14.39c.951 0 1.723-.772 1.723-1.723V8.937c0-.951-.772-1.723-1.723-1.723ZM5.785 12.105c-.288.268-.698.402-1.229.402H3.335v1.413c0 .303-.147.454-.44.454-.292 0-.439-.151-.439-.454V9.926c0-.298.15-.446.446-.446h1.655c.53 0 .94.133 1.228.398.289.265.433.636.433 1.112 0 .476-.144.847-.433 1.115Zm4.822 1.582c-.442.421-1.068.632-1.877.632H7.398c-.311 0-.467-.156-.467-.467V9.946c0-.31.156-.466.467-.466H8.73c.81 0 1.435.208 1.877.624.441.417.662 1.014.662 1.792s-.22 1.37-.662 1.791Zm4.416-3.507H13.04v1.366h1.84c.237 0 .356.114.356.343 0 .228-.12.357-.357.357h-1.84v1.66c0 .312-.141.467-.425.467-.302 0-.453-.155-.453-.466v-3.96c0-.312.155-.467.467-.467h2.395c.238 0 .357.114.357.343 0 .228-.119.357-.357.357Z"
      />
      <path
        fill="currentColor"
        d="M8.674 10.207H7.81v3.384h.864c1.117 0 1.675-.565 1.675-1.695 0-1.13-.558-1.689-1.675-1.689ZM29.147 28.287a.853.853 0 0 0-.853.853v2.438H17.649V29.14a.853.853 0 1 0-1.707 0v3.291c0 .472.382.854.854.854h12.351a.853.853 0 0 0 .853-.853V29.14a.853.853 0 0 0-.853-.853Z"
      />
      <path
        fill="currentColor"
        d="m24.916 26.206-1.079 1.08V21.01a.853.853 0 0 0-1.706 0v6.3l-1.105-1.105a.854.854 0 0 0-1.207 1.207l2.549 2.549a.85.85 0 0 0 1.207 0l2.549-2.55a.854.854 0 0 0-1.208-1.206Z"
      />
    </svg>
  );
};

export default PdfFile;
