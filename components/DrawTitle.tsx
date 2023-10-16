"use client";
import { motion } from "framer-motion";

export default function DrawTitle() {
  const icon = {
    hidden: {
      // opacity: 0,
      pathLength: 0,
      // fill: "rgba(0, 0, 0, 0)"
    },
    visible: {
      // opacity: 1,
      pathLength: 1,
      // fill: "rgba(0, 0, 0, 1)"
    }
  };

  return (
    <motion.svg width="862" height="71" viewBox="0 0 862 71" fill="none" xmlns="http://www.w3.org/2000/svg">
    <motion.path variants={icon}
        initial="hidden"
        animate="visible"
        transition={{
          default: { duration: 2, ease: "easeInOut" },
          fill: { duration: 2, ease: [1, 0, 0.8, 1] }
        }} fill-rule="evenodd" clip-rule="evenodd" d="M242.2 47.6648C243.886 51.1307 246.149 53.7538 248.99 55.5341C251.85 57.3144 255.041 58.2045 258.564 58.2045C262.087 58.2045 265.268 57.3144 268.109 55.5341C270.969 53.7538 273.232 51.1307 274.899 47.6648C276.585 44.1989 277.428 39.947 277.428 34.9091C277.428 29.8712 276.585 25.6193 274.899 22.1534C273.232 18.6875 270.969 16.0644 268.109 14.2841C265.268 12.5038 262.087 11.6136 258.564 11.6136C255.041 11.6136 251.85 12.5038 248.99 14.2841C246.149 16.0644 243.886 18.6875 242.2 22.1534C240.534 25.6193 239.7 29.8712 239.7 34.9091C239.7 39.947 240.534 44.1989 242.2 47.6648ZM270.393 24.3203L270.398 24.3302L270.403 24.3402C271.671 26.9488 272.428 30.4053 272.428 34.9091C272.428 39.4129 271.671 42.8694 270.403 45.478L270.398 45.4879L270.393 45.4979C269.078 48.2326 267.411 50.0789 265.467 51.2894L265.461 51.2933L265.454 51.2973C263.45 52.553 261.197 53.2045 258.564 53.2045C255.933 53.2045 253.667 52.5543 251.639 51.2934C249.71 50.0827 248.038 48.2318 246.702 45.4881C245.447 42.8751 244.7 39.4142 244.7 34.9091C244.7 30.404 245.447 26.943 246.702 24.3301C248.038 21.5864 249.71 19.7355 251.639 18.5248C253.667 17.2639 255.933 16.6136 258.564 16.6136C261.197 16.6136 263.45 17.2652 265.454 18.5209L265.461 18.5249L265.467 18.5288C267.411 19.7393 269.078 21.5856 270.393 24.3203Z" fill="currentColor"/>
    <motion.path variants={icon}
        initial="hidden"
        animate="visible"
        transition={{
          default: { duration: 2, ease: "easeInOut" },
          fill: { duration: 2, ease: [1, 0, 0.8, 1] }
        }} fill-rule="evenodd" clip-rule="evenodd" d="M285.402 53.0391C288.029 47.7385 289.246 41.642 289.246 34.9091C289.246 28.1762 288.029 22.0797 285.402 16.7791C282.816 11.5628 279.178 7.38395 274.46 4.42377C269.73 1.45615 264.38 0.0227203 258.564 0.0227203C252.748 0.0227203 247.397 1.45615 242.668 4.42377C237.95 7.38395 234.312 11.5628 231.726 16.7791C229.098 22.0797 227.882 28.1762 227.882 34.9091C227.882 41.642 229.098 47.7385 231.726 53.0391C234.312 58.2553 237.95 62.4342 242.668 65.3944C247.397 68.362 252.748 69.7955 258.564 69.7955C264.38 69.7955 269.73 68.362 274.46 65.3944C279.178 62.4342 282.816 58.2553 285.402 53.0391ZM284.246 34.9091C284.246 41.0454 283.138 46.3485 280.922 50.8182C278.706 55.2879 275.666 58.7348 271.803 61.1591C267.939 63.5833 263.526 64.7955 258.564 64.7955C253.602 64.7955 249.189 63.5833 245.325 61.1591C241.462 58.7348 238.422 55.2879 236.206 50.8182C233.99 46.3485 232.882 41.0454 232.882 34.9091C232.882 28.7727 233.99 23.4697 236.206 19C238.422 14.5303 241.462 11.0833 245.325 8.65908C249.189 6.23484 253.602 5.02272 258.564 5.02272C263.526 5.02272 267.939 6.23484 271.803 8.65908C275.666 11.0833 278.706 14.5303 280.922 19C283.138 23.4697 284.246 28.7727 284.246 34.9091Z" fill="currentColor"/>
    <motion.path variants={icon}
        initial="hidden"
        animate="visible"
        transition={{
          default: { duration: 2, ease: "easeInOut" },
          fill: { duration: 2, ease: [1, 0, 0.8, 1] }
        }} fill-rule="evenodd" clip-rule="evenodd" d="M632.125 29H615.039L614.218 25.007C613.918 23.5507 613.422 22.3976 612.791 21.4678L612.779 21.4503L612.767 21.4326C612.079 20.4007 611.26 19.5612 610.296 18.8817L610.266 18.8607L610.237 18.8391C609.251 18.122 608.146 17.5744 606.892 17.201C605.593 16.8141 604.219 16.6136 602.751 16.6136C600.121 16.6136 597.854 17.2639 595.826 18.5248C593.897 19.7355 592.225 21.5864 590.889 24.3301C589.635 26.943 588.888 30.404 588.888 34.9091C588.888 39.4142 589.635 42.8751 590.889 45.4881C592.225 48.2318 593.897 50.0827 595.826 51.2934C597.854 52.5543 600.121 53.2045 602.751 53.2045C604.219 53.2045 605.593 53.004 606.892 52.6172C608.16 52.2394 609.275 51.6932 610.266 50.986C611.246 50.282 612.075 49.4243 612.767 48.3856L612.775 48.3739C613.424 47.4066 613.921 46.2387 614.219 44.8021L615.046 40.8182H632.131L631.083 46.696C630.458 50.2024 629.298 53.4446 627.556 56.3634C625.853 59.2179 623.711 61.6812 621.137 63.7171L621.126 63.7258L621.115 63.7345C618.563 65.7301 615.708 67.2388 612.584 68.2656C609.463 69.2976 606.175 69.7955 602.751 69.7955C596.935 69.7955 591.585 68.362 586.855 65.3944C582.137 62.4342 578.5 58.2553 575.914 53.0391C573.286 47.7385 572.07 41.642 572.07 34.9091C572.07 28.1761 573.286 22.0797 575.914 16.7791C578.5 11.5629 582.137 7.38397 586.855 4.42377C591.585 1.45615 596.935 0.0227203 602.751 0.0227203C606.175 0.0227203 609.463 0.52056 612.584 1.55253C615.715 2.58151 618.573 4.10353 621.126 6.12082C623.705 8.13918 625.848 10.5944 627.552 13.4468C629.301 16.3571 630.46 19.606 631.084 23.1275L632.125 29ZM623.263 16.017C621.861 13.6686 620.119 11.6799 618.036 10.0511C615.952 8.40341 613.613 7.15341 611.019 6.30113C608.443 5.44886 605.687 5.02272 602.751 5.02272C597.789 5.02272 593.376 6.23484 589.513 8.65908C585.649 11.0833 582.609 14.5303 580.394 19C578.178 23.4697 577.07 28.7727 577.07 34.9091C577.07 41.0454 578.178 46.3485 580.394 50.8182C582.609 55.2879 585.649 58.7348 589.513 61.1591C593.376 63.5833 597.789 64.7955 602.751 64.7955C605.687 64.7955 608.443 64.3693 611.019 63.517C613.613 62.6648 615.952 61.4242 618.036 59.7955C620.119 58.1477 621.861 56.1496 623.263 53.8011C623.826 52.8573 624.319 51.863 624.741 50.8182C625.37 49.2633 625.843 47.5966 626.161 45.8182H619.115C618.698 47.8258 617.969 49.6061 616.928 51.1591C615.905 52.6932 614.655 53.9905 613.178 55.0511C611.719 56.0928 610.1 56.8788 608.32 57.4091C606.539 57.9394 604.683 58.2045 602.751 58.2045C599.229 58.2045 596.037 57.3144 593.178 55.5341C590.337 53.7538 588.073 51.1307 586.388 47.6648C584.721 44.1989 583.888 39.947 583.888 34.9091C583.888 29.8712 584.721 25.6193 586.388 22.1534C588.073 18.6875 590.337 16.0644 593.178 14.2841C596.037 12.5038 599.229 11.6136 602.751 11.6136C604.683 11.6136 606.539 11.8788 608.32 12.4091C610.1 12.9394 611.719 13.7348 613.178 14.7955C614.655 15.8371 615.905 17.125 616.928 18.6591C617.969 20.1932 618.698 21.9735 619.115 24H626.161C625.844 22.2155 625.373 20.5488 624.747 19C624.323 17.9517 623.829 16.9574 623.263 16.017Z" fill="currentColor"/>
    <motion.path variants={icon}
        initial="hidden"
        animate="visible"
        transition={{
          default: { duration: 2, ease: "easeInOut" },
          fill: { duration: 2, ease: [1, 0, 0.8, 1] }
        }} fill-rule="evenodd" clip-rule="evenodd" d="M843.726 20.9516L844.249 25.3636H860.674L860.507 20.2024C860.38 16.2702 859.14 12.6596 856.799 9.51574C854.535 6.45124 851.524 4.12818 847.932 2.49355C844.261 0.803473 840.199 0.0227203 835.851 0.0227203C831.518 0.0227203 827.443 0.821245 823.71 2.51043C819.997 4.18011 816.9 6.60218 814.566 9.80541L814.561 9.81102C812.125 13.1648 810.964 17.0563 810.964 21.2727C810.964 26.4539 812.779 31.016 816.568 34.4799C819.939 37.5624 824.294 39.7365 829.356 41.1917L836.54 43.2445L836.558 43.2494C838.409 43.7635 840.097 44.354 841.631 45.0136C842.841 45.5341 843.621 46.1246 844.134 46.7004C844.248 46.8285 844.487 47.1394 844.487 48.0909C844.487 49.1442 844.206 49.8963 843.689 50.5588C843.045 51.3651 842.088 52.1168 840.624 52.7283C839.176 53.315 837.422 53.6591 835.283 53.6591C833.481 53.6591 831.879 53.3962 830.441 52.9112C829.18 52.4628 828.262 51.8434 827.567 51.0966C827.111 50.5767 826.736 49.8291 826.628 48.5706L826.234 44H809.004L809.386 49.3562C809.674 53.3843 810.932 57.0786 813.235 60.2929L813.243 60.3035L813.251 60.3139C815.569 63.5141 818.69 65.916 822.431 67.5759L822.441 67.5806C826.264 69.2664 830.59 70.0227 835.283 70.0227C840.288 70.0227 844.865 69.1873 848.829 67.2907C852.676 65.4589 855.829 62.8699 858.035 59.439C860.225 56.0606 861.305 52.2708 861.305 48.2045C861.305 44.7989 860.605 41.5618 858.924 38.7414C857.462 36.287 855.565 34.2212 853.241 32.6064C851.207 31.1635 849.045 30.0047 846.757 29.1488C844.787 28.4056 842.941 27.8004 841.227 27.3498L835.319 25.7591L835.305 25.7555C834.391 25.515 833.351 25.1926 832.178 24.7793C831.221 24.4253 830.305 23.982 829.428 23.4467C828.836 23.0703 828.389 22.6392 828.041 22.1479C827.927 21.9638 827.783 21.6218 827.783 20.9318C827.783 20.1075 827.993 19.4905 828.405 18.9179C828.889 18.2712 829.635 17.6414 830.851 17.1103C832.033 16.602 833.585 16.2727 835.624 16.2727C838.383 16.2727 840.352 16.8885 841.801 17.8393C842.99 18.6201 843.559 19.5402 843.726 20.9516ZM830.737 36.3864C826.192 35.0795 822.593 33.214 819.942 30.7898C817.29 28.3655 815.964 25.1932 815.964 21.2727C815.964 18.0151 816.845 15.1742 818.606 12.75C820.387 10.3068 822.773 8.41287 825.766 7.06818C828.777 5.70454 832.139 5.02272 835.851 5.02272C839.601 5.02272 842.934 5.69507 845.851 7.03977C848.767 8.36552 851.078 10.1837 852.783 12.4943C853.46 13.4025 854.012 14.3589 854.437 15.3636C855.095 16.9152 855.452 18.5818 855.51 20.3636H848.692C848.351 17.4848 846.968 15.25 844.544 13.6591C842.12 12.0682 839.146 11.2727 835.624 11.2727C833.048 11.2727 830.794 11.6894 828.862 12.5227C826.949 13.3561 825.453 14.5019 824.374 15.9602C823.313 17.4186 822.783 19.0758 822.783 20.9318C822.783 22.4848 823.152 23.8201 823.891 24.9375C824.648 26.036 825.614 26.9545 826.788 27.6932C827.963 28.4129 829.194 29.0095 830.481 29.483C831.769 29.9375 832.953 30.3068 834.033 30.5909L839.942 32.1818C841.457 32.5795 843.142 33.1288 844.999 33.8295C846.874 34.5303 848.663 35.4867 850.368 36.6989C852.091 37.892 853.512 39.4261 854.629 41.3011C855.747 43.1761 856.305 45.4773 856.305 48.2045C856.305 51.3485 855.481 54.1894 853.834 56.7273C852.205 59.2651 849.819 61.2822 846.675 62.7784C843.55 64.2746 839.752 65.0227 835.283 65.0227C831.116 65.0227 827.508 64.3504 824.459 63.0057C821.428 61.661 819.042 59.786 817.3 57.3807C816.546 56.3281 815.935 55.2012 815.467 54C814.866 52.4561 814.501 50.7895 814.374 49H821.646C821.836 51.197 822.574 53.0151 823.862 54.4545C825.169 55.875 826.817 56.9356 828.805 57.6364C830.813 58.3182 832.972 58.6591 835.283 58.6591C837.972 58.6591 840.387 58.2235 842.527 57.3523C844.667 56.4621 846.362 55.2311 847.612 53.6591C848.862 52.0682 849.487 50.2121 849.487 48.0909C849.487 46.1591 848.947 44.5871 847.868 43.375C846.788 42.1629 845.368 41.178 843.606 40.4205C841.845 39.6629 839.942 39 837.896 38.4318L830.737 36.3864Z" fill="currentColor"/>
    <motion.path variants={icon}
        initial="hidden"
        animate="visible"
        transition={{
          default: { duration: 2, ease: "easeInOut" },
          fill: { duration: 2, ease: [1, 0, 0.8, 1] }
        }} fill-rule="evenodd" clip-rule="evenodd" d="M693.364 17.0682H711.659V69H728.705V17.0682H747V0.818176H693.364V17.0682ZM716.659 12.0682H698.364V5.81818H742V12.0682H723.705V64H716.659V12.0682Z" fill="currentColor"/>
    <motion.path variants={icon}
        initial="hidden"
        animate="visible"
        transition={{
          default: { duration: 2, ease: "easeInOut" },
          fill: { duration: 2, ease: [1, 0, 0.8, 1] }
        }} fill-rule="evenodd" clip-rule="evenodd" d="M462.53 69H508.098V52.75H479.575V42.9773H505.825V26.7273H479.575V17.0682H507.643V0.818176H462.53V69ZM474.575 57.75H503.098V64H467.53V5.81818H502.643V12.0682H474.575V31.7273H500.825V37.9773H474.575V57.75Z" fill="currentColor"/>
    <motion.path variants={icon}
        initial="hidden"
        animate="visible"
        transition={{
          default: { duration: 2, ease: "easeInOut" },
          fill: { duration: 2, ease: [1, 0, 0.8, 1] }
        }} fill-rule="evenodd" clip-rule="evenodd" d="M377.365 0.818176H394.411V47.4091C394.411 51.7208 393.619 55.7174 391.791 59.1954C389.985 62.6313 387.368 65.3384 383.981 67.1743C380.638 68.9859 376.861 69.7955 372.82 69.7955C369.026 69.7955 365.456 69.1045 362.215 67.5952L362.2 67.5886L362.186 67.5819C358.93 66.0407 356.252 63.784 354.296 60.8106C352.261 57.718 351.342 54.163 351.342 50.3636V45.3636H368.274V50.3636C368.274 51.1201 368.442 51.5702 368.643 51.8879C368.935 52.2986 369.356 52.6777 370.045 53.004C370.72 53.3237 371.609 53.5455 372.82 53.5455C374.142 53.5455 374.931 53.2716 375.418 52.9796C375.882 52.7012 376.306 52.2743 376.666 51.4718L376.671 51.4599L376.677 51.448C377.062 50.6011 377.365 49.3145 377.365 47.4091V0.818176ZM364.496 54.6818C363.681 53.4508 363.274 52.0114 363.274 50.3636H356.342C356.342 52.1827 356.608 53.8494 357.14 55.3636C357.477 56.3246 357.922 57.2243 358.473 58.0625C359.893 60.2216 361.844 61.8883 364.325 63.0625C366.806 64.2178 369.638 64.7955 372.82 64.7955C376.191 64.7955 379.117 64.1231 381.598 62.7784C384.079 61.4337 386.001 59.464 387.365 56.8693C388.729 54.2746 389.411 51.1212 389.411 47.4091V5.81818H382.365V47.4091C382.365 49.8144 381.986 51.8504 381.229 53.517C380.49 55.1648 379.41 56.4148 377.99 57.267C376.57 58.1193 374.846 58.5455 372.82 58.5455C370.982 58.5455 369.344 58.2045 367.905 57.5227C366.465 56.8409 365.329 55.8939 364.496 54.6818Z" fill="currentColor"/>
    <motion.path variants={icon}
        initial="hidden"
        animate="visible"
        transition={{
          default: { duration: 2, ease: "easeInOut" },
          fill: { duration: 2, ease: [1, 0, 0.8, 1] }
        }} fill-rule="evenodd" clip-rule="evenodd" d="M151.176 29.6818C152.047 27.9962 152.483 25.9886 152.483 23.6591C152.483 21.3295 152.047 19.2936 151.176 17.5511C150.305 15.8087 148.913 14.464 147 13.517C145.087 12.5511 142.559 12.0682 139.415 12.0682H127.028V34.9091H139.528C142.634 34.9091 145.134 34.4545 147.028 33.5455C147.144 33.4905 147.258 33.4342 147.369 33.3765C147.68 33.2162 147.975 33.0453 148.256 32.8636C149.545 32.0286 150.518 30.968 151.176 29.6818ZM132.028 29.9091H139.528C142.215 29.9091 143.891 29.5055 144.865 29.0378L144.873 29.0336L144.882 29.0295C145.938 28.5277 146.438 27.965 146.724 27.4054L146.729 27.3957L146.734 27.3861C147.164 26.5538 147.483 25.369 147.483 23.6591C147.483 21.9552 147.166 20.7122 146.704 19.7872C146.367 19.1126 145.818 18.5109 144.782 17.998L144.764 17.9892L144.746 17.9803C143.782 17.4933 142.114 17.0682 139.415 17.0682H132.028V29.9091Z" fill="currentColor"/>
    <motion.path variants={icon}
        initial="hidden"
        animate="visible"
        transition={{
          default: { duration: 2, ease: "easeInOut" },
          fill: { duration: 2, ease: [1, 0, 0.8, 1] }
        }} fill-rule="evenodd" clip-rule="evenodd" d="M114.983 69V0.818176H139.642C144.707 0.818176 149.311 1.67635 153.168 3.72541C156.901 5.69019 159.834 8.50303 161.747 12.1723C163.566 15.6636 164.415 19.5325 164.415 23.6591C164.415 27.7841 163.566 31.6463 161.733 35.1149C160.217 37.9823 158.072 40.3182 155.407 42.1293L170.128 69H150.521L138.268 46.2727H132.028V69H114.983ZM127.028 41.2727H139.756C140.26 41.2727 140.754 41.2634 141.238 41.2447L153.506 64H161.688L148.544 40.0086C149.368 39.7284 150.141 39.4017 150.864 39.0284C151.624 38.6307 152.333 38.1939 152.991 37.718C154.838 36.3805 156.279 34.734 157.312 32.7784C158.714 30.1269 159.415 27.0871 159.415 23.6591C159.415 20.2311 158.714 17.1723 157.312 14.483C155.911 11.7936 153.752 9.68181 150.835 8.14772C147.919 6.59469 144.188 5.81818 139.642 5.81818H119.983V64H127.028V41.2727Z" fill="currentColor"/>
    <motion.path variants={icon}
        initial="hidden"
        animate="visible"
        transition={{
          default: { duration: 2, ease: "easeInOut" },
          fill: { duration: 2, ease: [1, 0, 0.8, 1] }
        }} fill-rule="evenodd" clip-rule="evenodd" d="M12.2471 36.5V12.0682H24.6335C27.7964 12.0682 30.3343 12.5985 32.2471 13.6591C34.16 14.7008 35.5426 16.1401 36.3949 17.9773C37.2661 19.8144 37.7017 21.8977 37.7017 24.2273C37.7017 26.5568 37.2661 28.6496 36.3949 30.5057C35.5426 32.3428 34.1695 33.8011 32.2756 34.8807C30.3816 35.9602 27.8721 36.5 24.7471 36.5H12.2471ZM17.2471 31.5V17.0682H24.6335C27.3021 17.0682 28.9095 17.5257 29.8226 18.0319L29.8392 18.0411L29.8559 18.0502C30.9027 18.6202 31.4929 19.2919 31.8592 20.0815L31.8681 20.1006L31.8771 20.1197C32.3876 21.1961 32.7017 22.5308 32.7017 24.2273C32.7017 25.9226 32.3879 27.275 31.8687 28.3811L31.8639 28.3913L31.8592 28.4015C31.4781 29.2229 30.8637 29.9302 29.7995 30.5368C28.9173 31.0396 27.358 31.5 24.7471 31.5H17.2471Z" fill="currentColor"/>
    <motion.path variants={icon}
        initial="hidden"
        animate="visible"
        transition={{
          default: { duration: 2, ease: "easeInOut" },
          fill: { duration: 2, ease: [1, 0, 0.8, 1] }
        }} fill-rule="evenodd" clip-rule="evenodd" d="M0.201691 69H17.2471V47.75H24.9744C30.0699 47.75 34.7091 46.8273 38.5823 44.6249L38.593 44.6188L38.6037 44.6126C42.2942 42.4899 45.1572 39.547 47.0095 35.7976C48.7857 32.2402 49.6335 28.3526 49.6335 24.2273C49.6335 20.0976 48.7838 16.2098 46.9973 12.6609C45.1166 8.92485 42.2239 6.01239 38.5086 3.93375C34.6333 1.73516 29.9782 0.818176 24.8608 0.818176H0.201691V69ZM12.2471 42.75V64H5.20169V5.81818H24.8608C29.4252 5.81818 33.1562 6.64204 36.054 8.28977C38.9706 9.91856 41.1297 12.125 42.5312 14.9091C43.9328 17.6932 44.6335 20.7992 44.6335 24.2273C44.6335 27.6553 43.9328 30.7708 42.5312 33.5739C41.1487 36.3769 39.0085 38.6117 36.1108 40.2784C33.2131 41.9261 29.5009 42.75 24.9744 42.75H12.2471Z" fill="currentColor"/>
    </motion.svg>
  )
}