"use client";
import React, { useState } from "react";
import Button from "./Button";

export default function Navbar() {
  const [isToggleOpen, setIsToggleOpen] = useState(false);
  const [isShowing, setIsShowing] = useState(false);

  const handleLogin = () => {
    setIsShowing(true);
  };

  return (
    <>
      {/*<!-- Component: Navbar with CTA --> */}
      <header className="relative z-20 w-full border-b shadow-lg border-slate-200 bg-white/90 shadow-slate-700/5 after:absolute after:left-0 after:top-full after:z-10 after:block after:h-px after:w-full after:bg-slate-200 lg:border-slate-200 lg:backdrop-blur-sm lg:after:hidden">
        {isShowing && (
          <div className="w-screen h-screen bg-[#2b2a2aa9] absolute top-0 flex items-center justify-center">
            <div className="bg-white max-w-[600px] h-[408px] flex flex-col rounded-xl py-[24px] px-[48px] justify-between items-center">
              <h1 className="text-3xl font-bold text-center">
                Welcome back to Save My Exams
              </h1>
              <Button />
            </div>
          </div>
        )}
        <div className="relative mx-auto max-w-full  lg:max-w-5xl xl:max-w-7xl 2xl:max-w-[96rem]">
          <nav
            aria-label="main navigation"
            className="flex h-[5rem] items-stretch justify-between font-medium text-slate-700"
            role="navigation"
          >
            {/*      <!-- Brand logo --> */}
            <a
              id="WindUI"
              aria-label="WindUI logo"
              aria-current="page"
              className="flex items-center gap-2 py-3 text-lg  whitespace-nowrap focus:outline-none lg:flex-1"
              href="javascript:void(0)"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill-rule="nonzero"
                height="42.26"
                stroke-linejoin="round"
                stroke-miterlimit="2"
                viewBox="0 0 186 40"
                width="170"
              >
                <path d="M37.401 28.521a7.6 7.6 0 0 1-3.048-.609c-.942-.407-1.75-.968-2.429-1.695a6.88 6.88 0 0 1-1.507-2.535l2.663-1.144c.422.998 1.027 1.779 1.823 2.348a4.5 4.5 0 0 0 2.685.851c.562 0 1.046-.088 1.46-.268s.73-.425.957-.737.337-.686.337-1.123c0-.514-.15-.935-.455-1.262s-.759-.591-1.364-.792l-3.338-1.075c-1.354-.422-2.377-1.046-3.071-1.882s-1.038-1.827-1.038-2.978c0-.998.249-1.875.748-2.638s1.189-1.357 2.065-1.786 1.889-.642 3.026-.642c1.042 0 1.999.183 2.873.55s1.625.873 2.252 1.519a6.24 6.24 0 0 1 1.412 2.278l-2.637 1.167c-.327-.855-.836-1.526-1.53-2.007s-1.482-.723-2.37-.723c-.528 0-.998.088-1.401.268s-.719.433-.946.759-.338.701-.338 1.123a1.9 1.9 0 0 0 .466 1.273c.312.367.785.649 1.423.851l3.199 1.005c1.386.451 2.425 1.075 3.118 1.867s1.038 1.775 1.038 2.942c0 .998-.257 1.878-.771 2.637s-1.221 1.361-2.124 1.798-1.963.653-3.177.653l-.004.007zm17.666-11.093c-.444-.686-1.06-1.221-1.856-1.603s-1.713-.569-2.755-.569c-.858 0-1.651.14-2.384.418a5.98 5.98 0 0 0-1.904 1.155 4.34 4.34 0 0 0-1.177 1.743l2.498 1.214a3.16 3.16 0 0 1 1.111-1.38c.506-.36 1.086-.536 1.739-.536.7 0 1.262.184 1.68.547s.631.822.631 1.368v.411l-3.76.616c-.994.154-1.819.418-2.476.792s-1.141.836-1.46 1.39-.477 1.182-.477 1.882.18 1.372.536 1.926.87.976 1.53 1.273 1.438.444 2.326.444c.7 0 1.335-.096 1.904-.282a4.78 4.78 0 0 0 1.541-.84 4.79 4.79 0 0 0 .525-.499v1.339h2.898v-8.452c0-.888-.224-1.677-.668-2.359zm-2.417 5.649c0 .562-.132 1.082-.396 1.566s-.642.862-1.134 1.134-1.053.407-1.691.407c-.499 0-.917-.129-1.251-.385a1.24 1.24 0 0 1-.502-1.038c0-.436.147-.814.444-1.086s.748-.466 1.353-.572l3.177-.565v.539zm15.814-7.542l-5 12.703h-2.711l-4.996-12.703h3.338l3.005 8.294 3.023-8.294h3.342zm11.607 3.536a6.18 6.18 0 0 0-1.214-1.973 5.66 5.66 0 0 0-1.93-1.354c-.756-.326-1.629-.488-2.626-.488-1.2 0-2.275.287-3.221.862a6.38 6.38 0 0 0-2.267 2.348c-.561.991-.84 2.121-.84 3.397s.271 2.351.818 3.364 1.309 1.816 2.3 2.407 2.135.888 3.445.888c.854 0 1.65-.132 2.381-.396s1.364-.631 1.893-1.1a4.32 4.32 0 0 0 1.166-1.61L77.499 24.2c-.279.499-.664.895-1.156 1.192s-1.086.444-1.786.444-1.32-.165-1.856-.491a3.06 3.06 0 0 1-1.214-1.39 3.71 3.71 0 0 1-.308-1.178h9.149a3.13 3.13 0 0 0 .128-.62l.033-.69c0-.855-.14-1.655-.418-2.396zm-8.606.598c.257-.609.634-1.075 1.13-1.401s1.067-.491 1.706-.491c.671 0 1.243.165 1.717.491a2.72 2.72 0 0 1 1.027 1.332c.096.257.154.528.176.818h-5.975a3.61 3.61 0 0 1 .22-.748zm29.53-8.829v17.399h-3.199V16.415l-5.371 7.153h-.374l-5.396-7.37v12.039h-3.199V10.84h3.059l5.785 7.857 5.66-7.857h3.034zm14.161 4.695l-5.535 13.991c-.327.825-.723 1.526-1.192 2.102s-1.009 1.02-1.621 1.328-1.321.469-2.113.469a5.31 5.31 0 0 1-1.005-.096c-.326-.062-.623-.154-.888-.279v-2.568l.737.139a4.87 4.87 0 0 0 .804.07c.7 0 1.21-.165 1.53-.491s.605-.756.855-1.284l.286-.668-5.03-12.714h3.294l3.291 8.76 3.272-8.76h3.316zm2.336 12.704V10.84h11.585v2.802h-8.386v4.461h7.916v2.825h-7.916v4.509h8.386v2.802h-11.585zm20.107-6.376l4.416 6.375h-3.573l-2.652-3.951-2.652 3.951h-3.595l4.439-6.375-4.464-6.328h3.599l2.674 3.947 2.674-3.947h3.573l-4.439 6.328zm15.007-4.435c-.444-.686-1.064-1.221-1.856-1.603s-1.713-.569-2.755-.569a6.65 6.65 0 0 0-2.384.418 6.02 6.02 0 0 0-1.904 1.155 4.35 4.35 0 0 0-1.177 1.743l2.498 1.214a3.15 3.15 0 0 1 1.108-1.38c.506-.359 1.086-.536 1.742-.536.701 0 1.262.184 1.68.547s.631.822.631 1.368v.411l-3.76.616c-.998.154-1.823.418-2.476.792s-1.141.836-1.46 1.39-.477 1.182-.477 1.882.176 1.372.536 1.926.869.976 1.53 1.273 1.438.444 2.326.444c.701 0 1.335-.096 1.904-.282s1.082-.466 1.541-.84a4.83 4.83 0 0 0 .525-.499v1.339h2.898v-8.452c0-.888-.224-1.677-.668-2.359zm-2.418 5.649c0 .562-.132 1.082-.396 1.566a2.81 2.81 0 0 1-1.134 1.134c-.492.271-1.057.407-1.695.407-.496 0-.914-.129-1.248-.385a1.24 1.24 0 0 1-.502-1.038c0-.436.147-.814.444-1.086s.748-.466 1.354-.572l3.177-.565v.539zm23.501-3.012v8.173h-3.059v-7.45c0-.557-.099-1.042-.301-1.445s-.488-.719-.854-.936-.796-.327-1.295-.327-.91.11-1.284.327a2.16 2.16 0 0 0-.866.936c-.202.403-.305.888-.305 1.445v7.45h-3.059v-7.45c0-.557-.099-1.042-.305-1.445s-.484-.719-.851-.936-.796-.327-1.295-.327a2.46 2.46 0 0 0-1.284.327 2.16 2.16 0 0 0-.866.936c-.202.403-.305.888-.305 1.445v7.45h-3.081V15.535h2.894v1.603c.253-.506.613-.91 1.075-1.207.701-.451 1.526-.675 2.476-.675 1.042 0 1.963.272 2.755.815.502.345.891.755 1.17 1.236.338-.536.756-.968 1.258-1.295.782-.502 1.677-.756 2.689-.756.902 0 1.706.202 2.418.605a4.36 4.36 0 0 1 1.669 1.695c.404.723.605 1.559.605 2.509zm6.496 8.456c-1.354 0-2.535-.323-3.54-.968s-1.702-1.522-2.091-2.627l2.311-1.097c.327.716.782 1.277 1.365 1.68s1.233.609 1.952.609c.547 0 .98-.125 1.309-.374a1.17 1.17 0 0 0 .492-.979c0-.25-.066-.455-.198-.62s-.308-.305-.525-.422-.466-.213-.748-.293l-2.08-.584c-1.06-.297-1.864-.766-2.417-1.412a3.39 3.39 0 0 1-.829-2.278c0-.778.198-1.46.594-2.043s.95-1.038 1.658-1.364 1.522-.492 2.439-.492c1.2 0 2.256.29 3.177.866a4.73 4.73 0 0 1 1.963 2.428l-2.337 1.097a2.75 2.75 0 0 0-1.097-1.364 3.1 3.1 0 0 0-1.728-.502c-.514 0-.917.114-1.214.337s-.444.532-.444.921c0 .22.062.414.187.583s.301.312.525.422.488.209.781.305l2.032.609c1.042.312 1.849.777 2.418 1.401s.851 1.386.851 2.289c0 .763-.202 1.438-.609 2.021s-.965 1.038-1.68 1.365-1.559.491-2.524.491l.007-.004z" />
                <g fill="#265bf6">
                  <path d="M24.84 20.436L8.571 39.669c-.227.268-.671.055-.594-.286l4.483-19.49h12.117c.286 0 .444.327.264.543z" />
                  <path d="M16.946.407l-4.483 19.486H.343c-.29 0-.448-.327-.264-.543L16.352.121c.231-.268.671-.055.594.286z" />
                </g>
              </svg>
            </a>
            {/*      <!-- Mobile trigger --> */}
            <button
              className={`relative order-10 block h-10 w-10 self-center lg:hidden
              ${
                isToggleOpen
                  ? "visible opacity-100 [&_span:nth-child(1)]:w-6 [&_span:nth-child(1)]:translate-y-0 [&_span:nth-child(1)]:rotate-45 [&_span:nth-child(2)]:-rotate-45 [&_span:nth-child(3)]:w-0 "
                  : ""
              }
            `}
              onClick={() => setIsToggleOpen(!isToggleOpen)}
              aria-expanded={isToggleOpen ? "true" : "false"}
              aria-label="Toggle navigation"
            >
              <div className="absolute w-6 transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
                <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-9/12 -translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"
                ></span>
                <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-6 transform rounded-full bg-slate-900 transition duration-300"
                ></span>
                <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-1/2 origin-top-left translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"
                ></span>
              </div>
            </button>
            {/*      <!-- Navigation links --> */}
            <ul
              role="menubar"
              aria-label="Select page"
              className={`absolute left-0 top-0 z-[-1] h-[28.5rem] w-full justify-center overflow-hidden  overflow-y-auto overscroll-contain bg-white/90 px-8 pb-12 pt-24 font-medium transition-[opacity,visibility] duration-300 lg:visible lg:relative lg:top-0  lg:z-0 lg:flex lg:h-full lg:w-auto lg:items-stretch lg:overflow-visible lg:bg-white/0 lg:px-0 lg:py-0  lg:pt-0 lg:opacity-100 ${
                isToggleOpen
                  ? "visible opacity-100 backdrop-blur-sm"
                  : "invisible opacity-0"
              }`}
            >
              <li role="none" className="flex items-stretch">
                <a
                  role="menuitem"
                  aria-haspopup="false"
                  className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-primary focus:text-primary-100 focus:outline-none focus-visible:outline-none lg:px-8"
                  href="javascript:void(0)"
                >
                  <span>Start studying</span>
                </a>
              </li>
              <li role="none" className="flex items-stretch">
                <a
                  role="menuitem"
                  aria-current="page"
                  aria-haspopup="false"
                  className="flex items-center gap-2 py-4 transition-colors duration-300 text-primary hover:text-primary-100 focus:text-primary-100 focus:outline-none focus-visible:outline-none lg:px-8"
                  href="javascript:void(0)"
                >
                  <span>Study tools</span>
                </a>
              </li>
              <li role="none" className="flex items-stretch">
                <a
                  role="menuitem"
                  aria-haspopup="false"
                  className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-primary focus:text-primary-100 focus:outline-none focus-visible:outline-none lg:px-8"
                  href="javascript:void(0)"
                >
                  <div className="relative my-6">
                    <input
                      id="id-s03"
                      type="search"
                      name="id-s03"
                      placeholder="Search here"
                      aria-label="Search content"
                      className="peer relative h-10 w-full rounded-full border border-slate-200 px-4 pr-80 text-sm text-slate-500 outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-primary focus:outline-none invalid:focus:border-pink-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
                    />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="absolute right-4 top-2.5 h-5 w-5 cursor-pointer stroke-slate-400 peer-disabled:cursor-not-allowed"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      aria-hidden="true"
                      aria-label="Search icon"
                      role="graphics-symbol"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                      />
                    </svg>
                  </div>
                </a>
              </li>
              <li role="none" className="flex items-stretch">
                <a
                  role="menuitem"
                  aria-haspopup="false"
                  onClick={handleLogin}
                  className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-primary focus:text-primary-100 focus:outline-none focus-visible:outline-none lg:px-8"
                >
                  <span>Log in</span>
                </a>
              </li>
            </ul>
            <div className="flex items-center px-6 ml-auto lg:ml-0 lg:p-0">
              <button className="inline-flex items-center justify-center h-10 gap-2 px-5 text-sm font-medium tracking-wide text-white transition duration-300 rounded-full whitespace-nowrap bg-primary  hover:bg-primary-100 hover:shadow-sm hover:shadow-emerald-200 focus:bg-emerald-700 focus:shadow-sm focus:shadow-emerald-200 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none">
                <span>Join now for free</span>
              </button>
            </div>
          </nav>
        </div>
      </header>
      {/*<!-- End Navbar with CTA --> */}
    </>
  );
}
