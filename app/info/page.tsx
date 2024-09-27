import NavMenu from "../components/NavMenu";
import Footer from "../components/Footer";
import Link from "next/link";
import Image from "next/image";

export default async function Info() {
  return (
    <div className="h-full">
      <NavMenu />
      <div className="bg-[rgba(227,224,220,0.75)] p-4 md:px-12">
        <div className="min-h-[80vh] flex flex-col md:items-center   md:grid md:grid-cols-2">
          {/* Contact Section */}
          <div className="flex md:items-center  md:max-h-[80vh] ">
            <div>
              <h1 className="md:-mt-6">Contact</h1>
              <div className="md:grid md:grid-cols-8">
                <div className="col-span-5 flex items-center  md:text-lg">
                  <div className="  mb-6">
                    <p className="pb-2 ">+33 06 79 76 14 88</p>
                    <a href="mailto:cudevillemathilde@gmail.com" className="pb-2 ">cudevillemathilde@gmail.com</a>
                    <p className="">
                      Rua do Duque da Terceira 358
                    </p>
                    <p className="">
                       4300-096 Porto
                    </p>
                  </div>
                </div>
              </div>
              <h1 className=" ">2regards Atelier</h1>
              <div className="md:grid md:grid-cols-8">
                <div className="col-span-5 flex items-center  md:text-lg">
                  <div className="">
                    <p className=" ">
                      Dédié à la création publicitaire et aux arts visuels,
                      l&apos;Atelier 2regards a été fondé à Porto par la photographe
                      Mathilde Cudeville et le vidéaste Paulo Bastos.{" "}
                    </p>
                    <p className="pt-2">
                      <Link
                        href="https://2regards.net"
                        className=" underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        www.2regards.net
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Parcours professionnel Section */}

          <div className="py-8 md:py-0 tracking-tight">
            <h1 className="">Parcours professionnel</h1>
            <div className="space-y-2">
              <p>
                <span className="text-base md:text-lg">
                  <span className="font-medium">
                    Photographe pour 2regards{" "}
                  </span>
                </span>
                (Porto / depuis 2020)
              </p>
              <p>
                <span className="text-base md:text-lg">
                  <span className="font-medium">
                    Exposition<span className="italic"> «Au café», </span>
                  </span>
                  Galeria 2regards atelier,
                </span>{" "}
                Porto, Portugal, 2024
              </p>
              <p>
                <span className="text-base md:text-lg">
                  <span className="font-medium">
                    Exposition<span className="italic"> «La Passagère», </span>
                  </span>
                  Galeria 2regards atelier,
                </span>{" "}
                Porto, Portugal, 2023
              </p>
              <p>
                <span className="text-base md:text-lg">
                  <span className="font-medium">
                    Exposition
                    <span className="italic"> «Sentimento Oceânico», </span>
                  </span>
                  Galeria 2regards atelier,
                </span>{" "}
                Porto, Portugal, 2022
              </p>
              <p>
                <span className="text-base md:text-lg">
                  <span className="font-medium">
                    Exposition
                    <span className="italic"> «En Suspension(S)», </span>
                  </span>
                  Galeria Desvenda,
                </span>{" "}
                Porto, Portugal, 2021
              </p>
              <p>
                <span className="text-base md:text-lg">
                  <span className="font-medium">
                    Exposition
                    <span className="italic"> «Rêverie Odisseia», </span>
                  </span>
                  Galeria Oppia,
                </span>{" "}
                Porto, Portugal, 2020
              </p>
              <p>
                <span className="text-base md:text-lg">
                  <span className="font-medium">
                    Exposition<span className="italic"> «Isolé(S)», </span>
                  </span>
                  Cloître des billets,
                </span>{" "}
                Paris, 2019
              </p>
              <p>
                <span className="text-base md:text-lg">
                  <span className="font-medium">
                    Exposition
                    <span className="italic"> «Mélancolie heureuse», </span>
                  </span>
                </span>{" "}
                Paris, 2018
              </p>
              <p>
                <span className="text-base md:text-lg">
                  <span className="font-medium">
                    Exposition<span className="italic"> «Immortalem», </span>
                  </span>
                  Festival du film insolite,
                </span>{" "}
                Rênne le château, 2018
              </p>
              <p>
                <span className="text-base md:text-lg">
                  <span className="font-medium">
                    Documentaire photographique
                    <span className="italic">
                      {" "}
                      «La mélancolie des onze mille vierges»,{" "}
                    </span>
                  </span>
                </span>{" "}
                Saint-Pierre et Miquelon, publié dans Géo-Collection
                (septembre/octobre 2017)
              </p>
              <p>
                <span className="text-base md:text-lg">
                  <span className="font-medium">Photographe indépendant</span>
                </span>{" "}
                depuis 2015 : commandes pour Géo magazine / La Cie du Veilleur /
                BNP Paribas / ONG «Union Romani»
              </p>
              <p>
                <span className="text-base md:text-lg">
                  <span className="font-medium">
                    Photographe de mariage
                    <span className="italic">
                      {" "}
                      «Les brodeuses de l’instant»,{" "}
                    </span>
                  </span>
                </span>{" "}
                2015
              </p>
              <p>
                <span className="text-base md:text-lg">
                  <span className="font-medium">Photographe de Presse</span>
                </span>{" "}
                2014
              </p>
              <p>
                <span className="text-base md:text-lg">
                  <span className="font-medium">Stagiaire JRI</span>
                </span>{" "}
                pour le Parisien, 2014
              </p>
              <p>
                <span className="text-base md:text-lg">
                  <span className="font-medium">Stagiaire photographe</span>
                  <span className="italic"> «Objectif Une» </span>
                </span>
                pour l&apos;Express et Figaro Rhône Alpes, 2013
              </p>
              <p>
                <span className="text-base md:text-lg">
                  <span className="font-medium">Stagiaire photographe</span>
                  <span className="italic"> «La Tribune de Lyon» </span>
                </span>
                , 2013
              </p>
            </div>
          </div>
        </div>

        {/* image 1 */}
        <div className="min-h-[40vh] min-w-screen relative mt-4 md:mt-24">
          <Image
            src="/education1.jpg"
            alt="Education à l'image"
            fill
            className="object-cover"
          />
        </div>
        {/* Second Section */}
        <div className="flex flex-col items-center   md:grid md:grid-cols-2 gap-8">
          {/* Education à l’image Section */}
          <div className="flex flex-col justify-center">
            <div className="pt-8 md:my-8">
              <h1 className="">Éducation à l’image</h1>
              <ul className="space-y-2">
                <p>
                  <span className="text-base md:text-lg">
                    <span className="font-medium">
                      LFIP (Lycée français international de Porto)
                    </span>{" "}
                    / Intervenante artistique / Depuis 2022
                  </span>
                </p>
                <p>
                  <span className="text-base md:text-lg">
                    <span className="font-medium">
                      Workshops photographiques
                    </span>{" "}
                    , 2regards atelier, Depuis 2022
                  </span>
                </p>
                <p>
                  <span className="text-base md:text-lg">
                    <span className="font-medium">Parole de photographes</span>{" "}
                    / Coordinatrice pédagogique, Paris, 2016-2018
                  </span>
                </p>
                <p>
                  <span className="text-base md:text-lg">
                    <span className="font-medium">Atelier photo</span> au
                    collège Saint-Georges, Paris 2017-2018
                  </span>
                </p>
                <p>
                  <span className="text-base md:text-lg">
                    <span className="font-medium">Atelier photo</span> en école
                    primaire (atelier bleu), Paris, 2017-2018
                  </span>
                </p>
                <p>
                  <span className="text-base md:text-lg">
                    <span className="font-medium">Atelier photo</span> /
                    Objectif photo / Fraternité, Atelier en centre de loisirs
                    primaire/maternelle, Paris, 2018
                  </span>
                </p>
                <p>
                  <span className="text-base md:text-lg">
                    <span className="font-medium">Atelier photo</span> /
                    Objectif photo / Paris secret, Centre de loisirs
                    primaire/maternelle, Paris, 2017
                  </span>
                </p>
                <p>
                  <span className="text-base md:text-lg">
                    <span className="font-medium">Atelier photo</span> en école
                    primaire (atelier TAP), Paris 2016 – 2017
                  </span>
                </p>
                <p>
                  <span className="text-base md:text-lg">
                    <span className="font-medium">
                      Résidence Ecole du Feu rouge
                    </span>{" "}
                    , Atelier photo avec les classes de CP, CE1 et CE2,
                    Saint-Pierre et Miquelon, 2015
                  </span>
                </p>
                <p>
                  <span className="text-base md:text-lg">
                    <span className="font-medium">Workshops</span> pour le
                    centre culturel de Saint-Pierre et Miquelon, 2015
                  </span>
                </p>
                <p>
                  <span className="text-base md:text-lg">
                    <span className="font-medium">Workshops</span> pour la
                    maison des loisirs de Miquelon, 2015
                  </span>
                </p>
              </ul>
            </div>
          </div>

          {/* Formation Section */}
          <div className="flex flex-col items-start md:ml-12">
            <div className="">
              <h1 className="">Formation</h1>
              <div className="space-y-2">
                <p>
                  <span className="text-base md:text-lg">
                    <span className="font-medium">
                      DU{" "}
                      <span className="italic">
                        «Photographie documentaire et écritures transmédias»
                      </span>
                    </span>{" "}
                    (Perpignan), 2015
                  </span>
                </p>
                <p>
                  <span className="text-base md:text-lg">
                    <span className="font-medium">
                      Diplômé d’un Européan Bachelor en Photographie
                    </span>
                    , École de Condé, 2014
                  </span>
                </p>
                <p>
                  <span className="text-base md:text-lg">
                    <span className="font-medium">Icart Photo</span> première
                    année, 2011
                  </span>
                </p>
                <p>
                  <span className="text-base md:text-lg">
                    <span className="font-medium">
                      Licence Histoire de l’art
                    </span>{" "}
                    (Paris-Sorbonne), 2010
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Image below both columns */}
        <div className="min-h-[40vh] min-w-screen relative mt-12">
          <Image
            src="/education.jpg"
            alt="Education à l'image"
            fill
            className="object-cover"
          />
        </div>
      </div>

      <Footer />
    </div>
  );
}
