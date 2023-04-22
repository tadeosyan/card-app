import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import configureStore from '@redux/configureStore';
import {
  Wrapper,
  CardList,
  Footer,
  Header,
  RightBar,
} from './components';
import styles from './App.module.css';

const { store, persistor } = configureStore();

const App = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <Wrapper className={styles.mainContainer}>
        <Wrapper className={styles.container}>
          <Header />
          <CardList />
          <Footer />
        </Wrapper>
        <Wrapper className={styles.rightBar}>
          <RightBar />
        </Wrapper>
      </Wrapper>
    </PersistGate>
  </Provider>
);

export default App;
