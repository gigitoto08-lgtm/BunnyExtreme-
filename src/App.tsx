// src/App.tsx
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import VideoPage from "./pages/video"; // يجب أن يكون هذا ملفك video.tsx

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      {/* Toaster notifications */}
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

export default App;
