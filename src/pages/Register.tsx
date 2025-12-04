import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Icon from "@/components/ui/icon";
import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { toast } from "sonner";

const Register = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const plan = searchParams.get('plan') || 'free';
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    plan: plan
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://functions.poehali.dev/bd245bf9-3ea8-4090-b435-ade3f1e2bb1c', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (response.ok && result.success) {
        toast.success('Заявка отправлена! Мы свяжемся с вами в ближайшее время.');
        setTimeout(() => navigate('/'), 2000);
      } else {
        toast.error('Произошла ошибка при отправке формы');
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('Произошла ошибка при отправке формы');
    } finally {
      setIsSubmitting(false);
    }
  };

  const planNames = {
    free: 'Бесплатный',
    pro: 'Pro',
    premium: 'Premium'
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4 py-20">
      <Card className="glass p-8 max-w-lg w-full">
        <div className="text-center mb-8">
          <div className="w-16 h-16 rounded-xl gradient-primary flex items-center justify-center mx-auto mb-4">
            <Icon name="Sparkles" size={32} className="text-white" />
          </div>
          <h1 className="text-3xl font-bold mb-2">
            Попробовать <span className="text-gradient">StudyGrow</span>
          </h1>
          <p className="text-muted-foreground">
            Тариф: <span className="font-semibold text-foreground">{planNames[plan as keyof typeof planNames]}</span>
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name">Имя</Label>
            <Input
              id="name"
              type="text"
              placeholder="Ваше имя"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className="bg-background/50"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="your@email.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              className="bg-background/50"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Телефон (необязательно)</Label>
            <Input
              id="phone"
              type="tel"
              placeholder="+7 (___) ___-__-__"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="bg-background/50"
            />
          </div>

          <Button 
            type="submit" 
            className="w-full gradient-primary hover:opacity-90"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Отправка...' : 'Отправить заявку'}
          </Button>

          <Button 
            type="button" 
            variant="outline"
            className="w-full"
            onClick={() => navigate('/')}
          >
            Назад
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default Register;