import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { Switch, Route, Router as WouterRouter } from "wouter";

import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { AboutUs } from "./pages/AboutUs";
import { ServicesIndex } from "./pages/ServicesIndex";
import { ServiceDetail } from "./pages/ServiceDetail";
import { ClinicGallery } from "./pages/ClinicGallery";
import { PatientGallery } from "./pages/PatientGallery";
import { PatientStories } from "./pages/PatientStories";
import { BlogIndex } from "./pages/BlogIndex";
import { BlogDetail } from "./pages/BlogDetail";
import { ContactUs } from "./pages/ContactUs";
import NotFound from "./pages/not-found";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
        <Layout>
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/about-us" component={AboutUs} />
            <Route path="/services" component={ServicesIndex} />
            <Route path="/services/:slug" component={ServiceDetail} />
            <Route path="/smile-gallery" component={PatientGallery} />
            <Route path="/clinic-gallery" component={ClinicGallery} />
            <Route path="/patient-gallery" component={PatientGallery} />
            <Route path="/patient-stories" component={PatientStories} />
            <Route path="/blogs" component={BlogIndex} />
            <Route path="/blogs/:slug" component={BlogDetail} />
            <Route path="/contact-us" component={ContactUs} />
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </WouterRouter>
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
