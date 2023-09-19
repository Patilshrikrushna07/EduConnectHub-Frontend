import '@/styles/globals.css'
import NProgress from "nprogress"; //nprogress module for Slider
import Router, { useRouter } from "next/router";


//Binding events.
export default function App({ Component, pageProps }) {
  const router = useRouter();
  Router.events.on("routeChangeStart", () => NProgress.start());
  Router.events.on("routeChangeComplete", () => NProgress.done());
  Router.events.on("routeChangeError", () => NProgress.done());

  return <Component {...pageProps} />
}
