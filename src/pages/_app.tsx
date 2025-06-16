import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { MoodProvider } from "@/context/MoodContext";



export default function App({ Component, pageProps }: AppProps) {
  return(
    <MoodProvider>
    <Component {...pageProps} />;
    </MoodProvider>
 

  )
}
