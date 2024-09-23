import NavMenu from "../components/NavMenu";
import Footer from "../components/Footer";
import Link from "next/link";
import Image from "next/image";

export default async function Info() {
  return (
    <div className="h-full">
      <NavMenu />
      <div className="bg-[rgba(227,224,220,0.85)]">
        <div className="min-h-[80vh] flex flex-col md:items-center md:mx-8 md:grid md:grid-cols-2">
          {/* Contact Section */}
          <div className="flex md:items-center  md:max-h-[80vh] ">
            <div>
              <h1 className="md:-mt-24 ">Contact</h1>
              <div className="md:grid md:grid-cols-8">
                <div className="max-w-[45vw] col-span-3 flex md:items-center md:justify-center">
                  <div className="relative pl-4">
                    <Image
                      src="/portrait_Mathilde.jpg"
                      alt="Portrait Mathilde"
                      width={500}
                      height={500}
                      className="w-full h-auto object-contain my-auto"
                      loading="lazy"
                    />
                  </div>
                </div>
                <div className="col-span-5 flex items-center md:text-base md:text-lg">
                  <div className=" my-4">
                    <p className=" ">+33 06 79 76 14 88</p>
                    <p className="">cudevillemathilde@gmail.com</p>
                    <p className="">
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

          <div className="py-8 text-[0.9rem] tracking-tight">
            <h1 className="">Parcours professionnel</h1>
            <ul className="space-y-2 mx-4">
              <li>
                <span className="text-base md:text-lg">
                  <span className="font-medium">
                    Photographe pour 2regards{" "}
                  </span>
                </span>
                (Porto / depuis 2020)
              </li>
              <li>
                <span className="text-base md:text-lg">
                  <span className="font-medium">
                    Exposition<span className="italic"> «Au café», </span>
                  </span>
                  Galeria 2regards atelier,
                </span>{" "}
                Porto, Portugal, 2024
              </li>
              <li>
                <span className="text-base md:text-lg">
                  <span className="font-medium">
                    Exposition<span className="italic"> «La Passagère», </span>
                  </span>
                  Galeria 2regards atelier,
                </span>{" "}
                Porto, Portugal, 2023
              </li>
              <li>
                <span className="text-base md:text-lg">
                  <span className="font-medium">
                    Exposition
                    <span className="italic"> «Sentimento Oceânico», </span>
                  </span>
                  Galeria 2regards atelier,
                </span>{" "}
                Porto, Portugal, 2022
              </li>
              <li>
                <span className="text-base md:text-lg">
                  <span className="font-medium">
                    Exposition
                    <span className="italic"> «En Suspension(S)», </span>
                  </span>
                  Galeria Desvenda,
                </span>{" "}
                Porto, Portugal, 2021
              </li>
              <li>
                <span className="text-base md:text-lg">
                  <span className="font-medium">
                    Exposition
                    <span className="italic"> «Rêverie Odisseia», </span>
                  </span>
                  Galeria Oppia,
                </span>{" "}
                Porto, Portugal, 2020
              </li>
              <li>
                <span className="text-base md:text-lg">
                  <span className="font-medium">
                    Exposition<span className="italic"> «Isolé(S)», </span>
                  </span>
                  Cloître des billets,
                </span>{" "}
                Paris, 2019
              </li>
              <li>
                <span className="text-base md:text-lg">
                  <span className="font-medium">
                    Exposition
                    <span className="italic"> «Mélancolie heureuse», </span>
                  </span>
                </span>{" "}
                Paris, 2018
              </li>
              <li>
                <span className="text-base md:text-lg">
                  <span className="font-medium">
                    Exposition<span className="italic"> «Immortalem», </span>
                  </span>
                  Festival du film insolite,
                </span>{" "}
                Rênne le château, 2018
              </li>
              <li>
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
              </li>
              <li>
                <span className="text-base md:text-lg">
                  <span className="font-medium">Photographe indépendant</span>
                </span>{" "}
                depuis 2015 : commandes pour Géo magazine / La Cie du Veilleur /
                BNP Paribas / ONG «Union Romani»
              </li>
              <li>
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
              </li>
              <li>
                <span className="text-base md:text-lg">
                  <span className="font-medium">Photographe de Presse</span>
                </span>{" "}
                2014
              </li>
              <li>
                <span className="text-base md:text-lg">
                  <span className="font-medium">Stagiaire JRI</span>
                </span>{" "}
                pour le Parisien, 2014
              </li>
              <li>
                <span className="text-base md:text-lg">
                  <span className="font-medium">Stagiaire photographe</span>
                  <span className="italic"> «Objectif Une» </span>
                </span>
                pour l&apos;Express et Figaro Rhône Alpes, 2013
              </li>
              <li>
                <span className="text-base md:text-lg">
                  <span className="font-medium">Stagiaire photographe</span>
                  <span className="italic"> «La Tribune de Lyon» </span>
                </span>, 2013
              </li>
            </ul>
          </div>
        </div>

        {/* image 2 */}
        <div className="min-h-[40vh] min-w-screen relative mx-4">
          <Image
            src="/education1.jpg"
            alt="Education à l'image"
            fill
            className="object-cover"
          />
        </div>
        {/* Second Section */}
        <div className="min-h-[80vh] flex flex-col items-center md:mx-8 md:grid md:grid-cols-2 gap-8">
          {/* Education à l’image Section */}
          <div className="flex flex-col justify-center">
            <div className="my-8">
              <h1 className="">Éducation à l’image</h1>
              <ul className="mx-4 space-y-2">
                <li>
                  <span className="text-base md:text-lg">
                    <span className="font-medium">LFIP</span> (Lycée français
                    international de Porto) / Intervenante artistique / Depuis
                    2022
                  </span>
                </li>
                <li>
                  <span className="text-base md:text-lg">
                    <span className="font-medium">
                      Workshops photographiques
                    </span>{" "}
                    / 2regards atelier / Depuis 2022
                  </span>
                </li>
                <li>
                  <span className="text-base md:text-lg">
                    <span className="font-medium">Parole de photographes</span>{" "}
                    / Coordinatrice pédagogique / Paris, 2016-2018
                  </span>
                </li>
                <li>
                  <span className="text-base md:text-lg">
                    <span className="font-medium">Atelier photo</span> au
                    collège Saint-Georges / Paris 2017-2018
                  </span>
                </li>
                <li>
                  <span className="text-base md:text-lg">
                    <span className="font-medium">Atelier photo</span> en école
                    primaire (atelier bleu), Paris, 2017-2018
                  </span>
                </li>
                <li>
                  <span className="text-base md:text-lg">
                    <span className="font-medium">Atelier photo</span> /
                    Objectif photo / Fraternité / Atelier en centre de loisirs
                    primaire / maternelle, Paris, 2018
                  </span>
                </li>
                <li>
                  <span className="text-base md:text-lg">
                    <span className="font-medium">Atelier photo</span> /
                    Objectif photo / Paris secret / Centre de loisirs primaire /
                    maternelle / Paris, 2017
                  </span>
                </li>
                <li>
                  <span className="text-base md:text-lg">
                    <span className="font-medium">Atelier photo</span> en école
                    primaire (atelier TAP), Paris 2016 – 2017
                  </span>
                </li>
                <li>
                  <span className="text-base md:text-lg">
                    <span className="font-medium">
                      Résidence Ecole du Feu rouge
                    </span>{" "}
                    / Atelier photo avec les classes de CP / CE1 et CE2 /
                    Saint-Pierre et Miquelon, 2015
                  </span>
                </li>
                <li>
                  <span className="text-base md:text-lg">
                    <span className="font-medium">Workshops</span> pour le
                    centre culturel de Saint-Pierre et Miquelon, 2015
                  </span>
                </li>
                <li>
                  <span className="text-base md:text-lg">
                    <span className="font-medium">Workshops</span> pour la
                    maison des loisirs de Miquelon, 2015
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Formation Section */}
          <div className="flex flex-col items-start">
            <div className="my-8">
              <h1 className="">Formation</h1>
              <ul className="mx-4 space-y-2">
                <li>
                  <span className="text-base md:text-lg">
                    <span className="font-medium">
                      DU «Photographie documentaire et écritures transmédias»
                    </span>{" "}
                    (Perpignan), 2015
                  </span>
                </li>
                <li>
                  <span className="text-base md:text-lg">
                    <span className="font-medium">
                      Diplômé d’un Européan Bachelor en Photographie
                    </span>
                    , École de Condé, 2014
                  </span>
                </li>
                <li>
                  <span className="text-base md:text-lg">
                    <span className="font-medium">Icart Photo</span> première
                    année, 2011
                  </span>
                </li>
                <li>
                  <span className="text-base md:text-lg">
                    <span className="font-medium">
                      Licence Histoire de l’art
                    </span>{" "}
                    (Paris-Sorbonne), 2010
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Image below both columns */}
        <div className="min-h-[40vh] min-w-screen relative mx-4 mt-8">
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
