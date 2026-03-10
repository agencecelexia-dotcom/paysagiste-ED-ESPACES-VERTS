import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="pt-32 pb-20 min-h-[70vh] flex items-center">
      <Container className="text-center">
        <p className="text-8xl font-heading font-bold text-primary-200">404</p>
        <h1 className="mt-4 text-3xl font-bold text-neutral-900">
          Page non trouvée
        </h1>
        <p className="mt-4 text-neutral-600 max-w-md mx-auto">
          Désolé, la page que vous recherchez n&apos;existe pas ou a été déplacée.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href="/" variant="primary">
            Retour à l&apos;accueil
          </Button>
          <Button href="/contact" variant="outline">
            Nous contacter
          </Button>
        </div>
      </Container>
    </section>
  );
}
