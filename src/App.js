import './Content/Content/login.css';
import './App.css';
import { Signin } from './u/Signin';
import { Login } from './u/Login';
import { Signup } from './u/Signup';
import { Details } from './getstarted/Details';
import { AccountVerifi } from './getstarted/Accountverify';
import { CreatePassword } from './getstarted/Createpassword';
import { CreatePasswordFromEmail } from './getstarted/Createpasswordpg';
import { CreateProfile } from './getstarted/Createprofile';
import { CreateProfileTchr } from './getstarted/Createprofile2';
import { CreateProfileStu } from './getstarted/Createprofile3';
import { Resetpsword } from './u/Resetpassword';
import { Userprofile } from './u/Profile';
import { Staffpage } from './u/Staff';
import { SurveyPage } from './u/Survey';
import { SurveyDetailsPage } from './s/SurveyDetails';
import { SurveyDeepdivePage } from './s/SurveyDeepdive';
import { ClassroomPage } from './u/Classroom';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

export const App = () => {

    return (
        <BrowserRouter>
         
            {/* <Headersignin /> */}

            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/u/signin' element={<Signin />} />
                <Route path='/u/signup' element={<Signup />} />
                <Route path='/getstarted/details' element={<Details />} />
                <Route path='/getstarted/accountverify' element={<AccountVerifi />} />
                <Route path='/getstarted/createpassword' element={<CreatePassword />} />
                <Route path='/getstarted/createpasswordpg' element={<CreatePasswordFromEmail />} />
                <Route path='/getstarted/createprofile' element={<CreateProfile />} />
                <Route path='/getstarted/Createprofile2' element={<CreateProfileTchr />} />
                <Route path='/getstarted/createprofile3' element={<CreateProfileStu />} />
                <Route path='/u/resetpassword' element={<Resetpsword />} />
                <Route path='/u/profile' element={<Userprofile />} />
                <Route path='/u/staff' element={<Staffpage />} />
                <Route path='/u/survey' element={<SurveyPage />} />
                <Route path='/s/surveydetails' element={<SurveyDetailsPage />} />
                <Route path='/s/surveydeepdive' element={<SurveyDeepdivePage />} />
                <Route path='/u/classroom' element={<ClassroomPage />} />
            </Routes>

                

        </BrowserRouter>
    );
}



export default App;
