import Layout from "@/Layout/Layout";
import AuthProvider from "@/provider/AuthProvider";
import "@/styles/globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function App({ Component, pageProps }) {

  const queryClient = new QueryClient();

  return (<AuthProvider>
    <QueryClientProvider client={queryClient}>
      <div className=" max-w-screen-2xl mx-auto ">
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </div>
    </QueryClientProvider>

  </AuthProvider>);
}
