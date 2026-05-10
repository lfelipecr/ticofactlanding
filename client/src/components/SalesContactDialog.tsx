import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { BUSINESS_TYPES, contactSalesSchema } from "@shared/contact-sales";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import type { z } from "zod";

type FormValues = z.input<typeof contactSalesSchema>;

function contactSalesEndpoint(): string {
  const base = `${window.location.origin}${import.meta.env.BASE_URL}`;
  return new URL("api/contact-sales", base).href;
}

export default function SalesContactDialog({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(contactSalesSchema),
    defaultValues: {
      fullName: "",
      companyName: "",
      email: "",
      whatsapp: "",
      businessType: "",
      comments: "",
    },
  });

  async function onSubmit(data: FormValues) {
    const payload = contactSalesSchema.parse({
      ...data,
      comments: data.comments?.trim() ? data.comments.trim() : undefined,
    });

    try {
      const res = await fetch(contactSalesEndpoint(), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const json = (await res.json().catch(() => ({}))) as { error?: string };

      if (!res.ok) {
        toast.error(
          typeof json.error === "string"
            ? json.error
            : "No se pudo enviar el mensaje."
        );
        return;
      }

      toast.success("Mensaje enviado. Nos pondremos en contacto pronto.");
      reset();
      setOpen(false);
    } catch {
      toast.error("Error de red. Verifique su conexión e intente de nuevo.");
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Contactar ventas</DialogTitle>
          <DialogDescription>
            Complete el formulario y nuestro equipo le responderá a la brevedad.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 pt-2">
          <div className="space-y-2">
            <Label htmlFor="sales-fullName">Nombre</Label>
            <Input
              id="sales-fullName"
              autoComplete="name"
              {...register("fullName")}
              aria-invalid={!!errors.fullName}
            />
            {errors.fullName && (
              <p className="text-sm text-destructive">{errors.fullName.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="sales-companyName">Nombre de la empresa</Label>
            <Input
              id="sales-companyName"
              autoComplete="organization"
              {...register("companyName")}
              aria-invalid={!!errors.companyName}
            />
            {errors.companyName && (
              <p className="text-sm text-destructive">
                {errors.companyName.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="sales-email">Correo electrónico</Label>
            <Input
              id="sales-email"
              type="email"
              autoComplete="email"
              {...register("email")}
              aria-invalid={!!errors.email}
            />
            {errors.email && (
              <p className="text-sm text-destructive">{errors.email.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="sales-whatsapp">WhatsApp</Label>
            <Input
              id="sales-whatsapp"
              inputMode="tel"
              placeholder="+506 0000 0000"
              {...register("whatsapp")}
              aria-invalid={!!errors.whatsapp}
            />
            {errors.whatsapp && (
              <p className="text-sm text-destructive">{errors.whatsapp.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="sales-businessType">Tipo de negocio</Label>
            <Controller
              name="businessType"
              control={control}
              render={({ field }) => (
                <Select
                  value={field.value || undefined}
                  onValueChange={field.onChange}
                >
                  <SelectTrigger
                    id="sales-businessType"
                    className="w-full"
                    aria-invalid={!!errors.businessType}
                  >
                    <SelectValue placeholder="Seleccione una opción" />
                  </SelectTrigger>
                  <SelectContent>
                    {BUSINESS_TYPES.map((t) => (
                      <SelectItem key={t} value={t}>
                        {t}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            />
            {errors.businessType && (
              <p className="text-sm text-destructive">
                {errors.businessType.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="sales-comments">Comentarios</Label>
            <Textarea
              id="sales-comments"
              rows={4}
              placeholder="Cuéntenos qué necesita…"
              {...register("comments")}
              aria-invalid={!!errors.comments}
            />
            {errors.comments && (
              <p className="text-sm text-destructive">{errors.comments.message}</p>
            )}
          </div>

          <DialogFooter className="gap-2 sm:gap-0 pt-2">
            <Button
              type="button"
              variant="outline"
              onClick={() => setOpen(false)}
              disabled={isSubmitting}
            >
              Cancelar
            </Button>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Enviando…
                </>
              ) : (
                "Enviar"
              )}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
