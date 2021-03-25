// @flow
import * as React from "react";

import randomID from "../../utils/randomID";
import IllustrationWrapper from "./IllustrationWrapper";
import type { Props } from "../index";

const SmartPassV5 = ({ primary, secondary, ...props }: Props): React.Node => {
  const clipID = React.useMemo(() => randomID("clip"), []);
  const randomIDLinear = React.useMemo(() => randomID("linear1"), []);
  const randomIDLinear2 = React.useMemo(() => randomID("linear2"), []);
  const randomIDLinear3 = React.useMemo(() => randomID("linear3"), []);

  return (
    <IllustrationWrapper {...props} viewBox="0 0 1942 1250">
      <g clipPath={`url(#${clipID})`}>
        <path
          d="M1722.55 492.33V784.45C1722.55 785.9 1723.66 787.35 1725.88 788.45C1728.41 789.541 1731.13 790.104 1733.88 790.104C1736.63 790.104 1739.35 789.541 1741.88 788.45C1744.1 787.34 1745.21 785.89 1745.21 784.45V492.33H1722.55Z"
          fill="#CAD5DF"
        />
        <path
          d="M1733.91 498.01C1740.18 498.01 1745.26 495.467 1745.26 492.33C1745.26 489.193 1740.18 486.65 1733.91 486.65C1727.64 486.65 1722.56 489.193 1722.56 492.33C1722.56 495.467 1727.64 498.01 1733.91 498.01Z"
          fill="#E5EAEE"
        />
        <path
          opacity="0.5"
          d="M146.9 360.31L0 427.55L1692.9 1249.2L1835.08 1176.3L146.9 360.31Z"
          fill={`url(#${randomIDLinear})`}
        />
        <path
          opacity="0.5"
          d="M187.1 211.52L40.2 278.75L1733.11 1100.41L1875.28 1027.51L187.1 211.52Z"
          fill={`url(#${randomIDLinear2})`}
        />
        <path
          opacity="0.5"
          d="M252.9 71.45L106 138.68L1798.91 960.34L1941.08 887.44L252.9 71.45Z"
          fill={`url(#${randomIDLinear3})`}
        />
        <path
          d="M1032.88 869.26C963.63 870.05 897.26 856.62 842.32 833.82L1241.22 559.71C1292.05 587.65 1328.6 622.21 1339.1 654.83C1378.69 777.81 1247.31 866.8 1032.88 869.26Z"
          fill="#BAC7D5"
        />
        <path
          d="M1389.26 650.45C1363.42 570.2 1201.65 479.86 1034.26 474.18C770.72 465.25 649.69 572.45 649.69 680.91C649.69 750.91 714.32 815.81 809.57 856.32C873.99 883.71 952.4 899.94 1034.3 899C1282.85 896.16 1435.15 793 1389.26 650.45ZM1032.88 869.26C963.63 870.05 897.26 856.62 842.32 833.82C758.32 798.99 701.09 742.29 701.09 681.11C701.09 587.56 805.5 495.11 1032.88 502.78C1109.21 505.37 1184.2 528.37 1241.22 559.71C1292.05 587.65 1328.6 622.21 1339.1 654.83C1378.69 777.81 1247.31 866.8 1032.88 869.26Z"
          fill={primary}
        />
        <path
          d="M1032.88 502.78C805.49 495.07 701.09 587.56 701.09 681.11C701.09 742.29 758.34 798.99 842.31 833.82L1241.22 559.71C1184.19 528.37 1109.2 505.37 1032.88 502.78ZM847.88 715.71L820.55 583.01L1046.55 574.6L1052.33 604.6L878.9 609.86L899.9 714.44L847.88 715.71Z"
          fill={secondary}
        />
        <path
          d="M878.85 609.82L899.87 714.4L847.85 715.71L820.51 583.01L1046.49 574.6L1052.28 604.56L878.85 609.82Z"
          fill={primary}
        />
        <path
          d="M1221.02 887.53V1172.64C1221.02 1174.1 1222.13 1175.55 1224.34 1176.64C1226.87 1177.74 1229.61 1178.3 1232.37 1178.3C1235.13 1178.3 1237.87 1177.74 1240.4 1176.64C1242.62 1175.53 1243.73 1174.08 1243.73 1172.64V887.53H1221.02Z"
          fill="#E8E8E8"
        />
        <path
          d="M1232.37 893.22C1238.64 893.22 1243.72 890.677 1243.72 887.54C1243.72 884.403 1238.64 881.86 1232.37 881.86C1226.1 881.86 1221.02 884.403 1221.02 887.54C1221.02 890.677 1226.1 893.22 1232.37 893.22Z"
          fill="#F0F0F0"
        />
        <path
          d="M905.25 736.89V1022C905.25 1023.45 906.36 1024.91 908.58 1026C911.107 1027.09 913.829 1027.65 916.58 1027.65C919.331 1027.65 922.053 1027.09 924.58 1026C926.8 1024.89 927.91 1023.43 927.91 1022V736.89H905.25Z"
          fill="#E8E8E8"
        />
        <path
          d="M916.61 742.57C922.878 742.57 927.96 740.027 927.96 736.89C927.96 733.753 922.878 731.21 916.61 731.21C910.342 731.21 905.26 733.753 905.26 736.89C905.26 740.027 910.342 742.57 916.61 742.57Z"
          fill="#F0F0F0"
        />
        <path
          d="M1221.02 887.53V1172.65C1221.02 1174.1 1222.13 1175.55 1224.34 1176.65C1226.87 1177.75 1229.61 1178.31 1232.37 1178.31C1235.13 1178.31 1237.87 1177.75 1240.4 1176.65C1242.62 1175.54 1243.73 1174.09 1243.73 1172.65V887.53H1221.02Z"
          fill="#CAD5DF"
        />
        <path
          d="M1232.37 893.22C1238.64 893.22 1243.72 890.677 1243.72 887.54C1243.72 884.403 1238.64 881.86 1232.37 881.86C1226.1 881.86 1221.02 884.403 1221.02 887.54C1221.02 890.677 1226.1 893.22 1232.37 893.22Z"
          fill="#E5EAEE"
        />
        <path d="M1221.02 986.89L924.53 838.08V790.13L1221.02 938.93V986.89Z" fill="#F7931E" />
        <path
          d="M568.63 572.94V865.05C568.63 866.51 569.74 867.96 571.96 869.05C574.495 870.148 577.228 870.715 579.99 870.715C582.752 870.715 585.485 870.148 588.02 869.05C590.23 867.94 591.34 866.49 591.34 865.05V572.94H568.63Z"
          fill="#CAD5DF"
        />
        <path
          d="M579.99 578.62C586.258 578.62 591.34 576.077 591.34 572.94C591.34 569.803 586.258 567.26 579.99 567.26C573.722 567.26 568.64 569.803 568.64 572.94C568.64 576.077 573.722 578.62 579.99 578.62Z"
          fill="#E5EAEE"
        />
        <path
          d="M247.79 417.97V710.08C247.79 711.54 248.9 712.99 251.11 714.08C253.645 715.178 256.378 715.745 259.14 715.745C261.902 715.745 264.635 715.178 267.17 714.08C269.39 712.97 270.5 711.52 270.5 710.08V417.97H247.79Z"
          fill="#CAD5DF"
        />
        <path
          d="M259.14 423.65C265.408 423.65 270.49 421.107 270.49 417.97C270.49 414.833 265.408 412.29 259.14 412.29C252.872 412.29 247.79 414.833 247.79 417.97C247.79 421.107 252.872 423.65 259.14 423.65Z"
          fill="#E5EAEE"
        />
        <path
          d="M748.38 5.66998V297.79C748.38 299.24 749.48 300.7 751.7 301.79C754.235 302.888 756.968 303.455 759.73 303.455C762.492 303.455 765.225 302.888 767.76 301.79C769.98 300.69 771.08 299.23 771.08 297.79V5.66998H748.38Z"
          fill="#CAD5DF"
        />
        <path
          d="M759.75 11.36C766.018 11.36 771.1 8.81698 771.1 5.68C771.1 2.54302 766.018 0 759.75 0C753.482 0 748.4 2.54302 748.4 5.68C748.4 8.81698 753.482 11.36 759.75 11.36Z"
          fill="#E5EAEE"
        />
        <path
          d="M1072.78 160.25V452.36C1072.78 453.82 1073.88 455.27 1076.1 456.36C1078.63 457.458 1081.37 458.025 1084.13 458.025C1086.89 458.025 1089.63 457.458 1092.16 456.36C1094.38 455.25 1095.48 453.8 1095.48 452.36V160.25H1072.78Z"
          fill="#CAD5DF"
        />
        <path
          d="M1084.13 165.93C1090.4 165.93 1095.48 163.387 1095.48 160.25C1095.48 157.113 1090.4 154.57 1084.13 154.57C1077.86 154.57 1072.78 157.113 1072.78 160.25C1072.78 163.387 1077.86 165.93 1084.13 165.93Z"
          fill="#E5EAEE"
        />
        <path
          d="M1399.14 318.7V610.82C1399.14 612.27 1400.25 613.72 1402.47 614.82C1405 615.918 1407.73 616.485 1410.49 616.485C1413.26 616.485 1415.99 615.918 1418.52 614.82C1420.74 613.71 1421.85 612.26 1421.85 610.82V318.7H1399.14Z"
          fill="#CAD5DF"
        />
        <path
          d="M1410.5 324.38C1416.77 324.38 1421.85 321.837 1421.85 318.7C1421.85 315.563 1416.77 313.02 1410.5 313.02C1404.23 313.02 1399.15 315.563 1399.15 318.7C1399.15 321.837 1404.23 324.38 1410.5 324.38Z"
          fill="#E5EAEE"
        />
        <path
          d="M905.25 737.23V1022.35C905.25 1023.8 906.36 1025.25 908.57 1026.35C911.105 1027.45 913.838 1028.01 916.6 1028.01C919.362 1028.01 922.095 1027.45 924.63 1026.35C926.85 1025.24 927.96 1023.79 927.96 1022.35V737.23H905.25Z"
          fill="#CAD5DF"
        />
        <path
          d="M916.6 742.92C922.868 742.92 927.95 740.377 927.95 737.24C927.95 734.103 922.868 731.56 916.6 731.56C910.332 731.56 905.25 734.103 905.25 737.24C905.25 740.377 910.332 742.92 916.6 742.92Z"
          fill="#E5EAEE"
        />
        <path d="M905.25 827.27L594.88 671.06V623.11L905.25 779.32V827.27Z" fill="#F7931E" />
        <path d="M568.63 665L270.5 515.48V467.52L568.64 617.04L568.63 665Z" fill="#F7931E" />
        <path d="M1072.78 253.31L772.87 103.79V55.84L1072.78 205.35V253.31Z" fill="#F7931E" />
        <path d="M1397.39 407.88L1095.48 258.37V210.41L1397.39 359.93V407.88Z" fill="#F7931E" />
        <path
          d="M1721.96 563.5L1421.85 413.98V366.02L1722.55 516.83L1721.96 563.5Z"
          fill="#F7931E"
        />
      </g>
      <defs>
        <linearGradient
          id={randomIDLinear}
          x1="1309.03"
          y1="1480.01"
          x2="526.04"
          y2="123.83"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BAC7D5" stopOpacity="0" />
          <stop offset="0.5" stopColor="#BAC7D5" />
          <stop offset="1" stopColor="#BAC7D5" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id={randomIDLinear2}
          x1="1309.03"
          y1="1316.7"
          x2="526.04"
          y2="-39.4801"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BAC7D5" stopOpacity="0" />
          <stop offset="0.5" stopColor="#BAC7D5" />
          <stop offset="1" stopColor="#BAC7D5" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id={randomIDLinear3}
          x1="1309.03"
          y1="1143.7"
          x2="526.04"
          y2="-212.48"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BAC7D5" stopOpacity="0" />
          <stop offset="0.5" stopColor="#BAC7D5" />
          <stop offset="1" stopColor="#BAC7D5" stopOpacity="0" />
        </linearGradient>
        <clipPath id={clipID}>
          <rect width="1941.08" height="1249.2" fill="white" />
        </clipPath>
      </defs>
    </IllustrationWrapper>
  );
};

export default SmartPassV5;
