import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

// صفحات المشروع
import Index from "./pages/Index";
import VideoPage from "./pages/video";
import NotFound from "./pages/NotFound";

// إنشاء Client لـ React Query
const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        {/* Notifier components */}
        <Toaster />
        <Sonner />

        <BrowserRouter>
          <Routes>
            {/* الصفحة الرئيسية */}
            <Route path="/" element={<Index />} />

            {/* صفحة الفيديو */}
            <Route path="/video/:id" element={<VideoPage />} />

            {/* صفحة 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
