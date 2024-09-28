import Image from "next/image";
import Footer from "../components/Footer";
import NavMenu from "../components/NavMenu";

export default async function Bio() {
  return (
    <div className="h-full">
      <NavMenu />
      <div className="bg-[rgba(227,224,220,0.75)] min-h-[80vh]">
        {/* Layout Section */}
        <div className="grid grid-cols-1 lg:grid-cols-10 p-4 md:p-0 md:mr-12">
          {/* Image */}
          <div
            className="hidden md:block relative w-full min-h-[40vh] md:max-h-[92vh] my-4 md:my-0 md:col-span-4"
          >
            <Image
              src="/portrait.jpg"
              alt="Portrait of Mathilde"
              height={500}
              width={300}
              className="h-full w-full object-cover px-24 md:mx-auto"
              loading="lazy"
            />
          </div>

          {/* Left Column: First half of the text */}
          <div className="flex md:items-end lg:pr-4 col-span-3 space-y-2">
            <div>
              <p >
                <span className="font-semibold italic">
                  J’ai rencontré Mathilde
                </span>{" "}
                peu de temps après son arrivée au Portugal, elle venait à peine
                de poser ses valises qu’elle ouvrait déjà grands les yeux pour
                capter la magie ambiante de Porto et de la nature environnante.
              </p>
               {/* Image */}
          <div
            className="md:hidden relative w-full py-4 "
          >
            <Image
              src="/portrait.jpg"
              alt="Portrait of Mathilde"
              height={500}
              width={300}
              className="h-full w-full object-cover md:px-24 md:mx-auto"
              loading="lazy"
            />
          </div>
              <p className="pb-2">
                C’est en la voyant prendre des photos artistiques de notre
                quinta, située dans la vallée du Douro, que j’ai réalisé quel
                type de photographe elle était.{" "}
                <span className="font-semibold italic">
                  Mathilde absorbe le monde qui l’entoure
                </span>{" "}
                et le restitue en lui donnant une touche poétique très
                personnelle. Elle se dilue dans le décor avant d’en livrer les
                éléments les plus insolites qui sont souvent les plus parlants.
              </p>
              <p className="pb-2">
                Sa relation à la nature est très forte, elle la défend en en
                révélant la grandeur absolue, capturée dans les détails les plus
                ténus.
              </p>
              <p className="pb-2">
                Il en va de même de son rapport à l’humain. C’est en amorçant
                une collaboration photo-poésie sur{" "}
                <span className="font-semibold italic">
                  le mode onirique que l’étendue de l’imaginaire de Mathilde
                  m’est apparu, sans limites.
                </span>{" "}
                Notre rêverie en commun a engendré des clichés improbables, sans
                rapport apparents, tels qu’un phare Saint-pierre-et-miquelonais,
                un homme nu dans une forêt ou une tente touarègue…
              </p>
              
            </div>
          </div>

          {/* Right Column: Second half of the text */}
          <div className="flex items-end lg:pl-4 col-span-3 space-y-2">
            <div>
            <p className="pb-2">
                Et pourtant, le fil conducteur, aussi peu visible soit-il, se
                déroule tout naturellement sous l’œil du spectateur. C’est dans
                cette création et cette recréation débridées que réside le
                talent unique de Mathilde.
              </p>
              <p className="pb-2">
                La découverte de ses travaux antérieurs et en cours m’ont
                conforté dans ce sentiment. Elle s’est dans un premier temps
                intéressée à l’insularité et aux territoires isolés, notamment à
                travers un documentaire sur l’archipel de
                Saint-pierre-et-Miquelon (« Les onze mille vierges »).
              </p>
              <p className="pb-2">
                Elle a ensuite réalisé un livre par correspondance en se prêtant
                au jeu du cadavre exquis avec une écrivaine restée à Paris. Cet
                ouvrage est un dialogue fugace photo/écriture qui questionne la
                notion de solitude.
              </p>
              <p className="pb-2">
                Ses travaux incluent également « En Suspension (S) », qui
                s’inscrit dans une démarche duale tout aussi libérée, et «
                Sentiment océanique » qui nous rappelle l’urgence climatique.
              </p>
              <p className="pb-2">
                Pour parler de la forme,{" "}
                <span className="font-semibold italic">
                  la pratique artistique de Mathilde s’articule autour de la
                  photographie argentique.
                </span>{" "}
                Ses travaux oscillent entre photographie d’ambiance et
                photographie plasticienne, et ils sont souvent exposés dans des
                lieux inattendus, à son image.
              </p>
              <p>
                J’invite les amoureux de la poésie, de l’intimisme et de la
                singularité à y croiser le regard de Mathilde.
              </p>
              <p className="font-bold font-serif text-xl pt-1">
                Michel Le Roux, poète et ami
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
