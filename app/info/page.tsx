import NavMenu from "../components/NavMenu";
import Footer from "../components/Footer";
import Link from "next/link";
import Image from "next/image";

export default async function Info() {
  return (
    <div className="h-full">
      <NavMenu />
      <div className="bg-[rgba(227,224,220,0.85)] min-h-screen p-4">
        {/* Contact Section */}
        <div className="my-8">
          <h1 className=" ">Contact</h1>
          <p className="mt-2 text-lg ">+33 06 79 76 14 88</p>
          <p className="text-lg ">cudevillemathilde@gmail.com</p>
          <p className="text-lg  mt-2">
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

        <div className="min-h-[70vh] min-w-screen relative mx-4">
          <Image
            src="/portrait_Mathilde.jpg"
            alt="Portrait Mathilde"
            fill
            className="object-contain"
          />
        </div>
        {/* Parcours professionnel Section */}
        <div className="my-8">
          <h1 className="">Parcours professionnel</h1>
          <ul className=" ml-5 mt-4 space-y-2 text-lg ">
            <li>Photographe pour 2regards (Porto / 2020)</li>
            <li>
              Exposition «Au café», galeria 2regards atelier, Porto, Portugal,
              2024
            </li>
            <li>
              Exposition «La Passagère», galeria 2regards atelier, Porto,
              Portugal, 2023
            </li>
            <li>
              Exposition «Sentimento Oceânico», galeria 2regards atelier, Porto,
              Portugal, 2022
            </li>
            <li>
              Exposition «En Suspension(S)», galeria Desvenda, Porto, Portugal,
              2021
            </li>
            <li>
              Exposition «Rêverie Odisseia», galeria Oppia, Porto, Portugal,
              2020
            </li>
            <li>Exposition «Isolé(S)», cloître des billets, Paris, 2019</li>
            <li>Exposition «Mélancolie heureuse», Paris, 2018</li>
            <li>
              Exposition «Immortalem», festival du film insolite, Rênne le
              château, 2018
            </li>
            <li>
              Documentaire photographique «La mélancolie des onze mille vierges»
              (Saint-Pierre et Miquelon), publié dans Géo-Collection
              (septembre/octobre 2017)
            </li>
            <li>
              Photographe indépendant depuis 2015 : commande pour Géo magazine /
              La Cie du Veilleur / Bnp Paribas / l’ONG «Union Romani»
            </li>
            <li>Photographe de mariage pour «Les brodeuses de l’instant»</li>
            <li>Photographe de Presse (2014)</li>
            <li>Stagiaire JRI pour le Parisien</li>
            <li>
              Stagiaire photographe pour l’agence «Objectif Une» l’Express et
              Figaro Rhône Alpes
            </li>
            <li>Stagiaire photographe pour «La Tribune de Lyon»</li>
          </ul>
        </div>

        <div className="min-h-[70vh] min-w-screen relative mx-4">
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
          <ul className="ml-5 mt-4 space-y-2 text-lg ">
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

        <div className="min-h-[70vh] min-w-screen relative mx-4">
          <Image
            src="/education.jpg"
            alt="Education à l'image"
            fill
            className="object-cover"
          />
        </div>
        {/* Formation Section */}
        <div className="my-8">
          <h1 className=" ">Formation</h1>
          <ul className="ml-5 mt-4 space-y-2 text-lg ">
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
