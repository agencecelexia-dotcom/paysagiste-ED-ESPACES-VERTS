import type { CompanyInfo } from "@/types";
import { clientConfig } from "@/config/client.config";

export const company: CompanyInfo = {
  name: clientConfig.NOM_ENTREPRISE,
  legalName: clientConfig.NOM_LEGAL,
  siret: clientConfig.SIRET,
  address: {
    street: clientConfig.ADRESSE,
    city: clientConfig.VILLE,
    postalCode: clientConfig.CODE_POSTAL,
    region: clientConfig.REGION,
    country: clientConfig.PAYS,
  },
  phone: clientConfig.TELEPHONE,
  email: clientConfig.EMAIL,
  hours: clientConfig.HORAIRES,
  socialLinks: {
    facebook: clientConfig.FACEBOOK_URL,
    instagram: clientConfig.INSTAGRAM_URL,
    linkedin: clientConfig.LINKEDIN_URL,
    pinterest: clientConfig.PINTEREST_URL,
  },
  coordinates: {
    lat: parseFloat(clientConfig.LATITUDE),
    lng: parseFloat(clientConfig.LONGITUDE),
  },
};
