-- =============================================
-- ED Espaces Verts - Supabase Schema + Seed
-- Exécuter dans Supabase Dashboard > SQL Editor
-- =============================================

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- PROJECTS
CREATE TABLE IF NOT EXISTS projects (
  id TEXT PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  category TEXT NOT NULL CHECK (category IN ('jardin', 'terrasse', 'piscine', 'cloture', 'elagage', 'amenagement-complet')),
  short_description TEXT NOT NULL DEFAULT '',
  full_description TEXT NOT NULL DEFAULT '',
  challenge TEXT NOT NULL DEFAULT '',
  solution TEXT NOT NULL DEFAULT '',
  images TEXT[] NOT NULL DEFAULT '{}',
  before_image TEXT,
  after_image TEXT,
  featured_image TEXT NOT NULL DEFAULT '',
  surface TEXT,
  duration TEXT,
  location TEXT NOT NULL DEFAULT '',
  year INTEGER NOT NULL DEFAULT EXTRACT(YEAR FROM NOW()),
  featured BOOLEAN NOT NULL DEFAULT false,
  services TEXT[] NOT NULL DEFAULT '{}',
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- SERVICES
CREATE TABLE IF NOT EXISTS services (
  id TEXT PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  short_description TEXT NOT NULL DEFAULT '',
  full_description TEXT NOT NULL DEFAULT '',
  features TEXT[] NOT NULL DEFAULT '{}',
  image TEXT NOT NULL DEFAULT '',
  icon TEXT NOT NULL DEFAULT 'leaf',
  "order" INTEGER NOT NULL DEFAULT 1,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- TESTIMONIALS
CREATE TABLE IF NOT EXISTS testimonials (
  id TEXT PRIMARY KEY DEFAULT uuid_generate_v4()::TEXT,
  client_name TEXT NOT NULL,
  client_role TEXT,
  client_photo TEXT,
  quote TEXT NOT NULL,
  rating INTEGER NOT NULL DEFAULT 5 CHECK (rating >= 1 AND rating <= 5),
  project_type TEXT NOT NULL DEFAULT '',
  date TEXT NOT NULL DEFAULT TO_CHAR(NOW(), 'YYYY-MM'),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- CONTACT SUBMISSIONS
CREATE TABLE IF NOT EXISTS contact_submissions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  service_type TEXT NOT NULL DEFAULT '',
  project_description TEXT NOT NULL DEFAULT '',
  budget TEXT NOT NULL DEFAULT '',
  status TEXT NOT NULL DEFAULT 'Nouveau' CHECK (status IN ('Nouveau', 'Contacté', 'En cours', 'Converti')),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- AUTO-UPDATE updated_at
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DO $$ BEGIN
  CREATE TRIGGER projects_updated_at BEFORE UPDATE ON projects FOR EACH ROW EXECUTE FUNCTION update_updated_at();
EXCEPTION WHEN duplicate_object THEN NULL;
END $$;

DO $$ BEGIN
  CREATE TRIGGER services_updated_at BEFORE UPDATE ON services FOR EACH ROW EXECUTE FUNCTION update_updated_at();
EXCEPTION WHEN duplicate_object THEN NULL;
END $$;

DO $$ BEGIN
  CREATE TRIGGER testimonials_updated_at BEFORE UPDATE ON testimonials FOR EACH ROW EXECUTE FUNCTION update_updated_at();
EXCEPTION WHEN duplicate_object THEN NULL;
END $$;

-- RLS
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE services ENABLE ROW LEVEL SECURITY;
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

DO $$ BEGIN
  CREATE POLICY "Public read projects" ON projects FOR SELECT USING (true);
EXCEPTION WHEN duplicate_object THEN NULL;
END $$;

DO $$ BEGIN
  CREATE POLICY "Public read services" ON services FOR SELECT USING (true);
EXCEPTION WHEN duplicate_object THEN NULL;
END $$;

DO $$ BEGIN
  CREATE POLICY "Public read testimonials" ON testimonials FOR SELECT USING (true);
EXCEPTION WHEN duplicate_object THEN NULL;
END $$;

DO $$ BEGIN
  CREATE POLICY "Public insert contact" ON contact_submissions FOR INSERT WITH CHECK (true);
EXCEPTION WHEN duplicate_object THEN NULL;
END $$;

-- INDEXES
CREATE INDEX IF NOT EXISTS idx_projects_slug ON projects(slug);
CREATE INDEX IF NOT EXISTS idx_projects_featured ON projects(featured) WHERE featured = true;
CREATE INDEX IF NOT EXISTS idx_services_order ON services("order");
CREATE INDEX IF NOT EXISTS idx_services_slug ON services(slug);
CREATE INDEX IF NOT EXISTS idx_contact_status ON contact_submissions(status);
CREATE INDEX IF NOT EXISTS idx_contact_created ON contact_submissions(created_at DESC);

-- =============================================
-- SEED DATA
-- =============================================

INSERT INTO projects (id, slug, title, category, short_description, full_description, challenge, solution, images, before_image, after_image, featured_image, surface, duration, location, year, featured, services) VALUES
('creation-jardin-grandpuits', 'creation-jardin-grandpuits', 'Création de Jardin à Grandpuits-Bailly-Carrois', 'jardin', 'Transformation d''un terrain nu en jardin paysager avec pose de gazon en plaques et aménagement complet.', 'Ce projet consistait à transformer un terrain en terre battue en un jardin verdoyant et accueillant. Après une préparation minutieuse du sol, nous avons posé un gazon en plaques pour un résultat immédiat et uniforme. L''ensemble a été complété par la pose d''une clôture composite pour délimiter la propriété avec élégance.', 'Le terrain était entièrement nu, sans aucune végétation. Le sol compact nécessitait un travail de préparation important avant la pose du gazon.', 'Nous avons retourné et nivelé le terrain, apporté du terreau fertile, puis posé le gazon en plaques pour un résultat immédiat. Une clôture composite anthracite a été installée pour finaliser l''aménagement.', ARRAY['/images/_template/portfolio/apres/projet-1-apres.jpg', '/images/_template/portfolio/apres/projet-2-apres.jpg', '/images/_template/portfolio/apres/projet-3-apres.jpg'], '/images/_template/portfolio/avant/projet-1-avant.jpg', '/images/_template/portfolio/apres/projet-1-apres.jpg', '/images/_template/portfolio/apres/projet-1-apres.jpg', '250 m²', '2 semaines', 'Grandpuits-Bailly-Carrois', 2025, true, ARRAY['creation-jardins']),
('terrasse-travertin-nangis', 'terrasse-travertin-nangis', 'Terrasse en Travertin à Nangis', 'terrasse', 'Aménagement d''une terrasse en travertin avec abords de piscine et haie taillée.', 'Ce projet a consisté à aménager les abords d''une piscine avec une terrasse en travertin ivoire. La pierre naturelle apporte élégance et chaleur, tandis que la taille soignée des haies existantes cadre parfaitement l''espace détente.', 'Les abords de la piscine étaient vieillissants et les haies avaient poussé de manière désordonnée.', 'Nous avons posé le travertin sur une dalle stabilisée, taillé les haies pour retrouver des lignes nettes, et créé une circulation fluide entre la maison, la terrasse et la piscine.', ARRAY['/images/_template/portfolio/apres/projet-2-apres.jpg', '/images/_template/portfolio/apres/projet-3-apres.jpg'], '/images/_template/portfolio/avant/projet-2-avant.jpg', '/images/_template/portfolio/apres/projet-2-apres.jpg', '/images/_template/portfolio/apres/projet-2-apres.jpg', '80 m²', '3 semaines', 'Nangis', 2025, true, ARRAY['amenagement-terrasses']),
('allee-amenagee-provins', 'allee-amenagee-provins', 'Allée Aménagée à Provins', 'terrasse', 'Rénovation d''une allée d''entrée avec bordures, gravier et désherbage complet des abords.', 'L''allée d''entrée de cette maison de ville était en mauvais état. Nous avons entièrement repris l''allée avec des bordures neuves, un gravier stabilisé et un désherbage soigné des massifs latéraux.', 'L''allée étroite longeant la façade était envahie de mauvaises herbes et le béton s''effritait.', 'Nous avons désherbé manuellement, posé des bordures en béton pour contenir le gravier, et traité les abords avec un paillage minéral pour limiter la repousse.', ARRAY['/images/_template/portfolio/apres/projet-3-apres.jpg', '/images/_template/portfolio/apres/projet-4-apres.jpg'], '/images/_template/portfolio/avant/projet-3-avant.jpg', '/images/_template/portfolio/apres/projet-3-apres.jpg', '/images/_template/portfolio/apres/projet-3-apres.jpg', '30 m²', '1 semaine', 'Provins', 2025, true, ARRAY['creation-jardins', 'amenagement-terrasses']),
('cloture-composite-bray', 'cloture-composite-bray', 'Clôture Composite à Bray-sur-Seine', 'cloture', 'Pose d''une clôture composite anthracite avec préparation du terrain et engazonnement.', 'Ce projet comprenait la remise en état complète d''un jardin en friche : débroussaillage, nivellement du terrain, pose d''une clôture composite anthracite sur toute la longueur de la propriété.', 'Le jardin était totalement en friche avec des mauvaises herbes hautes et aucune délimitation de propriété.', 'Après un débroussaillage complet, nous avons nivelé le terrain, installé les poteaux et panneaux composites sur fondations béton, puis posé le gazon.', ARRAY['/images/_template/portfolio/apres/projet-4-apres.jpg'], '/images/_template/portfolio/avant/projet-4-avant.jpg', '/images/_template/portfolio/apres/projet-4-apres.jpg', '/images/_template/portfolio/apres/projet-4-apres.jpg', '35 ml', '2 semaines', 'Bray-sur-Seine', 2025, false, ARRAY['clotures-murets']),
('elagage-propriete-montereau', 'elagage-propriete-montereau', 'Élagage de Grands Arbres à Montereau-Fault-Yonne', 'elagage', 'Élagage en hauteur et abattage sécurisé de grands arbres sur une propriété privée.', 'Intervention d''élagage sur plusieurs grands arbres menaçant la sécurité d''une propriété. Nos élagueurs grimpeurs sont intervenus en hauteur pour réaliser une taille de réduction et l''abattage contrôlé.', 'Les arbres étaient de grande hauteur et situés à proximité de la maison et des lignes électriques.', 'Nos élagueurs grimpeurs ont travaillé en hauteur avec harnais et cordes, démontant les arbres branche par branche. Un broyeur professionnel a évacué les déchets verts sur site.', ARRAY['/images/_template/portfolio/apres/projet-5-apres.jpg'], '/images/_template/portfolio/avant/projet-5-avant.jpg', '/images/_template/portfolio/apres/projet-5-apres.jpg', '/images/_template/portfolio/apres/projet-5-apres.jpg', '500 m²', '3 jours', 'Montereau-Fault-Yonne', 2025, false, ARRAY['elagage']),
('amenagement-complet-melun', 'amenagement-complet-melun', 'Aménagement Complet à Melun', 'amenagement-complet', 'Transformation totale d''une propriété : débroussaillage, création de pelouse, clôtures et entretien.', 'Ce projet d''envergure a consisté à reprendre entièrement les espaces extérieurs d''une grande propriété laissée à l''abandon. Débroussaillage intégral, nivellement, création de pelouse, taille des haies et des arbres.', 'Le terrain était complètement envahi par les herbes hautes et les ronces.', 'Une intervention en plusieurs phases : débroussaillage mécanique, évacuation des déchets verts, préparation du sol, semis de gazon et tonte de finition.', ARRAY['/images/_template/portfolio/apres/projet-6-apres.jpg', '/images/_template/portfolio/apres/projet-1-apres.jpg', '/images/_template/portfolio/apres/projet-2-apres.jpg'], '/images/_template/portfolio/avant/projet-6-avant.jpg', '/images/_template/portfolio/apres/projet-6-apres.jpg', '/images/_template/portfolio/apres/projet-6-apres.jpg', '1000 m²', '4 semaines', 'Melun', 2025, true, ARRAY['creation-jardins', 'amenagement-terrasses', 'clotures-murets', 'arrosage-automatique'])
ON CONFLICT (id) DO NOTHING;

INSERT INTO services (id, slug, title, short_description, full_description, features, image, icon, "order") VALUES
('creation-jardins', 'creation-de-jardins', 'Création de Jardins', 'Conception et réalisation de jardins sur mesure, alliant esthétisme et fonctionnalité pour créer votre espace de vie extérieur idéal.', 'Notre équipe de paysagistes conçoit des jardins uniques qui reflètent votre personnalité et s''intègrent harmonieusement à votre environnement. De l''étude paysagère initiale à la réalisation finale, nous vous accompagnons à chaque étape pour créer un jardin d''exception qui vous ressemble.', ARRAY['Étude paysagère personnalisée', 'Plans 3D de votre futur jardin', 'Sélection végétale adaptée au terroir', 'Réalisation clé en main', 'Suivi post-plantation'], '/images/_template/services/service-1.jpg', 'leaf', 1),
('amenagement-terrasses', 'amenagement-de-terrasses', 'Aménagement de Terrasses', 'Création de terrasses et allées en matériaux nobles pour sublimer vos espaces extérieurs et prolonger votre habitat.', 'Nous concevons des terrasses qui deviennent de véritables pièces à vivre en plein air. Pierre naturelle, bois exotique, dalles en grès cérame — nous maîtrisons tous les matériaux nobles.', ARRAY['Pierre naturelle et bois noble', 'Conception sur mesure', 'Éclairage d''ambiance intégré', 'Drainage professionnel', 'Garantie décennale'], '/images/_template/services/service-2.jpg', 'grid', 2),
('entretien-paysager', 'entretien-paysager', 'Entretien Paysager', 'Contrats d''entretien sur mesure pour préserver la beauté et la santé de vos espaces verts tout au long de l''année.', 'Un jardin d''exception mérite un entretien à la hauteur. Nos équipes d''experts assurent l''entretien régulier de vos espaces verts avec un soin méticuleux.', ARRAY['Contrats d''entretien annuels', 'Taille et tonte régulières', 'Fertilisation et traitements bio', 'Nettoyage saisonnier', 'Rapport d''intervention détaillé'], '/images/_template/services/service-3.jpg', 'scissors', 3),
('elagage', 'elagage-et-taille', 'Élagage & Taille', 'Élagage professionnel et taille artistique de vos arbres et haies pour garantir leur santé et leur beauté.', 'L''élagage est un art qui requiert expertise et précision. Nos arboristes certifiés interviennent sur tous types d''arbres pour une taille raisonnée, respectueuse de la physiologie de l''arbre.', ARRAY['Arboristes certifiés', 'Taille douce et raisonnée', 'Abattage sécurisé', 'Dessouchage et broyage', 'Intervention en hauteur'], '/images/_template/services/service-4.jpg', 'tree', 4),
('clotures-murets', 'clotures-et-murets', 'Clôtures & Murets', 'Pose de clôtures élégantes et construction de murets en pierre pour délimiter et embellir votre propriété.', 'Nous créons des clôtures et murets qui allient sécurité, intimité et esthétisme. Pierre sèche, gabions, bois, aluminium — nous travaillons avec les meilleurs matériaux.', ARRAY['Murets en pierre sèche', 'Clôtures en aluminium design', 'Gabions décoratifs', 'Portails et portillons', 'Intégration paysagère'], '/images/_template/services/service-5.jpg', 'fence', 5),
('arrosage-automatique', 'arrosage-automatique', 'Arrosage Automatique', 'Installation de systèmes d''arrosage automatique intelligents pour un jardin verdoyant avec une consommation d''eau maîtrisée.', 'Un système d''arrosage bien conçu est la clé d''un jardin en pleine santé. Nous installons des systèmes d''arrosage automatique de dernière génération.', ARRAY['Étude hydraulique complète', 'Programmateurs connectés', 'Goutte-à-goutte et aspersion', 'Capteurs météo intégrés', 'Économie d''eau jusqu''à 40%'], '/images/_template/services/service-6.jpg', 'droplet', 6)
ON CONFLICT (id) DO NOTHING;

INSERT INTO testimonials (id, client_name, client_role, quote, rating, project_type, date) VALUES
('1', 'Marie Dubois', 'Propriétaire à Grandpuits-Bailly-Carrois', 'ED ESPACES VERTS a transformé notre jardin en un véritable havre de paix. Ethan a su comprendre nos envies et les traduire en un espace magnifique adapté à notre maison de campagne.', 5, 'Création de jardin', '2024-06'),
('2', 'Famille Martin', 'Propriétaires à Nangis', 'Le résultat est spectaculaire ! L''équipe est professionnelle, ponctuelle et à l''écoute. Notre terrasse est parfaitement intégrée dans le paysage. Nous recommandons vivement.', 5, 'Abords de piscine', '2024-03'),
('3', 'M. Rousseau', 'Propriétaire à Provins', 'Notre aménagement paysager est magnifique et respectueux de l''environnement local. Le chantier a été impeccablement géré, dans les délais et le budget annoncés.', 5, 'Aménagement de terrasse', '2024-08')
ON CONFLICT (id) DO NOTHING;
