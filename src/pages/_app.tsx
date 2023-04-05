//
// import '@/styles/globals.css';
// import { useEffect } from 'react';
// // @ts-ignore
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import { MantineProvider } from '@mantine/core';
// import type { AppProps } from 'next/app';
//
// export default function App({ Component, pageProps }: AppProps) {
//   useEffect(() => {
//     AOS.init({
//       duration: 1000,
//       easing: 'ease-out',
//     });
//   }, []);
//
//
//
//   return (
//     <MantineProvider
//
//       withGlobalStyles
//       withNormalizeCSS
//     >
//       <div data-aos="fade-up">
//         <Component {...pageProps} />
//       </div>
//     </MantineProvider>
//   );
// }
import '@/styles/globals.css';
import { useEffect } from 'react';
// @ts-ignore
import AOS from 'aos';
import 'aos/dist/aos.css';
import { MantineProvider } from '@mantine/core';
import type { AppProps } from 'next/app';


export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-out',
    });
  }, []);

  const theme = {
    colors : {
       primary: 'red'
    }
  }

  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
    >
      <div data-aos="fade-up">
        <Component {...pageProps} />
      </div>
    </MantineProvider>
  );
}

