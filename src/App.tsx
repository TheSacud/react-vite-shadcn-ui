import Navbar from "./components/layout/Navbar";
import PrivateRoute from "./components/PrivateRoute";
import { AuroraBackground } from "./components/ui/aurora-background";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Toaster } from "sonner";
import HomePage from "./pages/HomePage";
import { LoginForm } from "./pages/LoginPage";
import { RegisterForm } from "./pages/Register";
import NotFound from "./components/layout/NotFound";
import MainSection from "./components/layout/MainSection";
import Footer from "./components/layout/Footer";
import { AuthProvider } from './context/AuthContext.tsx';
import SuccessStoriesPage from "./pages/SuccessStoryPage.tsx";
import CreateCompany from "./components/CreateCompany.tsx";


function App() {
  return (
    <AuroraBackground>
      <Toaster />
      <AuthProvider>
      <Router>
        <div className="flex flex-col h-screen">
          <Navbar />
          <MainSection>
            <Routes>
              {/* Public Routes */}
              <Route path="/" element={<HomePage />} />
              <Route path="/register" element={<RegisterForm />} /> 
              <Route path="/login" element={<LoginForm />} />
              <Route path="/blog" element={<SuccessStoriesPage />} />

              <Route element={<PrivateRoute />}>
                  <Route path="/company" element={<CreateCompany />} />
              </Route>
              {/* 
                <Route path="/about-you" element={<AboutYou />} />
                <Route path="/about-enterprise" element={<AboutEnterprise />} />
                <Route path="/success-story" element={<SuccessStory />} />
                <Route path="/case-studies" element={<CaseStudiesPage />} />
                <Route path="/case-story" element={<CaseStoryPage />} />
                <Route path="/founders" element={<FounderDirectoryPage />} />
                <Route path="/sectors" element={<CreateSector />} /> */}

              {/*
              <Route path="/companies" element={<CompanyList />} />
              <Route path="/projects" element={<ProjectList />} />
              <Route path="/company-profile/:id" element={<CompanyProfile />} />
              <Route path="/blog" element={<BlogSection11 />} />
            */}

              {/* Private Routes */}
              {/*
                <Route element={<PrivateRoute />}>
                  <Route path="/create-company" element={<CreateCompany />} />
                  <Route path="/edit-profile" element={<EditProfile />} />
                  
                <Route path="/create-project" element={<CreateProject />} />

                
                <Route
                  path="/edit-company-profile/:id"
                  element={<EditCompanyProfile />}
                />
                <Route path="/create-story" element={<CreateStory />} />
                <Route path="/stories" element={<StoryList />} />
               
                <Route
                  path="/user-profile/:id"
                  element={<UserProfile user={user} />}
                />
              
                  <Route path="/offer-service" element={<OfferService />} />
                </Route>
*/}
              {/* Rota 404 */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </MainSection>
          <Footer />
        </div>
      </Router>
      </AuthProvider>
    </AuroraBackground>
  );
}

export default App;
