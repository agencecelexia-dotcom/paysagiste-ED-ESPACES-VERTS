import { company } from "@/data/company";
import { clientConfig } from "@/config/client.config";

export default function GoogleMap() {
  const query = encodeURIComponent(
    `${company.address.street}, ${company.address.postalCode} ${company.address.city}, France`
  );

  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl">
      <iframe
        title={`Localisation de ${clientConfig.NOM_ENTREPRISE}`}
        src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${query}&zoom=14`}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="absolute inset-0"
      />
    </div>
  );
}
