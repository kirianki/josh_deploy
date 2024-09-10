import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import Index from "./pages/Index";
import CategoryDetails from "./components/CategoryDetails";
import CompanyDetailsPage from "./pages/CompanyDetailsPage";
import ProfessionalDetailsPage from "./pages/ProfessionalDetailsPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <TooltipProvider>
        <Toaster />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/industry/:industryName/category/:categoryName" element={<CategoryDetails />} />
            <Route path="/industry/:industryName/category/:categoryName/company/:companyName" element={<CompanyDetailsPage />} />
            <Route path="/industry/:industryName/category/:categoryName/professional/:professionalName" element={<ProfessionalDetailsPage />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;