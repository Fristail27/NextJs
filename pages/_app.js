import React from "react";

function MyApp({ Component, pageProps }) {

  const [isLoading, setIsLoading] = React.useState(true)

  return <Component isLoading={isLoading} setIsLoading={setIsLoading} {...pageProps} />
}

export default MyApp
