import React from 'react'

function HomeContent() {
  return (
   <>
    <div className="home_page_container">
          <div className="container">
            <div className="home_container">
              <div className="home_form">
                <form>
                  <div className="form_top">
                    <h3>Swap</h3>
                    <span className="settings">
                      <img
                        src="/static/media/swapIcon.c3d349c9b84150a6acfaf3cfa6cdb283.svg"
                        alt="swapicon"
                        style={{ cursor: "pointer" }}
                      />
                    </span>
                  </div>
                  <div className="form_content_wrapper">
                    <div className="swap_box_top">
                      <div className="swap_box">
                        <div className="select_token">
                          <img
                            src="https://swap-curve.netlify.app/static/media/bitcoin.ee707b6298a356177ec8.webp"
                            alt="logo"
                          />
                          <span className="token_name">OxBTC</span>
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth={0}
                            viewBox="0 0 24 24"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path fill="none" d="M0 0h24v24H0V0z" />
                            <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
                          </svg>
                        </div>
                        <div className="token_balance">
                          <div className="value">
                            <input type="number" placeholder={0.0} min={1} />
                          </div>
                        </div>
                      </div>
                      <span className="down_arrow">
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth={0}
                          viewBox="0 0 16 16"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M11.5 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L11 2.707V14.5a.5.5 0 0 0 .5.5zm-7-14a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V1.5a.5.5 0 0 1 .5-.5z"
                          />
                        </svg>
                      </span>
                    </div>
                    <span className="calculate_amount">≈ $1.00</span>
                    <div className="swap_box_top">
                      <div className="swap_box">
                        <div className="select_token">
                          <img
                            src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5Ojf/2wBDAQwNDREPESESEiFFLicuRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUX/wAARCAAgACADAREAAhEBAxEB/8QAGQAAAwADAAAAAAAAAAAAAAAABAUGAAID/8QAJBAAAQUAAgEDBQAAAAAAAAAAAQACAwQRBTESITJRExRBccH/xAAaAQABBQEAAAAAAAAAAAAAAAAAAQIDBAYF/8QAIREAAgICAgEFAAAAAAAAAAAAAAECAwQRITFBEhMiUWH/2gAMAwEAAhEDEQA/AIaKLV2jlhcdYkdIAx9bB0gASWLEAMOLqutWI4We55z9IRFbYqoOb8F1Vo1aDQImAvA9ZD2VKomXuyrch/J8fQLeqQW3HzABIwENGg/Kc4bJaMmylcEfydY1rEkLiCWOI0flQNaNJVYrIKa8nXgrTat+GZ/tBwn4BGf1LF6ZFl1O2mUF2Xbi2VoO6D0QVYSMmtxYFepuliH28pY9p0En0SSTa4LuLfCuT9yO0yK5Bx+s/wAniQ6dcDulV2aWvXpWlpAMUuIHjWlzNqqwMjl1g6a8aAnKbXRVtw6bXuS5NrnN27LCx8oaw9tYMBQ5yfYlWFTU9pc/ooll1NLZ/9k="
                            alt="logo"
                          />
                          <span className="token_name">ANT</span>
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth={0}
                            viewBox="0 0 24 24"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path fill="none" d="M0 0h24v24H0V0z" />
                            <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
                          </svg>
                        </div>
                        <div className="token_balance">
                          <div className="value">
                            <input type="number" placeholder={0.0} min={1} />
                          </div>
                        </div>
                      </div>
                    </div>
                    <span className="calculate_amount">≈ $1.00</span>
                    <div className="convert_desc">
                      <div className="exc_rate">
                        <p>Exchange rate (incl. fees):</p>
                        <p />
                        <p>
                          USDT/ETH <strong>0.00076021</strong>{" "}
                        </p>
                        <p>
                          ETH/USDT <strong>1,315.41852284</strong>{" "}
                        </p>
                        <p />
                      </div>
                      <div className="price_imact">
                        <p>Price impact:</p>
                        <p className="price_change">
                          0%{" "}
                          <span
                            tooltip="Price change in the market that happens when a trader buys or sells an asset"
                            className="tooltip"
                          >
                            <svg
                              stroke="currentColor"
                              fill="currentColor"
                              strokeWidth={0}
                              viewBox="0 0 24 24"
                              height="1em"
                              width="1em"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g id="Square_Alert" dataname="Square Alert">
                                <g>
                                  <path d="M18.437,20.936H5.562a2.5,2.5,0,0,1-2.5-2.5V5.562a2.5,2.5,0,0,1,2.5-2.5H18.437a2.5,2.5,0,0,1,2.5,2.5V18.436A2.5,2.5,0,0,1,18.437,20.936ZM5.562,4.062a1.5,1.5,0,0,0-1.5,1.5V18.436a1.5,1.5,0,0,0,1.5,1.5H18.437a1.5,1.5,0,0,0,1.5-1.5V5.562a1.5,1.5,0,0,0-1.5-1.5Z" />
                                  <g>
                                    <path d="M11.5,10.982a.5.5,0,0,1,1,0V15h0a.5.5,0,0,1-1,0Z" />
                                    <circle cx={12} cy={9} r="0.5" />
                                  </g>
                                </g>
                              </g>
                            </svg>
                          </span>
                        </p>
                      </div>
                      <div className="trade_routed">
                        <p>Trade routed through:</p>
                        <p />
                        <p>
                          <strong>frax</strong>
                        </p>
                        <p>
                          <strong>ETH/FRAX</strong>
                        </p>
                        <p />
                      </div>
                      <div className="slippage">
                        <p>Slippage tolerance:</p>
                        <p>0.1%</p>
                      </div>
                    </div>
                    <div className="connect_btn">
                      <button type="button">Connect Wallet</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div></>
  )
}

export default HomeContent