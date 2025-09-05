import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { sendEmailWithPDF } from "@/lib/emailService";
import { toast } from "sonner";
import { Loader2, CheckCircle, Mail } from "lucide-react";

// Form validation schema
const emailSchema = z.object({
  email: z
    .string()
    .min(1, "E-posta adresi gerekli")
    .email("Geçerli bir e-posta adresi girin"),
});

type EmailFormData = z.infer<typeof emailSchema>;

const CallToAction = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<EmailFormData>({
    resolver: zodResolver(emailSchema),
  });



  const onSubmit = async (data: EmailFormData) => {
    setIsSubmitting(true);
    
    try {
      const success = await sendEmailWithPDF({
        to_email: data.email,
        message: "Merhaba! Talep ettiğiniz 'Almanya'ya Şartlı Kabul Öğrenci Rehberi' e-kitabı ektedir. Bu kitapta Almanya'ya öğrenci olarak gelme sürecindeki tüm deneyimlerimi ve ipuçlarını bulacaksınız. İyi okumalar!",
      });

      if (success) {
        setIsSuccess(true);
        toast.success("🎉 E-kitap başarıyla gönderildi!", {
          description: "E-postanızı kontrol edin. E-kitap ek dosya olarak gönderildi.",
        });
        reset();
        
        // 4 saniye sonra success state'ini sıfırla
        setTimeout(() => setIsSuccess(false), 4000);
      } else {
        throw new Error("E-posta gönderilirken bir hata oluştu");
      }
    } catch (error) {
      console.error("Email gönderme hatası:", error);
      toast.error("❌ E-kitap gönderilemedi", {
        description: "Lütfen e-posta adresinizi kontrol edip tekrar deneyin.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="cta-section" className="py-12 bg-primary container rounded-3xl relative">
      {/* Blur Overlay */}
      <div className="absolute inset-0 bg-primary/80 backdrop-blur-sm rounded-3xl z-10 flex items-center justify-center">
        <div className="text-center px-6">
          <div className="p-4 bg-white/20 rounded-full mb-4 inline-block">
            <Mail className="h-12 w-12 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">Çok Yakında</h3>
          <p className="text-white/80 text-lg">E-kitap tamamlandığında burada olacak!</p>
          <p className="text-white/60 text-sm mt-2">Kitap yazımı devam ediyor... 📚✍️</p>
        </div>
      </div>
      
      {/* Original Content (blurred) */}
      <div className="filter blur-sm pointer-events-none">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-white mb-4">
            E-Kitabım 📖
          </h2>
          <p className="text-gray-300 mb-2">
            Kendi Tecrübelerimi Paylaştığım, Almanya'ya şartlı kabul öğrencisi olarak gelirken var olan süreç için gerekli bütün bilgileri içerisinde barındıran e-kitabım.
          </p>
          <p className="text-white/80 text-sm">
            ✨ E-posta adresinizi girin, PDF kitabı direkt e-postanıza gönderelim!
          </p>
        </div>

        {/* Success Message */}
        {isSuccess && (
          <div className="mb-6 p-4 bg-green-500/20 border border-green-500/30 rounded-lg">
            <div className="flex items-center justify-center gap-2 text-green-300">
              <CheckCircle className="h-5 w-5" />
              <span className="font-medium">E-kitap başarıyla gönderildi!</span>
            </div>
            <p className="text-green-200 text-sm mt-1">
              PDF dosyası e-postanıza ek olarak gönderildi 📧
            </p>
          </div>
        )}

        {/* Email Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="max-w-xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-center items-start gap-4">
            <div className="flex-1 w-full">
              <Input
                {...register("email")}
                type="email"
                placeholder="E-posta adresinizi girin"
                className="border-gray-300 text-gray-800 focus:ring-2 focus:ring-white/50"
                disabled={isSubmitting}
              />
              {errors.email && (
                <p className="text-red-300 text-sm mt-1 text-left">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div className="flex gap-2">
              <Button 
                type="submit"
                size="default" 
                className="bg-white text-black hover:bg-gray-900 hover:text-white transition-all duration-300 min-w-[140px]"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Gönderiliyor...
                  </>
                ) : (
                  "📖 Kitabı Gönder"
                )}
              </Button>
            </div>
          </div>
        </form>

        {/* Info Text */}
        <p className="text-gray-400 text-xs mt-4">
          📧 E-postanız sadece kitap göndermek için kullanılacak. PDF direkt e-postanıza ek dosya olarak gönderilecektir.
        </p>
      </div>
      </div>
    </section>
  );
};

export default CallToAction;
