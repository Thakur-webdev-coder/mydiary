import * as React from 'react';
import Navigator  from './src/Utils/Navigation/Navigator';
import { Provider } from 'react-redux';
import Store from './src/redux/reducers/Index'
import Reactotron from 'reactotron-react-native';


interface State {
}
interface Props {
}
class App extends React.Component<Props, State>{
  constructor(props: string) {
    super(props)

     this.configureReactotron()
      // (console as any).tron.log = Reactotron;

  };
  configureReactotron() {
    Reactotron.clear();
    return Reactotron.configure({
      host: '192.168.43.227',
      port: 9090,
      name: 'MydDiary'
    }).connect();
  }   
  render() {
    return (
      <Provider store={Store}>
        <Navigator />
      </Provider>
    )
  }
}

export default App;
