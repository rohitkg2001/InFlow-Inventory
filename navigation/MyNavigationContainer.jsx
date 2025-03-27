import MyStackNavigator from "./MyStackNavigator";
import { Provider } from "react-redux";
import { PaperProvider } from "react-native-paper";
import { store } from "../store";

export default function MyNavigationContainer() {
  return (
    <Provider store={store}>
      <PaperProvider>
        <MyStackNavigator />
      </PaperProvider>
    </Provider>
  );
}
