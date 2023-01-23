import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import React from 'react';
import Button from '../elements/Button';


function Home() {
    return (
        <section className="relative min-h-screen pb-20 space-y-4 dark:bg-gradient-to-tr dark:from-gray-900 dark:to-slate-800 md:space-y-0">
            <div className="relative z-30 flex flex-col-reverse items-center justify-center min-h-screen container-fluid dark:text-gray-100 md:flex-row md:gap-x-2">
                <div className="relative flex flex-col items-center justify-center w-full p-4 space-y-6 md:w-2/5 md:block ">
                    <h1 className="text-3xl font-semibold tracking-wide text-center text-gray-800 drop-shadow-lg md:text-5xl dark:text-gray-100 md:text-left md:leading-normal">
                        Beranda Solubis
                    </h1>
                    <p className="text-xs font-light tracking-wide text-center text-gray-800 md:text-sm dark:text-gray-100 drop-shadow-lg md:text-left">
                        We are trusted for by millions of people to find user to build their
                        dream and goals quickly and well by several famous companies
                    </p>
                    <Button href="/dashboard" type="link" color="yellow" isLarge>
                        <MagnifyingGlassIcon />
                        Get Started
                    </Button>
                </div>
            </div>

            <div className="absolute z-10 w-full top-96 ">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    width="100%"
                    height="460"
                    preserveAspectRatio="none"
                    viewBox="0 0 1440 720"
                >
                    <g mask='url("#SvgjsMask1111")' fill="none">
                        <path
                            d="M -24.916071672093892,393 C 71.08,353.2 263.08,200.4 455.0839283279061,194 C 647.08,187.6 743.08,344.6 935.083928327906,361 C 1127.08,377.4 1223.08,289.6 1415.083928327906,276 C 1607.08,262.4 1890.1,318.8 1895.083928327906,293 C 1900.07,267.2 1531.02,176.2 1440,147"
                            stroke="rgba(219, 219, 219, 1)"
                            strokeWidth="1"
                        ></path>
                        <path
                            d="M -584.3252223406085,220 C -488.33,255.8 -296.33,411 -104.32522234060852,399 C 87.67,387 183.67,176.6 375.67477765939145,160 C 567.67,143.4 663.67,297.2 855.6747776593915,316 C 1047.67,334.8 1218.81,255.2 1335.6747776593916,254 C 1452.54,252.8 1419.13,298.8 1440,310"
                            stroke="rgba(219, 219, 219, 1)"
                            strokeWidth="1"
                        ></path>
                        <path
                            d="M -900.7462029649323,325 C -804.75,291.2 -612.75,144.4 -420.74620296493225,156 C -228.75,167.6 -132.75,379.8 59.25379703506775,383 C 251.25,386.2 347.25,174 539.2537970350677,172 C 731.25,170 839.1,369 1019.2537970350677,373 C 1199.4,377 1355.85,228.2 1440,192"
                            stroke="rgba(219, 219, 219, 1)"
                            strokeWidth="1"
                        ></path>
                        <path
                            d="M -623.6743477312361,396 C -527.67,371.6 -335.67,279.2 -143.67434773123608,274 C 48.33,268.8 144.33,393.8 336.3256522687639,370 C 528.33,346.2 624.33,158.6 816.3256522687639,155 C 1008.33,151.4 1171.59,343 1296.3256522687639,352 C 1421.06,361 1411.27,230.4 1440,200"
                            stroke="rgba(219, 219, 219, 1)"
                            strokeWidth="1"
                        ></path>
                        <path
                            d="M -53.76989526751777,301 C 42.23,282 234.23,193.4 426.23010473248223,206 C 618.23,218.6 714.23,362.8 906.2301047324822,364 C 1098.23,365.2 1194.23,221 1386.2301047324822,212 C 1578.23,203 1855.48,309.8 1866.2301047324822,319 C 1876.98,328.2 1525.25,270.2 1440,258"
                            stroke="rgba(219, 219, 219, 1)"
                            strokeWidth="1"
                        ></path>
                        <path
                            d="M -675.6230005682932,338 C -579.62,309.4 -387.62,192.6 -195.62300056829315,195 C -3.62,197.4 92.38,352.6 284.37699943170685,350 C 476.38,347.4 572.38,171.4 764.3769994317068,182 C 956.38,192.6 1109.25,410.8 1244.3769994317067,403 C 1379.5,395.2 1400.88,195 1440,143"
                            stroke="rgba(219, 219, 219, 1)"
                            strokeWidth="1"
                        ></path>
                        <path
                            d="M -155.9073424151033,388 C -59.91,361.2 132.09,258.8 324.0926575848967,254 C 516.09,249.2 612.09,367.2 804.0926575848966,364 C 996.09,360.8 1092.09,228.4 1284.0926575848966,238 C 1476.09,247.6 1732.91,425.6 1764.0926575848966,412 C 1795.27,398.4 1504.82,218.4 1440,170"
                            stroke="rgba(219, 219, 219, 1)"
                            strokeWidth="1"
                        ></path>
                    </g>
                    <defs>
                        <mask id="SvgjsMask1111">
                            <rect width="1440" height="560" fill="#ffffff"></rect>
                        </mask>
                    </defs>
                </svg>
            </div>
        </section>
    );
}

export default Home;
