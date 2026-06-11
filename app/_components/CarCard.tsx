"use client";

import Link from "next/link";
import type { Car } from "@/lib/schemas";

export default function CarCard({ car, delay = 100 }: { car: Car; delay?: number }) {
  return (
    <div className="listing-one__single" data-aos="fade-up" data-aos-delay={delay}>
      <div className="listing-one__img" style={{ position: "relative", overflow: "hidden" }}>
        <img
          src={car.capa}
          alt={car.nome}
          style={{ width: "100%", height: "260px", objectFit: "cover" }}
        />
        <div className="listing-one__brand-name">
          <p>{car.categoriaLabel}</p>
        </div>
      </div>
      <div className="listing-one__content">
        <h3 className="listing-one__title">
          <Link href={`/modelos/${car.slug}`}>{car.nome}</Link>
        </h3>
        <div className="listing-one__meta-box-info">
          <ul className="list-unstyled listing-one__meta">
            <li>
              <div className="icon">
                <span className="icon-manual" />
              </div>
              <div className="text">
                <p>{car.specs.transmissao.split(" ")[0]}</p>
              </div>
            </li>
            <li>
              <div className="icon">
                <span className="icon-fuel-type" />
              </div>
              <div className="text">
                <p>{car.specs.combustivel}</p>
              </div>
            </li>
            <li>
              <div className="icon">
                <span className="icon-in-person" />
              </div>
              <div className="text">
                <p>{car.specs.lugares} lug.</p>
              </div>
            </li>
          </ul>
          <ul className="list-unstyled listing-one__meta listing-one__meta--two">
            <li>
              <div className="icon">
                <span className="icon-test-drive" />
              </div>
              <div className="text">
                <p>{car.specs.cargaUtil}</p>
              </div>
            </li>
            <li>
              <div className="icon">
                <span className="icon-Carrier" />
              </div>
              <div className="text">
                <p>{car.specs.motor}</p>
              </div>
            </li>
            <li>
              <div className="icon">
                <span className="icon-date" />
              </div>
              <div className="text">
                <p>{car.specs.ano}</p>
              </div>
            </li>
          </ul>
        </div>
        <div className="listing-one__car-rent-box">
          <p className="listing-one__car-rent">
            {car.precoLabel} <span>{car.preco}</span>
          </p>
        </div>
        <div className="listing-one__btn-box">
          <Link href={`/modelos/${car.slug}`} className="thm-btn">
            Ver Detalhes
            <span className="fas fa-arrow-right" />
          </Link>
        </div>
      </div>
    </div>
  );
}
