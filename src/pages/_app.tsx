import { saveState } from "@/store/localStorage";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { debounce } from "debounce";
import { Provider } from "react-redux";
import { wrapper } from "../store/store";
import { useEffect } from "react";

/*
 *  This is the main app component. It wraps the entire app with the Redux store.
 */

function App({ Component, pageProps }: AppProps) {
  const { store } = wrapper.useWrappedStore(pageProps);
  useEffect(() => {
    store.subscribe(
      debounce(() => {
        saveState(store.getState());
      }, 800)
    );
  }, [store]);
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default App;
