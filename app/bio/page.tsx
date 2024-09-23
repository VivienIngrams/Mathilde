import Image from "next/image";
import Footer from "../components/Footer";
import NavMenu from "../components/NavMenu";

export default async function Bio() {
  return (
    <div className="h-full">
      <NavMenu />
      <div className="bg-[rgba(227,224,220,0.85)] min-h-screen p-4">
        
        {/* Image Section */}
        <div className="min-h-[70vh] min-w-screen relative mx-4 my-8">
          <Image
            src="/portrait.jpg"
            alt="Portrait of Mathilde"
            fill
            className="object-contain"
          />
        </div>

        {/* Bio Content */}
        <div className="my-8">
          <p className="mt-4 text-lg leading-relaxed">
            J’ai rencontré Mathilde peu de temps après son arrivée au Portugal, elle venait à peine de poser ses valises qu’elle ouvrait déjà grands les yeux pour capter la magie ambiante de Porto et de la nature environnante.
          </p>
          <p className="mt-4 text-lg leading-relaxed">
            C’est en la voyant prendre des photos artistiques de notre quinta, située dans la vallée du Douro, que j’ai réalisé quel type de photographe elle était. Mathilde absorbe le monde qui l’entoure et le restitue en lui donnant une touche poétique très personnelle. Elle se dilue dans le décor avant d’en livrer les éléments les plus insolites qui sont souvent les plus parlants.
          </p>
          <p className="mt-4 text-lg leading-relaxed">
            Sa relation à la nature est très forte, elle la défend en en révélant la grandeur absolue, capturée dans les détails les plus ténus.
          </p>
          <p className="mt-4 text-lg leading-relaxed">
            Il en va de même de son rapport à l’humain. C’est en amorçant une collaboration photo-poésie sur le mode onirique que l’étendue de l’imaginaire de Mathilde m’est apparu, sans limites. Notre rêverie en commun a engendré des clichés improbables, sans rapport apparents, tels qu’un phare Saint-pierre-et-miquelonais, un homme nu dans une forêt ou une tente touarègue…
          </p>
          <p className="mt-4 text-lg leading-relaxed">
            Et pourtant, le fil conducteur, aussi peu visible soit-il, se déroule tout naturellement sous l’œil du spectateur. C’est dans cette création et cette recréation débridées que réside le talent unique de Mathilde.
          </p>
          <p className="mt-4 text-lg leading-relaxed">
            La découverte de ses travaux antérieurs et en cours m’ont conforté dans ce sentiment. Elle s’est dans un premier temps intéressée à l’insularité et aux territoires isolés, notamment à travers un documentaire sur l’archipel de Saint-pierre-et-Miquelon (« Les onze mille vierges »).
          </p>
          <p className="mt-4 text-lg leading-relaxed">
            Elle a ensuite réalisé un livre par correspondance en se prêtant au jeu du cadavre exquis avec une écrivaine restée à Paris. Cet ouvrage est un dialogue fugace photo/écriture qui questionne la notion de solitude.
          </p>
          <p className="mt-4 text-lg leading-relaxed">
            Ses travaux incluent également « En Suspension (S) », qui s’inscrit dans une démarche duale tout aussi libérée, et « Sentiment océanique » qui nous rappelle l’urgence climatique.
          </p>
          <p className="mt-4 text-lg leading-relaxed">
            Pour parler de la forme, la pratique artistique de Mathilde s’articule autour de la photographie argentique. Ses travaux oscillent entre photographie d’ambiance et photographie plasticienne, et ils sont souvent exposés dans des lieux inattendus, à son image.
          </p>
          <p className="mt-4 text-lg leading-relaxed">
            J’invite les amoureux de la poésie, de l’intimisme et de la singularité à y croiser le regard de Mathilde.
          </p>
          <p className="mt-4 text-lg leading-relaxed font-bold">
            Michel Le Roux, Poète et ami
          </p>
        </div>
        
      </div>
      <Footer />
    </div>
  );
}
