import './App.css';
import JobForm from './CreateProfileForm'
import LandingPage from './Landing'
import SignInPage from './components/SignInPage';

export default function App() {
  return (
    <div className="App">
      <div>
        <LandingPage></LandingPage>
        <SignInPage></SignInPage>
        <JobForm></JobForm>
      </div>
    </div>
  );
}
