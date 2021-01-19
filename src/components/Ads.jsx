import React from "react";
import AdSense from "react-adsense";

function Ads() {
  return (
    <>
      <AdSense.Google
        className="right"
        style={{ width: 300, height: 300 }}
        client="ca-pub-7900802648960033"
        format=""
        slot="8761774704"
        //   8761774704
      />
    </>
  );
}

export default Ads;
