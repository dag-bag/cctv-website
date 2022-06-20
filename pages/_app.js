import { Footer } from "../components/Footer";
import { Nav } from "../components/Navbar";
import { TopNavbar } from "../components/TopNavbar";
import Script from "next/script";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const bookings = async (ep, path) => {
    const resp = await fetch(`/api/${path}`, {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(ep),
    });
    const respData = await resp.json();

    const { token, success, msg, name } = respData;
    console.log(msg);
  };
  const auth = async (ep, path, Rpath) => {
    const resp = await fetch(`/api/${path}`, {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(ep),
    });
    const respData = await resp.json();

    const { token, success, msg, name } = respData;
    console.log(msg);

    if (success) {
      let cookie = getCookie("auth_token");
      if (cookie === token) {
        setCookie({ value: cookie });
        toast.success(msg, {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }

      // localStorage.setItem("token", authtoken);
      // setTimeout(() => {
      //   router.push(Rpath);
      // }, 2000);
    } else {
      toast.error(msg, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      //   props.showAlert("danger", "Invalid credentials");
    }
  };

  return (
    <>
      <Script
        id="my-script"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-PDKJ7SK');`,
        }}
      />{" "}
      <TopNavbar /> <Nav /> <Component {...pageProps} bookings={bookings} />{" "}
      <Footer />
    </>
  );
}

export default MyApp;
