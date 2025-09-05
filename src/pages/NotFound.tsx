import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Home, Search } from "lucide-react";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-hero">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* 404 Number with animation */}
        <div className="mb-8 relative">
          <h1 className="text-8xl sm:text-9xl font-heading font-bold text-foreground opacity-20 select-none">
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <Search className="h-16 w-16 text-muted-foreground animate-pulse" />
          </div>
        </div>

        {/* Error Message */}
        <div className="space-y-4 mb-8">
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-foreground">
            Sayfa Bulunamadı
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-md mx-auto">
            Aradığınız sayfa mevcut değil. Muhtemelen taşınmış, silinmiş veya yanlış bir bağlantıya tıkladınız.
          </p>
          <p className="text-sm text-muted-foreground/80">
            Aranan sayfa: <code className="bg-muted px-2 py-1 rounded text-xs">{location.pathname}</code>
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button asChild size="lg" className="bg-gradient-primary border-0">
            <Link to="/" className="flex items-center gap-2">
              <Home className="h-4 w-4" />
              Ana Sayfaya Dön
            </Link>
          </Button>
          
          <Button 
            asChild 
            variant="outline" 
            size="lg"
            onClick={() => window.history.back()}
          >
            <button className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Geri Git
            </button>
          </Button>
        </div>

        {/* Decorative Elements */}
        <div className="mt-12 opacity-50">
          <div className="flex justify-center space-x-2">
            <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
            <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
