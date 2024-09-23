import NavMenu from "../components/NavMenu";
import Footer from "../components/Footer";
import Link from "next/link";
import Image from "next/image";

export default async function Info() {
  return (
    <div className="h-full">
      <NavMenu />
      <div className="bg-[rgba(227,224,220,0.85)]">
        <div className="min-h-[80vh] flex items-center md:mx-8 md:grid grid-cols-2">
          {/* Contact Section */}
          <div className="flex items-center  max-h-[80vh] ">
            <div>
              <h1 className="md:-mt-24 ">Contact</h1>
              <div className="grid grid-cols-8">
                <div className="col-span-3 flex items-center justify-center">
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
                <div className="col-span-5 flex items-center md:text-lg">
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
                        2regards.net
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Parcours professionnel Section */}
          <div className="py-8">
            <h1 className="">Parcours professionnel</h1>
            <ul className="space-y-2 mx-4">
              <li>
                <span className="text-lg">
                  <span className="font-medium">
                    Photographe pour 2regards{" "}
                  </span>
                </span>
                (Porto / depuis 2020)
              </li>
              <li>
                <span className="text-lg">
                  <span className="font-medium">
                    Exposition<span className="italic"> «Au café», </span>
                  </span>
                  Galeria 2regards atelier,
                </span>{" "}
                Porto, Portugal, 2024
              </li>
              <li>
                <span className="text-lg">
                  <span className="font-medium">
                    Exposition<span className="italic"> «La Passagère», </span>
                  </span>
                  Galeria 2regards atelier,
                </span>{" "}
                Porto, Portugal, 2023
              </li>
              <li>
                <span className="text-lg">
                  <span className="font-medium">
                    Exposition
                    <span className="italic"> «Sentimento Oceânico», </span>
                  </span>
                  Galeria 2regards atelier,
                </span>{" "}
                Porto, Portugal, 2022
              </li>
              <li>
                <span className="text-lg">
                  <span className="font-medium">
                    Exposition
                    <span className="italic"> «En Suspension(S)», </span>
                  </span>
                  Galeria Desvenda,
                </span>{" "}
                Porto, Portugal, 2021
              </li>
              <li>
                <span className="text-lg">
                  <span className="font-medium">
                    Exposition
                    <span className="italic"> «Rêverie Odisseia», </span>
                  </span>
                  Galeria Oppia,
                </span>{" "}
                Porto, Portugal, 2020
              </li>
              <li>
                <span className="text-lg">
                  <span className="font-medium">
                    Exposition<span className="italic"> «Isolé(S)», </span>
                  </span>
                  Cloître des billets,
                </span>{" "}
                Paris, 2019
              </li>
              <li>
                <span className="text-lg">
                  <span className="font-medium">
                    Exposition
                    <span className="italic"> «Mélancolie heureuse», </span>
                  </span>
                </span>{" "}
                Paris, 2018
              </li>
              <li>
                <span className="text-lg">
                  <span className="font-medium">
                    Exposition<span className="italic"> «Immortalem», </span>
                  </span>
                  Festival du film insolite,
                </span>{" "}
                Rênne le château, 2018
              </li>
              <li>
                <span className="text-lg">
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
                <span className="text-lg">
                  <span className="font-medium">Photographe indépendant</span>
                </span>{" "}
                depuis 2015 : commandes pour Géo magazine / La Cie du Veilleur /
                BNP Paribas / ONG «Union Romani»
              </li>
              <li>
                <span className="text-lg">
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
                <span className="text-lg">
                  <span className="font-medium">Photographe de Presse</span>
                </span>{" "}
                2014
              </li>
              <li>
                <span className="text-lg">
                  <span className="font-medium">Stagiaire JRI</span>
                </span>{" "}
                pour le Parisien
              </li>
              <li>
                <span className="text-lg">
                  <span className="font-medium">Stagiaire photographe</span>
                  <span className="italic"> «Objectif Une» </span>
                </span>
                pour l'Express et Figaro Rhône Alpes
              </li>
              <li>
                <span className="text-lg">
                  <span className="font-medium">Stagiaire photographe</span>
                  <span className="italic"> «La Tribune de Lyon» </span>
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="min-h-[40vh] min-w-screen relative mx-4">
          <Image
            src="/education1.jpg"
            alt="Education à l'image"
            fill
            className="object-cover"
          />
        </div>
        {/* Education à l’image Section */}
        <div className="my-8">
          <h1 className=" ">Éducation à l’image</h1>
          <ul className="mx-4 space-y-2 ">
            <li>
              LFIP (Lycée français international de Porto) / Intervenante
              artistique / Depuis 2022
            </li>
            <li>Workshops photographiques / 2regards atelier / Depuis 2022</li>
            <li>
              Parole de photographes / Coordinatrice pédagogique / Paris,
              2016-2018
            </li>
            <li>Atelier photo au collège Saint-Georges / Paris 2017-2018</li>
            <li>
              Atelier photo en école primaire (atelier bleu) Paris, 2017-2018
            </li>
            <li>
              Atelier photo / Objectif photo / Fraternité / Atelier en centre de
              loisirs primaire / maternelle, Paris, 2018
            </li>
            <li>
              Atelier photo / Objectif photo / Paris secret / Centre de loisirs
              primaire / maternelle / Paris, 2017
            </li>
            <li>
              Atelier photo en école primaire (atelier TAP), Paris 2016 – 2017
            </li>
            <li>
              Résidence Ecole du Feu rouge / Atelier photo avec les classes de
              CP / CE1 et CE2 / Saint-Pierre et Miquelon, 2015
            </li>
            <li>
              Workshops pour le centre culturel de Saint-Pierre et Miquelon,
              2015
            </li>
            <li>Workshops pour la maison des loisirs de Miquelon, 2015</li>
          </ul>
        </div>

        <div className="min-h-[40vh] min-w-screen relative mx-4">
          <Image
            src="/education.jpg"
            alt="Education à l'image"
            fill
            className="object-cover"
          />
        </div>
        {/* Formation Section */}
        <div className="py-8">
          <h1 className=" ">Formation</h1>
          <ul className="mx-4 space-y-2 ">
            <li>
              DU «Photographie documentaire et écritures transmédias»
              (Perpignan), 2015
            </li>
            <li>
              Diplômé d’un Européan Bachelor en Photographie, École de Condé,
              2014
            </li>
            <li>Icart Photo première année, 2011</li>
            <li>Licence Histoire de l’art (Paris-Sorbonne), 2010</li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
}
